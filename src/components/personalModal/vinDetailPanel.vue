<style lang="stylus" scoped>
</style>

<template>
  <div class="commontablewrap">
    <table class="full border" v-for="(list,index) in data.vehicleDetailList" :key="index">
      <tr>
        <td colspan="4" class="title pd_x">车辆详情信息{{index+1}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">厂家：</td>
        <td class="pd_x">{{data.factory}}</td>
        <td class="quarter half pd_x">品牌：</td>
        <td class="pd_x">{{data.brands}}</td>
      </tr>
      <tr>
        <td class="pd_x">车系：</td>
        <td class="pd_x">{{data.carSeries}}</td>
        <td class="pd_x">车型：</td>
        <td class="pd_x">{{data.vehicleModel}}</td>
      </tr>
      <tr>
        <td class="pd_x">车组名称：</td>
        <td class="pd_x">{{data.groupName}}</td>
        <td class="pd_x">车组编号：</td>
        <td class="pd_x">{{data.groupNo}}</td>
      </tr>
      <tr>
        <td class="pd_x">销售名称：</td>
        <td class="pd_x">{{data.marketName}}</td>
        <td class="pd_x">年款：</td>
        <td class="pd_x">{{data.yearModel}}</td>
      </tr>
      <tr>
        <td class="pd_x">上市时间：</td>
        <td class="pd_x">{{data.listingTime}}</td>
        <td class="pd_x">指导价格：</td>
        <td class="pd_x">{{data.guidancePrice}}</td>
      </tr>
      <tr>
        <td class="pd_x">新车购置价格：</td>
        <td class="pd_x">{{data.purchasePrice}}</td>
        <td class="pd_x">渠道（国产、进口）：</td>
        <td class="pd_x">{{data.channel}}</td>
      </tr>
      <tr>
        <td class="pd_x">排放标准：</td>
        <td class="pd_x">{{data.emissionStandards}}</td>
        <td class="pd_x">汽车排量：</td>
        <td class="pd_x">{{data.emissions}}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">发动机型号：</td>
        <td class="pd_x">{{data.engineType}}</td>
        <td class="quarter half pd_x">变速器类型：</td>
        <td class="pd_x">{{data.transmissionType}}</td>
      </tr>
      <tr>
        <td class="pd_x">生产年份：</td>
        <td class="pd_x">{{data.groupName}}</td>
        <td class="pd_x">VIN对应的年份：</td>
        <td class="pd_x">{{data.groupNo}}</td>
      </tr>
      <tr>
        <td class="pd_x">车身结构：</td>
        <td class="pd_x">{{data.productiveYear}}</td>
        <td class="pd_x">颜色：</td>
        <td class="pd_x">{{data.color}}</td>
      </tr>
      <tr>
        <td class="pd_x">整备质量：</td>
        <td class="pd_x">{{data.curbWeight}}</td>
        <td class="pd_x">外形尺寸：</td>
        <td class="pd_x">{{data.apperaanceSize}}</td>
      </tr>
      <tr>
        <td class="pd_x">轴距：</td>
        <td class="pd_x">{{data.wheelBase}}</td>
        <td class="pd_x">发动机最大功率：</td>
        <td class="pd_x">{{data.maximumPower}}</td>
      </tr>
      <tr>
        <td class="pd_x">驱动方式：</td>
        <td class="pd_x">{{data.driveMode}}</td>
        <td class="pd_x">供油方式：</td>
        <td class="pd_x">{{data.supplyOil}}</td>
      </tr>
      <tr>
        <td class="pd_x">挡位数：</td>
        <td class="pd_x">{{data.vehicleDetailList[index].numberGear}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'vinDetail',
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
