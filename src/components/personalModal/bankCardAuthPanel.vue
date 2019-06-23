<style lang="stylus" scoped>
.bankCardAuthPanel {
  //
}
</style>

<template>
  <div class="commontablewrap bankCardAuthPanel">
    <table v-if="data.basic" class="full border">
      <tr>
        <td colspan="8" class="title pd_x">身份证二要素验证</td>
      </tr>
      <tr>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">{{ data.basic.name }}</td>
        <td class=" pd_x">身份证号：</td>
        <td class="pd_x">{{ data.basic.identityNo }}</td>
        <td class=" pd_x">验证结果描述：</td>
        <td class="pd_x">{{ data.basic.remark }}</td>
        <td class=" pd_x">第三方信息：</td>
        <td class="pd_x">{{ data.basic.resultMsg }}</td>
      </tr>
    </table>

    <table v-if="data.photo" class="full border">
      <tr>
        <td colspan="8" class="title pd_x">身份证要素返照</td>
      </tr>
      <tr>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">{{ data.photo.name }}</td>
        <td rowspan="4" class="pd_x"><img :src="data.photo.photo" /></td>
      </tr>
      <tr>
        <td class=" pd_x">身份证号：</td>
        <td class="pd_x">{{ data.photo.identityNo }}</td>
      </tr>
      <tr>
        <td class=" pd_x">验证结果描述：</td>
        <td class="pd_x">{{ data.photo.remark }}</td>
      </tr>
      <tr>
        <td class=" pd_x">第三方信息：</td>
        <td class="pd_x">{{ data.photo.resultMsg }}</td>
      </tr>
    </table>

    <table v-if="data.two" class="full border">
      <tr>
        <td colspan="10" class="title pd_x">银行卡二要素验证</td>
      </tr>
      <tr>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">{{ data.two.name }}</td>
        <td class=" pd_x">卡类型名称：</td>
        <td class="pd_x">{{ data.two.bankCardBin.cardName }}</td>
        <td class=" pd_x">验证结果描述：</td>
        <td class="pd_x">{{ data.two.remark }}</td>
        <td class=" pd_x">第三方信息：</td>
        <td class="pd_x">{{ data.two.resultMsg }}</td>
      </tr>
      <tr>
        <td class="pd_x">银行编号：</td>
        <td class="pd_x">{{ data.two.bankCardBin.bankId }}</td>
        <td class=" pd_x">卡号区域标识：</td>
        <td class="pd_x">{{ data.two.bankCardBin.id }}</td>
        <td class=" pd_x">银行名称：</td>
        <td class="pd_x">{{ data.two.bankCardBin.bankName }}</td>
        <td class=" pd_x">卡种：</td>
        <td class="pd_x" v-html="getType(data.two.bankCardBin.cardTy)"></td>
      </tr>
    </table>

    <table v-if="data.three" class="full border">
      <tr>
        <td colspan="10" class="title pd_x">身份证三要素验证</td>
      </tr>
      <tr>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">{{ data.three.name }}</td>
        <td class=" pd_x">身份证号：</td>
        <td class="pd_x">{{ data.three.identityNo }}</td>
        <td class="pd_x">银行卡号码</td>
        <td class="pd_x">{{ data.three.bankCardNo }}</td>
        <td class=" pd_x">验证结果描述：</td>
        <td class="pd_x">{{ data.three.remark }}</td>
        <td class=" pd_x">第三方信息：</td>
        <td class="pd_x">{{ data.three.resultMsg }}</td>
      </tr>
      <tr>
        <td class="pd_x">银行编号：</td>
        <td class="pd_x">{{ data.three.bankCardBin.bankId }}</td>
        <td class=" pd_x">卡号区域标识：</td>
        <td class="pd_x">{{ data.three.bankCardBin.id }}</td>
        <td class=" pd_x">银行名称：</td>
        <td class="pd_x">{{ data.three.bankCardBin.bankName }}</td>
        <td class=" pd_x">卡类型名称：</td>
        <td class="pd_x">{{ data.three.bankCardBin.cardName }}</td>
        <td class=" pd_x">卡种：</td>
        <td class="pd_x" v-html="getType(data.three.bankCardBin.cardTy)"></td>
      </tr>
    </table>

    <table v-if="data.four" class="full border">
      <tr>
        <td colspan="10" class="title pd_x">身份证四要素验证</td>
      </tr>
      <tr>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">{{ data.four.name }}</td>
        <td class=" pd_x">身份证号：</td>
        <td class="pd_x">{{ data.four.identityNo }}</td>
        <td class="pd_x">银行卡号码：</td>
        <td class="pd_x">{{ data.four.bankCardNo }}</td>
        <td class=" pd_x">验证结果描述：</td>
        <td class="pd_x">{{ data.four.remark }}</td>
        <td class=" pd_x">第三方信息：</td>
        <td class="pd_x">{{ data.four.resultMsg }}</td>
      </tr>
      <tr>
        <td class="pd_x">银行编号：</td>
        <td class="pd_x">{{ data.four.bankCardBin.bankId }}</td>
        <td class=" pd_x">卡号区域标识：</td>
        <td class="pd_x">{{ data.four.bankCardBin.id }}</td>
        <td class=" pd_x">银行名称：</td>
        <td class="pd_x">{{ data.four.bankCardBin.bankName }}</td>
        <td class=" pd_x">卡类型名称：</td>
        <td class="pd_x">{{ data.four.bankCardBin.cardName }}</td>
        <td class=" pd_x">卡种：</td>
        <td class="pd_x" v-html="getType(data.four.bankCardBin.cardTy)"></td>
      </tr>
    </table>

    <table v-if="data.mobile" class="full border">
      <tr>
        <td colspan="10" class="title pd_x">运营商三要素验证</td>
      </tr>
      <tr>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">{{ data.mobile.name }}</td>
        <td class=" pd_x">身份证号：</td>
        <td class="pd_x">{{ data.mobile.identityNo }}</td>
        <td class=" pd_x">手机号：</td>
        <td class="pd_x">{{ data.mobile.mobile }}</td>
        <td class=" pd_x">验证结果描述：</td>
        <td class="pd_x">{{ data.mobile.remark }}</td>
        <td class=" pd_x">第三方信息：</td>
        <td class="pd_x">{{ data.mobile.resultMsg }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BankCardAuthPanel',
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
  methods: {
    getType (type) {
      switch (type) {
        case 'C': type = '信用卡'; break
        case 'D': type = '储蓄卡'; break
        case 'P': type = '预付卡'; break
        case 'S': type = '未知外卡'; break
      }
      return type
    }
  }
}
</script>
