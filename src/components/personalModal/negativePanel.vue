<style lang="stylus" scoped>
</style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td  class="title pd_x" colspan="5">负面信息列表</td>
      </tr>
      <tr>
        <td class="pd_x">身份证号：</td>
        <td class="pd_x">{{data.idCard}}</td>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">{{data.name}}</td>
      </tr>
      <tr>
        <td class="pd_x">是否在逃：</td>
        <td class="pd_x">{{checkBoolean[data.escape]}}</td>
        <td class="pd_x">是否有前科：</td>
        <td class="pd_x">{{checkBoolean[data.crime]}}</td>
      </tr>
      <tr>
        <td class="pd_x">是否吸毒：</td>
        <td class="pd_x">{{checkBoolean[data.drug]}}</td>
        <td class="pd_x">是否涉毒：</td>
        <td class="pd_x">{{checkBoolean[data.drugRelated]}}</td>
      </tr>
      <tr>
        <td class="pd_x">在逃比对结果：</td>
        <td class="pd_x">{{data.escapeCompared}}</td>
        <td class="pd_x">前科比对结果：</td>
        <td class="pd_x">{{data.crimeCompared}}</td>
      </tr>
      <tr>
        <td class="pd_x">吸毒比对结果：</td>
        <td class="pd_x">{{data.drugCompared}}</td>
        <td class="pd_x">涉毒比对结果：</td>
        <td class="pd_x">{{data.drugRelatedCompared}}</td>
      </tr>
      <tr>
        <td class="pd_x">核对计数：</td>
        <td class="pd_x">{{data.checkCount}}</td>
        <td class="pd_x">案发时间：</td>
        <td class="pd_x">{{data.caseTime}}</td>
      </tr>
      <tr>
        <td class="pd_x">事件类别：</td>
        <td class="pd_x">{{data.caseType}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'negative',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      checkBoolean: {
        true: '是',
        false: '否'
      }
    }
  }
}

</script>
