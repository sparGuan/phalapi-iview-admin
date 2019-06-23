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
        <td class="pd_x">是否是常用联系人</td>
        <td class="pd_x">说明</td>
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
    change (t) {
      let txt = '数据不存在'
      switch (t) {
        case 0:
          txt = '是'
          break
        case 1:
          txt = '不是'
          break
        case 'MDN_NOT_EXIST':
          txt = '手机号码不存在'
          break
        case 'DATA_NOT_EXIST':
          txt = '数据不存在'
          break
      }
      return txt
    }
  }
}
</script>
