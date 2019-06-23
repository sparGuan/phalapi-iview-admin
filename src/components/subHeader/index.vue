<style lang="less" scoped>
  .headerwrap {
  height: 220px;
  background: #fff;
  padding: 0;
  .box {
    height: 100%;
    width: 100%;
    background: url(../../../static/img/personNav_bg.png) no-repeat;
    background-size: 100%;
    .nav {
      background: rgba(6, 168, 245, .8);
      .navBox{
        width: 1200px;
        margin: 0 auto;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .goHome{
        padding: 0 10px;
        }
      }

    }
    .searchBox {
      margin-top: 65px;
      margin-bottom: 25px;
      display: flex;
      justify-content: center;
      position: relative;
      input {
        width: 350px;
        height: 30px;
        background: rgba(248, 248, 249, .3);
        font-size: 16px;
        border-radius: 26px;
        padding: 20px 40px;
        color: #fff;
      }
      input::-webkit-input-placeholder{
        color: #fff
      }
      .searchIcon{
        position:absolute;
        right: 40%;
        padding: 10px;
      }
    }
    .tagBox{
      display:flex;
      justify-content:center;
      align-items: center;
      li{
        color: #fff;
        height: 25px;
        line-height: 25px;
        padding: 0 10px;
        margin-right: 20px;
        border-radius: 2px;
        background: rgba(35, 24, 21, .5);
        font-size: 16px;
      }
    }
  }
}
</style>
<template>
  <Header class="headerwrap">
    <div class="box">
      <div class="nav">
        <div class="navBox white">
          <span class="pointer goHome" @click.prevent="$goto({name: 'home'})">
            <Icon type="ios-arrow-back" size="28" style="color:#fff" />
          </span>
          <span>
            <Icon type="md-person" size="30" />
            <b>{{userInfo.name}}</b>&nbsp;
            <b class="line">|</b>&nbsp;
            <Poptip confirm title="确定要退出吗？" placement="bottom-end" @on-ok="logout" style="color:#000;fontSize:12px" class="pointer">
              <b class=" font_14">退出</b>
            </Poptip>
          </span>
        </div>
      </div>
      <div class="searchBox">
        <input placeholder="请输入关键字查询" class="txtC">
        <Icon @click="startSearch" type="ios-search-outline" size="24" class="searchIcon pointer" />
      </div>
      <ul class="tagBox pointer">
        <li>银行卡三要素</li>
        <li>京东报告</li>
        <li>淘宝查询</li>
      </ul>
    </div>
  </Header>
</template>

<script>
import toTop from '@/common/lib/toTop'

export default {
  computed: {
    loginStatus () {
      return this.$store.state.loginStatus
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    headermenuFn (name) {
      switch (name) {
        case 'index':
          toTop()
          break
        case 'folkQuery':
          toTop('folkQuery')
          break
        case 'businessDiversion':
          toTop('businessDiversion')
          break
        case 'news':
          toTop('news')
          break
        case 'aboutUs':
          toTop('aboutUs')
          break
      }
    },
    logout () {
      this.$ajax('post', 'logout').then(data => {
        this.$store.commit('clearAllData')
        this.$goto({
          name: 'home'
        })
      })
    },
    startSearch () {
      this.$Message.warning('暂未开放！')
    }
  }
}

</script>
