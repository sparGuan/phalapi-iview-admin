<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap alipaywrap">
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">基本信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">真实姓名：</td>
        <td class="pd_x">{{ data.basicInfo.name }}</td>
        <td class="quarter half pd_x">身份证号：</td>
        <td class="pd_x">{{ data.basicInfo.idCard }}</td>
      </tr>
      <tr>
        <td class="pd_x">实名认证状态：</td>
        <td class="pd_x">{{ data.basicInfo.identityStatus }}</td>
        <td class="pd_x">注册时间：</td>
        <td class="pd_x">{{ data.basicInfo.registTime }}</td>
      </tr>
      <tr>
        <td class="pd_x">支付宝用户名：</td>
        <td class="pd_x">{{ data.basicInfo.taobaoName }}</td>
        <td class="pd_x">淘宝用户名：</td>
        <td class="pd_x">{{ data.basicInfo.taobaoName }}</td>
      </tr>
      <tr>
        <td class="pd_x">绑定手机号：</td>
        <td class="pd_x">{{ data.basicInfo.mobile }}</td>
        <td class="pd_x">支付宝登录邮箱：</td>
        <td class="pd_x">{{ data.basicInfo.email }}</td>
      </tr>
      <tr>
        <td class="pd_x">账户余额：</td>
        <td class="pd_x">{{ data.basicInfo.amount }}</td>
        <td class="pd_x">余额宝：</td>
        <td class="pd_x">{{ data.basicInfo.yuebao }}</td>
      </tr>
      <tr>
        <td class="pd_x">花呗总额度：</td>
        <td class="pd_x">{{ data.basicInfo.huabeiTotalAmount }}</td>
        <td class="pd_x">花呗余额：</td>
        <td class="pd_x">{{ data.basicInfo.huabeiAvailableCredit }}</td>
      </tr>
      <tr>
        <td class="pd_x">花呗消费：</td>
        <td class="pd_x">{{ data.basicInfo.huabeiConsumerCredit }}</td>
        <td class="pd_x">最后登录时间：</td>
        <td class="pd_x">{{ data.basicInfo.lastLogintime }}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="4">花呗逾期信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">账单月份</td>
        <td class="quarter pd_x">逾期天数</td>
        <td class="quarter half pd_x">持续逾期天数</td>
        <td class="quarter pd_x">逾期金额</td>
      </tr>
      <tr v-for="(list, index) in data.daysOverdues" :key="index">
        <td class="pd_x">{{ list.month }}</td>
        <td class="pd_x">{{ list.days }}</td>
        <td class="pd_x">{{ list.continuedDay }}</td>
        <td class="pd_x">{{ list.amount }}</td>
      </tr>
      <tr v-if="!data.daysOverdues.length">
        <td class="tc" colspan="4">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">绑定银行卡信息</td>
      </tr>
      <tr>
        <td class="pd_x">银行名称</td>
        <td class="pd_x">卡片类型</td>
        <td class="pd_x">银行卡号</td>
        <td class="pd_x">开户姓名</td>
        <td class="pd_x">预留手机</td>
        <td class="pd_x">开户时间</td>
      </tr>
      <tr v-for="(list, index) in data.bankInfo" :key="index">
        <td class="pd_x">{{ list.bankName }}</td>
        <td class="pd_x">{{ list.bankType }}</td>
        <td class="pd_x">{{ list.bankCardId }}</td>
        <td class="pd_x">{{ list.name }}</td>
        <td class="pd_x">{{ list.mobile }}</td>
        <td class="pd_x">{{ list.openDate }}</td>
      </tr>
      <tr v-if="!data.bankInfo.length">
        <td class="tc" colspan="6">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">生活缴费信息</td>
      </tr>
      <tr>
        <td class="pd_x">缴费项目</td>
        <td class="pd_x">地区</td>
        <td class="pd_x">收款单位</td>
        <td class="pd_x">户名</td>
        <td class="pd_x">缴费号码</td>
      </tr>
      <tr v-for="(list, index) in data.livingPayment" :key="index">
        <td class="pd_x">{{ list.payType }}</td>
        <td class="pd_x">{{ list.area }}</td>
        <td class="pd_x">{{ list.receivingUnit }}</td>
        <td class="pd_x">{{ list.accountName }}</td>
        <td class="pd_x">{{ list.paymentNumber }}</td>
      </tr>
      <tr v-if="!data.livingPayment.length">
        <td class="tc" colspan="5">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">历史消费统计</td>
      </tr>
      <tr>
        <td class="pd_x">交易名称</td>
        <td class="pd_x">交易描述</td>
        <td class="pd_x">交易金额</td>
        <td class="pd_x" width="170">交易时间</td>
        <td class="pd_x" width="100">交易状态</td>
      </tr>
      <tr v-for="(list, index) in data.tradeInfo" :key="index">
        <td class="pd_x">{{ list.tradeName }}</td>
        <td class="pd_x">{{ list.tradeDes }}</td>
        <td class="pd_x">{{ list.amount }}</td>
        <td class="pd_x">{{ list.createTime }}</td>
        <td class="pd_x">{{ list.status }}</td>
      </tr>
      <tr v-if="!data.tradeInfo.length">
        <td class="tc" colspan="5">未发现</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Alipay',
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
