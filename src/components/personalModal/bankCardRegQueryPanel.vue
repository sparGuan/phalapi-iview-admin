<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="pd_x">银行卡号</td>
        <td class="pd_x">开户行名称</td>
        <td class="pd_x">卡类型</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.accountNO }}</td>
        <td class="pd_x">{{ data.bankName }}</td>
        <td class="pd_x">{{ data.cardType }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'bankCardRegQuery',
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
