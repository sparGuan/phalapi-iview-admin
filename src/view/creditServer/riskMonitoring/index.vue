<!--
风险监控
@author:hvv
@date:2018-11-15
 -->
<style lang='less' scoped>
.active {
  color: #2d8cf0;
}
.tableTitle:first-of-type b {
  margin-right: 20px;
}
.filterItem {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .riskFiles {
    b {
      padding: 2px 5px;
      background: #2d8cf0;
      color: #fff;
      border-radius: 3px;
    }
  }
}
.riskGaugeList {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    width: calc(90% / 3);
    height: 300px;
    border: 1px solid rgb(240, 237, 237);
    background: #f6f6f8;
    margin-bottom: 30px;
  }
}
</style>
<template>
  <div class="riskWrap">
    <div class="listBox">
      <p class="boxTitle">
        <span class="pointer tableTitle"
          ><b
            :class="{ active: isMonitoring === index }"
            @click="checkTable(index)"
            v-for="(item, index) in titleList"
            >{{ item.value }}</b
          ></span
        >
        <span class="logIpts font_12">
          姓名：<input type="text" class="nameIpt" v-model="name" />&nbsp;
          身份证号：<input
            type="number"
            class="idNumIpt"
            v-model="idNum"
            placeholder="支持后四位搜索"
          />&#x3000;
          <b class="searchBtn primary_bg white pointer" @click="search">搜索</b>
        </span>
      </p>
      <p class="filterItem">
        <span v-show="isMonitoring === 0">
          <b class="primary">人员筛选：</b>
          <RadioGroup v-model="personnelFilter">
            <Radio
              :label="index"
              v-for="(item, index) in filterRadioList"
              :key="index"
              >{{ item.label }}</Radio
            >
          </RadioGroup>
        </span>
        <span class="riskFiles pointer">
          <b @click="modal1 = true">风险信息批量下载</b>&#x3000;<b
            @click="modal2 = true"
            >推送提醒</b
          ></span
        >
      </p>
      <div class="tableList">
        <div class="riskTimeTable" v-if="isMonitoring === 0">
          <Table border :columns="columns1" :data="data1"></Table>
          <div class="pageBox font_12">
            <Page :total="100" show-total show-elevator />
          </div>
        </div>
        <div class="noMonitorTable" v-else>
          <Table border :columns="columns2" :data="data2"></Table>
          <div class="pageBox font_12">
            <Page :total="100" show-total show-elevator />
          </div>
        </div>
      </div>
    </div>
    <div class="listBox">
      <p class="boxTitle"><span class="primary">风险监控罗盘</span></p>
      <ul class="riskGaugeList">
        <li :id="dynamicId(index)" v-for="(item, index) in gaugeList"></li>
      </ul>
    </div>
    <!-- 风险信息批量下载Modal -->
    <Modal v-model="modal1" width="460">
      <p slot="header" style="color:#2d8cf0;">
        <Icon type="ios-information-circle"></Icon>
        <span>风险信息批量下载</span>
      </p>
      <div class="modalContent">
        <p>
          风险发生时间范围：
          <DatePicker
            type="date"
            @on-change="startDate"
            placeholder="Select date"
            style="width: 140px"
          ></DatePicker>
          <i class="border_basic">-</i>
          <DatePicker
            type="date"
            @on-change="endDate"
            placeholder="Select date"
            style="width: 140px"
          ></DatePicker>
        </p>
        <p class="top_15 primary">注意：风险发生时间范围跨度不超过30天</p>
      </div>
      <div slot="footer">
        <Button type="primary" long>下载</Button>
      </div>
    </Modal>
    <!-- 推送提醒Modal -->
    <Modal v-model="modal2" width="350">
      <p slot="header" style="color:#2d8cf0;">
        <Icon type="ios-information-circle"></Icon>
        <span>推送提醒设置</span>
      </p>
      <div class="modalContent">
        <p>提醒邮箱：<input type="email" placeholder="邮箱设置" /></p>
        <p class="top_15 primary">注意：风险发生时间范围跨度不超过30天</p>
      </div>
      <div slot="footer">
        <Button type="primary" long>保存</Button>
      </div>
    </Modal>
    <!-- 加入监控 Modal-->
    <Modal v-model="modal3" width="460">
      <p slot="header" style="color:#2d8cf0;">
        <Icon type="ios-information-circle"></Icon>
        <span>加入监控提示</span>
      </p>
      <div class="modalContent">
        <p class="bottom_15">
          手机号码：<input type="number" placeholder="" class="smallIpt" />
        </p>
        <p class="bottom_15">
          工作单位：<input type="text" placeholder="" class="middleIpt" />
        </p>
        <p class="bottom_15">
          常用地址：<input
            type="text"
            placeholder="详细地址"
            class="largeIpt"
          />
        </p>
        <p class="primary">
          完善借款人以上信息，即可将借款人纳入风险监控，实时掌握信用变化
        </p>
      </div>
      <div slot="footer">
        <Button type="primary" long>确认</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入仪表盘组件
