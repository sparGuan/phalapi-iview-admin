<style lang="stylus" scoped>
.commontablewrap {
  /deep/.ivu-table-border td {
    font-size: 12px;
  }
}
</style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="pd_x min150" colspan="12"><h2>输入信息</h2></td>
      </tr>
      <tr>
        <td class="pd_x min150">名称：</td>
        <td class="pd_x min150">
          {{ data && data.name }}
        </td>
        <td class="pd_x min150">身份证号：</td>
        <td class="pd_x min150">
          {{ data && data.idNo }}
        </td>
      </tr>

      <tr>
        <td class="pd_x min150" colspan="1">手机号码：</td>
        <td class="pd_x min150" colspan="11">
          {{ data && data.mobileNo }}
        </td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="pd_x min150">履约能力：</td>
        <td class="pd_x min150">
          {{
            data && data.finRequireScore === "-1"
              ? "权限不足"
              : data.finRequireScore
          }}
        </td>
        <td class="pd_x min150">失信风险：</td>
        <td class="pd_x min150">
          {{
            data && data.payAbilityScore === "-1"
              ? "权限不足"
              : data.finRequireScore
          }}
        </td>
      </tr>

      <tr>
        <td class="pd_x min150">消费偏好：</td>
        <td class="pd_x min150">
          {{
            data && data.performScore === "-1"
              ? "权限不足"
              : data.finRequireScore
          }}
        </td>
        <td class="pd_x min150">行为特征：</td>
        <td class="pd_x min150">
          {{
            data && data.actionScore === "-1"
              ? "权限不足"
              : data.finRequireScore
          }}
        </td>
      </tr>

      <tr>
        <td class="pd_x min150">社交信用：</td>
        <td class="pd_x min150">
          {{
            data && data.virAssetScore === "-1"
              ? "权限不足"
              : data.finRequireScore
          }}
        </td>
        <td class="pd_x min150">成长潜力：</td>
        <td class="pd_x min150">
          {{
            data && data.trendScore === "-1" ? "权限不足" : data.finRequireScore
          }}
        </td>
      </tr>

      <tr>
        <td class="pd_x min150">身份特征：</td>
        <td class="pd_x min150">
          {{
            data && data.bseInfoScore === "-1" ? "权限不足" : data.bseInfoScore
          }}
        </td>
        <td class="pd_x min150" colspan="1">查询时间：</td>
        <td class="pd_x min150" colspan="11">
          {{
            data && data.dataBuildTime === "-1"
              ? "权限不足"
              : data.dataBuildTime
          }}
        </td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="pd_x min150">总分：</td>
        <td class="pd_x min150">600</td>
        <td class="pd_x min150">综合评分：</td>
        <td class="pd_x min150">
          {{
            data && data.credooScore === "-1" ? "暂无评分" : data.credooScore
          }}
        </td>
      </tr>
      <tr>
        <td class="pd_x min150">评分：</td>
        <td class="pd_x min150">
          <Rate allow-half :value="valueHalf" disabled show-text />
        </td>
        <td class="pd_x min150">信用度：</td>
        <td class="pd_x min150">
          {{ valueHalf <= 2 ? "差" : valueHalf <= 3.5 ? "良好" : "优" }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'creditScore',
  props: ['data'],
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    valueHalf () {
      if (this.data && this.data.credooScore > 0) {
        return Number((this.data.credooScore / 600 * 5).toFixed(2))
      }
    }
  }
}

</script>
