<style lang="stylus" scoped>
</style>

<template>
  <div class="commontablewrap">
    <table class="full border" v-if="data.pageData[0]== 'cpws'">
      <tr>
        <td class="pd_x title">涉诉信息</td>
      </tr>
      <tr>
        <td class="pd_x">裁判文书ID：</td>
        <td class="pd_x">{{data.pageData[0].cpws.id}}</td>
        <td class="quarter half pd_x">委托辩护人：</td>
        <td class="pd_x">{{data.pageData[0].cpws.lawyer}}</td>
      </tr>
      <tr>
        <td class="pd_x">内容：</td>
        <td class="pd_x">{{data.pageData[0].cpws.content}}</td>
        <td class="pd_x">案号：</td>
        <td class="pd_x">{{data.pageData[0].cpws.caseNO}}</td>
      </tr>
      <tr>
        <td class="pd_x">法院名称：</td>
        <td class="pd_x">{{data.pageData[0].cpws.court}}</td>
        <td class="pd_x">类别：</td>
        <td class="pd_x">{{data.pageData[0].cpws.dataType}}</td>
      </tr>
      <tr>
        <td class="pd_x">案由：</td>
        <td class="pd_x">{{data.pageData[0].cpws.caseCause}}</td>
        <td class="pd_x">标题：</td>
        <td class="pd_x">{{data.pageData[0].cpws.title}}</td>
      </tr>
      <tr>
        <td class="pd_x">地址：</td>
        <td class="pd_x">{{data.pageData[0].cpws.litigants.address}}</td>
        <td class="pd_x">当事人称号：</td>
        <td class="pd_x">{{data.pageData[0].cpws.litigants.title}}</td>
      </tr>
      <tr>
        <td class="pd_x">当事人类型：</td>
        <td class="pd_x">{{data.pageData[0].cpws.litigants.type}}</td>
        <td class="pd_x">律师事务所：</td>
        <td class="pd_x">{{data.pageData[0].cpws.litigants.lawFirm}}</td>
      </tr>
      <tr>
        <td class="pd_x">当事人立场：</td>
        <td class="pd_x">{{data.pageData[0].cpws.litigants.standPoint}}</td>
        <td class="pd_x">当事人名称：</td>
        <td class="pd_x">{{data.pageData[0].cpws.litigants.name}}</td>
      </tr>
      <tr>
        <td class="pd_x">当事人身份证号码：</td>
        <td class="pd_x">{{data.pageData[0].cpws.litigants.identificationNO}}</td>
        <td class="pd_x">当事人生日：</td>
        <td class="pd_x">{{data.pageData[0].cpws.litigants.birthday}}</td>
      </tr>
      <tr>
        <td class="pd_x">判决结果：</td>
        <td class="pd_x">{{data.pageData[0].cpws.litigants.judgeResult}}</td>
        <td class="pd_x">案件类型：</td>
        <td class="pd_x">{{data.pageData[0].cpws.litigants.caseType}}</td>
      </tr>
      <tr>
        <td class="pd_x">审结时间：</td>
        <td class="pd_x">{{data.pageData[0].cpws.time}}</td>
      </tr>
    </table>
    <table class="full border" v-if="data.pageData[0] == 'zxgg'">
      <tr>
        <td class="pd_x title">执行公告信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">被执行人姓名：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.name}}</td>
        <td class="quarter half pd_x">案件状态：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.caseStatus}}</td>
      </tr>
      <tr>
        <td class="pd_x">身份证/组织机构代码：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.identificationNO}}</td>
        <td class="pd_x">执行标的：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.executionTarget}}</td>
      </tr>
      <tr>
        <td class="pd_x">执行公告ID：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.id}}</td>
        <td class="pd_x">立案时间：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.time}}</td>
      </tr>
      <tr>
        <td class="pd_x">内容：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.content}}</td>
        <td class="pd_x">案号：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.caseNO}}</td>
      </tr>
      <tr>
        <td class="pd_x">执行法院名称：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.court}}</td>
        <td class="pd_x">类别：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.dataType}}</td>
      </tr>
      <tr>
        <td class="pd_x">执行标准：</td>
        <td class="pd_x">{{data.pageData[0].zxgg.caseNO}}</td>
      </tr>
    </table>
    <table class="full border" v-if="data.pageData[0] == 'ktgg'">
      <tr>
        <td class="pd_x title">开庭公告信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">当事人：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.party}}</td>
        <td class="quarter half pd_x">法官：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.judge}}</td>
      </tr>
      <tr>
        <td class="pd_x">原告：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.plaintiff}}</td>
        <td class="pd_x">被告：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.defendant}}</td>
      </tr>
      <tr>
        <td class="pd_x">开庭公告ID：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.id}}</td>
        <td class="pd_x">立案时间：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.time}}</td>
      </tr>
      <tr>
        <td class="pd_x">内容：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.content}}</td>
        <td class="pd_x">案号：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.caseNO}}</td>
      </tr>
      <tr>
        <td class="pd_x">执行法院名称：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.court}}</td>
        <td class="pd_x">类别：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.dataType}}</td>
      </tr>
      <tr>
        <td class="pd_x">法庭：</td>
        <td class="pd_x">{{data.pageData[0].ktgg.courtroom}}</td>
      </tr>
    </table>
    <table class="full border" v-if="data.pageData[0] == 'sxgg'">
      <tr>
        <td class="pd_x title">信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">被执行人姓名：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.name}}</td>
        <td class="quarter half pd_x">性别：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.gender}}</td>
      </tr>
      <tr>
        <td class="pd_x">被执行人履行情况：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.implementationStatus}}</td>
        <td class="pd_x">依据依据文号：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.evidenceCode}}</td>
      </tr>
      <tr>
        <td class="pd_x">身份证/组织机构代码：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.identificationNO}}</td>
        <td class="pd_x">做出执行依据单位：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.executableUnit}}</td>
      </tr>
      <tr>
        <td class="pd_x">失信被执行人行为具体情形：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.specificCircumstances}}</td>
        <td class="pd_x">生效法律文书确定的义务：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.obligations}}</td>
      </tr>
      <tr>
        <td class="pd_x">年龄：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.age}}</td>
        <td class="pd_x">省份：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.province}}</td>
      </tr>
      <tr>
        <td class="pd_x">立案时间：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.time}}</td>
        <td class="pd_x">失信公告ID：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.id}}</td>
      </tr>
      <tr>
        <td class="pd_x">内容：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.content}}</td>
        <td class="pd_x">案号：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.caseNO}}</td>
      </tr>
      <tr>
        <td class="pd_x">执行法院名称：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.court}}</td>
        <td class="pd_x">类别：</td>
        <td class="pd_x">{{data.pageData[0].sxgg.datatype}}</td>
      </tr>
    </table>

    <table class="full border" v-if="data.pageData[0] == 'fygg'">
      <tr>
        <td class="pd_x title">信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">法院公告 ID：</td>
        <td class="pd_x">{{data.pageData[0].fygg.layout}}</td>
        <td class="pd_x">公告类型：</td>
        <td class="pd_x">{{data.pageData[0].fygg.announcementType}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">当事人：</td>
        <td class="pd_x">{{data.pageData[0].fygg.name}}</td>
        <td class="pd_x">法院名称：</td>
        <td class="pd_x">{{data.pageData[0].fygg.court}}</td>
      </tr>
      <tr>
        <td class="pd_x">发布时间：</td>
        <td class="pd_x">{{data.pageData[0].fygg.time}}</td>
        <td class="pd_x">公告内容：</td>
        <td class="pd_x">{{data.pageData[0].fygg.content}}</td>
      </tr>
      <tr>
        <td class="pd_x">类别：</td>
        <td class="pd_x">{{data.pageData[0].fygg.dataType}}</td>
      </tr>
    </table>
    <table class="full border" v-if="data.pageData[0] == 'wdhmd'">
      <tr>
        <td class="pd_x title">信息</td>
      </tr>
      <tr>
        <td class="pd_x">网贷黑名单 ID：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.content}}</td>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.name}}</td>
      </tr>
      <tr>
        <td class="pd_x">信息更新时间：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.updateTime}}</td>
        <td class="pd_x">身份证/组织机构代码：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.identificationNO}}</td>
      </tr>
      <tr>
        <td class="pd_x">地址：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.address}}</td>
        <td class="pd_x">本金/本息：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.principal}}</td>
      </tr>
      <tr>
        <td class="pd_x">未还/罚息：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.penalty}}</td>
        <td class="pd_x">已还金额：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.paid}}</td>
      </tr>
      <tr>
        <td class="pd_x">数据来源单位名称：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.sourceName}}</td>
        <td class="pd_x">发布时间：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.time}}</td>
      </tr>
      <tr>
        <td class="pd_x">执行法院名称：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.court}}</td>
        <td class="pd_x">类别：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.dataType}}</td>
      </tr>
      <tr>
        <td class="pd_x">内容：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.content}}</td>
        <td class="pd_x">相关当事人：</td>
        <td class="pd_x">{{data.pageData[0].wdhmd.relatedParty}}</td>

      </tr>
    </table>
    <table class="full border" v-if="data.pageData[0] == 'ajlc'">
      <tr>
        <td class="pd_x">案件流程 ID：</td>
        <td class="pd_x">{{data.pageData[0].ajlc.id}}</td>
        <td class="pd_x">立案时间：</td>
        <td class="pd_x">{{data.pageData[0].ajlc.time}}</td>
      </tr>
      <tr>
        <td class="pd_x">当事人：</td>
        <td class="pd_x">{{data.pageData[0].ajlc.name}}</td>
        <td class="pd_x">案由：</td>
        <td class="pd_x">{{data.pageData[0].ajlc.caseCause}}</td>
      </tr>
      <tr>
        <td class="pd_x">内容：</td>
        <td class="pd_x">{{data.pageData[0].ajlc.content}}</td>
        <td class="pd_x">案号：</td>
        <td class="pd_x">{{data.pageData[0].ajlc.caseNO}}</td>
      </tr>
      <tr>
        <td class="pd_x">执行法院名称：</td>
        <td class="pd_x">{{data.pageData[0].ajlc.court}}</td>
        <td class="pd_x">类别：</td>
        <td class="pd_x">{{data.pageData[0].ajlc.dataType}}</td>
      </tr>
      <tr>
        <td class="pd_x">案件类别：</td>
        <td class="pd_x">{{data.pageData[0].ajlc.caseType}}</td>
      </tr>
    </table>
    <table class="full border" v-if="data.pageData[0] == 'bgt'">
      <tr>
        <td class="pd_x">曝光台 ID：</td>
        <td class="pd_x">{{data.pageData[0].bgt.id}}</td>
        <td class="pd_x">发布时间：</td>
        <td class="pd_x">{{data.pageData[0].bgt.time}}</td>
      </tr>
      <tr>
        <td class="pd_x">当事人：</td>
        <td class="pd_x">{{data.pageData[0].bgt.name}}</td>
        <td class="quarter half pd_x">标的金额：</td>
        <td class="pd_x">{{data.pageData[0].bgt.executionTarget}}</td>
      </tr>

      <tr>
        <td class="pd_x">内容：</td>
        <td class="pd_x">{{data.pageData[0].bgt.content}}</td>
        <td class="pd_x">案号：</td>
        <td class="pd_x">{{data.pageData[0].bgt.caseNO}}</td>
      </tr>
      <tr>
        <td class="pd_x">执行法院名称：</td>
        <td class="pd_x">{{data.pageData[0].bgt.court}}</td>
        <td class="pd_x">类别：</td>
        <td class="pd_x">{{data.pageData[0].bgt.dataType}}</td>
      </tr>
      <tr>
        <td class="pd_x">统计信息：</td>
        <td class="pd_x">{{data.pageData[0].bgt.bgDate}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'entpLawsuit3'
}

</script>
