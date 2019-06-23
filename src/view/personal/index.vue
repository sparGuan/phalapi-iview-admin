<style lang="less" scoped>
.personalwrap {
  padding-top: 15px;
  .hasPadding {
    padding: 15px;
  }
  .sider {
    min-height: 660px;
  }
}

.ivu-collapse-header {
  padding-left: 10px;
}
.left-menu-item {
}
</style>

<template>
  <div class="personalwrap">
    <div class="appwrap"></div>
  </div>
</template>

<script>
export default {
  name: 'Personalwrap',
  data () {
    return {
      isRouterAlive: true,
      actname: '',
      menuList: [{
        name: '基本信息',
        router: 'baseInfo',
        icon: 'fa-info-circle',
        auth: [1, 2, 3]
      },
      {
        name: '风控数据',
        router: 'creditManage',
        icon: 'fa-tasks',
        auth: [2, 3]
      },
      {
        name: '民间查询',
        router: 'folkQuery',
        icon: 'fa-search',
        auth: [2, 3]
      },
      {
        name: '财务管理',
        router: 'financialManage',
        icon: 'fa-jpy',
        auth: [2, 3]
      },
      {
        name: '黑名单',
        router: 'blackList',
        icon: 'fa-list-ul',
        isLock: true,
        auth: [2, 3]
      },
      {
        name: '电子合同',
        router: 'eContract',
        icon: 'fa-file-text',
        isLock: true,
        auth: [1, 2, 3]
      },
      {
        name: '网络仲裁',
        router: 'arbitration',
        icon: 'fa fa-legal',
        isLock: true,
        auth: [2, 3]
      },
      {
        name: '赏金任务',
        router: 'bountyMission',
        icon: 'fa-usd',
        isLock: true,
        auth: [2, 3]
      },
      {
        name: '合作甩单',
        router: 'cooperationList',
        icon: 'fa-user',
        isLock: true,
        auth: [2, 3]
      },
      {
        name: '社群交流',
        router: 'communityComment',
        icon: 'fa-users',
        isLock: true,
        auth: [2, 3]
      },
      {
        name: '民间征信',
        router: 'creditServer',
        icon: 'fa-share-square-o',
        auth: [3]
      }
      ]
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  computed: {
    loginStatus () {
      return this.$store.state.Status
    },
    classObject () {
      if (this.$route.name != 'creditManage') {
        return { hasPadding: true }
      }
    }
  },
  components: {},
  beforeMount () {
    this.actname = this.$route.name
    if (this.loginStatus) {
      this.getUserInfo()
    }
  },
  methods: {
    selectMenu (name) {
      this.$goto({
        name: name
      })
      console.log(name)
    },
    getUserInfo () {
      this.$ajax('get', 'user/center/index').then(data => {
        this.$store.commit('changeUserInfo', data.data)
      })
    },
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
// 养老险：277
// 医疗险：311
// 生育险：10
// 失业险：21
// 工伤：3

// 五险：622
// 公积金：213

// 五险一金：622 + 213 = 835
// 工资：21天10500(工作日20+加班1)
// 郝微微11月工资总计：10500 + 835 = 11335元
</script>
