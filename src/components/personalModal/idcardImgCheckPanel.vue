<style lang="stylus" scoped></style>

<template>
  <div class="commontablewrap">
    <table class="full border">
      <tr>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">身份证号码：</td>
        <td class="pd_x">{{ data.name }}</td>
        <td class="pd_x">{{ data.idCard }}</td>
      </tr>
      <tr>
        <td class="pd_x">相似度分值：</td>
        <td class="pd_x">{{ data.score }}</td>
        <td class="pd_x">身份证简项比对结果：</td>
        <td class="pd_x">{{ data.identityCompareStatus }}</td>
      </tr>
      <tr>
        <td class="pd_x">身份证照片比对结果：</td>
        <td class="pd_x">
          {{
            data.identityPhotoCompareStatus === "SAME"
              ? "相似"
              : "无法识别的图像信息"
          }}
        </td>
        <td class="pd_x">身份证简项比对结果描述：</td>
        <td class="pd_x">{{ data.identityPhotoCompareStatusDesc }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'idcardImgCheck',
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
