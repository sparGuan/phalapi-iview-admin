import Main from '@/components/main'
// import parentView from '@/components/parent-view'
// import config from '@/config'
const baseInfo = () => import(/* webpackChunkName: "personal" */ '@/view/personal/baseInfo')
const folkQuery = () => import(/* webpackChunkName: "personal" */ '@/view/personal/folkQuery')
const creditManage = () => import(/* webpackChunkName: "personal" */ '@/view/personal/creditManage')
const financialManage = () => import(/* webpackChunkName: "personal" */ '@/view/personal/financialManage')
const blackList = () => import(/* webpackChunkName: "personal" */ '@/view/personal/blackList')
const eContract = () => import(/* webpackChunkName: "personal" */ '@/view/personal/eContract')
const arbitration = () => import(/* webpackChunkName: "personal" */ '@/view/personal/arbitration')
const bountyMission = () => import(/* webpackCcooperationListhunkName: "personal" */ '@/view/personal/bountyMission')
const cooperationList = () => import(/* webpackChunkName: "personal" */ '@/view/personal/cooperationList')
const communityComment = () => import(/* webpackChunkName: "personal" */ '@/view/personal/communityComment')
const payOrder = () => import('@/view/personal/payOrder') // 在线咨询
// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const customList = () => import(/* webpackChunkName: "customList" */ '@/view/customList')
// 安融信贷
const creditServer = () => import('@/view/creditServer') // 信贷征信
const creditHome = () => import('@/view/creditServer/creditHome') // 信贷征信平台home
const creditInformation = () => import('@/view/creditServer/creditInformation') // 信贷交易信息共享查询
const riskMonitoring = () => import('@/view/creditServer/riskMonitoring') // 风险监控
const informationCollection = () => import('@/view/creditServer/informationCollection') // 信息补录查询
const historicalReport = () => import('@/view/creditServer/historicalReport') // 历史报告查询

const systemNotice = () => import('@/view/creditServer/systemNotice') // 系统公告
const limitModify = () => import('@/view/creditServer/limitModify') // 权限变更
const psdReset = () => import('@/view/creditServer/psdReset') // 密码重置
const awardPointSystem = () => import(/* webpackChunkName : "creditServer" */ '@/view/creditServer/awardPointSystem') // 积分管理

