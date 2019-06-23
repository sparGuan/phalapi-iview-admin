<style scoped lang='less'>
.creditWrap {
  .ivu-layout-header {
    padding: 0;
  }
  .ivu-menu-light {
    background: rgb(77, 145, 253);
    height: 64px;
    padding: 20px;
  }
  .layout {
    /* border: 1px solid #d7dde4; */
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .ivu-menu {
    height: 100%;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ivu-layout-sider {
    width: 240px !important;
    flex: 0 0 240px !important;
    min-width: 240px !important;
  }
  .ivu-menu-item,
  .layout-logo {
    color: #fff;
  }
  .layout-logo {
    font-size: 20px;
    color: #fff;
  }
}
</style>
<template>
  <div class="creditWrap">
    <div class="appwrap">
      <div class="layout">
        <Layout>
          <Header>
            <Menu mode="horizontal" class="menu">
              <div
                class="pointer goHome"
                @click.prevent="$goto({ name: 'home' })"
              >
                <Icon type="ios-arrow-back" size="28" style="color:#fff" />
              </div>
              <div class="layout-logo">民间小额征信</div>
            </Menu>
          </Header>
          <Layout :style="{ padding: '10px 0' }">
            <Sider hide-trigger :style="{ background: '#fff' }">
              <Menu
                theme="dark"
                :open-names="['creditHome']"
                accordion
                width="240px"
                @on-select="goRouter"
              >
                <MenuItem name="creditHome">
                  <Icon type="ios-navigate"></Icon>
                  系统首页
                </MenuItem>
                <Submenu name="creditHome">
                  <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    会员信息共享服务
                  </template>
                  <MenuItem name="creditInformation"
                    >信贷交易信息共享查询</MenuItem
                  >
                  <!-- <MenuItem name="riskMonitoring">风险监控</MenuItem> -->
                  <MenuItem name="informationCollection"
                    >信息补录信息查询</MenuItem
                  >
                  <!-- <MenuItem name="historicalReport">历史报告查询</MenuItem> -->
                </Submenu>
                <!-- <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                服务中心
                            </template>
                            <MenuItem name="systemNotice">系统公告</MenuItem>
                            <MenuItem name="limitModify"> 权限变更</MenuItem>
                            <MenuItem name="psdReset">密码重置</MenuItem>
                            <MenuItem name="awardPointSystem"> 积分管理</MenuItem>
                        </Submenu> -->
                <MenuItem name="onlineRefer">
                  <Icon type="ios-navigate"></Icon>
                  在线咨询
                </MenuItem>
              </Menu>
            </Sider>
            <Layout
              style="padding-left:10px;overflow-y: auto;max-height: calc(100vh - 100px) !important;"
            >
              <Content
                :style="{
                  padding: '20px',
                  minHeight: '280px',
                  background: '#fff'
                }"
              >
                <router-view />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goRouter (name) {
      this.$router.push(name)
    }
  }
}

</script>
