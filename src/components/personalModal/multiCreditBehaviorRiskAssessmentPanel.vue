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
        <td class="pd_x">名称</td>
        <td class="pd_x">身份证号码</td>
        <td class="pd_x">命中机构数目</td>
        <td class="pd_x">机构所属行业</td>
        <td class="pd_x">业务发生时间日期</td>
      </tr>
      <tr v-for="item in data.records.result">
        <td class="pd_x">{{ item.name }}</td>
        <td class="pd_x">{{ item.idNo }}</td>
        <td class="pd_x">
          {{ item.amount === "-1" ? "无权限" : item.amount }}
        </td>
        <td class="pd_x">{{ item.industry | change }}</td>
        <td class="pd_x">
          {{ item.busiDate === "0" ? "无权限" : item.busiDate }}
        </td>
      </tr>
      <tr v-if="!data.records.result.length">
        <td class="tc" colspan="6">未发现</td>
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
      let txt = '其他'
      switch (t) {
        case 'BAK':
          txt = '银行'
          break
        case 'MCL':
          txt = '小贷'
          break
        case 'P2P':
          txt = 'P2P'
          break
        case 'ASM':
          txt = '资产管理'
          break
        case 'TRU':
          txt = '信托'
          break
        case 'LEA':
          txt = '租赁'
          break
        case 'CRF':
          txt = '众筹'
          break
        case 'INV':
          txt = '投资'
          break
        case 'CNS':
          txt = '消费金融'
          break
        case 'INS':
          txt = '保险'
          break
        case 'THR':
          txt = '第三方'
          break
        case 'OTH':
          txt = '其他'
          break
        case '0':
          txt = '无权限'
          break
      }
      return txt
    }
  }
}
</script>
