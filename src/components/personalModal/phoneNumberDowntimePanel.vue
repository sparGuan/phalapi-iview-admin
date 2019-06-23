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
        <td class="pd_x">停机次数</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{data.records.uno}}</td>
        <td class="pd_x">{{data.records.result.quotaValue | change}}</td>
        <td class="pd_x">{{data.records.result.msg}}</td>
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
      let txt = '数据不存在'
      switch (t) {
        case 'A':
          txt = '0'
          break
        case 'B':
          txt = '(0,3]'
          break
        case 'C':
          txt = '(3,5]'
          break
        case 'D':
          txt = '(5,+ ]'
          break
        case 'MDN_NOT_EXIST':
          txt = '手机号码不存在'
          break
        case 'DATA_NOT_EXIST':
          txt = '数据不存在'
          break
      }
      return txt
    }
  }
}
</script>
