import { service } from '@/common/lib/ajax'
const getUserInfo = async () => {
  const res = await service.get('user/center/index')
  return res
}
export default {
  state: {
    userInfo: {
      name: '', // 名称
      company_name: '', // 企业名称
      position_name: '', // 职务
      phone: '', // 电话
      confirm_status: '', // 状态
      last_login_at: '', // 上次登录
      amount: 0, // 余额
      id: '',
      role_id: '',
      email: '',
      avatar: ''
    },
    access: '',
    unreadCount: 0,
    hasGetInfo: false,
    messageUnreadList: [],
    messageReadedList: [],
    messageTrashList: [],
    messageContentStore: {},
    loginStatus: false,
    loginModalStatus: {
      display: false,
      type: 'login'
    }
  },
  mutations: {
    clearAllData (state) {
      state.userInfo = {}
      state.loginStatus = false
      state.loginModalStatus = {
        display: false,
        type: 'login'
      }
    },
    changeUserInfo (state, obj) {
      state.userInfo = { ...state.userInfo, ...obj }
    },
    // 控制登录框
    changeLoginModalStatus (state, obj) {
      state.loginModalStatus = { ...state.loginModalStatus, ...obj }
    },
    changeLoginStatus (state, bol) {
      state.loginStatus = bol
    },
    setAvator (state, avatorPath) {
      state.userInfo.avatar = avatorPath
    },
    setid (state, id) {
      state.userInfo.id = id
    },
    setname (state, name) {
      state.userInfo.name = name
    },
    setAccess (state, access) {
      state.access = access
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    },
    setMessageCount (state, count) {
      state.unreadCount = count
    },
    setMessageUnreadList (state, list) {
      state.messageUnreadList = list
    },
    setMessageReadedList (state, list) {
      state.messageReadedList = list
    },
    setMessageTrashList (state, list) {
      state.messageTrashList = list
    },
    updateMessageContentStore (state, { msg_id, content }) {
      state.messageContentStore[msg_id] = content
    },
    moveMsg (state, { from, to, msg_id }) {
      const index = state[from].findIndex(_ => _.msg_id === msg_id)
      const msgItem = state[from].splice(index, 1)[0]
      msgItem.loading = false
      state[to].unshift(msgItem)
    }
  },
  getters: {
    messageUnreadCount: state => state.messageUnreadList.length,
    messageReadedCount: state => state.messageReadedList.length,
    messageTrashCount: state => state.messageTrashList.length
  },
  actions: {
    // 获取用户相关信息
    getMineInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        service
          .get('user/get/info/mine')
          .then(response => {
            let data = response.data
            if (data.code === $conf.RETCODE_OK) {
              commit('changeUserInfo', data.data)
              commit('changeLoginStatus', true)
              resolve(data)
            } else {
              reject(new Error('未登录！'))
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // // 登录
    // handleLogin ({ commit }, { name, password }) {
    //   name = name.trim()
    //   return new Promise((resolve, reject) => {
    //   })
    // },
    // // 退出登录
    // handleLogOut ({ state, commit }) {
    //   return new Promise((resolve, reject) => {
    //     // logout(state.token)
    //     //   .then(() => {
    //     //     commit('setToken', '')
    //     //     commit('setAccess', [])
    //     //     resolve()
    //     //   })
    //     //   .catch(err => {
    //     //     reject(err)
    //     //   })
    //     // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
    //     // commit('setToken', '')
    //     // commit('setAccess', [])
    //     // resolve()
    //   })
    // },
    // // 获取用户相关信息
    getUserInfo ({ commit }) {
      return new Promise(async (resolve, reject) => {
        try {
          const res = await getUserInfo()
          commit('changeUserInfo', res.data.data)
          resolve(res.data.data)
        } catch (error) {
          reject(error)
        }
      })
    },
    // 此方法用来获取未读消息条数，接口只返回数值，不返回消息列表
    getUnreadMessageCount ({ state, commit }) {
      // getUnreadCount().then(res => {
      //   const { data } = res
      //   commit('setMessageCount', data)
      // })
    },
    // 获取消息列表，其中包含未读、已读、回收站三个列表
    getMessageList ({ state, commit }) {
      return new Promise((resolve, reject) => {
        // getMessage()
        //   .then(res => {
        //     const { unread, readed, trash } = res.data
        //     commit('setMessageUnreadList', unread.sort((a, b) => new Date(b.create_time) - new Date(a.create_time)))
        //     commit(
        //       'setMessageReadedList',
        //       readed
        //         .map(_ => {
        //           _.loading = false
        //           return _
        //         })
        //         .sort((a, b) => new Date(b.create_time) - new Date(a.create_time))
        //     )
        //     commit(
        //       'setMessageTrashList',
        //       trash
        //         .map(_ => {
        //           _.loading = false
        //           return _
        //         })
        //         .sort((a, b) => new Date(b.create_time) - new Date(a.create_time))
        //     )
        //     resolve()
        //   })
        //   .catch(error => {
        //     reject(error)
        //   })
      })
    },
    // 根据当前点击的消息的id获取内容
    getContentByMsgId ({ state, commit }, { msg_id }) {
      return new Promise((resolve, reject) => {
        // let contentItem = state.messageContentStore[msg_id]
        // if (contentItem) {
        //   resolve(contentItem)
        // } else {
        //   getContentByMsgId(msg_id).then(res => {
        //     const content = res.data
        //     commit('updateMessageContentStore', { msg_id, content })
        //     resolve(content)
        //   })
        // }
      })
    },
    // 把一个未读消息标记为已读
    hasRead ({ state, commit }, { msg_id }) {
      return new Promise((resolve, reject) => {
        // hasRead(msg_id)
        //   .then(() => {
        //     commit('moveMsg', {
        //       from: 'messageUnreadList',
        //       to: 'messageReadedList',
        //       msg_id
        //     })
        //     commit('setMessageCount', state.unreadCount - 1)
        //     resolve()
        //   })
        //   .catch(error => {
        //     reject(error)
        //   })
      })
    },
    // 删除一个已读消息到回收站
    removeReaded ({ commit }, { msg_id }) {
      return new Promise((resolve, reject) => {
        // removeReaded(msg_id)
        //   .then(() => {
        //     commit('moveMsg', {
        //       from: 'messageReadedList',
        //       to: 'messageTrashList',
        //       msg_id
        //     })
        //     resolve()
        //   })
        //   .catch(error => {
        //     reject(error)
        //   })
      })
    },
    // 还原一个已删除消息到已读消息
    restoreTrash ({ commit }, { msg_id }) {
      return new Promise((resolve, reject) => {
        // restoreTrash(msg_id)
        //   .then(() => {
        //     commit('moveMsg', {
        //       from: 'messageTrashList',
        //       to: 'messageReadedList',
        //       msg_id
        //     })
        //     resolve()
        //   })
        //   .catch(error => {
        //     reject(error)
        //   })
      })
    }
  }
}
