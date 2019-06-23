<style lang="stylus" scoped>
.phonetimewrap
  //
</style>

<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="3">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{data.records.uno}}</td>
        <td class="pd_x">{{data.records.result.message}}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="8">负债详情</td>
      </tr>
      <tr>
        <td class="pd_x">借款类型</td>
        <td class="pd_x">借款金额</td>
        <td class="pd_x">当前状态</td>
        <td class="pd_x">借款状态</td>
        <td class="pd_x">借款日期</td>
        <td class="pd_x">欠款金额</td>
        <td class="pd_x">借款期数</td>
        <td class="pd_x">数据反馈方</td>
      </tr>
      <tr>
        <td class="pd_x">{{data.records.result.debtDetailList.borrowType | change}}</td>
        <td class="pd_x">{{data.records.result.debtDetailList.borrowAmount}}</td>
        <td class="pd_x">{{data.records.result.debtDetailList.repayState}}</td>
        <td class="pd_x">{{data.records.result.debtDetailList.borrowState | change2}}</td>
        <td class="pd_x">{{data.records.result.debtDetailList.contractDate}}</td>
        <td class="pd_x">{{data.records.result.debtDetailList.arrearsAmount}}</td>
        <td class="pd_x">{{data.records.result.debtDetailList.loanPeriod}}</td>
        <td class="pd_x">{{data.records.result.debtDetailList.companyCode}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PhoneTimePanel',
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
    }
  },
  mounted () {

  },
  filters: {
    change (t) {
      let txt = '数据方未反馈'
      switch (t) {
        case '0':
          txt = '数据方未反馈'
          break
        case '1':
          txt = '拒贷'
          break
        case '2':
          txt = '批贷已放款'
          break
        case '4':
          txt = '借款人放弃申请'
          break
        case '5':
          txt = '审核中'
          break
        case '6':
          txt = '待放款'
          break
      }
      return txt
    },
    change2 (t) {
      let txt = '数据方未反馈'
      switch (t) {
        case '0':
          txt = '数据方未反馈'
          break
        case '1':
          txt = '拒贷'
          break
        case '2':
          txt = '批贷已放款'
          break
        case '4':
          txt = '借款人放弃申请'
          break
        case '5':
          txt = '审核中'
          break
        case '6':
          txt = '待放款'
          break
      }
      return txt
    }
  }
}
</script>
