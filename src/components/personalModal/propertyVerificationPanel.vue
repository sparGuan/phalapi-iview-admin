
<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="12">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号</td>
        <td class="pd_x">{{ data.records.uno }}</td>
        <td class="pd_x">序列号</td>
        <td class="pd_x">{{ data.records.result.seqNo }}</td>
      </tr>
      <tr>
        <td class="pd_x">主体名称</td>
        <td class="pd_x">{{ data.records.result.name }}</td>
        <td class="pd_x">房屋验证结果</td>
        <td class="pd_x">
          {{
            Number(data.records.result.houseChkResult) === 1
              ? "有房"
              : "库中无数据"
          }}
        </td>
      </tr>
      <tr>
        <td class="pd_x" colspan="1">房屋数据获取时间</td>
        <td class="pd_x" colspan="11">
          {{ data.records.result.houseDataDate }}
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
      let txt = '无法验证'
      switch (t) {
        case 1:
          txt = '认证信息匹配'
          break
        case 2:
          txt = '认证信息不匹配'
          break
        case 3:
          txt = '无法验证'
          break
        case -1:
          txt = '异常情况'
          break
      }
      return txt
    }
  }
}
</script>
