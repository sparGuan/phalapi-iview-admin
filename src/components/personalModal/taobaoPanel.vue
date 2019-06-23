<style lang="stylus" scoped>
.taobaowrap
  //
</style>

<template>
  <div class="commontablewrap taobaowrap">
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">基本信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">真实姓名：</td>
        <td class="pd_x">{{data.basicInfo.realName}}</td>
        <td class="quarter half pd_x">登录邮箱：</td>
        <td class="pd_x">{{data.basicInfo.email}}</td>
      </tr>
      <tr>
        <td class="pd_x">身份证号：</td>
        <td class="pd_x">{{data.basicInfo.identityNo}}</td>
        <td class="pd_x">绑定手机：</td>
        <td class="pd_x">{{data.basicInfo.mobile}}</td>
      </tr>
      <tr>
        <td class="pd_x">用户名：</td>
        <td class="pd_x">{{data.basicInfo.username}}</td>
        <td class="pd_x">会员等级：</td>
        <td class="pd_x">{{data.basicInfo.vipLevel}}</td>
      </tr>
      <tr>
        <td class="pd_x">昵称：</td>
        <td class="pd_x">{{data.basicInfo.nickName}}</td>
        <td class="pd_x">成长值：</td>
        <td class="pd_x">{{data.basicInfo.growthValue}}</td>
      </tr>
      <tr>
        <td class="pd_x">性别：</td>
        <td class="pd_x">{{data.basicInfo.gender}}</td>
        <td class="pd_x">买家信用积分：</td>
        <td class="pd_x">{{data.basicInfo.creditScore}}</td>
      </tr>
      <tr>
        <td class="pd_x">出生日期：</td>
        <td class="pd_x">{{data.basicInfo.birthday}}</td>
        <td class="pd_x">卖家信用积分：</td>
        <td class="pd_x">{{data.basicInfo.sellScore}}</td>
      </tr>
      <tr>
        <td class="pd_x">认证渠道：</td>
        <td class="pd_x">{{data.basicInfo.identityChannel}}</td>
        <td class="pd_x">好评率：</td>
        <td class="pd_x">{{data.basicInfo.favorableRate}}</td>
      </tr>
      <tr>
        <td class="pd_x">是否实名认证：</td>
        <td class="pd_x">{{data.basicInfo.identityStatus}}</td>
        <td class="pd_x">安全等级：</td>
        <td class="pd_x">{{data.basicInfo.securityLevel}}</td>
      </tr>
      <tr>
        <td class="pd_x">是否本人账户：</td>
        <td class="pd_x">{{data.basicInfo.selfAccount}}</td>
        <td class="pd_x"></td>
        <td class="pd_x"></td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">淘宝绑定支付宝信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">支付宝账号：</td>
        <td class="pd_x">{{data.alipayInfo.username}}</td>
        <td class="quarter half pd_x">实名认证姓名：</td>
        <td class="pd_x">{{data.alipayInfo.realName}}</td>
      </tr>
      <tr>
        <td class="pd_x">邮箱：</td>
        <td class="pd_x">{{data.alipayInfo.email}}</td>
        <td class="pd_x">实名认证身份证号：</td>
        <td class="pd_x">{{data.alipayInfo.identityNo}}</td>
      </tr>
      <tr>
        <td class="pd_x">绑定手机：</td>
        <td class="pd_x">{{data.alipayInfo.mobile}}</td>
        <td class="pd_x">	实名认证状态：</td>
        <td class="pd_x">{{data.alipayInfo.identityStatus}}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="4">收货地址</td>
      </tr>
      <tr>
        <td class="pd_x">姓名</td>
        <td class="pd_x">地址</td>
        <td class="pd_x">邮编</td>
        <td class="pd_x">手机号</td>
      </tr>
      <tr v-for="list in data.addresses">
        <td class="pd_x">{{list.name}}</td>
        <td class="pd_x">{{list.address}}</td>
        <td class="pd_x">{{list.zipCode}}</td>
        <td class="pd_x">{{list.mobile}}</td>
      </tr>
      <tr v-if="!data.addresses.length">
        <td class="tc" colspan="4">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x">订单详情</td>
      </tr>
      <tr v-for="list in data.orderDetails">
        <td>
          <table class="full border subtabletwo">
            <tr>
              <td class="pd_x subtitletwo" colspan="4">拍下商品时间：{{list.orderTime}}</td>
            </tr>
            <tr>
              <td class="pd_x">支付交易号：</td>
              <td class="pd_x">{{list.alipayNumber}}</td>
              <td class="pd_x">订单号：</td>
              <td class="pd_x">{{list.orderId}}</td>
            </tr>
            <tr>
              <td class="pd_x">支付时间：</td>
              <td class="pd_x">{{list.paymentTime}}</td>
              <td class="pd_x">订单状态：</td>
              <td class="pd_x">{{list.orderStatus}}</td>
            </tr>
            <tr>
              <td class="pd_x">订单完成时间：</td>
              <td class="pd_x">{{list.orderTime}}</td>
              <td class="pd_x">商品总数量：</td>
              <td class="pd_x">{{list.items.length}}</td>
            </tr>
            <tr>
              <td class="pd_x">邮费：</td>
              <td class="pd_x">{{list.fare}}</td>
              <td class="pd_x">订单金额：</td>
              <td class="pd_x">{{list.orderAmt}}</td>
            </tr>
            <tr>
              <td class="pd_x">是否虚拟商品：</td>
              <td class="pd_x">{{list.isVirtual == 'true' ? '是' : '否'}}</td>
              <td class="pd_x">淘宝卖家ID：</td>
              <td class="pd_x">{{list.shopId}}</td>
            </tr>
            <tr>
              <td class="pd_x">店铺名称：</td>
              <td class="pd_x">{{list.shopName}}</td>
              <td class="pd_x">店铺昵称：</td>
              <td class="pd_x">{{list.nickName}}</td>
            </tr>
            <tr v-if="list.isVirtual != 'true'">
              <td class="pd_x">收货人姓名：</td>
              <td class="pd_x">{{list.logisticsInfo.receivePersonName}}</td>
              <td class="pd_x">收货地址：</td>
              <td class="pd_x">{{list.logisticsInfo.receiveAddress}}</td>
            </tr>
            <tr v-if="list.isVirtual != 'true'">
              <td class="pd_x">收货人电话：</td>
              <td class="pd_x">{{list.logisticsInfo.receivePersonMobile}}</td>
              <td class="pd_x">运送方式：</td>
              <td class="pd_x">{{list.logisticsInfo.deliverType}}</td>
            </tr>
            <tr v-if="list.isVirtual != 'true'">
              <td class="pd_x">物流公司编码：</td>
              <td class="pd_x">{{list.logisticsInfo.deliverCode}}</td>
              <td class="pd_x">物流公司：</td>
              <td class="pd_x">{{list.logisticsInfo.deliverCompany}}</td>
            </tr>
            <tr v-if="list.isVirtual != 'true'">
              <td class="pd_x">送货单号：</td>
              <td class="pd_x">{{list.logisticsInfo.deliverId}}</td>
              <td class="pd_x">物流创建时间：</td>
              <td class="pd_x">{{list.logisticsInfo.beginTime}}</td>
            </tr>
            <tr v-if="list.isVirtual != 'true'">
              <td class="pd_x">最新物流时间：</td>
              <td class="pd_x">{{list.logisticsInfo.lastTime}}</td>
              <td class="pd_x">派件人所在网点：</td>
              <td class="pd_x">{{list.logisticsInfo.facilityName}}</td>
            </tr>
            <tr v-if="list.isVirtual != 'true'">
              <td class="pd_x">派件员：</td>
              <td class="pd_x">{{list.logisticsInfo.contacter}}</td>
              <td class="pd_x">派件员手机号码：</td>
              <td class="pd_x">{{list.logisticsInfo.contacterPhone}}</td>
            </tr>
            <tr v-if="list.isVirtual != 'true'">
              <td class="pd_x">最新物流信息：</td>
              <td class="pd_x" colspan="3">{{list.logisticsInfo.lastMessage}}</td>
            </tr>
            <tr>
              <td colspan="4">
                <table class="full border subtabletwo">
                  <tr>
                    <td class="pd_x subtitlethree" colspan="4">购买商品信息</td>
                  </tr>
                  <tr>
                    <td class="pd_x">商品ID</td>
                    <td class="pd_x">商品名称</td>
                    <td class="pd_x">商品单价</td>
                    <td class="pd_x">商品数量</td>
                  </tr>
                  <tr v-for="li in list.items">
                    <td class="pd_x">{{li.itemId}}</td>
                    <td class="pd_x">{{li.itemName}}</td>
                    <td class="pd_x">{{li.itemPrice}}</td>
                    <td class="pd_x">{{li.itemQuantity}}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr v-if="!data.orderDetails.length">
        <td class="tc">未发现</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TaobaoPanel',
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
