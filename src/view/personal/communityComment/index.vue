<style lang="stylus" scoped>
.creditmanagewrap
  display: flex
  .creditmanageleftwrap
    background: #67d2e2
    padding: 10px 10px 100px
    border-radius: 4px
    .creditmanagelefttit
      font-size: 20px
      font-weight: bold
      text-align: center
      margin-bottom: 8px
      i
        margin: 0 5px 0 0
    .creditmanageleftul
      background: #e0f6f9
      border: 1px solid #7f8384
      li
        padding: 3px 50px 3px 20px
        cursor: pointer
        &.hover
          background: #2da1ea
          color: #000
  .creditmanagerightwrap
    flex: auto
    .creditmanagerightitem
      .tit
        text-align: center
        padding-top: 15px
        margin-bottom: 40px
        span
          background: #666
          border-radius: 100px
          padding: 5px 15px
          font-size: 16px
          color: #fff
          display: inline-block
.commonmodalcenter
  padding: 0 0 18px
  .uploadcoveri
    animation: rotate 1s infinite
    font-size: 36px
  @keyframes rotate
    0%
      transform: rotate(0deg)
    100%
      transform: rotate(360deg)
  & >>> .commontablewrap
    padding: 10px 5px
    font-size: 14px
    color: #333
    .report_title
      font-size: 16px
    .star
      letter-spacing: 3px
      font-size: 16px
    .fl
      float: left
    .fr
      float: right
    .tc
      text-align: center
    .tr
      text-align: right
    .full
      width: 100% !important
    .half
      width: 50% !important
    .quarter
      width: 25% !important
    .half.quarter
      width: 12.5% !important
    .third
      width: 30% !important
    .border, table.border td
      border: 1px solid #97cdef
    .noborder
      border: none
    .bggray
      background: #f9f9f9
    .gray, .gray *
      color: #dededa
    .darkgray, .darkgray *
      color: #666
    .orange
      color: $basecolor
    .big_font
      font-size: 36px
      color: $basecolor
    .big_font_xl
      font-size: 46px
      color: $basecolor
    .big_font_title
      font-size: 32px
      color: #777
    table
      border-collapse: collapse
      margin-top: 20px
      td
        height: 40px
        position: relative
      .pd_x
        padding-left: 15px
        padding-right: 15px
      h2
        font-weight: normal
        font-size: 14px
        color: #196CE6 !important
    .title
      color: #196CE6
      line-height: 40px
      line-height: 40px
    .match_info
      background: #fff
      border: 1px dashed #e5e5e5
      padding: 10px
      line-height: 20px
    .bg_warn
      background: #f9f0e0
    .subtable
      margin: 0
      td
        height: 24px
        padding: 0 7px
        &:first-child
          border-width: 1px 0 1px 0
      tr
        &:first-child
          td
            border-top-width: 0
      .subtitle
        background: rgba(0, 0, 0, 0.03)
        padding: 0
    .subtabletwo
      margin: 0
      td
        &:first-child
          border-width: 1px 0 1px 0
      tr
        &:first-child
          td
            border-top-width: 0
      .subtitletwo
        background: #4e82d0
        color: #fff
        font-weight: bold
      .subtitlethree
        color: #196ce6
    .ratestarwrap
      & > div
        margin-right: 0
    .nowrap
      word-break: keep-all
      white-space: nowrap
    .progress
      position: absolute
      z-index: 0
      top: 0
      left: 0
      height: 100%
      background: #C9E4F5
      & + span
        position: relative
        z-index: 1
    /* .table.autohide tr:nth-child(n+8)
      display: none
    .table.autohide tr:last-child
      display: table-row
    .autohide_switch:before
      content: '点此收起'
    .table.autohide .autohide_switch:before
      content: '点此查看全部' */
    .chart
      width: 600px
      height: 400px
    h1
      font-weight: normal
      font-size: 20px
      margin-top: 30px
    .red
      color: red
    .help
      color: #fff
      background: #196CE6
      border-radius: 50%
      display: inline-block
      margin-left: 3px
      height: 16px
      line-height: 16px
      width: 16px
      text-align: center
      cursor: pointer
      font-weight: normal
      font-style: normal
</style>

