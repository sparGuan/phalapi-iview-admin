<style lang="stylus" scoped>
  .commontablewrap {
    padding: 30px 15px;
    font-size: 14px;
    color: #333;

    .report_title {
      font-size: 16px;
    }

    .star {
      letter-spacing: 3px;
      font-size: 16px;
    }

    .fl {
      float: left;
    }

    .fr {
      float: right;
    }

    .tc {
      text-align: center;
    }

    .tr {
      text-align: right;
    }

    .full {
      width: 100% !important;
    }

    .half {
      width: 50% !important;
    }

    .quarter {
      width: 25% !important;
    }

    .half.quarter {
      width: 12.5% !important;
    }

    .third {
      width: 30% !important;
    }

    .border,
    table.border td {
      border: 1px solid #97cdef;
    }

    .noborder {
      border: none;
    }

    .bggray {
      background: #f9f9f9;
    }

    .gray,
    .gray * {
      color: #dededa;
    }

    .darkgray,
    .darkgray * {
      color: #666;
    }

    .orange {
      color: #009cff;
    }

    .big_font {
      font-size: 36px;
      color: #009cff;
    }

    .big_font_xl {
      font-size: 46px;
      color: #009cff;
    }

    .big_font_title {
      font-size: 32px;
      color: #777;
    }

    table {
      border-collapse: collapse;
      margin-top: 20px;

      td {
        height: 40px;
        position: relative;
        text-align center;
      }

      .pd_x {
        padding-left: 15px;
        padding-right: 15px;
      }

      h3 {
        font-weight: normal;
        font-size: 14px;
        color: #196CE6 !important;
      }
    }

    .title {
      color: #196CE6;
      line-height: 40px;
      text-align left;
    }

    .match_info {
      background: #fff;
      border: 1px dashed #e5e5e5;
      padding: 10px;
      line-height: 20px;
    }

    .bg_warn {
      background: #f9f0e0;
    }

    .subtable {
      margin: 0;

      td {
        height: 24px;
        padding: 0 7px;

        &:first-child {
          border-width: 1px 0 1px 0;
        }
      }

      tr {
        &:first-child {
          td {
            border-top-width: 0;
          }
        }
      }

      .subtitle {
        background: rgba(0, 0, 0, 0.03);
        padding: 0;
      }
    }

    .subtabletwo {
      margin: 0;

      td {
        &:first-child {
          border-width: 1px 0 1px 0;
        }
      }

      tr {
        &:first-child {
          td {
            border-top-width: 0;
          }
        }
      }

      .subtitletwo {
        background: #4e82d0;
        color: #fff;
        font-weight: bold;
      }

      .subtitlethree {
        color: #196ce6;
      }
    }

    .ratestarwrap {
      &>div {
        margin-right: 0;
      }
    }

    .nowrap {
      word-break: keep-all;
      white-space: nowrap;
    }

    .progress {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      height: 100%;
      background: #C9E4F5;

      &+span {
        position: relative;
        z-index: 1;
      }
    }

    .chart {
      width: 600px;
      height: 400px;
    }

    .red {
      color: red;
    }

    .help {
      color: #fff;
      background: #196CE6;
      border-radius: 50%;
      display: inline-block;
      margin-left: 3px;
      height: 16px;
      line-height: 16px;
      width: 16px;
      text-align: center;
      cursor: pointer;
      font-weight: normal;
      font-style: normal;
    }
  }

  //new
  h1 {
    text-align center;
    margin: 10px 0 20px 0;
  }

  h3 {
    color #000;
    margin-top:10px;
    margin-bottom -10px;
    span{
      padding: 3px 10px;
      // border-radius-right-top:10px;
    }
  }

  .header {
    padding:25px 20px 10px;
    display flex;
    justify-content space-between;
  }

  .pdfNotice {
    margin-top 50px;
    padding: 20px 30px;

    .noticeTitle {
      font-weight 600;
      padding 10px 0;
    }

    p {
      height 30px;
      line-height 30px;
    }

    .companyInfo {
      display flex;
      justify-content space-around;
    }
  }

</style>

