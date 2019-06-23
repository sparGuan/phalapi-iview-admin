<style lang="less" scoped>
  .customlist {
  font-size: 14px;
  padding: 10px 15px;
  background: #f5f7f9;
  .customHead {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .btn {
      border-radius: 4px;
      height: 23px;
      line-height: 23px;
      padding: 0 5px;
    }
  }
  .customItem {
    background: #fff;
    margin-bottom: 10px;
    padding: 15px 20px;
    .itemTitle {
      b {
        font-weight: 600;
        border-left: 4px solid #009cff;
        padding-left: 6px;
      }
    }
    .itemContant {
      margin-top: 20px;
      .itemForm {
        padding-left: 3%;
        position: relative;
        .ivu-form .ivu-form-item {
          width: 32%;
        }
        .submitBox {
          position: absolute;
          bottom: -15px;
          left: 30%;
        }
      }
      .itemTable {
        padding: 10px 20px;
      }
    }
  }
}
</style>

<template>
  <div class="appwrap customlist">
    <p class="customHead">
      <span class="pointer" @click.prevent="$goto({name: 'folkQuery'})">
        <Icon type="ios-arrow-back" size="24" style="color:#009dff" />
        <b>返回</b>
      </span>
      <span class="btn orange_bg white pointer font_12" @click="viewMyRemind">查看提醒</span>
    </p>
    <div class="customItem">
      <p class="itemTitle">
        <b>在库资料管理</b>
      </p>
      <div class="itemContant">
        <div class="itemForm">
          <Form :model="existCustomForm" :label-width="100">
            <FormItem label="姓名" class="formitemnoreddot">
              <Input v-model.trim="existCustomForm.id_name" placeholder="请输入姓名"></Input>
            </FormItem>
            <FormItem label="手机号码" class="formitemnoreddot">
              <Input v-model.trim="existCustomForm.mobile" placeholder="请输入手机号码"></Input>
            </FormItem>
            <FormItem label="身份证号码">
              <Input v-model.trim="existCustomForm.id_number" placeholder="请输入身份证号码"></Input>
            </FormItem>
            <FormItem class="submitBox">
              <Button @click="searchExist" type="primary" size="small">查询</Button>
            </FormItem>
          </Form>
        </div>
        <div class="itemTable">
          <Table border :columns="columns1" :data="data1"></Table>
        </div>
      </div>
    </div>
    <div class="customItem">
      <p class="itemTitle">
        <b>结单客户</b>
      </p>
      <div class="itemContant">
        <div class="itemForm">
          <Form :model="checkItemObj" :label-width="100">
            <FormItem label="姓名" class="formitemnoreddot">
              <Input v-model.trim="checkItemObj.id_name" placeholder="请输入姓名"></Input>
            </FormItem>
            <FormItem label="手机号码" class="formitemnoreddot">
              <Input v-model.trim="checkItemObj.mobile" placeholder="请输入手机号码"></Input>
            </FormItem>
            <FormItem label="身份证号码">
              <Input v-model.trim="checkItemObj.id_number" placeholder="请输入身份证号码"></Input>
            </FormItem>
            <FormItem class="submitBox">
              <Button @click="getCheckItem" type="primary" size="small">查询</Button>
            </FormItem>
          </Form>
        </div>
        <div class="itemTable">
          <Table border :columns="columns2" :data="data2"></Table>
        </div>
      </div>
    </div>

    <!-- 查看修改客户资料 -->
    <Modal v-model="showInfo" width="1000" :mask-closable="false" :styles="{top: '20px'}">
      <p slot="header" style="color:#666;text-align:center">
        <span>查看修改客户资料</span>
      </p>
      <div class="changeinfo">
        <div class="changeinfoitem" style="height: auto;overflow: hidden">
          <div class="itemleft">
            <div class="lefttitle">
              <i class="fa fa-exclamation-circle"></i>
              <span class="lefttitlespan">基本信息</span>
            </div>
          </div>
          <div class="itemright">
            <div class="rightitem">
              <div class="leftitem item">
                <div class="itemname">姓名</div>
                <div class="iteminfo">{{customInfo.name}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">身份证号码</div>
                <div class="iteminfo">{{customInfo.id_number}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">手机号码</div>
                <div class="iteminfo">{{customInfo.phone}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">录入时间</div>
                <div class="iteminfo">{{customInfo.updated_at}}</div>
              </div>
            </div>
            <div class="rightitem">
              <div class="rightitem item">
                <div class="itemname" style="margin-bottom: 150px">客户照片</div>
                <div class="itemShow" style="float: left">
                  <viewer :options="{navbar: false, title: false, toolbar: false}">
                    <div>
                      <img v-if="customInfo.photo" :src="imgPreviewUrl + customInfo.photo" id="img" style="width: 120px; cursor: pointer;margin-bottom: 10px;">
                      <div>
                        <Button @click="clickImg" type="primary" style="dispaly: block">点击看大图</Button>
                      </div>
                    </div>
                  </viewer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="changeinfoitem">
          <div class="itemleft">
            <div class="lefttitle">
              <i class="fa fa-user-circle"></i>
              <span class="lefttitlespan">扩展信息</span>
            </div>
          </div>
          <div class="itemright" v-if="customInfo">
            <div class="rightitem">
              <div class="leftitem item">
                <div class="itemname">车辆基本信息</div>
                <div class="iteminfo">{{customInfo.basic_car == 0 ? '无' : '有'}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">房产基本信息</div>
                <div class="iteminfo">{{customInfo.basic_house == 0 ? '无' : '有'}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">负债情况</div>
                <div class="iteminfo">{{customInfo.basic_liabilities == 0 ? '无' : '有'}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">录入时间</div>
                <div class="iteminfo">{{customInfo.updated_at}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="changeinfoitem">
          <div class="itemleft">
            <div class="lefttitle">
              <i class="fa fa-tasks"></i>
              <span class="lefttitlespan">信贷交易状况</span>
            </div>
          </div>
          <div class="itemright" v-if="customInfo">
            <div class="rightitem">
              <div class="leftitem item">
                <div class="itemname">已发放贷款</div>
                <div class="iteminfo" v-if="!customInfo.pay_price && customInfo.status_credit == 0">有</div>
                <div class="iteminfo" v-if="customInfo.status_credit != 0">无</div>
                <div class="iteminfo" v-if="customInfo.status_credit == 0 && customInfo.pay_price">{{customInfo.pay_price}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">逾期中</div>
                <div class="iteminfo">{{customInfo.status_credit == 1 ? '有' : ''}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">已结算</div>
                <div class="iteminfo" v-if="!customInfo.pay_price && customInfo.status_credit == 2">有</div>
                <div class="iteminfo" v-if="customInfo.status_credit != 2">无</div>
                <div class="iteminfo" v-if="customInfo.status_credit == 2 && customInfo.pay_price">{{customInfo.pay_price}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">黑名单</div>
                <div class="iteminfo">{{customInfo.status_credit == 3 ? '有' : ''}}</div>
              </div>
            </div>
            <div class="rightitem">
              <div class="leftitem item">
                <div class="itemname">高风险客户</div>
                <div class="iteminfo">{{customInfo.status_credit == 4 ? '有' : ''}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">验收中</div>
                <div class="iteminfo">{{customInfo.status_credit == 5 ? '有' : ''}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">诉讼</div>
                <div class="iteminfo">{{customInfo.status_credit == 6 ? '有' : ''}}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">查封</div>
                <div class="iteminfo">{{customInfo.status_credit == 7 ? '有' : ''}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="changeinfoitem changeinfoitem-short">
          <div class="itemleft">
            <div class="lefttitle">
              <i class="fa fa-pencil-square"></i>
              <span class="lefttitlespan">其他操作</span>
            </div>
          </div>
          <div class="itemright itemright-short">
            <div class="rightitem" style="width: 33%">
              <Button type="primary" @click="openFeedback(customInfo.id)" shape="circle">添加反馈跟进信息</Button>
            </div>
            <div class="rightitem" style="width: 33%">
              <Button type="primary" @click="viewRemind(customInfo.id)" shape="circle">查看提醒</Button>
            </div>
            <div class="rightitem" style="width: 33%">
              <Button type="primary" @click="openCreditStatus(customInfo.id)" shape="circle">修改信贷交易状态</Button>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <Button type="primary" shape="circle" @click="showInfo = false">确定</Button>
      </div>
    </Modal>

    <!-- 添加反馈跟进信息 -->
    <Modal v-model="feedback" width="440" :mask-closable="false">
      <p slot="header" style="color:#666;text-align:center">
        <span>添加反馈跟进信息</span>
      </p>
      <Form :model="feedbackForm" :rules="formRules" ref="feedbackForm">
        <FormItem prop="content">
          <Input v-model.trim="feedbackForm.content" type="textarea" :rows="4" placeholder="添加反馈跟进信息" />
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" :loading="loading" shape="circle" @click="submitFeedback(id)">提交</Button>
      </div>
    </Modal>

    <!-- 添加提醒 -->
    <Modal v-model="addRemind" width="440" :mask-closable="false">
      <p slot="header" style="color:#666;text-align:center">
        <span>添加提醒</span>
      </p>
      <div class="container">
        <Form :model="addRemindForm" ref="addRemindForm" :rules="formRules" :label-width="121">
          <FormItem label="姓名">{{addRemindForm.name}}</FormItem>
          <FormItem label="提醒时间">
            <DatePicker v-model="addRemindForm.remind_time" :options="dataTimeBefore" type="datetime" placeholder="请选择时间"
              style="width: 285px"></DatePicker>
          </FormItem>
          <FormItem prop="remind_type" label="提醒类别">
            <Select v-model="addRemindForm.remind_type">
              <Option :value="0" :key="0">贷后</Option>
              <Option :value="1" :key="1">还款</Option>
              <Option :value="2" :key="2">其他</Option>
            </Select>
          </FormItem>
          <FormItem prop="per_month" label="每月提醒">
            <Select v-model="addRemindForm.per_month">
              <Option :value="0" :key="0">是</Option>
              <Option :value="1" :key="1">否</Option>
            </Select>
          </FormItem>
          <FormItem class="sss" prop="content" label="提醒内容">
            <Input type="textarea" v-model="addRemindForm.content" :rows="4" placeholder="添加提醒" />
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="primary" :loading="loading" shape="circle" @click="submitAddRemind">提交</Button>
      </div>
    </Modal>

    <!-- 修改信贷交易状态 -->
    <Modal v-model="creditStatus" width="440" :mask-closable="false">
      <p slot="header" style="color:#666;text-align:center">
        <span>修改信贷交易状态</span>
      </p>
      <div class="container">
        <Form :model="editCreditStatusForm" :rules="formRules" ref="editCreditStatusForm" :label-width="111">
          <FormItem label="信贷交易状态">
            <Select v-model="editCreditStatusForm.status_credit" style="width: 285px">
              <Option :value="index" :key="index" v-for="(stas, index) in status">{{stas}}</Option>
            </Select>
          </FormItem>
          <FormItem prop="pay_price" v-if="editCreditStatusForm.status_credit == 0 || editCreditStatusForm.status_credit == 2"
            label="贷款金额">
            <InputNumber v-model="editCreditStatusForm.pay_price" :min="0" placeholder="请输入贷款金额" style="width: 285px"></InputNumber>
          </FormItem>
          <FormItem prop="pay_time" v-if="editCreditStatusForm.status_credit == 0 || editCreditStatusForm.status_credit == 2"
            label="贷款发放时间">
            <DatePicker v-model="editCreditStatusForm.pay_time" :options="dataTimeAfter" type="date" placeholder="请选择日期"
              style="width: 285px"></DatePicker>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="primary" :loading="loading" shape="circle" @click="submitCreditStatus">提交</Button>
      </div>
    </Modal>

    <!-- 查看我的提醒列表 -->
    <Modal v-model="myRemind" :mask-closable="false" :footer-hide="true" :width="1000" class-name="commonmodalwrap">
      <div class="commonmodalhead" slot="header">
        <p class="primary"><Icon type="ios-flash" size="22"/>我发出的提醒</p>
      </div>
      <div class="commonmodalcenter searchlistwrap">
        <div class="searchlisttable">
          <Table border :columns="columns3" :data="data3"></Table>
        </div>
      </div>
    </Modal>

    <!-- 查看针对该用户的提醒列表 -->
    <Modal v-model="remind" :mask-closable="false" :footer-hide="true" :width="1200" class-name="commonmodalwrap">
      <div class="commonmodalhead" slot="header">
        <p>提醒</p>
      </div>
      <div class="commonmodalcenter searchlistwrap">
        <div class="searchlisttable">
          <div class="searchlistthead">
            <div>
              <div class="long">添加时间</div>
              <div class="long">提醒时间</div>
              <div class="longg">提醒内容</div>
              <div class="short">提醒类别</div>
              <div class="short">每月提醒</div>
              <div class="edit">操作</div>
            </div>
          </div>
          <div class="searchlisttbody">
            <div class="searchlisttbodyitem" v-for="(remind,index) in remindForm.remindList" :key="index">
              <div class="long">{{remind.updated_at}}</div>
              <div class="long">{{remind.remind_time}}</div>
              <Tooltip class="longg" :content="remind.content" theme="light" placement="top">
                <div>{{remind.content}}</div>
              </Tooltip>
              <div class="short" v-if="remind.remind_type == 0">贷后</div>
              <div class="short" v-if="remind.remind_type == 1">还款</div>
              <div class="short" v-if="remind.remind_type == 2">其他</div>
              <div class="short" v-if="remind.per_month == 0">是</div>
              <div class="short" v-if="remind.per_month == 1">否</div>
              <div class="edit">
                <Button @click="deleteRemind(remind.id)" type="primary" size="small">删除</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="nodatalist" v-if="!remindForm.remindList.length && !remindForm.loading">没有提醒</div>
        <div class="commonpagenav">
          <Page :current.sync="remindForm.current_page" :page-size="remindForm.perPage" :total="remindForm.total"
            @on-change="changeRemind"></Page>
        </div>
      </div>
      <Spin fix v-if="feedbackForm.loading"></Spin>
      <div class="commonmodalfoot">
        <Button @click="remind = false" shape="circle" type="primary" size="large" style="width: 150px; margin-bottom: 15px;">
          确
          认
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import {
  toDate
} from '@/common/lib/date'

export default {
  name: 'customList',
  data () {
    return {
      checkItemForm: {
        id_name: '',
        id_number: '',
        mobile: ''
      },
      checkItemObj: {
        list: [],
        page: 1,
        perPage: 10,
        total: 0,
        loading: false
      },
      showInfo: false,
      feedback: false,
      addRemind: false,
      creditStatus: false,
      remind: false,
      myRemind: false,
      date: '',
      time: '',
      status: [
        '已发放贷款',
        '逾期中',
        '已结清',
        '黑名单',
        '高风险客户',
        '催收中',
        '诉讼中',
        '查封'
      ],
      existCustomForm: {
        perPage: 10,
        page: 1,
        total: 0,
        loading: false,
        id_name: '',
        id_number: '',
        mobile: '',
        list: []
      },
      loading: false,
      customInfo: {},
      imgPreviewUrl: $conf.baseUrl + 'oss/preview?is_img=true&hash=',
      existCustomSearchForm: {
        perPage: 10,
        page: 1,
        id_name: '',
        id_number: '',
        mobile: '',
        list: []
      },
      editCreditStatusForm: {
        id: '',
        status_credit: '',
        pay_price: '',
        pay_time: ''
      },
      feedbackForm: {
        customer_id: '',
        content: ''
      },
      addRemindForm: {
        name: '',
        customer_id: '',
        remind_time: '',
        remind_type: '',
        per_month: '',
        content: ''
      },
      remindForm: {
        customer_id: '',
        perPage: 10,
        page: 1,
        total: 0,
        loading: false,
        remindList: []
      },
      myRemindForm: {
        perPage: 10,
        page: 1,
        total: 0,
        loading: false,
        remindList: []
      },
      formRules: {
        content: [{
          required: true,
          message: '内容不能为空',
          trigger: 'blur'
        }],
        pay_price: [{
          required: true,
          message: '请输入金额',
          type: 'number',
          trigger: 'blur'
        }],
        remind_type: [{
          required: true,
          type: 'number',
          message: '请选择提醒类别',
          trigger: 'blur'
        }],
        per_month: [{
          required: true,
          type: 'number',
          message: '请选择是否每月提醒',
          trigger: 'blur'
        }]
      },
      dataTimeBefore: {
        disabledDate (date) {
          return date && date.valueOf() < Date.now()
        }
      },
      dataTimeAfter: {
        disabledDate (date) {
          return date && date.valueOf() > Date.now()
        }
      },
      // 在库资料管理Table
      columns1: [{
        title: '姓名',
        key: 'name',
        align: 'center'
      },
      {
        title: '身份证号',
        key: 'idNo',
        align: 'center',
        width: 190
      },
      {
        title: '手机号码',
        key: 'mobile',
        align: 'center',
        width: 140
      },
      {
        title: '录入时间',
        key: 'enterDate',
        align: 'center',
        width: 170
      },
      {
        title: '客户详情',
        key: 'customeDetail',
        align: 'center',
        width: 150,
        render: (h, params) => {
          return h('div', [
            h(
              'Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    // getCustomInfo(customer.id)
                  }
                }
              },
              '修改客户资料'
            )
          ])
        }
      },
      {
        title: '操作',
        key: 'handle',
        align: 'center',
        width: 350,
        render: (h, params) => {
          return h('div', [
            h(
              'Button', {
                props: {
                  type: 'success',
                  size: 'small'
                },
                style: {
                  marginRight: '15px'
                },
                on: {
                  click: () => {
                    // openFeedback(customer.id)
                  }
                }
              },
              '反馈跟进'
            ),

            h(
              'Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '15px'
                },
                on: {
                  click: () => {
                    // openCreditStatus(customer.id)
                  }
                }
              },
              '修改信贷交易状态'
            ),
            h(
              'Button', {
                props: {
                  type: 'warning',
                  size: 'small'
                },

                on: {
                  click: () => {
                    // openAddRemind(customer.name, customer.id)
                  }
                }
              },
              '添加提醒'
            )
          ])
        }
      }
      ],
      data1: [{
        name: '李想',
        idNo: '411325199009258223',
        mobile: '17193836223',
        enterDate: '2018-12-10 08:12',
        customeDetail: '客户详情是什么'
      },
      {
        name: '李想',
        idNo: '411325199009258223',
        mobile: '17193836223',
        enterDate: '2018-12-10 08:12',
        customeDetail: '客户详情是什么'
      }
      ],
      // 结单客户Table
      columns2: [{
        title: '姓名',
        key: 'name',
        align: 'center'
      },
      {
        title: '身份证号',
        key: 'idNo',
        align: 'center'
      },
      {
        title: '手机号码',
        key: 'mobile',
        align: 'center'
      },
      {
        title: '录入时间',
        key: 'enterDate',
        align: 'center'
      },
      {
        title: '结单',
        key: 'overBill',
        align: 'center'
      },
      {
        title: '操作',
        key: 'handle',
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h(
              'Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {}
                }
              },
              '结单详情'
            )
          ])
        }
      }
      ],
      data2: [{
        name: '李想',
        idNo: '411325199009258223',
        mobile: '17193836223',
        enterDate: '2018-12-10',
        overBill: '结单什么'
      },
      {
        name: '李想',
        idNo: '411325199009258223',
        mobile: '17193836223',
        enterDate: '2018-12-10',
        overBill: '结单什么'
      }
      ],
      // 我的提醒Table
      columns3: [{
        title: '添加时间',
        key: 'addDate',
        align: 'center'
      },
      {
        title: '提醒时间',
        key: 'warnDate',
        align: 'center',
        width: 180
      },
      {
        title: '被提示人',
        key: 'byNotice',
        align: 'center'
      },
      {
        title: '提醒内容',
        key: 'warnContent',
        align: 'center'
      },
      {
        title: '提醒类别',
        key: 'warnType',
        align: 'center'
      },
      {
        title: '每月提醒',
        key: 'warnMonth',
        align: 'center'
      },
      {
        title: '操作',
        key: 'handle',
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h(
              'Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    // deleteMyRemind(remind.id)
                  }
                }
              },
              '删除'
            )
          ])
        }
      }
      ],
      data3: [{
        addDate: '李想',
        warnDate: '2018-12-10 11:00',
        byNotice: '17193836223',
        warnContent: '2018-12-10 11:00',
        warnType: '结单什么',
        warnMonth: '结单什么'
      },
      {
        addDate: '李想',
        warnDate: '2018-12-10 11:00',
        byNotice: '17193836223',
        warnContent: '2018-12-10 11:00',
        warnType: '结单什么',
        warnMonth: '结单什么'
      }
      ]
    }
  },
  beforeMount () {
    this.getExistCustom()
    this.getCheckItem()
  },
  methods: {
    clickImg () {
      img.click()
    },
    getExistCustom () {
      this.$ajax(
        'get',
        'customer/customer/exist', {
          page: this.existCustomForm.page,
          perPage: this.existCustomForm.perPage,
          id_name: this.existCustomForm.id_name,
          id_number: this.existCustomForm.id_number,
          mobile: this.existCustomForm.mobile
        },
        'existCustomForm.loading'
      ).then(data => {
        this.existCustomForm.list = data.data.data
        this.existCustomForm.total = data.data.total
      })
    },
    getCheckItem () {
      this.$ajax(
        'get',
        'customer/customer/settle', {
          ...this.checkItemForm,
          ...{
            page: this.checkItemObj.page,
            perPage: this.checkItemObj.perPage
          }
        },
        'checkItemObj.loading'
      ).then(data => {
        this.checkItemObj.list = data.data.data
        this.checkItemObj.total = data.data.total
      })
    },
    // 在库客户翻页
    changeExistCustom (page) {
      this.existCustomForm.page = page
      this.getExistCustom()
    },
    changeCheckItemPage (page) {
      this.checkItemObj.page = page
      this.getCheckItem()
    },
    // 单个在库客户详情
    getCustomInfo (id) {
      this.showInfo = true
      this.$ajax('get', 'customer/customer/exist/' + id).then(data => {
        this.customInfo = data.data
      })
    },
    // 在库客户条件查询
    searchExist () {
      this.existCustomForm.page = 1
      this.getExistCustom()
    },
    openCreditStatus (id) {
      this.$ajax('get', 'customer/customer/exist/' + id).then(data => {
        this.editCreditStatusForm.status_credit = data.data.status_credit
        this.editCreditStatusForm.pay_price = data.data.pay_price
        this.editCreditStatusForm.pay_time = data.data.pay_time || toDate()
        this.editCreditStatusForm.id = data.data.id
      })
      this.creditStatus = true
    },
    // 提交单个客户信贷交易状态
    submitCreditStatus () {
      this.$refs.editCreditStatusForm.validate(valid => {
        if (valid) {
          this.editCreditStatusForm.pay_time = dayjs(
            this.editCreditStatusForm.pay_time
          ).format('YYYY-MM-DD')
          this.$ajax(
            'post',
            'customer/customer/exist/' + this.editCreditStatusForm.id,
            this.editCreditStatusForm,
            'loading'
          ).then(data => {
            this.editCreditStatusForm.pay_price = ''
            this.editCreditStatusForm.pay_time = ''
            this.creditStatus = false

            this.getCheckItem()
          })
        }
      })
    },
    openAddRemind (name, id) {
      this.date = new Date()
      this.time = new Date()
      this.addRemind = true
      this.addRemindForm.name = name
      this.addRemindForm.customer_id = id
    },
    submitAddRemind () {
      if (this.addRemindForm.remind_time) {
        this.$refs.addRemindForm.validate(valid => {
          if (valid) {
            this.addRemindForm.remind_time = dayjs(
              this.addRemindForm.remind_time
            ).format('YYYY-MM-DD HH:mm:ss')
            this.$ajax(
              'post',
              'customer/customer/remind/add',
              this.addRemindForm,
              'loading'
            ).then(data => {
              this.addRemindForm.remind_time = ''
              this.addRemindForm.per_month = ''
              this.addRemindForm.content = '';
              (this.addRemindForm.remind_type = ''), (this.addRemind = false)
            })
          }
        })
      } else {
        this.$Message.error('请选择提醒时间')
      }
    },
    openFeedback (id) {
      this.feedback = true
      this.feedbackForm.customer_id = id
    },
    submitFeedback () {
      this.$refs.feedbackForm.validate(valid => {
        if (valid) {
          this.$ajax(
            'post',
            'customer/customer/add',
            this.feedbackForm,
            'loading'
          ).then(data => {
            this.feedbackForm.content = ''
            this.feedback = false
          })
        }
      })
    },
    viewRemind (id) {
      this.remind = true
      this.remindForm.customer_id = id
      this.$ajax(
        'get',
        'customer/customer/remind/customer', {
          customer_id: this.remindForm.customer_id,
          perPage: 10,
          page: this.remindForm.page
        },
        'remindForm.loading'
      ).then(data => {
        this.remindForm.remindList = data.data.data
        this.remindForm.total = data.data.total
      })
    },
    changeRemind (page) {
      this.remindForm.page = page
      this.viewRemind(this.remindForm.customer_id)
    },
    deleteRemind (id) {
      this.$Modal.confirm({
        title: '请确认',
        content: '确认删除此提醒？',
        onOk: () => {
          this.$ajax('post', 'customer/customer/remind/delete/' + id).then(
            data => {
              this.viewRemind(this.remindForm.customer_id)
            }
          )
        },
        onCancel: () => {}
      })
    },
    viewMyRemind () {
      this.myRemind = true
      this.$ajax(
        'get',
        'customer/customer/remind',
        this.myRemindForm,
        'myRemindForm.loading'
      ).then(data => {
        this.myRemindForm.remindList = data.data.data
        this.myRemindForm.total = data.data.total
      })
    },
    changeMyRemind (page) {
      this.remindForm.page = page
      this.viewMyRemind()
    },
    deleteMyRemind (id) {
      this.$Modal.confirm({
        title: '请确认',
        content: '确认删除此提醒？',
        onOk: () => {
          this.$ajax('post', 'customer/customer/remind/delete/' + id).then(
            data => {
              this.viewMyRemind()
            }
          )
        },
        onCancel: () => {}
      })
    }
  }
}

</script>
