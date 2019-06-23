<style lang="stylus" scoped>
.phonetimewrap {
  //
}
</style>

<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="3">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号</td>
        <td class="pd_x">状态</td>
        <td class="pd_x">描述说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.records.uno }}</td>
        <td class="pd_x">{{ data.records.result.quotaValue | change }}</td>
        <td class="pd_x">{{ data.records.result.msg }}</td>
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
    change (val) {
      let txt = ''
      switch (val) {
        case 0:
          txt = '认证一致'
          break
        case 1:
          txt = '认证不一致'
          break
        case -1:
          txt = '库无记录'
          break
        default:
          break
      }
      return txt
    }
  }
}
</script>
