<style lang="stylus" scoped>
.operatordetailswrap
  //
</style>

<template>
  <div class="commontablewrap operatordetailswrap">
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">基本信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">会员名：</td>
        <td class="pd_x">{{data.basicInfo.realName}}</td>
        <td class="quarter half pd_x">会员等级：</td>
        <td class="pd_x">{{data.basicInfo.vipLevelstr}}</td>
      </tr>
      <tr>
        <td class="pd_x">手机号：</td>
        <td class="pd_x">{{data.basicInfo.mobileNo}}</td>
        <td class="pd_x">登录邮箱：</td>
        <td class="pd_x">{{data.basicInfo.email}}</td>
      </tr>
      <tr>
        <td class="pd_x">当前余额：</td>
        <td class="pd_x">{{data.basicInfo.amount}}</td>
        <td class="pd_x">身份证号码：</td>
        <td class="pd_x">{{data.basicInfo.idCard}}</td>
      </tr>
      <tr>
        <td class="pd_x">积分值：</td>
        <td class="pd_x">{{data.basicInfo.pointsValuestr}}</td>
        <td class="pd_x">地址：</td>
        <td class="pd_x">{{data.basicInfo.address}}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td colspan="2" class="title pd_x">前10次通话次数记录</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">号码</td>
        <td class="pd_x">次数</td>
      </tr>
      <tr v-for="list in data.stati">
        <td class="pd_x">{{list.mobileNo}}</td>
        <td class="pd_x">{{list.callCount}}</td>
      </tr>
      <tr v-if="!data.stati.length">
        <td class="tc" colspan="2">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">通话记录详单</td>
      </tr>
      <tr>
        <td class="pd_x">通话时间</td>
        <td class="pd_x">通话时长(秒)</td>
        <td class="pd_x">通话地点</td>
        <td class="pd_x">通话类型</td>
        <td class="pd_x">与本机通话号码</td>
      </tr>
      <tr v-for="list in data.callRecordInfo">
        <td class="pd_x">{{list.callDateTime}}</td>
        <td class="pd_x">{{list.callTimeLength}}</td>
        <td class="pd_x">{{list.callAddress}}</td>
        <td class="pd_x">{{list.callType}}</td>
        <td class="pd_x">{{list.mobileNo}}</td>
      </tr>
      <tr v-if="!data.callRecordInfo.length">
        <td class="tc" colspan="5">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="4">账单信息</td>
      </tr>
      <tr>
        <td class="pd_x">账单月份</td>
        <td class="pd_x">总金额</td>
        <td class="pd_x">实际费用</td>
        <td class="pd_x">套餐消费</td>
      </tr>
      <tr v-for="list in data.bill">
        <td class="pd_x">{{list.startTime}}</td>
        <td class="pd_x">{{list.sumCost}}</td>
        <td class="pd_x">{{list.realCost}}</td>
        <td class="pd_x">{{list.comboCost}}</td>
      </tr>
      <tr v-if="!data.bill.length">
        <td class="tc" colspan="4">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="3">办理业务</td>
      </tr>
      <tr>
        <td class="pd_x">业务名称</td>
        <td class="pd_x">业务消费</td>
        <td class="pd_x">业务开始时间</td>
      </tr>
      <tr v-for="list in data.businessInfo">
        <td class="pd_x">{{list.businessName}}</td>
        <td class="pd_x">{{list.cost}}</td>
        <td class="pd_x">{{list.beginTime}}</td>
      </tr>
      <tr v-if="!data.businessInfo.length">
        <td class="tc" colspan="3">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="4">短信记录</td>
      </tr>
      <tr>
        <td class="pd_x">与本机联系号码</td>
        <td class="pd_x">发送地</td>
        <td class="pd_x">发送时间</td>
        <td class="pd_x">信息类型</td>
      </tr>
      <tr v-for="list in data.smsInfo">
        <td class="pd_x">{{list.sendSmsToTelCode}}</td>
        <td class="pd_x">{{list.sendSmsAddress}}</td>
        <td class="pd_x">{{list.sendSmsTime}}</td>
        <td class="pd_x">{{list.sendType}}</td>
      </tr>
      <tr v-if="!data.smsInfo.length">
        <td class="tc" colspan="4">未发现</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OperatorDetailsPanel',
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
