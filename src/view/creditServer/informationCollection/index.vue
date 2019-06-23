<!--
  信息补录查询
  @author hvv
  @date 2018-11-15
  -->
<style lang="less" scoped>
// formItem
.ivu-form .ivu-form-item {
  width: 40%;
}
</style>
<template>
  <div>
    <!-- 信息补录查询 -->
    <div class="listBox">
      <p class="boxTitle">
        <span class="primary">信息补录查询(批量信息补录请联系客服人员)</span>
      </p>
      <!-- 表单 -->
      <div class="inforForm">
        <Form
          ref="formValidate1"
          :model="formValidate1"
          :rules="ruleValidate1"
          :label-width="130"
          :inline="true"
        >
          <FormItem label="姓名" prop="id_name">
            <Input v-model="formValidate1.id_name"></Input>
          </FormItem>
          <FormItem label="身份证号" prop="id_number">
            <Input v-model="formValidate1.id_number"></Input>
          </FormItem>
          <FormItem label="合同金额" prop="loan_money">
            <Input v-model="formValidate1.loan_money"></Input>
          </FormItem>
          <FormItem label="担保方式" prop="assure_type" style="width:300px">
            <Select v-model="formValidate1.assure_type">
              <Option value="A">信用</Option>
              <Option value="B">抵押</Option>
              <Option value="C">担保</Option>
              <Option value="D">质押</Option>
              <Option value="E">保证</Option>
              <Option value="F">其他</Option>
            </Select>
          </FormItem>
          <FormItem label="借款日期">
            <FormItem prop="loan_sdate" style="width:260px">
              <DatePicker
                type="date"
                @on-change="loanSdateChange"
                placeholder=""
              ></DatePicker>
            </FormItem>
          </FormItem>
          <FormItem label="到期日期">
            <FormItem prop="loan_edate" style="width:260px">
              <DatePicker
                type="date"
                @on-change="loanEdateChange"
                placeholder=""
              ></DatePicker>
            </FormItem>
          </FormItem>
          <FormItem label="还款期数" prop="limit_month">
            <Input v-model="formValidate1.limit_month"></Input>
          </FormItem>
          <FormItem label="借款类型" prop="desc" style="width:300px">
            <Select v-model="formValidate1.desc">
              <Option value="经营">经营</Option>
              <Option value="消费">消费</Option>
              <Option value="其它">其它</Option>
            </Select>
          </FormItem>
          <FormItem label="借款地址" prop="city_code">
            <Cascader
              :data="cityCodeData.data"
              v-model="cityCodeData.value"
              @on-change="cityCodeChange"
            ></Cascader>
          </FormItem>
          <FormItem label="是否存在逾期信息">
            <RadioGroup v-model="formValidate1.is_overdue">
              <Radio label="1">是</Radio>
              <Radio label="0">否</Radio>
            </RadioGroup>
          </FormItem>
          <div v-if="formValidate1.is_overdue == '1'">
            <FormItem label="逾期开始日期">
              <FormItem prop="overdue_sdate" style="width:260px">
                <DatePicker
                  type="date"
                  @on-change="overdueSdateChange"
                  placeholder=""
                ></DatePicker>
              </FormItem>
            </FormItem>
            <FormItem label="逾期结束日期">
              <FormItem prop="overdue_edate" style="width:260px">
                <DatePicker
                  type="date"
                  @on-change="overdueEdateChange"
                  placeholder=""
                ></DatePicker>
              </FormItem>
            </FormItem>
            <FormItem label="逾期金额" prop="overdue_money">
              <Input v-model="formValidate1.overdue_money"></Input>
            </FormItem>
          </div>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate1')"
              >提交</Button
            >
            <Button
              @click="handleReset('formValidate1')"
              style="margin-left: 8px"
              >重置</Button
            >
          </FormItem>
        </Form>
      </div>
    </div>
    <!-- 历史合同补录记录 -->
    <div class="listBox">
      <p class="boxTitle">
        <span class="primary">查询记录</span>
        <span class="logIpts font_12">
          姓名：<input
            type="text"
            class="nameIpt"
            v-model="query.id_name"
          />&nbsp; 身份证号：<input
            type="number"
            class="idNumIpt"
            v-model="query.id_Number"
            placeholder="支持后四位搜索"
          />&#x3000;
          <b class="searchBtn primary_bg white pointer" @click="queryBtn"
            >搜索</b
          ></span
        >
      </p>
      <div class="logTable">
        <Table border :columns="columns1" :data="data1"></Table>
        <div class="pageBox font_12">
          <Page
            :total="total1"
            show-total
            show-elevator
            @on-change="table1Change"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'informationCollection',
  data () {
    const validateIdNo = (rule, value, callback) => {
      let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (value === '') {
        callback(new Error('身份证号码不能为空'))
      } else if (!(reg).test(value)) {
        new Error('请输入正确的身份证号！')
      } else {
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
      let reg = /^[1][34578]\d{9}$/
      if (value === '') {
        callback(new Error('手机号码不能为空'))
      } else if (!(reg).test(value)) {
        callback(new Error('请输入正确手机号码！'))
      } else {
        callback()
      }
    }
    return {
      nameIpt: '',
      idNumIpt: '',
      cityCodeData: {
        value: [],
        data: []
      },
      query: {
        id_name: '',
        id_number: '',
        currentIndex: '1'
      },
      formValidate1: {
        id_name: '',
        id_number: '',
        loan_money: '',
        assure_type: 'A',
        loan_sdate: '',
        loan_edate: '',
        limit_month: '',
        desc: '经营',
        city_code: '',
        is_overdue: '0',
        overdue_sdate: '',
        overdue_edate: '',
        overdue_money: ''
      },
      ruleValidate1: {
        id_name: [{
          required: true,
          message: '姓名不能为空',
          trigger: 'blur'
        }, {
          type: 'string',
          min: 2,
          max: 4,
          message: '姓名长度不符',
          trigger: 'blur'
        }],
        id_number: [{
          required: true,
          validator: validateIdNo,
          trigger: 'blur'
        }],
        loan_money: [{
          required: true,
          message: '借款金额不能为空',
          trigger: 'blur'
        }],
        loan_sdate: [{
          required: true,
          message: '借款日期不能为空',
          trigger: 'change'
        }],
        loan_edate: [{
          required: true,
          message: '到期日期不能为空',
          trigger: 'change'
        }],
        city_code: [{
          required: true,
          message: '借款地点不能为空',
          trigger: 'blur'
        }],
        limit_month: [{
          required: true,
          message: '借款期数不能为空',
          trigger: 'blur'
        }],
        desc: [{
          required: true,
          message: '借款类型不能为空',
          trigger: 'blur'
        }]
      },
      columns1: [{
        title: '姓名',
        key: 'id_name',
        align: 'center'
      },
      {
        title: '身份证号码',
        key: 'id_number',
        align: 'center'
      },
      {
        title: '到期日期',
        key: 'loan_edate',
        align: 'center'
      },
      {
        title: '合同金额',
        key: 'loan_money',
        align: 'center'
      }
      ],
      data1: [],
      total1: 0,
      currentIndex: 1
    }
  },
  created () {
    this.getAreaCode()
    this.queryBtn()
  },
  methods: {
    /**
     * 获取城市代码
     */
    getAreaCode: function () {
      this.$ajax('post', 'ar/area/code')
        .then(res => {
          this.cityCodeData.data = res.data
        })
    },
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$ajax('post', 'ar/loan/info/ext', this.formValidate1)
            .then(res => {
              this.data1.unshift(res.data)
              this.total1 = this.total1 + 1
              this.$Message.success('success')
            })
        };
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    cityCodeChange (value) {
      this.formValidate1.city_code = value[2]
    },
    queryBtn () {
      this.$ajax('post', 'ar/loan/info/ext/log', this.query)
        .then(res => {
          this.data1 = res.data
          this.total1 = res.total
          this.$Message.success('success')
        })
    },
    table1Change (index) {
      this.query.currentIndex = index
      this.queryBtn()
    },
    /**
     * 借款申请日期change
     */
    loanSdateChange (value) {
      this.formValidate1.loan_sdate = value
    },
    /**
     * 借款结束日期change
     */
    loanEdateChange (value) {
      this.formValidate1.loan_edate = value
    },
    /**
     * 逾期申请日期change
     */
    overdueSdateChange (value) {
      this.formValidate1.overdue_sdate = value
    },
    /**
     * 逾期结束日期change
     */
    overdueEdateChange (value) {
      this.formValidate1.overdue_edate = value
    }

  }
}
</script>
