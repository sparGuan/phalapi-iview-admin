<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap alipaywrap">
    <table class="full border">
      <tr>
        <td class="pd_x title " colspan="5">裁判文书信息</td>
      </tr>
      <tr>
        <td class="pd_x">当事人名称：</td>
        <td class="pd_x">{{ data.cpws.name }}</td>
        <td class="pd_x">案件类型：</td>
        <td class="pd_x">{{ data.cpws.pageData[0].caseType }}</td>
      </tr>
      <tr>
        <td class="pd_x">标题：</td>
        <td class="pd_x">{{ data.cpws.pageData[0].title }}</td>
        <td class="pd_x">简述：</td>
        <td class="pd_x">{{ data.cpws.pageData[0].desc }}</td>
      </tr>
      <tr>
        <td class="pd_x">审结时间：</td>
        <td class="pd_x">{{ data.cpws.pageData[0].title }}</td>
        <td class="pd_x">内容：</td>
        <td class="pd_x">{{ data.cpws.pageData[0].content }}</td>
      </tr>
      <tr>
        <td class="pd_x">裁判文的案件号：</td>
        <td class="pd_x">{{ data.cpws.pageData[0].dataType }}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="pd_x title" colspan="5">执行公告信息</td>
      </tr>
      <tr>
        <td class="pd_x">被执行人姓名：</td>
        <td class="pd_x">{{ data.zxgg.pageData[0].name }}</td>
        <td class="pd_x">执行标的：</td>
        <td class="pd_x">{{ data.zxgg.pageData[0].executionTarget }}</td>
      </tr>
      <tr>
        <td class="pd_x">身份证号：</td>
        <td class="pd_x">{{ data.zxgg.pageData[0].identificationNO }}</td>
        <td class="pd_x">案号：</td>
        <td class="pd_x">{{ data.zxgg.pageData[0].caseNO }}</td>
      </tr>
      <tr>
        <td class="pd_x">执行法院名称：</td>
        <td class="pd_x">{{ data.zxgg.pageData[0].court }}</td>
      </tr>
    </table>

    <table class="full border">
      <tr>
        <td class="pd_x title" colspan="5">法院公告信息</td>
      </tr>
      <tr>
        <td class="pd_x">被执行人姓名：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].name }}</td>
        <td class="pd_x">执行依据文号：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].exeCid }}</td>
      </tr>
      <tr>
        <td class="pd_x">身份证号：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].identificationNO }}</td>
        <td class="pd_x">案号：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].caseNO }}</td>
      </tr>
      <tr>
        <td class="pd_x">性别：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].gender }}</td>
        <td class="pd_x">履行情况：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].implementationStatus }}</td>
      </tr>
      <tr>
        <td class="pd_x">发布时间：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].postTime }}</td>
        <td class="pd_x">省份：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].province }}</td>
      </tr>
      <tr>
        <td class="pd_x">立案时间：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].recordTime }}</td>
        <td class="pd_x">失信被执行人行为具体情形：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].specificCircumstances }}</td>
      </tr>
      <tr>
        <td class="pd_x">标识自然人或企业：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].type }}</td>
        <td class="pd_x">执行法院名称：</td>
        <td class="pd_x">{{ data.sxgg.pageData[0].court }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'hisLawsuit2',
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