const onlineRefer = () => import(/* webpackChunkName : "creditServer" */ '@/view/creditServer/onlineRefer') // 在线咨询
const cityPage = () => import('@/view/cityPage') // 城市代码页面查询

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/base',
    name: 'base',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'baseinfo',
        name: 'baseInfo',
        component: baseInfo,
        meta: {
          requireAuth: true,
          icon: 'common fa fa-info-circle',
          title: '基本信息'
        }
      }
    ]
  },
  {
    path: '/credit',
    name: 'credit',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'creditmanage',
        name: 'creditManage',
        component: creditManage,
        meta: {
          requireAuth: true,
          icon: 'common fa fa-tasks',
          title: '风控数据'
        }
      }
    ]
  },
  {
    path: '/folk',
    name: 'folk',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'folkquery',
        name: 'folkQuery',
        component: folkQuery,
        meta: {
          requireAuth: true,
          icon: 'common fa fa-search',
          title: '民间查询'
        }
      }
    ]
  },
  {
    path: '/creditserver',
    name: 'creditServer',
    component: creditServer,
    meta: {
      requireAuth: true,
      icon: 'logo-foursquare',
      title: '民间征信'
    },
    redirect: '/creditserver/credithome',
    children: [
      {
        path: 'credithome',
        name: 'creditHome',
        component: creditHome,
        meta: {
          hideInMenu: true,
          requireAuth: true
        }
      },
      {
        path: 'creditinformation',
        name: 'creditInformation',
        component: creditInformation,
        meta: {
          hideInMenu: true,
          requireAuth: true
        }
      },
      {
        path: 'riskmonitoring',
        name: 'riskMonitoring',
        component: riskMonitoring,
        meta: {
          hideInMenu: true,
          requireAuth: true
        }
      },
      {
        path: 'informationcollection',
        name: 'informationCollection',
        component: informationCollection,
        meta: {
          hideInMenu: true,
          requireAuth: true
        }
      },
      {
        path: 'historicalreport',
        name: 'historicalReport',
        component: historicalReport,
        meta: {
          hideInMenu: true,
          requireAuth: true
        }
      },
      {
        path: 'systemnotice',
        name: 'systemNotice',
        component: systemNotice,
        meta: {
          hideInMenu: true,
          requireAuth: true
        }
      },
      {
        path: 'limitmodify',
        name: 'limitModify',
        component: limitModify,
        meta: {
          hideInMenu: true,
          requireAuth: true
        }
      },
      {
        path: 'psdreset',
        name: 'psdReset',
        component: psdReset,
        meta: {
          hideInMenu: true,
          requireAuth: true
        }
      },
      {
        path: 'awardpointsystem',
        name: 'awardPointSystem',
        component: awardPointSystem,
        meta: {
          hideInMenu: true,
          requireAuth: true
        }
      },
      {
        path: 'onlinerefer',
        name: 'onlineRefer',
        component: onlineRefer,
        meta: {
          hideInMenu: true,
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/financial',
    name: 'financial',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'financialmanage',
        name: 'financialManage',
        component: financialManage,
        meta: {
          requireAuth: true,
          icon: 'common fa fa-jpy',
          title: '财务管理'
        }
      }
    ]
  },
  {
    path: '/black',
    name: 'black',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'blacklist',
        name: 'blacklist',
        component: blackList,
        meta: {
          requireAuth: true,
          isLock: true,
          icon: 'common fa fa-list-ul',
          title: '黑名单'
        }
      }
    ]
  },
  {
    path: '/econt',
    name: 'eCont',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'econtract',
        name: 'eContract',
        component: eContract,
        meta: {
          requireAuth: true,
          icon: 'common fa fa-file-text',
          title: '电子合同',
          isLock: true
        }
      }
    ]
  },
  {
    path: '/arbitr',
    name: 'arbitr',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'arbitration',
        name: 'arbitration',
        component: arbitration,
        meta: {
          requireAuth: true,
          icon: 'common fa fa-legal',
          title: '网络仲裁',
          isLock: true
        }
      }
    ]
  },
  {
    path: '/bount',
    name: 'bounty',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'bountymission',
        name: 'bountyMission',
        component: bountyMission,
        meta: {
          requireAuth: true,
          icon: 'common fa fa-usd',
          title: '赏金任务',
          isLock: true
        }
      }
    ]
  },
  {
    path: '/cooperation',
    name: 'cooperation',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'cooperationlist',
        name: 'cooperationList',
        component: cooperationList,
        meta: {
          requireAuth: true,
          icon: 'common fa fa-user',
          title: '合作甩单',
          isLock: true
        }
      }
    ]
  },
  {
    path: '/community',
    name: 'community',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'communitycomment',
        name: 'communityComment',
        component: communityComment,
        meta: {
          requireAuth: true,
          icon: 'common fa fa-users',
          title: '社群交流',
          isLock: true
        }
      }
    ]
  },
  {
    path: '/city-page',
    name: 'cityPage',
    component: cityPage,
    meta: {
      hideInMenu: true,
      requireAuth: true,
      icon: 'logo-usd',
      title: '地区列表'
    }
  },
  {
    path: 'payorder',
    name: 'payOrder',
    component: payOrder,
    meta: {
      hideInMenu: true,
      requireAuth: true,
      icon: 'logo-usd',
      title: '支付'
    }
  },
  {
    path: 'customList',
    name: 'customList',
    component: customList,
    meta: {
      hideInMenu: true,
      requireAuth: true,
      icon: 'logo-usd',
      title: '客户列表'
    }
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true,
      icon: 'logo-buffer',
      title: '组件'
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true,
      icon: 'logo-buffer',
      title: '组件'
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true,
      icon: 'logo-buffer',
      title: '组件'
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
