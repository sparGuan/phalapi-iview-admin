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
        <td class="pd_x">结果</td>
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
      let txt = '手机号无记录'
      switch (t) {
        case '0':
          txt = '手机号无记录'
          break
        case '1':
          txt = '省份验证一致，城市验证一致'
          break
        case '2':
          txt = '省份验证一致，城市验证不一致'
          break
        case '3':
          txt = '省份验证不一致，城市验证不一致'
          break
      }
      return txt
    }
  }
}
</script>
