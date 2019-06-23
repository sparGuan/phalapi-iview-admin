<!--
 系统公告
 @author hvv
 @date 2018-11-16
 -->
<style lang="less" scoped>
</style>
<template>
  <div>
    <div class="listBox">
      <p class="boxTitle">
        <span class="primary"
          >系统公告查询 <Icon type="md-notifications-outline" size="22"
        /></span>
        <span class="logIpts font_12">
          发布时间：<DatePicker
            type="date"
            size="small"
            @on-change="releaseDate"
            placeholder="Select date"
            style="width: 130px"
          ></DatePicker
          >&#x3000; 关键字：<input
            type="number"
            class="keywrodIpt"
            v-model="keywrod"
          />&#x3000;
          <b class="searchBtn primary_bg white pointer" @click="search">搜索</b>
        </span>
      </p>
      <Table border :columns="columns1" :data="data1"></Table>
      <div class="pageBox font_12">
        <Page :total="100" show-total show-elevator />
      </div>
    </div>
    <!-- 查看详情 -->
    <Modal v-model="modal1" width="460">
      <p slot="header" style="color:#2d8cf0;">
        <Icon type="ios-information-circle"></Icon>
        <span>公告详情</span>
      </p>
      <div class="modalContent">
        <p class="bottom_15">
          发布时间：<input
            type="text"
            class="middleIpt"
            v-model="releaseVal"
            :disabled="true"
          />
        </p>
        <p class="bottom_15">
          公告主题：<input
            type="text"
            class="middleIpt"
            v-model="theme"
            :disabled="true"
          />
        </p>
        <p class="bottom_15">
          公关稿内容：<input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            class="largeIpt"
            v-model="content"
            :disabled="true"
          />
        </p>
      </div>
    </Modal>
    <!-- 删除modal -->
    <Modal v-model="modal2" @ok="confirmDel">
      <p>确定要删除吗？</p>
    </Modal>
  </div>
</template>
<script>
export default {
  name: 'systemNotice',
  data () {
    return {
      keywrod: '',
      modal1: false,
      modal2: false,
      theme: '',
      releaseVal: '',
      content: '',
      columns1: [{
        title: '发布时间',
        key: 'releaseDate',
        align: 'center'
      }, {
        title: '主题',
        key: 'theme',
        align: 'center'
      }, {
        title: '操作',
        key: 'handle',
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              style: {
                marginRight: '5px'
              },
              on: {
                click: () => {
                  this.modal1 = true
                }
              }
            }, '查看详情'),
            h('Button', {
              props: {
                type: 'error',
                size: 'small'
              },
              on: {
                click: () => {
                  this.modal2 = true
                }
              }
            }, '删除')
          ])
        }
      }],
      data1: [{}]
    }
  },
  methods: {
    releaseDate () { },
    search () { },
    confirmDel () {
    }
  }
}
</script>
