<style lang="stylus" scoped>
.commontablewrap {
  /deep/th .ivu-table-cell {
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="pd_x min150 ">报告编号：</td>
        <td class="pd_x min150 ">{{ data.records.uno }}</td>
        <td class="pd_x min150 ">查询关键字：</td>
        <td class="pd_x min150 ">{{ data.records.result.verifyKey }}</td>
      </tr>
    </table>

    <tableReportTemp :data="data.records.result" :infos="infos" />
  </div>
</template>

<script>
import tableReportTemp from './tableReportTemp'
export default {
  name: 'commercial',
  props: ['data'],
  components: {
    tableReportTemp
  },
  data () {
    return {
      infos: {
        TITLE: {
          basicInc: '工商基本登记信息',
          holderInc: '股东及出资信息',
          mgrPersonInc: '主要管理人员信息',
          entInvstInc: '企业对外投资信息',
          legInvstInc: '法定代表人其他公司投资信息',
          legOtherDutyInc: '法定代表人其他公司任职信息',
          hisChangeInc: '工商登记历史变更',
          penaltyHis: '工商行政处罚记录',
          sharePledgeHis: '股权出质记录',
          shareFrozenHis: '股权冻结记录',
          dishonestPersonInc: '相关法院失信人记录',
          executedPersonInc: '相关法院被执行人记录',
          busExceptionInc: '经营异常名录记录',
          illegalCompanyInc: '严重违法企业名单记录'
        },
        FIELD: {
          basicInc: {
            entName: '企业名称',
            userName: '法定代表人/负责人/执行事务合伙人',
            regNo: '注册号/统一社会信用代码',
            entOrgCode: '组织机构代码',
            province: '所在省份',
            offAreaCode: '注册地址行政区编号',
            regOrg: '登记机关',
            address: '住址',
            entType: '企业(机构)类型',
            runStatus: '经营状态',
            openDate: '开业日期',
            cancelDate: '注销日期',
            revokeDate: '吊销日期',
            regCapCur: '注册资本币种',
            regCapAmt: '注册资本(万元)',
            fctCapAmt: '实收资本(万元)',
            runDateFrom: '经营期限自',
            runDateTo: '经营期限至',
            industryCODE: '行业门类代码',
            industryName: '行业门类名称',
            coCode: '国民经济行业代码',
            coName: '国民经济行业名称',
            allRunItem: '许可经营项目',
            runItem: '一般经营项目',
            busiScope1: '经营(业务)范围',
            busiScope2: '经营(业务)范围及方式'
          },
          holderInc: [
            {
              title: '股东名称',
              key: 'userName',
              align: 'center'
            },
            {
              title: '国别',
              key: 'conType',
              align: 'center'
            },
            {
              title: '出资日期',
              key: 'conDate',
              align: 'center'
            },
            {
              title: '出资方式',
              key: 'conMthd',
              align: 'center'
            },
            {
              title: '认缴出资额(万元)',
              key: 'subAmt',
              align: 'center'
            },
            {
              title: '认缴出资币种',
              key: 'subCur',
              align: 'center'
            },
            {
              title: '出资比例',
              key: 'conRate',
              align: 'center'
            }
          ],
          mgrPersonInc: [
            {
              title: '人员姓名',
              key: 'userName',
              align: 'center'
            },
            {
              title: '职务',
              key: 'dutyInc',
              align: 'center'
            },
            {
              title: '性别',
              key: 'sex',
              align: 'center'
            }
          ],
          entInvstInc: [
            {
              title: '企业(机构)名称',
              key: 'entName',
              align: 'center'
            },
            {
              title: '注册号',
              key: 'regNo',
              align: 'center'
            },
            {
              title: '企业(机构)类型',
              key: 'entType',
              align: 'center'
            },
            {
              title: '注册资本(万元)',
              key: 'regCapAmt',
              align: 'center'
            },
            {
              title: '注册资本币种',
              key: 'regCapCur',
              align: 'center'
            },
            {
              title: '企业状态',
              key: 'status',
              align: 'center'
            },
            {
              title: '开业日期',
              key: 'openDate',
              align: 'center'
            },
            {
              title: '注销日期',
              key: 'canDate',
              align: 'center'
            },
            {
              title: '吊销日期',
              key: 'revokeDate',
              align: 'center'
            },
            {
              title: '登记机关',
              key: 'regOrg',
              align: 'center'
            },
            {
              title: '认缴出资额(万元)',
              key: 'subCapAmt',
              align: 'center'
            },
            {
              title: '认缴出资币种',
              key: 'subCapCur',
              align: 'center'
            },
            {
              title: '出资方式',
              key: 'capMthd',
              align: 'center'
            },
            {
              title: '出资比例',
              key: 'capRate',
              align: 'center'
            }
          ],
          legInvstInc: [
            {
              title: '被查询人',
              key: 'frName',
              align: 'center'
            },
            {
              title: '企业(机构)名称',
              key: 'entName',
              align: 'center'
            },
            {
              title: '注册号',
              key: 'regNo',
              align: 'center'
            },
            {
              title: '企业(机构)类型',
              key: 'entType',
              align: 'center'
            },
            {
              title: '注册资本(万元)',
              key: 'regCapAmt',
              align: 'center'
            },
            {
              title: '注册资本币种',
              key: 'regCapCur',
              align: 'center'
            },
            {
              title: '企业状态',
              key: 'status',
              align: 'center'
            },
            {
              title: '开业日期',
              key: 'openDate',
              align: 'center'
            },
            {
              title: '注销日期',
              key: 'canDate',
              align: 'center'
            }, {
              title: '吊销日期',
              key: 'revokeDate',
              align: 'center'
            },
            {
              title: '登记机关',
              key: 'regOrg',
              align: 'center'
            },
            {
              title: '认缴出资额(万元)',
              key: 'subCapAmt',
              align: 'center'
            },
            {
              title: '认缴出资币种',
              key: 'subCapCur',
              align: 'center'
            },
            {
              title: '出资方式',
              key: 'capMthd',
              align: 'center'
            },
            {
              title: '出资比例',
              key: 'capRate',
              align: 'center'
            }
          ],
          legOtherDutyInc: [
            {
              title: '被查询人',
              key: 'frName',
              align: 'center'
            },
            {
              title: '企业(机构)名称',
              key: 'entName',
              align: 'center'
            },
            {
              title: '注册号',
              key: 'regNo',
              align: 'center'
            },
            {
              title: '企业(机构)类型',
              key: 'entType',
              align: 'center'
            },
            {
              title: '注册资本(万元)',
              key: 'regCapAmt',
              align: 'center'
            },
            {
              title: '注册资本币种',
              key: 'regCapCur',
              align: 'center'
            },
            {
              title: '企业状态',
              key: 'status',
              align: 'center'
            },
            {
              title: '开业日期',
              key: 'openDate',
              align: 'center'
            },
            {
              title: '注销日期',
              key: 'canDate',
              align: 'center'
            },
            {
              title: '吊销日期',
              key: 'revokeDate',
              align: 'center'
            },
            {
              title: '登记机关',
              key: 'regOrg',
              align: 'center'
            },
            {
              title: '职务',
              key: 'dutyInc',
              align: 'center'
            }, {
              title: '是否法定代表人',
              key: 'isFr',
              align: 'center'
            }
          ],
          hisChangeInc: [
            {
              title: '变更日期',
              key: 'changeDate',
              align: 'center'
            },
            {
              title: '变更事项',
              key: 'changeItem',
              align: 'center'
            },
            {
              title: '变更前内容',
              key: 'changeBefore',
              align: 'center'
            },
            {
              title: '变更后内容',
              key: 'changeAfter',
              align: 'center'
            }
          ],
          sharePledgeHis: [
            {
              title: '质权人姓名',
              key: 'pawneeName',
              align: 'center'
            },
            {
              title: '出质人类别',
              key: 'pledgeType',
              align: 'center'
            },
            {
              title: '出质金额',
              key: 'pledgeAmt',
              align: 'center'
            },
            {
              title: '出质审批部门',
              key: 'pledgeChkSit',
              align: 'center'
            },
            {
              title: '出质备案日期',
              key: 'pledgeRecDate',
              align: 'center'
            },
            {
              title: '出质批准日期',
              key: 'pledgeAppDate',
              align: 'center'
            },
            {
              title: '出质截至日期',
              key: 'pledgeEndDate',
              align: 'center'
            }
          ],
          shareFrozenHis: [
            {
              title: '冻结文号',
              key: 'fileNo',
              align: 'center'
            },
            {
              title: '冻结机关',
              key: 'orgName',
              align: 'center'
            },
            {
              title: '冻结起始日期',
              key: 'beginDate',
              align: 'center'
            },
            {
              title: '冻结截至日期',
              key: 'endDate',
              align: 'center'
            },
            {
              title: '冻结金额',
              key: 'amout',
              align: 'center'
            },
            {
              title: '解冻机关',
              key: 'disOrgName',
              align: 'center'
            },
            {
              title: '解冻文号',
              key: 'disFileNo',
              align: 'center'
            },
            {
              title: '解冻日期',
              key: 'disDate',
              align: 'center'
            },
            {
              title: '解冻说明',
              key: 'disDesc',
              align: 'center'
            }
          ],
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
            }, {
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
            }, {
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
            }, {
              title: '立案时间',
              key: 'regDate',
              align: 'center'
            },
            {
              title: '案件状态',
              key: 'status',
              align: 'center'
            },
            {
              title: '执行标的（元）',
              key: 'amount',
              align: 'center'
            }
          ],
          penaltyHis: [
            {
              title: '案发时间',
              key: 'caseDate',
              align: 'center'
            },
            {
              title: '案由',
              key: 'caseReason',
              align: 'center'
            },
            {
              title: '违法行为类型',
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
              title: '作出行政处罚决定日期',
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
              key: 'breakLawFact',
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
            }, {
              title: '处罚执行情况',
              key: 'penaltyResult',
              align: 'center'
            },
            {
              title: '处罚金额',
              key: 'penaltyAmt',
              align: 'center'
            },
            {
              title: '行政处罚内容',
              key: 'penaltyExecute',
              align: 'center'
            }
          ],
          busExceptionInc: [],
          illegalCompanyInc: []
        }
      }
    }
  }
}

</script>
