<!-- 通用表格模板 -->
<style lang="less" scoped>
.common-table-view {
  /deep/.ivu-table-tip {
    overflow-x: hidden;
  }
}
</style>

<template>
  <div>
    <template v-for="(item, i) in data">
      <!-- 涉诉文书报表 -->
      <table
        class="full border"
        v-if="!(item instanceof Array) && typeof item === 'object'"
      >
        <tr>
          <td class="pd_x title" colspan="12">{{ infos["TITLE"][i] }}</td>
        </tr>
        <template v-for="(key, index) in Object.keys(item)">
          <tr v-if="index % 2 === 0 && !(item[key] instanceof Array)">
            <td
              class="pd_x min150"
              v-if="infos.FIELD[i] && infos.FIELD[i][key]"
              :colspan="
                infos.FIELD[i] && infos.FIELD[i][Object.keys(item)[index + 1]]
                  ? ''
                  : '1'
              "
            >
              {{ infos.FIELD[i] && infos.FIELD[i][key] }}：
            </td>
            <td
              class="pd_x min150"
              v-if="infos.FIELD[i] && infos.FIELD[i][key]"
              :colspan="
                infos.FIELD[i] && infos.FIELD[i][Object.keys(item)[index + 1]]
                  ? ''
                  : '11'
              "
            >
              {{ item[key] }}
            </td>
            <td
              class="pd_x min150"
              v-if="
                infos.FIELD[i] && infos.FIELD[i][Object.keys(item)[index + 1]]
              "
            >
              {{
                infos.FIELD[i] && infos.FIELD[i][Object.keys(item)[index + 1]]
              }}：
            </td>
            <td
              class="pd_x min150"
              v-if="
                infos.FIELD[i] && infos.FIELD[i][Object.keys(item)[index + 1]]
              "
            >
              {{ item[Object.keys(item)[index + 1]] }}
            </td>
          </tr>
          <!-- <tr v-if="item[key] instanceof Array && index % 2 === 0">
            <td class="pd_x" colspan="12">
              <Table
                border
                :columns="item.FIELD[key]"
                :data="item[key]"
                style="margin-top:20px;"
              ></Table>
            </td>
          </tr>
          <tr
            v-if="
              item[Object.keys(item)[index + 1]] instanceof Array &&
                index % 2 === 0
            "
          >
            <td class="pd_x" colspan="12">
              <Table
                border
                :columns="item.FIELD[Object.keys(item)[index + 1]]"
                :data="item[Object.keys(item)[index + 1]]"
                style="margin-top:20px;"
              ></Table>
            </td>
          </tr> -->
        </template>
      </table>

      <template
        v-else-if="
          item instanceof Array && typeof item === 'object' && infos.TITLE[i]
        "
      >
        <div style="margin-top:20px;">
          <label>{{ infos["TITLE"] && infos["TITLE"][i] }}</label>
          <Table
            border
            :columns="infos['FIELD'] && infos.FIELD[i]"
            style="margin-top:10px;"
            :data="item"
            class="common-table-view"
          ></Table>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TableReportTemp',
  data () {
    return {
    }
  },
  props: ['data', 'infos'],
  mounted () {

  }
}

</script>