<template>
  <div class="creditmanagewrap">
    <div class="creditmanageleftwrap">
      <div class="creditmanagelefttit">
        <i class="fa fa-search"></i>综合查询</div>
      <ul class="creditmanageleftul">
        <li v-for="nav in navList" @click="clickNav(nav.key)" :class="{active: curNav == nav.key}">{{nav.name}}</li>
      </ul>
    </div>
    <div class="creditmanagerightwrap">
      <div v-if="curNav == 'providentFund'" class="creditmanagerightitem" key="providentFund">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="providentFundForm" :rules="formRules" ref="providentFundForm" :label-width="110">
            <FormItem prop="city_code" label="城市：" class="formitemnoreddot">
              <Select @on-change="changeCity" v-model="providentFundForm.city_code" :loading="providentFundcityListLoading" loading-text="数据加载中" filterable placeholder="请选择城市">
                <Option  v-for="city in providentFundcityList" :value="city.area_code" :key="city.area_code">{{city.area_name}}</Option>
              </Select>
            </FormItem>
            <FormItem
              v-for="check in providentFundCheck.login_params"
              :label="check.label + '：'"
              :prop="check.name"
              :rules="{required: true, message: check.label + '不能为空', trigger: 'blur'}"
              :key="check.name"
              class="formitemnoreddot">
              <Input v-model.trim="providentFundForm[check.name]" :type="check.type" :placeholder="'请输入' + check.label"></Input>
            </FormItem>
            <div v-if="providentFundForm.isGetForm" style="text-align: center; margin-bottom: 30px;">
              <Button @click="providentFundFn" :loading="commonForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'socialSecurity'" class="creditmanagerightitem" key="socialSecurity">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="socialSecurityForm" :rules="formRules" ref="socialSecurityForm" :label-width="110">
            <FormItem prop="city_code" label="城市：" class="formitemnoreddot">
              <Select @on-change="socialSecurityChangeCity" v-model="socialSecurityForm.city_code" :loading="socialSecuritycityListLoading" loading-text="数据加载中" filterable placeholder="请选择城市">
                <Option  v-for="city in socialSecuritycityList" :value="city.area_code" :key="city.area_code">{{city.area_name}}</Option>
              </Select>
            </FormItem>
            <FormItem
              v-for="check in socialSecurityCheck.login_params"
              :label="check.label + '：'"
              :prop="check.name"
              :rules="{required: true, message: check.label + '不能为空', trigger: 'blur'}"
              :key="check.name"
              class="formitemnoreddot">
              <Input v-model.trim="socialSecurityForm[check.name]" :type="check.type" :placeholder="'请输入' + check.label"></Input>
            </FormItem>
            <div v-if="socialSecurityForm.isGetForm" style="text-align: center; margin-bottom: 30px;">
              <Button @click="socialSecurityFn" :loading="commonForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'centralBankCredit'" class="creditmanagerightitem" key="centralBankCredit">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <p style="text-align: center;">暂未开放...</p>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'lostLetter'" class="creditmanagerightitem" key="lostLetter">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="lostLetterForm" :rules="formRules" ref="lostLetterForm" :label-width="60">
            <FormItem prop="query_name" label="名称：" class="formitemnoreddot">
              <Input v-model.trim="lostLetterForm.query_name" placeholder="被查询人的真实姓名或机构名称"></Input>
            </FormItem>
            <FormItem prop="query_id" label="证号：" class="formitemnoreddot">
              <Input v-model.trim="lostLetterForm.query_id" placeholder="被查询人的身份证号或机构代码"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="lostLetterFn" :loading="lostLetterForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'operatorDetails'" class="creditmanagerightitem" key="operatorDetails">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="operatorDetailsForm" :rules="formRules" ref="operatorDetailsForm" :label-width="100">
            <FormItem prop="phone" label="手机号码：" class="formitemnoreddot">
              <Input v-model.trim="operatorDetailsForm.phone" placeholder="请输入待查的手机号"></Input>
            </FormItem>
            <FormItem prop="password" label="服务密码：" class="formitemnoreddot">
              <Input v-model.trim="operatorDetailsForm.password" type="password" placeholder="手机号登录运营商平台的密码"></Input>
            </FormItem>
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="operatorDetailsForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="operatorDetailsForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="operatorDetailsFn" :loading="commonForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'operatorReport'" class="creditmanagerightitem" key="operatorReport">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="operatorReportForm" :rules="formRules" ref="operatorReportForm" :label-width="100">
            <FormItem prop="phone" label="手机号码：" class="formitemnoreddot">
              <Input v-model.trim="operatorReportForm.phone" placeholder="请输入待查的手机号"></Input>
            </FormItem>
            <FormItem prop="password" label="服务密码：" class="formitemnoreddot">
              <Input v-model.trim="operatorReportForm.password" type="password" placeholder="手机号登录运营商平台的密码"></Input>
            </FormItem>
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="operatorReportForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="operatorReportForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="operatorReportFn" :loading="operatorReportForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'phoneTime'" class="creditmanagerightitem" key="phoneTime">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="phoneTimeForm" :rules="formRules" ref="phoneTimeForm" :label-width="100">
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="phoneTimeForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="phoneTimeForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <FormItem prop="mobile" label="手机号码：" class="formitemnoreddot">
              <Input v-model.trim="phoneTimeForm.mobile" placeholder="请输入手机号"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="phoneTimeFn" :loading="phoneTimeForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'phoneStatus'" class="creditmanagerightitem" key="phoneStatus">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="phoneStatusForm" :rules="formRules" ref="phoneStatusForm" :label-width="100">
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="phoneStatusForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="phoneStatusForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <FormItem prop="mobile" label="手机号码：" class="formitemnoreddot">
              <Input v-model.trim="phoneStatusForm.mobile" placeholder="请输入手机号"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="phoneStatusFn" :loading="phoneStatusForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'education'" class="creditmanagerightitem" key="education">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="educationForm" :rules="formRules" ref="educationForm" :label-width="100">
            <FormItem prop="account" label="学信网账号：" class="formitemnoreddot">
              <Input v-model.trim="educationForm.account" placeholder="请输入学信网登录账号"></Input>
            </FormItem>
            <FormItem prop="password" label="学信网密码：" class="formitemnoreddot">
              <Input v-model.trim="educationForm.password" type="password" placeholder="请输入学信网登录密码"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="educationFn" :loading="commonForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'taobao'" class="creditmanagerightitem" key="taobao">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="taobaoForm" :rules="formRules" ref="taobaoForm" :label-width="100">
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="taobaoForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="taobaoForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="taobaoFn" :loading="commonForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'taobaoReport'" class="creditmanagerightitem" key="taobaoReport">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="taobaoReportForm" :rules="formRules" ref="taobaoReportForm" :label-width="100">
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="taobaoReportForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="taobaoReportForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="taobaoReportFn" :loading="taobaoReportForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'alipay'" class="creditmanagerightitem" key="alipay">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="alipayForm" :rules="formRules" ref="alipayForm" :label-width="100">
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="alipayForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="alipayForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="alipayFn" :loading="alipayForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'jd'" class="creditmanagerightitem" key="jd">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="jdForm" :rules="formRules" ref="jdForm" :label-width="100">
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="jdForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="jdForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="jdFn" :loading="jdForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'jdReport'" class="creditmanagerightitem" key="jdReport">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="jdReportForm" :rules="formRules" ref="jdReportForm" :label-width="100">
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="jdReportForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="jdReportForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="jdReportFn" :loading="jdReportForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'bankCardAuth'" class="creditmanagerightitem" key="bankCardAuth">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="bankCardAuthForm" :rules="formRules" ref="bankCardAuthForm" :label-width="120">
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="bankCardAuthForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="bankCardAuthForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <FormItem prop="card_number" label="银行卡号：" class="formitemnoreddot">
              <Input v-model.trim="bankCardAuthForm.card_number" placeholder="请输入银行卡号"></Input>
            </FormItem>
            <FormItem prop="mobile" label="银行预留手机：" class="formitemnoreddot">
              <Input v-model.trim="bankCardAuthForm.mobile" placeholder="请输入银行预留手机"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="getBankCardIdentityBasic" :loading="commonForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'bankFlow'" class="creditmanagerightitem" key="bankFlow">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="bankFlowForm" :rules="formRules" ref="bankFlowForm" :label-width="110">
            <FormItem prop="account" label="网银账号：" class="formitemnoreddot">
              <Input v-model.trim="bankFlowForm.account" placeholder="请输入网银账号"></Input>
            </FormItem>
            <FormItem prop="password" label="网银密码：" class="formitemnoreddot">
              <Input v-model.trim="bankFlowForm.password" type="password" placeholder="请输入网银密码"></Input>
            </FormItem>
            <FormItem prop="name" label="姓名：" class="formitemnoreddot">
              <Input v-model.trim="bankFlowForm.name" placeholder="请输入姓名"></Input>
            </FormItem>
            <FormItem prop="idCard" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="bankFlowForm.idCard" placeholder="请输入身份证号"></Input>
            </FormItem>
            <FormItem prop="bankCard" label="银行卡卡号：" class="formitemnoreddot">
              <Input v-model.trim="bankFlowForm.bankCard" placeholder="请输入银行卡卡号"></Input>
            </FormItem>
            <FormItem prop="bankType" label="银行类型：" class="formitemnoreddot">
              <Select v-model="bankFlowForm.bankType" placeholder="请选择银行类型">
                <Option v-for="list in bankTypeArr" :value="list.value" :key="list.value">{{list.name}}</Option>
              </Select>
            </FormItem>
            <FormItem prop="cardType" label="卡类型：" class="formitemnoreddot">
              <Select v-model="bankFlowForm.cardType" placeholder="请选择卡类型">
                <Option v-for="list in bankCardTypeArr" :value="list.value" :key="list.value">{{list.name}}</Option>
              </Select>
            </FormItem>
            <FormItem prop="phone" label="银行预留手机：" class="formitemnoreddot">
              <Input v-model.trim="bankFlowForm.phone" placeholder="请输入银行预留手机"></Input>
            </FormItem>
            <FormItem prop="month" label="数据量：" class="formitemnoreddot">
              <Select v-model="bankFlowForm.month" placeholder="请选择数据量">
                <Option :value="6">6个月</Option>
                <Option :value="12">12个月</Option>
              </Select>
            </FormItem>
            <div style="text-align: center; margin-bottom: 30px;">
              <Button @click="bankFlowFn" :loading="bankFlowForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'probeReport'" class="creditmanagerightitem" key="probeReport">
        <div class="tit">
          <span>{{navList.find(e => e.key == curNav).name}}</span>
        </div>
        <Row>
          <Col span="12" offset="6">
          <Form :model="probeReportForm" :rules="formRules" ref="probeReportForm" :label-width="100">
            <FormItem prop="id_name" label="真实姓名：" class="formitemnoreddot">
              <Input v-model.trim="probeReportForm.id_name" placeholder="请输入真实姓名"></Input>
            </FormItem>
            <FormItem prop="id_number" label="身份证号码：" class="formitemnoreddot">
              <Input v-model.trim="probeReportForm.id_number" placeholder="请输入身份证号"></Input>
            </FormItem>
            <FormItem prop="mobile" label="手机号码：" class="formitemnoreddot">
              <Input v-model.trim="probeReportForm.mobile" placeholder="请输入手机号"></Input>
            </FormItem>
            <div style="text-align: center;">
              <Button @click="probeReportFn" :loading="probeReportForm.loading" type="primary" size="large">提交查询</Button>
            </div>
          </Form>
          </Col>
        </Row>
      </div>
    </div>

    <Modal
      v-model="resultModal"
      :mask-closable="false"
      :fullscreen="curNav == 'lostLetter' || curNav == 'jd' || curNav == 'jdReport' || curNav == 'probeReport' || curNav == 'operatorReport' || curNav == 'taobaoReport' || curNav == 'alipay' || curNav == 'bankFlow'"
      :width="600"
      ok-text="关闭"
      class-name="commonmodalwrap">
      <div class="commonmodalhead" slot="header">
        <p>{{navList.find(e => e.key == curNav).name}}(查询结果)</p>
      </div>
      <div class="commonmodalcenter">
        <!-- 查询结果 -->
        <div v-if="curNav == 'phoneTime'">
          <p>{{resultObj.hxsmsg}}</p>
        </div>
        <div v-if="curNav == 'phoneStatus'">
          <p>{{resultObj.hxsmsg}}</p>
        </div>
        <div v-if="curNav == 'lostLetter'">
          <Table :columns="lostLetterColumns" :data="resultObj.data" border></Table>
        </div>
        <div v-if="curNav == 'jd'">
          <div v-if="!jdForm.haveData" style="text-align: center;">
            <div v-if="jdForm.loading">
              <p>请使用京东APP进行扫码确认</p>
              <p style="margin-bottom: 30px; color: #e62121;">（扫码确认后一分钟内返回数据，请勿操作页面！）</p>
              <img v-if="jdForm.qrcode" :src="imgPreviewUrl + jdForm.qrcode" alt="">
              <div style="margin-top: 54px;">
                <Spin>
                  <i class="fa fa-spinner uploadcoveri"></i>
                  <p>数据获取中...</p>
                </Spin>
              </div>
            </div>
            <div v-else style="color: #f00; margin-top: 54px;">错误：获取京东数据失败，请点击右下角关闭按钮重新发起请求！</div>
          </div>
          <div v-else>
            <p style="margin: 20px 0 10px;">基本信息：</p>
            <Table :columns="jdBaseColumns" :data="resultObj.data.basicInfo ? [resultObj.data.basicInfo] : []" border></Table>
            <p style="margin: 20px 0 10px;">银行卡信息：</p>
            <Table :columns="jdBankColumns" :data="resultObj.data.bankInfo" border></Table>
            <p style="margin: 20px 0 10px;">白条信息：</p>
            <Table :columns="jdBaitiaoColumns" :data="resultObj.data.baiTiaoInfo ? [resultObj.data.baiTiaoInfo] : []" border></Table>
            <p style="margin: 20px 0 10px;">收货地址信息：</p>
            <Table :columns="jdAddressColumns" :data="resultObj.data.addressInfo ? resultObj.data.addressInfo : []" border></Table>
            <p style="margin: 20px 0 10px;">订单信息：</p>
            <Table :columns="jdOrderColumns" :data="resultObj.data.orderDetail" border></Table>
          </div>
        </div>
        <div v-if="curNav == 'jdReport'">
          <div v-if="!jdReportForm.haveData" style="text-align: center;">
            <div v-if="jdReportForm.loading">
              <p>请使用京东APP进行扫码确认</p>
              <p style="margin-bottom: 30px; color: #e62121;">（扫码确认后一分钟内返回数据，请勿操作页面！）</p>
              <img v-if="jdReportForm.qrcode" :src="imgPreviewUrl + jdReportForm.qrcode" alt="">
              <div style="margin-top: 54px;">
                <Spin>
                  <i class="fa fa-spinner uploadcoveri"></i>
                  <p>数据获取中...</p>
                </Spin>
              </div>
            </div>
            <div v-else style="color: #f00; margin-top: 54px;">错误：获取京东报告失败，请点击右下角关闭按钮重新发起请求！</div>
          </div>
          <div v-else><!--  :data="resultObj.data" -->
            <taobaoReportPanel type="jd"></taobaoReportPanel>
          </div>
        </div>
        <div v-if="curNav == 'probeReport'">
          <p v-if="resultObj.hxsmsg">{{resultObj.hxsmsg}}</p>
          <div v-if="!resultObj.hxsmsg && !Array.isArray(resultObj.data)">
            <p style="margin: 20px 0 10px;">周期评分：</p>
            <Table :columns="probeReportScoreColumns" :data="resultObj.data ? [resultObj.data] : []" border></Table>
            <p style="margin: 20px 0 10px;">报告基本信息：</p>
            <Table :columns="probeReportInfoColumns" :data="resultObj.data.report_info ? [resultObj.data.report_info] : []" border></Table>
            <p style="margin: 20px 0 10px;">运营商基本信息：</p>
            <Table :columns="probeReportBaseColumns" :data="resultObj.data.basic_info ? [resultObj.data.basic_info] : []" border></Table>
            <p style="margin: 20px 0 10px;">身份证匹配的其它手机号码：</p>
            <Table :columns="probeReportPhoneColumns" :data="resultObj.data.relationPhone_infos" border></Table>
            <div v-for="v in resultObj.data.mb_infos" style="padding: 25px 10px 10px; margin: 25px 0; border: 1px solid #dcdee2;">
              <div>
                <p style="font-weight: bold;">手机号：{{v.phone_number}}</p>
                <p style="font-weight: bold;">描述：{{v.describle}}</p>
              </div>
              <p style="margin: 20px 0 10px;">近一年借贷历史：</p>
              <Table height="580" :columns="probeReportSectionsColumns" :data="v.credit_info.sections" border></Table>
              <p style="margin: 20px 0 10px;">借贷中涉及的平台数统计：</p>
              <Table :columns="probeReportPlatformInfosColumns" :data="v.credit_info.platform_Infos" border></Table>
              <p style="margin: 20px 0 10px;">借贷事件数统计：</p>
              <Table :columns="probeReportEveSumsColumns" :data="v.credit_info.eveSums" border></Table>
              <p style="margin: 20px 0 10px;">参考统计变量：</p>
              <Table :columns="probeReportRefInfosColumns" :data="v.credit_info.refInfos" border></Table>
            </div>
          </div>
        </div>
        <div v-if="curNav == 'operatorReport'">
          <div style="text-align: center;">
            <p v-if="resultObj.hxsmsg" v-html="resultObj.hxsmsg"></p>
            <!-- <p v-if="operatorReportForm.step === 2" style="margin-top: 35px;">
              如已发送，请点击&nbsp;&nbsp;&nbsp;
              <Button @click="operatorMySendedBtn" type="primary">我已发送</Button>
            </p> -->
          </div>
          <div v-if="operatorReportForm.step === 3">
            <div v-if="!operatorReportForm.haveData">
              <Spin>
                <i class="fa fa-spinner uploadcoveri"></i>
                <p>数据获取中...</p>
              </Spin>
            </div>
            <div v-else>
              <!-- report start -->
              <operatorReportPanel :data="resultObj.data"></operatorReportPanel>
              <!-- end -->
            </div>
          </div>
        </div>
        <div v-if="curNav == 'taobaoReport'">
          <div v-if="!taobaoReportForm.haveData" style="text-align: center;">
            <div v-if="taobaoReportForm.loading">
              <p>请使用淘宝APP进行扫码确认</p>
              <p style="margin-bottom: 30px; color: #e62121;">（扫码确认后一分钟内返回数据，请勿操作页面！）</p>
              <img v-if="taobaoReportForm.qrcode" :src="imgPreviewUrl + taobaoReportForm.qrcode" alt="">
              <div style="margin-top: 54px;">
                <Spin>
                  <i class="fa fa-spinner uploadcoveri"></i>
                  <p>数据获取中...</p>
                </Spin>
              </div>
            </div>
            <div v-else style="color: #f00; margin-top: 54px;">错误：获取淘宝数据失败，请点击右下角关闭按钮重新发起请求！</div>
          </div>
          <div v-else>
            <taobaoReportPanel :data="resultObj.data"></taobaoReportPanel>
          </div>
        </div>
        <div v-if="curNav == 'alipay'">
          <div v-if="!alipayForm.haveData" style="text-align: center;">
            <div v-if="alipayForm.loading">
              <p>请使用支付宝APP进行扫码确认</p>
              <p v-if="resultObj.hxsmsg" style="color: #f00; font-size: 22px; margin: 10px 0;">{{resultObj.hxsmsg}}</p>
              <p style="margin-bottom: 30px; color: #e62121;">（扫码确认后一分钟内返回数据，请勿操作页面！）</p>
              <img v-if="alipayForm.qrcode" :src="imgPreviewUrl + alipayForm.qrcode" alt="">
              <div style="margin-top: 54px;">
                <Spin>
                  <i class="fa fa-spinner uploadcoveri"></i>
                  <p>数据获取中...</p>
                </Spin>
              </div>
            </div>
            <div v-else style="color: #f00; margin-top: 54px;">错误：获取支付宝数据失败，请点击右下角关闭按钮重新发起请求！</div>
          </div>
          <div v-else>
            <alipayPanel :data="resultObj.data"></alipayPanel>
          </div>
        </div>
      </div>
    </Modal>

    <!-- v2 版结果弹窗 -->
    <Modal
      v-model="resultModalV2"
      :mask-closable="false"
      :fullscreen="true"
      ok-text="关闭"
      class-name="commonmodalwrap">
      <div class="commonmodalhead" slot="header">
        <p>{{navList.find(e => e.key == curNav).name}}（查询结果）</p>
      </div>
      <div class="commonmodalcenter">
        <!-- 请求过程 -->
        <div v-if="commonForm.loading" style="text-align: center;">
          <div style="margin-top: 54px;">
            <Spin>
              <i class="fa fa-spinner uploadcoveri"></i>
              <p>数据获取中...</p>
            </Spin>
          </div>
        </div>
        <!-- 获得结果 -->
        <div v-else>
          <!-- 没有错误 -->
          <div v-if="!commonForm.errorMsg">
            <!-- 当有数据才展示数据 避免报错 -->
            <Button type="primary" style="margin: 0 0 20px 20px" @click="getPdf(navList.find(e => e.key == curNav).name)">导出PDF</Button>
            <div id="pdfDom" v-if="commonForm.data">
              <div v-if="curNav == 'education'">
                <p style="font-size: 18px; font-weight: bold; margin: 10px 0;">个人信息：</p>
                <div><img :src="commonForm.data.img_photo" alt="" style="margin-right: 70px;"><img :src="commonForm.data.img_info" alt=""></div>
                <p style="font-size: 18px; font-weight: bold; margin: 10px 0;">学历信息：</p>
                <div><img :src="commonForm.data.student_img_photo" alt="" style="margin-right: 70px;"><img :src="commonForm.data.student_img_info" alt=""></div>
              </div>
              <div v-if="curNav == 'taobao'">
                <taobaoPanel :data="commonForm.data"></taobaoPanel>
              </div>
              <div v-if="curNav == 'operatorDetails'">
                <operatorDetailsPanel :data="commonForm.data"></operatorDetailsPanel>
              </div>
              <div v-if="curNav == 'bankFlow'">
                <bankFlowPanel :data="commonForm.data"></bankFlowPanel>
              </div>
              <div v-if="curNav == 'providentFund'">
                <providentFundPanel :key="0" :data="commonForm.data"></providentFundPanel>
              </div>
              <div v-if="curNav == 'socialSecurity'">
                <socialSecurityPanel :key="0" :data="commonForm.data"></socialSecurityPanel>
              </div>
              <div v-if="curNav == 'bankCardAuth'">
                <bankCardAuthPanel :key="bankCardAuthKey" :data="commonForm.data"></bankCardAuthPanel>
              </div>
            </div>
          </div>
          <!-- 有错误 -->
          <div v-else style="color: #f00; margin-top: 54px; text-align: center;">{{commonForm.errorMsg}}</div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { checkPhone } from '@/common/lib/check'
