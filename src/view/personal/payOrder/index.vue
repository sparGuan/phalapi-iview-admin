<style lang="stylus" scoped>
.pay-order-page {
  padding: 15px 20px;
  background: #fff;
  margin-bottom: 10px;
  font-size: 14px;

  .folkqueryitemtitle {
    b {
      font-weight: 600;
      border-left: 4px solid #009cff;
      padding-left: 6px;
    }
  }

  .mar-top-20 {
    margin-top: 20px;
  }

  .balance-img {
    background-repeat: no-repeat;
    background-image: url('../../../assets/img/relagerbalance.png');
    background-size: 260px 500px;
    width: 230px;
    height: 80px;
    vertical-align: middle;
    display: inline-block;
  }

  /deep/.ivu-form-item {
    .ivu-form-item-content {
      max-width: 440px;
    }
  }

  .renderalance {
    .ivu-radio-wrapper {
      margin-left: 20px;
      margin-bottom: 30px;
    }
  }

  .balance-txt {
    position: absolute;
    font-size: 20px;
    color: #fff;
    top: 24px;
    right: 130px;
    transform: translateX(24px);
  }

  .c-zhi {
    position: absolute;
    right: 28px;
    top: 30px;
    font-size: 12px;
    color: #fff;
    transform: scale(0.8);
  }

  .wid-220 {
    width: 220px;
  }

  .small-imgs {
    width: 50px;
    height: 25px;
    display: inline-block;
    vertical-align: middle;
  }

  .pay-witch {
    position: relative;

    /deep/&>img {
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 260px;
      bottom: 0;
    }
  }

  .code-box {
    height: 300px;
    position: relative;
  }

  .bank-pay-ico {
    &.before {
      width: 30px;
      height: 15px;
      background-image: url('../../../assets/img/wx-pay.png');
    }
  }
}
</style>
<template>
  <div class="pay-order-page">
    <div class="folkqueryitemtitle">
      <b>快速充值</b>
    </div>
    <!-- 支付金额 -->
    <Card bordered style="margin:15px;">
      <p slot="title">充值金额</p>
      <RadioGroup
        class="renderalance"
        @on-change="getOrderUrl"
        v-if="showOrder"
        :value="price"
      >
        <Radio v-for="item in chooseBalance" :label="item.price">
          <div
            class="balance-img"
            :style="'background-position:' + item.position + ';'"
          ></div>
          <span class="c-zhi">充值</span>
          <span v-text="`${item.price}余额`" class="balance-txt"></span>
        </Radio>
      </RadioGroup>
    </Card>
    <Card bordered style="margin:15px;">
      <Tabs
        :value="tabName"
        :animated="false"
        @on-click="
          name => {
            this.tabName = name;
            this.checkIsOrder();
          }
        "
      >
        <TabPane
          :label="
            (h, params) => {
              return h(
                'div',
                {
                  style: {
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                  }
                },
                [
                  h('img', {
                    domProps: {
                      src: require('../../../assets/img/bank-pay.png')
                    },
                    style: {
                      width: '50px',
                      height: '15px',
                      marginRight: '5px'
                    }
                  }),
                  h(
                    'div',
                    {
                      props: {}
                    },
                    '快捷支付'
                  )
                ]
              );
            }
          "
          name="name1"
          class="bank-pay-ico"
        >
          <div>
            <label>订单号：</label>
            <span>{{ order }}</span>
          </div>
          <Form
            ref="formValidate"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="80"
            class="mar-top-20 i-form"
            style="padding-left: calc(100% - 600px);"
            v-if="order !== '' && price > 0"
          >
            <FormItem label="付款银行" prop="bank" style="max-width: 440px;">
              <Select
                v-model="formValidate.bank"
                placeholder="选择你的银行卡"
                class="wid-220"
              >
                <Option
                  v-for="(item, index) in bankCardsOptions"
                  :value="index"
                >
                  {{ item.name }}
                </Option>
              </Select>
            </FormItem>

            <FormItem label="卡种" prop="bankType" style="max-width: 440px;">
              <RadioGroup v-model="formValidate.bankType" class="wid-220">
                <Radio :label="0">
                  <span>储蓄卡</span>
                </Radio>
                <Radio :label="1">
                  <span>信用卡</span>
                </Radio>
              </RadioGroup>
            </FormItem>

            <FormItem
              label="银行卡号"
              prop="bankCardNo"
              style="max-width: 440px;"
              class="ivu-form-item-required"
            >
              <Input
                v-model="formValidate.bankCardNo"
                placeholder="请输入银行卡号"
                class="wid-220"
              ></Input>
            </FormItem>

            <FormItem label="姓名" prop="name" style="max-width: 440px;">
              <Input
                v-model="formValidate.name"
                placeholder="请输入姓名"
                class="wid-220"
              ></Input>
            </FormItem>

            <FormItem
              label="身份证号"
              prop="IdCard"
              style="max-width: 440px;"
              class="ivu-form-item-required"
            >
              <Input
                v-model="formValidate.IdCard"
                placeholder="请输入身份证号"
                class="wid-220"
              ></Input>
            </FormItem>

            <FormItem
              label="手机号码"
              prop="phone"
              style="max-width: 440px;"
              class="ivu-form-item-required"
            >
              <Input
                v-model="formValidate.phone"
                placeholder="请输入绑定银行手机号码"
                class="wid-220"
              ></Input>
            </FormItem>

            <FormItem label="验证码" prop="code" style="max-width: 440px;">
              <Input
                v-model.trim="formValidate.code"
                placeholder="请输入手机验证码"
                class="wid-220"
              ></Input>
              <GetVerCode
                @getCodeFn="getCodeFn"
                ref="getCode"
                type="lostpassword"
                style="display:inline-block;"
              ></GetVerCode>
            </FormItem>

            <FormItem>
              <Button type="primary" @click="handleSubmit('formValidate')"
                >确认充值</Button
              >
              <Button
                style="margin-left: 15px;    min-width: 80px"
                @click="handleReset('formValidate')"
                >重设</Button
              >
            </FormItem>
          </Form>
        </TabPane>
        <TabPane
          :label="
            (h, params) => {
              return h(
                'div',
                {
                  style: {
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                  }
                },
                [
                  h('img', {
                    domProps: {
                      src: require('../../../assets/img/wx-pay.png')
                    },
                    style: {
                      width: '20px',
                      height: '18px',
                      marginRight: '5px'
                    }
                  }),
                  h(
                    'div',
                    {
                      props: {}
                    },
                    '微信支付'
                  )
                ]
              );
            }
          "
          name="name2"
        >
          <div>
            <label>订单号：</label>
            <span>{{ order }}</span>
          </div>
          <template v-if="order !== '' && price > 0">
            <div class="code-box">
              <qrcode-vue
                class="pay-witch"
                :size="200"
                :value="orderUrl"
                :logo="wxLogo"
              ></qrcode-vue>
            </div>
            <div
              style="text-align: center;transform: translateY(-45px);"
              v-if="price > 0"
            >
              <p>{{ `￥${price}` }}</p>
              <div>请使用微信客户端扫描完成支付</div>
            </div>
          </template>
        </TabPane>
        <TabPane
          :label="
            (h, params) => {
              return h(
                'div',
                {
                  style: {
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                  }
                },
                [
                  h('img', {
                    domProps: {
                      src: require('../../../assets/img/ali-pay.png')
                    },
                    style: {
                      width: '20px',
                      height: '20px',
                      marginRight: '5px'
                    }
                  }),
                  h(
                    'div',
                    {
                      props: {}
                    },
                    '支付宝支付'
                  )
                ]
              );
            }
          "
          name="name3"
        >
          <div>
            <label>订单号：</label>
            <span>{{ order }}</span>
          </div>
          <template v-if="order !== '' && price > 0">
            <div class="code-box">
              <qrcode-vue
                class="pay-witch"
                :size="200"
                :value="orderUrl"
                :logo="alipayLogo"
              ></qrcode-vue>
            </div>
            <div
              style="text-align: center;transform: translateY(-45px);"
              v-if="price > 0"
            >
              <p>{{ `￥${price}` }}</p>
              <div>请使用支付宝客户端扫描完成支付</div>
            </div>
          </template>
        </TabPane>

        <!-- <TabPane
          :label="
            (h, params) => {
              return h(
                'div',
                {
                  style: {
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                  }
                },
                [
                  h('img', {
                    domProps: {
                      src: require('../../../assets/img/ali-pay.png')
                    },
                    style: {
                      width: '20px',
                      height: '20px',
                      marginRight: '5px'
                    }
                  }),
                  h(
                    'div',
                    {
                      props: {}
                    },
                    '京东支付'
                  )
                ]
              );
            }
          "
          name="name3"
        >
          <div>
            <label>订单号：</label>
            <span>{{ order }}</span>
          </div>
          <template v-if="order !== '' && price > 0">
            <div class="code-box">
              <qrcode-vue
                class="pay-witch"
                :size="200"
                :value="orderUrl"
                :logo="alipayLogo"
              ></qrcode-vue>
            </div>
            <div
              style="text-align: center;transform: translateY(-45px);"
              v-if="price > 0"
            >
              <p>{{ `￥${price}` }}</p>
              <div>请使用京东钱包APP扫描完成支付</div>
            </div>
          </template>
        </TabPane> -->
      </Tabs>
    </Card>
  </div>
