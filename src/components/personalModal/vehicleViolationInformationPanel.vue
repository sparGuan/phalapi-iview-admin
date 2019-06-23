<style lang="stylus" scoped>
.phonetimewrap {
  //
}
</style>

<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="2">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号</td>
        <td class="pd_x">{{ data.records.uno }}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="9">查询结果</td>
      </tr>
      <tr>
        <td class="pd_x">违章内容</td>
        <td class="pd_x">违章时间</td>
        <td class="pd_x">违章罚款金额</td>
        <td class="pd_x">违章文书</td>
        <td class="pd_x">违章城市</td>
        <td class="pd_x">违章地点</td>
        <td class="pd_x">违章扣分</td>
        <td class="pd_x">违章实际执行扣分</td>
        <td class="pd_x">违章采集部门</td>
      </tr>
      <tr v-for="item in data.records.result.peccancyList">
        <td class="pd_x">{{ item.eason }}</td>
        <td class="pd_x">{{ item.time }}</td>
        <td class="pd_x">{{ item.count }}</td>
        <td class="pd_x">{{ item.archive }}</td>
        <td class="pd_x">{{ item.locationName }}</td>
        <td class="pd_x">{{ item.location }}</td>
        <td class="pd_x">{{ item.degree }}</td>
        <td class="pd_x">{{ item.actualDegree }}</td>
        <td class="pd_x">{{ item.department }}</td>
      </tr>
      <tr v-if="!data.records.result.peccancyList.length">
        <td class="tc" colspan="9">未发现</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PhoneTimePanel',
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

  },
  filters: {
    change (t) {
      let txt = '无法验证'
      switch (t) {
        case 1:
          txt = '认证信息匹配'
          break
        case 2:
          txt = '认证信息不匹配'
          break
        case 3:
          txt = '无法验证'
          break
        case -1:
          txt = '异常情况'
          break
      }
      return txt
    }
  }
}
</script>
