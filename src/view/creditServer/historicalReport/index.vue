<!--
  历史报告查询
  @author hvv
  @date 2018-11-15
  -->
<style lang="less" scoped>
</style>
<template>
  <div>
    <!-- 历史报告查询 -->
    <div class="listBox">
      <p class="boxTitle">
        <span class="primary">历史报告查询</span>
        <span class="logIpts font_12">
          姓名：<input type="text" class="nameIpt" />&nbsp; 身份证号：<input
            type="number"
            class="idNumIpt"
            placeholder="支持后四位搜索"
          />&#x3000;
          <b class="searchBtn primary_bg white pointer">搜索</b></span
        >
      </p>
      <div class="table">
        <Table border :columns="columns1" :data="data1"></Table>
        <div class="pageBox font_12">
          <Page :total="100" show-total show-elevator />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'historicalReport',
  data () {
    return {
      nameIpt: '',
      idNumIpt: '',
      columns1: [{
        title: '姓名',
        key: 'name',
        align: 'center'
      },
      {
        title: '身份证号码',
        key: 'idNum',
        align: 'center',
        width: 170
      },
      {
        title: '申请编号',
        key: 'applyNum',
        align: 'center'
      },
      {
        title: '报告时间',
        key: 'reportDate',
        align: 'center'
      },
      {
        title: '报告来源',
        key: 'reportOrigin',
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
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h(
              'Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => { }
                }
              },
              '报告'
            )
          ])
        }
      }
      ],
      data1: [{}]
    }
  },
  methods: {

  }
}
</script>
