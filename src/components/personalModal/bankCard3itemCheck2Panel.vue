<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">身份证号码</td>
        <td class="pd_x">银行卡号码</td>
        <td class="pd_x">银行预留手机号</td>
        <td class="pd_x">对比结果</td>
        <td class="pd_x">验证结果</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.identityCard }}</td>
        <td class="pd_x">{{ data.accountNO }}</td>
        <td class="pd_x">{{ data.bankPreMobile }}</td>
        <td class="pd_x">
          {{ data.checkStatus === "SAME" ? "相同" : "不相同" }}
        </td>
        <td class="pd_x">{{ data.result }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'bankCard3itemCheck2',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
