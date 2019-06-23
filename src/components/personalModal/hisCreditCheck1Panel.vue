<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="pd_x">当事人名称</td>
        <td class="pd_x">身份证号</td>
        <td class="pd_x">结果状态</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.idCard }}</td>
        <td class="pd_x">{{ data.name }}</td>
        <td class="pd_x">{{ data.statusDesc }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'hisCreditCheck1',
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