import operatorReportPanel from '@/components/personalModal/operatorReportPanel'
import taobaoReportPanel from '@/components/personalModal/taobaoReportPanel'
import alipayPanel from '@/components/personalModal/alipayPanel'
import bankFlowPanel from '@/components/personalModal/bankFlowPanel'
import taobaoPanel from '@/components/personalModal/taobaoPanel'
import operatorDetailsPanel from '@/components/personalModal/operatorDetailsPanel'
import providentFundPanel from '@/components/personalModal/providentFundPanel'
import socialSecurityPanel from '@/components/personalModal/socialSecurityPanel'
import bankCardAuthPanel from '@/components/personalModal/bankCardAuthPanel'

export default {
  name: 'CreditManage',
  data () {
    const validateIdNo = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('身份证号码不能为空'))
      } else if (value.length == 15) {
        callback()
      } else if (value.length == 18) {
        callback()
      } else {
        callback(new Error('身份证号码位数错误'))
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号码不能为空'))
      } else if (checkPhone(value)) {
        callback()
      } else {
        callback(new Error('手机号码错误'))
      }
    }

    const mLv = (value) => {
      switch (value) {
        case 'A' : value = '0-500元'; break
        case 'B' : value = '500-1000 元'; break
        case 'C' : value = '1000-3000 元'; break
        case 'D' : value = '3000-10000 元'; break
        case 'E' : value = '大于 10000 元'; break
      }
      return value
    }

    const tLv = (value) => {
      switch (value) {
        case 'A' : value = '1 天'; break
        case 'B' : value = '2-7 天'; break
        case 'C' : value = '8-31 天'; break
        case 'D' : value = '32-62 天'; break
        case 'E' : value = '63-92 天'; break
        case 'F' : value = '大于 92 天'; break
      }
      return value
    }

    const dLv = (value) => {
      switch (value) {
        case 'm24' : value = '最近 24 个月'; break
        case 'm12' : value = '最近 12 个月'; break
        case 'm6' : value = '最近 6 个月'; break
        case 'm3' : value = '最近 3 个月'; break
        case 'm1' : value = '最近 1 个月'; break
      }
      return value
    }
    return {
      imgPreviewUrl: $conf.baseUrl + 'oss/preview?is_img=true&hash=',
      curNav: 'socialSecurity',
      navList: [
        { name: '公积金查询', key: 'providentFund' },
        { name: '社保查询', key: 'socialSecurity' },
        { name: '失信被执行查询', key: 'lostLetter' },
        { name: '运营商详单', key: 'operatorDetails' },
        { name: '运营商报告', key: 'operatorReport' },
        { name: '手机号在网时长查询', key: 'phoneTime' },
        { name: '手机号在网状态查询', key: 'phoneStatus' },
        { name: '学历查询', key: 'education' },
        { name: '淘宝查询', key: 'taobao' },
        { name: '淘宝报告', key: 'taobaoReport' },
        { name: '支付宝查询', key: 'alipay' },
        { name: '京东查询', key: 'jd' },
        { name: '京东报告', key: 'jdReport' },
        { name: '银行卡鉴权', key: 'bankCardAuth' },
        { name: '银行流水', key: 'bankFlow' },
        { name: '银真多头借贷报告', key: 'probeReport' }
      ],
      formRules: {
        id_name: [
          { required: true, message: '真实姓名不能为空', trigger: 'blur' }
        ],
        id_number: [
          { validator: validateIdNo, trigger: 'blur' }
        ],
        idCard: [
          { validator: validateIdNo, trigger: 'blur' }
        ],
        mobile: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        account: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        bankCard: [
          { required: true, message: '银行卡号不能为空', trigger: 'blur' }
        ],
        card_number: [
          { required: true, message: '银行卡号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        bankType: [
          { required: true, message: '请选择银行类型', trigger: 'change' }
        ],
        cardType: [
          { required: true, message: '请选择卡类型', trigger: 'change' }
        ],
        month: [
          { required: true, type: 'number', message: '请选择数据量', trigger: 'change' }
        ],
        query_name: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
        ],
        query_id: [
          { required: true, message: '证号不能为空', trigger: 'blur' }
        ],
        city_code: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ]
      },
      // 第二版 start
      // 控制结果面板V2版本
      resultModalV2: false,
      // 公共表单
      commonForm: {},
      educationForm: {
        account: '',
        password: ''
      },
      taobaoForm: {
        id_name: '',
        id_number: ''
      },
      operatorDetailsForm: {
        id_name: '',
        id_number: '',
        phone: '',
        password: '',
        mobile_province: '',
        mobile_type: ''
      },
      bankTypeArr: [],
      bankCardTypeArr: [],
      bankFlowForm: {
        account: '',
        password: '',
        name: '',
        idCard: '',
        bankCard: '',
        bankType: '',
        cardType: '',
        phone: '',
        month: 12
      },
      providentFundForm: {
        city_code: '',
        login_type: '',
        isGetForm: false
      },
      providentFundcityList: [],
      providentFundcityListLoading: false,
      providentFundCheck: {},
      socialSecurityForm: {
        city_code: '',
        login_type: '',
        isGetForm: false
      },
      socialSecuritycityList: [],
      socialSecuritycityListLoading: false,
      socialSecurityCheck: {},
      bankCardAuthForm: {
        id_name: '',
        id_number: '',
        card_number: '',
        mobile: ''
      },
      bankCardAuthKey: 0,
      // 第二版 end

      // 控制结果面板
      resultModal: false,
      // 结果集
      resultObj: {},
      phoneTimeForm: {
        id_name: '',
        id_number: '',
        mobile: '',
        loading: false
      },
      phoneStatusForm: {
        id_name: '',
        id_number: '',
        mobile: '',
        loading: false
      },
      lostLetterForm: {
        query_name: '',
        query_id: '',
        loading: false
      },
      lostLetterColumns: [
        {
          title: '序号',
          key: 'no',
          width: 124
        },
        {
          title: '被执行人姓名/名称',
          key: 'name',
          width: 160
        },
        {
          title: '性别(个人)',
          key: 'sex',
          width: 110
        },
        {
          title: '年龄(个人)',
          key: 'age',
          width: 110
        },
        {
          title: '身份证号码/组织机构代码',
          key: 'identityNo',
          width: 200
        },
        {
          title: '执行法院',
          key: 'executiveCourt',
          width: 200
        },
        {
          title: '省份',
          key: 'province',
          width: 80
        },
        {
          title: '执行依据文号',
          key: 'executiveBaiscNo',
          width: 240
        },
        {
          title: '立案时间',
          key: 'filingTime',
          width: 120
        },
        {
          title: '案号',
          key: 'caseNO',
          width: 220
        },
        {
          title: '做出执行依据单位',
          key: 'executiveArm',
          width: 200
        },
        {
          title: '生效法律文书确定的义务',
          key: 'legalObligation',
          width: 200
        },
        {
          title: '被执行人的履行情况',
          key: 'executiveCase',
          width: 200
        },
        {
          title: '已履行',
          key: 'executed',
          width: 220
        },
        {
          title: '未履行',
          key: 'unExecuted',
          width: 200
        },
        {
          title: '具体情形',
          key: 'specificSituation',
          width: 200
        },
        {
          title: '发布时间',
          key: 'releaseTime',
          width: 120
        },
        {
          title: '公司法人',
          key: 'corpLegalPerson',
          width: 100
        }
      ],
      jdForm: {
        id_name: '',
        id_number: '',
        loading: false,
        // 每次请求前需重置以下数据
        qrcode: '',
        haveData: 0,
        getDataed: false
      },
      jdReportForm: {
        id_name: '',
        id_number: '',
        loading: false,
        // 每次请求前需重置以下数据
        qrcode: '',
        haveData: 0,
        getDataed: false
      },
      jdBaseColumns: [
        {
          title: '会员名',
          key: 'nickName'
        },
        {
          title: '会员等级',
          key: 'vipLevel'
        },
        {
          title: '手机号',
          key: 'mobileNo'
        },
        {
          title: '邮箱',
          key: 'email'
        },
        {
          title: '真实姓名',
          key: 'realName'
        },
        {
          title: '证件号码',
          key: 'idCard'
        },
        {
          title: '成长值',
          key: 'growthValue'
        },
        {
          title: '安全等级',
          key: 'securityLevel'
        }
      ],
      jdBankColumns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '银行卡',
          key: 'bankCardID'
        },
        {
          title: '银行卡类型',
          key: 'cardType'
        },
        {
          title: '电话',
          key: 'tel'
        }
      ],
      jdBaitiaoColumns: [
        {
          title: '总额度',
          key: 'creditlimit'
        },
        {
          title: '可用额度',
          key: 'availablelimit'
        },
        {
          title: '是否开通',
          key: 'isOpen'
        },
        {
          title: '月还歀',
          key: 'monthloan'
        },
        {
          title: '白条消费',
          key: 'biaoTiaoConSum'
        },
        {
          title: '小白信用',
          key: 'xiaoBaiCreditValue'
        }
      ],
      jdAddressColumns: [
        {
          title: '收货地址',
          key: 'address'
        },
        {
          title: '联系人',
          key: 'linkman'
        },
        {
          title: '电话',
          key: 'tel'
        }
      ],
      jdOrderColumns: [
        {
          title: '商品名称',
          key: 'goodsName'
        },
        {
          title: '收货人地址',
          key: 'consigneeAddr'
        },
        {
          title: '订单时间',
          key: 'orderDate'
        },
        {
          title: '订单金额',
          key: 'orderMoney'
        },
        {
          title: '收货人',
          key: 'consigneePerson'
        },
        {
          title: '收货电话',
          key: 'tel'
        },
        {
          title: '订单状态',
          key: 'orderStatus'
        },
        {
          title: '支付类型',
          key: 'payType'
        }
      ],
      probeReportForm: {
        id_name: '',
        id_number: '',
        mobile: '',
        loading: false
      },
      probeReportScoreColumns: [
        {
          title: '长周期评分',
          key: 'score_l'
        },
        {
          title: '短周期评分',
          key: 'score_s'
        }
      ],
      probeReportInfoColumns: [
        {
          title: '编号',
          key: 'report_no'
        },
        {
          title: '报告时间',
          key: 'time'
        }
      ],
      probeReportBaseColumns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '身份证号',
          key: 'idcard'
        },
        {
          title: '身份证归属地',
          key: 'idcard_location'
        },
        {
          title: '所属运营商类型',
          key: 'operator_type'
        },
        {
          title: '本机号码',
          key: 'phone_number'
        },
        {
          title: '本机号码归属地',
          key: 'phone_number_location'
        }
      ],
      probeReportPhoneColumns: [
        {
          title: '手机号码',
          key: 'phone_number'
        },
        {
          title: '手机号归属地',
          key: 'phone_number_location'
        },
        {
          title: '运营商类型',
          key: 'operator_type'
        },
        {
          title: '最近一次出现时间',
          key: 'recent_time'
        }
      ],
      probeReportSectionsColumns: [
        {
          title: '时间段',
          key: 'section_name',
          width: 160
        },
        {
          title: '验证码通知次数',
          key: 'verif_count',
          width: 140
        },
        {
          title: '注册次数',
          key: 'register_count',
          width: 96
        },
        {
          title: '申请次数',
          key: 'apply_request_count',
          width: 96
        },
        {
          title: '申请平均金额',
          key: 'apply_request_average_level',
          width: 126,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.apply_request_average_level))
          }
        },
        {
          title: '申请被拒绝次数',
          key: 'apply_reject_count',
          width: 140
        },
        {
          title: '借款发放次数',
          key: 'loan_offer_count',
          width: 126
        },
        {
          title: '借款发放平均金额',
          key: 'loan_offer_average_level',
          width: 156,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.loan_offer_average_level))
          }
        },
        {
          title: '扣款失败次数',
          key: 'repay_fail_count',
          width: 126
        },
        {
          title: '扣款失败平均金额',
          key: 'repay_fail_average_level',
          width: 156,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.repay_fail_average_level))
          }
        },
        {
          title: '还款提醒次数',
          key: 'repay_remind_count',
          width: 126
        },
        {
          title: '还款提醒平均金额',
          key: 'repay_remind_average_level',
          width: 156,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.repay_remind_average_level))
          }
        },
        {
          title: '逾期提醒次数',
          key: 'overdue_count',
          width: 126
        },
        {
          title: '逾期提醒平均金额',
          key: 'overdue_average_level',
          width: 156,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.overdue_average_level))
          }
        },
        {
          title: '最大逾期时长',
          key: 'overdue_maxdelay_level',
          width: 126,
          render: (h, params) => {
            return h('div', {}, tLv(params.row.overdue_maxdelay_level))
          }
        },
        {
          title: '逾期已还次数',
          key: 'overdue_repay_count',
          width: 126
        },
        {
          title: '逾期已还平均金额',
          key: 'overdue_repay_average_level',
          width: 156,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.overdue_repay_average_level))
          }
        },
        {
          title: '最大逾期已还时长',
          key: 'overdue_repay_maxdelay_level',
          width: 156,
          render: (h, params) => {
            return h('div', {}, tLv(params.row.overdue_repay_maxdelay_level))
          }
        }
      ],
      probeReportPlatformInfosColumns: [
        {
          title: '时间段',
          key: 'slice_name',
          render: (h, params) => {
            return h('div', {}, dLv(params.row.slice_name))
          }
        },
        {
          title: '验证码通知涉及的平台数目',
          key: 'verif_count'
        },
        {
          title: '注册涉及的平台数目',
          key: 'register_count'
        },
        {
          title: '申请涉及的平台数目',
          key: 'apply_request_count'
        },
        {
          title: '申请被拒绝涉及的平台数目',
          key: 'apply_reject_count'
        },
        {
          title: '借款发放涉及的平台数目',
          key: 'loan_offer_count'
        },
        {
          title: '扣款失败涉及的平台数目',
          key: 'repay_fail_count'
        },
        {
          title: '逾期提醒涉及的平台数目',
          key: 'overdue_count'
        },
        {
          title: '逾期并且还清的平台数目',
          key: 'overdue_replay_count'
        },
        {
          title: '还款提醒涉及的平台数目',
          key: 'repay_remind_count'
        }
      ],
      probeReportEveSumsColumns: [
        {
          title: '时间段',
          key: 'slice_name',
          render: (h, params) => {
            return h('div', {}, dLv(params.row.slice_name))
          }
        },
        {
          title: '验证码通知事件数',
          key: 'verif_sum'
        },
        {
          title: '注册事件数',
          key: 'register_sum'
        },
        {
          title: '申请事件数',
          key: 'apply_request_sum'
        },
        {
          title: '申请被拒绝事件数',
          key: 'apply_reject_sum'
        },
        {
          title: '借款发放事件数',
          key: 'loan_offer_sum'
        },
        {
          title: '扣款失败事件数',
          key: 'repay_fail_sum'
        },
        {
          title: '还款提醒事件数',
          key: 'repay_remind_sum'
        },
        {
          title: '逾期事件数',
          key: 'overdue_sum'
        },
        {
          title: '逾期已还事件数',
          key: 'overdue_repay_sum'
        }
      ],
      probeReportRefInfosColumns: [
        {
          title: '时间段',
          key: 'slice_name',
          width: 116,
          render: (h, params) => {
            return h('div', {}, dLv(params.row.slice_name))
          }
        },
        {
          title: '最大逾期时长',
          key: 'max_overdue_delay_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, tLv(params.row.max_overdue_delay_level))
          }
        },
        {
          title: '最大逾期金额',
          key: 'max_overdue_amount_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.max_overdue_amount_level))
          }
        },
        {
          title: '最大还款提醒金额',
          key: 'max_repay_amount_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.max_repay_amount_level))
          }
        },
        {
          title: '最大放款金额',
          key: 'max_loan_offer_amount_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.max_loan_offer_amount_level))
          }
        },
        {
          title: '最大借款申请金额',
          key: 'max_apply_request_amount_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.max_apply_request_amount_level))
          }
        },
        {
          title: '最大逾期已还时长',
          key: 'max_overdue_repay_delay_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, tLv(params.row.max_overdue_repay_delay_level))
          }
        },
        {
          title: '最大逾期已还金额',
          key: 'max_overdue_repay_amount_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.max_overdue_repay_amount_level))
          }
        },
        {
          title: '平均逾期时长',
          key: 'ave_overdue_delay_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, tLv(params.row.ave_overdue_delay_level))
          }
        },
        {
          title: '平均逾期金额',
          key: 'ave_overdue_amount_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.ave_overdue_amount_level))
          }
        },
        {
          title: '平均还款提醒金额',
          key: 'ave_repay_amount_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.ave_repay_amount_level))
          }
        },
        {
          title: '平均放款金额',
          key: 'ave_loan_offer_amount_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.ave_loan_offer_amount_level))
          }
        },
        {
          title: '平均借款申请金额',
          key: 'ave_apply_request_amount_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.ave_apply_request_amount_level))
          }
        },
        {
          title: '平均逾期已还时长',
          key: 'ave_overdue_repay_delay_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, tLv(params.row.ave_overdue_repay_delay_level))
          }
        },
        {
          title: '平均逾期已还金额',
          key: 'ave_overdue_repay_amount_level',
          width: 116,
          render: (h, params) => {
            return h('div', {}, mLv(params.row.ave_overdue_repay_amount_level))
          }
        }
      ],
      operatorReportForm: {
        id_name: '',
        id_number: '',
        phone: '',
        password: '',
        province: '',
        type: '',
        loading: false,
        // 每次请求前需重置以下数据
        step: 1,
        code: '',
        haveData: 0,
        getDataed: false
      },
      taobaoReportForm: {
        id_name: '',
        id_number: '',
        loading: false,
        // 每次请求前需重置以下数据
        qrcode: '',
        haveData: 0,
        getDataed: false
      },
      alipayForm: {
        id_name: '',
        id_number: '',
        loading: false,
        // 每次请求前需重置以下数据
        qrcode: '',
        haveData: 0,
        getDataed: false
      }
    }
  },
  inject: ['reload'],
  components: { operatorReportPanel, taobaoReportPanel, alipayPanel, bankFlowPanel, taobaoPanel, operatorDetailsPanel, providentFundPanel, socialSecurityPanel, bankCardAuthPanel },
  beforeMount () {
    this.initResultObj()
    this.initCommonForm()

    this.getBankType()
    this.getBankCardType()
    if (this.curNav == 'providentFund') {
      this.getCityList()
    }
    if (this.curNav == 'socialSecurity') {
      this.socialSecurityGetCityList()
    }
  },
  methods: {
    // 第二版 start
    // 重置公共表单
    initCommonForm () {
      this.commonForm = {
        loading: false, // 一个接口一整套流程的加载状态
        errorMsg: '', // 加载错误时的错误信息
        data: null, // 存放获取结果
        token: '',
        smsCode: '',
        captchaCode: '',
        verImgSrc: ''
      }
    },
    // 请求错误处理
    commonSendErrorFnV2 (word) {
      this.commonForm.loading = false
      this.commonForm.errorMsg = word
      this.$Message.error(word)
    },
    // 开始查询公共方法v2版本
    commonFnV2 (u, u2, f) {
      this.$refs[f].validate(valid => {
        if (valid) {
          // 查询前重置commonForm
          this.initCommonForm()
          this.commonForm.loading = true
          // 打开结果面板
          this.resultModalV2 = true
          this.$ajax('post', u, this[f]).then(data => {
            if (data.token) {
              this.commonForm.token = data.token
              this.commonLoopFnV2(u2, f)
            } else {
              this.commonSendErrorFnV2(data.message)
            }
          }).catch(err => {
            this.commonSendErrorFnV2(err.message || '网络请求错误，请重试！')
          })
        }
      })
    },
    commonLoopFnV2 (u2, f) {
      // 结果面板打开状态才执行
      if (!this.resultModalV2) {
        return
      }
      let loopFn = () => {
        this.$ajax('post', u2, { ...this[f], ...this.commonForm }).then(data => {
          let Odata = data.data
          if (Odata.code === '0000') {
            // 成功获取数据 停止请求
            this.commonForm.data = Odata.data
            this.commonForm.loading = false
          } else if (Odata.code === '0001') {
            // 输入短信验证码 继续轮询
            this.commonOpenVerCodeIptV2(...arguments)
          } else if (Odata.code === '0012') {
            // 输入图形验证码 继续轮询
            this.commonForm.verImgSrc = Odata.img
            if (this.curNav == 'taobao') {
              this.commonOpenQRCodeV2(...arguments)
            } else {
              this.commonOpenImgVerCodeIptV2(...arguments)
            }
          } else {
            // 继续轮询
            setTimeout(() => {
              this.commonLoopFnV2(...arguments)
            }, 3000)
          }
        }).catch(err => {
          this.commonSendErrorFnV2(err.message || '网络请求错误，请重试！')
        })
      }
      loopFn()
    },
    // 打开验证码输入框
    commonOpenVerCodeIptV2 (u2, f) {
      this.$Modal.warning({
        title: '请输入验证码',
        render: (h) => {
          return h('Input', {
            props: {
              value: this.commonForm.smsCode,
              autofocus: true,
              placeholder: '请输入手机收到的验证码'
            },
            attrs: {
              style: 'margin-top: 16px;'
            },
            on: {
              input: (val) => {
                this.commonForm.smsCode = val
              }
            }
          })
        },
        onOk: () => {
          // 验证码不为空才请求 为空再次弹出输入框
          if (!this.commonForm.smsCode) {
            this.$nextTick(() => {
              setTimeout(() => {
                this.commonOpenVerCodeIptV2(...arguments)
              }, 300)
            })
            this.$Message.error('验证码不能为空，请重新输入！')
          } else {
            this.commonLoopFnV2(...arguments)
          }
        }
      })
    },
    // 打开图形验证码输入框
    commonOpenImgVerCodeIptV2 (u2, f) {
      this.$Modal.warning({
        title: '请输入图形验证码',
        render: (h) => {
          return h('div', {

          }, [
            h('img', {
              attrs: {
                src: this.commonForm.verImgSrc,
                style: 'margin: 15px auto 4px; display: block;'
              }
            }),
            h('Input', {
              props: {
                value: this.commonForm.captchaCode,
                autofocus: true,
                placeholder: '请输入图片上的验证码'
              },
              attrs: {
                style: 'margin-top: 16px;'
              },
              on: {
                input: (val) => {
                  this.commonForm.captchaCode = val
                }
              }
            })
          ])
        },
        onOk: () => {
          // 验证码不为空才请求 为空再次弹出输入框
          if (!this.commonForm.captchaCode) {
            this.$nextTick(() => {
              setTimeout(() => {
                this.commonOpenImgVerCodeIptV2(...arguments)
              }, 300)
            })
            this.$Message.error('验证码不能为空，请重新输入！')
          } else {
            this.commonLoopFnV2(...arguments)
          }
        }
      })
    },
    // 打开二维码扫描框
    commonOpenQRCodeV2 (u2, f) {
      let typeStr = this.curNav == 'taobao' ? '淘宝' : '相应'
      this.$Modal.warning({
        title: '请使用' + typeStr + 'APP进行扫码',
        render: (h) => {
          return h('div', {

          }, [
            h('img', {
              attrs: {
                src: this.commonForm.verImgSrc,
                style: 'margin: 15px auto 4px; display: block;'
              }
            }),
            h('p', {
              attrs: {
                style: 'margin-top: 7px; color: #f00; text-align: center;'
              }
            }, '扫描以上二维码后，再点击确定按钮！')
          ])
        },
        onOk: () => {
          this.commonLoopFnV2(...arguments)
        }
      })
    },
    educationFn () {
      this.commonFnV2('tz/xuexin/task/submit', 'tz/xuexin/get/info', 'educationForm')
    },
    taobaoFn () {
      this.commonFnV2('tz/taobao/task/submit', 'tz/taobao/get/info', 'taobaoForm')
    },
    operatorDetailsFn () {
      this.$refs.operatorDetailsForm.validate(valid => {
        if (valid) {
          this.commonForm.loading = true
          // 打开结果面板
          this.resultModalV2 = true
          this.$ajax('post', 'tz/mobiledetail/get/area', this.operatorDetailsForm).then(data => {
            let Odata = data.data
            if (Odata.province && Odata.type) {
              if (Odata.province + Odata.type == '吉林电信') {
                this.commonSendErrorFnV2('暂不支持吉林电信的手机号码查询！')
              } else {
                this.operatorDetailsForm.mobile_province = Odata.province
                this.operatorDetailsForm.mobile_type = Odata.type
                this.commonFnV2('tz/mobiledetail/task/submit', 'tz/mobiledetail/get/info', 'operatorDetailsForm')
              }
            } else {
              this.commonSendErrorFnV2('未查到手机号相关信息！')
            }
          }).catch(err => {
            this.commonSendErrorFnV2(err.message || '网络请求错误，请重试！')
          })
        }
      })
    },
    getBankType () {
      this.$ajax('get', 'tz/bank/run/bank/type').then(data => {
        this.bankTypeArr = data.data
      })
    },
    getBankCardType () {
      this.$ajax('get', 'tz/bank/run/card/type').then(data => {
        this.bankCardTypeArr = data.data
      })
    },
    bankFlowFn () {
      this.commonFnV2('tz/bank/run/task/submit', 'tz/bank/run/get/info', 'bankFlowForm')
    },
    getCityList () {
      this.$ajax('get', 'tz/gongjijin/get/city', 'providentFundcityListLoading').then(data => {
        let tempArr = data.data.filter(e => e.area_name == '深圳')
        this.providentFundcityList = tempArr
      })
    },
    changeCity (code) {
      this.providentFundForm.isGetForm = false
      this.$ajax('get', 'tz/gongjijin/get/city/param', { city_code: code }).then(data => {
        this.providentFundCheck = data.data[0]
        let len = this.providentFundCheck.login_params.length
        for (let i = 0; i < len; i++) {
          this.$set(this.providentFundForm, this.providentFundCheck.login_params[i].name)
        }
        this.providentFundForm.isGetForm = true
        this.providentFundForm.login_type = this.providentFundCheck.login_type
      })
    },
    providentFundFn () {
      this.commonFnV2('tz/gongjijin/task/submit', 'tz/gongjijin/get/info', 'providentFundForm')
    },
    clickNav (nav) {
      this.curNav = nav
      if (this.curNav == 'providentFund' && this.providentFundcityList.length == 0) {
        this.getCityList()
      }
      if (this.curNav == 'socialSecurity' && this.socialSecuritycityList.length == 0) {
        this.socialSecurityGetCityList()
      }
    },
    socialSecurityGetCityList () {
      this.$ajax('get', 'tz/shebao/get/city', 'socialSecuritycityListLoading').then(data => {
        let tempArr = data.data.filter(e => e.area_name == '深圳')
        this.socialSecuritycityList = tempArr
      })
    },
    socialSecurityChangeCity (code) {
      this.socialSecurityForm.isGetForm = false
      this.$ajax('get', 'tz/shebao/get/city/param', { city_code: code }).then(data => {
        this.socialSecurityCheck = data.data[0]
        let len = this.socialSecurityCheck.login_params.length
        for (let i = 0; i < len; i++) {
          this.$set(this.socialSecurityForm, this.socialSecurityCheck.login_params[i].name)
        }
        this.socialSecurityForm.isGetForm = true
        this.socialSecurityForm.login_type = this.socialSecurityCheck.login_type
      })
    },
    socialSecurityFn () {
      this.commonFnV2('tz/shebao/task/submit', 'tz/shebao/get/info', 'socialSecurityForm')
    },
    getBankCardIdentityBasic () {
      this.$refs.bankCardAuthForm.validate(valid => {
        if (valid) {
          this.initCommonForm()
          // 打开结果面板
          this.resultModalV2 = true
          this.$ajax('post', 'tz/identity/info/bank/four', this.bankCardAuthForm, 'commonForm.loading').then(data => {
            this.commonForm.data = {}
            this.commonForm.data.four = data.data
            this.bankCardAuthKey++
            this.$ajax('post', 'tz/identity/info/basic', this.bankCardAuthForm).then(data => {
              this.commonForm.data.basic = data.data
              this.bankCardAuthKey++
            })
            this.$ajax('post', 'tz/identity/info/photo', this.bankCardAuthForm).then(data => {
              this.commonForm.data.photo = data.data
              this.bankCardAuthKey++
            })
            this.$ajax('post', 'tz/identity/info/bank/two', this.bankCardAuthForm).then(data => {
              this.commonForm.data.two = data.data
              this.bankCardAuthKey++
            })
            this.$ajax('post', 'tz/identity/info/bank/three', this.bankCardAuthForm).then(data => {
              this.commonForm.data.three = data.data
              this.bankCardAuthKey++
            })
            this.$ajax('post', 'tz/identity/info/mobile', this.bankCardAuthForm).then(data => {
              this.commonForm.data.mobile = data.data
              this.bankCardAuthKey++
            })
            console.log(this.commonForm.data)
          }).catch(err => {
            this.commonSendErrorFnV2(err.message || '网络请求错误，请重试！')
          })
        }
      })
    },
    // 第二版 end

    // 重置结果对象
    initResultObj () {
      this.resultObj = {
        hxsmsg: '',
        data: []
      }
    },
    // 重置表单对象
    initFormObj (f) {
      this[f].haveData = 0
      this[f].qrcode = ''
      this[f].getDataed = false
      this[f].step = 1
      this[f].code = ''
      this[f].loading = false
    },
    // 开始查询公共方法  m：请求方法  u：api url  f：要发送的表单  l：表单中的loading字段  su：提交到的url
    commonFn (m, u, f, l) {
      return new Promise((resolve, reject) => {
        this.initResultObj()
        this.resultModal = true
        if (l) {
          this.$Spin.show()
        }
        this.$ajax(m, u, this[f], l).then(data => {
          if (l) {
            this.$Spin.hide()
          }
          let Odata = data.data
          if (Odata) {
            resolve(Odata)
          } else {
            this.resultObj.hxsmsg = '查询无结果！'
            this.$Message.error('查询无结果！')
            reject(new Error('查询无结果！'))
          }
        }).catch(err => {
          if (l) {
            this.$Spin.hide()
          }
          reject(err)
        })
      })
    },
    // 轮询验证码公共方法 参数介绍同上
    commonNeedVerFn (u, su, f) {
      if (!this[f].getDataed && this[f].loading && this.resultModal) {
        setTimeout(() => {
          this.$ajax('get', u, { id_number: this[f].id_number }).then(data => {
            if (data.need) {
              // 打开验证码输入框
              this.commonOpenVerCodeIpt(...arguments)
            } else {
              this.commonNeedVerFn(...arguments)
            }
          })
        }, 3000)
      }
    },
    // 打开验证码输入框 参数介绍同上  flag: 1 银行流水
    commonOpenVerCodeIpt (u, su, f, flag) {
      this.$Modal.warning({
        title: '请输入验证码',
        render: (h) => {
          return h('Input', {
            props: {
              value: this[f].code,
              autofocus: true,
              placeholder: '请输入手机收到的验证码'
            },
            attrs: {
              style: 'margin-top: 16px;'
            },
            on: {
              input: (val) => {
                this[f].code = val
              }
            }
          })
        },
        onOk: () => {
          // 验证码不为空才请求 为空再次弹出输入框
          if (!this[f].code) {
            this.$nextTick(() => {
              setTimeout(() => {
                this.commonOpenVerCodeIpt(...arguments)
              }, 300)
            })
            this.$Message.error('验证码不能为空，请重新输入！')
          } else {
            this.commonSendVerCode(...arguments)
          }
        }
      })
    },
    // 验证码发送 参数介绍同上
    commonSendVerCode (u, su, f, flag) {
      let sendObj = { id_number: this[f].id_number, sms_code: this[f].code }
      if (flag === 1) {
        sendObj.idCard = this[f].account
        sendObj.account = this[f].account
      } else {
        this.commonNeedVerFn(...arguments)
      }
      this.$ajax('post', su, sendObj).then(data => {
        // 成功后清空验证码
        this[f].code = ''
      })
    },
    // 轮询二维码 参数介绍同上
    commonQRcodeFn (u, f) {
      return new Promise((resolve, reject) => {
        let settime = () => {
          if (this[f].loading && this.resultModal) {
            setTimeout(() => {
              this.$ajax('get', u, this[f]).then(data => {
                if (data.hash) {
                  this[f].qrcode = data.hash
                  resolve(data.hash)
                } else {
                  settime()
                }
              }).catch(err => {
                settime()
              })
            }, 2000)
          };
        }
        settime()
      })
    },
    phoneTimeFn () {
      this.$refs.phoneTimeForm.validate(valid => {
        if (valid) {
          this.commonFn('get', 'tz/mobile/get/info/online', 'phoneTimeForm', 'phoneTimeForm.loading').then(data => {
            if (data.resultCode == 'MO999' || data.resultCode == 'MO99') {
              this.resultObj.hxsmsg = data.resultMsg
            } else {
              if (data.resultMsg.includes('+')) {
                this.resultObj.hxsmsg = '此用户手机号在网时长为' + data.resultMsg.split(',')[0].replace(/[^0-9]/ig, '') + '个月以上'
              } else {
                this.resultObj.hxsmsg = '此用户手机号在网时长为' + data.resultMsg.split(',')[0].replace(/[^0-9]/ig, '') + '个月至' + data.resultMsg.split(',')[1].replace(/[^0-9]/ig, '') + '个月之间'
              }
            }
          })
        }
      })
    },
    phoneStatusFn () {
      this.$refs.phoneStatusForm.validate(valid => {
        if (valid) {
          this.commonFn('get', 'tz/mobile/get/info/status', 'phoneStatusForm', 'phoneStatusForm.loading').then(data => {
            this.resultObj.hxsmsg = data.resultMsg
          })
        }
      })
    },
    lostLetterFn () {
      this.$refs.lostLetterForm.validate(valid => {
        if (valid) {
          this.commonFn('get', 'tz/shixin/get/info', 'lostLetterForm', 'lostLetterForm.loading').then(data => {
            this.resultObj.data = data.dishonests
          })
        }
      })
    },
    jdFn () {
      this.$refs.jdForm.validate(valid => {
        if (valid) {
          this.initFormObj('jdForm')
          this.commonFn('get', 'tz/jd/get/info', 'jdForm', 'jdForm.loading').then(data => {
            this.resultObj.data = data
            this.jdForm.haveData = 1
            // 阻止轮询
            this.jdForm.getDataed = true
          }).catch(err => {
            this.$Message.error('京东查询失败！')
            // 阻止轮询
            this.jdForm.getDataed = true
          })
          this.commonNeedVerFn('tz/jd/get/smscode/check/status', 'tz/jd/get/smscode/input', 'jdForm') // 轮询是否需要验证码
          // 轮询二维码
          this.$Spin.show()
          this.commonQRcodeFn('tz/jd/get/info/qrcode', 'jdForm').then(data => {
            this.$Spin.hide()
          })
        }
      })
    },
    jdReportFn () {
      this.$refs.jdReportForm.validate(valid => {
        if (valid) {
          this.initFormObj('jdReportForm')
          this.commonFn('get', 'tz/jdreport/get/info', 'jdReportForm', 'jdReportForm.loading').then(data => {
            this.resultObj.data = data
            this.jdReportForm.haveData = 1
            // 阻止轮询
            this.jdReportForm.getDataed = true
          }).catch(err => {
            this.$Message.error('京东报告查询失败！')
            // 阻止轮询
            this.jdReportForm.getDataed = true
          })
          // this.commonNeedVerFn('tz/jd/get/smscode/check/status', 'tz/jd/get/smscode/input', 'jdReportForm'); // 轮询是否需要验证码
          // 轮询二维码
          this.$Spin.show()
          this.commonQRcodeFn('tz/jdreport/get/info/qrcode', 'jdReportForm').then(data => {
            this.$Spin.hide()
          })
        }
      })
    },
    probeReportFn () {
      this.$refs.probeReportForm.validate(valid => {
        if (valid) {
          this.commonFn('get', 'tz/tanzhenreport/get/info', 'probeReportForm', 'probeReportForm.loading').then(data => {
            if (data) {
              this.resultObj.data = data
            } else {
              this.resultObj.hxsmsg = '未查到银真多头借贷报告!'
            }
          }).catch(err => {
            this.resultObj.hxsmsg = '未查到银真多头借贷报告!'
          })
        }
      })
    },
    operatorReportFn () {
      this.$refs.operatorReportForm.validate(valid => {
        if (valid) {
          this.initFormObj('operatorReportForm')
          this.commonFn('get', 'tz/mobilereport/get/info/area', 'operatorReportForm', 'operatorReportForm.loading').then(data => {
            if (data.province && data.type) {
              if (data.province + data.type == '吉林电信') {
                /* this.resultObj.hxsmsg = '请机主用手机向 <span style="color: #f00;">10001</span> 发送内容为 <span style="color: #f00;">CXXD</span> 的短信！';
                this.operatorReportForm.step = 2;
                this.operatorReportForm.province = data.province;
                this.operatorReportForm.type = data.type; */
                this.resultObj.hxsmsg = '<span style="color: #f00;">暂不支持吉林电信的手机号码查询！</span>'
                this.operatorReportForm.step = 2
              } else {
                this.operatorReportForm.step = 3
                this.operatorReportForm.province = data.province
                this.operatorReportForm.type = data.type
                this.operatorReportSendFn() // 获取运营商数据
              }
            } else {
              this.resultObj.hxsmsg = '未查到手机号相关信息！'
            }
          })
        }
      })
    },
    // TODO: 吉林电信特殊处理
    operatorMySendedBtn () {
      this.resultObj.hxsmsg = ''
      this.operatorReportForm.step = 3
      this.operatorReportSendFn() // 获取运营商数据
    },
    operatorReportSendFn () {
      this.commonFn('get', 'tz/mobilereport/get/info', 'operatorReportForm', 'operatorReportForm.loading').then(data => {
        this.resultObj.data = data
        this.operatorReportForm.haveData = 1
        // 阻止轮询
        this.operatorReportForm.getDataed = true
      }).catch(err => {
        this.resultObj.hxsmsg = err.message
        this.$Modal.remove()
        this.initFormObj('operatorReportForm')
        // 阻止轮询
        this.operatorReportForm.getDataed = true
      })
      this.commonNeedVerFn('tz/mobilereport/get/smscode/status', 'tz/mobilereport/input/sms/code', 'operatorReportForm') // 轮询是否需要验证码
    },
    taobaoReportFn () {
      this.$refs.taobaoReportForm.validate(valid => {
        if (valid) {
          this.initFormObj('taobaoReportForm')
          this.commonFn('get', 'tz/taobaoreport/get/info', 'taobaoReportForm', 'taobaoReportForm.loading').then(data => {
            this.resultObj.data = data
            this.taobaoReportForm.haveData = 1
            // 阻止轮询
            this.taobaoReportForm.getDataed = true
          }).catch(err => {
            this.$Message.error('淘宝查询失败！')
            // 阻止轮询
            this.taobaoReportForm.getDataed = true
          })
          // this.commonNeedVerFn('tz/jd/get/smscode/check/status', 'tz/jd/get/smscode/input', 'jdForm'); // 轮询是否需要验证码
          // 轮询二维码
          this.$Spin.show()
          this.commonQRcodeFn('tz/taobaoreport/get/info/qrcode', 'taobaoReportForm').then(data => {
            this.$Spin.hide()
          })
        }
      })
    },
    alipayFn () {
      this.$refs.alipayForm.validate(valid => {
        if (valid) {
          this.initFormObj('alipayForm')
          this.commonFn('get', 'tz/alipay/get/info', 'alipayForm', 'alipayForm.loading').then(data => {
            this.resultObj.data = data
            this.alipayForm.haveData = 1
            // 阻止轮询
            this.alipayForm.getDataed = true
          }).catch(err => {
            this.$Message.error('支付宝查询失败！')
            // 阻止轮询
            this.alipayForm.getDataed = true
          })
          // this.commonNeedVerFn('tz/jd/get/smscode/check/status', 'tz/jd/get/smscode/input', 'alipayForm'); // 轮询是否需要验证码
          // 轮询二维码
          this.$Spin.show()
          this.commonQRcodeFn('tz/alipay/get/info/qrcode/first', 'alipayForm').then(data => {
            this.$Spin.hide()
            this.commonQRcodeFn('tz/alipay/get/info/qrcode/second', 'alipayForm').then(data => {
              this.resultObj.hxsmsg = '二维码已更新，请再次进行扫码操作！'
            })
          })
        }
      })
    }
  }
}
</script>
