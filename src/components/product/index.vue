<style lang="stylus" scoped>
// common
.commonPadding{
  padding:0 30px;
}
.productWrap
  font-size 14px;
  background:#f2f2f2;
  padding-bottom 30px;
  .banner
    img
      width 100%;
      height:300px;
  .tabsList
    position relative
    top:-40px
    ul
      display:flex;
      justify-content space-around;
      flex-wrap:wrap;
      padding:20px 15px 15px;
      box-shadow: 0 4px 8px #ccc;
      li
        display flex;
        flex-direction column;
        width:calc(100%/6);
        border-right:1px solid #e8eaec;
        padding:10px 0;
        &:hover
          color:#009dff;
        &:nth-child(-n+6)
          border-bottom:1px solid #e8eaec;
        &:nth-child(6),
        &:nth-child(12)
          border-right:none;
        i
         margin-bottom 10px
         img
           width:32px;
  .itemList
    margin-top: 30px;
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
    .itemImg
      img
        width:100%
    .listUl {
      display flex;
      justify-content space-between;
      flex-wrap:wrap;
      padding: 10px 30px;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        background #fff;
        border: 1px solid #e8eaec;
        width: calc(95%/2);
        padding: 20px 15px;
        text-align: center;
        margin-bottom 20px;
        &:hover{
         box-shadow: 0 4px 8px #ccc;
        }
        b {
          padding: 7px 0 10px 0;
        }
        span {
          color: #999;
        }
      }

    }
</style>

<template>
  <div class="appwrap productWrap">
    <div class="banner">
      <img :src="currentBanner" alt="">
    </div>
    <div class="tabsList commonPadding">
      <ul class="white_bg">
        <li v-for="(item,index) in tabsList" :key="index" class="txtC pointer" @click="checkTab(index)">
          <i>
            <img :src="item.hightUrl" v-show="currentTab === index" alt="">
            <img :src="item.url" v-show="currentTab != index" alt="">
          </i>
          <b :class="{primary:currentTab === index}" class="font_12">{{item.name}}</b>
        </li>
      </ul>
      </div>
      <div class="itemList">
      <div class="itemTitle txtC">
        <p><b class="titleTxt">产品介绍</b></p>
        <p><b class="englishTxt font_12">INTRODUCTION TO PRODUCTS</b></p>
      </div>
      <div class="itemImg commonPadding">
        <img :src="currentImg" alt="" class="white_bg">
      </div>
    </div>
    <div class="itemList">
      <div class="itemTitle txtC">
        <p><b class="titleTxt">应用场景</b></p>
        <p><b class="englishTxt font_12">APPLICATION SCENARIOS</b></p>
      </div>
      <ul class="listUl" v-show="currentTab === 0 || currentTab === 3">
        <li>
          <b class="">信贷机构</b>
          <span>核实用户身份信息是否属实，优化金融等高风险行业复杂的身份验证流程。</span>
        </li>
        <li>
          <b>单位人事部</b>
          <span>对于用户身份真实性要求较高的服务领域，通过合适信息，确保服务人员的身份真实性，提高业务人员身份审核效率。</span>
        </li>
      </ul>
      <ul class="listUl" v-show="currentTab === 1">
        <li>
          <b class="">信贷机构</b>
          <span>核实用户身份信息是否属实，优化金融等高风险行业复杂的身份验证流程。</span>
        </li>
        <li>
          <b>二手车行</b>
          <span>核实车辆状态，增加对汽车估值的评判</span>
        </li>
        <li>
          <b class="">车押公司</b>
          <span>核实车辆状态，增加对汽车估值的评判</span>
        </li>
        <li>
          <b>租车公司</b>
          <span>违章动态核实，避免公司旗下车辆高发违章，驾驶分的评判，避免租车人的风险</span>
        </li>
      </ul>
      <ul class="listUl" v-show="currentTab === 2">
        <li>
          <b class="">电商平台</b>
          <span>核实用户身份信息是否属实，防范虚拟恶意注册</span>
        </li>
        <li>
          <b>网站</b>
          <span>核实用户身份信息是否属实，防范虚拟恶意注册</span>
        </li>
        <li>
          <b class="">论坛</b>
          <span>核实用户身份信息是否属实，防范虚拟恶意注册</span>
        </li>
        <li>
          <b>APP</b>
          <span>核实用户身份信息是否属实，防范虚拟恶意注册</span>
        </li>
      </ul>
      <ul class="listUl" v-show="currentTab ===4 || currentTab ===6 || currentTab ===7|| currentTab ===8|| currentTab ===9|| currentTab ===10|| currentTab ===11|| currentTab ===12">
        <li>
          <b class="">信贷机构</b>
          <span>核实用户身份信息是否属实，优化金融等高风险行业复杂的身份验证流程。</span>
        </li>
      </ul>
      </ul>
      <ul class="listUl" v-show="currentTab === 5">
        <li>
          <b class="">电商平台</b>
          <span>核实用户身份信息是否属实，防范虚拟恶意注册</span>
        </li>
        <li>
          <b>APP</b>
          <span>核实用户身份信息是否属实，防范虚拟恶意注册</span>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      currentTab: 0,
      currentBanner: '../../../static/img/productNav_1.png',
      currentImg: '../../../static/img/product_1.png',
      tabsList: [{
        name: '学信网数据',
        hightUrl: '../../../static/img/productHight_1.png',
        url: '../../../static/img/productIcon_1.svg'
      }, {
        name: '车辆维保核查',
        hightUrl: '../../../static/img/productHight_2.png',
        url: '../../../static/img/productIcon_2.svg'
      }, {
        name: '实名认证',
        hightUrl: '../../../static/img/productHight_3.png',
        url: '../../../static/img/productIcon_3.svg'
      }, {
        name: '职业资格证书',
        hightUrl: '../../../static/img/productHight_4.png',
        url: '../../../static/img/productIcon_4.svg'
      }, {
        name: '房产认证',
        hightUrl: '../../../static/img/productHight_5.png',
        url: '../../../static/img/productIcon_5.svg'
      }, {
        name: '人脸识别',
        hightUrl: '../../../static/img/productHight_6.png',
        url: '../../../static/img/productIcon_6.svg'
      }, {
        name: '运营商数据',
        hightUrl: '../../../static/img/productHight_7.png',
        url: '../../../static/img/productIcon_7.svg'
      }, {
        name: '企业司法核查',
        hightUrl: '../../../static/img/productHight_8.png',
        url: '../../../static/img/productIcon_8.svg'
      }, {
        name: '京东数据',
        hightUrl: '../../../static/img/productHight_9.png',
        url: '../../../static/img/productIcon_9.svg'
      }, {
        name: '支付宝数据',
        hightUrl: '../../../static/img/productHight_10.png',
        url: '../../../static/img/productIcon_10.svg'
      }, {
        name: '工作认证',
        hightUrl: '../../../static/img/productHight_11.png',
        url: '../../../static/img/productIcon_11.svg'
      }, {
        name: '多贷行为',
        hightUrl: '../../../static/img/productHight_12.png',
        url: '../../../static/img/productIcon_12.svg'
      }]

    }
  },
  methods: {
    checkTab: function (index) {
      let url = '../../../static/img/'
      this.currentTab = index
      this.currentBanner = url + 'productNav_' + (index + 1) / 1 + '.png'
      this.currentImg = url + 'product_' + (index + 1) / 1 + '.png'
    }
  },
  computed: {
  }
}
</script>
