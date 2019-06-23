<style lang="stylus" scoped>
.lostletterwrap
  //
</style>

<template>
  <div class="commontablewrap lostletterwrap">
    <table class="full border">
      <tr>
        <td class="title pd_x">被执行记录</td>
      </tr>
      <tr v-for="list in data.dishonests">
        <td>
          <table class="full border subtabletwo">
            <tr>
              <td class="pd_x subtitletwo" colspan="8">被执行记录序号：{{list.no}}</td>
            </tr>
            <tr>
              <td class="pd_x" width="120">被执行人姓名/名称：</td>
              <td class="pd_x">{{list.name}}</td>
              <td class="pd_x">性别(个人)：</td>
              <td class="pd_x">{{list.sex}}</td>
              <td class="pd_x">年龄(个人)：</td>
              <td class="pd_x">{{list.age}}</td>
              <td class="pd_x" width="107">身份证号码/组织机构代码：</td>
              <td class="pd_x">{{list.identityNo}}</td>
            </tr>
            <tr>
              <td class="pd_x">执行法院：</td>
              <td class="pd_x">{{list.executiveCourt}}</td>
              <td class="pd_x">省份：</td>
              <td class="pd_x">{{list.province}}</td>
              <td class="pd_x">执行依据文号：</td>
              <td class="pd_x">{{list.executiveBaiscNo}}</td>
              <td class="pd_x">立案时间：</td>
              <td class="pd_x">{{list.filingTime}}</td>
            </tr>
            <tr>
              <td class="pd_x">案号：</td>
              <td class="pd_x">{{list.caseNO}}</td>
              <td class="pd_x">做出执行依据单位：</td>
              <td class="pd_x">{{list.executiveArm}}</td>
              <td class="pd_x">生效法律文书确定的义务：</td>
              <td class="pd_x">{{list.legalObligation}}</td>
              <td class="pd_x">被执行人的履行情况：</td>
              <td class="pd_x">{{list.executiveCase}}</td>
            </tr>
            <tr>
              <td class="pd_x">已履行：</td>
              <td class="pd_x">{{list.executed}}</td>
              <td class="pd_x">未履行：</td>
              <td class="pd_x">{{list.unExecuted}}</td>
              <td class="pd_x">具体情形：</td>
              <td class="pd_x">{{list.specificSituation}}</td>
              <td class="pd_x">发布时间：</td>
              <td class="pd_x">{{list.releaseTime}}</td>
            </tr>
            <tr>
              <td class="pd_x">公司法人：</td>
              <td class="pd_x" colspan="7">{{list.corpLegalPerson}}</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr v-if="!data.dishonests.length">
        <td class="tc">未发现</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'LostLetterPanel',
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

  }
}
</script>
