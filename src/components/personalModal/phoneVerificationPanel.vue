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
        <td class="pd_x">使用时间分数</td>
        <td class="pd_x">结果</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.records.uno }}</td>
        <td class="pd_x">{{ data.records.result.useTimeScore }}</td>
        <td class="pd_x">{{ data.records.result.result | change }}</td>
        <td class="pd_x">{{ data.records.result.message }}</td>
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
      let txt = '库中无记录'
      switch (t) {
        case '0':
          txt = '信息验证通过'
          break
        case '1':
          txt = '信息验证不通过'
          break
        case '2':
          txt = '库中无记录'
          break
        case '9':
          txt = '手机号和证件号一致，姓名不做比对'
          break
      }
      return txt
    }
  }
}
</script>
