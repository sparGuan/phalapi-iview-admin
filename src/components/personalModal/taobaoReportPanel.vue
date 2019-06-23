<style lang="stylus" scoped>
.taobaoreportwrap
  small
    background: #196CE6
    color: #fff
    height: 16px
    line-height: 16px
    font-size: 12px
    border-radius: 8px
    padding: 2px 6px
</style>

<template>
  <div class="commontablewrap taobaoreportwrap">
    <table class="full border">
      <tr>
        <td colspan="7" class="title pd_x">
          <h2>报告基本信息</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x">查询人姓名</td>
        <td class="pd_x">查询人身份证</td>
        <td class="pd_x">数据源</td>
        <td class="pd_x">数据获取时间</td>
        <td class="pd_x">时间范围</td>
        <td class="pd_x">匹配账号姓名</td>
        <td class="pd_x">匹配账号身份证</td>
      </tr>
      <tr v-for="(list,index) in data.dataDescribeList" :key="index">
        <td class="pd_x">{{list.name}}</td>
        <td class="pd_x">{{list.id_card}}</td>
        <td class="pd_x">{{list.dataSource}}</td>
        <td class="pd_x">{{list.dataFetchTime}}</td>
        <td class="pd_x">{{list.timeSpan}}个月</td>
        <td class="pd_x">{{list.nameCheck}}</td>
        <td class="pd_x">{{list.identityCheck}}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="pd_x">类型</td>
        <td class="pd_x">使用频率</td>
        <td class="pd_x">使用月份</td>
        <td class="pd_x">累计金额</td>
        <td class="pd_x">订单数</td>
        <td class="pd_x">月平均消费</td>
        <td class="pd_x">平均每笔消费</td>
      </tr>
      <tr>
        <td class="pd_x">{{data.summaryConsume.totalAnalysis.item_name}}</td>
        <td class="pd_x">{{data.summaryConsume.totalAnalysis.analysisResult}}
          <Tooltip v-if="data.summaryConsume.totalAnalysis.analysisReason" :content="data.summaryConsume.totalAnalysis.analysisReason" placement="top">
            <i class="help">?</i>
          </Tooltip>
        </td>
        <td class="pd_x">{{data.summaryConsume.totalAnalysis.activeMonthNum}}个月</td>
        <td class="pd_x">¥{{data.summaryConsume.totalAnalysis.amount}}</td>
        <td class="pd_x">{{data.summaryConsume.totalAnalysis.ordersNum}}</td>
        <td class="pd_x">¥{{data.summaryConsume.totalAnalysis.averageConsumeMonth}}</td>
        <td class="pd_x">¥{{data.summaryConsume.totalAnalysis.averageOrderPrice}}</td>
      </tr>
      <tr>
        <td class="pd_x">{{data.summaryConsume.selfAnalysis.item_name}}</td>
        <td class="pd_x">{{data.summaryConsume.selfAnalysis.analysisResult}}
          <Tooltip v-if="data.summaryConsume.selfAnalysis.analysisReason" :content="data.summaryConsume.selfAnalysis.analysisReason" placement="top">
            <i class="help">?</i>
          </Tooltip>
        </td>
        <td class="pd_x">{{data.summaryConsume.selfAnalysis.activeMonthNum}}个月</td>
        <td class="pd_x">¥{{data.summaryConsume.selfAnalysis.amount}}</td>
        <td class="pd_x">{{data.summaryConsume.selfAnalysis.ordersNum}}</td>
        <td class="pd_x">¥{{data.summaryConsume.selfAnalysis.averageConsumeMonth}}</td>
        <td class="pd_x">¥{{data.summaryConsume.selfAnalysis.averageOrderPrice}}</td>
      </tr>
    </table>

    <!-- 淘宝基础信息【taoBaoBasicInfo】  -->
    <table v-if="type == 'tb'" class="full border">
      <tr>
        <td colspan="4" class="title pd_x">淘宝基本信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">真实姓名：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.realName}}</td>
        <td class="quarter half pd_x">登录邮箱：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.emai}}</td>
      </tr>
      <tr>
        <td class="pd_x">身份证号：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.identityNo}}</td>
        <td class="pd_x">绑定手机：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.mobile}}</td>
      </tr>
      <tr>
        <td class="pd_x">用户名：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.username}}</td>
        <td class="pd_x">会员等级：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.vipLevel}}</td>
      </tr>
      <tr>
        <td class="pd_x">昵称：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.nickName}}</td>
        <td class="pd_x">成长值：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.growthValue}}</td>
      </tr>
      <tr>
        <td class="pd_x">性别：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.gender}}</td>
        <td class="pd_x">信用积分：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.creditScore}}</td>
      </tr>
      <tr>
        <td class="pd_x">出生日期：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.birthday}}</td>
        <td class="pd_x">好评率：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.favorableRate}}</td>
      </tr>
      <tr>
        <td class="pd_x">认证渠道：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.identityChannel}}</td>
        <td class="pd_x">安全等级：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.securityLeve}}</td>
      </tr>
      <tr>
        <td class="pd_x">是否实名认证：</td>
        <td class="pd_x">{{data.taoBaoBasicInfo.identityStatus}}</td>
        <td class="pd_x"></td>
        <td class="pd_x"></td>
      </tr>
    </table>

    <!-- 京东基础信息【jdBasicInfo】  -->
    <table v-if="type == 'jd'" class="full border">
      <tr>
        <td colspan="4" class="title pd_x">京东基本信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">会员名：</td>
        <td class="pd_x">{{data.jdBasicInfo.nickName}}</td>
        <td class="quarter half pd_x">会员等级：</td>
        <td class="pd_x">{{data.jdBasicInfo.vipLevel}}</td>
      </tr>
      <tr>
        <td class="pd_x">手机号：</td>
        <td class="pd_x">{{data.jdBasicInfo.mobileNo}}</td>
        <td class="pd_x">邮箱：</td>
        <td class="pd_x">{{data.jdBasicInfo.email}}</td>
      </tr>
      <tr>
        <td class="pd_x">真实姓名：</td>
        <td class="pd_x">{{data.jdBasicInfo.realName}}</td>
        <td class="pd_x">证件号码：</td>
        <td class="pd_x">{{data.jdBasicInfo.idCard}}</td>
      </tr>
      <tr>
        <td class="pd_x">成长值：</td>
        <td class="pd_x">{{data.jdBasicInfo.growthValue}}</td>
        <td class="pd_x">安全等级：</td>
        <td class="pd_x">{{data.jdBasicInfo.securityLevel}}</td>
      </tr>
    </table>

    <!-- 淘宝支付信息【taoBaoPayInfo】 -->
    <table v-if="type == 'tb'" class="full border">
      <tr>
        <td class="title pd_x" colspan="4">淘宝绑定支付宝信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">支付宝账号：</td>
        <td class="quarter pd_x">{{data.taoBaoPayInfo.username}}</td>
        <td class="quarter half pd_x">实名认证姓名：</td>
        <td class="quarter pd_x">{{data.taoBaoPayInfo.realName}}</td>
      </tr>
      <tr>
        <td class="pd_x">邮箱：</td>
        <td class="pd_x">{{data.taoBaoPayInfo.email}}</td>
        <td class="pd_x">实名认证身份证号：</td>
        <td class="pd_x">{{data.taoBaoPayInfo.identityNo}}</td>
      </tr>
      <tr>
        <td class="pd_x">绑定手机：</td>
        <td class="pd_x">{{data.taoBaoPayInfo.mobile}}</td>
        <td class="pd_x">实名认证状态：</td>
        <td class="pd_x">{{data.taoBaoPayInfo.identityStatus}}</td>
      </tr>
      <tr>
        <td class="pd_x">账户余额：</td>
        <td class="pd_x">{{data.taoBaoPayInfo.accBal}}</td>
        <td class="pd_x">花呗总额度：</td>
        <td class="pd_x">{{data.taoBaoPayInfo.huabeiAvailableLimit}}</td>
      </tr>
      <tr>
        <td class="pd_x">余额宝：</td>
        <td class="pd_x">{{data.taoBaoPayInfo.yuebaoBal}}</td>
        <td class="pd_x">花呗可消费额度：</td>
        <td class="pd_x">{{data.taoBaoPayInfo.huabeiLimit}}</td>
      </tr>
      <tr>
        <td class="pd_x">历史累计收益：</td>
        <td class="pd_x">{{data.taoBaoPayInfo.yuebaoHisIncome}}</td>
        <td class="pd_x"></td>
        <td class="pd_x"></td>
      </tr>
    </table>

    <!-- 京东绑定银行卡信息【jdBankInfo】 -->
    <table v-if="type == 'jd'" class="full border">
      <tr>
        <td class="title pd_x" colspan="4">京东绑定银行卡信息</td>
      </tr>
      <tr>
        <td class="pd_x">姓名</td>
        <td class="pd_x">银行卡</td>
        <td class="pd_x">银行卡类型</td>
        <td class="pd_x">电话</td>
      </tr>
      <tr v-for="(list, index) in data.jdBankInfo">
        <td class="pd_x">{{list.name}}</td>
        <td class="pd_x">{{list.bankCardID}}</td>
        <td class="pd_x">{{list.cardType}}</td>
        <td class="pd_x">{{list.tel}}</td>
      </tr>
      <tr v-if="!data.jdBankInfo.length" colspan="4">
        <td class="tc">未发现</td>
      </tr>
    </table>

    <!-- 京东白条【jdBaiTiaoInfo】 -->
    <table v-if="type == 'jd'" class="full border">
      <tr>
        <td class="title pd_x" colspan="4">京东白条</td>
      </tr>
      <tr>
        <td class="pd_x">是否开通：</td>
        <td class="pd_x">{{data.jdBaiTiaoInfo.isOpen}}</td>
        <td class="pd_x">小白信用：</td>
        <td class="pd_x">{{data.jdBaiTiaoInfo.xiaoBaiCreditValue}}</td>
      </tr>
      <tr>
        <td class="pd_x">总额度：</td>
        <td class="pd_x">{{data.jdBaiTiaoInfo.creditlimit}}</td>
        <td class="pd_x">可用额度：</td>
        <td class="pd_x">{{data.jdBaiTiaoInfo.availablelimit}}</td>
      </tr>
      <tr>
        <td class="pd_x">白条消费：</td>
        <td class="pd_x">{{data.jdBaiTiaoInfo.biaoTiaoConSum}}</td>
        <td class="pd_x">月还款：</td>
        <td class="pd_x">{{data.jdBaiTiaoInfo.monthloan}}</td>
      </tr>
    </table>

    <!-- 收货地址综合分析【addressConsumeList】 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="9">收货地址综合分析</td>
      </tr>
      <tr>
        <td class="pd_x">#</td>
        <td class="pd_x">地址
          <small>相似地址合并数量</small>
        </td>
        <td class="pd_x">一年内使用频率</td>
        <td class="pd_x">姓名</td>
        <td class="pd_x">电话</td>
        <td class="pd_x">消费次数</td>
        <td class="pd_x">消费金额</td>
        <td class="pd_x">最早下单</td>
        <td class="pd_x">最近下单</td>
      </tr>
      <tr v-for="(list, index) in data.addressConsumeList">
        <td class="pd_x">{{index + 1}}</td>
        <td class="pd_x">{{list.address}}
          <Poptip v-if="list.similarAddressNum" word-wrap width="400" trigger="hover" :content="list.similarAddresses || '未发现'">
            <small style="cursor:pointer">{{list.similarAddressNum}}</small>
          </Poptip>
        </td>
        <td class="pd_x nowrap">{{list.useFrequency}}
          <Tooltip v-if="list.frequencyReason" :content="list.frequencyReason" placement="top">
            <i class="help">?</i>
          </Tooltip>
        </td>
        <td class="pd_x nowrap">{{list.linkman}}</td>
        <td class="pd_x nowrap">{{list.tel}}</td>
        <td class="pd_x">
          <div class="progress" :style="{width: list.ordersPercent + '%'}"></div>
          <span>{{list.ordersNum}}次（{{list.ordersPercent}}%）</span>
        </td>
        <td class="pd_x">
          <div class="progress" :style="{width: list.amountPercent + '%'}"></div>
          <span>¥{{list.amount}}（{{list.amountPercent}}%）</span>
        </td>
        <td class="pd_x nowrap">{{list.earliest_time}}</td>
        <td class="pd_x nowrap">{{list.latest_time}}</td>
      </tr>
      <tr v-if="!data.addressConsumeList.length">
        <td class="tc" colspan="9">未发现</td>
      </tr>
    </table>

    <!-- 收货地址统计（月消费次数和金额）【addressConsumeList by month】 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" :colspan="data.addressConsumeList.length ? data.addressConsumeList[0].monthRecoders.length + 2 : 1">收货地址统计（月消费次数和金额）</td>
      </tr>
      <tr v-if="data.addressConsumeList.length">
        <td class="pd_x">#</td>
        <td class="quarter pd_x">地址\日期</td>
        <td v-for="(list, index) in data.addressConsumeList[0].monthRecoders" class="pd_x">{{list.monthStr}}</td>
      </tr>
      <tr v-for="(list, index) in data.addressConsumeList">
        <td class="pd_x">{{index + 1}}</td>
        <td class="pd_x">{{list.address}}</td>
        <td v-for="(num, index) in list.monthRecoders" class="pd_x" v-html="num.ordersNum && num.amount ? num.ordersNum + '次<br>￥' + num.amount : '-'"></td>
      </tr>
      <tr v-if="!data.addressConsumeList.length">
        <td class="tc">未发现</td>
      </tr>
    </table>

    <!-- 收货地址统计（消费类型）【addressConsumeList by type】  -->
    <table class="full border">
      <tr>
        <td class="title pd_x" :colspan="data.addressConsumeList.length ? data.addressConsumeList[0].goodsTypeList_forAddress.length + 2 : 1">收货地址统计（消费类型）</td>
      </tr>
      <tr v-if="data.addressConsumeList.length">
        <td class="pd_x">#</td>
        <td class="pd_x">地址</td>
        <td class="pd_x" :colspan="data.addressConsumeList[0].goodsTypeList_forAddress.length">消费类型</td>
      </tr>
      <tr v-for="(list, index) in data.addressConsumeList">
        <td class="pd_x">{{index + 1}}</td>
        <td class="pd_x">{{list.address}}</td>
        <td v-for="(num, index) in list.goodsTypeList_forAddress" class="pd_x" v-html="num.typeName && num.amount ? num.typeName + '<br>￥' + num.amount : '-'"></td>
      </tr>
      <tr v-if="!data.addressConsumeList.length">
        <td class="tc">未发现</td>
      </tr>
    </table>

    <!-- 商品消费类型统计【goodsTypeConsumeList】  -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="4">商品种类消费统计</td>
      </tr>
      <tr>
        <td class="pd_x">类别</td>
        <td class="pd_x">消费次数</td>
        <td class="pd_x">消费金额</td>
        <td class="pd_x">商品数量</td>
      </tr>
      <tr v-for="list in data.goodsTypeConsumeList">
        <td class="pd_x">{{list.typeName}}</td>
        <td class="pd_x">{{list.ordersNum}}次</td>
        <td class="pd_x">¥{{list.amount}}</td>
        <td class="pd_x">{{list.goodsQuantity}}件</td>
      </tr>
      <tr v-if="!data.goodsTypeConsumeList.length">
        <td class="tc" colspan="4">未发现</td>
      </tr>
    </table>

    <!-- 月消费统计【monthConsumeList】 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" :colspan="data.monthConsumeList.length ? data.monthConsumeList[0].goodsTypeList_forMonth.length + 3 : 1">月消费统计</td>
      </tr>
      <tr>
        <td class="pd_x">月份</td>
        <td class="pd_x">消费次数</td>
        <td class="pd_x">消费金额</td>
        <td class="pd_x" :colspan="data.monthConsumeList[0].goodsTypeList_forMonth.length">消费类型</td>
      </tr>
      <tr v-for="list in data.monthConsumeList">
        <td class="pd_x">{{list.monthStr}}</td>
        <td class="pd_x">{{list.ordersNum}}次</td>
        <td class="pd_x">¥{{list.amount}}</td>
        <td v-for="(num, index) in list.goodsTypeList_forMonth" class="pd_x" v-html="num.typeName && num.amount ? num.typeName + '<br>￥' + num.amount : '-'"></td>
      </tr>
      <tr v-if="!data.monthConsumeList.length">
        <td class="tc">未发现</td>
      </tr>
    </table>

    <!-- 图表展示（by javascript） -->
    <h1 class="tc">消费兴趣与行为分布</h1>
    <div class="full chart" id="interest_chart"></div>
    <h1 class="tc">消费价格区间</h1>
    <div class="full chart" id="summary_chart"></div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入饼图
