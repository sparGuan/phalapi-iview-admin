<style lang="stylus" scoped>
.phonetimewrap {
  //
}
</style>

<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="4">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号：</td>
        <td class="pd_x">{{ data.records.uno }}</td>
        <td class="pd_x">序列号：</td>
        <td class="pd_x">{{ data.records.result.seqNo }}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="8">查询结果</td>
      </tr>
      <tr>
        <td class="pd_x">风险评分：</td>
        <td class="pd_x">
          {{ data.records.result.rskScore }}
        </td>
        <td class="pd_x">IP风险描述：</td>
        <td class="pd_x">{{ data.records.result.iRskDesc }}</td>
        <td class="pd_x">IP风险时间：</td>
        <td class="pd_x">{{ data.records.result.iUpdateDate }}</td>
        <td class="pd_x">IP地址：</td>
        <td class="pd_x">{{ data.records.result.ip }}</td>
      </tr>
      <tr>
        <td class="pd_x">命中空号：</td>
        <td class="pd_x">
          {{ data.records.result.isMachEmpty ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中欺诈号码：</td>
        <td class="pd_x">
          {{ data.records.result.isMachFraud ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中社工库号码：</td>
        <td class="pd_x">
          {{ data.records.result.isMachSZNo ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中小号：</td>
        <td class="pd_x">
          {{ data.records.result.isMachSmallNo ? "命中" : "未命中" }}
        </td>
      </tr>
      <tr>
        <td class="pd_x">命中收码平台号码：</td>
        <td class="pd_x">
          {{ data.records.result.isMachYZmobile ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中第三方标注黑名单：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdBlMakt ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中第三方标注黑名单：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdBlacklist > 0 ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中爬虫：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdCrawler > 0 ? "命中" : "未命中" }}
        </td>
      </tr>
      <tr>
        <td class="pd_x">命中DNS服务器：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdDNS > 0 ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中暴力破解：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdForce > 0 ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中邮件服务器：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdMailServ > 0 ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中组织出口：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdOrg > 0 ? "命中" : "未命中" }}
        </td>
      </tr>
      <tr>
        <td class="pd_x">命中代理服务器：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdProxy > 0 ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中seo：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdSEO > 0 ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中vpn服务器：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdVPN > 0 ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中web服务器：</td>
        <td class="pd_x">
          {{ data.records.result.isMachdWebServ > 0 ? "命中" : "未命中" }}
        </td>
      </tr>
      <tr>
        <td class="pd_x">手机号码：</td>
        <td class="pd_x">
          {{ data.records.result.mobileNo}}
        </td>
        <td class="pd_x">手机号码风险描述：</td>
        <td class="pd_x">
          {{ data.records.result.mRskDesc ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">手机号码风险时间：</td>
        <td class="pd_x">
          {{ data.records.result.mUpdateDate ? "命中" : "未命中" }}
        </td>
        <td class="pd_x">命中骚扰电话：</td>
        <td class="pd_x">
          {{ data.records.result.isMachCraCall ? "命中" : "未命中" }}
        </td>
      </tr>
      <tr>
        <td class="pd_x">
          <td class="pd_x">命中小号：</td>
          {{ data.records.result.isMachSmallNo ? "命中" : "未命中" }}
        </td>
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

  }
}
</script>
