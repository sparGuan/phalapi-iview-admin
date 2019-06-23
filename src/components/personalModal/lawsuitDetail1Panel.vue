<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap" v-if="data">
    <div v-if="data.checkStatus === 'EXIST'">
      <!-- 裁判文书 -->
      <table class="full border" v-if="data.dataType.toLowerCase() === 'cpws'">
        <tr>
          <td class="pd_x min150 title" colspan="12">{{ getDateType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">裁判文书ID：</td>
          <td class="pd_x min150">{{ data.id }}</td>
          <td class="pd_x min150">标题：</td>
          <td class="pd_x min150">{{ data.title }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案由编号：</td>
          <td class="pd_x min150">{{ data.caseCauseNO }}</td>
          <td class="pd_x min150">内容：</td>
          <td class="pd_x min150" v-html="data.content "></td>
        </tr>
        <tr>
          <td class="pd_x min150">审判员：</td>
          <td class="pd_x min150">{{ data.judge }}</td>
          <td class="pd_x min150">判决证据：</td>
          <td class="pd_x min150">{{ data.evidence }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案件类型：</td>
          <td class="pd_x min150">{{ data.caseType }}</td>
          <td class="pd_x min150">案号：</td>
          <td class="pd_x min150">{{ data.caseNO }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">类别：</td>
          <td class="pd_x min150">{{ data.dataType }}</td>
          <td class="pd_x min150">法院名称：</td>
          <td class="pd_x min150">{{ data.court }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案由：</td>
          <td class="pd_x min150">{{ data.caseNO }}</td>
          <td class="pd_x min150">判决结果：</td>
          <td class="pd_x min150">{{ data.judgeResult }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案由类型：</td>
          <td class="pd_x min150">{{ data.caseCauseType }}</td>
          <td class="pd_x min150">当事人id</td>
          <td class="pd_x min150">{{ data.partyId }}</td>
        </tr>
        <tr>
          <td class="pd_x min150" colspan="12">当事人列表信息：</td>
        </tr>
        <tr>
          <td class="pd_x min150" colspan="12" style="padding:15px;">
            <Table border :columns="columns1" :data="data.litigants"></Table>
          </td>
        </tr>
        <tr>
          <td class="pd_x min150">审理程序：</td>
          <td class="pd_x min150">{{ data.trialProcedure }}</td>
          <td class="pd_x min150">审结时间：</td>
          <td class="pd_x min150">{{ data.time }}</td>
        </tr>
      </table>

      <table class="full border" v-if="data.dataType.toLowerCase() === 'zxgg'">
        <tr>
          <td class="pd_x min150 title" colspan="12">{{ getDateType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">执行公告 ID：</td>
          <td class="pd_x min150">{{ data.id }}</td>
          <td class="pd_x min150">案件状态：</td>
          <td class="pd_x min150">{{ data.caseStatus }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">被执行人姓名：</td>
          <td class="pd_x min150">{{ data.name }}</td>
          <td class="pd_x min150">执行法院名称：</td>
          <td class="pd_x min150">{{ data.court }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案号：</td>
          <td class="pd_x min150">{{ data.caseNO }}</td>
          <td class="pd_x min150">执行标的：</td>
          <td class="pd_x min150">{{ data.executionTarget }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">内容：</td>
          <td class="pd_x min150" v-html="data.content"></td>
          <td class="pd_x min150">类别：</td>
          <td class="pd_x min150">{{ data.dataType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">立案时间：</td>
          <td class="pd_x min150">{{ data.time }}</td>
          <td class="pd_x min150">标题：</td>
          <td class="pd_x min150">{{ data.title }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">身份证：</td>
          <td class="pd_x min150">{{ data.identificationNO }}</td>
          <td class="pd_x min150">提案人：</td>
          <td class="pd_x min150">{{ data.proposer }}</td>
        </tr>
      </table>

      <table class="full border" v-if="data.dataType.toLowerCase() === 'ktgg'">
        <tr>
          <td class="pd_x min150 title" colspan="12">{{ getDateType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">开庭公告 ID：</td>
          <td class="pd_x min150">{{ data.id }}</td>
          <td class="pd_x min150">内容：</td>
          <td class="pd_x min150" v-html="data.content"></td>
        </tr>
        <tr>
          <td class="pd_x min150">法院名称：</td>
          <td class="pd_x min150">{{ data.court }}</td>
          <td class="pd_x min150">执案由：</td>
          <td class="pd_x min150">{{ data.caseCause }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案号：</td>
          <td class="pd_x min150">{{ data.caseNO }}</td>
          <td class="pd_x min150">类别：</td>
          <td class="pd_x min150">{{ data.dataType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">被告：</td>
          <td class="pd_x min150">{{ data.defendant }}</td>
          <td class="pd_x min150">法官：</td>
          <td class="pd_x min150">{{ data.judge }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">当事人：</td>
          <td class="pd_x min150">{{ data.party }}</td>
          <td class="pd_x min150">原告：</td>
          <td class="pd_x min150">{{ data.plaintiff }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">法庭：</td>
          <td class="pd_x min150">{{ data.courtroom }}</td>
          <td class="pd_x min150">开庭时间：</td>
          <td class="pd_x min150">{{ data.time }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">标题：</td>
          <td class="pd_x min150">{{ data.title }}</td>
          <td class="pd_x min150">组织单位：</td>
          <td class="pd_x min150">{{ data.organization }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">当事人：</td>
          <td class="pd_x min150">{{ data.party }}</td>
          <td class="pd_x min150">相关当事人：</td>
          <td class="pd_x min150">{{ data.relatedParty }}</td>
        </tr>
      </table>

      <table
        class="full border"
        v-if="data.dataType.toLowerCase() === 'shixin'"
      >
        <tr>
          <td class="pd_x min150 title" colspan="12">{{ getDateType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">开庭公告 ID：</td>
          <td class="pd_x min150">{{ data.id }}</td>
          <td class="pd_x min150">履行情况：</td>
          <td class="pd_x min150">{{ data.implementationStatus }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">依据案号：</td>
          <td class="pd_x min150">{{ data.evidenceCode }}</td>
          <td class="pd_x min150">执行法院名称：</td>
          <td class="pd_x min150">{{ data.court }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">做出执行依据单位：</td>
          <td class="pd_x min150">{{ data.executableUnit }}</td>
          <td class="pd_x min150">失信被执行人行为具体情形：</td>
          <td class="pd_x min150">{{ data.specificCircumstances }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">生效法律文书确定的义务：</td>
          <td class="pd_x min150">{{ data.obligations }}</td>
          <td class="pd_x min150">被执行人姓名：</td>
          <td class="pd_x min150">{{ data.name }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">省份：</td>
          <td class="pd_x min150">{{ data.province }}</td>
          <td class="pd_x min150">案号：</td>
          <td class="pd_x min150">{{ data.caseNO }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">发布时间：</td>
          <td class="pd_x min150">{{ data.postTime }}</td>
          <td class="pd_x min150">内容：</td>
          <td class="pd_x min150" v-html="data.content"></td>
        </tr>
        <tr>
          <td class="pd_x min150">类别：</td>
          <td class="pd_x min150">{{ data.dataType }}</td>
          <td class="pd_x min150">立案时间：</td>
          <td class="pd_x min150">{{ data.time }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">执行依据文号：</td>
          <td class="pd_x min150">{{ data.exeCid }}</td>
          <td class="pd_x min150">身份证：</td>
          <td class="pd_x min150">{{ data.identificationNO }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">年龄：</td>
          <td class="pd_x min150">{{ data.age }}</td>
          <td class="pd_x min150">性别：</td>
          <td class="pd_x min150">{{ data.gender }}</td>
        </tr>
        <tr>
          <td class="pd_x min150" colspan="1">相关当事人：</td>
          <td class="pd_x min150" colspan="11">{{ data.relatedParty }}</td>
        </tr>
      </table>

      <table class="full border" v-if="data.dataType.toLowerCase() === 'fygg'">
        <tr>
          <td class="pd_x min150 title" colspan="12">{{ getDateType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">开庭公告 ID：</td>
          <td class="pd_x min150">{{ data.id }}</td>
          <td class="pd_x min150">公告类型：</td>
          <td class="pd_x min150">{{ data.announcementType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">公告内容：</td>
          <td class="pd_x min150" v-html="data.content"></td>
          <td class="pd_x min150">发布时间：</td>
          <td class="pd_x min150">{{ data.time }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">当事人：</td>
          <td class="pd_x min150">{{ data.name }}</td>
          <td class="pd_x min150">法院名称：</td>
          <td class="pd_x min150">{{ data.court }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">类别：</td>
          <td class="pd_x min150">{{ data.dataType }}</td>
          <td class="pd_x min150">版面：</td>
          <td class="pd_x min150">{{ data.layout }}</td>
        </tr>
      </table>

      <table class="full border" v-if="data.dataType.toLowerCase() === 'wdhmd'">
        <tr>
          <td class="pd_x min150 title" colspan="12">{{ getDateType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">网贷黑名单 ID：</td>
          <td class="pd_x min150">{{ data.id }}</td>
          <td class="pd_x min150">内容：</td>
          <td class="pd_x min150" v-html="data.content"></td>
        </tr>
        <tr>
          <td class="pd_x min150">姓名：</td>
          <td class="pd_x min150">{{ data.name }}</td>
          <td class="pd_x min150">类别：</td>
          <td class="pd_x min150">{{ data.dataType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">发布时间：</td>
          <td class="pd_x min150">{{ data.time }}</td>
          <td class="pd_x min150">本金/本息：</td>
          <td class="pd_x min150">{{ data.principal }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">未还/罚息：</td>
          <td class="pd_x min150">{{ data.penalty }}</td>
          <td class="pd_x min150">已还金额：</td>
          <td class="pd_x min150">{{ data.paid }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">信息更新时间：</td>
          <td class="pd_x min150">{{ data.updateTime }}</td>
          <td class="pd_x min150">被执行人 身份证/组织机构代码：</td>
          <td class="pd_x min150">{{ data.identificationNO }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">法院名称：</td>
          <td class="pd_x min150">{{ data.court }}</td>
          <td class="pd_x min150">相关当事人：</td>
          <td class="pd_x min150">{{ data.relatedParty }}</td>
        </tr>

        <tr>
          <td class="pd_x min150">数据来源单位名称：</td>
          <td class="pd_x min150">{{ data.sourceName }}</td>
          <td class="pd_x min150">数据来源单位名称：</td>
          <td class="pd_x min150">{{ data.sourceName }}</td>
        </tr>

        <tr>
          <td class="pd_x min150">内容：</td>
          <td class="pd_x min150" v-html="data.content"></td>
          <td class="pd_x min150">邮箱：</td>
          <td class="pd_x min150">{{ data.email }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">电话：</td>
          <td class="pd_x min150">{{ data.phone }}</td>
          <td class="pd_x min150">性别：</td>
          <td class="pd_x min150">{{ data.sex }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">手机：</td>
          <td class="pd_x min150">{{ data.mobile }}</td>
          <td class="pd_x min150">数据来源单位名称：</td>
          <td class="pd_x min150">{{ data.sourceName }}</td>
        </tr>
      </table>

      <table class="full border" v-if="data.dataType.toLowerCase() === 'ajlc'">
        <tr>
          <td class="pd_x min150 title" colspan="12">{{ getDateType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案件流程 ID：</td>
          <td class="pd_x min150">{{ data.id }}</td>
          <td class="pd_x min150">内容：</td>
          <td class="pd_x min150" v-html="data.content"></td>
        </tr>
        <tr>
          <td class="pd_x min150">立案时间：</td>
          <td class="pd_x min150">{{ data.name }}</td>
          <td class="pd_x min150">当事人：</td>
          <td class="pd_x min150">{{ data.name }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">发布时间：</td>
          <td class="pd_x min150">{{ data.time }}</td>
          <td class="pd_x min150">本金/本息：</td>
          <td class="pd_x min150">{{ data.principal }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">流程状态：</td>
          <td class="pd_x min150">{{ data.status }}</td>
          <td class="pd_x min150">案号：</td>
          <td class="pd_x min150">{{ data.caseNo }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">类别：</td>
          <td class="pd_x min150">{{ data.dataType }}</td>
          <td class="pd_x min150">执行法院名称：</td>
          <td class="pd_x min150">{{ data.court }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案件类别：</td>
          <td class="pd_x min150">{{ data.caseType }}</td>
          <td class="pd_x min150">诉讼标的：</td>
          <td class="pd_x min150">{{ data.actionTarget }}</td>
        </tr>

        <tr>
          <td class="pd_x min150">案由：</td>
          <td class="pd_x min150">{{ data.caseCause }}</td>
          <td class="pd_x min150">审判长：</td>
          <td class="pd_x min150">{{ data.chiefJudge }}</td>
        </tr>

        <tr>
          <td class="pd_x min150">主审法官：</td>
          <td class="pd_x min150">{{ data.judge }}</td>
          <td class="pd_x min150">书记员：</td>
          <td class="pd_x min150">{{ data.clerk }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">书记员电话：</td>
          <td class="pd_x min150">{{ data.clerkPhone }}</td>
          <td class="pd_x min150">法庭成员：</td>
          <td class="pd_x min150">{{ data.members }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">组织单位：</td>
          <td class="pd_x min150">{{ data.organization }}</td>
          <td class="pd_x min150">审理程序：</td>
          <td class="pd_x min150">{{ data.trialProcedure }}</td>
        </tr>
      </table>

      <table class="full border" v-if="data.dataType.toLowerCase() === 'bgt'">
        <tr>
          <td class="pd_x min150 title" colspan="12">{{ getDateType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">曝光台 ID：</td>
          <td class="pd_x min150">{{ data.id }}</td>
          <td class="pd_x min150">当事人类型：</td>
          <td class="pd_x min150">{{ data.partyType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">法院名称：</td>
          <td class="pd_x min150">{{ data.court }}</td>
          <td class="pd_x min150">当事人：</td>
          <td class="pd_x min150">{{ data.name }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案号：</td>
          <td class="pd_x min150">{{ data.caseNo }}</td>
          <td class="pd_x min150">类别：</td>
          <td class="pd_x min150">{{ data.dataType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案由：</td>
          <td class="pd_x min150">{{ data.caseCause }}</td>
          <td class="pd_x min150">标的金额：</td>
          <td class="pd_x min150">{{ data.executionTarget }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">发布时间：</td>
          <td class="pd_x min150">{{ data.time }}</td>
          <td class="pd_x min150">提案人：</td>
          <td class="pd_x min150">{{ data.proposer }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">地址：</td>
          <td class="pd_x min150">{{ data.address }}</td>
          <td class="pd_x min150">身份证：</td>
          <td class="pd_x min150">{{ data.identificationNO }}</td>
        </tr>

        <tr>
          <td class="pd_x min150">判决证据：</td>
          <td class="pd_x min150">{{ data.evidence }}</td>
          <td class="pd_x min150">未执行金额：</td>
          <td class="pd_x min150">{{ data.unExeMoney }}</td>
        </tr>

        <tr>
          <td class="pd_x min150" colspan="1">内容：</td>
          <td class="pd_x min150" colspan="11">{{ data.content }}</td>
        </tr>
      </table>

      <table class="full border" v-if="data.dataType.toLowerCase() === 'party'">
        <tr>
          <td class="pd_x min150 title" colspan="12">{{ getDateType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">地址：</td>
          <td class="pd_x min150">{{ data.address }}</td>
          <td class="pd_x min150">案由编码：</td>
          <td class="pd_x min150">{{ data.caseCauseNO }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">出生日期：</td>
          <td class="pd_x min150">{{ data.birthday }}</td>
          <td class="pd_x min150">案件受理费：</td>
          <td class="pd_x min150">{{ data.caseAdmissibilityFee }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">案由：</td>
          <td class="pd_x min150">{{ data.caseCause }}</td>
          <td class="pd_x min150">案件类型：</td>
          <td class="pd_x min150">{{ data.caseType }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">法院地区代码：</td>
          <td class="pd_x min150">{{ data.district }}</td>
          <td class="pd_x min150">判决金额：</td>
          <td class="pd_x min150">{{ data.judgmentAmount }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">身份证：</td>
          <td class="pd_x min150">{{ data.identificationNO }}</td>
          <td class="pd_x min150">审判员：</td>
          <td class="pd_x min150">{{ data.judge }}</td>
        </tr>
        <tr>
          <td class="pd_x min150">判决结果：</td>
          <td class="pd_x min150">{{ data.judgeResult }}</td>
          <td class="pd_x min150">律师事务所：</td>
          <td class="pd_x min150">{{ data.lawOffice }}</td>
        </tr>

        <tr>
          <td class="pd_x min150">律师名称：</td>
          <td class="pd_x min150">{{ data.lawyer }}</td>
          <td class="pd_x min150">当事人案件受理费：</td>
          <td class="pd_x min150">{{ data.partyCaf }}</td>
        </tr>

        <tr>
          <td class="pd_x min150" colspan="1">当事人地址地区代码：</td>
          <td class="pd_x min150" colspan="11">{{ data.partyDistrict }}</td>
          <td class="pd_x min150" colspan="1">胜负状态：</td>
          <td class="pd_x min150" colspan="11">{{ data.partyResult }}</td>
        </tr>

        <tr>
          <td class="pd_x min150" colspan="1">当事人称号：</td>
          <td class="pd_x min150" colspan="11">{{ data.partyTitle }}</td>
          <td class="pd_x min150" colspan="1">当事人类型：</td>
          <td class="pd_x min150" colspan="11">{{ data.partyType }}</td>
        </tr>

        <tr>
          <td class="pd_x min150" colspan="1">被执行人姓名：</td>
          <td class="pd_x min150" colspan="11">{{ data.name }}</td>
          <td class="pd_x min150" colspan="1">标题：</td>
          <td class="pd_x min150" colspan="11">{{ data.title }}</td>
        </tr>

        <tr>
          <td class="pd_x min150" colspan="1">审理程序：</td>
          <td class="pd_x min150" colspan="11">{{ data.trialProcedure }}</td>
          <td class="pd_x min150" colspan="1">判决证据：</td>
          <td class="pd_x min150" colspan="11">{{ data.evidence }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lawsuitDetail3',
  props: ['data'],
  data () {
    return {
      columns1: [
        {
          title: '当事人名称',
          key: 'name',
          align: 'center'
        },
        {
          title: '身份证号码',
          key: 'identificationNO',
          align: 'center'
        },
        {
          title: '当事人称号',
          key: 'title',
          align: 'center'
        },
        {
          title: '当事人类型',
          key: 'type',
          align: 'center'
        },
        {
          title: '当事人地址',
          key: 'address',
          align: 'center'
        },
        {
          title: '当事人生日',
          key: 'birthday',
          align: 'center'
        },
        {
          title: '当事人立场(p 上诉人，d 被上诉人，t 第三人',
          key: 'standpoint',
          align: 'center'
        },
        {
          title: '律师事务所',
          key: 'lawFirm',
          align: 'center'
        },
        {
          title: '委托辩护人',
          key: 'lawyer',
          align: 'center'
        }
      ]
    }
  },
  computed: {
    getDateType () {
      if (this.data) {
        switch (this.data.dataType.toLowerCase()) {
          case 'cpws':
            return '裁判文书'
          case 'zxgg':
            return '执行公告'
          case 'shixin':

            return '失信公告'
          case 'fygg':

            return '法院公告'
          case 'ktgg':

            return '开庭公告'
          case 'wdhmd':

            return '网贷黑名单'
          case 'ajlc':

            return '案件流程信息'
          case 'bgt':

            return '曝光台信息'
          case 'party':

            return '裁判文书(当事人角度)'
          default:
            break
        }
      } else {
        return null
      }
    }
  },
  methods: {
  }
}

</script>
