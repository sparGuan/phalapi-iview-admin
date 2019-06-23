<style lang="stylus" scoped>
.taobaoreportwrap {
  small {
    background: #196CE6;
    color: #fff;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    border-radius: 8px;
    padding: 2px 6px;
  }
}
</style>

<template>
  <div class="commontablewrap taobaoreportwrap">
    <table class="full border">
      <tr>
        <td colspan="7" class="title pd_x">
          <h2>输入信息</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x">手机号</td>
        <td class="pd_x">{{ data.phone || "无" }}</td>
      </tr>
    </table>

    <!-- 淘宝基础信息【creditPlatformRegistrationDetails】  -->
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">信贷平台注册详情</td>
      </tr>
      <tr>
        <td class="pd_x">编码</td>
        <td class="pd_x">时间</td>
      </tr>
      <tr v-for="item in data.creditPlatformRegistrationDetails">
        <td class="pd_x">{{ item.code }}</td>
        <td class="pd_x">{{ item.time }}</td>
      </tr>
    </table>

    <!-- 贷款申请详情【loanApplicationDetails】  -->
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">贷款申请详情</td>
      </tr>
      <tr>
        <td class="pd_x">编码</td>
        <td class="pd_x">时间</td>
      </tr>
      <tr v-for="item in data.loanApplicationDetails">
        <td class="pd_x">{{ item.code }}</td>
        <td class="pd_x">{{ item.time }}</td>
      </tr>
    </table>

    <!-- loanDetails -->
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">贷款放款详情</td>
      </tr>
      <tr>
        <td class="pd_x">编码</td>
        <td class="pd_x">时间</td>
      </tr>
      <tr v-for="item in data.loanDetails">
        <td class="pd_x">{{ item.code }}</td>
        <td class="pd_x">{{ item.time }}</td>
      </tr>
    </table>

    <!-- 贷款驳回详情 -->
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">贷款驳回详情</td>
      </tr>
      <tr>
        <td class="pd_x">编码</td>
        <td class="pd_x">时间</td>
      </tr>
      <tr v-for="item in data.loanRejectDetails">
        <td class="pd_x">{{ item.code }}</td>
        <td class="pd_x">{{ item.time }}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">逾期平台详情</td>
      </tr>
      <tr>
        <td class="pd_x">编码</td>
        <td class="pd_x">时间</td>
      </tr>
      <tr v-for="item in data.overduePlatformDetails">
        <td class="pd_x">{{ item.code }}</td>
        <td class="pd_x">{{ item.time }}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">欠款查询详情</td>
      </tr>
      <tr>
        <td class="pd_x">编码</td>
        <td class="pd_x">时间</td>
      </tr>
      <tr v-for="item in data.arrearsInquiry">
        <td class="pd_x">{{ item.code }}</td>
        <td class="pd_x">{{ item.time }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'ManyLiabilitiesQuery1',
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
  }
}
</script>
