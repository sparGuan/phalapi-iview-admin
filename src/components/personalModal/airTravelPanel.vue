<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">航旅详细信息</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">头等舱乘机次数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.fistTimes }}</td>
        <td class="quarter half pd_x">商务舱乘机次数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.busTimes }}</td>
      </tr>
      <tr>
        <td class="pd_x">平均延误分钟数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.avgDelayTime }}</td>
        <td class="pd_x">总延误分钟数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.delayTime }}</td>
      </tr>
      <tr>
        <td class="pd_x">经济舱乘机次数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.ecoTimes }}</td>
        <td class="pd_x">一年内平均折扣：</td>
        <td class="pd_x">{{ data.flightInfoDetail.domesticAvgDeiscount }}</td>
      </tr>
      <tr>
        <td class="pd_x">国内飞行次数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.flightDomesticTimes }}</td>
        <td class="pd_x">国际飞行次数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.flightInterTimes }}</td>
      </tr>
      <tr>
        <td class="pd_x">乘机次数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.flightTimes }}</td>
        <td class="pd_x">平均票价：</td>
        <td class="pd_x">{{ data.flightInfoDetail.avgPrice }}</td>
      </tr>
      <tr>
        <td class="pd_x">最频繁使用航空公司以及乘机次数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.favorFlightTimes }}</td>
        <td class="pd_x">最频繁乘机出发城市：</td>
        <td class="pd_x">{{ data.flightInfoDetail.maxFromCity }}</td>
      </tr>
      <tr>
        <td class="pd_x">最繁忙的月份：</td>
        <td class="pd_x">{{ data.flightInfoDetail.busyMonth }}</td>
        <td class="pd_x">最繁忙的月份乘机次数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.busyMonthTimes }}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">最频繁乘机到达城市：</td>
        <td class="pd_x">{{ data.flightInfoDetail.maxToCity }}</td>
        <td class="quarter half pd_x">免费次数：</td>
        <td class="pd_x">{{ data.flightInfoDetail.freeTimes }}</td>
      </tr>
      <tr>
        <td class="pd_x">平均提前多少天出票：</td>
        <td class="pd_x">{{ data.flightInfoDetail.avgAdvanceTicketday }}</td>
        <td class="pd_x">最后飞行时间：</td>
        <td class="pd_x">{{ data.flightInfoDetail.lastFightDate }}</td>
      </tr>
      <tr>
        <td class="pd_x">最后起飞城市：</td>
        <td class="pd_x">{{ data.flightInfoDetail.lastFromCity }}</td>
        <td class="pd_x">最后抵达城市：</td>
        <td class="pd_x">{{ data.flightInfoDetail.lastToCity }}</td>
      </tr>
      <tr>
        <td class="pd_x">总共飞行里程数（KM）：</td>
        <td class="pd_x">{{ data.flightInfoDetail.flyTotalKm }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'airTravel',
  data () {
    return {}
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
