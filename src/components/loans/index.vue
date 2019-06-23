<style lang="stylus" scoped>
.checkSize
  padding:0 20px;
.loansWrap
  font-size 14px;
  .banner
    height:300px;
    background:url(../../../static/img/loanNav_bg.png) no-repeat;
    background-size:100% 320px;
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
    .hotCardItem
      .hotCardList
        .hotCard
          position relative
          &:hover{
            box-shadow: -4px 4px 7px 0px #c5c8ce;
          }
          .hotCardTxt
            width:100%;
            height 40px;
            position absolute;
            bottom:0;
            background: rgba(153, 153, 153,.7);
            border-radius:6px;
        .hotCardBtn
          margin-top 15px;
    .swiper-button-prev, .swiper-button-next
        background: rgba(0,0,0,0.2)
        color: #fff
        font-size: 27px;
        height:35px;
        line-height 35px;
        &:hover
          background: rgba(0,0,0,0.4);
    .swiper-button-prev
      left:0
    .swiper-button-next
      right: 0
  .hotBankList
    background:#cdcdcd33;
    padding: 15px;
    .bankBox
      display flex;
      justify-content space-around;
      padding:20px 10px;
      .bankItem
        display flex;
        flex-direction:column
        align-items center;
        color #666;
        img
         width 45px;
         margin-bottom 10px

</style>

