<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">姓名</td>
        <td class="pd_x">银行卡号</td>
        <td class="pd_x">验证结果</td>
        <td class="pd_x">结果说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.name }}</td>
        <td class="pd_x">{{ data.accountNO }}</td>
        <td class="pd_x">{{ data.checkStatus }}</td>
        <td class="pd_x">{{ data.result }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'bankCard2itemCheck1',
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
