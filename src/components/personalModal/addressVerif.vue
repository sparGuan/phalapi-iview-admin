<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x min150">地址信息</td>
      </tr>
      <tr>
        <td class="pd_x min150" colspan="1">报告编号：</td>
        <td class="pd_x min150">{{ data.records.uno }}</td>
      </tr>
      <tr>
        <td class="pd_x min150">名称：</td>
        <td class="pd_x min150">{{ data.records.result.name }}</td>
        <td class="pd_x min150">手机号：</td>
        <td class="pd_x min150">{{ data.records.result.mobileNo }}</td>
      </tr>
      <tr>
        <td class="pd_x min150" colspan="1">身份证号：</td>
        <td class="pd_x min150" colspan="3">
          {{ data.records.result.idNo }}
        </td>
      </tr>
      <tr>
        <td class="pd_x min150">地址类型：</td>
        <td class="pd_x min150">
          {{ Number(data.records.result.addressType) | change2 }}
        </td>
        <td class="pd_x min150">是否本人真实活动地址：</td>
        <td class="pd_x min150">
          {{
            data.records.result.addressType === "non"
              ? "地址类型无描述，无法判断"
              : change(Number(data.records.result.isValidAddress))
          }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'airTravel',
  data () {
    return {}
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
  methods: {
    change (val) {
      let txt = ''
      switch (val) {
        case 0:
          txt = '否'
          break
        case 1:
          txt = '是'
          break
        case 9:
          txt = '库中无数据'
          break
        default:
          break
      }
      return txt
    }
  },
  filters: {
    change2 (val) {
      let txt = '暂无信息'
      switch (val) {
        case 'home':
          txt = '家庭地址'
          break
        case 'other':
          txt = '其他高频地址'
          break
        case 'work':
          txt = '疑似单位地址'
          break
        default:
          break
      }
      return txt
    }
  }
}
</script>
