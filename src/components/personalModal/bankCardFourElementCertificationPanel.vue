<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号</td>
        <td class="pd_x">结果</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.records.uno }}</td>
        <td class="pd_x">{{ Number(data.records.result.code) | change }}</td>
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
        case 1:
          txt = '认证信息匹配'
          break
        case 2:
          txt = '认证信息不匹配'
          break
        case 3:
          txt = '无法验证'
          break
        case -1:
          txt = '异常情况'
          break
      }
      return txt
    }
  }
}
</script>