<template>
    <div class="appwrap loansWrap">
      <div class="banner">
      </div>
      <div class="itemList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">本周热门卡</b></p>
          <p><b class="englishTxt font_12">HOT CARD OF THE WEEK</b></p>
        </div>
        <div class="itemContent hotCardItem txtC">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(bankcard,index) in bankcardList" :key="index">
              <div class="hotCardList">
                <div class="hotCard pointer">
                  <a class="" :href="bankcard.url" target="_blank">
                    <img :src="bankcard.img" alt="中银都市缤纷卡" width="100%" height="102">
                  </a>
                  <div class="hotCardTxt font_12 white">
                    <b>{{bankcard.name}}</b>
                    <span>{{bankcard.des}}</span>
                  </div>
                </div>
                <div class="hotCardBtn">
                  <a :href="bankcard.url" target="_blank">
                    <Button type="primary">立即申请</Button>
                  </a>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"><Icon type="ios-arrow-back" /></div>
            <div class="swiper-button-next" slot="button-next"><Icon type="ios-arrow-forward" /></div>
          </swiper>
        </div>
      </div>
      <div class="itemList hotBankList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">热门银行</b></p>
          <p>
            <b class="englishTxt font_12">HOT BANK</b>
          </p>
        </div>
        <div class="itemContent bankBox white_bg">
          <span  v-for="(bank,index) in bankList" :key="index">
            <a class="bankItem" :href="bank.url" target="_blank">
              <img :src="bank.img" alt="">
              <b>{{bank.name}}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BusinessDiversion',
  data () {
    return {
      bankcardList: [
        { name: '招商Young卡', des: '每月赠送积分最高2000分', url: 'http://xyk.cmbchina.com/Latte/card/cardList?WT.mc_id=N3700MM2061I303700YL', img: '//img.51credit.com/credit/upload/Image/zltp/2017/05/10//1_273256.jpg' },
        { name: '交通银行标准信用卡', des: '超市、加油全年返5%', url: 'https://creditcardapp.bankcomm.com/applynew/front/apply/track/record.html?trackCode=A0906143771179&cardId=17', img: '//img.51credit.com/credit/upload/Image/zltp/2017/05/24//1_273929.jpg' },
        { name: '华夏银行白金卡', des: '全国指定机场1元停车', url: 'https://creditapply.hxb.com.cn/sanfang/cardChoice.html?requestId=148&requestPage=933', img: '//img.51credit.com/credit/upload/Image/zltp/2017/04/25/1_268690.jpg' },
        { name: '浦发青春卡', des: '网购积分抵现金', url: 'https://ecentre.spdbccc.com.cn/creditcard/indexActivity.htm?data=P1650718&itemcode=lcsh170463', img: '//img.51credit.com/credit/upload/Image/zltp/2016/09/12//1_273549.jpg' },
        { name: '光大福ic卡金卡', des: '新户首刷送50元京东E卡', url: '//kaku.51credit.com/home/BankUrl.jsp?log=ceb@fu@JK@4067@1001@1@newcc@cc.51credit.com', img: '//img.51credit.com/credit/upload/Image/zltp/xykky/gd/2016/11/25//1_266715.jpg' },
        // {name: '民生女人花卡', des: '享周四双倍积分', url: 'https://creditcard.cmbc.com.cn/wsv2/step?cardId=6&encryptStr=JuDBVHncx3LMSHyquZTtAiHMB2A20ochDqWU2oMpQ72NL9Jq2HthJd49JwzvEV50G7W6EXPvs2f7jZ3tHq18rTA4Lzgqkyo2eKE%2FiQUTPlrBS2jyQKWrmNfwrIJ%2FU2UiG7%2FDkAo3bl6ZG27hh1Ay3u9Bx%2BpRIx24OVWtQv8OMAS2fwi09JzYjZ1yHl9ZxKEX5CBnKJRu3Dh5ZU2QdhRAOBLRxT8QMmfh6GdmwS9ZrEVfPqHlzRs3C7MCuwctJnFTzNRfDLpCZcw4i2zEekTt%2FjaQP%2Bca9oPiz3zSJHZN0zHdagwfz8FHVW3mqu9yAiHE9eTebuIPVQPyX52DEVLOiEx5mox1Q5zqx974OLkjAzYgNsrNzpeNClXZL0eoiVTmN1Zs0uOmmOQG7ki9YBxDMF78AtPPIbrGiKJObXlNegic74EpW6plYHAE6LWovEw1sOGPSasT7I7Zn6SdZiIY4T17cbTmWb4q8AgoiU%2FV%2F845FIfihwwR4U6BmBZlm11f&source=YX-STYL8&logTag=1c71bcaad78e4269b3de414e3e8ef6f4', img: '//img.51credit.com/credit/upload/Image/zltp/xykky/ms/2016/11/16//1_266033.jpg'},
        // {name: '上海银行标准信用卡', des: '永久积分，惊喜回馈', url: 'https://mbank.bankofshanghai.com/pweixin/static/index.html?_TransactionId=CreditCardApply&_CardType=0300001781&YLLink=720220', img: '//img.51credit.com/credit/upload/Image/zltp/xykky/sh/2017/02/28/1_265846.jpg'},
        { name: '兴业淘宝网联名信用卡', des: '快捷支付网购直通车', url: '//kaku.51credit.com/home/BankUrl.jsp?log=XY@XYTB@pj@3809@Coin@web@newcc@cc.51credit.com', img: '//img.51credit.com/credit/upload/Image/zltp/2017/04/26//1_271034.jpg' },
        { name: '中信银联标准IC信', des: '9分享兑大杯手调星巴克', url: 'https://creditcard.ecitic.com/citiccard/cardshop-web/apply/toPageIndex.do?pid=CS0111&sid=WAKWB6', img: '//img.51credit.com/credit/upload/Image/zltp/2017/05/05//1_269352.jpg' },
        { name: '平安标准卡', des: '挂失前72小时失卡保障', url: '//kaku.51credit.com/home/BankUrl.jsp?log=pingan@biaozhun@JK@3918@1a2a3a4a5a8a9a10a11a12a13@newcc@cc.51credit.com', img: '//img.51credit.com/credit/upload/Image/zltp/2017/04/27//1_265784.jpg' },
        { name: '广发真情卡', des: '自选商户类型三倍积分', url: '//kaku.51credit.com/home/BankUrl.jsp?log=GDFZ@GFZQSBMC@PJ@207@1017@newcc@cc.51credit.com', img: '//img.51credit.com/credit/upload/Image/zltp/xykky/gf/2014/08/26//1_245873.jpg' },
        { name: '汇丰生活信用卡', des: '五星酒店自助买一赠一', url: '//kaku.51credit.com/home/BankUrl.jsp?log=hsbcbank@hfsh@BJK@4180@1162@newcc@cc.51credit.com', img: '//img.51credit.com/credit/upload/Image/zltp/2017/03/09//1_271213.jpg' }
      ],
      bankList: [
        { name: '中信银行', url: '//banks.51credit.com/citic/', img: '//static.51credit.com/wap/images/zxyh.jpg' },
        { name: '光大银行', url: '//banks.51credit.com/ceb/', img: '//static.51credit.com/wap/images/gdyh20170717.jpg' },
        { name: '交通银行', url: '//banks.51credit.com/bocomm/', img: '//static.51credit.com/wap/images/jtyh.jpg' },
        { name: '民生银行', url: '//banks.51credit.com/cmbc/', img: '//static.51credit.com/images/minsheng.jpg' },
        { name: '浦发银行', url: '//banks.51credit.com/spd001/', img: '//static.51credit.com/wap/images/pufa.jpg' },
        { name: '广发银行', url: '//banks.51credit.com/cgb/', img: '//static.51credit.com/wap/images/gfyh.jpg' },
        { name: '平安银行', url: '//banks.51credit.com/pingan/', img: '//static.51credit.com/wap/images/payh20170717.jpg' },
        { name: '兴业银行', url: '//banks.51credit.com/cib/', img: '//static.51credit.com/wap/images/xyyh.jpg' }
      ],
      swiperOption: {
        speed: 1500,
        autoplay: true,
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
