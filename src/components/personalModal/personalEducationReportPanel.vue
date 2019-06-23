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
        <td class="pd_x">返回状态</td>
      </tr>
      <tr>
        <td class="pd_x">{{data.records.uno}}</td>
        <td class="pd_x">{{data.records.result.result}} (0：查询成功_有数据 1：查询成功_无数据 3：无法查询)</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">结果信息</td>
      </tr>
      <tr>
        <td class="pd_x">名字：</td>
        <td class="pd_x">{{data.records.result.name}}</td>
        <td class="pd_x">证件号码：</td>
        <td class="pd_x">{{data.records.result.idNo}}</td>
        <td class="pd_x" rowspan="3" colspan="2"><img :src="data.records.result.photo" alt=""></td>
      </tr>
      <tr>
        <td class="pd_x">学历：</td>
        <td class="pd_x">{{data.records.result.educationDegree}}</td>
        <td class="pd_x">专业名称：</td>
        <td class="pd_x">{{data.records.result.specialityName}}</td>
      </tr>
      <tr>
        <td class="pd_x">入学年份：</td>
        <td class="pd_x">{{data.records.result.enrolDate}}</td>
        <td class="pd_x">毕业结论：</td>
        <td class="pd_x">{{data.records.result.studyResult}}</td>
      </tr>
      <tr>
        <td class="pd_x">毕业年份：</td>
        <td class="pd_x">{{data.records.result.graduateTime}}</td>
        <td class="pd_x">毕业学校：</td>
        <td class="pd_x">{{data.records.result.graduate}}</td>
        <td class="pd_x">学历类型：</td>
        <td class="pd_x">{{data.records.result.studyStyle}}</td>
      </tr>
      <tr>
        <td class="pd_x">学校所在城市：</td>
        <td class="pd_x">{{data.records.result.schoolCity}}</td>
        <td class="pd_x">学校所属主管单位：</td>
        <td class="pd_x">{{data.records.result.organization}}</td>
        <td class="pd_x">学校类型：</td>
        <td class="pd_x">{{data.records.result.schoolNature}}</td>
      </tr>
      <tr>
        <td class="pd_x">学校类别：</td>
        <td class="pd_x">{{data.records.result.schoolCategory}}</td>
        <td class="pd_x">学校性质：</td>
        <td class="pd_x">{{data.records.result.schoolTrade}}</td>
        <td class="pd_x">办学形式：</td>
        <td class="pd_x">{{data.records.result.educationApproach}}</td>
      </tr>
      <tr>
        <td class="pd_x">是否为985：</td>
        <td class="pd_x">{{data.records.result.is985}}</td>
        <td class="pd_x">是否为211：</td>
        <td class="pd_x">{{data.records.result.is211}}</td>
        <td class="pd_x">响应说明：</td>
        <td class="pd_x">{{data.records.result.message}}</td>
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
