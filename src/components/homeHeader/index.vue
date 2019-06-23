<style lang="stylus" scoped>
.ivu-menu-item .ivu-menu-item-active .ivu-menu-item-selected
  padding:0 10px;
.line
  margin: 0 10px
.headerwrap
  height: $headHeight
  padding: 0
  background-color: #fff
  border-bottom: 1px solid #dcdee2
  .headerbox
    height: $headHeight
    display: flex
    align-items: center
    justify-content: space-between
    .headerlogo
      .headerlogoa
        display: flex
        align-items: center
        .imgBox
          display: inline-block
          width: 150px
          overflow: hidden
          img
           height:45px
        .tit
          margin-left: 16px
          font-size: 16px
          color: #000
          padding-top:10px
    .headermenu
      display: flex
      align-items: center
      .headermenuul
        height: $headHeight
        .headernav
          height: 60px
          line-height: 80px
          li
            margin-right: 40px;
            padding: 0px 8px;
      .headermenulogreg
        line-height: initial
        margin-left: 30px
        padding-top:10px;
        // border-left: 1px solid #999
        // padding-left: 15px

    .headeruserinfo
      display: flex
      align-items: center
      flex: auto
      justify-content: flex-end
      .headinfo
        // padding-top:10px;
        .headImg
          width: 50px
          margin-right: 5px
          font-size: 50px
        .name
          color: #333

</style>

<template>
  <Header class="headerwrap">
    <div  class="appwrap headerbox">
      <div class="headerlogo">
        <a @click.prevent="$goto({name: 'home'})" href="/" class="headerlogoa">
          <span class="imgBox"><img src="../../../static/img/logo.png" alt=""></span>
          <span class="tit">大数据风控管理系统</span>
        </a>
      </div>
      <div class="headermenu">
        <Menu mode="horizontal" @on-select="headermenuFn" active-name="home" class="headermenuul">
          <div class="headernav">
            <MenuItem name="home">
            首页
            </MenuItem>
            <MenuItem name="product">
            产品中心
            </MenuItem>
            <MenuItem name="loans">
            贷款超市
            </MenuItem>
            <MenuItem name="aboutUs">
            关于我们
            </MenuItem>
          </div>
        </Menu>
        <div v-if="!loginStatus" class="headermenulogreg">
          <a @click="$store.commit('changeLoginModalStatus', {display: true, type: 'login'})" href="javascript:;">登录</a>
          <span class="line">|</span>
          <a style="color:#515a6e" @click="$store.commit('changeLoginModalStatus', {display: true, type: 'register'})" href="javascript:;">注册</a>
        </div>
        <div v-else class="headeruserinfo">
          <div class="headinfo">
            <a class="headImg" @click.prevent="$goto({name: 'personal'})" href="javascript:;">
              <Icon type="ios-contact" />
            </a>
            <a @click.prevent="$goto({name: 'personal'})" href="javascript:;" class="name">{{userInfo.name || '用户名'}}</a>
            <span class="line">|</span>
            <Poptip confirm title="确定要退出吗？" placement="bottom-end" @on-ok="logout">
              <a href="javascript:;">退出</a>
            </Poptip>

          </div>
          <div class="">
          </div>
        </div>
      </div>
    </div>
  </Header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
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
      this.$emit('currentView', name)
    },
    logout () {
      this.$ajax('post', 'logout').then(data => {
        this.$store.commit('clearAllData')
        this.$goto({ name: 'home' })
      })
    },
    startSearch () {
      this.$Message.warning('暂未开放！')
    }
  }
}
</script>
