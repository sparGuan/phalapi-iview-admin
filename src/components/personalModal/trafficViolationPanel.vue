<style lang="stylus" scoped>
</style>

<template>
  <div class="commontablewrap">
    <table class="full border"  v-for="(item,index) in data.records" :key="index">
          <tr>
        <td class="title pd_x" colspan="5">违章记录列表{{index+1}}</td>
      </tr>
      <tr>
        <td class="pd_x">违章时间</td>
        <td class="pd_x">{{data.records[index].time}}</td>
        <td class="pd_x">违章地点</td>
        <td class="pd_x">{{data.records[index].location}}</td>
      </tr>
      <tr>
        <td class="pd_x">违章原因</td>
        <td class="pd_x">{{data.records[index].reason}}</td>
        <td class="pd_x">违章罚款金额</td>
        <td class="pd_x">{{data.records[index].count}}</td>
      </tr>
      <tr>
        <td class="pd_x">状态</td>
        <td class="pd_x">{{data.records[index].status}}</td>
        <td class="pd_x">违章扣分</td>
        <td class="pd_x">{{data.records[index].degree}}</td>
      </tr>
      <tr>
        <td class="pd_x">违章代码</td>
        <td class="pd_x">{{data.records[index].code}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'trafficViolation',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    checkStatus: function () {
      if (data.records.ecoTimes) {
        return '已处理'
      } else {
        return '未处理'
      }
    }
  }
}
</script>
