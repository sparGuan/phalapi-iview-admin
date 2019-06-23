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
        <td class="pd_x">说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.records.uno }}</td>
        <td class="pd_x">
          {{ Number(data.records.result.quotaValue) | change }}
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
      let txt = '无法查询'
      switch (t) {
        case 1:
          txt = '正常在用'
          break
        case 2:
          txt = '停机'
          break
        case 3:
          txt = '在网但不可用'
          break
        case 4:
          txt = '不在网'
          break
        case 9:
          txt = '无法查询'
          break
        case -1:
          txt = '手机号码不存在'
          break
        case null:
          txt = '数据不存在'
          break
      }
      return txt
    }
  }
}
</script>
