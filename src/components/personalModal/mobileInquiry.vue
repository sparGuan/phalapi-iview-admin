<style lang="stylus" scoped>
.commontablewrap {
  /deep/th .ivu-table-cell {
    font-size: 12px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="pd_x min150" colspan="1">报告编号：</td>
        <td class="pd_x min150 " colspan="11">{{ data.records.uno }}</td>
      </tr>
    </table>

    <tableReportTemp :data="data.records" :infos="infos" />
  </div>
</template>

<script>
import tableReportTemp from './tableReportTemp'
export default {
  name: 'mobileInquiry',
  props: ['data'],
  components: {
    tableReportTemp
  },
  data () {
    return {
      infos: {
        TITLE: {
          result: '查询结果'
        },
        FIELD: {
          result: {
            age: '年龄',
            inAddress: '入网地点',
            custTp: '消费套餐类别',
            custBill: '手机消费账单费用',
            dataBill: '手机流量金额',
            dataUsage: '手机流量情况',
            arrearsAmount: '当前欠费金额',
            historyarrears: '是否历史欠费',
            hasHouse: '是否有房',
            houseNum: '房屋数量',
            terminalManuFacturers: '终端厂家',
            terminalModel: '终端机型',
            operatingSystem: '操作系统',
            phoneState: '号码状态',
            imsi: '卡号',
            meid: '设备号',
            price: '当前手机价格',
            terminalNetSystem: '当前手机终端网络制式',
            terminalNetType: '当前手机终端网络类型',
            meid1ChangeMdn: '1年内换号不换机次数',
            meid2ChangeMdn: '2年内换号不换机次数',
            meid3ChangeMdn: '3年内换号不换机次数',
            meid1ChangeNet: '1年内换网络类型不换机次数',
            meid2ChangeNet: '2年内换网络类型不换机次数',
            meid3ChangeNet: '3年内换网络类型不换机次数',
            meidChangeMdnLevel: '换号不换机综合频率等级',
            meidUsedWangDuan: '曾使用网段',
            meidUsedWangDuanChange: '曾使用网段变更时间',
            meid1ChangeCity: '1年内手机归属地变化不换机次数',
            meid2ChangeCity: '2年内手机归属地变化不换机次数',
            meid3ChangeCity: '3年内手机归属地变化不换机次数',
            meidChangeCityLevel: '归属地变化综合频率等级',
            mdn1ChangeMeid: '号码不换1年内换手机设备次数',
            mdn3ChangeMeid: '号码不换3年内换手机设备次数',
            mdn5ChangeMeid: '号码不换5年内换手机设备次数',
            mdnCurPinpaiTime: '当前品牌启用时间',
            mdnCurPinpaiDur: '当前品牌使用时长',
            mdnLastPinpai: '上次使用品牌',
            mdnLastPinpaiTime: '上次品牌启用时间',
            mdnLastPinpaiDur: '上次品牌使用时长',
            mdnLast2Pinpai: '上上次使用品牌',
            mdnLast2PinpaiTime: '上上次品牌启用时间',
            mdnLast2PinpaiDur: '上上次品牌使用时长',
            mdnUsedOtherPinpai: '曾经使用终端品牌',
            mdnUsedAveDur: '平均使用品牌时长',
            mdnCurMeidCkPrice: '当前使用手机市场参考价',
            mdnCurMeidShPrice: '当前手机型号上市价',
            mdnCurMeidShTime: '当前手机型号上市时间',
            mdnCurMeidShDur: '当前手机型号上市时长',
            mdnLastMeidCkPrice: '上次使用手机市场参考价',
            mdnLastMeidShPrice: '上次手机型号上市价',
            mdnLastMeidShTime: '上次手机型号上市时间',
            mdnLastMeidShDur: '上次手机型号上市时长',
            mdnLast2MeidCkPrice: '上上次使用手机市场参考价',
            mdnLast2MeidShPrice: '上上次手机型号上市价',
            mdnLast2MeidShTime: '上上次手机型号上市时间',
            mdnLast2MeidShDur: '上上次手机型号上市时长',
            mdnUsedMeidAvePrice: '平均使用终端上市价',
            mdnUsedMeidModel: '曾用终端机型',
            mdnUsedNet: '曾用网络类型',
            mdnUsedNetChangeTime: '曾用网络类型变更时间',
            mdnUsedPinpai: '曾用终端品牌',
            isChangeMeid3Mdn5: '3年内设备5年内手机号码是否变更',
            isBlackList: '是否黑名单',
            blackListType: '黑名单类型',
            result122: '身份证、户名、手机号码是否一致',
            result124: '同一个身份证下手机号码数量',
            result131: '手机号码状态',
            result221: '入网时长',
            result231: '主叫通话次数',
            result232: '被叫通话次数',
            result233: '主叫通话时长区间',
            result234: '被叫通话时长区间',
            result235: '短信发送次数区间',
            result236: '用户近3个月内活跃天数是否大于一半'
          }
        }
      }
    }
  }
}

</script>
