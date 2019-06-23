
<template>
  <div class="commontablewrap phonetimewrap">
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="12">基本信息</td>
      </tr>
      <tr>
        <td class="pd_x">报告编号</td>
        <td class="pd_x">{{ data.records.uno }}</td>
        <td class="pd_x">身份证号</td>
        <td class="pd_x">{{ data.records.result.idNo }}</td>
      </tr>
      <tr>
        <td class="pd_x">主体名称</td>
        <td class="pd_x">{{ data.records.result.name }}</td>
        <td class="pd_x">与查询直属是否存在关系</td>
        <td class="pd_x">
          {{ isExistRel(Number(data.records.result.isExistRel)) }}
        </td>
      </tr>
      <tr>
        <td class="pd_x" colspan="1">关系力度</td>
        <td class="pd_x" colspan="11">
          <Rate :value="Number(data.records.result.relLevel) + 2" disabled />
          {{ relLevel(Number(data.records.result.relLevel)) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'contactsRelation',
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
  methods: {
    relLevel (key) {
      switch (key) {
        case 0:

          return '弱'
        case 1:

          return '中'
        case 2:

          return '强'
        case 3:

          return '其他'
        default:
          break
      }
    },
    isExistRel (key) {
      switch (key) {
        case 0:

          return '否'
        case 1:

          return '是'
        case 9:

          return '库中无数据'
        default:
          break
      }
    }

  }
}
</script>
