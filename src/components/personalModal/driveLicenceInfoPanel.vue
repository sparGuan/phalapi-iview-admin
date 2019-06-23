<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">驾驶证信息查询</td>
      </tr>
      <tr>
        <td class="pd_x">驾驶证号</td>
        <td class="pd_x">{{ data.licenseNo }}</td>
        <td class="pd_x">档案编号</td>
        <td class="pd_x">{{ data.fileNo }}</td>
      </tr>
      <tr>
        <td class="pd_x">准驾车型</td>
        <td class="pd_x">{{ data.type }}</td>
        <td class="pd_x">驾驶证状态</td>
        <td class="pd_x">{{ data.licenseStatus }}</td>
      </tr>
      <tr>
        <td class="pd_x">初次领证日期</td>
        <td class="pd_x">{{ data.issueDate }}</td>
        <td class="pd_x">有效期至</td>
        <td class="pd_x">{{ data.expiryDate }}</td>
      </tr>
      <tr>
        <td class="pd_x" colspan="1">累计计分</td>
        <td class="pd_x" colspan="11">{{ data.score }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'driveLicenceInfo',
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
