<style lang="stylus" scoped>
.providentfundwrap
  //
</style>

<template>
  <div class="commontablewrap providentfundwrap">
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">基本信息</td>
      </tr>
      <tr>
        <td class="quarter pd_x">姓名：</td>
        <td class="pd_x">{{data.baseInfo.employeeName}}</td>
        <td class="quarter pd_x">身份证号：</td>
        <td class="pd_x">{{data.baseInfo.idCard}}</td>
      </tr>
      <tr>
        <td class="pd_x">性别：</td>
        <td class="pd_x">{{data.baseInfo.gender}}</td>
        <td class="pd_x">出生日期：</td>
        <td class="pd_x">{{data.baseInfo.birthday}}</td>
      </tr>
      <tr>
        <td class="pd_x">开户日期：</td>
        <td class="pd_x">{{data.baseInfo.openAccountDate}}</td>
        <td class="pd_x">当前账户状态：</td>
        <td class="pd_x">{{data.baseInfo.houseFundStatus}}</td>
      </tr>
      <tr>
        <td class="pd_x">公司名称：</td>
        <td class="pd_x">{{data.baseInfo.companyName}}</td>
        <td class="pd_x">证件类型：</td>
        <td class="pd_x">{{data.baseInfo.cardType}}</td>
      </tr>
      <tr>
        <td class="pd_x">个人月缴金额：</td>
        <td class="pd_x">{{data.baseInfo.personalMonthPayAmount}}</td>
        <td class="pd_x">末次缴存年月：</td>
        <td class="pd_x">{{data.baseInfo.payUntilDate}}</td>
      </tr>
      <tr>
        <td class="pd_x">本年利息：</td>
        <td class="pd_x">{{data.baseInfo.inYearInterest}}</td>
        <td class="pd_x">本年转入：</td>
        <td class="pd_x">{{data.baseInfo.inYearTranerin}}</td>
      </tr>
      <tr>
        <td class="pd_x">本年支取：</td>
        <td class="pd_x">{{data.baseInfo.inYearReceiveAmount}}</td>
        <td class="pd_x">本年补缴：</td>
        <td class="pd_x">{{data.baseInfo.inYearAddPayAmount}}</td>
      </tr>
      <tr>
        <td class="pd_x">上年余额：</td>
        <td class="pd_x">{{data.baseInfo.lastYearBalance}}</td>
        <td class="pd_x">上年利息：</td>
        <td class="pd_x">{{data.baseInfo.lastYearInterest}}</td>
      </tr>
      <tr>
        <td class="pd_x">本年缴交：</td>
        <td class="pd_x">{{data.baseInfo.inYearPayAmount}}</td>
        <td class="pd_x">月缴金额：</td>
        <td class="pd_x">{{data.baseInfo.monthPayAmount}}</td>
      </tr>
      <tr>
        <td class="pd_x">绑定手机号：</td>
        <td class="pd_x">{{data.baseInfo.bindMobile}}</td>
        <td class="pd_x">单位月缴额：</td>
        <td class="pd_x">{{data.baseInfo.companyMonthPayAmount}}</td>
      </tr>
      <tr>
        <td class="pd_x">月缴基数：</td>
        <td class="pd_x">{{data.baseInfo.monthPayBaseAmount}}</td>
        <td class="pd_x">公积金余额：</td>
        <td class="pd_x">{{data.baseInfo.houseFundBalance}}</td>
      </tr>
      <tr>
        <td class="pd_x">职工账号：</td>
        <td class="pd_x">{{data.baseInfo.employeeAccountNum}}</td>
        <td class="pd_x">单位账号：</td>
        <td class="pd_x">{{data.baseInfo.companyAccountNum}}</td>
      </tr>
      <tr>
        <td class="pd_x">关联银行卡号：</td>
        <td class="pd_x">{{data.baseInfo.bankAccount}}</td>
        <td class="pd_x">缴存银行：</td>
        <td class="pd_x">{{data.baseInfo.bankName}}</td>
      </tr>
      <tr>
        <td class="pd_x">缴存管理部：</td>
        <td class="pd_x">{{data.baseInfo.depositManageDept}}</td>
        <td class="pd_x">所属办事处：</td>
        <td class="pd_x">{{data.baseInfo.belongOffice}}</td>
      </tr>
      <tr>
        <td class="pd_x">缴存比例-个人：</td>
        <td class="pd_x">{{data.baseInfo.depositRatioPersonal}}</td>
        <td class="pd_x">缴存比例-单位：</td>
        <td class="pd_x">{{data.baseInfo.depositRatioCompany}}</td>
      </tr>
      <tr>
        <td class="pd_x">实名认证信息：</td>
        <td class="pd_x">{{data.baseInfo.nameAuth}}</td>
        <td class="pd_x">绑定邮箱：</td>
        <td class="pd_x">{{data.baseInfo.bindEmail}}</td>
      </tr>
      <tr>
        <td class="pd_x">公积金账号：</td>
        <td class="pd_x">{{data.baseInfo.houseFundAccount}}</td>
        <td class="pd_x">通讯地址：</td>
        <td class="pd_x">{{data.baseInfo.homeAddress}}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x">每月缴纳情况</td>
      </tr>
      <tr v-for="list in data.billInfos">
        <td>
          <table class="full border subtabletwo">
            <tr>
              <td class="pd_x subtitletwo" colspan="4">{{list.note}}</td>
            </tr>
            <tr>
              <td class="pd_x quarter half">公司名称：</td>
              <td class="pd_x">{{list.companyName}}</td>
              <td class="pd_x quarter half">缴纳基数：</td>
              <td class="pd_x">{{list.payBase}}</td>
            </tr>
            <tr>
              <td class="pd_x">缴存年月：</td>
              <td class="pd_x">{{list.payMonth}}</td>
              <td class="pd_x">入账时间：</td>
              <td class="pd_x">{{list.payArriveDate}}</td>
            </tr>
            <tr>
              <td class="pd_x">转入余额：</td>
              <td class="pd_x">{{list.inAmount}}</td>
              <td class="pd_x">转出余额：</td>
              <td class="pd_x">{{list.outAmount}}</td>
            </tr>
            <tr>
              <td class="pd_x">余额：</td>
              <td class="pd_x" colspan="3">{{list.balance}}</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr v-if="!data.billInfos.length">
        <td class="tc">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x">公积金贷款情况</td>
      </tr>
      <tr>
        <td class="tc">未发现</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ProvidentFundPanel',
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
