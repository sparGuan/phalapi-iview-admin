<style lang="stylus" scoped>
.socialsecuritywrap
  //
</style>

<template>
  <div class="commontablewrap socialsecuritywrap">
    <table class="full border">
      <tr>
        <td colspan="8" class="title pd_x">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">{{data.baseInfo.name}}</td>
        <td class="pd_x">身份证号：</td>
        <td class="pd_x">{{data.baseInfo.idcard}}</td>
        <td class="pd_x">性别：</td>
        <td class="pd_x">{{data.baseInfo.sex}}</td>
        <td rowspan="2" colspan="2" class="pd_x"><img alt="照片" :src="data.baseInfo.imgUrl"></td>
      </tr>
      <tr>
        <td class="pd_x">出生日期：</td>
        <td class="pd_x">{{data.baseInfo.birthday}}</td>
        <td class="pd_x">文化程度：</td>
        <td class="pd_x">{{data.baseInfo.education}}</td>
        <td class="pd_x">国家/地区：</td>
        <td class="pd_x">{{data.baseInfo.country}}</td>
      </tr>
      <tr>
        <td class="pd_x">个人身份(党员、群众、干部等)：</td>
        <td class="pd_x">{{data.baseInfo.identityType}}</td>
        <td class="pd_x">参加工作日期：</td>
        <td class="pd_x">{{data.baseInfo.workDate}}</td>
        <td class="pd_x">申报月均工资收入(元)</td>
        <td class="pd_x">{{data.baseInfo.salary}}</td>
        <td class="pd_x">证件类型：</td>
        <td class="pd_x">{{data.baseInfo.papersType}}</td>
      </tr>
      <tr>
        <td class="pd_x">证件号码：</td>
        <td class="pd_x">{{data.baseInfo.papersNum}}</td>
        <td class="pd_x">电子邮件地址：</td>
        <td class="pd_x">{{data.baseInfo.mail}}</td>
        <td class="pd_x">参保人电话：</td>
        <td class="pd_x">{{data.baseInfo.selePhone}}</td>
        <td class="pd_x">公司名称：</td>
        <td class="pd_x">{{data.baseInfo.company}}</td>
      </tr>
       <tr>
        <td class="pd_x">公司组织机构代码：</td>
        <td class="pd_x">{{data.baseInfo.organizeCode}}</td>
        <td class="pd_x">公司社会保险登记证编号：</td>
        <td class="pd_x">{{data.baseInfo.socialInsuranceNum}}</td>
        <td class="pd_x">公司类型：</td>
        <td class="pd_x">{{data.baseInfo.companyType}}</td>
        <td class="pd_x">公司地址：</td>
        <td class="pd_x">{{data.baseInfo.areaCounty}}</td>
      </tr>
       <tr>
        <td class="pd_x">户口性质：</td>
        <td class="pd_x">{{data.baseInfo.hukouType}}</td>
        <td class="pd_x">户口所在地地址：</td>
        <td class="pd_x">{{data.baseInfo.hukouAddress}}</td>
        <td class="pd_x">户口所在地邮政编码：</td>
        <td class="pd_x">{{data.baseInfo.hukouZipcode}}</td>
        <td class="pd_x">居住地(联系)地址：</td>
        <td class="pd_x">{{data.baseInfo.residenceAddress}}</td>
      </tr>
       <tr>
        <td class="pd_x">居住地(联系)邮政编码：</td>
        <td class="pd_x">{{data.baseInfo.residentceZipcode}}</td>
        <td class="pd_x">选择邮寄社会保险对账单地址：</td>
        <td class="pd_x">{{data.baseInfo.mailStatementAddress}}</td>
        <td class="pd_x">对账单邮政编码：</td>
        <td class="pd_x">{{data.baseInfo.statementZipcode}}</td>
        <td class="pd_x">获取对账单方式：</td>
        <td class="pd_x">{{data.baseInfo.statementType}}</td>
      </tr>
      <tr>
        <td class="pd_x">电子邮件地址：</td>
        <td class="pd_x">{{data.baseInfo.mail}}</td>
        <td class="pd_x">参保人电话：</td>
        <td class="pd_x">{{data.baseInfo.selePhone}}</td>
        <td class="pd_x">委托代发银行名称：</td>
        <td class="pd_x">{{data.baseInfo.bankName}}</td>
        <td class="pd_x">委托代发银行账号：</td>
        <td class="pd_x">{{data.baseInfo.bankNum}}</td>
      </tr>
      <tr>
        <td class="pd_x">缴费人员类别：</td>
        <td class="pd_x">{{data.baseInfo.payPersonType}}</td>
        <td class="pd_x">医疗参保人员类别：</td>
        <td class="pd_x">{{data.baseInfo.insurePersonType}}</td>
        <td class="pd_x">医疗账户余额：</td>
        <td class="pd_x">{{data.baseInfo.industrialStatus}}</td>
        <td class="pd_x">离退休类别：</td>
        <td class="pd_x">{{data.baseInfo.dimissionRetireType}}</td>
      </tr>
      <tr>
        <td class="pd_x">离退休日期：</td>
        <td class="pd_x">{{data.baseInfo.dimissionRetireDate}}</td>
        <td class="pd_x">第一次投保时间：</td>
        <td class="pd_x">{{data.baseInfo.firstInsuredDate}}</td>
        <td class="pd_x">最后一次缴纳时间：</td>
        <td class="pd_x">{{data.baseInfo.lastPayDate}}</td>
        <td class="pd_x">缴存状态：</td>
        <td class="pd_x">{{data.baseInfo.payStatus}}</td>
      </tr>
      <tr>
        <td class="pd_x">工伤投保状态：</td>
        <td class="pd_x">{{data.baseInfo.industrialStatus}}</td>
        <td class="pd_x">失业投保状态：</td>
        <td class="pd_x">{{data.baseInfo.unemploymentStatus}}</td>
        <td class="pd_x">医疗投保状态：</td>
        <td class="pd_x">{{data.baseInfo.medicalStatus}}</td>
        <td class="pd_x">养老投保状态：</td>
        <td class="pd_x">{{data.baseInfo.endowmentStatus}}</td>
      </tr>
      <tr>
        <td class="pd_x">生育投保状态：</td>
        <td colspan="7" class="pd_x">{{data.baseInfo.maternityStatus}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td colspan="11" class="title pd_x">养老保险信息</td>
      </tr>
      <tr>
        <td class="pd_x">缴费日期</td>
        <td class="pd_x">结算期/所属年月</td>
        <td class="pd_x">缴费单位</td>
        <td class="pd_x">缴费基数/工资</td>
        <td class="pd_x">单位缴费</td>
        <td class="pd_x">个人缴费</td>
        <td class="pd_x">单位缴费比例</td>
        <td class="pd_x">个人缴费比例</td>
        <td class="pd_x">账户缴存总额</td>
        <td class="pd_x">缴存状态</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr v-for="oldage in data.oldageInsuranceInfos">
        <td class="pd_x">{{oldage.payDate}}</td>
        <td class="pd_x">{{oldage.payMonthly}}</td>
        <td class="pd_x">{{oldage.company}}</td>
        <td class="pd_x">{{oldage.salary}}</td>
        <td class="pd_x">{{oldage.payCompany}}</td>
        <td class="pd_x">{{oldage.payPerson}}</td>
        <td class="pd_x">{{oldage.payCompanyScale}}</td>
        <td class="pd_x">{{oldage.payPersonScale}}</td>
        <td class="pd_x">{{oldage.amount}}</td>
        <td class="pd_x">{{oldage.status}}</td>
        <td class="pd_x">{{oldage.describe}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td colspan="11" class="title pd_x">医疗保险信息</td>
      </tr>
      <tr>
        <td class="pd_x">缴费日期</td>
        <td class="pd_x">结算期/所属年月</td>
        <td class="pd_x">缴费单位</td>
        <td class="pd_x">缴费基数/工资</td>
        <td class="pd_x">单位缴费</td>
        <td class="pd_x">个人缴费</td>
        <td class="pd_x">单位缴费比例</td>
        <td class="pd_x">个人缴费比例</td>
        <td class="pd_x">账户缴存总额</td>
        <td class="pd_x">缴存状态</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr v-for="medical in data.medicalInsuranceInfos">
        <td class="pd_x">{{medical.payDate}}</td>
        <td class="pd_x">{{medical.payMonthly}}</td>
        <td class="pd_x">{{medical.company}}</td>
        <td class="pd_x">{{medical.salary}}</td>
        <td class="pd_x">{{medical.payCompany}}</td>
        <td class="pd_x">{{medical.payPerson}}</td>
        <td class="pd_x">{{medical.payCompanyScale}}</td>
        <td class="pd_x">{{medical.payPersonScale}}</td>
        <td class="pd_x">{{medical.amount}}</td>
        <td class="pd_x">{{medical.status}}</td>
        <td class="pd_x">{{medical.describe}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td colspan="11" class="title pd_x">生育保险信息</td>
      </tr>
      <tr>
        <td class="pd_x">缴费日期</td>
        <td class="pd_x">结算期/所属年月</td>
        <td class="pd_x">缴费单位</td>
        <td class="pd_x">缴费基数/工资</td>
        <td class="pd_x">单位缴费</td>
        <td class="pd_x">个人缴费</td>
        <td class="pd_x">单位缴费比例</td>
        <td class="pd_x">个人缴费比例</td>
        <td class="pd_x">账户缴存总额</td>
        <td class="pd_x">缴存状态</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr v-for="birth in data.birthInsuranceInfos">
        <td class="pd_x">{{birth.payDate}}</td>
        <td class="pd_x">{{birth.payMonthly}}</td>
        <td class="pd_x">{{birth.company}}</td>
        <td class="pd_x">{{birth.salary}}</td>
        <td class="pd_x">{{birth.payCompany}}</td>
        <td class="pd_x">{{birth.payPerson}}</td>
        <td class="pd_x">{{birth.payCompanyScale}}</td>
        <td class="pd_x">{{birth.payPersonScale}}</td>
        <td class="pd_x">{{birth.amount}}</td>
        <td class="pd_x">{{birth.status}}</td>
        <td class="pd_x">{{birth.describe}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td colspan="11" class="title pd_x">工伤保险信息</td>
      </tr>
      <tr>
        <td class="pd_x">缴费日期</td>
        <td class="pd_x">结算期/所属年月</td>
        <td class="pd_x">缴费单位</td>
        <td class="pd_x">缴费基数/工资</td>
        <td class="pd_x">单位缴费</td>
        <td class="pd_x">个人缴费</td>
        <td class="pd_x">单位缴费比例</td>
        <td class="pd_x">个人缴费比例</td>
        <td class="pd_x">账户缴存总额</td>
        <td class="pd_x">缴存状态</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr v-for="injury in data.injuryInsuranceInfos">
        <td class="pd_x">{{injury.payDate}}</td>
        <td class="pd_x">{{injury.payMonthly}}</td>
        <td class="pd_x">{{injury.company}}</td>
        <td class="pd_x">{{injury.salary}}</td>
        <td class="pd_x">{{injury.payCompany}}</td>
        <td class="pd_x">{{injury.payPerson}}</td>
        <td class="pd_x">{{injury.payCompanyScale}}</td>
        <td class="pd_x">{{injury.payPersonScale}}</td>
        <td class="pd_x">{{injury.amount}}</td>
        <td class="pd_x">{{injury.status}}</td>
        <td class="pd_x">{{injury.describe}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td colspan="11" class="title pd_x">失业保险信息</td>
      </tr>
      <tr>
        <td class="pd_x">缴费日期</td>
        <td class="pd_x">结算期/所属年月</td>
        <td class="pd_x">缴费单位</td>
        <td class="pd_x">缴费基数/工资</td>
        <td class="pd_x">单位缴费</td>
        <td class="pd_x">个人缴费</td>
        <td class="pd_x">单位缴费比例</td>
        <td class="pd_x">个人缴费比例</td>
        <td class="pd_x">账户缴存总额</td>
        <td class="pd_x">缴存状态</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr v-for="unemploy in data.unemployInsuranceInfos">
        <td class="pd_x">{{unemploy.payDate}}</td>
        <td class="pd_x">{{unemploy.payMonthly}}</td>
        <td class="pd_x">{{unemploy.company}}</td>
        <td class="pd_x">{{unemploy.salary}}</td>
        <td class="pd_x">{{unemploy.payCompany}}</td>
        <td class="pd_x">{{unemploy.payPerson}}</td>
        <td class="pd_x">{{unemploy.payCompanyScale}}</td>
        <td class="pd_x">{{unemploy.payPersonScale}}</td>
        <td class="pd_x">{{unemploy.amount}}</td>
        <td class="pd_x">{{unemploy.status}}</td>
        <td class="pd_x">{{unemploy.describe}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SocialsecurityPanel',
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
  beforeMount () {

  }
}
</script>