</template>

<script>
import GetVerCode from '@/components/getVerCode'
import {
  bankCardValidate,
  IdCardValidate,
  checkPhone
} from '@/common/lib/check'
import qrcodeVue from 'qrcode-vue'
const QRCode = require('qrcode')
export default {
  name: 'PayOrder',
  components: {
    GetVerCode,
    qrcodeVue
  },
  data () {
    const validatebankCard = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('银行卡号不能为空'))
      } else if (!bankCardValidate(value)) {
        callback(new Error('请输入正确的银行卡号'))
      } else {
        callback()
      }
    }
    const validateIdCard = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('身份证号不能为空'))
      } else if (!IdCardValidate(value)) {
        callback(new Error('请输入正确的身份证号'))
      } else {
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'))
      } else if (!checkPhone(value)) {
        callback(new Error('请输入正确的手机号'))
      } else {
        callback()
      }
    }

    return {
      showOrder: true,
      price: 0,
      orderUrl: '',
      order: '',
      wxLogo: require('../../../assets/img/wx_head.png'),
      alipayLogo: require('../../../assets/img/ali-pay.png'),
      bankCardsOptions: [
        {
          name: '中国建设银行'
        },
        {
          name: '中国工商银行'
        },
        {
          name: '中国农业银行'
        },
        {
          name: '兴业银行'
        },
        {
          name: '浦发银行'
        },
        {
          name: '上海银行'
        },
        {
          name: '光大银行'
        },
        {
          name: '中信银行'
        },
        {
          name: '中国民生银行'
        },
        {
          name: '广发银行'
        },
        {
          name: '华夏银行'
        }
      ],
      chooseBalance: [
        {
          price: 500,
          position: '-8px -375px'
        },
        {
          price: 1000,
          position: '-8px -375px'
        },
        {
          price: 2000,
          position: '-8px -375px'
        },
        {
          price: 3000,
          position: '-8px -375px',
          hasVip: true
        },
        {
          price: 5000,
          position: '-8px -375px',
          hasVip: true
        },
        {
          price: 10000,
          position: '-8px -375px',
          hasVip: true
        }
      ],
      tabName: 'name1',
      formValidate: {
        bank: 1,
        bankType: 0,
        bankCardNo: '',
        name: '',
        IdCard: '',
        phone: '',
        code: ''
      },
      ruleValidate: {
        bankCardNo: [{
          validator: validatebankCard,
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: '姓名不能为空',
          trigger: 'blur'
        }],
        IdCard: [{
          validator: validateIdCard,
          trigger: 'blur'
        }],
        phone: [{
          validator: validatePhone,
          trigger: 'blur'
        }],
        code: [{
          required: true,
          message: '验证码不能为空',
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    checkIsOrder () {
      if (this.price === 0 && this.order === '') {
        this.$Message.error('请先选择充值金额！')
      }
    },
    async getOrderUrl (val) {
      if (val >= 500) {
        this.$Modal.confirm({
          title: '新的充值订单提醒',
          content: '您将产生一条新的充值订单, 请尽快完成充值。',
          onOk: async () => {
            const data = await this.$ajax('post', 'payment/ebj_index', { orderMoney: val })
            if (data.code === 0) {
              this.price = val
              this.order = data.data.out_trade_no
              this.orderUrl = data.data.qrcode
            }
          },
          onCancel: () => {
            this.showOrder = false
            this.$nextTick(() => {
              this.showOrder = true
            })
          }
        })
      } else {
        this.$Message.error('请先选择充值金额！')
      }
    },
    // 获取二维码
    getCodeFn () {
      // 对手机号框单独验证
      this.$refs.formValidate.validateField('phone', error => {
        if (!error) {
          this.$refs.getCode.start(this.registerForm.phone)
        }
      })
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  },
  mounted () {

  }
}

</script>
