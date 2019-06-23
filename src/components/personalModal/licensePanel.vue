<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border" v-if="data.status !== 'NO_DATA'">
      <tr>
        <td colspan="4" class="title pd_x">车牌号详情</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">牌号类型：</td>
        <td class="pd_x">{{ data.licensePlateType }}</td>
        <td class="quarter half pd_x">车牌号：</td>
        <td class="pd_x">{{ data.licensePlate }}</td>
      </tr>
      <tr>
        <td class="pd_x">车辆品牌名称：</td>
        <td class="pd_x">{{ data.brands }}</td>
        <td class="pd_x">车架号：</td>
        <td class="pd_x">{{ data.VIN }}</td>
      </tr>
      <tr>
        <td class="pd_x">车辆型号：</td>
        <td class="pd_x">{{ data.vehicleModel }}</td>
        <td class="pd_x">发动机号：</td>
        <td class="pd_x">{{ data.engineNo }}</td>
      </tr>
      <tr>
        <td class="pd_x">车辆类型：</td>
        <td class="pd_x">{{ data.vehicleType }}</td>
        <td class="pd_x">车辆颜色：</td>
        <td class="pd_x">{{ data.vehicleColor }}</td>
      </tr>
      <tr>
        <td class="pd_x">使用性质：</td>
        <td class="pd_x">{{ data.usingCharacter }}</td>
        <td class="pd_x">所有人：</td>
        <td class="pd_x">{{ data.owner }}</td>
      </tr>
      <tr>
        <td class="pd_x">初次登记日期：</td>
        <td class="pd_x">{{ data.registerDate }}</td>
        <td class="pd_x">检验有效期止：</td>
        <td class="pd_x">{{ data.validTo }}</td>
      </tr>
      <tr>
        <td class="pd_x">强制报废时间：</td>
        <td class="pd_x">{{ data.scrapTo }}</td>
        <td class="pd_x">车辆状态：</td>
        <td class="pd_x">{{ data.vehicleStatus }}</td>
      </tr>
      <tr>
        <td class="quarter half pd_x">发动机型号：</td>
        <td class="pd_x">{{ data.engineType }}</td>
        <td class="quarter half pd_x">燃料类型</td>
        <td class="pd_x">{{ data.fuelType }}</td>
      </tr>
      <tr>
        <td class="pd_x">排量：</td>
        <td class="pd_x">{{ data.emissions }}</td>
        <td class="pd_x">发动机最大功率：</td>
        <td class="pd_x">{{ data.maximumPower }}</td>
      </tr>
      <tr>
        <td class="pd_x">轴数：</td>
        <td class="pd_x">{{ data.numberAxles }}</td>
        <td class="pd_x">轴距：</td>
        <td class="pd_x">{{ data.wheelBase }}</td>
      </tr>
      <tr>
        <td class="pd_x">前轮距：</td>
        <td class="pd_x">{{ data.frontTread }}</td>
        <td class="pd_x">后轮距：</td>
        <td class="pd_x">{{ data.rearTread }}</td>
      </tr>
      <tr>
        <td class="pd_x">总质量：</td>
        <td class="pd_x">{{ data.totalMass }}</td>
        <td class="pd_x">整备质量：</td>
        <td class="pd_x">{{ data.voidWeight }}</td>
      </tr>
      <tr>
        <td class="pd_x">核定载客数：</td>
        <td class="pd_x">{{ data.passengersVerification }}</td>
        <td class="pd_x">出厂日期：</td>
        <td class="pd_x">{{ data.productionDate }}</td>
      </tr>
      <!-- <tr>
        <td class="pd_x">挡位数：</td>
        <td class="pd_x">{{data.numberCear}}</td>
      </tr> -->
    </table>

    <Alert show-icon v-else>
      暂无该车辆信息
    </Alert>
  </div>
</template>

<script>
export default {
  name: 'licensePlateNo',
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
