<style lang="stylus" scoped>
.phonetimewrap
  //
</style>

<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="2">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号</td>
        <td class="pd_x">说明</td>
      </tr>
      <tr>
        <td class="pd_x">{{data.records.uno}}</td>
        <td class="pd_x">{{data.records.result.message}}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="7">职业资格证书</td>
      </tr>
      <tr>
        <td class="pd_x">证件号码</td>
        <td class="pd_x">职业</td>
        <td class="pd_x">认证ID</td>
        <td class="pd_x">姓名</td>
        <td class="pd_x">发证日期</td>
        <td class="pd_x">发证机构名</td>
        <td class="pd_x">证书等级</td>
      </tr>
      <tr v-if="data.records.result.certificateList.length" v-for="item in data.records.result.certificateList">
        <td class="pd_x">{{item.idNo}}</td>
        <td class="pd_x">{{item.occupation}}</td>
        <td class="pd_x">{{item.certificateID}}</td>
        <td class="pd_x">{{item.name}}</td>
        <td class="pd_x">{{item.issueDate}}</td>
        <td class="pd_x">{{item.submitOrgName}}</td>
        <td class="pd_x">{{item.clevel}}</td>
      </tr>
      <tr v-if="!data.records.result.certificateList.length">
        <td class="tc" colspan="7">未查到职业资格证书</td>
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
      let txt = '手机号无记录'
      switch (t) {
        case '0':
          txt = '手机号无记录'
          break
        case '1':
          txt = '省份验证一致，城市验证一致'
          break
        case '2':
          txt = '省份验证一致，城市验证不一致'
          break
        case '3':
          txt = '省份验证不一致，城市验证不一致'
          break
      }
      return txt
    }
  }
}
</script>
