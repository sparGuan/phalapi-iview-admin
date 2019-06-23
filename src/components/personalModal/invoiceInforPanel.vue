<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <!-- 发票基本信息 -->
    <table class="full border">
      <tr>
        <td class="pd_x title" colspan="12">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">发票代码：</td>
        <td class="pd_x">{{ data.basicInfo.invoiceCode }}</td>
        <td class="quarter half pd_x">发票号码：</td>
        <td class="pd_x">{{ data.basicInfo.invoiceNo }}</td>
      </tr>
      <tr>
        <td class="pd_x">发票种类：</td>
        <td class="pd_x">{{ data.basicInfo.invoiceType }}</td>
        <td class="pd_x">开票日期：</td>
        <td class="pd_x">{{ data.basicInfo.invoiceDate }}</td>
      </tr>
      <tr>
        <td class="pd_x">校验码：</td>
        <td class="pd_x">{{ data.basicInfo.checkCode }}</td>
        <td class="quarter half pd_x">作废标识：</td>
        <td class="pd_x">
          {{ data.basicInfo.cancelMark === "N" ? "未作废" : "已作废" }}
        </td>
      </tr>
      <tr>
        <td class="pd_x">机器编号：</td>
        <td class="pd_x">{{ data.basicInfo.machineNo }}</td>
        <td class="quarter half pd_x">不含税金额：</td>
        <td class="pd_x">{{ data.basicInfo.invoiceMoney }}</td>
      </tr>
      <tr>
        <td class="pd_x">金额合计(不含税)：</td>
        <td class="pd_x">{{ data.basicInfo.amount }}</td>
        <td class="pd_x">税额合计：</td>
        <td class="pd_x">{{ data.basicInfo.taxAmount }}</td>
      </tr>
      <tr>
        <td class="pd_x">价税合计(小写)：</td>
        <td class="pd_x">{{ data.basicInfo.machineNo }}</td>
        <td class="quarter half pd_x">价税合计(大写)：</td>
        <td class="pd_x">{{ data.basicInfo.totalAmountCn }}</td>
      </tr>
      <tr>
        <td class="pd_x">金额合计(不含税)：</td>
        <td class="pd_x">{{ data.basicInfo.amount }}</td>
        <td class="pd_x">税额合计：</td>
        <td class="pd_x">{{ data.basicInfo.taxAmount }}</td>
      </tr>
      <tr>
        <td class="pd_x">价税合计(小写)：</td>
        <td class="pd_x">{{ data.basicInfo.totalAmount }}</td>
        <td class="pd_x">价税合计(大写)：</td>
        <td class="pd_x">{{ data.basicInfo.totalAmountCn }}</td>
      </tr>
      <tr>
        <td class="pd_x">代开标识：</td>
        <td class="pd_x">
          {{ data.basicInfo.proxyMark === 1 ? "代开" : "无" }}
        </td>
        <td class="pd_x">快照地址：</td>
        <td class="pd_x">{{ data.basicInfo.snapshotUrl }}</td>
      </tr>
      <tr>
        <td class="pd_x">原件下载地址：</td>
        <td class="pd_x">{{ data.basicInfo.downloadUrl }}</td>
        <td class="quarter half pd_x">核验次数：</td>
        <td class="pd_x">{{ data.basicInfo.checkCount }}</td>
      </tr>
      <tr>
        <td class="pd_x" colspan="1">备注：</td>
        <td class="pd_x" colspan="11">{{ data.basicInfo.remark }}</td>
      </tr>
      <!-- 机动车发票【仅为机动车发票时返回】 -->
    </table>

    <table class="full border">
      <tr>
        <td class="pd_x title" colspan="12">销售方</td>
      </tr>
      <tr>
        <td class="pd_x min150">销方名称：</td>
        <td class="pd_x min150">{{ data.seller.salerName }}</td>
        <td class="pd_x min150">销方纳税人识别号：</td>
        <td class="pd_x min150">{{ data.seller.salerName }}</td>
      </tr>
      <tr>
        <td class="pd_x min150">销方地址电话(机动车发票仅展示电话)：</td>
        <td class="pd_x min150">{{ data.seller.salerAddressPhone }}</td>
        <td class="pd_x min150">销方开户行及账号：</td>
        <td class="pd_x min150">{{ data.seller.salerAccount }}</td>
      </tr>
      <tr>
        <td class="pd_x min150">销方地址(如果为机动车发票)：</td>
        <td class="pd_x min150">{{ data.seller.salerAddress }}</td>
        <td class="pd_x min150">销方开户银行(如果为机动车发票)：</td>
        <td class="pd_x min150">{{ data.seller.salerBankName }}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="pd_x title" colspan="12">购买方</td>
      </tr>
      <tr>
        <td class="pd_x">购方名称：</td>
        <td class="pd_x">{{ data.purchaser.buyerName }}</td>
        <td class="quarter half pd_x">销方纳税人识别号：</td>
        <td class="pd_x">{{ data.purchaser.购方纳税人识别号 }}</td>
      </tr>
      <tr>
        <td class="pd_x">购方地址电话：</td>
        <td class="pd_x">{{ data.purchaser.buyerAddressPhone }}</td>
        <td class="pd_x">购方银行账号：</td>
        <td class="pd_x">{{ data.purchaser.buyerAccount }}</td>
      </tr>
    </table>

    <!-- 销货清单 -->
    <Table
      border
      :columns="columns1"
      :data="data.detailedList"
      style="margin-top:20px;"
    ></Table>
  </div>
</template>

<script>
export default {
  name: 'invoiceInfor',
  data () {
    return {
      columns1: [
        {
          title: '货物名称',
          key: 'goodsName',
          align: 'center'
        },
        {
          title: '规格型号',
          key: 'specModel',
          align: 'center'
        },
        {
          title: '商品编码',
          key: 'goodsCode',
          align: 'center'
        },
        {
          title: '单价(不含税)',
          key: 'unitPrice',
          align: 'center'
        },
        {
          title: '数量',
          key: 'num',
          align: 'center'
        },
        {
          title: '单位',
          key: 'unit',
          align: 'center'
        },
        {
          title: '金额(不含税)',
          key: 'detailAmount',
          align: 'center'
        },
        {
          title: '税率',
          key: 'taxRate',
          align: 'center'
        },
        {
          title: '税额',
          key: 'taxAmount',
          align: 'center'
        }
      ]
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