require('echarts/lib/chart/pie')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legendScroll')

export default {
  name: 'TaobaoReport',
  data () {
    return {

    }
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    type: {
      type: String,
      default: 'tb'
    }
  },
  beforeMount () {
    let len = 1
    this.data.addressConsumeList.forEach(e => {
      if (e.goodsTypeList_forAddress.length > len) {
        len = e.goodsTypeList_forAddress.length
      }
    })
    this.data.addressConsumeList.forEach(e => {
      while (e.goodsTypeList_forAddress.length < len) {
        e.goodsTypeList_forAddress.push({
          amount: 0,
          goodsQuantity: 0,
          ordersNum: 0,
          typeName: ''
        })
      }
    })

    let len2 = 1
    this.data.monthConsumeList.forEach(e => {
      if (e.goodsTypeList_forMonth.length > len2) {
        len2 = e.goodsTypeList_forMonth.length
      }
    })
    this.data.monthConsumeList.forEach(e => {
      while (e.goodsTypeList_forMonth.length < len2) {
        e.goodsTypeList_forMonth.push({
          amount: 0,
          goodsQuantity: 0,
          ordersNum: 0,
          typeName: ''
        })
      }
    })
  },
  mounted () {
    this.$nextTick(() => {
      let interestData = this.data.interestList
      let inter_xdata = []
      let inter_val = []
      for (let inter of interestData) {
        inter_xdata.push(inter.name)
        inter_val.push({ name: inter.name, value: inter.distribution })
      }

      echarts.init(document.getElementById('interest_chart')).setOption({
        legend: {
          orient: 'vertical',
          x: 'left',
          y: 'center',
          data: inter_xdata
        },
        tooltip: { formatter: '{b}({d}%)' },
        series: [
          {
            name: '兴趣列表',
            type: 'pie',
            radius: ['60%', '80%'],
            data: inter_val
          }
        ]
      })

      let summaryData = this.data.summaryConsume.orderPriceLevels
      let sum_xdata = []
      let sum_val = []
      for (let inter of summaryData) {
        sum_xdata.push(inter.levelDescribe)
        sum_val.push({ name: inter.levelDescribe, value: inter.ordersNum })
      }

      echarts.init(document.getElementById('summary_chart')).setOption({
        tooltip: { formatter: '消费区间：{b}元<br>消费次数：{c}次' },
        xAxis: { type: 'category', data: sum_xdata },
        yAxis: { type: 'value' },
        series: {
          type: 'bar',
          barMaxWidth: '35px',
          data: sum_val
        }
      })
    })
  }
}
</script>
