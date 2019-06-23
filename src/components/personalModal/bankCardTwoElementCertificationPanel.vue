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
        <td class="pd_x">姓名</td>
        <td class="pd_x">银行卡号</td>
        <td class="pd_x">结果</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{ data.records.uno }}</td>
        <td class="pd_x">{{ data.records.result.name }}</td>
        <td class="pd_x">{{ data.records.result.accountNo }}</td>
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
      let txt = '无法认证的'
      switch (t) {
        case 'T':
          txt = '信息认证通过'
          break
        case 'F':
          txt = '信息认证未通过'
          break
        case 'N':
          txt = '无法认证的'
          break
      }
      return txt
    }
  }
}
</script>
