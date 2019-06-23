<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">驾驶证扣分查询</td>
      </tr>
      <tr>
        <td class="pd_x">身份证号</td>
        <td class="pd_x">档案编号</td>
        <td class="pd_x">省份或城市</td>
        <td class="pd_x">累计积分（本年度计分结果）</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.idCard }}</td>
        <td class="pd_x">{{ data.fileNo }}</td>
        <td class="pd_x">{{ data.province }}</td>
        <td class="pd_x">{{ data.result }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'drivePointer',
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
