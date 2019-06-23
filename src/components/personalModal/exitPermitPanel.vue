<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="quarter half pd_x">姓名：</td>
        <td class="quarter half pd_x">通行证号码：</td>
        <td class="pd_x">出生日期：</td>
        <td class="pd_x">证件有效期截止日期：</td>
        <td class="pd_x">结果说明：</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.name }}</td>
        <td class="pd_x">{{ data.idNumber }}</td>
        <td class="pd_x">{{ data.birthday }}</td>
        <td class="pd_x">{{ data.expiryDate }}</td>
        <td class="pd_x">{{ data.compareStatusDesc }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'exitPermit',
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
