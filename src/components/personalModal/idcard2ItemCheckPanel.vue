<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="pd_x">姓名</td>
        <td class="pd_x">身份证号码</td>
        <td class="pd_x">结果说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.name }}</td>
        <td class="pd_x">{{ data.identityCard }}</td>
        <td class="pd_x">{{ data.compareStatusDesc }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'idcard2ItemCheck',
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
