<style lang="stylus" scoped>
.bannerwrap {
  min-width: $wrapwidth;
  position: relative;

  .bannerbox {
    background: $basecolor;
    position: relative;

    .bannerbg {
      overflow: hidden;

      .canvasImg {
        height: 500px;
      }
    }

    .bannertext {
      position: absolute;
      top: 174px;
      width: 100%;
      color: #fff;

      .bigtit {
        text-align: center;
        font-size: 34px;
      }

      .smalltit {
        text-align: center;
        font-size: 21px;
        margin-top: 37px;

        span {
          display: inline-block;
          border: 1px solid #fff;
          padding: 3px 13px;
          margin-right: 25px;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="bannerwrap">
    <div :style="{ height: height + 'px' }" class="bannerbox">
      <!-- 背景层 -->
      <div :style="{ height: height + 'px' }" class="bannerbg">
        <vue-particles shapeType="polygon" class="canvasImg"></vue-particles>
      </div>
      <!-- 文字层 -->
      <div class="bannertext">
        <div class="appwrap">
          <p class="bigtit">
            快捷高效的分布式智能云大数据，开启您的云端风控之旅
          </p>
          <p class="smalltit">
            <span>风险评估</span>
            <span>反欺诈</span>
            <span>信息核验</span>
            <span>数据获取</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {

    }
  },
  components: {},
  props: {
    height: {
      type: Number,
      default: 500
    }
  }
}
</script>
