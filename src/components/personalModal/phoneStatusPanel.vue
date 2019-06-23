<style lang="stylus" scoped>
.phonestatuswrap
  //
</style>

<template>
  <div class="commontablewrap phonestatuswrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="4">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">真实姓名</td>
        <td class="pd_x">身份证号码</td>
        <td class="pd_x">手机号</td>
        <td class="pd_x">结果描述</td>
      </tr>
      <tr>
        <td class="pd_x">{{data.name}}</td>
        <td class="pd_x">{{data.identityNo}}</td>
        <td class="pd_x">{{data.mobileNo}}</td>
        <td class="pd_x">{{data.resultMsg | filterMsg(data.resultMsg, data.resultCode)}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PhoneStatusPanel',
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
    filterMsg (v, v2) {
      return v
    }
  }
}
</script>