<template>
  <div class="commontablewrap">
    <h1>民间小额信贷征信报告</h1>
    <h3 ><span class="primary_bg white">信息主体信息</span></h3>
    <div class="header">
      <span>姓名：{{data.title.customerName}}</span> <span>身份证号：{{data.title.paperNumber}}</span><span>报告编码：{{data.title.queryNumber}}</span><span>查询时间：{{data.title.reportTime}}</span>
    </div>
    <h3 ><span class="primary_bg white">信贷交易统计概况</span></h3>
    <table class="full border">
      <tr>
        <td rowspan="2"></td>
        <td colspan="5" class="pd_x">借款申请记录</td>
        <td colspan="3" class="pd_x">正常还款账</td>
        <td colspan="3" class="pd_x">异常还款账户</td>
        <td rowspan="2" class="pd_x">行业不良记录</td>
        <td colspan="3" class="pd_x">查询记录</td>
      </tr>
      <tr>
        <td>待审核</td>
        <td>审批通过</td>
        <td>审批拒绝</td>
        <td>客户取消</td>
        <td>小计</td>
        <td>未结清</td>
        <td>已结清</td>
        <td>小计</td>
        <td>未结清</td>
        <td>已结清</td>
        <td>小计</td>
        <td>3个月内</td>
        <td>6个月内</td>
        <td>累计查询</td>
      </tr>
      <tr>
        <td>笔数</td>
        <td>{{data.title.applyingCount}}</td>
        <td>{{data.title.applyPassedCount}}</td>
        <td>{{data.title.applyRejectCount}}</td>
        <td>{{data.title.applyCancelCount}}</td>
        <td>{{data.title.applyTotalCount}}</td>
        <td>{{data.title.wjqCount}}</td>
        <td>{{data.title.jqCount}}</td>
        <td>{{data.title.totalCount}}</td>
        <td>{{data.title.ewjqCount}}</td>
        <td>{{data.title.ejqCount}}</td>
        <td>{{data.title.etotalCount}}</td>
        <td>{{data.title.blackCount}}</td>
        <td>{{data.title.queryCount3Month}}</td>
        <td>{{data.title.queryCount6Month}}</td>
        <td>{{data.title.queryCount2Year}}</td>
      </tr>
      <tr>
        <td>总（合同）金额</td>
        <td>{{data.title.applyingSumMoney}}</td>
        <td>{{data.title.applyPassedSumMoney}}</td>
        <td>{{data.title.applyRejectSumMoney}}</td>
        <td>{{data.title.applyCancelSumMoney}}</td>
        <td>{{data.title.applyTotalSumMoney}}</td>
        <td>{{data.title.wjqSumMoney}}</td>
        <td>{{data.title.jqSumMoney}}</td>
        <td>{{data.title.totalSumMoney}}</td>
        <td>{{data.title.ewjqSumMoney}}</td>
        <td>{{data.title.ejqSumMoney}}</td>
        <td>{{data.title.etotalSumMoney}}</td>
        <td>{{data.title.blackSumMoney}}</td>
        <td>--</td>
        <td>--</td>
        <td>--</td>
      </tr>
    </table>
    <h3 ><span class="primary_bg white">信贷交易详情</span></h3>
    <table class="full border">
      <tr>
        <td>申请日期</td>
        <td>会员类型</td>
        <td>申请地点</td>
        <td>申请金额</td>
        <td>审批结果</td>
        <td>备注</td>
      </tr>
      <tr v-for="(item,index) in data.applyDetail" :key="index">
        <td>{{item.applyDate}}</td>
        <td>{{item.applyResult}}</td>
        <td>{{item.creditAddress}}</td>
        <td>{{item.loanMoney}}</td>
        <td>{{item.memberType}}</td>
        <td>{{item.remark}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td colspan="6" class="title pd_x">借款申请记录明细（金额：元）</td>
      </tr>
      <tr>
        <td>申请日期</td>
        <td>会员类型</td>
        <td>申请地点</td>
        <td>申请金额</td>
        <td>审批结果</td>
        <td>备注</td>
      </tr>
      <tr v-for="(item,index) in data.applyDetail" :key="index">
        <td>{{item.applyDate}}</td>
        <td>{{item.applyResult}}</td>
        <td>{{item.creditAddress}}</td>
        <td>{{item.loanMoney}}</td>
        <td>{{item.memberType}}</td>
        <td>{{item.remark}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td colspan="9" class="title pd_x">正常还款账户明细（金额：元）</td>
      </tr>
      <tr>
        <td>借款编号</td>
        <td>会员类型</td>
        <td>借款日期</td>
        <td>到期日期</td>
        <td>借款地点</td>
        <td>担保方式</td>
        <td>合同金额</td>
        <td>还款期数</td>
        <td>备注</td>
      </tr>
      <tr v-for="(item,index) in data.normalCreditDetails" :key="index">
        <td>{{item.num}}</td>
        <td>{{item.memberType}}</td>
        <td>{{item.creditStartDate}}</td>
        <td>{{item.creditEndDate}}</td>
        <td>{{item.creditAddress}}</td>
        <td>{{item.assureType}}</td>
        <td>{{item.loanMoney}}</td>
        <td>{{item.loanPeriods}}</td>
        <td>{{item.remark}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td colspan="14" class="title pd_x">异常还款记录明细（金额：元）</td>
      </tr>
      <tr>
        <td>借款编号</td>
        <td>会员类型</td>
        <td>借款日期</td>
        <td>到期日期</td>
        <td>借款地点</td>
        <td>担保方式</td>
        <td>合同金额</td>
        <td>还款期数</td>
        <td>逾期日期</td>
        <td>逾期时长</td>
        <td>逾期金额</td>
        <td>状态</td>
        <td>更新日期</td>
        <td>备注</td>
      </tr>
      <tr v-for="(item,index) in data.abnormalCreditDetails" :key="index">
        <td>{{item.num}}</td>
        <td>{{item.memberType}}</td>
        <td>{{item.creditStartDate}}</td>
        <td>{{item.creditEndDate}}</td>
        <td>{{item.creditAddress}}</td>
        <td>{{item.assureType}}</td>
        <td>{{item.loanMoney}}</td>
        <td>{{item.loanPeriods}}</td>
        <td>{{item.checkOverdueDate}}</td>
        <td>{{item.overdueDays}}</td>
        <td>{{item.nbMoney}}</td>
        <td>{{item.overdueState}}</td>
        <td>{{item.operTime}}</td>
        <td>{{item.remark}}</td>
      </tr>
    </table>
    <table class="full border">
      <tr>
        <td colspan="6" class="title pd_x">查询记录记录明细</td>
      </tr>
      <tr>
        <td>查询日期</td>
        <td>会员类型</td>
        <td>查询类别</td>
        <td>备注</td>
      </tr>
      <tr v-for="(item,index) in data.queryDetails" :key="index">
        <td>{{item.queryDate}}</td>
        <td>{{item.memberType}}</td>
        <td>{{item.queryType}}</td>
        <td>{{item.remark}}</td>
      </tr>
    </table>
    <h3 ><span class="primary_bg white">行业不良信息</span></h3>
    <table class="full border">
      <tr>
        <td>会员类型</td>
        <td>报送/公开日期</td>
        <td>最近逾期开始日期</td>
        <td>借款地点</td>
        <td>欠款总金额</td>
        <td>手机号</td>
        <td>常用地址</td>
        <td>状态</td>
        <td>信息来源</td>
      </tr>
      <tr v-for="(item,index) in data.blackDatas" :key="index">
        <td>{{item.memberType}}</td>
        <td>{{item.createDate}}</td>
        <td>{{item.lastOverdueDate}}</td>
        <td>{{item.creditAddress}}</td>
        <td>{{item.arrears}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.email}}</td>
        <td>{{item.residenceAddress}}</td>
        <td>{{item.status}}</td>
        <td>{{item.source}}</td>
      </tr>
    </table>
    <div class="pdfNotice gray_bg">
      <div class="noticeTitle f_16 txtC">报告阅读须知</div>
      <p>1、本报告由北京安融惠众征信有限公司出具，著作权属于北京安融惠众征信有限公司，未经书面许可，不得篡改、复制、摘录、转载和发表。</p>
      <p>2、本报告仅供MSP会员机构在取得信息主体授权同意条件下、按照与信息主体约定的用途使用，未经信息主体同意不得提供给其他第三方。</p>
      <p>3、本报告使用方须妥善使用和保管本报告及其所载个人信息，由于保管或使用不当导致个人信息泄露、给信息主体带来损失的，</p>
      <p>使用方承担相应法律民事责任，北京安融惠众征信有限公司不承担任何责任。</p>
      <p>4、本报告所载信息仅供使用方参考。</p>
      <div class="companyInfo"><span>银通融征信风控管理平台</span><span>联系方式：15919477006</span><span>网址：http://www.ytr98.com/</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pdfcreditServer',
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
