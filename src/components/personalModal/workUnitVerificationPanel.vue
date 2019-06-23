<style lang="stylus" scoped>
.phonetimewrap {
  //
}
</style>

<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="8">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号</td>
        <td class="pd_x">{{ data.records.uno }}</td>
      </tr>
      <tr>
        <td class="pd_x">姓名</td>
        <td class="pd_x">{{ data.records.result.name }}</td>
        <td class="pd_x">身份证号</td>
        <td class="pd_x">{{ data.records.result.idNo }}</td>
      </tr>
      <tr>
        <td class="pd_x">单位最初出现时间</td>
        <td class="pd_x">{{ data.records.result.appear1ThDate }}</td>
        <td class="pd_x">单位最近出现时间</td>
        <td class="pd_x">{{ data.records.result.appearLastDate }}</td>
      </tr>
      <tr>
        <td class="pd_x">单位匹配度分</td>
        <td class="pd_x">{{ data.records.result.companySimDeg }}</td>
        <td class="pd_x">是否是真实公司</td>
        <td class="pd_x">{{ data.records.result.isRealCompany | change }}</td>
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
