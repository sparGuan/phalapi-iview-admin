<style lang="less" scoped>
  .ivu-layout-footer{
  padding: 0;
}
  .footerwrap {
    height: 150px;
    font-weight: 400;
    background: url(../../../static/img/footer_bg.png) no-repeat;
    background-size: 100%;

    .footerBox {
      padding: 15px 15px 10px;
      height: 100%;
      .flexBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .flexLeft {
          .webLabel {
            display: flex;
            margin-bottom: 10px;
            span {
              padding: 0 10px;
            }
          }
        }

        .flexRight {
          img {
            width: 60px;
            height: 60px;
            margin-bottom: 5px;
            &:hover{
              position: relative;
              width:110px;
              height: 110px;
          }
          }

          .friendlyLink{
            margin-top: 3px;
          }
        }
      }
    }
  }

</style>

<template>
  <Footer class="footerwrap">
    <div class="appwrap footerBox  white font_12">
      <div class="flexBox">
        <div class="flexLeft">
          <div class="webLabel">
            <b>风控大数据</b>
            <span>产品中心</span>
            <span>业务导流</span>
            <span>关于我们</span>
          </div>
          <p></p>
          <p><Icon type="ios-call-outline" />&nbsp; 15919477006</p>
          <p>
            <Icon type="ios-compass-outline" size='16' />&nbsp;深圳市南山区海德三道海岸大厦东座1607</p>

          <!-- <i class="line">|</i> -->
        </div>
        <div class="flexRight txtR">
          <p><img src="../../../static/img/wx_icon.jpg" alt=""></p>
          <p>扫一扫关注微信公众号</p>
          <p class="friendlyLink">友情链接：银通融社群社区&#x3000;银通融赏金社区 </p>
        </div>
      </div>
      <p class="txtC "><small>Copyright@2017-{{new Date().getFullYear()}} ytr98.com</small>&#x3000;深圳市银通融投资管理公司
        版权所有/粤ICP备17007785号-1</p>
    </div>
  </Footer>
</template>

<script>
export default {}

</script>
