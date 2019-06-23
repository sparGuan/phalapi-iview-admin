<style lang="stylus" scoped>
.phonetimewrap {
  //
}
</style>

<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号</td>
        <td class="pd_x">姓名</td>
        <td class="pd_x">身份证</td>
        <td class="pd_x">银行卡号</td>
        <td class="pd_x">查询结果</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.records.uno }}</td>
        <td class="pd_x">{{ data.records.result.name }}</td>
        <td class="pd_x">{{ data.records.result.idCardCore }}</td>
        <td class="pd_x">{{ data.records.result.accountNo }}</td>
        <td class="pd_x">{{ data.records.result.result | change }}</td>
        <td class="pd_x">{{ data.records.result.message }}</td>
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
      let txt = '无法验证'
      switch (t) {
        case '1':
          txt = '认证信息匹配'
          break
        case '2':
          txt = '认证信息不匹配'
          break
        case '3':
          txt = '无法验证'
          break
        case '-1':
          txt = '无法验证'
          break
      }
      return txt
    }
  }
}
</script>
