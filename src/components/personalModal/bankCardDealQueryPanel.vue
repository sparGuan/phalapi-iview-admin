<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
      <tr>
        <td class="quarter half pd_x">借贷标记：</td>
        <td class="pd_x">{{data.bankCardInfo.loanMark}}</td>
        <td class="quarter half pd_x">卡等级：</td>
        <td class="pd_x">{{data.bankCardInfo.cardRank}}</td>
      </tr>
      <tr>
        <td class="pd_x">卡名称：</td>
        <td class="pd_x">{{data.bankCardInfo.cardName}}</td>
        <td class="pd_x">发卡行：</td>
        <td class="pd_x">{{data.bankCardInfo.issuingBank}}</td>
      </tr>
      <tr>
        <td class="pd_x">是否银联高端客户：</td>
        <td class="pd_x">{{data.bankCardInfo.isUnionpayVIP}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">银行卡信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">借贷标记：</td>
        <td class="pd_x">{{data.bankCardInfo.loanMark}}</td>
        <td class="quarter half pd_x">卡等级：</td>
        <td class="pd_x">{{data.bankCardInfo.cardRank}}</td>
      </tr>
      <tr>
        <td class="pd_x">卡名称：</td>
        <td class="pd_x">{{data.bankCardInfo.cardName}}</td>
        <td class="pd_x">发卡行：</td>
        <td class="pd_x">{{data.bankCardInfo.issuingBank}}</td>
      </tr>
      <tr>
        <td class="pd_x">是否银联高端客户：</td>
        <td class="pd_x">{{data.bankCardInfo.isUnionpayVIP}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="4">交易城市信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">当月活动省市：</td>
        <td class="pd_x">{{data.transactionCityInfo.activeProvincesThisM}}</td>
        <td class="quarter half pd_x">最近一笔交易城市：</td>
        <td class="pd_x">{{data.transactionCityInfo.latestTransactionCity}}</td>
      </tr>
      <tr>
        <td class="pd_x">最近一笔交易城市名称：</td>
        <td class="pd_x">{{data.transactionCityInfo.latestTransactionCityName}}</td>
        <td class="pd_x">第一常用城市总金额：</td>
        <td class="pd_x">{{data.transactionCityInfo.cityConsume1st}}</td>
      </tr>
      <tr>
        <td class="pd_x">第二常用城市总金额户：</td>
        <td class="pd_x">{{data.transactionCityInfo.cityConsume2nd}}</td>
        <td class="quarter half pd_x">第三常用城市总金额：</td>
        <td class="pd_x">{{data.transactionCityInfo.cityCOnsume3rd}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">第一常用城市名称：</td>
        <td class="pd_x">{{data.transactionCityInfo.cityConsumeName1st}}</td>
        <td class="pd_x">第二常用城市名称：</td>
        <td class="pd_x">{{data.transactionCityInfo.cityConsumeName2nd}}</td>
      </tr>
      <tr>
        <td class="pd_x">第三常用城市名称：</td>
        <td class="pd_x">{{data.transactionCityInfo.cityConsumeName3rd}}</td>
        <td class="quarter half pd_x">近6个月交易金额排名第一的城市名称：</td>
        <td class="pd_x">{{data.transactionCityInfo.rankConsumeCity6M1st}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近6个月交易金额排名第二的城市名称：</td>
        <td class="pd_x">{{data.transactionCityInfo.rankConsumeCity6M2nd}}</td>
        <td class="pd_x">近6个月交易金额排名第三的城市名称：</td>
        <td class="pd_x">{{data.transactionCityInfo.rankConsumeCity6M3rd}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">基本消费信息</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月消费金额：</td>
        <td class="pd_x">{{data.basicConsumptionInfo.consume1M}}</td>
        <td class="quarter half pd_x">近 1 个月消费笔数：</td>
        <td class="pd_x">{{data.basicConsumptionInfo.consumeTimes1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 12 个月月均消费金额：</td>
        <td class="pd_x">{{data.basicConsumptionInfo.averageConsume12M}}</td>
        <td class="pd_x">近 12 个月月均消费笔数：</td>
        <td class="pd_x">{{data.basicConsumptionInfo.consumeTransactionTimes1M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月消费类交易金额：</td>
        <td class="pd_x">{{data.basicConsumptionInfo.consumeTransactionTimes1M}}</td>
        <td class="quarter half pd_x">近 12 个月消费类交易金额：</td>
        <td class="pd_x">{{data.basicConsumptionInfo.consumeTransactionTimes12M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 1 个月消费类交易笔数：</td>
        <td class="pd_x">{{data.basicConsumptionInfo.consumeTransactionTimes1M}}</td>
        <td class="pd_x">近 12 个月消费类交易笔数：</td>
        <td class="pd_x">{{data.basicConsumptionInfo.consumeTransactionTimes12M}}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">基本交易信息</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月交易金额：</td>
        <td class="pd_x">{{data.basicTransactionInfo.transaction1M}}</td>
        <td class="quarter half pd_x">近 1 个月交易笔数：</td>
        <td class="pd_x">{{data.basicTransactionInfo.transactionTimes1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 1 个月午夜交易金额：</td>
        <td class="pd_x">{{data.basicTransactionInfo.nightTransaction1M}}</td>
        <td class="pd_x">近 6 个月午夜交易金额：</td>
        <td class="pd_x">{{data.basicTransactionInfo.nightTransaction6M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 12 个月午夜交易金额：</td>
        <td class="pd_x">{{data.basicTransactionInfo.rightTransaction12M}}</td>
        <td class="quarter half pd_x">近 1 个月午夜交易笔数：</td>
        <td class="pd_x">{{data.basicTransactionInfo.nightTransactionTimes1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 6 个月午夜交易笔数：</td>
        <td class="pd_x">{{data.basicTransactionInfo.nightTransactionTimes6M}}</td>
        <td class="pd_x">近 12 个月午夜交易笔数：</td>
        <td class="pd_x">{{data.basicTransactionInfo.rightTransactionTimes12M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月午夜交易金额占比：</td>
        <td class="pd_x">{{data.basicTransactionInfo.rightTransactionPro1M}}</td>
        <td class="quarter half pd_x">近 12 个月午夜交易金额占比：</td>
        <td class="pd_x">{{data.basicTransactionInfo.rightTransactionPro12M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 1 个月午夜交易笔数占比：</td>
        <td class="pd_x">{{data.basicTransactionInfo.rightTransactionPro1M}}</td>
        <td class="pd_x">近 12 个月午夜交易笔数占比：</td>
        <td class="pd_x">{{data.basicTransactionInfo.nightTransactionPro12M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月转出交易金额：</td>
        <td class="pd_x">{{data.basicTransactionInfo.outTransactionTimes1M}}</td>
        <td class="quarter half pd_x">近 1 个月午夜交易笔数：</td>
        <td class="pd_x">{{data.basicTransactionInfo.outTransactionTimes1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 12 个月交易天数：</td>
        <td class="pd_x">{{data.basicTransactionInfo.activeDays12M}}</td>
        <td class="pd_x">最近一笔交易：</td>
        <td class="pd_x">{{data.basicTransactionInfo.latestTransactionDate}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 12 个月有无境外交易：</td>
        <td class="pd_x">{{data.basicTransactionInfo.overseaTrade12M}}</td>
        <td class="pd_x">近 12 个月跨境交易国家名称列举：</td>
        <td class="pd_x">{{data.basicTransactionInfo.overseasTradeCountryList12M}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">典当拍卖类交易信息</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月典当、拍卖、信托交易金额：</td>
        <td class="pd_x">{{data.pawnAuctionInfo.pawnAuctionInfo}}</td>
        <td class="quarter half pd_x">近 6 个月典当、拍卖、信托交易金额：</td>
        <td class="pd_x">{{data.pawnAuctionInfo.pawnAuctionTrust6M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 12 个月典当、拍卖、信托交易金额：</td>
        <td class="pd_x">{{data.pawnAuctionInfo.pawnAuctionTrust12M}}</td>
        <td class="pd_x">近 1 个月典当、拍卖、信托交易笔数：</td>
        <td class="pd_x">{{data.pawnAuctionInfo.pawnAuctionTrustTimes1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 6 个月典当、拍卖、信托交易笔数：</td>
        <td class="pd_x">{{data.pawnAuctionInfo.pawnAuctionTrustTimes6M}}</td>
        <td class="pd_x">近 12 个月典当、拍卖、信托交易笔数：</td>
        <td class="pd_x">{{data.pawnAuctionInfo.pawnAuctionTrustTimes12M}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">证券保险类交易信息</td>
      </tr>
      <tr>
        <td class="pd_x">近 12 个月证券交易金额：</td>
        <td class="pd_x">{{data.securitiesInsuranceInfo.securityTrading12M}}</td>
        <td class="quarter half pd_x">近 12 个月证券交易笔数：</td>
        <td class="pd_x">{{data.securitiesInsuranceInfo.securityTradingTimes12M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月保险支出金额：</td>
        <td class="pd_x">{{data.securitiesInsuranceInfo.insurance1M}}</td>
        <td class="pd_x">近 6 个月保险支出金额：</td>
        <td class="pd_x">{{data.securitiesInsuranceInfo.insurance6M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 12 个月保险支出金额：</td>
        <td class="pd_x">{{data.securitiesInsuranceInfo.insurance12M}}</td>
        <td class="pd_x">近 1 个月保险支出笔数：</td>
        <td class="pd_x">{{data.securitiesInsuranceInfo.insuranceTimes1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 6 个月保险支出笔数：</td>
        <td class="pd_x">{{data.securitiesInsuranceInfo.insuranceTimes6M}}</td>
        <td class="pd_x">近 12 个月保险支出笔数：</td>
        <td class="pd_x">{{data.securitiesInsuranceInfo.insuranceTimes12M}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">博彩罚款类交易信息</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月博彩交易金额：</td>
        <td class="pd_x">{{data.gamingFinesInfo.gamingConsume1M}}</td>
        <td class="quarter half pd_x">近 6 个月博彩交易金额：</td>
        <td class="pd_x">{{data.gamingFinesInfo.gamingConsume6M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 12 个月博彩交易金额：</td>
        <td class="pd_x">{{data.gamingFinesInfo.gamingConsume12M}}</td>
        <td class="pd_x">近 1 个月博彩交易笔数：</td>
        <td class="pd_x">{{data.gamingFinesInfo.gamingConsumeTimes1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 6 个月博彩交易笔数：</td>
        <td class="pd_x">{{data.gamingFinesInfo.gamingConsumeTimes6M}}</td>
        <td class="pd_x">近 12 个月博彩交易笔数：</td>
        <td class="pd_x">{{data.gamingFinesInfo.gamingConsumeTimes12M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 1 个月罚款金额：</td>
        <td class="pd_x">{{data.gamingFinesInfo.fineLast1M}}</td>
        <td class="pd_x">近 1 个月罚款笔数：</td>
        <td class="pd_x">{{data.gamingFinesInfo.fineLastTimes1M}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">医疗卫生类交易信息</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月卫生类交易金额：</td>
        <td class="pd_x">{{data.healthCareInfo.healthConsume1M}}</td>
        <td class="quarter half pd_x">近 1 个月卫生类交易笔数：</td>
        <td class="pd_x">{{data.healthCareInfo.healthConsumeTimes1M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月医药和医疗器材专门零售类 交易金额：</td>
        <td class="pd_x">{{data.healthCareInfo.medicalApparatusConsume1M}}</td>
        <td class="pd_x">近 12 个月医药和医疗器材专门零售 类交易金额：</td>
        <td class="pd_x">{{data.healthCareInfo.medicalApparatusConsume12M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 1 个月医药和医疗器材专门零售类 交易笔数：</td>
        <td class="pd_x">{{data.healthCareInfo.medicalApparatusConsumeTimes1M}}</td>
        <td class="pd_x">近 12 个月医药和医疗器材专门零售 类交易笔数：</td>
        <td class="pd_x">{{data.healthCareInfo.medicalApparatusConsumeTimes12M}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">法律服务类交易信息</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月法律服务交易金额：</td>
        <td class="pd_x">{{data.legalServiceInfo.legalService1M}}</td>
        <td class="quarter half pd_x">近 12 个月法律服务交易金额：</td>
        <td class="pd_x">{{data.legalServiceInfo.legalService12M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月法律服务交易笔数：</td>
        <td class="pd_x">{{data.legalServiceInfo.legalServiceTimes1M}}</td>
        <td class="pd_x">近 12 个月法律服务交易笔数：</td>
        <td class="pd_x">{{data.legalServiceInfo.legalServiceTimes12M}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">商户交易类信息</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月高危商户交易金额：</td>
        <td class="pd_x">{{data.merchantTransactionInfo.highRiskStoreTrading1M}}</td>
        <td class="quarter half pd_x">近 6 个月高危商户交易金额：</td>
        <td class="pd_x">{{data.merchantTransactionInfo.highRiskStoreTrading6M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月高危商户交易笔数：</td>
        <td class="pd_x">{{data.merchantTransactionInfo.highRiskStoreTradingTimes1M}}</td>
        <td class="pd_x">近1个月最大商户交易金额：</td>
        <td class="pd_x">{{data.merchantTransactionInfo.largestConsumeMerchant1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 6 个月最大商户交易金额：</td>
        <td class="pd_x">{{data.merchantTransactionInfo.largestMerchantConsume6M}}</td>
        <td class="pd_x">近 1 个月交易笔数最大商户的商户名：</td>
        <td class="pd_x">{{data.merchantTransactionInfo.mostFrequentMerchant1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 6 个月交易笔数最大商户的商户名：</td>
        <td class="pd_x">{{data.merchantTransactionInfo.mostFrequentMerchant6M}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">购物类交易信息</td>
      </tr>
      <tr>
        <td class="pd_x">近 12 个月网购交易金额：</td>
        <td class="pd_x">{{data.shoppingTransactionInfo.onlineTransaction12M}}</td>
        <td class="quarter half pd_x">近 12 个月网购交易笔数：</td>
        <td class="pd_x">{{data.shoppingTransactionInfo.onlineTransactionTimes12M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月奢侈品交易金额：</td>
        <td class="pd_x">{{data.shoppingTransactionInfo.luxuryConsume1M}}</td>
        <td class="pd_x">近 12 个月奢侈品交易金额：</td>
        <td class="pd_x">{{data.shoppingTransactionInfo.luxuryConsumeTimes1M}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">借贷还款类交易信息</td>
      </tr>
      <tr>
        <td class="pd_x">近 1 个月信用卡还款金额：</td>
        <td class="pd_x">{{data.loanRepaymentInfo.creditCardPayment1M}}</td>
        <td class="quarter half pd_x">近 12 个月信用卡还款金额：</td>
        <td class="pd_x">{{data.loanRepaymentInfo.creditCardPayment12M}}</td>
      </tr>
      <tr>
        <td class="pd_x">近 12 个月信用卡还款笔数：</td>
        <td class="pd_x">{{data.loanRepaymentInfo.creditCardPaymentTimes12M}}</td>
        <td class="pd_x">近 1 个月借贷交易的交易金额：</td>
        <td class="pd_x">{{data.loanRepaymentInfo.loan1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 6 个月借贷交易的交易金额：</td>
        <td class="pd_x">{{data.loanRepaymentInfo.loan6M}}</td>
        <td class="pd_x">近 1 个月借贷交易的交易笔数：</td>
        <td class="pd_x">{{data.loanRepaymentInfo.loanTimes1M}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">近 6 个月借贷交易的交易笔数商户的商户名：</td>
        <td class="pd_x">{{data.loanRepaymentInfo.loanTimes6M}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'bankCardDealQuery',
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
