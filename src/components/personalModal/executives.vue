<style lang="stylus" scoped>
.commontablewrap {
  /deep/.ivu-table-border td {
    font-size: 12px;
  }
}
</style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="pd_x min150 title" colspan="12">批次号</td>
        <td class="pd_x min150 title" colspan="12">{{ data.records.uno }}</td>
      </tr>
    </table>

    <tableReportTemp :data="data.records.result" :infos="infos" />
  </div>
</template>

<script>
import tableReportTemp from './tableReportTemp'
export default {
  name: 'executives',
  props: ['data'],
  components: {
    tableReportTemp
  },
  data () {
    return {
      infos: {
        TITLE: {
          dishonestPersonInc: '失信被执行人信息',
          extInvstAndPosition: '在外投资及任职情况',
          penaltyHis: '行政处罚历史信息',
          executedPersonInc: '被执行人信息'
        },
        FIELD: {
          dishonestPersonInc: [
            {
              title: '案号',
              key: 'caseNo',
              align: 'center'
            },
            {
              title: '被执行人姓名/名称',
              key: 'userName',
              align: 'center'
            },
            {
              title: '失信人类型',
              key: 'type',
              align: 'center'
            },
            {
              title: '性别',
              key: 'sex',
              align: 'center'
            },
            {
              title: '年龄',
              key: 'age',
              align: 'center'
            },
            {
              title: '身份证号码/工商注册号',
              key: 'idNo',
              align: 'center'
            },
            {
              title: '身份证原始发证地',
              key: 'idCardSignAddress',
              align: 'center'
            },
            {
              title: '法定代表人/负责人姓名',
              key: 'aggreUserName',
              align: 'center'
            },
            {
              title: '立案时间',
              key: 'regDate',
              align: 'center'
            },
            {
              title: '发布时间',
              key: 'pubDate',
              align: 'center'
            },
            {
              title: '执行法院',
              key: 'executeCourt',
              align: 'center'
            },
            {
              title: '省份',
              key: 'province',
              align: 'center'
            },
            {
              title: '执行依据文号',
              key: 'executeFileNo',
              align: 'center'
            },
            {
              title: '做出执行依据单位',
              key: 'showExecuteReasonOrg',
              align: 'center'
            },
            {
              title: '生效法律文书确定的义务',
              key: 'obligation',
              align: 'center'
            },
            {
              title: '失信被执行人行为具体情形',
              key: 'behaviorDesc',
              align: 'center'
            },
            {
              title: '被执行人的履行情况',
              key: 'fulfilDesc',
              align: 'center'
            },
            {
              title: '已履行',
              key: 'fufiled',
              align: 'center'
            },
            {
              title: '未履行',
              key: 'unfulfiled',
              align: 'center'
            }
          ],
          extInvstAndPosition: [
            {
              title: '企业(机构)名称',
              key: 'entName',
              align: 'center'
            },
            {
              title: '注册号',
              key: 'registerNo',
              align: 'center'
            },
            {
              title: '企业(机构)类型',
              key: 'entType',
              align: 'center'
            },
            {
              title: '注册资本(万元)',
              key: 'registerCap',
              align: 'center'
            },
            {
              title: '注册资本(万元)',
              key: 'registerCap',
              align: 'center'
            },
            {
              title: '注册资本币种',
              key: 'registerCapCur',
              align: 'center'
            },
            {
              title: '关联关系',
              key: 'relation',
              align: 'center'
            },
            {
              title: '内容',
              key: 'content',
              align: 'center'
            },
            {
              title: '企业状态',
              key: 'entStatus',
              align: 'center'
            }
          ],
          penaltyHis: [
            {
              title: '案发时间',
              key: 'caseTime',
              align: 'center'
            },
            {
              title: '案由',
              key: 'caseReason',
              align: 'center'
            },
            {
              title: '案值',
              key: 'caseValue',
              align: 'center'
            },
            {
              title: '案件类型',
              key: 'caseType',
              align: 'center'
            },
            {
              title: '执行类别',
              key: 'executeType',
              align: 'center'
            },
            {
              title: '案件结果',
              key: 'caseResult',
              align: 'center'
            },
            {
              title: '处罚决定文书',
              key: 'penaltyDecNo',
              align: 'center'
            },
            {
              title: '处罚决定书签发日期',
              key: 'penaltyDecDate',
              align: 'center'
            },
            {
              title: '作出行政处罚决定机关名称',
              key: 'penaltyOrg',
              align: 'center'
            },
            {
              title: '主要违法事实',
              key: 'illgalFact',
              align: 'center'
            },
            {
              title: '处罚依据',
              key: 'penaltyBasis',
              align: 'center'
            },
            {
              title: '处罚种类',
              key: 'penaltyType',
              align: 'center'
            },
            {
              title: '处罚结果',
              key: 'penaltyResult',
              align: 'center'
            },
            {
              title: '处罚金额',
              key: 'penaltyAmt',
              align: 'center'
            },
            {
              title: '处罚执行情况',
              key: 'penaltyExecuteResult',
              align: 'center'
            },
            {
              title: '当事人姓名',
              key: 'personName',
              align: 'center'
            },
            {
              title: '证件号码',
              key: 'cerNo',
              align: 'center'
            }
          ],
          executedPersonInc: [
            {
              title: '案号',
              key: 'caseNo',
              align: 'center'
            },
            {
              title: '被执行人姓名/名称',
              key: 'userName',
              align: 'center'
            },
            {
              title: '身份证号码/企业注册号',
              key: 'idNo',
              align: 'center'
            },
            {
              title: '性别',
              key: 'sex',
              align: 'center'
            },
            {
              title: '年龄',
              key: 'age',
              align: 'center'
            },
            {
              title: '省份',
              key: 'province',
              align: 'center'
            },
            {
              title: '身份证原始发证地',
              key: 'idCardSignAddress',
              align: 'center'
            },
            {
              title: '执行法院',
              key: 'court',
              align: 'center'
            },
            {
              title: '立案时间',
              key: 'regDate',
              align: 'center'
            }, {
              title: '案件状态',
              key: 'status',
              align: 'center'
            },
            {
              title: '执行标的（元）',
              key: 'amount',
              align: 'center'
            }
          ]
        }
      }
    }
  }
}

</script>
