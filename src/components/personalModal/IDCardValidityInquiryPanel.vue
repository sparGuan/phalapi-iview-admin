<style lang="stylus" scoped>
.phonetimewrap {
  //
}
</style>

<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号</td>
        <td class="pd_x">是否真实身份</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.records && data.records.uno }}</td>
        <td class="pd_x">
          {{ Number(data.records.result.isRealIdentity) | change }}
        </td>
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
    change (t) {
      let txt = '库中无数据'
      switch (t) {
        case 0:
          txt = '否'
          break
        case 1:
          txt = '是'
          break
        case 9:
          txt = '库中无数据'
          break
      }
      return txt
    }
  }
}
</script>
