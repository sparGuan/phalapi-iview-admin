<style lang="stylus" scoped>
  . {
    border-right: 1px solid #e8eaec;
  }

  . {
    border-bottom: 1px solid #e8eaec;
  }
  .aboutuswrap
    font-size:14px;
    background: #cdcdcd33;
    .banner
      height:300px;
      background:url(../../../static/img/loanNav_bg.png) no-repeat;
      background-size:100% 320px;
    .itemList
      margin-top: 30px;

      padding: 15px;
      .itemTitle {
        margin-bottom: 20px;
        .titleTxt {
          font-weight: 600;
          border-bottom: 1px solid #666;
          padding-bottom: 3px;
        }

        .titleTxt,
        .englishTxt {
          padding-top: 3px
        }
      }
      .userBox {
        .userUl {
          display: flex;
          flex-wrap: wrap;
          justify-content space-around;
          padding: 15px 30px;
          li {
            display: flex;
            flex-direction: column;
            width: calc(96%/2);
            padding:20px 30px;
            background:#fff;
            margin-bottom 20px;
            text-align center;
            span {
              img {
                width 22px;
                margin-bottom 7px
              }
            }
            b {
              padding-left: 5px;
              margin-bottom: 10px;
            }
            p {
              color: #999;
              font-size: 12px;
            }
          }
        }
      }

</style>

<template>
  <div class="appwrap aboutuswrap">
    <div class="banner">
    </div>
    <div class="itemList">
      <div class="itemTitle txtC">
        <p><b class="titleTxt">关于我们</b></p>
        <p><b class="englishTxt font_12">ABOUT US</b></p>
      </div>
      <div class="userBox">
        <ul class="userUl">
          <li class=" ">
              <span><img src="../../../static/img/aboutUs_1.png" alt=""></span>
              <b>倡导合作共赢</b>
            <p>从解决方案到技术体系构建、技术实施提供交钥匙服务，诚信合作，共同发展</p>
          </li>
          <li class="">
              <span><img src="../../../static/img/aboutUs_2.svg" alt=""></span>
              <b>丰富行业经验</b>
            <p>具有丰富的行业应用经验和人才资源，可以定制化和个性化的服务优质客户，响应客户需求</p>
          </li>
          <li class="">
              <span><img src="../../../static/img/aboutUs_3.png" alt=""></span>
              <b>多终端系统同步</b>
            <p>提供从PC端到微信端、APP移动系统的多终端数据同步系统，方便客户的移动办公和迅捷客户响应</p>
          </li>
          <li class="">
              <span><img src="../../../static/img/aboutUs_4.svg" alt=""></span>
              <b>掌握核心技术</b>
            <p>掌握分布式SaaS、大数据查询、征信模型、风控体系构建等核心技术</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {

    }
  }
}

</script>
