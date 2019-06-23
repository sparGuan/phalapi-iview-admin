<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <tableReportTemp :data="data" :infos="infos" />
  </div>
</template>

<script>

import tableReportTemp from './tableReportTemp'
export default {
  name: 'icbcData',
  props: ['data'],
  components: {
    tableReportTemp
  },
  data () {
    return {
      infos: {
        TITLE: {
          basic: '企业基本信息',
          shareholder: '股东信息',
          shareholderPersons: '高管信息',
          corporates: '企业法人信息',
          legalPersonInvests: '法人其他任职信息',
          enterpriseInvests: '企业对外投资信息',
          alterInfos: '变更信息',
          filiations: '分支机构信息',
          punishBreaks: '失信被执行人信息',
          punishBreaks: '失信被执行人信息',
          punished: '被执行人信息',
          sharesFrosts: '股权冻结历史信息',
          liquidations: '清算信息',
          morguaInfos: '动产抵押物信息',
          caseInfos: '行政处罚历史信息',
          mortgageAlter: '动产抵押-变更信息',
          mortgageCancels: '动产抵押-注销信息',
          mortgageDebtors: '动产抵押-被担保主债权信息',
          mortgagePersons: '动产抵押-抵押人信息',
          mortgageRegisters: '动产抵押-登记信息',
          breakLaw: '严重违法信息',
          exceptionLists: '企业异常名录',
          orgBasics: '组织机构代码',
          orgDetails: '股权出质信息详情',
          equityInfos: '股权出质信息',
          equityChangeInfos: '股权出质信息-变更信息',
          cancellationOfInfos: '股权出质信息-注销信息',
          tradeMarks: '注册商标'
        },
        FIELD: {
          basic: {
            entName: '企业名称',
            regNo: '注册号',
            oRigegNo: '原注册号',
            fName: '法定代表人姓名',
            regCap: '注册资本(万元)',
            recCap: '实收资本(万元)',
            regCapCur: '注册资本币种',
            entStatus: '经营状态(在营、吊销、注销、其他)',
            entType: '企业(机构)类型',
            esDate: '开业日期',
            opFrom: '经营期限自',
            opTo: '经营期限至',
            dom: '住址',
            regorg: '登记机关',
            abuItem: '许可经营项目',
            cbuItem: '一般经营项目',
            opScope: '经营(业务)范围',
            opScoandForm: '经营(业务)范围及方式',
            anCheYear: '最后年检年度',
            changDate: '变更日期',
            canDate: '注销日期',
            revDate: '吊销日期',
            anCheDate: '最后年检日期',
            induStryphyCode: '行业门类代码',
            induStryphyName: '行业门类名称',
            induStryCoCode: '国民经济行业代码',
            induStryCoName: '国民经济行业名称',
            creditNo: '统一社会信用代码',
            apprdate: '核准日期',
            industryPhyAll: '行业门类代码及名称',
            regOrgCode: '注册地址行政区编号',
            entNameEng: '企业英文名称',
            zsOpScope: '经营业务范围',
            domDistrict: '住所所在行政区划',
            tel: '联系电话',
            industryCoAll: '国民经济行业代码及名称',
            empNum: '员工人数',
            regOrgProvince: '所在省份',
            sextNodeNum: '省节点编号',
            opLoc: '经营场所'
          },
          orgDetails: {
            bzjg: '办证机构',
            bzrq: '代码证办证日期',
            fddbr: '法人代表姓名',
            jgdm: '组织机构代码',
            jgdz: '机构地址',
            jglx: '机构类型',
            jgmc: '组织机构名称',
            xzqh: '行政区划',
            zcrq: '注册日期',
            zfrq: '代码证作废日期',
            zybz: '质疑标志'
          },
          shareholder: [
            {
              title: '股东名称',
              key: 'shaName',
              align: 'center'
            },
            {
              title: '认缴出资额(万元)',
              key: 'subConAm',
              align: 'center'
            },
            {
              title: '认缴出资币种',
              key: 'regCapCur',
              align: 'center'
            },
            {
              title: '出资方式',
              key: 'conForm',
              align: 'center'
            },
            {
              title: '出资比例',
              key: 'fundedRatio',
              align: 'center'
            },
            {
              title: '出资日期',
              key: 'conDate',
              align: 'center'
            },
            {
              title: '国别',
              key: 'country',
              align: 'center'
            },
            {
              title: '股东总数量',
              key: 'invaMount',
              align: 'center'
            },
            {
              title: '股东统一社会信用代码',
              key: 'creditNo',
              align: 'center'
            }
          ],
          shareholderPersons: [
            {
              title: '姓名',
              key: 'name',
              align: 'center'
            },
            {
              title: '职位',
              key: 'position',
              align: 'center'
            },
            {
              title: '性别',
              key: 'sex',
              align: 'center'
            },
            {
              title: '总人数',
              key: 'personAmount',
              align: 'center'
            }
          ],
          legalPersonInvests: [
            {
              title: '姓名',
              key: 'name',
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
              title: '经营状态(在营、吊销、注销、其他)',
              key: 'entStatus',
              align: 'center'
            },
            {
              title: '注销日期',
              key: 'canDate',
              align: 'center'
            },
            {
              title: '吊销日期',
              key: 'revDate',
              align: 'center'
            },
            {
              title: '登记机关',
              key: 'regOrg',
              align: 'center'
            },
            {
              title: '认缴出资额(万元)',
              key: 'subConAm',
              align: 'center'
            },
            {
              title: '认缴出资币种',
              key: 'curRenCy',
              align: 'center'
            },
            {
              title: '出资方式',
              key: 'conForm',
              align: 'center'
            },
            {
              title: '出资比例',
              key: 'fundedRatio',
              align: 'center'
            },
            {
              title: '开业日期',
              key: 'esDate',
              align: 'center'
            },
            {
              title: '注册地址行政区编号',
              key: 'postCode',
              align: 'center'
            },
            {
              title: '企业总数量',
              key: 'entAmount',
              align: 'center'
            },
            {
              title: '统一社会信用代码',
              key: 'creditNo',
              align: 'center'
            }
          ],
          legalPersonInvests: [
            {
              title: '姓名',
              key: 'name',
              align: 'center'
            },
            {
              title: '企业(机构)名称',
              key: 'entName',
              align: 'center'
            },
            {
              title: '姓名',
              key: 'name',
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
              title: '经营状态(在营、吊销、注销、其他)',
              key: 'entStatus',
              align: 'center'
            },
            {
              title: '注销日期',
              key: 'canDate',
              align: 'center'
            },
            {
              title: '吊销日期',
              key: 'revDate',
              align: 'center'
            },
            {
              title: '登记机关',
              key: 'regOrg',
              align: 'center'
            },
            {
              title: '职务',
              key: 'position',
              align: 'center'
            },
            {
              title: '是否法定代表人',
              key: 'lerepSign',
              align: 'center'
            },
            {
              title: '开业日期',
              key: 'esDate',
              align: 'center'
            },
            {
              title: '企业总数量',
              key: 'entAmount',
              align: 'center'
            },
            {
              title: '注册地址行政区编号',
              key: 'postCode',
              align: 'center'
            }
          ],
          enterpriseInvests: [
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
              title: '经营状态',
              key: 'entStatus',
              align: 'center'
            },
            {
              title: '注销日期',
              key: 'canDate',
              align: 'center'
            },
            {
              title: '吊销日期',
              key: 'revDate',
              align: 'center'
            },
            {
              title: '登记机关',
              key: 'regOrg',
              align: 'center'
            },
            {
              title: '认缴出资额(万元)',
              key: 'subConAm',
              align: 'center'
            },
            {
              title: '认缴出资币种',
              key: 'conGroCur',
              align: 'center'
            },
            {
              title: '出资方式',
              key: 'conFrom',
              align: 'center'
            },
            {
              title: '出资比例',
              key: 'fundedRation',
              align: 'center'
            },
            {
              title: '企业总数量',
              key: 'binvvAmount',
              align: 'center'
            },
            {
              title: '法定代表人姓名',
              key: 'name',
              align: 'center'
            },
            {
              title: '开业时间',
              key: 'openingDate',
              align: 'center'
            },
            {
              title: '注册地址行政区编号',
              key: 'postCode',
              align: 'center'
            },
            {
              title: '统一社会信用代码',
              key: 'creditCode',
              align: 'center'
            }
          ],
          alterInfos: [
            {
              title: '变更日期',
              key: 'altDate',
              align: 'center'
            },
            {
              title: '变更事项',
              key: 'altItem',
              align: 'center'
            },
            {
              title: '变更前内容',
              key: 'altBe',
              align: 'center'
            },
            {
              title: '变更后内容',
              key: 'altAf',
              align: 'center'
            }
          ],
          filiations: [
            {
              title: '分支机构名称',
              key: 'brName',
              align: 'center'
            },
            {
              title: '分支机构企业注册号',
              key: 'brRegNo',
              align: 'center'
            },
            {
              title: '分支机构负责人',
              key: 'brPrincipal',
              align: 'center'
            },
            {
              title: '一般经营项目',
              key: 'cbuItme',
              align: 'center'
            },
            {
              title: '分支机构地址',
              key: 'brAddr',
              align: 'center'
            },
            {
              title: '分支机构统一社会信用代码',
              key: 'brnCreditCode',
              align: 'center'
            },
            {
              title: '分支机构登记机关',
              key: 'brnRegOrg',
              align: 'center'
            },
            {
              title: '分支机构主体身份代码',
              key: 'brpripId',
              align: 'center'
            }
          ],
          morguaInfos: [
            {
              title: '综合信息(数量、质量、状况、所在地等情况)',
              key: 'comprehensiveDetail',
              align: 'center'
            },
            {
              title: '抵押物名称',
              key: 'guaName',
              align: 'center'
            },
            {
              title: '备注',
              key: 'remark',
              align: 'center'
            },
            {
              title: '登记编号',
              key: 'regNo',
              align: 'center'
            },
            {
              title: '所有权或使用权归属',
              key: 'owner',
              align: 'center'
            }
          ],
          punishBreaks: [
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
            }, {
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
              title: '法律文书确定的义务',
              key: 'duty',
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
              title: '退出日期',
              key: 'exitDate',
              align: 'center'
            },
            {
              title: '关注次数',
              key: 'focusNumber',
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
              title: '执行标的(元)',
              key: 'execMoney',
              align: 'center'
            },
            {
              title: '关注次数',
              key: 'focusNum',
              align: 'center'
            },
            {
              title: '失信人类型',
              key: 'type',
              align: 'center'
            }
          ],
          sharesFrosts: [
            {
              title: '冻结文号',
              key: 'froDocNo',
              align: 'center'
            },
            {
              title: '冻结机关',
              key: 'froAuth',
              align: 'center'
            },
            {
              title: '冻结起始日期',
              key: 'froFrom',
              align: 'center'
            },
            {
              title: '冻结截至日期',
              key: 'froTo',
              align: 'center'
            },
            {
              title: '冻结金额(万元)',
              key: 'froAm',
              align: 'center'
            },
            {
              title: '解冻机关',
              key: 'thawAuth',
              align: 'center'
            },
            {
              title: '解冻文号',
              key: 'thawDocNo',
              align: 'center'
            },
            {
              title: '解冻日期',
              key: 'thawDate',
              align: 'center'
            },
            {
              title: '解冻说明',
              key: 'thawComment',
              align: 'center'
            }
          ],
          liquidations: [
            {
              title: '清算责任人',
              key: 'ligEntity',
              align: 'center'
            },
            {
              title: '清算负责人',
              key: 'ligPrincipal',
              align: 'center'
            },
            {
              title: '清算组成员',
              key: 'liQMen',
              align: 'center'
            },
            {
              title: '清算完结情况',
              key: 'liGSt',
              align: 'center'
            },
            {
              title: '清算完结日期',
              key: 'ligEndDate',
              align: 'center'
            },
            {
              title: '债务承接人',
              key: 'debtTranee',
              align: 'center'
            },
            {
              title: '债权承接人',
              key: 'claimTranee',
              align: 'center'
            },
            {
              title: '电话',
              key: 'mobile',
              align: 'center'
            },
            {
              title: '地址',
              key: 'address',
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
              title: '处罚机关',
              key: 'penAuth',
              align: 'center'
            },
            {
              title: '处罚机关名',
              key: 'penAuthCn',
              align: 'center'
            },
            {
              title: '主要违法事实',
              key: 'illegFact',
              align: 'center'
            },
            {
              title: '处罚种类',
              key: 'penType',
              align: 'center'
            },
            {
              title: '处罚种类中文',
              key: 'penTypeDescription',
              align: 'center'
            },
            {
              title: '处罚内容',
              key: 'penContent',
              align: 'center'
            },
            {
              title: '公示日期',
              key: 'announcementDate',
              align: 'center'
            }
          ],
          caseInfos: [
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
              title: '处罚机关',
              key: 'penAuth',
              align: 'center'
            },
            {
              title: '处罚机关名',
              key: 'penAuthCn',
              align: 'center'
            },
            {
              title: '主要违法事实',
              key: 'illegFact',
              align: 'center'
            },
            {
              title: '处罚种类',
              key: 'penType',
              align: 'center'
            },
            {
              title: '处罚种类中文',
              key: 'penTypeDescription',
              align: 'center'
            },
            {
              title: '处罚内容',
              key: 'penContent',
              align: 'center'
            },
            {
              title: '公示日期',
              key: 'penContent',
              align: 'announcementDate'
            }
          ],
          mortgageAlter: [
            {
              title: '变更日期',
              key: 'alterDate',
              align: 'center'
            },
            {
              title: '变更内容',
              key: 'alterDetail',
              align: 'center'
            },
            {
              title: '登记编号',
              key: 'RegNo',
              align: 'center'
            }
          ],
          mortgageCancels: [
            {
              title: '注销日期',
              key: 'cancelDate',
              align: 'center'
            },
            {
              title: '注销原因',
              key: 'cancelReason',
              align: 'center'
            },
            {
              title: '登记编号',
              key: 'regNo',
              align: 'center'
            }
          ],
          mortgageDebtors: [
            {
              title: '履行债务开始日期',
              key: 'startDate',
              align: 'center'
            },
            {
              title: '履行债务结束日期',
              key: 'endtDate',
              align: 'center'
            },
            {
              title: '数额',
              key: 'amount',
              align: 'center'
            },
            {
              title: '担保范围',
              key: 'range',
              align: 'center'
            },
            {
              title: '备注',
              key: 'remark',
              align: 'center'
            },
            {
              title: '种类',
              key: 'type',
              align: 'center'
            },
            {
              title: '编号',
              key: 'regNo',
              align: 'center'
            }
          ],
          mortgagePersons: [
            {
              title: '抵押权人证照/证件号码',
              key: 'credentialNo',
              align: 'center'
            },
            {
              title: '抵押权人证照/证件类型',
              key: 'credentialType',
              align: 'center'
            },
            {
              title: '所在地',
              key: 'domain',
              align: 'center'
            },
            {
              title: '抵押权人名称',
              key: 'name',
              align: 'center'
            },
            {
              title: '登记编号',
              key: 'regNo',
              align: 'center'
            }
          ],
          mortgageRegisters: [
            {
              title: '履行债务开始日期',
              key: 'startDate',
              align: 'center'
            },
            {
              title: '履行债务结束日期',
              key: 'endDate',
              align: 'center'
            },
            {
              title: '被担保债权数额',
              key: 'amount',
              align: 'center'
            },
            {
              title: '担保范围',
              key: 'range',
              align: 'center'
            },
            {
              title: '被担保债券种类',
              key: 'type',
              align: 'center'
            },
            {
              title: '登记编号',
              key: 'regNo',
              align: 'center'
            },
            {
              title: '登记日期',
              key: 'registerDate',
              align: 'center'
            },
            {
              title: '登记机关',
              key: 'registerOrg',
              align: 'center'
            },
            {
              title: '省份代码',
              key: 'provinceNo',
              align: 'center'
            },
            {
              title: '状态',
              key: 'status',
              align: 'center'
            }
          ],
          breakLaw: [
            {
              title: '列入日期',
              key: 'inDate',
              align: 'center'
            },
            {
              title: '列入原因',
              key: 'inReason',
              align: 'center'
            },
            {
              title: '列入作出决定机关',
              key: 'inRegOrg',
              align: 'center'
            },
            {
              title: '列入作出决定文号',
              key: 'inSn',
              align: 'center'
            },
            {
              title: '移出日期',
              key: 'outDate',
              align: 'center'
            },
            {
              title: '移出原因',
              key: 'outReason',
              align: 'center'
            },
            {
              title: '移出作出决定机关',
              key: 'outRegOrg',
              align: 'center'
            },
            {
              title: '移出作出决定文号',
              key: 'outSn',
              align: 'center'
            }
          ],
          exceptionLists: [
            {
              title: '企业名称',
              key: 'name',
              align: 'center'
            },
            {
              title: '企业类型',
              key: 'type',
              align: 'center'
            },
            {
              title: '列入日期',
              key: 'inDate',
              align: 'center'
            },
            {
              title: '列入原因',
              key: 'inReason',
              align: 'center'
            },
            {
              title: '移出日期',
              key: 'outDate',
              align: 'center'
            },
            {
              title: '移出日期',
              key: 'outDate',
              align: 'center'
            },
            {
              title: '退出异常名录原因',
              key: 'outReason',
              align: 'center'
            },
            {
              title: '移出日期',
              key: 'outDate',
              align: 'center'
            },
            {
              title: '退出异常名录原因',
              key: 'outReason',
              align: 'center'
            },
            {
              title: '注册号',
              key: 'regNo',
              align: 'center'
            },
            {
              title: '统一社会信用代码',
              key: 'shxydm',
              align: 'center'
            },
            {
              title: '列入机关名称',
              key: 'inOrg',
              align: 'center'
            },
            {
              title: '移出机关名称',
              key: 'outOrg',
              align: 'center'
            }
          ],
          orgBasics: [
            {
              title: '组织机构代码',
              key: 'jgdm',
              align: 'center'
            },
            {
              title: '机构地址',
              key: 'jgdz',
              align: 'center'
            },
            {
              title: '组织机构名称',
              key: 'jgmc',
              align: 'center'
            },
            {
              title: '质疑标志',
              key: 'zybz',
              align: 'center'
            }
          ],
          equityInfos: [
            {
              title: '出质股权数额',
              key: 'stkPawnCzamt',
              align: 'center'
            },
            {
              title: '出质人证件/证件号',
              key: 'stkPawnCzcerno',
              align: 'center'
            },
            {
              title: '出质人',
              key: 'stkPawnCzper',
              align: 'center'
            },
            {
              title: '公示日期',
              key: 'stkPawnDate',
              align: 'center'
            }, {
              title: '质权出质设立登记日期',
              key: 'stkPawnRegdate',
              align: 'center'
            },
            {
              title: '登记编号',
              key: 'stkPawnRegno',
              align: 'center'
            },
            {
              title: '状态',
              key: 'stkPawnStatus',
              align: 'center'
            },
            {
              title: '质权人证件/证件号',
              key: 'stkPawnZqcerno',
              align: 'center'
            },
            {
              title: '质权人姓名',
              key: 'stkPawnZqper',
              align: 'center'
            },
            {
              title: '关联内容',
              key: 'content',
              align: 'center'
            }
          ],
          equityChangeInfos: [
            {
              title: '变更内容',
              key: 'stkPawnBgnr',
              align: 'center'
            },
            {
              title: '变更日期',
              key: 'stkPawnBgrq',
              align: 'center'
            },
            {
              title: '关联内容',
              key: 'content',
              align: 'center'
            }
          ],
          cancellationOfInfos: [
            {
              title: '注销日期',
              key: 'stkPawnDate',
              align: 'center'
            },
            {
              title: '注销原因',
              key: 'stkPawnRes',
              align: 'center'
            },
            {
              title: '关联内容',
              key: 'content',
              align: 'center'
            }
          ],
          tradeMarks: [
            {
              title: '申请日期',
              key: 'appDate',
              align: 'center'
            },
            {
              title: '专用期(起始日期)',
              key: 'beginDate',
              align: 'center'
            },
            {
              title: '初审公告期',
              key: 'checkDate',
              align: 'center'
            },
            {
              title: '专用期(到期日期)',
              key: 'endDate',
              align: 'center'
            },
            {
              title: '注册码解密',
              key: 'markCodeKey',
              align: 'center'
            },
            {
              title: '商标名称',
              key: 'markName',
              align: 'center'
            },
            {
              title: '商标类型',
              key: 'markTypeNew',
              align: 'center'
            },
            {
              title: '注册公告期',
              key: 'regDate',
              align: 'center'
            },
            {
              title: '商标/服务',
              key: 'typeDetailDes',
              align: 'center'
            },
            {
              title: '流程',
              key: 'xianGmuNew',
              align: 'center'
            },
            {
              title: '商标图片',
              key: 'markImage',
              align: 'center'
            }
          ]
        }
      }
    }
  }
}
</script>
