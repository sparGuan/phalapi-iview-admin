<!-- 个人名下企业查询 -->
<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <tableReportTemp :data="data || []" :infos="infos" />
  </div>
</template>

<script>
import tableReportTemp from './tableReportTemp'
export default {
  name: 'PersonalEnterprise',
  components: {
    tableReportTemp
  },
  data () {
    return {
      infos: {
        TITLE: {
          punishBreaks: '失信被执行人信息',
          punished: '被执行人信息',
          caseInfos: '行政处罚历史信息',
          corporates: '企业法人信息',
          corporateManagers: '企业主要管理人员信息',
          corporateShareholders: '企业股东信息'
        },
        FIELD: {
          punishBreaks:
            [
              {
                title: '案号',
                key: 'caseCode',
                align: 'center'
              },
              {
                title: '案件状态',
                key: 'caseState',
                align: 'center'
              },
              {
                title: '被执行人姓名/名称',
                key: 'name',
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
                title: '身份证号码',
                key: 'cardNum',
                align: 'center'
              },
              {
                title: '身份证原始发证地',
                key: 'ysfzd',
                align: 'center'
              },
              {
                title: '法定代表人/负责人姓名',
                key: 'businessEntity',
                align: 'center'
              },
              {
                title: '立案时间',
                key: 'regDate',
                align: 'center'
              },
              {
                title: '公布时间',
                key: 'publishDate',
                align: 'center'
              },
              {
                title: '执行法院',
                key: 'courName',
                align: 'center'
              },
              {
                title: '省份',
                key: 'areaName',
                align: 'center'
              },
              {
                title: '执行依据文号',
                key: 'gistId',
                align: 'center'
              },
              {
                title: '执行依据单位',
                key: 'gistUnit',
                align: 'center'
              },
              {
                title: '法律文书确定的义务',
                key: 'duty',
                align: 'center'
              },
              {
                title: '失信被执行人行为具体情形',
                key: 'disruptTypeName',
                align: 'center'
              },
              {
                title: '被执行人的履行情况',
                key: 'performAnce',
                align: 'center'
              },
              {
                title: '已履行',
                key: 'performedPart',
                align: 'center'
              },
              {
                title: '未履行',
                key: 'unPerformPart',
                align: 'center'
              },
              {
                title: '关注次数',
                key: 'focusNumber',
                align: 'center'
              },
              {
                title: '退出日期',
                key: 'ExitDate',
                align: 'center'
              }
            ],
          punished: [
            {
              title: '案号',
              key: 'caseCode',
              align: 'center'
            },
            {
              title: '被执行人姓名/名称',
              key: 'name',
              align: 'center'
            },
            {
              title: '身份证号码',
              key: 'cardNum',
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
              key: 'areaName',
              align: 'center'
            },
            {
              title: '身份证原始发证地',
              key: 'ysfzd',
              align: 'center'
            },
            {
              title: '执行法院',
              key: 'courtName',
              align: 'center'
            },
            {
              title: '立案时间',
              key: 'regDate',
              align: 'center'
            },
            {
              title: '案件状态',
              key: 'caseState',
              align: 'center'
            },
            {
              title: '执行标的(元)',
              key: 'execMoney',
              align: 'center'
            },
            {
              title: '被执行人类型',
              key: 'type',
              align: 'center'
            },
            {
              title: '关注次数',
              key: 'focusNum',
              align: 'center'
            }

          ],
          caseInfos: [
            {
              title: '案由',
              key: 'caseReason',
              align: 'center'
            },
            {
              title: '案发时间',
              key: 'caseTime',
              align: 'center'
            },
            {
              title: '案值',
              key: 'caseVal',
              align: 'center'
            },
            {
              title: '案件类型',
              key: 'caseType',
              align: 'center'
            },
            {
              title: '执行类别',
              key: 'exeSort',
              align: 'center'
            },
            {
              title: '案件结果',
              key: 'caseResult',
              align: 'center'
            },
            {
              title: '处罚决定文书',
              key: 'penDecNo',
              align: 'center'
            },
            {
              title: '处罚决定书签发日期',
              key: 'penDecIssDate',
              align: 'center'
            },
            {
              title: '做出行政处罚决定机关名',
              key: 'penAuth',
              align: 'center'
            },
            {
              title: '主要违法事实',
              key: 'illegFact',
              align: 'center'
            },
            {
              title: '处罚依据',
              key: 'penBasis',
              align: 'center'
            },
            {
              title: '处罚种类',
              key: 'penType',
              align: 'center'
            },
            {
              title: '处罚结果',
              key: 'penResult',
              align: 'center'
            },
            {
              title: '处罚金额(万元)',
              key: 'penAm',
              align: 'center'
            },
            {
              title: '处罚执行情况',
              key: 'penExeSt',
              align: 'center'
            }
          ],
          corporates: [
            {
              title: '查询人姓名',
              key: 'ryName',
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
              key: 'regCap',
              align: 'center'
            },
            {
              title: '注册资本币种',
              key: 'regCapCur',
              align: 'center'
            },
            {
              title: '企业状态',
              key: 'entStatus',
              align: 'center'
            },
            {
              title: '统一社会信用代码',
              key: 'creditNo',
              align: 'center'
            }
          ],
          corporateManagers: [
            {
              title: '查询人姓名',
              key: 'creditNo',
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
              key: 'regCap',
              align: 'center'
            },
            {
              title: '注册资本币种',
              key: 'regCapCur',
              align: 'center'
            },
            {
              title: '企业状态',
              key: 'entStatus',
              align: 'center'
            },
            {
              title: '认缴出资额(万元)',
              key: 'subConam',
              align: 'center'
            },
            {
              title: '认缴出资币种',
              key: 'currency',
              align: 'center'
            },
            {
              title: '出资比例',
              key: 'fundedRatio',
              align: 'center'
            },
            {
              title: '统一社会信用代码',
              key: 'creditNo',
              align: 'center'
            }
          ],
          corporateShareholders: [
            {
              title: '查询人姓名',
              key: 'ryName',
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
              key: 'regCap',
              align: 'center'
            },
            {
              title: '注册资本币种',
              key: 'regCapCur',
              align: 'center'
            },
            {
              title: '企业状态',
              key: 'entStatus',
              align: 'center'
            },
            {
              title: '职务',
              key: 'position',
              align: 'center'
            },
            {
              title: '统一社会信用代码',
              key: 'creditNo',
              align: 'center'
            }
          ]
        }
      }
    }
  },
  props: ['data'],
  mounted () {

  }
}

</script>
