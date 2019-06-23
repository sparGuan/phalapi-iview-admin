<style lang="stylus" scoped>
.bankflowwrap
  //
</style>

<template>
  <div class="commontablewrap bankflowwrap">
    <table class="full border">
      <tr>
        <td colspan="4" class="title pd_x">基本信息</td>
      </tr>
      <tr>
        <td class="quarter pd_x">银行卡ID：</td>
        <td class="pd_x">{{data.card_id}}</td>
        <td class="quarter pd_x">银行卡类型：</td>
        <td class="pd_x">{{data.card_type}}</td>
      </tr>
      <tr>
        <td class="pd_x">银行名称：</td>
        <td class="pd_x">{{data.bank_name}}</td>
        <td class="pd_x">完整卡号：</td>
        <td class="pd_x">{{data.full_card_num}}</td>
      </tr>
      <tr>
        <td class="pd_x">卡号后4位：</td>
        <td class="pd_x">{{data.card_num}}</td>
        <td class="pd_x">持卡人：</td>
        <td class="pd_x">{{data.name_on_card}}</td>
      </tr>
      <tr>
        <td class="pd_x">借记卡余额/信用卡可用额度：</td>
        <td class="pd_x">{{data.balance}}</td>
        <td class="pd_x">信用卡额度：</td>
        <td class="pd_x">{{data.credit_limit}}</td>
      </tr>
      <tr>
        <td class="pd_x">信用卡现金可用额度：</td>
        <td class="pd_x">{{data.cash_balance}}</td>
        <td class="pd_x">信用卡现金额度：</td>
        <td class="pd_x">{{data.cash_limit}}</td>
      </tr>
      <tr>
        <td class="pd_x">开户银行：</td>
        <td class="pd_x">{{data.open_bank}}</td>
        <td class="pd_x">开卡时间：</td>
        <td class="pd_x">{{data.open_time}}</td>
      </tr>
      <tr>
        <td class="pd_x">本条记录创建时间：</td>
        <td class="pd_x" colspan="3">{{data.create_date}}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="8">银行定期储蓄</td>
      </tr>
      <tr>
        <td class="pd_x">金额</td>
        <td class="pd_x">定期类型</td>
        <td class="pd_x">币种（CNY-人民币,USD-美元）</td>
        <td class="pd_x">计息日期</td>
        <td class="pd_x">到期日期</td>
        <td class="pd_x">存期</td>
        <td class="pd_x">存期单位</td>
        <td class="pd_x">利率</td>
      </tr>
      <tr v-for="(list,index) in data.deposits" :key="index">
        <td class="pd_x">{{list.balance}}</td>
        <td class="pd_x">{{list.deposit_type}}</td>
        <td class="pd_x">{{list.currency_type}}</td>
        <td class="pd_x">{{list.deposit_date}}</td>
        <td class="pd_x">{{list.due_date}}</td>
        <td class="pd_x">{{list.period}}</td>
        <td class="pd_x">{{list.period_unit}}</td>
        <td class="pd_x">{{list.interest}}</td>
      </tr>
      <tr v-if="!data.deposits.length">
        <td class="tc" colspan="8">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="13">银行账单</td>
      </tr>
      <tr>
        <td class="pd_x">账单类型</td>
        <td class="pd_x">银行名称</td>
        <td class="pd_x">账单月份</td>
        <td class="pd_x">账单日</td>
        <td class="pd_x">还款日</td>
        <td class="pd_x">本期账单金额<br>人民币(￥)/美元($)</td>
        <td class="pd_x">最低还款额<br>人民币(￥)/美元($)</td>
        <td class="pd_x">上期账单金额<br>人民币(￥)/美元($)</td>
        <td class="pd_x">上期还款金额<br>人民币(￥)/美元($)</td>
        <td class="pd_x">本期新增款额<br>人民币(￥)/美元($)</td>
        <td class="pd_x">循环利息<br>人民币(￥)/美元($)</td>
        <td class="pd_x">信用卡额度<br>人民币(￥)/美元($)</td>
        <td class="pd_x">预借现金额度<br>人民币(￥)/美元($)</td>
      </tr>
      <tr v-for="(list,index)  in data.bills" :key="index">
        <td class="pd_x">{{list.bill_type}}</td>
        <td class="pd_x">{{list.bank_name}}</td>
        <td class="pd_x">{{list.bill_month}}</td>
        <td class="pd_x">{{list.bill_date}}</td>
        <td class="pd_x">{{list.payment_due_date}}</td>
        <td class="pd_x">{{list.new_balance || '-'}} / {{list.usd_new_balance || '-'}}</td>
        <td class="pd_x">{{list.min_payment || '-'}} / {{list.usd_min_payment || '-'}}</td>
        <td class="pd_x">{{list.last_balance || '-'}} / {{list.usd_last_balance || '-'}}</td>
        <td class="pd_x">{{list.last_payment || '-'}} / {{list.usd_last_payment || '-'}}</td>
        <td class="pd_x">{{list.new_charges || '-'}} / {{list.usd_new_charges || '-'}}</td>
        <td class="pd_x">{{list.interest || '-'}} / {{list.usd_interest || '-'}}</td>
        <td class="pd_x">{{list.credit_limit || '-'}} / {{list.usd_credit_limit || '-'}}</td>
        <td class="pd_x">{{list.cash_limit || '-'}} / {{list.usd_cash_limit || '-'}}</td>
      </tr>
      <tr v-if="!data.bills.length">
        <td class="tc" colspan="13">未发现</td>
      </tr>
    </table>
    <p style="margin-top: 20px;">消费类型：储蓄卡 收入项: SALARY-工资; BONUS-奖金; ACCRUAL-利息; DEPOSIT-存现; TRANSFER-转账; LOANS-借贷; REVERSE-冲账; REFUND-退款; EARNINGS-收益; CLAIM-报销; OTHERREVENUE- 其 它收入 支出项: WITHDRAW-取现; HANDLINGFEE-手续 费; TRANSFER-转账; REPAYMENT-还贷; FINANCE-理财; CONSUMPTION- 消 费; RENT-房租; FUND-公积金; SOCIALSECURITY- 社保; COMMUNICATIONF EE-通讯费; LIVINGEXPENSE- 生 活费; OTHERFEE- 其 它 费 用; OTHEREXPENSE- 其 它支出 信用卡 消费类型 WITHDRAW-取现; PAYMENTS-还款; INTEREST-逾期利息; OVERDUEPAYMENT -延滞金; OVERDUEFEE- 超 额 费; INSTALLMENT-分期; SHOPPING-消费; OTHERFEE-其他费用</p>
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="17">消费记录</td>
      </tr>
      <tr>
        <td class="pd_x">排序</td>
        <td class="pd_x">消费记录ID</td>
        <td class="pd_x">卡号末4位</td>
        <td class="pd_x">记账日期</td>
        <td class="pd_x">消费类型</td>
        <td class="pd_x">交易时间</td>
        <td class="pd_x">币种（CNY-人民币,USD-美元）</td>
        <td class="pd_x">消费金额</td>
        <td class="pd_x">余额</td>
        <td class="pd_x">交易地点</td>
        <td class="pd_x">交易方式</td>
        <td class="pd_x">交易通道</td>
        <td class="pd_x">描述</td>
        <td class="pd_x">备注</td>
        <td class="pd_x">对方卡号</td>
        <td class="pd_x">对方持卡人</td>
        <td class="pd_x">对方银行</td>
      </tr>
      <tr v-for="(list,index)  in data.shopping_sheets" :key="index">
        <td class="pd_x">{{list.order_index}}</td>
        <td class="pd_x">{{list.id}}</td>
        <td class="pd_x">{{list.card_num}}</td>
        <td class="pd_x">{{list.post_date}}</td>
        <td class="pd_x">{{list.category}}</td>
        <td class="pd_x">{{list.trans_date}}</td>
        <td class="pd_x">{{list.currency_type}}</td>
        <td class="pd_x">{{list.amount_money}}</td>
        <td class="pd_x">{{list.balance}}</td>
        <td class="pd_x">{{list.trans_addr}}</td>
        <td class="pd_x">{{list.trans_method}}</td>
        <td class="pd_x">{{list.trans_channel}}</td>
        <td class="pd_x">{{list.description}}</td>
        <td class="pd_x">{{list.remark}}</td>
        <td class="pd_x">{{list.opposite_card_no}}</td>
        <td class="pd_x">{{list.name_on_opposite_card}}</td>
        <td class="pd_x">{{list.opposite_bank}}</td>
      </tr>
      <tr v-if="!data.shopping_sheets.length">
        <td class="tc" colspan="17">未发现</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="13">分期记录</td>
      </tr>
      <tr>
        <td class="pd_x">消费记录ID</td>
        <td class="pd_x">记账日期</td>
        <td class="pd_x">交易时间</td>
        <td class="pd_x">分期描述</td>
        <td class="pd_x">分期手续费描述</td>
        <td class="pd_x">分期转账手续费描述</td>
        <td class="pd_x">分期类型</td>
        <td class="pd_x">总分期数</td>
        <td class="pd_x">当前分期数</td>
        <td class="pd_x">币种（CNY-人民币,USD-美元）</td>
        <td class="pd_x">本期金额</td>
        <td class="pd_x">本期手续费</td>
        <td class="pd_x">转账手续费</td>
      </tr>
      <tr v-for="(list,index) in data.installments" :key="index">
        <td class="pd_x">{{list.shoppingsheet_id}}</td>
        <td class="pd_x">{{list.post_date}}</td>
        <td class="pd_x">{{list.trans_date}}</td>
        <td class="pd_x">{{list.installment_desc}}</td>
        <td class="pd_x">{{list.handingfee_desc}}</td>
        <td class="pd_x">{{list.transferfee_desc}}</td>
        <td class="pd_x">{{list.installment_type}}</td>
        <td class="pd_x">{{list.total_month}}</td>
        <td class="pd_x">{{list.current_month}}</td>
        <td class="pd_x">{{list.currency_type}}</td>
        <td class="pd_x">{{list.amount_money}}</td>
        <td class="pd_x">{{list.handing_fee}}</td>
        <td class="pd_x">{{list.transfer_fee}}</td>
      </tr>
      <tr v-if="!data.installments.length">
        <td class="tc" colspan="13">未发现</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BankFlow',
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
  beforeMount () {
    let temp = this.data.bills.map(e => e.installments)
    this.$set(this.data, 'installments', [].concat.apply([], temp))
    let temp2 = this.data.bills.map(e => e.shopping_sheets)
    this.$set(this.data, 'shopping_sheets', [].concat.apply([], temp2))
  }
}
</script>
