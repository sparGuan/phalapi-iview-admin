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
        <td class="pd_x">{{ data.records.uno }}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="10">查询结果</td>
      </tr>
      <tr>
        <td class="pd_x">业务发生时间</td>
        <td class="pd_x">数据状态</td>
        <td class="pd_x">身份证号码</td>
        <td class="pd_x">主体名称</td>
        <td class="pd_x">风险标记</td>
        <td class="pd_x">风险得分</td>
        <td class="pd_x">来源代码</td>
      </tr>
      <tr v-for="item in data.records.result">
        <td class="pd_x">
          {{
            item.dataBuildTime === "99" || item.dataBuildTime === ""
              ? "权限不足"
              : item.dataBuildTime
          }}
        </td>
        <td class="pd_x">{{ item.dataStatus | change }}</td>
        <td class="pd_x">{{ item.idNo }}</td>
        <td class="pd_x">{{ item.name }}</td>
        <td class="pd_x">{{ item.rskMark | change2 }}</td>
        <td class="pd_x">
          {{ item.rskScore === "" ? "暂无数据" : item.rskScore }}
        </td>
        <td class="pd_x">{{ item.sourceId | change3 }}</td>
      </tr>
      <tr v-if="!data.records.result.length">
        <td class="tc" colspan="10">未发现</td>
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
      let txt = '权限不足'
      switch (t) {
        case '99':
          txt = '权限不足'
          break
        case '1':
          txt = '已验证'
          break
        case '2':
          txt = '未验证'
          break
        case '3':
          txt = '异议中'
          break
      }
      return txt
    },
    change2 (t) {
      let txt = '权限不足'
      switch (t) {
        case 'B2':
          txt = '被执行人'
          break
        case 'B1':
          txt = '失信被执行人'
          break
        case 'B3':
          txt = '交通严重违章'
          break
        case 'C1':
          txt = '手机号存在欺诈风险'
          break
        case 'C2':
          txt = '卡号存在欺诈风险'
          break
        case 'C3':
          txt = '身份证号存在欺诈风险'
          break
        case 'C4':
          txt = 'IP存在欺诈风险'
          break
      }
      return txt
    },
    change3 (t) {
      let txt = '权限不足'
      switch (t) {
        case 'A':
          txt = '信贷逾期风险'
          break
        case 'B':
          txt = '行政负面风险'
          break
        case 'C':
          txt = '欺诈风险'
          break
        case '99':
          txt = '权限不足'
          break
      }
      return txt
    }
  }
}
</script>
