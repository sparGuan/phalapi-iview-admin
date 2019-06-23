<style lang="stylus" scoped>
.phonetimewrap {
  //
}
</style>

<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="4">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x min150">报告编号：</td>
        <td class="pd_x min150">{{ data.records && data.records.uno }}</td>
        <td class="pd_x min150">时长：</td>
        <td class="pd_x min150">
          {{ data.records.result.onlinetime | change }}
        </td>
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
  props: ['data'],
  mounted () {

  },
  filters: {
    change (v) {
      let msg = ''
      switch (v) {
        case 'A':
          msg = '[0-3]个月'
          break
        case 'B':
          msg = '[3-6]个月'
          break
        case 'C':
          msg = '[6-12]个月'
          break
        case 'D':
          msg = '一年到两年'
          break
        case 'E':
          msg = '2年以上'
          break
        default:
          break
      }
      return msg
    }
  }
}
</script>
