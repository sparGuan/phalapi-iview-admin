<style lang="less" scoped>
// 小额信贷征信服务平台——系统首页
.creditHomeWrap {
  span {
    display: inline-block;
  }

  // 信用信息共享服务
  .infoSharing {
    .infoSharing_header {
      display: flex;
      justify-content: space-between;
      height: 40px;
      line-height: 40px;
    }
    .flowIcon {
      font-size: 70px;
    }
    .infoTitle {
      width: 300px;
      padding-left: 30px;
      border-top-left-radius: 7px;
      background: linear-gradient(
          -135deg,
          transparent 26px,
          rgb(77, 145, 253) 0
        )
        top right;
    }
    .instructions {
      // color: rgb(77, 145, 253);
      border-bottom: 1px solid rgb(123, 170, 245);
      text-align: right;
    }
    .flowList {
      border: 1px solid lightblue;
      margin: 25px 0;
      padding: 20px 0;
      ul {
        display: flex;
        justify-content: space-around;
      }
      .iconUl {
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          .iconSpan {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  //待办事项明细,平台数据统计
  .listTitle {
    padding-bottom: 7px;
    margin-bottom: 14px;
    border-bottom: 1px solid rgb(123, 170, 245);
  }
  .todoTable {
    margin-bottom: 25px;
  }

  //
}
</style>
<template>
  <div class="creditHomeWrap">
    <!--信用信息共享服务  -->
    <div class="infoSharing">
      <div class="infoSharing_header">
        <span class="infoTitle white">信用信息共享服务</span>
        <span class="instructions primary">使用说明</span>
      </div>
      <div class="flowList">
        <ul class="iconUl">
          <li
            v-for="(item, index) in iconList"
            @click="goDetail(index)"
            class="pointer"
          >
            <span class="iconSpan">
              <Icon :type="item.icon" class="flowIcon" />
            </span>
            <span>{{ item.txt }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 待办事项明细 -->
    <div class="todoTable">
      <p class="listTitle primary">待办事项管理</p>
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
    <!-- 平台数据统计 -->
    <div>
      <p class="listTitle primary">平台数据统计</p>
      <Table border :columns="columns2" :data="data2"></Table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'creditHome',
  data () {
    return {
      iconList: [{
        icon: 'ios-stopwatch',
        txt: '贷款申请'
      }, {
        icon: 'ios-aperture',
        txt: '贷款审批'
      }, {
        icon: 'logo-usd',
        txt: '债权管理'
      }, {
        icon: 'md-list-box',
        txt: '逾期管理'
      }, {
        icon: 'ios-construct',
        txt: '不良信息'
      }],
      // 待办事项明细table
      columns1: [
        {
          title: '待办事项',
          key: 'todoList',
          className: 'demo-table-info-column',
          align: 'center'
        },
        {
          title: '贷款审批',
          key: 'approval',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'a',
                {
                  on: {
                    click: () => {
                      if (!params.index) {
                        console.log('1')
                      } else {
                        console.log('2')
                      }
                    }
                  }
                },
                params.row.approval
              )
            ])
          }
        },
        {
          title: '债券管理',
          key: 'debtManage',
          align: 'center'
        },
        {
          title: '逾期管理',
          key: 'overdueManage',
          className: 'demo-table-info-column',
          align: 'center'
        },
        {
          title: '未读监控信息',
          key: 'unreadMsg',
          align: 'center'
        }
      ],
      data1: [
        {
          todoList: '数量/个',
          approval: 2,
          debtManage: 3,
          overdueManage: 4,
          unreadMsg: 5
        },
        {
          todoList: '距离被限制使用时间/天',
          approval: 3,
          debtManage: 3,
          overdueManage: 4,
          unreadMsg: 5
        }
      ],
      // 平台数据统计table
      columns2: [
        {
          title: '会员机构总量',
          key: 'vipTotal',
          align: 'center'
        },
        {
          title: '上月共享量/万',
          key: 'sharingNum',
          align: 'center'
        },
        {
          title: '上月查得率',
          key: 'checkRatio',
          align: 'center'
        },
        {
          title: '历史平均查得率',
          key: 'historyCheckRatio',
          align: 'center'
        }
      ],
      data2: [
        {
          vipTotal: '数量/个',
          sharingNum: 2,
          checkRatio: 3,
          historyCheckRatio: 4
        }
      ]
    }
  },
  methods: {
    loanApprovalNum () { },
    loanApprovalDate () { },
    goDetail (index) {
      this.$router.push({ name: 'creditInformation', params: { tabIndex: index } })
    }
  }
}
</script>