require('echarts/lib/chart/gauge')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'riskMonitoring',
  data () {
    return {
      isMonitoring: 0,
      name: '',
      idNum: '',
      personnelFilter: 0,
      modal1: false,
      modal2: false,
      modal3: false,
      gaugeList: [{}, {}, {}, {}, {}, {}],
      titleList: [{
        value: '实时监控列表'
      },
      {
        value: '未监控列表'
      }
      ],
      filterRadioList: [{
        label: '全部'
      },
      {
        label: '高风险'
      },
      {
        label: '重点关注'
      }
      ],
      columns1: [{
        title: '姓名',
        key: 'name',
        align: 'center'
      },
      {
        title: '身份证号',
        key: 'idNumber',
        align: 'center'
      },
      {
        title: '监控开始日期',
        key: 'startDate',
        align: 'center'
      },
      {
        title: '最新风险发生时间',
        key: 'riskStartTime',
        align: 'center'
      },
      {
        title: '风险发生次数',
        key: 'riskNum',
        align: 'center'
      },
      {
        title: '高风险发生次数',
        key: 'highriskNum',
        align: 'center'
      },
      {
        title: '状态',
        key: 'status',
        align: 'center'
      },
      {
        title: '操作人',
        key: 'operator',
        align: 'center'
      },
      {
        title: '操作',
        key: 'handle',
        align: 'center'
      }
      ],
      data1: [{}],
      columns2: [{
        title: '姓名',
        key: 'name',
        align: 'center'
      },
      {
        title: '身份证号',
        key: 'idNumber',
        align: 'center'
      },
      {
        title: '借款日期',
        key: 'borrowDate',
        align: 'center'
      },
      {
        title: '到期日期',
        key: 'expireDate',
        align: 'center'
      },
      {
        title: '距到期剩余天数',
        key: 'residueNum',
        align: 'center'
      },
      {
        title: '操作',
        key: 'handle',
        align: 'center'
      }
      ],
      data2: [{}]
    }
  },
  methods: {
    /**
     * 列表筛选
     */
    search () { },
    checkTable (tab) {
      if (tab) {
        this.isMonitoring = 1
      } else {
        this.isMonitoring = 0
      }
    },
    startDate () { },
    endDate () { },
    drawGauge () {
      var arr = [{
        value: '20',
        title: '10'
      },
      {
        value: '30',
        title: '30'
      },
      {
        value: '40',
        title: '60'
      },
      {
        value: '50',
        title: '90'
      },
      {
        value: '60',
        title: '120'
      },
      {
        value: '70',
        title: '180'
      }
      ]
      var charts = []
      for (var i = 0; i < arr.length; i++) {
        var option = {
          title: {
            left: 'center',
            top: '20',
            text: arr[i].title + '天',
            textStyle: {
              fontSize: 22
            }
          },
          series: [{
            name: '业务指标',
            type: 'gauge',
            radius: '70%',
            center: ['50%', '60%'],
            axisLine: {
              lineStyle: {
                width: 12
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 10
              }
            },
            splitLine: {
              length: 10,
              lineStyle: {
                width: 3
              }
            },
            pointer: {
              length: '70%',
              width: 6
            },
            detail: {
              formatter: '{value}%',
              textStyle: {
                fontSize: 22
              }
            },
            data: [{
              value: arr[i].value,
              name: '发生风险人数'
            }]
          }]
        }
        charts[i] = echarts.init(document.getElementById('gauge_' + i + ''))
        charts[i].setOption(option)
      }
    },
    dynamicId (index) {
      return 'gauge_' + index
    }
  },
  mounted () {
    this.drawGauge()
  }
}
</script>
