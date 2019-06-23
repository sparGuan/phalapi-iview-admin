<style lang="stylus" scoped>
.econtractwrap {
  font-size: 14px;

  .changeinfoitem {
    padding: 15px 20px;
    background: #fff;
    margin-bottom: 10px;

    .title {
      b {
        font-weight: 600;
        border-left: 4px solid #009cff;
        padding-left: 6px;
      }
    }

    .itemContent {
      display: flex;
      padding: 15px 0;

      ul {
        border-right: 1px solid #ccc;

        &:first-child {
          margin-left: 105px;
          padding-right: 130px;
        }

        &:last-child {
          border-right: none;
          padding-left: 130px;
        }

        .itemTitle {
          font-weight: 600;
          margin-bottom: 10px;
        }

        li {
          margin-bottom: 5px;
        }

        .btns {
          margin-top: 10px;
          text-align: center;
          border-radius: 4px;
          height: 24px;
          line-height: 24px;
        }

        .addBtn {
          width: 90px;
        }

        .rechargeBtn {
          width: 70px;
        }
      }
    }

    .recordTable {
      margin-top: 20px;
    }

    .expireDate {
      margin-left: 75px;
    }

    .page-comp {
      width: 100%;
      padding: 15px 0;
      text-align: right;
    }
  }
}
</style>

<template>
  <div class="econtractwrap">
    <div class="changeinfoitem">
      <p class="title font_16">
        <b>我的财务信息</b>
      </p>
      <div class="itemContent">
        <ul>
          <li class="itemTitle font_16">我的充值</li>
          <li>充值总额：{{ `${totalRecharge || 0}元` }}</li>
          <li>我的余额：{{ $store.state.user.userInfo.amount }}</li>
          <li>我的级别：暂无</li>
          <li
            class="btns addBtn primary_bg white font_12 pointer"
            @click="$router.push({ name: 'payOrder' })"
          >
            立即充值
          </li>
        </ul>
        <ul>
          <li class="itemTitle font_16">我的银行卡</li>
          <li>开户行：888</li>
          <li>工商银行：888</li>
          <li>卡号：白金卡会员</li>
          <li class="btns rechargeBtn primary_bg white font_12 pointer">
            添加银行卡
          </li>
        </ul>
      </div>
      <!-- <p class="expireDate">我的到期时间：<b>2019-01-08 12:00</b></p> -->
    </div>
    <div class="changeinfoitem">
      <p class="title">
        <b>我的财务记录</b>
      </p>
      <div class="recordTable">
        <Tabs value="name1" :animated="false">
          <TabPane label="充值记录" name="name1">
            <Table
              border
              :columns="columns1"
              :data="data1"
              @on-sort-change="sortState"
            ></Table>
            <div class="page-comp">
              <Page
                :total="total"
                show-total
                show-sizer
                :page-size="pageSize"
                @on-change="
                  page => {
                    this.page = page;
                    this.getUserAccountInfos();
                  }
                "
                @on-page-size-change="
                  pageSize => {
                    this.pageSize = pageSize;
                    this.getUserAccountInfos();
                  }
                "
              />
            </div>
          </TabPane>
          <TabPane label="消费记录" name="name2">
            <Table
              border
              :columns="columns2"
              :data="data2"
              @on-sort-change="sortState"
            ></Table>
            <div class="page-comp">
              <Page
                :total="consumeTotal"
                show-total
                show-sizer
                :page-size="consumePageSize"
                @on-change="
                  page => {
                    this.consumePage = page;
                    this.getFinance();
                  }
                "
                @on-page-size-change="
                  pageSize => {
                    this.consumePageSize = pageSize;
                    this.getFinance();
                  }
                "
              />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinancialManage',
  data () {
    return {
      pageSize: 10,
      page: 1,
      total: 0,
      addPersonalForm: '',
      ord: 1,
      consumePage: 1,
      consumeTotal: 0,
      consumePageSize: 10,
      columns1: [
        {
          title: '充值单号',
          key: 'out_trade_no',
          align: 'center',
          width: 160
        },
        {
          title: '支付状态',
          align: 'center',
          sortable: true,
          render: (h, params) => {
            return h('span', {
              class: params.row.pay_status !== '未支付' ? 'success' : 'error'
            }, params.row.pay_status)
          }
        },
        {
          title: '充值时间',
          key: 'rechargeDate',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.pay_status !== '未支付' ? params.row.add_time : '')
          }
        },
        {
          title: '充值金额',
          key: 'price',
          align: 'center',
          render: (h, params) => {
            return h('span', `${params.row.price}元`)
          }
        },
        {
          title: '姓名',
          key: 'receive_name',
          align: 'center'
        },
        {
          title: '描述',
          key: 'subject',
          align: 'center'
        }
      ],
      data1: [],
      columns2: [
        {
          title: '编号',
          align: 'center',
          key: 'id'
        },
        {
          title: '服务名称',
          align: 'center',
          key: 'route_name'
        },
        {
          title: '服务价格',
          align: 'center',
          key: 'price'
        },
        {
          title: '支付时间',
          key: 'create_time',
          align: 'center'
        }
      ],
      data2: [],
      totalRecharge: 0 // 充值总额
    }
  },
  methods: {
    async getFinance () {
      const res = await this.$ajax('get', 'finance/paid', { page: this.consumePage, pageSize: this.pageSize })
      if (res.code === 0) {
        this.data2 = res.data
        this.consumeTotal = res.total
      }
    },
    sortState ({ order }) {
      if (order === 'desc') {
        this.ord = 0
        this.getUserAccountInfos()
      } else {
        this.ord = 1
        this.getUserAccountInfos()
      }
    },
    async getUserAccountInfos () {
      const res = await this.$ajax('get', 'finance/index', { page: this.page, pageSize: this.consumePageSize, payStatus: this.ord })
      if (res.code === 0) {
        this.data1 = res.data
        this.data1.forEach(item => {
          this.totalRecharge = this.totalRecharge + item.price
        })
        this.total = res.total
      }
    }
  },
  mounted () {
    this.getUserAccountInfos()
    this.getFinance()
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  }
}

</script>
