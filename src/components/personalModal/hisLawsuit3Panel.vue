<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="pd_x min150 title" colspan="12">输入信息</td>
      </tr>
      <tr>
        <td class="pd_x min150">姓名：</td>
        <td class="pd_x min150">{{ data.name }}</td>
        <td class="pd_x min150">身份证号：</td>
        <td class="pd_x min150">{{ data.identityCard }}</td>
      </tr>
    </table>

    <div v-if="data.checkStatus === 'EXIST'">
      <div v-for="item in data.pageData">
      <!-- 裁判文书 -->
        <table class="full border" v-if="item.dataType.toLowerCase() === 'cpws'">
          <tr>
            <td class="pd_x min150 title" colspan="12">裁判文书</td>
          </tr>
          <tr>
            <td class="pd_x min150" >裁判文书ID：</td>
            <td class="pd_x min150" >{{ item.id }}</td>
            <td class="pd_x min150" >标题：</td>
            <td class="pd_x min150" >{{ item.title }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">内容：</td>
            <td class="pd_x min150" colspan="6">{{ item.content }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">案件类型：</td>
            <td class="pd_x min150">{{ item.caseType }}</td>
            <td class="pd_x min150">案号：</td>
            <td class="pd_x min150">{{ item.caseNO }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">类别：</td>
            <td class="pd_x min150">{{ item.dataType }}</td>
            <td class="pd_x min150">法院名称：</td>
            <td class="pd_x min150">{{ item.court }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">案由：</td>
            <td class="pd_x min150">{{ item.caseNO }}</td>
            <td class="pd_x min150">判决结果：</td>
            <td class="pd_x min150">{{ item.judgeResult }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">匹配度：</td>
            <td class="pd_x min150">{{ item.matchRatio }}</td>
            <td class="pd_x min150">当事人id</td>
            <td class="pd_x min150">{{ item.partyId }}</td>
          </tr>
          <tr>
            <td class="pd_x min150" colspan="12">当事人列表信息：</td>
          </tr>
          <tr>
            <td class="pd_x min150" colspan="12" style="padding:15px;">
              <Table border :columns="columns1" :data="item.litigants"></Table>
            </td>
          </tr>
          <tr>
            <td class="pd_x min150">开庭时间：</td>
            <td class="pd_x min150">{{ item.time }}</td>
            <td class="pd_x min150">审结时间：</td>
            <td class="pd_x min150">{{ item.time }}</td>
          </tr>
        </table>
      <!-- 执行公告 -->
        <table class="full border" v-else-if="item.dataType.toLowerCase() === 'zxgg'">
          <tr>
            <td class="pd_x min150 title" colspan="12">执行公告</td>
          </tr>
          <tr>
            <td class="pd_x min150">标题</td>
            <td class="pd_x min150">{{ item.title }}</td>
            <td class="pd_x min150">被执行人名称：</td>
            <td class="pd_x min150">{{ item.name }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">身份证号：</td>
            <td class="pd_x min150">{{ item.identificationNO }}</td>
            <td class="pd_x min150">执行标的：</td>
            <td class="pd_x min150">{{ item.executionTarget }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">执行公告ID：</td>
            <td class="pd_x min150">{{ item.id }}</td>
            <td class="pd_x min150">立案时间：</td>
            <td class="pd_x min150">{{ item.time }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">内容：</td>
            <td class="pd_x min150">{{ item.content }}</td>
            <td class="pd_x min150">案号：</td>
            <td class="pd_x min150">{{ item.caseNO }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">执行法院名称：</td>
            <td class="pd_x min150">{{ item.court }}</td>
            <td class="pd_x min150">类别：</td>
            <td class="pd_x min150">{{ item.dataType }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">匹配度：</td>
            <td class="pd_x min150">{{ item.matchRatio }}</td>
            <td class="pd_x min150">案件状态：</td>
            <td class="pd_x min150">{{ parseInt(item.caseStatus) === 1 ? '已处理' : '未处理' }}</td>
          </tr>
        </table>
      <!-- 开庭公告 -->
        <table class="full border" v-else-if="item.dataType.toLowerCase() === 'ktgg'">
          <tr>
            <td class="pd_x min150 title" colspan="12">开庭公告</td>
          </tr>

          <tr>
            <td class="pd_x min150">开庭公告ID：</td>
            <td class="pd_x min150">{{ item.id }}</td>
            <td class="pd_x min150">当事人：</td>
            <td class="pd_x min150">{{ item.party }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">案由</td>
            <td class="pd_x min150">{{ item.caseCause }}</td>
            <td class="pd_x min150">法庭名称：</td>
            <td class="pd_x min150">{{ item.courtroom }}</td>
          </tr>
          <tr>

            <td class="pd_x min150">法官</td>
            <td class="pd_x min150">{{ item.judge }}</td>
            <td class="pd_x min150">案号：</td>
            <td class="pd_x min150">{{ item.caseNO }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">执行法院名称：</td>
            <td class="pd_x min150">{{ item.court }}</td>
            <td class="pd_x min150">类别：</td>
            <td class="pd_x min150">{{ item.dataType }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">原告：</td>
            <td class="pd_x min150">{{ item.plaintiff }}</td>
            <td class="pd_x min150">被告：</td>
            <td class="pd_x min150">{{ item.defendant }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">匹配度：</td>
            <td class="pd_x min150">{{ item.matchRatio }}</td>
            <td class="pd_x min150">开庭时间：</td>
            <td class="pd_x min150">{{ item.time }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">内容：</td>
            <td class="pd_x min150">{{ item.content }}</td>
          </tr>
        </table>
      <!-- 失信公告 -->
        <table class="full border" v-else-if="item.dataType.toLowerCase() === 'sxgg'">

          <tr>
            <td class="pd_x min150 title" colspan="12">失信公告</td>
          </tr>

          <tr>
            <td class="pd_x min150">失信公告ID：</td>
            <td class="pd_x min150">{{ item.id }}</td>
            <td class="pd_x min150">被执行人名称：</td>
            <td class="pd_x min150">{{ item.name }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">身份证号：</td>
            <td class="pd_x min150">{{ item.identificationNO }}</td>
            <td class="pd_x min150">性别：</td>
            <td class="pd_x min150">{{ item.gender }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">年龄：</td>
            <td class="pd_x min150">{{ item.age }}</td>
            <td class="pd_x min150">省份：</td>
            <td class="pd_x min150">{{ item.province }}</td>
          </tr>
          <tr>
             <td class="pd_x min150">做出执行依据单位：</td>
            <td class="pd_x min150">{{ item.executableUnit }}</td>
            <td class="pd_x min150">依据案号：</td>
            <td class="pd_x min150">{{ item.evidenceCode }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">生效法律文书确定的义务：</td>
            <td class="pd_x min150">{{ item.obligations }}</td>
            <td class="pd_x min150">失信被执行人行为具体情形：</td>
            <td class="pd_x min150">{{ item.specificCircumstances }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">执行法院名称：</td>
            <td class="pd_x min150">{{ item.court }}</td>
            <td class="pd_x min150">类别：</td>
            <td class="pd_x min150">{{ item.dataType }}</td>

          </tr>
          <tr>
            <td class="pd_x min150">案号：</td>
            <td class="pd_x min150">{{ item.caseNO }}</td>
            <td class="pd_x min150">履行情况：</td>
            <td class="pd_x min150">{{ item.implementationStatus }}</td>
          </tr>
          <tr>
             <td class="pd_x min150">内容：</td>
            <td class="pd_x min150" colspan="6">{{ item.content }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">发布时间：</td>
            <td class="pd_x min150">{{ item.postTime }}</td>
            <td class="pd_x min150">立案时间：</td>
            <td class="pd_x min150">{{ item.time }}</td>
          </tr>
        </table>

      <!-- 法院公告 -->
        <table class="full border" v-else-if="item.dataType.toLowerCase() === 'fygg'">
           <tr>
            <td class="pd_x min150 title" colspan="12">法院公告</td>
          </tr>

          <tr>
            <td class="pd_x min150">法院公告ID：</td>
            <td class="pd_x min150">{{ item.id }}</td>
            <td class="pd_x min150">当事人：</td>
            <td class="pd_x min150">{{ item.name }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">匹配度：</td>
            <td class="pd_x min150">{{ item.matchRadio }}</td>
            <td class="pd_x min150">公告类型：</td>
            <td class="pd_x min150">{{ item.announcementType }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">发布时间：</td>
            <td class="pd_x min150">{{ item.time }}</td>
            <td class="pd_x min150">公告内容：</td>
            <td class="pd_x min150">{{ item.content }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">法院名称：</td>
            <td class="pd_x min150">{{ item.court }}</td>
            <td class="pd_x min150">类别：</td>
            <td class="pd_x min150">{{ item.dataType }}</td>
          </tr>
        </table>
      <!-- 网贷黑名单 -->
        <table class="full border" v-else-if="item.dataType.toLowerCase() === 'wdhmd'">

           <tr>
            <td class="pd_x min150 title" colspan="12">网贷黑名单</td>
          </tr>

          <tr>
            <td class="pd_x min150">网贷黑名单 ID：</td>
            <td class="pd_x min150">{{ item.content }}</td>
            <td class="pd_x min150">姓名：</td>
            <td class="pd_x min150">{{ item.name }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">相关当事人：</td>
            <td class="pd_x min150">{{ item.relatedParty }}</td>
            <td class="pd_x min150">已还金额：</td>
            <td class="pd_x min150">{{ item.paid }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">匹配度：</td>
            <td class="pd_x min150">{{ item.matchRatio }}</td>
            <td class="pd_x min150">身份证/组织机构代码：</td>
            <td class="pd_x min150">{{ item.identificationNO }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">信息更新时间：</td>
            <td class="pd_x min150">{{ item.updateTime }}</td>
            <td class="pd_x min150">本金/本息：</td>
            <td class="pd_x min150">{{ item.principal }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">未还/罚息：</td>
            <td class="pd_x min150">{{ item.penalty }}</td>
            <td class="pd_x min150">数据来源单位名称：</td>
            <td class="pd_x min150">{{ item.sourceName }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">发布时间：</td>
            <td class="pd_x min150">{{ item.time }}</td>
            <td class="pd_x min150">内容：</td>
            <td class="pd_x min150">{{ item.content }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">执行法院名称：</td>
            <td class="pd_x min150">{{ item.court }}</td>
            <td class="pd_x min150">类别：</td>
            <td class="pd_x min150">{{ item.dataType }}</td>
          </tr>
        </table>
      <!-- 案件流程 -->
        <table class="full border" v-else-if="item.dataType.toLowerCase() === 'ajlc'">
          <tr>
            <td class="pd_x min150 title" colspan="12">案件流程</td>
          </tr>
          <tr>
            <td class="pd_x min150">案件流程ID：</td>
            <td class="pd_x min150">{{ item.id }}</td>
            <td class="pd_x min150">立案时间：</td>
            <td class="pd_x min150">{{ item.time }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">当事人：</td>
            <td class="pd_x min150">{{ item.name }}</td>
            <td class="pd_x min150">流程状态：</td>
            <td class="pd_x min150">{{ item.proposer }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">匹配度：</td>
            <td class="pd_x min150">{{ item.content }}</td>
            <td class="pd_x min150">案件类别：</td>
            <td class="pd_x min150">{{ item.caseType }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">内容：</td>
            <td class="pd_x min150">{{ item.content }}</td>
            <td class="pd_x min150">案号：</td>
            <td class="pd_x min150">{{ item.caseNO }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">执行法院名称：</td>
            <td class="pd_x min150">{{ item.court }}</td>
            <td class="pd_x min150">类别：</td>
            <td class="pd_x min150">{{ item.dataType }}</td>
          </tr>
        </table>

        <table class="full border" v-else-if="item.dataType.toLowerCase() === 'bgt'">
           <tr>
            <td class="pd_x min150 title" colspan="12">曝光台</td>
          </tr>
          <tr>
            <td class="pd_x min150">曝光台 ID：</td>
            <td class="pd_x min150">{{ item.id }}</td>
            <td class="pd_x min150">发布时间：</td>
            <td class="pd_x min150">{{ item.time }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">当事人：</td>
            <td class="pd_x min150">{{ item.name }}</td>
            <td class="pd_x min150">匹配度：</td>
            <td class="pd_x min150">{{ item.matchRatio }}</td>
          </tr>

          <tr>
            <td class="pd_x min150">执行法院名称：</td>
            <td class="pd_x min150">{{ item.court }}</td>
            <td class="pd_x min150">类别：</td>
            <td class="pd_x min150">{{ item.dataType }}</td>
          </tr>

          <tr>
            <td class="pd_x min150">标的金额：</td>
            <td class="pd_x min150">{{ item.executionTarget }}</td>
            <td class="pd_x min150">匹配度：</td>
            <td class="pd_x min150">{{ item.matchRadio }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">案由：</td>
            <td class="pd_x min150">{{ item.caseCause }}</td>
            <td class="pd_x min150">案号：</td>
            <td class="pd_x min150">{{ item.caseNO }}</td>
          </tr>
          <tr>
            <td class="pd_x min150">内容：</td>
            <td class="pd_x min150" colspan="6">{{ item.content }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hisLawsuit3',
  props: ['data'],
  data () {
    return {
      columns1: [
        {
          title: '名称',
          key: 'name',
          minWidth: 150,
          align: 'center'
        },
        {
          title: '当事人称号(原告、被告)',
          key: 'title',
          align: 'center'
        },
        {
          title: '当事人生日',
          key: 'birthday',
          align: 'center'
        },
        {
          title: '当事人类型',
          key: 'type',
          align: 'center'
        },
        {
          title: '当事人立场(上诉人,、被上诉人、第三人)',
          key: 'standpoint',
          align: 'center'
        },
        {
          title: '当事人身份证号码',
          key: 'identificationNO',
          align: 'center'
        },
        {
          title: '地址',
          key: 'address',
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
  }
}

</script>
