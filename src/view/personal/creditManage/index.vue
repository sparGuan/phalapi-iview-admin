<style lang="stylus" scoped>
.ivu-collapse {
  // border:1px solid #e6e8ec;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to { /* .fade-leave-active below version 2.1.8 */
  opacity: 0;
}

.ivu-collapse > .ivu-collapse-item {
  border-top: none;
  border-bottom: 1px solid #eff2f7;
}
.upload-face {
    background: #fff;
    border: 1px dashed #dcdee2;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: border-color .2s ease;
    width: 125px;
    height: 125px;
    &:hover {
      border-color: #009dff;
    }
  }
.creditmanagewrap {
  display: flex;
  /deep/.ivu-col-offset-6 {
    width:375px;
  }
  .creditmanageleftwrap {
    border-radius: 4px;
    width: 180px;

    .creditmanagelefttit {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 8px;
      padding-left: 5px;

      i {
        margin: 0 6px 0 0;
      }
    }

    .creditmanageleftcollapse {
      min-height: 609px;
      background: #dcdcdc;

      & >>> .ivu-collapse-header {
        i {
          margin-right: 5px;
        }
      }

      & >>> .ivu-collapse-content {
        padding: 0;

        .ivu-collapse-content-box {
          padding: 0;
        }
      }
    }

    .creditmanageleftul {
      padding: 5px 0 5px 35px;
      cursor: pointer;

      li {
        padding-top: 6px;
        font-size: 12px;

        &.active {
          color: #2d8cf0;
        }
      }
    }
  }

  .creditmanagerightwrap {
    flex: auto;
    .creditmanagerightitem {
      padding: 0 15px;

      .formHead {
        text-align: center;
        margin-bottom: 20px;

        b {
          font-size: 16px;
        }
      }

      .forBtnBox {
        margin-top: 20px;
        padding-left: 150px;

        .submitBtn {
          padding: 6px 10px;
          margin-right: 100px;
          cursor: pointer;
        }

        .queryBtn {
          padding: 2px 3px;
        }
      }
    }
  }
}

.commonmodalcenter {
  padding: 0 0 18px;
  .uploadcoveri {
    animation: rotate 1s infinite;
    font-size: 36px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  & >>> .commontablewrap {
    padding: 10px 5px;
    font-size: 14px;
    color: #333;

    .report_title {
      font-size: 16px;
    }

    .star {
      letter-spacing: 3px;
      font-size: 16px;
    }

    .fl {
      float: left;
    }

    .fr {
      float: right;
    }

    .tc {
      text-align: center;
    }

    .tr {
      text-align: right;
    }

    .full {
      width: 100% !important;
    }

    .half {
      width: 50% !important;
    }

    .quarter {
      width: 25% !important;
    }

    .half.quarter {
      width: 12.5% !important;
    }

    .third {
      width: 30% !important;
    }

    .border, table.border td {
      border: 1px solid #97cdef;
    }

    table.border .ivu-table td {
      border: 1px solid #e8eaec !important;
    }

    .noborder {
      border: none;
    }

    .bggray {
      background: #f9f9f9;
    }

    .gray, .gray * {
      color: #dededa;
    }

    .darkgray, .darkgray * {
      color: #666;
    }

    .orange {
      color: $basecolor;
    }

    .big_font {
      font-size: 36px;
      color: $basecolor;
    }
    .big_font_xl {
      font-size: 46px;
      color: $basecolor;
    }

    .big_font_title {
      font-size: 32px;
      color: #777;
    }

    table {
      border-collapse: collapse;
      margin-top: 20px;

      td {
        min-height: 40px;
        position: relative;
      }

      .pd_x {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 5px;
        padding-bottom: 5px;

        &.min150 {
          min-width: 150px;
          max-width: calc((100vw / 4));
          word-wrap: break-word;
        }
      }

      h2 {
        font-weight: normal;
        font-size: 14px;
        color: #196CE6 !important;
      }
    }

    /deep/.ivu-table {
      table {
        margin-top: 0 !important;
      }
    }

    .title {
      color: #196CE6;
      line-height: 40px;
      line-height: 40px;
    }

    .match_info {
      background: #fff;
      border: 1px dashed #e5e5e5;
      padding: 10px;
      line-height: 20px;
    }

    .bg_warn {
      background: #f9f0e0;
    }

    .subtable {
      margin: 0;

      td {
        height: 24px;
        padding: 0 7px;

        &:first-child {
          border-width: 1px 0 1px 0;
        }
      }

      tr {
        &:first-child {
          td {
            border-top-width: 0;
          }
        }
      }

      .subtitle {
        background: rgba(0, 0, 0, 0.03);
        padding: 0;
      }
    }

    .subtabletwo {
      margin: 0;

      td {
        &:first-child {
          border-width: 1px 0 1px 0;
        }
      }

      tr {
        &:first-child {
          td {
            border-top-width: 0;
          }
        }
      }

      .subtitletwo {
        background: #4e82d0;
        color: #fff;
        font-weight: bold;
      }

      .subtitlethree {
        color: #196ce6;
      }
    }

    .ratestarwrap {
      & > div {
        margin-right: 0;
      }
    }

    .nowrap {
      word-break: keep-all;
      white-space: nowrap;
    }

    .progress {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      height: 100%;
      background: #C9E4F5;

      & + span {
        position: relative;
        z-index: 1;
      }
    }

    /* .table.autohide tr:nth-child(n+8)
      display: none
    .table.autohide tr:last-child
      display: table-row
    .autohide_switch:before
      content: '点此收起'
    .table.autohide .autohide_switch:before
      content: '点此查看全部' */
    .chart {
      width: 600px;
      height: 400px;
    }

    h1 {
      font-weight: normal;
      font-size: 20px;
      margin-top: 30px;
    }

    .red {
      color: red;
    }

    .help {
      color: #fff;
      background: #196CE6;
      border-radius: 50%;
      display: inline-block;
      margin-left: 3px;
      height: 16px;
      line-height: 16px;
      width: 16px;
      text-align: center;
      cursor: pointer;
      font-weight: normal;
      font-style: normal;
    }
  }
}
</style>

<template>
  <div class="creditmanagewrap">
    <transition name="fade">
      <div class="creditmanageleftwrap" v-if="showSidebar">
        <!-- <div class="creditmanagelefttit">
          <i class="fa fa-search"></i>风控大数据
        </div> -->
        <Collapse
          v-model="navCollapse"
          accordion
          simple
          class="creditmanageleftcollapse"
        >
          <Panel name="compony"
            >企业查询
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(
                  e => e.navType === 'compony'
                )"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav === nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel>
          <Panel name="riskControl"
            >风控产品
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(
                  e => e.navType === 'riskControl'
                )"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav === nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel>
          <!-- <Panel name="face"
            >人脸信息验证
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(
                  e => e.navType === 'face'
                )"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav === nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel> -->
          <Panel name="idNo"
            >身份证要素
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(
                  e => e.navType === 'idNo'
                )"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav == nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel>
          <Panel name="car"
            >交通出行
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(e => e.navType === 'car')"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav == nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel>
          <Panel name="bankCard"
            >银行卡数据
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(
                  e => e.navType === 'bankCard'
                )"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav == nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel>
          <Panel name="traffic"
            >司法查询
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(
                  e => e.navType === 'traffic'
                )"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav == nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel>
          <Panel name="operator"
            >运营商数据
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(
                  e => e.navType === 'operator'
                )"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav == nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel>
          <!-- <Panel name="eBusiness"
            >电商查询
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(
                  e => e.navType === 'eBusiness'
                )"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav == nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel> -->
          <!-- <Panel name="socialSecurity"
            >社保公积金
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(
                  e => e.navType === 'socialSecurity'
                )"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav == nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel>  -->
          <!-- <Panel name="career"
            >职业证书
            <ul class="creditmanageleftul" slot="content">
              <li
                v-for="(nav, index) in navList.filter(
                  e => e.navType === 'career'
                )"
                @click="subMenuClick(nav.key)"
                :class="{ active: curNav == nav.key }"
                :key="index"
              >
                {{ nav.name }}
              </li>
            </ul>
          </Panel> -->
        </Collapse>
      </div>
    </transition>
    <!-- contentView -->
    <div class="creditmanagerightwrap">
      <!-- 公积金查询 -->
      <div
        v-if="curNav == 'providentFund'"
        class="creditmanagerightitem"
        key="providentFund"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="providentFundForm"
              :rules="formRules"
              ref="providentFundForm"
              :label-width="160"
            >
              <FormItem
                prop="city_code"
                label="城市："
                class="formitemnoreddot"
              >
                <Select
                  @on-change="changeCity"
                  v-model="providentFundForm.city_code"
                  :loading="providentFundcityListLoading"
                  loading-text="数据加载中"
                  filterable
                  placeholder="请选择城市"
                >
                  <Option
                    v-for="city in providentFundcityList"
                    :value="city.area_code"
                    :key="city.area_code"
                    >{{ city.area_name }}</Option
                  >
                </Select>
              </FormItem>
              <FormItem
                v-for="check in providentFundCheck.login_params"
                :label="check.label + '：'"
                :prop="check.name"
                :rules="{
                  required: true,
                  message: check.label + '不能为空',
                  trigger: 'blur'
                }"
                :key="check.name"
                class="formitemnoreddot"
              >
                <Input
                  v-if="check.type == 'text' || check.type == 'password'"
                  v-model.trim="providentFundForm[check.name]"
                  :type="check.type"
                  :placeholder="'请输入' + check.label"
                ></Input>
                <Select
                  v-else-if="check.type == 'select'"
                  v-model="providentFundForm[check.name]"
                >
                  <Option
                    v-for="item in check.list"
                    :value="item.value"
                    :key="item.value"
                    >{{ item.key }}</Option
                  >
                </Select>
              </FormItem>
              <div class="forBtnBox" v-if="providentFundForm.isGetForm">
                <span
                  @click="providentFundFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 社保查询 -->
      <div
        v-if="curNav == 'socialSecurity'"
        class="creditmanagerightitem"
        key="socialSecurity"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="socialSecurityForm"
              :rules="formRules"
              ref="socialSecurityForm"
              :label-width="110"
            >
              <FormItem
                prop="city_code"
                label="城市："
                class="formitemnoreddot"
              >
                <Select
                  @on-change="socialSecurityChangeCity"
                  v-model="socialSecurityForm.city_code"
                  :loading="socialSecuritycityListLoading"
                  loading-text="数据加载中"
                  filterable
                  placeholder="请选择城市"
                >
                  <Option
                    v-for="city in socialSecuritycityList"
                    :value="city.area_code"
                    :key="city.area_code"
                    >{{ city.area_name }}</Option
                  >
                </Select>
              </FormItem>
              <FormItem
                v-for="check in socialSecurityCheck.login_params"
                :label="check.label + '：'"
                :prop="check.name"
                :rules="{
                  required: true,
                  message: check.label + '不能为空',
                  trigger: 'blur'
                }"
                :key="check.name"
                class="formitemnoreddot"
              >
                <Input
                  v-if="check.type == 'text' || check.type == 'password'"
                  v-model.trim="socialSecurityForm[check.name]"
                  :type="check.type"
                  :placeholder="'请输入' + check.label"
                ></Input>
                <Select
                  v-else-if="check.type == 'select'"
                  v-model="socialSecurityForm[check.name]"
                >
                  <Option
                    v-for="item in check.list"
                    :value="item.value"
                    :key="item.value"
                    >{{ item.key }}</Option
                  >
                </Select>
              </FormItem>
              <div class="forBtnBox" v-if="socialSecurityForm.isGetForm">
                <span
                  @click="socialSecurityFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <!-- <div
        v-if="curNav == 'lostLetter'"
        class="creditmanagerightitem"
        key="lostLetter"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="lostLetterForm"
              :rules="formRules"
              ref="lostLetterForm"
              :label-width="60"
            >
              <FormItem
                prop="query_name"
                label="名称："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="lostLetterForm.query_name"
                  placeholder="被查询人的真实姓名或机构名称"
                ></Input>
              </FormItem>
              <FormItem prop="query_id" label="证号：" class="formitemnoreddot">
                <Input
                  v-model.trim="lostLetterForm.query_id"
                  placeholder="被查询人的身份证号或机构代码"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="lostLetterFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->

      <!-- <div
        v-if="curNav == 'operatorDetails'"
        class="creditmanagerightitem"
        key="operatorDetails"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="operatorDetailsForm"
              :rules="formRules"
              ref="operatorDetailsForm"
              :label-width="100"
            >
              <FormItem
                prop="phone"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="operatorDetailsForm.phone"
                  placeholder="请输入待查的手机号"
                ></Input>
              </FormItem>
              <FormItem
                prop="password"
                label="服务密码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="operatorDetailsForm.password"
                  type="password"
                  placeholder="手机号登录运营商平台的密码"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_name"
                label="真实姓名："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="operatorDetailsForm.id_name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_number"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="operatorDetailsForm.id_number"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="operatorDetailsFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->
      <!-- 运营商报告 -->
      <!-- <div
        v-if="curNav == 'operatorReport'"
        class="creditmanagerightitem"
        key="operatorReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="operatorReportForm"
              :rules="formRules"
              ref="operatorReportForm"
              :label-width="100"
            >
              <FormItem
                prop="phone"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="operatorReportForm.phone"
                  placeholder="请输入待查的手机号"
                ></Input>
              </FormItem>
              <FormItem
                prop="password"
                label="服务密码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="operatorReportForm.password"
                  type="password"
                  placeholder="手机号登录运营商平台的密码"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_name"
                label="真实姓名："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="operatorReportForm.id_name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_number"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="operatorReportForm.id_number"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="operatorReportFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg  white"
                  >提交查询</span
                >
                <span
                  class="queryBtn orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->

      <div
        v-if="curNav == 'phoneTime'"
        class="creditmanagerightitem"
        key="phoneTime"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="phoneTimeForm"
              :rules="formRules"
              ref="phoneTimeForm"
              :label-width="100"
            >
              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="phoneTimeForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="phoneTimeFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <!-- <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                > -->
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <!-- <div
        v-if="curNav == 'phoneStatus'"
        class="creditmanagerightitem"
        key="phoneStatus"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="phoneStatusForm"
              :rules="formRules"
              ref="phoneStatusForm"
              :label-width="100"
            >
              <FormItem
                prop="id_name"
                label="真实姓名："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="phoneStatusForm.id_name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_number"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="phoneStatusForm.id_number"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="mobile"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="phoneStatusForm.mobile"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="phoneStatusFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->

      <div
        v-if="curNav == 'education'"
        class="creditmanagerightitem"
        key="education"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="educationForm"
              :rules="formRules"
              ref="educationForm"
              :label-width="100"
            >
              <FormItem
                prop="account"
                label="学信网账号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="educationForm.account"
                  placeholder="请输入学信网登录账号"
                ></Input>
              </FormItem>
              <FormItem
                prop="password"
                label="学信网密码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="educationForm.password"
                  type="password"
                  placeholder="请输入学信网登录密码"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="educationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 淘宝查询 -->
      <div v-if="curNav == 'taobao'" class="creditmanagerightitem" key="taobao">
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="taobaoForm"
              :rules="formRules"
              ref="taobaoForm"
              :label-width="100"
            >
              <FormItem
                prop="id_name"
                label="真实姓名："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="taobaoForm.id_name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_number"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="taobaoForm.id_number"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="taobaoFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <!-- <div
        v-if="curNav == 'taobaoReport'"
        class="creditmanagerightitem"
        key="taobaoReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="taobaoReportForm"
              :rules="formRules"
              ref="taobaoReportForm"
              :label-width="100"
            >
              <FormItem
                prop="id_name"
                label="真实姓名："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="taobaoReportForm.id_name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_number"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="taobaoReportForm.id_number"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="taobaoReportFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->
      <!-- 支付宝报告 -->
      <!-- <div v-if="curNav == 'alipay'" class="creditmanagerightitem" key="alipay">
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="alipayForm"
              :rules="formRules"
              ref="alipayForm"
              :label-width="100"
            >
              <FormItem
                prop="id_name"
                label="真实姓名："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="alipayForm.id_name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_number"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="alipayForm.id_number"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="alipayFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div v-if="curNav == 'jd'" class="creditmanagerightitem" key="jd">
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="jdForm"
              :rules="formRules"
              ref="jdForm"
              :label-width="100"
            >
              <FormItem
                prop="id_name"
                label="真实姓名："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="jdForm.id_name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_number"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="jdForm.id_number"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem class="txtC">
                <Button
                  @click="jdFn"
                  :loading="commonForm.loading"
                  type="primary"
                  size="large"
                  >提交查询</Button
                >
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div> -->

      <!-- <div
        v-if="curNav == 'jdReport'"
        class="creditmanagerightitem"
        key="jdReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="jdReportForm"
              :rules="formRules"
              ref="jdReportForm"
              :label-width="100"
            >
              <FormItem
                prop="id_name"
                label="真实姓名："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="jdReportForm.id_name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_number"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="jdReportForm.id_number"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="jdReportFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->

      <!-- <div
        v-if="curNav == 'bankCardAuth'"
        class="creditmanagerightitem"
        key="bankCardAuth"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankCardAuthForm"
              :rules="formRules"
              ref="bankCardAuthForm"
              :label-width="120"
            >
              <FormItem
                prop="id_name"
                label="真实姓名："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardAuthForm.id_name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_number"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardAuthForm.id_number"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="card_number"
                label="银行卡号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardAuthForm.card_number"
                  placeholder="请输入银行卡号"
                ></Input>
              </FormItem>
              <FormItem
                prop="mobile"
                label="银行预留手机："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardAuthForm.mobile"
                  placeholder="请输入银行预留手机"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="getBankCardIdentityBasic"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->

      <!-- <div
        v-if="curNav == 'bankFlow'"
        class="creditmanagerightitem"
        key="bankFlow"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankFlowForm"
              :rules="formRules"
              ref="bankFlowForm"
              :label-width="110"
            >
              <FormItem
                prop="account"
                label="网银账号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankFlowForm.account"
                  placeholder="请输入网银账号"
                ></Input>
              </FormItem>
              <FormItem
                prop="password"
                label="网银密码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankFlowForm.password"
                  type="password"
                  placeholder="请输入网银密码"
                ></Input>
              </FormItem>
              <FormItem prop="name" label="姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="bankFlowForm.name"
                  placeholder="请输入姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankFlowForm.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="bankCard"
                label="银行卡卡号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankFlowForm.bankCard"
                  placeholder="请输入银行卡卡号"
                ></Input>
              </FormItem>
              <FormItem
                prop="bankType"
                label="银行类型："
                class="formitemnoreddot"
              >
                <Select
                  v-model="bankFlowForm.bankType"
                  placeholder="请选择银行类型"
                >
                  <Option
                    v-for="list in bankTypeArr"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.name }}</Option
                  >
                </Select>
              </FormItem>
              <FormItem
                prop="cardType"
                label="卡类型："
                class="formitemnoreddot"
              >
                <Select
                  v-model="bankFlowForm.cardType"
                  placeholder="请选择卡类型"
                >
                  <Option
                    v-for="list in bankCardTypeArr"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.name }}</Option
                  >
                </Select>
              </FormItem>
              <FormItem
                prop="phone"
                label="银行预留手机："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankFlowForm.phone"
                  placeholder="请输入银行预留手机"
                ></Input>
              </FormItem>
              <FormItem prop="month" label="数据量：" class="formitemnoreddot">
                <Select v-model="bankFlowForm.month" placeholder="请选择数据量">
                  <Option :value="6">6个月</Option>
                  <Option :value="12">12个月</Option>
                </Select>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="bankFlowFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->

      <!-- <div
        v-if="curNav == 'probeReport'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="probeReportForm"
              :rules="formRules"
              ref="probeReportForm"
              :label-width="100"
            >
              <FormItem
                prop="id_name"
                label="真实姓名："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="probeReportForm.id_name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="id_number"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="probeReportForm.id_number"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="mobile"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="probeReportForm.mobile"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="probeReportFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
                <span
                  class="queryBtn  orange_bg common_btn font_12"
                  @click="openRecord"
                  >查询记录</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->

    <!-- 地址验证 -->
      <div
        v-if="curNav == 'addressVerif'"
        class="creditmanagerightitem"
        key="addressVerif"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="addressVerifForm"
              :rules="formRules"
              ref="addressVerifForm"
              :label-width="100"
            >
              <FormItem prop="name" label="名称" class="formitemnoreddot">
                <Input
                  v-model.trim="addressVerifForm.name"
                  placeholder="请输入名称"
                ></Input>
              </FormItem>
              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="addressVerifForm.idNo"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>

              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="addressVerifForm.mobileNo"
                  placeholder="请输入手机号码"
                ></Input>
              </FormItem>

              <FormItem
                prop="address"
                label="身份证地址："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="addressVerifForm.address"
                  placeholder="请输入身份证地址"
                ></Input>
              </FormItem>

              <FormItem
                prop="reasonCode"
                label="查询原因："
                class="formitemnoreddot"
              >
                <Select
                  v-model="addressVerifForm.reasonCode"
                  placeholder="请输入查询原因"
                >
                  <Option
                    v-for="list in reasonCodes"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="addressVerifFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg  white"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <!-- <div
        v-if="curNav == 'faceSearch'"
        class="creditmanagerightitem"
        key="faceSearch"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="faceSearchForm"
              :rules="formRules"
              ref="faceSearchForm"
              :label-width="100"
            >
              <FormItem  label="头像照片：" class="formitemnoreddot">
                  <div class="upload-face">
                    <Icon type="md-add" size="122" color="#eee" style="margin-top: 3px;" v-if="faceSearchForm.pic === ''"/>
                    <div v-else >
                      <img :src="faceSearchForm.pic" style="width:100%;height:100%;"/>
                    </div>
                    <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" @change="getFaceImage($event)" style="position: absolute;top: 0;left: 0;cursor: pointer;opacity:0;width:100%;height:100%;" value=""/>
                  </div>
              </FormItem>
              <div class="forBtnBox" style="padding-left: 125px;">
                <span
                  @click="faceSearchFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->

      <!-- 车架号详情查询 -->
      <!-- <div
        v-if="curNav == 'vinDetail'"
        class="creditmanagerightitem"
        key="vinDetail"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="vinDetailForm"
              :rules="formRules"
              ref="vinDetailForm"
              :label-width="100"
            >
              <FormItem prop="vin" label="车架号：" class="formitemnoreddot">
                <Input
                  v-model.trim="vinDetailForm.vin"
                  placeholder="请输入车架号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="vinDetailFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->
      <!-- 车牌号详情查询 -->
      <div
        v-if="curNav == 'license'"
        class="creditmanagerightitem"
        key="license"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="licenseForm"
              :rules="formRules"
              ref="licenseForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="licenseForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="licensePlate"
                label="车牌号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="licenseForm.licensePlate"
                  placeholder="请输入车牌号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="licenseFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 航旅信息查询  -->
      <div
        v-if="curNav == 'airTravel'"
        class="creditmanagerightitem"
        key="airTravel"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="airTravelForm"
              :rules="formRules"
              ref="airTravelForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="airTravelForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="airTravelForm.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="month"
                label="查询周期："
                class="formitemnoreddot"
              >
                <Select v-model="airTravelForm.month">
                  <Option :value="3">3</Option>
                  <Option :value="6">6</Option>
                  <Option :value="12">12</Option>
                </Select>
              </FormItem>
              <FormItem
                prop="passportNo"
                label="护照号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="airTravelForm.passportNo"
                  placeholder="请输入护照号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="airTravelFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 驾驶证信息查询  -->
      <div
        v-if="curNav == 'driveLicenceInfo'"
        class="creditmanagerightitem"
        key="driveLicenceInfo"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="driveLicenceInfoForm"
              :rules="formRules"
              ref="driveLicenceInfoForm"
              :label-width="100"
            >
              <FormItem
                prop="licenseNo"
                label="驾驶证："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="driveLicenceInfoForm.licenseNo"
                  placeholder="请输入驾驶证编号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="driveLicenceInfoFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 驾照扣分查询  -->
      <div
        v-if="curNav == 'driverPointer'"
        class="creditmanagerightitem"
        key="driverPointer"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="driverPointerForm"
              :rules="formRules"
              ref="driverPointerForm"
              :label-width="125"
            >
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="driverPointerForm.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="fileNo"
                label="驾驶证档案编号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="driverPointerForm.fileNo"
                  placeholder="请输入驾驶证档案编号"
                ></Input>
              </FormItem>
              <FormItem
                prop="province"
                label="驾照所在地："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="driverPointerForm.province"
                  placeholder="请输入驾照所在地省份"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="driverPointerFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 交通违章查询  -->
      <div
        v-if="curNav == 'trafficViolation'"
        class="creditmanagerightitem"
        key="trafficViolation"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key == curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key == curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="trafficViolationForm"
              :rules="formRules"
              ref="trafficViolationForm"
              :label-width="110"
            >
              <FormItem
                prop="carNumber"
                label="违章车牌号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="trafficViolationForm.carNumber"
                  placeholder="请输入违章车牌号"
                ></Input>
              </FormItem>
              <FormItem
                prop="carCode"
                label="违章车架号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="trafficViolationForm.carCode"
                  placeholder="请输入违章车架号"
                ></Input>
              </FormItem>
              <FormItem
                prop="carDriveNumber"
                label="违章发动机号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="trafficViolationForm.carDriveNumber"
                  placeholder="请输入违章发动机号"
                ></Input>
              </FormItem>
              <FormItem
                prop="cityCode"
                label="城市代码："
                class="formitemnoreddot"
              >
                <!-- 城市代码参照城市代码表进行查询 -->
                <Poptip trigger="hover" title="城市代码参照城市代码表进行输入">
                  <div slot="content">
                    <router-link :to="{ name: 'cityPage' }"
                      >城市代码表</router-link
                    >
                  </div>
                  <Input
                    v-model.trim="trafficViolationForm.cityCode"
                    placeholder="请输入城市代码"
                  ></Input>
                </Poptip>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="trafficViolationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 港澳通行证一致性  -->
      <div
        v-if="curNav === 'exitPermit'"
        class="creditmanagerightitem"
        key="exitPermit"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="exitPermitForm"
              :rules="formRules"
              ref="exitPermitForm"
              :label-width="153"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="exitPermitForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="hmNumber"
                label="通行证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="exitPermitForm.hmNumber"
                  placeholder="请输入通行证号码"
                ></Input>
              </FormItem>
              <FormItem
                prop="birthday"
                label="出生日期："
                class="formitemnoreddot"
              >
                <DatePicker
                  type="date"
                  @on-change="exitPermitBirthday"
                  placeholder="请输入出生日期"
                ></DatePicker>
              </FormItem>
              <FormItem
                prop="expiryDate"
                label="证件有效期截止日期："
                class="formitemnoreddot"
              >
                <DatePicker
                  type="date"
                  @on-change="exitPermitExpiryDate"
                  placeholder="请输入有效期截止日期"
                ></DatePicker>
              </FormItem>
              <FormItem prop="mark" label="证件标识：" class="formitemnoreddot">
                <RadioGroup v-model.trim="exitPermitForm.mark">
                  <Radio label="1">港澳</Radio>
                  <Radio label="2">香港</Radio>
                </RadioGroup>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="exitPermitFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 多头负债查询  -->
      <!-- <div v-if="curNav == 'debtDetail'" class="creditmanagerightitem" key="debtDetail">
				<div class="tit">
					<span><b class="primary">{{navList.find(e => e.key == curNav).name}}</b>&nbsp;<i>（9元/次）</i></span>
				</div>
				<Row>
					<Col span="12" offset="6">
					<Form :model="debtDetailForm" :rules="formRules" ref="debtDetailForm" :label-width="100">
						<FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
							<Input v-model.trim="debtDetailForm.name" placeholder="请输入真实姓名"></Input>
						</FormItem>
						<FormItem prop="idNo" label="身份证号码：" class="formitemnoreddot">
							<Input v-model.trim="debtDetailForm.idNo" placeholder="请输入身份证号"></Input>
						</FormItem>
						<FormItem prop="mobileNo" label="手机号码：" class="formitemnoreddot">
							<Input v-model.trim="debtDetailForm.mobileNo" placeholder="请输入手机号"></Input>
						</FormItem>
						<div>
							<Button @click="debtDetailFn" type="primary" size="large">提交查询</Button>
						</div>
					</Form>
					</Col>
				</Row>
      </div>-->
      <!-- 负面信息验证  -->
      <div
        v-if="curNav === 'negative'"
        class="creditmanagerightitem"
        key="negative"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="negativeForm"
              :rules="formRules"
              ref="negativeForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="negativeForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="negativeForm.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="negativeFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 个人涉诉查询 (专业) -->
      <div
        v-if="curNav === 'hisLawsuit1'"
        class="creditmanagerightitem"
        key="hisLawsuit1"
      >
        <Alert show-icon>
          报告详细描述：
          <span slot="desc"
            >包含 《裁判文书》 《执行公告》 《失信公告》 《开庭公告》
            《法院公告》 《网贷黑名单》 《案件流程信息》 《曝光台》
            <p>注： 可查具体页</p>
          </span
          >
        </Alert>
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="hisLawsuit1Form"
              :rules="formRules"
              ref="hisLawsuit1Form"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="hisLawsuit1Form.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="hisLawsuit1Form.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
               <FormItem
                prop="pageIndex"
                label="查询页："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="hisLawsuit3Form.pageIndex"
                  placeholder="填写查询的具体页数"
                ></Input>
              </FormItem>
              <FormItem
                prop="dataType"
                label="涉诉类型："
                class="formitemnoreddot"
              >
                <Select
                  v-model="hisLawsuit1Form.dataType"
                  placeholder="请输入涉诉类型"
                >
                  <Option
                    v-for="list in dataType"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="hisLawsuit1Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 个人涉诉查询（精简）-->
      <div
        v-if="curNav === 'hisLawsuit2'"
        class="creditmanagerightitem"
        key="hisLawsuit2"
      >
         <Alert show-icon>
          报告详细描述：
          <span slot="desc"
            >包含 《裁判文书》 《执行公告》 《失信公告》 《开庭公告》
            《法院公告》 《网贷黑名单》 《案件流程信息》 《曝光台》
            <p>注： 只查询首条信息</p>
          </span
          >
        </Alert>
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="hisLawsuit2Form"
              :rules="formRules"
              ref="hisLawsuit2Form"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="hisLawsuit2Form.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="hisLawsuit2Form.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="dataType"
                label="涉诉类型："
                class="formitemnoreddot"
              >
                <Select
                  v-model="hisLawsuit2Form.dataType"
                  placeholder="请输入涉诉类型"
                >
                  <Option
                    v-for="list in dataType"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="hisLawsuit2Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 个人涉诉查询（专业全部） -->
      <div
        v-if="curNav === 'hisLawsuit3'"
        class="creditmanagerightitem"
        key="hisLawsuit3"
      >
        <Alert show-icon>
          报告详细描述：
          <span slot="desc"
            >包含 《裁判文书》 《执行公告》 《失信公告》 《开庭公告》
            《法院公告》 《网贷黑名单》 《案件流程信息》 《曝光台》</span
          >
        </Alert>
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="hisLawsuit3Form"
              :rules="formRules"
              ref="hisLawsuit3Form"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="hisLawsuit3Form.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="hisLawsuit3Form.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="pageIndex"
                label="查询页数："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="hisLawsuit3Form.pageIndex"
                  placeholder="填写查询的具体页数"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="hisLawsuit3Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 个人信用验证1 -->
      <div
        v-if="curNav === 'hisCreditCheck1'"
        class="creditmanagerightitem"
        key="hisCreditCheck1"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="hisCreditCheck1Form"
              :rules="formRules"
              ref="hisCreditCheck1Form"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="hisCreditCheck1Form.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="hisCreditCheck1Form.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="hisCreditCheck1Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <!-- 信用评分（专业版） -->
      <div
        v-if="curNav === 'creditScore'"
        class="creditmanagerightitem"
        key="creditScore"
      >
        <Alert show-icon>
          免责声明：
          <span slot="desc"
            >该数据出自互联网，所以有可能出现权限不足等结果。</span
          >
        </Alert>
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="creditScoreForm"
              :rules="formRules"
              ref="creditScoreForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="creditScoreForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>

              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="creditScoreForm.idNo"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>

              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="creditScoreForm.mobileNo"
                  placeholder="请输入手机号码"
                ></Input>
              </FormItem>

              <FormItem
                prop="accountNo"
                label="银行卡号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="creditScoreForm.accountNo"
                  placeholder="请输入银行卡号"
                ></Input>
              </FormItem>

              <FormItem label="查询原因：" class="formitemnoreddot">
                <Select
                  v-model="creditScoreForm.reasonCode"
                  placeholder="请输入查询原因"
                >
                  <Option
                    v-for="list in reasonCodes"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>

              <div class="forBtnBox">
                <span
                  @click="creditScoreFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <!-- 涉诉详情查询1 -->
      <div
        v-if="curNav === 'lawsuitDetail1'"
        class="creditmanagerightitem"
        key="lawsuitDetail1"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="lawsuitDetail1Form"
              :rules="formRules"
              ref="lawsuitDetail1Form"
              :label-width="100"
            >
              <FormItem
                prop="dataType"
                label="涉诉类型："
                class="formitemnoreddot"
              >
                <Select
                  v-model="lawsuitDetail1Form.dataType"
                  placeholder="请输入涉诉类型"
                >
                  <Option
                    v-for="list in dataType"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>
              <FormItem
                prop="lawsuitId"
                label="案件标识码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="lawsuitDetail1Form.lawsuitId"
                  placeholder="请输入涉诉企业、个人案件类别唯一标识码"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="lawsuitDetail1Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 涉诉详情查询3 -->
      <div
        v-if="curNav === 'lawsuitDetail3'"
        class="creditmanagerightitem"
        key="lawsuitDetail3"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="lawsuitDetail3Form"
              :rules="formRules"
              ref="lawsuitDetail3Form"
              :label-width="100"
            >
              <FormItem
                prop="dataType"
                label="涉诉类型："
                class="formitemnoreddot"
              >
                <Select
                  v-model="lawsuitDetail3Form.dataType"
                  placeholder="请输入涉诉类型"
                >
                  <Option
                    v-for="list in dataType"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>
              <FormItem
                prop="lawsuitId"
                label="案件标识码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="lawsuitDetail3Form.lawsuitId"
                  placeholder="请输入涉诉企业、个人案件类别唯一标识码"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="lawsuitDetail3Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 银行卡交易信息查询 -->
      <div
        v-if="curNav === 'bankCardDealQuery'"
        class="creditmanagerightitem"
        key="bankCardDealQuery"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankCardDealQueryForm"
              :rules="formRules"
              ref="bankCardDealQueryForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="bankCardDealQueryForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="accountNo"
                label="银行卡号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardDealQueryForm.accountNo"
                  placeholder="请输入银行卡号"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardDealQueryForm.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="bankCardDealQueryFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 银行卡开户行查询 -->
      <div
        v-if="curNav === 'bankCardRegQuery'"
        class="creditmanagerightitem"
        key="bankCardRegQuery"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankCardRegQueryForm"
              :rules="formRules"
              ref="bankCardRegQueryForm"
              :label-width="100"
            >
              <FormItem
                prop="accountNo"
                label="银行卡号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardRegQueryForm.accountNo"
                  placeholder="请输入银行卡号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="bankCardRegQueryFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 银行卡二要素验证  -->
      <div
        v-if="curNav === 'bankCard2itemCheck'"
        class="creditmanagerightitem"
        key="bankCard2itemCheck"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankCard2itemCheckForm"
              :rules="formRules"
              ref="bankCard2itemCheckForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="bankCard2itemCheckForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="accountNo"
                label="银行卡号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCard2itemCheckForm.accountNo"
                  placeholder="请输入银行卡号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="bankCard2itemCheckFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 银联三要素验证1-->
      <div
        v-if="curNav === 'bankCard3itemCheck1'"
        class="creditmanagerightitem"
        key="bankCard3itemCheck1"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankCard3itemCheck1Form"
              :rules="formRules"
              ref="bankCard3itemCheck1Form"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="bankCard3itemCheck1Form.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCard3itemCheck1Form.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="accountNo"
                label="银行卡号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCard3itemCheck1Form.accountNo"
                  placeholder="请输入银行卡号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="bankCard3itemCheck1Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 银联三要素验证2  -->
      <div
        v-if="curNav === 'bankCard3itemCheck2'"
        class="creditmanagerightitem"
        key="bankCard3itemCheck2"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankCard3itemCheck2Form"
              :rules="formRules"
              ref="bankCard3itemCheck2Form"
              :label-width="100"
            >
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCard3itemCheck2Form.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="accountNo"
                label="银行卡号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCard3itemCheck2Form.accountNo"
                  placeholder="请输入银行卡号"
                ></Input>
              </FormItem>
              <FormItem
                prop="bankPreMobile"
                label="预留手机号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCard3itemCheck2Form.bankPreMobile"
                  placeholder="请输入预留手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="bankCard3itemCheck2Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 银联四要素验证 -->
      <div
        v-if="curNav === 'bankCard4itemCheck'"
        class="creditmanagerightitem"
        key="bankCard4itemCheck"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankCard4itemCheckForm"
              :rules="formRules"
              ref="bankCard4itemCheckForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="bankCard4itemCheckForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCard4itemCheckForm.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="accountNo"
                label="银行卡号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCard4itemCheckForm.accountNo"
                  placeholder="请输入银行卡号"
                ></Input>
              </FormItem>
              <FormItem
                prop="bankPreMobile"
                label="预留手机号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCard4itemCheckForm.bankPreMobile"
                  placeholder="请输入预留手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="bankCard4itemCheckFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 个人名下企业查询 -->
      <div
        v-if="curNav === 'personalEnterprise'"
        class="creditmanagerightitem"
        key="personalEnterprise"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="personalEnterpriseForm"
              :rules="formRules"
              ref="personalEnterpriseForm"
              :label-width="100"
            >
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="personalEnterpriseForm.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="personalEnterpriseFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 企业高管信息查询 -->
      <div
        v-if="curNav === 'executives'"
        class="creditmanagerightitem"
        key="executives"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="executivesForm"
              :rules="formRules"
              ref="executivesForm"
              :label-width="100"
            >
              <FormItem prop="name" label="名称：" class="formitemnoreddot">
                <Input
                  v-model.trim="executivesForm.name"
                  placeholder="请输入名称"
                ></Input>
              </FormItem>

              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="executivesForm.idNo"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>

              <FormItem label="查询原因：" class="formitemnoreddot">
                <Select
                  v-model="executivesForm.reasonCode"
                  placeholder="请输入查询原因"
                >
                  <Option
                    v-for="list in reasonCodes"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="executivesFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <!-- 企业工商数据查询 -->
      <div
        v-if="curNav === 'icbcData'"
        class="creditmanagerightitem"
        key="icbcData"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="icbcDataForm"
              :rules="formRules"
              ref="icbcDataForm"
              :label-width="100"
            >
              <FormItem prop="key" label="关键字：" class="formitemnoreddot">
                <Input
                  v-model.trim="icbcDataForm.key"
                  placeholder="企业名称或工商注册号，统一社会信用代码"
                ></Input>
              </FormItem>
              <FormItem
                prop="keyType"
                label="关键字类型："
                class="formitemnoreddot"
              >
                <RadioGroup v-model="icbcDataForm.keyType">
                  <Radio label="0">企业名称</Radio>
                  <Radio label="1">工商注册号</Radio>
                </RadioGroup>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="icbcDataFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 企业涉诉查询1 -->
      <div
        v-if="curNav === 'entpLawsuit1'"
        class="creditmanagerightitem"
        key="entpLawsuit1"
      >
        <Alert show-icon>
          报告详细描述：
          <span slot="desc"
            >包含 《裁判文书》 《执行公告》 《失信公告》 《开庭公告》
            《法院公告》 《网贷黑名单》 《案件流程信息》 《曝光台》</span
          >
        </Alert>
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="entpLawsuit1Form"
              :rules="formRules"
              ref="entpLawsuit1Form"
              :label-width="100"
            >
              <FormItem
                prop="entpName"
                label="企业名称："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="entpLawsuit1Form.entpName"
                  placeholder="请输入企业名称"
                ></Input>
              </FormItem>
              <FormItem
                prop="pageIndex"
                label="查询页数："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="entpLawsuit1Form.pageIndex"
                  placeholder="填写查询的具体页数"
                ></Input>
              </FormItem>
              <FormItem
                prop="dataType"
                label="案件类型："
                class="formitemnoreddot"
              >
                <Select
                  v-model="entpLawsuit1Form.dataType"
                  placeholder="请输入涉诉类型"
                >
                  <Option
                    v-for="list in dataType"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="entpLawsuit1Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 企业涉诉查询3 -->
      <div
        v-if="curNav === 'entpLawsuit3'"
        class="creditmanagerightitem"
        key="entpLawsuit3"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="entpLawsuit3Form"
              :rules="formRules"
              ref="entpLawsuit3Form"
              :label-width="100"
            >
              <FormItem prop="name" label="企业名称：" class="formitemnoreddot">
                <Input
                  v-model.trim="entpLawsuit3Form.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="pageIndex"
                label="查询页数："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="entpLawsuit3Form.pageIndex"
                  placeholder="填写查询的具体页数"
                ></Input>
              </FormItem>
              <FormItem
                prop="dataType"
                label="案件类型："
                class="formitemnoreddot"
              >
                <Select
                  v-model="entpLawsuit3Form.dataType"
                  placeholder="请输入涉诉类型"
                >
                  <Option
                    v-for="list in dataType"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="entpLawsuit3Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 企业族谱信息查询  -->
      <div
        v-if="curNav === 'familyTree'"
        class="creditmanagerightitem"
        key="familyTree"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="familyTreeForm"
              :rules="formRules"
              ref="familyTreeForm"
              :label-width="100"
            >
              <FormItem prop="key" label="企业标识：" class="formitemnoreddot">
                <Input
                  v-model.trim="familyTreeForm.key"
                  placeholder="请输入企业全称、注册号、统一社会信用代码"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="familyTreeFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 发票信息查询 -->
      <div
        v-if="curNav === 'invoiceInfor'"
        class="creditmanagerightitem"
        key="invoiceInfor"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="invoiceInforForm"
              :rules="formRules"
              ref="invoiceInforForm"
              :label-width="100"
            >
              <FormItem
                prop="invoiceCode"
                label="发票代码："
                class="formitemnoreddot"
              >
                <Input v-model.trim="invoiceInforForm.invoiceCode"></Input>
              </FormItem>
              <FormItem
                prop="invoiceNo"
                label="发票号码："
                class="formitemnoreddot"
              >
                <Input v-model.trim="invoiceInforForm.invoiceNo"></Input>
              </FormItem>
              <FormItem
                prop="invoiceDate"
                label="开票日期："
                class="formitemnoreddot"
              >
                <DatePicker
                  type="date"
                  @on-change="invoiceInforInvoiceDate"
                ></DatePicker>
              </FormItem>
              <FormItem
                prop="invoiceMoney"
                label="不含税金额："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="invoiceInforForm.invoiceMoney"
                  laceholder="请输入纸质专用发票、机动车发票必填，二手车输入车价合计"
                ></Input>
              </FormItem>
              <FormItem
                prop="checkCode"
                label="校验码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="invoiceInforForm.checkCode"
                  placeholder="请输入填写后6位，纸质普通发票、电子普通发票"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="invoiceInforFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <!-- 好信工商通-->
      <div
        v-if="curNav === 'commercial'"
        class="creditmanagerightitem"
        key="commercial"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="commercialForm"
              :rules="formRules"
              ref="commercialForm"
              :label-width="100"
            >
              <FormItem
                prop="verifyType"
                label="认证类型："
                class="formitemnoreddot"
              >
                <Select
                  v-model="commercialForm.verifyType"
                  placeholder="请输入认证类型"
                >
                  <Option value="2">企业认证全称</Option>
                  <Option value="3">企业执照号码认证</Option>
                </Select>
              </FormItem>

              <FormItem
                prop="verifyKey"
                label="认证企业："
                class="formitemnoreddot"
              >
                <Input v-model.trim="commercialForm.verifyKey"></Input>
              </FormItem>

              <FormItem label="查询原因：" class="formitemnoreddot">
                <Select
                  v-model="creditScoreForm.reasonCode"
                  placeholder="请输入查询原因"
                >
                  <Option
                    v-for="list in reasonCodes"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>

              <div class="forBtnBox">
                <span
                  @click="commercialFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <!-- 身份证一致性图像验证 -->
      <div
        v-if="curNav === 'idcardImgCheck'"
        class="creditmanagerightitem"
        key="idcardImgCheck"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="idcardImgCheckForm"
              :rules="formRules"
              ref="idcardImgCheckForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="idcardImgCheckForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="idcardImgCheckForm.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <!-- 上传图像 -->
              <!-- <FormItem prop="imageUrl" label="普通生活照：" class="formitemnoreddot">
                <Input v-Kmodel.trim="idcardImgCheckForm.imageUrl" placeholder="(无反光、正脸、轮廓清晰)图片的url,只能是jpg格式"></Input>
                <Upload :action="//localhost:8888/api/tx/idcardImgCheck/">
                  <Button icon="ios-cloud-upload-outline">Upload files</Button>
                </Upload>
              </FormItem> -->
              <div class="forBtnBox">
                <span
                  @click="idcardImgCheckFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 身份证二元素验证 -->
      <div
        v-if="curNav === 'idcard2itemCheck'"
        class="creditmanagerightitem"
        key="idcard2itemCheck"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="idcard2itemCheckForm"
              :rules="formRules"
              ref="idcard2itemCheckForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="idcard2itemCheckForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="idcard2itemCheckForm.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="idcard2itemCheckFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 身份证三元素验证  -->
      <div
        v-if="curNav === 'idNoElement3'"
        class="creditmanagerightitem"
        key="idNoElement3"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="idNoElement3Form"
              :rules="formRules"
              ref="idNoElement3Form"
              :label-width="125"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="idNoElement3Form.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idCard"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="idNoElement3Form.idCard"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="beginDate"
                label="有效期起始日期："
                class="formitemnoreddot"
              >
                <DatePicker
                  type="date"
                  @on-change="idNoElement3BeginDate"
                ></DatePicker>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="idcard3itemCheckFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'carrierTwoVerification'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="carrierTwoVerificationForm"
              :rules="formRules"
              ref="carrierTwoVerificationForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="carrierTwoVerificationForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="carrierTwoVerificationForm.idNo"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="carrierTwoVerificationForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="carrierTwoVerificationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    <!-- 手机综合查询  -->
      <div
        v-if="curNav === 'mobileInquiry'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <Alert show-icon>
          报告详细描述：
          <span slot="desc"
            >该查询暂时只支持电信手机号码</span
          >
        </Alert>
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="mobileInquiryForm"
              :rules="formRules"
              ref="mobileInquiryForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="mobileInquiryForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="mobileInquiryForm.idNo"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="mobileInquiryForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>

              <FormItem
                prop="reasonCode"
                label="查询原因："
                class="formitemnoreddot"
              >
                <Select
                  v-model="mobileInquiryForm.reasonCode"
                  placeholder="请输入查询原因"
                >
                  <Option
                    v-for="list in reasonCodes"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>

              <div class="forBtnBox">
                <span
                  @click="mobileInquiryFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'statusOfMobilePhone'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="statusOfMobilePhoneForm"
              :rules="formRules"
              ref="statusOfMobilePhoneForm"
              :label-width="100"
            >
              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="statusOfMobilePhoneForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="statusOfMobilePhoneFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'phoneNumberDowntime'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="phoneNumberDowntimeForm"
              :rules="formRules"
              ref="phoneNumberDowntimeForm"
              :label-width="100"
            >
              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="phoneNumberDowntimeForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="phoneNumberDowntimeFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'frequentContacts'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="frequentContactsForm"
              :rules="formRules"
              ref="frequentContactsForm"
              :label-width="100"
            >
              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="frequentContactsForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <FormItem
                prop="cy_verifymobile"
                label="常用联系人："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="frequentContactsForm.cy_verifymobile"
                  placeholder="请输入常用联系人手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="frequentContactsFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'phoneVerification'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <Alert show-icon>
          报告详细描述：
          <span slot="desc"
            >验证手机号和证件号是否一致</span
          >
        </Alert>
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="phoneVerificationForm"
              :rules="formRules"
              ref="phoneVerificationForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="phoneVerificationForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="phoneVerificationForm.idNo"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>
              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="phoneVerificationForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="phoneVerificationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 通话关系验证 -->
      <div
        v-if="curNav === 'callRelationshipVerification'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="callRelationshipVerificationForm"
              :rules="formRules"
              ref="callRelationshipVerificationForm"
              :label-width="110"
            >
              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="callRelationshipVerificationForm.mobileNo"
                  placeholder="请输入联通手机号"
                ></Input>
              </FormItem>
              <FormItem
                prop="call_verifymobile"
                label="另一手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="
                    callRelationshipVerificationForm.call_verifymobile
                  "
                  placeholder="请输入另一个手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="callRelationshipVerificationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <!-- <div
        v-if="curNav === 'mobilePhoneNumberCurrentCityVer'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="mobilePhoneNumberCurrentCityVerForm"
              :rules="formRules"
              ref="mobilePhoneNumberCurrentCityVerForm"
              :label-width="100"
            >
              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="mobilePhoneNumberCurrentCityVerForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <FormItem
                prop="city_code"
                label="城市编码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="mobilePhoneNumberCurrentCityVerForm.city_code"
                  placeholder="请输入城市编码(区号)"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="mobilePhoneNumberCurrentCityVerFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div> -->

      <div
        v-if="curNav === 'vocationalQualificationCertificate'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="vocationalQualificationCertificateForm"
              :rules="formRules"
              ref="vocationalQualificationCertificateForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="vocationalQualificationCertificateForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="vocationalQualificationCertificateForm.idNo"
                  placeholder="请输入身份证号码"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="vocationalQualificationCertificateFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 多重借贷查询-A -->
      <div
        v-if="curNav === 'manyLiabilitiesQuery1'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="manyLiabilitiesQuery1Form"
              :rules="formRules"
              ref="manyLiabilitiesQuery1Form"
              :label-width="100"
            >
              <FormItem
                prop="mobile"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="manyLiabilitiesQuery1Form.mobile"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="manyLiabilitiesQuery1Fn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'bankCardThreeElementCertification'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankCardThreeElementCertificationForm"
              :rules="formRules"
              ref="bankCardThreeElementCertificationForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="bankCardThreeElementCertificationForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardThreeElementCertificationForm.idNo"
                  placeholder="请输入身份证号码"
                ></Input>
              </FormItem>
              <FormItem
                prop="accountNo"
                label="银行卡号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardThreeElementCertificationForm.accountNo"
                  placeholder="请输入银行卡号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="bankCardThreeElementCertificationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'IDCardValidityInquiry'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="IDCardValidityInquiryForm"
              :rules="formRules"
              ref="IDCardValidityInquiryForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="IDCardValidityInquiryForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="IDCardValidityInquiryForm.idNo"
                  placeholder="请输入身份证号码"
                ></Input>
              </FormItem>
              <FormItem
                prop="mobileNo"
                label="手机号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="IDCardValidityInquiryForm.mobileNo"
                  placeholder="请输入手机号码"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="IDCardValidityInquiryFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'bankCardTwoElementCertification'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankCardTwoElementCertificationForm"
              :rules="formRules"
              ref="bankCardTwoElementCertificationForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="bankCardTwoElementCertificationForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardTwoElementCertificationForm.idNo"
                  placeholder="请输入身份证号码"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="bankCardTwoElementCertificationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'bankCardFourElementCertification'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="bankCardFourElementCertificationForm"
              :rules="formRules"
              ref="bankCardFourElementCertificationForm"
              :label-width="100"
            >
              <FormItem prop="name" label="真实姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="bankCardFourElementCertificationForm.name"
                  placeholder="请输入真实姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="idNo"
                label="身份证号码："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="bankCardFourElementCertificationForm.idNo"
                  placeholder="请输入身份证号码"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="bankCardFourElementCertificationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 车辆违章信息 -->
      <div
        v-if="curNav === 'vehicleViolationInformation'"
        class="creditmanagerightitem"
        key="probeReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="vehicleViolationInformationForm"
              :rules="formRules"
              ref="vehicleViolationInformationForm"
              :label-width="112"
            >
              <FormItem
                prop="carType"
                label="车辆类型："
                class="formitemnoreddot"
              >
                <Select
                  v-model="vehicleViolationInformationForm.carType"
                  placeholder="请选择车辆类型"
                >
                  <Option value="01" disabled>大型车</Option>
                  <Option value="02">小型汽车</Option>
                </Select>
              </FormItem>
              <FormItem
                prop="carNo"
                label="违章车牌号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="vehicleViolationInformationForm.carNo"
                  placeholder="请输入违章车牌号"
                ></Input>
              </FormItem>
              <FormItem
                prop="vehicleFrameNo"
                label="违章车架号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="vehicleViolationInformationForm.vehicleFrameNo"
                  placeholder="请输入违章车架号"
                ></Input>
              </FormItem>
              <FormItem
                prop="engineNo"
                label="违章发动机号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="vehicleViolationInformationForm.engineNo"
                  placeholder="请输入违章发动机号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="vehicleViolationInformationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'propertyVerification'"
        class="creditmanagerightitem"
        key="propertyVerification"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="propertyVerificationForm"
              :rules="formRules"
              ref="propertyVerificationForm"
              :label-width="112"
            >
              <FormItem prop="idNo" label="身份证号：" class="formitemnoreddot">
                <Input
                  v-model.trim="propertyVerificationForm.idNo"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>

              <FormItem prop="name" label="姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="propertyVerificationForm.name"
                  placeholder="请输入姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="mobileNo"
                label="手机号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="propertyVerificationForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <FormItem
                prop="reasonCode"
                label="查询原因："
                class="formitemnoreddot"
              >
                <Select
                  v-model="propertyVerificationForm.reasonCode"
                  placeholder="请输入查询原因"
                >
                  <Option
                    v-for="list in reasonCodes"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="propertyVerificationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    <!-- 风险度提示 -->
      <div
        v-if="curNav === 'riskWarning'"
        class="creditmanagerightitem"
        key="riskWarning"
      >
        <Alert show-icon>
          报告详细描述：
          <span slot="desc">
              个人风险度结果查询
          </span
          >
        </Alert>
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="riskWarningForm"
              :rules="formRules"
              ref="riskWarningForm"
              :label-width="112"
            >
              <FormItem prop="idNo" label="证件号：" class="formitemnoreddot">
                <Input
                  v-model.trim="riskWarningForm.idNo"
                  placeholder="请输入证件号"
                ></Input>
              </FormItem>
              <FormItem prop="name" label="姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="riskWarningForm.name"
                  placeholder="请输入姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="reasonCode"
                label="查询原因："
                class="formitemnoreddot"
              >
                <Select
                  v-model="riskWarningForm.reasonCode"
                  placeholder="请输入查询原因"
                >
                  <Option
                    v-for="list in reasonCodes"
                    :value="list.value"
                    :key="list.value"
                    >{{ list.label }}</Option
                  >
                </Select>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="riskWarningFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'workUnitVerification'"
        class="creditmanagerightitem"
        key="workUnitVerification"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="workUnitVerificationForm"
              :rules="formRules"
              ref="workUnitVerificationForm"
              :label-width="112"
            >
              <FormItem prop="idNo" label="证件号：" class="formitemnoreddot">
                <Input
                  v-model.trim="workUnitVerificationForm.idNo"
                  placeholder="请输入证件号"
                ></Input>
              </FormItem>
              <FormItem prop="name" label="姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="workUnitVerificationForm.name"
                  placeholder="请输入姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="mobileNo"
                label="手机号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="workUnitVerificationForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <FormItem
                prop="company"
                label="公司名称："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="workUnitVerificationForm.company"
                  placeholder="请输入公司名称"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="workUnitVerificationFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 关联人关系验证 -->
      <div
        v-if="curNav === 'verificationRelations'"
        class="creditmanagerightitem"
        key="verificationRelations"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="verificationRelationsForm"
              :rules="formRules"
              ref="verificationRelationsForm"
              :label-width="112"
            >
              <FormItem prop="idNo" label="身份证号：" class="formitemnoreddot">
                <Input
                  v-model.trim="verificationRelationsForm.idNo"
                  placeholder="请输入身份证号"
                ></Input>
              </FormItem>

              <FormItem prop="name" label="姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="verificationRelationsForm.name"
                  placeholder="请输入姓名"
                ></Input>
              </FormItem>

              <FormItem
                prop="mobileNo"
                label="手机号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="verificationRelationsForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>

              <FormItem
                prop="relationName"
                label="关系人名称："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="verificationRelationsForm.relationName"
                  placeholder="请输入关系人名称："
                ></Input>
              </FormItem>

              <FormItem
                prop="relationPhone"
                label="关系人电话号:"
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="verificationRelationsForm.relationPhone"
                  placeholder="请输入所属关系人电话号："
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="verificationRelationsFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'multiCreditBehaviorRiskAssessment'"
        class="creditmanagerightitem"
        key="multiCreditBehaviorRiskAssessment"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i
                >（{{ navList.find(e => e.key === curNav).price }}元/次）</i
              ></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="multiCreditBehaviorRiskAssessmentForm"
              :rules="formRules"
              ref="multiCreditBehaviorRiskAssessmentForm"
              :label-width="112"
            >
              <FormItem prop="idNo" label="身份证号：" class="formitemnoreddot">
                <Input
                  v-model.trim="multiCreditBehaviorRiskAssessmentForm.idNo"
                  placeholder="请输入证件号"
                ></Input>
              </FormItem>

              <FormItem prop="name" label="姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="multiCreditBehaviorRiskAssessmentForm.name"
                  placeholder="请输入姓名"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="multiCreditBehaviorRiskAssessmentFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>

      <div
        v-if="curNav === 'personalEducationReport'"
        class="creditmanagerightitem"
        key="personalEducationReport"
      >
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i>（8元/次）</i></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="personalEducationReportForm"
              :rules="formRules"
              ref="personalEducationReportForm"
              :label-width="112"
            >
              <FormItem prop="name" label="姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="personalEducationReportForm.name"
                  placeholder="请输入姓名"
                ></Input>
              </FormItem>
              <FormItem prop="idNo" label="证件号：" class="formitemnoreddot">
                <Input
                  v-model.trim="personalEducationReportForm.idNo"
                  placeholder="请输入证件号"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="personalEducationReportFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <!-- 欺诈度提示 -->
      <div
        v-if="curNav === 'fraudAlert'"
        class="creditmanagerightitem"
        key="fraudAlert"
      >
        <Alert show-icon>
          报告详细描述：
          <span slot="desc"
            >该服务是一种针对个人身份证件号和查询原因，提供暴力破解、DNS服务器、第三方标注黑名单等风险命中数据的服务</span
          >
        </Alert>
        <div class="formHead">
          <div class="titleBox">
            <span class="titleTxt font_16"
              ><b class="primary">{{
                navList.find(e => e.key === curNav).name
              }}</b
              >&nbsp;<i>( 8元/次 )</i></span
            >
          </div>
        </div>
        <Row>
          <Col span="12" offset="6">
            <Form
              :model="fraudAlertForm"
              :rules="formRules"
              ref="fraudAlertForm"
              :label-width="112"
            >
              <FormItem prop="idNo" label="证件号：" class="formitemnoreddot">
                <Input
                  v-model.trim="fraudAlertForm.idNo"
                  placeholder="请输入证件号"
                ></Input>
              </FormItem>
              <FormItem prop="name" label="姓名：" class="formitemnoreddot">
                <Input
                  v-model.trim="fraudAlertForm.name"
                  placeholder="请输入姓名"
                ></Input>
              </FormItem>
              <FormItem
                prop="mobileNo"
                label="手机号："
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="fraudAlertForm.mobileNo"
                  placeholder="请输入手机号"
                ></Input>
              </FormItem>
              <FormItem prop="ip" label="ip：" class="formitemnoreddot">
                <Input
                  v-model.trim="fraudAlertForm.ip"
                  placeholder="请输入ip地址，类似 0.0.0.1"
                ></Input>
              </FormItem>
              <div class="forBtnBox">
                <span
                  @click="fraudAlertFn"
                  :loading="commonForm.loading"
                  class="submitBtn common_btn primary_bg"
                  >提交查询</span
                >
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>

    <!-- 查询记录弹窗 -->
    <Modal
      v-model="recordModal"
      :mask-closable="false"
      :width="1056"
      ok-text="关闭"
      class-name="commonmodalwrap"
    >
      <div class="commonmodalhead" slot="header">
        <p>{{ navList.find(e => e.key === curNav).name }}（查询记录）</p>
      </div>
      <div class="commonmodalcenter">
        <div class="recordheader" style="margin-bottom: 15px;">
          <DatePicker
            v-model="recordData.time"
            @on-change="recordTimeChange"
            type="daterange"
            :options="dataTimeOpt"
            placeholder="选择起止时间"
          ></DatePicker>
          <Button
            @click="(recordData.page = 1), getRecord()"
            type="primary"
            style="margin-left: 9px;"
            >搜索</Button
          >
        </div>
        <div class="recordbody">
          <div v-if="curNav === 'providentFund'"></div>
          <div v-else>
            <Table
              :columns="recordColumns"
              :data="recordData.list"
              :loading="recordData.loading"
              border
            ></Table>
          </div>
          <div class="commonpagenav">
            <Page
              :current.sync="recordData.page"
              :page-size="recordData.perpage"
              :total="recordData.total"
              @on-change="changeRecordPage"
            ></Page>
          </div>
        </div>
      </div>
    </Modal>

    <!-- v2 版结果弹窗 -->
    <Modal
      v-model="resultModalV2"
      :mask-closable="false"
      :fullscreen="true"
      width="100%"
      ok-text="关闭"
      class-name="commonmodalwrap tanzhiresultModal"
    >
      <div class="commonmodalhead" slot="header">
        <p>{{ navList.find(e => e.key === curNav).name }}（查询结果）</p>
      </div>
      <div class="commonmodalcenter">
        <!-- 请求过程 -->
        <div v-if="commonForm.loading">
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
          <div
            v-if="
              !commonForm.errorMsg &&
                commonForm.data &&
                commonForm.data.checkStatus !== 'NO_DATA' &&
                commonForm.data.status !== 'NO_DATA'
            "
          >
            <!-- 当有数据才展示数据 避免报错 -->
            <Button
              type="primary"
              style="margin: 9px 0px 0px 5px"
              @click="getPdf(navList.find(e => e.key === curNav).name)"
              >导出PDF</Button
            >
            <div id="pdfDom" v-if="commonForm.data" style="padding:15px;">
              <!-- 多重借贷查询-A  -->
              <div v-if="curNav === 'manyLiabilitiesQuery1'">
                <manyLiabilitiesQuery1
                  :data="commonForm.data"
                ></manyLiabilitiesQuery1>
              </div>

              <div v-if="curNav === 'verificationRelations'">
                <contactsRelation :data="commonForm.data"></contactsRelation>
              </div>

              <div v-if="curNav === 'providentFund'">
                <providentFundPanel
                  :data="commonForm.data"
                ></providentFundPanel>
              </div>
              <div v-if="curNav === 'socialSecurity'">
                <socialSecurityPanel
                  :data="commonForm.data"
                ></socialSecurityPanel>
              </div>
              <div v-if="curNav === 'education'">
                <p style="font-size: 18px; font-weight: bold; margin: 10px 0;">
                  个人信息：
                </p>
                <div>
                  <img
                    :src="commonForm.data.img_photo"
                    alt
                    style="margin-right: 70px;"
                  />
                  <img :src="commonForm.data.img_info" alt />
                </div>
                <p style="font-size: 18px; font-weight: bold; margin: 10px 0;">
                  学历信息：
                </p>
                <div>
                  <img
                    :src="commonForm.data.student_img_photo"
                    alt
                    style="margin-right: 70px;"
                  />
                  <img :src="commonForm.data.student_img_info" alt />
                </div>
              </div>
              <div v-if="curNav === 'taobao'">
                <taobaoPanel :data="commonForm.data"></taobaoPanel>
              </div>
              <div v-if="curNav === 'operatorDetails'">
                <operatorDetailsPanel
                  :data="commonForm.data"
                ></operatorDetailsPanel>
              </div>
              <div v-if="curNav === 'bankFlow'">
                <bankFlowPanel :data="commonForm.data"></bankFlowPanel>
              </div>
              <div v-if="curNav === 'bankCardAuth'">
                <bankCardAuthPanel
                  :data="commonForm.data"
                  :key="bankCardAuthKey"
                ></bankCardAuthPanel>
              </div>
              <div v-if="curNav === 'jd'">
                <p style="margin: 20px 0 10px;">基本信息：</p>
                <Table
                  :columns="jdBaseColumns"
                  :data="
                    commonForm.data.basicInfo ? [commonForm.data.basicInfo] : []
                  "
                  border
                ></Table>
                <p style="margin: 20px 0 10px;">银行卡信息：</p>
                <Table
                  :columns="jdBankColumns"
                  :data="commonForm.data.bankInfo"
                  border
                ></Table>
                <p style="margin: 20px 0 10px;">白条信息：</p>
                <Table
                  :columns="jdBaitiaoColumns"
                  :data="
                    commonForm.data.baiTiaoInfo
                      ? [commonForm.data.baiTiaoInfo]
                      : []
                  "
                  border
                ></Table>
                <p style="margin: 20px 0 10px;">收货地址信息：</p>
                <Table
                  :columns="jdAddressColumns"
                  :data="
                    commonForm.data.addressInfo
                      ? commonForm.data.addressInfo
                      : []
                  "
                  border
                ></Table>
                <p style="margin: 20px 0 10px;">订单信息：</p>
                <Table
                  :columns="jdOrderColumns"
                  :data="commonForm.data.orderDetail"
                  border
                ></Table>
              </div>
              <div v-if="curNav === 'taobaoReport'">
                <taobaoReportPanel :data="commonForm.data"></taobaoReportPanel>
              </div>
              <div v-if="curNav === 'operatorReport'">
                <operatorReportPanel
                  :data="commonForm.data"
                ></operatorReportPanel>
              </div>
              <div v-if="curNav === 'alipay'">
                <alipayPanel :data="commonForm.data"></alipayPanel>
              </div>
              <div v-if="curNav === 'jdReport'">
                <taobaoReportPanel
                  :data="commonForm.data"
                  type="jd"
                ></taobaoReportPanel>
              </div>
              <!-- <div v-if="curNav === 'probeReport'">
                <p style="margin: 20px 0 10px;">周期评分：</p>
                <Table
                  :columns="probeReportScoreColumns"
                  :data="commonForm.data ? [commonForm.data] : []"
                  border
                ></Table>
                <p style="margin: 20px 0 10px;">报告基本信息：</p>
                <Table
                  :columns="probeReportInfoColumns"
                  :data="
                    commonForm.data.report_info
                      ? [commonForm.data.report_info]
                      : []
                  "
                  border
                ></Table>
                <p style="margin: 20px 0 10px;">运营商基本信息：</p>
                <Table
                  :columns="probeReportBaseColumns"
                  :data="
                    commonForm.data.basic_info
                      ? [commonForm.data.basic_info]
                      : []
                  "
                  border
                ></Table>
                <p style="margin: 20px 0 10px;">身份证匹配的其它手机号码：</p>
                <Table
                  :columns="probeReportPhoneColumns"
                  :data="commonForm.data.relationPhone_infos"
                  border
                ></Table>
                <div
                  v-for="(v, index) in commonForm.data.mb_infos"
                  :key="index"
                  style="padding: 25px 10px 10px; margin: 25px 0; border: 1px solid #dcdee2;"
                >
                  <div>
                    <p style="font-weight: bold;">
                      手机号：{{ v.phone_number }}
                    </p>
                    <p style="font-weight: bold;">描述：{{ v.describle }}</p>
                  </div>
                  <p style="margin: 20px 0 10px;">近一年借贷历史：</p>
                  <Table
                    height="580"
                    :columns="probeReportSectionsColumns"
                    :data="v.credit_info.sections"
                    border
                  ></Table>
                  <p style="margin: 20px 0 10px;">借贷中涉及的平台数统计：</p>
                  <Table
                    :columns="probeReportPlatformInfosColumns"
                    :data="v.credit_info.platform_Infos"
                    border
                  ></Table>
                  <p style="margin: 20px 0 10px;">借贷事件数统计：</p>
                  <Table
                    :columns="probeReportEveSumsColumns"
                    :data="v.credit_info.eveSums"
                    border
                  ></Table>
                  <p style="margin: 20px 0 10px;">参考统计变量：</p>
                  <Table
                    :columns="probeReportRefInfosColumns"
                    :data="v.credit_info.refInfos"
                    border
                  ></Table>
                </div>
              </div> -->
              <div v-if="curNav === 'lostLetter'">
                <lostLetterPanel :data="commonForm.data"></lostLetterPanel>
              </div>

              <div v-if="curNav === 'addressVerif'">
                <addressVerif :data="commonForm.data"></addressVerif>
              </div>

              <div v-if="curNav === 'phoneTime'">
                <phoneTimePanel :data="commonForm.data"></phoneTimePanel>
              </div>
              <div v-if="curNav === 'phoneStatus'">
                <phoneStatusPanel :data="commonForm.data"></phoneStatusPanel>
              </div>
              <div v-if="curNav === 'carMaintenance'">
                <carMaintenancePanel
                  :data="commonForm.data"
                ></carMaintenancePanel>
              </div>
              <div v-if="curNav === 'carCollisionData'">
                <carCollisionDataPanel
                  :data="commonForm.data"
                  :key="carCollisionDataKey"
                ></carCollisionDataPanel>
              </div>
              <div v-if="curNav === 'carAccurateValuation'">
                <carAccurateValuationPanel
                  :data="commonForm.data"
                ></carAccurateValuationPanel>
              </div>
              <div v-if="curNav === 'carrierTwoVerification'">
                <carrierTwoVerificationPanel
                  :data="commonForm.data"
                ></carrierTwoVerificationPanel>
              </div>
              <div v-if="curNav === 'statusOfMobilePhone'">
                <statusOfMobilePhonePanel
                  :data="commonForm.data"
                ></statusOfMobilePhonePanel>
              </div>
              <div v-if="curNav === 'phoneNumberDowntime'">
                <phoneNumberDowntimePanel
                  :data="commonForm.data"
                ></phoneNumberDowntimePanel>
              </div>
              <div v-if="curNav === 'frequentContacts'">
                <frequentContactsPanel
                  :data="commonForm.data"
                ></frequentContactsPanel>
              </div>
              <div v-if="curNav === 'phoneVerification'">
                <phoneVerificationPanel
                  :data="commonForm.data"
                ></phoneVerificationPanel>
              </div>
              <div v-if="curNav === 'callRelationshipVerification'">
                <callRelationshipVerificationPanel
                  :data="commonForm.data"
                ></callRelationshipVerificationPanel>
              </div>
              <div v-if="curNav === 'mobilePhoneNumberCurrentCityVer'">
                <mobilePhoneNumberCurrentCityVerPanel
                  :data="commonForm.data"
                ></mobilePhoneNumberCurrentCityVerPanel>
              </div>
              <div v-if="curNav === 'vocationalQualificationCertificate'">
                <vocationalQualificationCertificatePanel
                  :data="commonForm.data"
                ></vocationalQualificationCertificatePanel>
              </div>
              <div v-if="curNav === 'bankCardThreeElementCertification'">
                <bankCardThreeElementCertificationPanel
                  :data="commonForm.data"
                ></bankCardThreeElementCertificationPanel>
              </div>
              <div v-if="curNav === 'IDCardValidityInquiry'">
                <IDCardValidityInquiryPanel
                  :data="commonForm.data"
                ></IDCardValidityInquiryPanel>
              </div>
              <div v-if="curNav === 'bankCardTwoElementCertification'">
                <bankCardTwoElementCertificationPanel
                  :data="commonForm.data"
                ></bankCardTwoElementCertificationPanel>
              </div>
              <div v-if="curNav === 'bankCardFourElementCertification'">
                <bankCardFourElementCertificationPanel
                  :data="commonForm.data"
                ></bankCardFourElementCertificationPanel>
              </div>
              <div v-if="curNav === 'vehicleViolationInformation'">
                <vehicleViolationInformationPanel
                  :data="commonForm.data"
                ></vehicleViolationInformationPanel>
              </div>
              <div v-if="curNav === 'propertyVerification'">
                <propertyVerificationPanel
                  :data="commonForm.data"
                ></propertyVerificationPanel>
              </div>
              <div v-if="curNav === 'riskWarning'">
                <riskWarningPanel :data="commonForm.data"></riskWarningPanel>
              </div>
              <div v-if="curNav === 'workUnitVerification'">
                <workUnitVerificationPanel
                  :data="commonForm.data"
                ></workUnitVerificationPanel>
              </div>
              <div v-if="curNav === 'multiCreditBehaviorRiskAssessment'">
                <multiCreditBehaviorRiskAssessmentPanel
                  :data="commonForm.data"
                ></multiCreditBehaviorRiskAssessmentPanel>
              </div>
              <div v-if="curNav === 'personalEducationReport'">
                <personalEducationReportPanel
                  :data="commonForm.data"
                ></personalEducationReportPanel>
              </div>
              <div v-if="curNav === 'fraudAlert'">
                <fraudAlertPanel :data="commonForm.data"></fraudAlertPanel>
              </div>

              <!-- 时间征信数据-->
              <div v-if="curNav === 'executives'">
                <executives :data="commonForm.data"></executives>
              </div>

              <div v-if="curNav === 'creditScore'">
                <creditScore
                  :data="commonForm.data.records.result"
                ></creditScore>
              </div>

              <!-- 天行数据 -->
              <!-- 个人名下企业查询 -->
              <div v-if="curNav === 'personalEnterprise'">
                <personalEnterprise
                  :data="commonForm.data"
                ></personalEnterprise>
              </div>

              <div v-if="curNav === 'vinDetail'">
                <vinDetailPanel :data="commonForm.data"></vinDetailPanel>
              </div>
              <div v-if="curNav === 'license'">
                <licensePanel :data="commonForm.data"></licensePanel>
              </div>
              <div v-if="curNav === 'airTravel'">
                <airTravelPanel :data="commonForm.data"></airTravelPanel>
              </div>
              <div v-if="curNav === 'driveLicenceInfo'">
                <driveLicenceInfoPanel
                  :data="commonForm.data"
                ></driveLicenceInfoPanel>
              </div>
              <div v-if="curNav === 'driverPointer'">
                <driverPointerPanel
                  :data="commonForm.data"
                ></driverPointerPanel>
              </div>
              <div v-if="curNav === 'trafficViolation'">
                <trafficViolationPanel
                  :data="commonForm.data"
                ></trafficViolationPanel>
              </div>
              <div v-if="curNav === 'exitPermit'">
                <exitPermitPanel :data="commonForm.data"></exitPermitPanel>
              </div>
              <!-- <div v-if="curNav == 'debtDetail'">
								<debtDetailPanel :data="commonForm.data"></debtDetailPanel>
              </div>-->
              <div v-if="curNav === 'negative'">
                <negativePanel :data="commonForm.data"></negativePanel>
              </div>
              <div v-if="curNav === 'hisLawsuit1'">
                <hisLawsuit1Panel :data="commonForm.data"></hisLawsuit1Panel>
              </div>
              <div v-if="curNav === 'hisLawsuit2'">
                <hisLawsuit2Panel :data="commonForm.data"></hisLawsuit2Panel>
              </div>
              <div v-if="curNav === 'hisLawsuit3'">
                <hisLawsuit3Panel :data="commonForm.data"></hisLawsuit3Panel>
              </div>
              <div v-if="curNav === 'hisCreditCheck1'">
                <hisCreditCheck1Panel
                  :data="commonForm.data"
                ></hisCreditCheck1Panel>
              </div>
              <div v-if="curNav === 'lawsuitDetail1'">
                <lawsuitDetail1Panel
                  :data="commonForm.data"
                ></lawsuitDetail1Panel>
              </div>
              <div v-if="curNav === 'commercial'">
                <commercial :data="commonForm.data"></commercial>
              </div>

              <div v-if="curNav === 'lawsuitDetail3'">
                <lawsuitDetail3Panel
                  :data="commonForm.data"
                ></lawsuitDetail3Panel>
              </div>
              <div v-if="curNav === 'bankCardDealQuery'">
                <bankCardDealQueryPanel
                  :data="commonForm.data"
                ></bankCardDealQueryPanel>
              </div>
              <div v-if="curNav === 'bankCardRegQuery'">
                <bankCardRegQueryPanel
                  :data="commonForm.data"
                ></bankCardRegQueryPanel>
              </div>
              <div v-if="curNav === 'bankCard2itemCheck'">
                <bankCard2itemCheckPanel
                  :data="commonForm.data"
                ></bankCard2itemCheckPanel>
              </div>
              <div v-if="curNav === 'bankCard3itemCheck1'">
                <bankCard3itemCheck1Panel
                  :data="commonForm.data"
                ></bankCard3itemCheck1Panel>
              </div>
              <div v-if="curNav === 'bankCard3itemCheck2'">
                <bankCard3itemCheck2Panel
                  :data="commonForm.data"
                ></bankCard3itemCheck2Panel>
              </div>
              <div v-if="curNav === 'bankCard4itemCheck'">
                <bankCard4itemCheckPanel
                  :data="commonForm.data"
                ></bankCard4itemCheckPanel>
              </div>
              <div v-if="curNav === 'icbcData'">
                <icbcDataPanel :data="commonForm.data"></icbcDataPanel>
              </div>
              <div v-if="curNav === 'familyTree'">
                <familyTreePanel :data="commonForm.data"></familyTreePanel>
              </div>
              <div v-if="curNav === 'invoiceInfor'">
                <invoiceInforPanel :data="commonForm.data"></invoiceInforPanel>
              </div>
              <div v-if="curNav === 'idcardImgCheck'">
                <idcardImgCheckPanel
                  :data="commonForm.data"
                ></idcardImgCheckPanel>
              </div>
              <div v-if="curNav === 'idcard2itemCheck'">
                <idcard2itemCheckPanel
                  :data="commonForm.data"
                ></idcard2itemCheckPanel>
              </div>
              <div v-if="curNav === 'idcard3itemCheck'">
                <idcard3itemCheckPanel
                  :data="commonForm.data"
                ></idcard3itemCheckPanel>
              </div>
              <div v-if="curNav === 'entpLawsuit1'">
                <entpLawsuit1Panel :data="commonForm.data"></entpLawsuit1Panel>
              </div>
              <div v-if="curNav === 'entpLawsuit2'">
                <entpLawsuit2Panel :data="commonForm.data"></entpLawsuit2Panel>
              </div>
              <div v-if="curNav === 'entpLawsuit3'">
                <entpLawsuit3Panel :data="commonForm.data"></entpLawsuit3Panel>
              </div>
            </div>
          </div>
          <!-- 无错误但是无数据 -->
          <div
            v-else-if="
              !commonForm.errorMsg
            "
          >
            <Alert show-icon style="text-align:center;">暂无数据</Alert>
          </div>
          <!-- 有错误 -->
          <div
            v-else
            style="color: #f00; margin-top: 54px; text-align: center;"
          >
            <Alert type="error" show-icon style="text-align:center;">{{
              commonForm.errorMsg
            }}</Alert>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import {
  checkPhone
} from '@/common/lib/check'
import { mapActions } from 'vuex'
import operatorReportPanel from '@/components/personalModal/operatorReportPanel'
import taobaoReportPanel from '@/components/personalModal/taobaoReportPanel'
import alipayPanel from '@/components/personalModal/alipayPanel'
import bankFlowPanel from '@/components/personalModal/bankFlowPanel'
import taobaoPanel from '@/components/personalModal/taobaoPanel'
import operatorDetailsPanel from '@/components/personalModal/operatorDetailsPanel'
import providentFundPanel from '@/components/personalModal/providentFundPanel'
import socialSecurityPanel from '@/components/personalModal/socialSecurityPanel'
import bankCardAuthPanel from '@/components/personalModal/bankCardAuthPanel'
import lostLetterPanel from '@/components/personalModal/lostLetterPanel'
import phoneTimePanel from '@/components/personalModal/phoneTimePanel'
import phoneStatusPanel from '@/components/personalModal/phoneStatusPanel'
import carMaintenancePanel from '@/components/personalModal/carMaintenancePanel'
import carCollisionDataPanel from '@/components/personalModal/carCollisionDataPanel'
import carAccurateValuationPanel from '@/components/personalModal/carAccurateValuationPanel'
import carrierTwoVerificationPanel from '@/components/personalModal/carrierTwoVerificationPanel'
import statusOfMobilePhonePanel from '@/components/personalModal/statusOfMobilePhonePanel'
import phoneNumberDowntimePanel from '@/components/personalModal/phoneNumberDowntimePanel'
import frequentContactsPanel from '@/components/personalModal/frequentContactsPanel'
import phoneVerificationPanel from '@/components/personalModal/phoneVerificationPanel'
import callRelationshipVerificationPanel from '@/components/personalModal/callRelationshipVerificationPanel'
import mobilePhoneNumberCurrentCityVerPanel from '@/components/personalModal/mobilePhoneNumberCurrentCityVerPanel'
import vocationalQualificationCertificatePanel from '@/components/personalModal/vocationalQualificationCertificatePanel'
import bankCardThreeElementCertificationPanel from '@/components/personalModal/bankCardThreeElementCertificationPanel'
import IDCardValidityInquiryPanel from '@/components/personalModal/IDCardValidityInquiryPanel'
import bankCardTwoElementCertificationPanel from '@/components/personalModal/bankCardTwoElementCertificationPanel'
import bankCardFourElementCertificationPanel from '@/components/personalModal/bankCardFourElementCertificationPanel'
import vehicleViolationInformationPanel from '@/components/personalModal/vehicleViolationInformationPanel'
import propertyVerificationPanel from '@/components/personalModal/propertyVerificationPanel'
import riskWarningPanel from '@/components/personalModal/riskWarningPanel'
import workUnitVerificationPanel from '@/components/personalModal/workUnitVerificationPanel'
import multiCreditBehaviorRiskAssessmentPanel from '@/components/personalModal/multiCreditBehaviorRiskAssessmentPanel'
import personalEducationReportPanel from '@/components/personalModal/personalEducationReportPanel'
import fraudAlertPanel from '@/components/personalModal/fraudAlertPanel'
import vinDetailPanel from '@/components/personalModal/vinDetailPanel'
import licensePanel from '@/components/personalModal/licensePanel'
import airTravelPanel from '@/components/personalModal/airTravelPanel'
import driveLicenceInfoPanel from '@/components/personalModal/driveLicenceInfoPanel'
import driverPointerPanel from '@/components/personalModal/driverPointerPanel'
import trafficViolationPanel from '@/components/personalModal/trafficViolationPanel'
import exitPermitPanel from '@/components/personalModal/exitPermitPanel'
// import debtDetailPanel from "@/components/personalModal/debtDetailPanel";
import negativePanel from '@/components/personalModal/negativePanel'
import hisLawsuit1Panel from '@/components/personalModal/hisLawsuit1Panel'
import hisLawsuit2Panel from '@/components/personalModal/hisLawsuit2Panel'
import hisLawsuit3Panel from '@/components/personalModal/hisLawsuit3Panel'
import hisCreditCheck1Panel from '@/components/personalModal/hisCreditCheck1Panel'
import lawsuitDetail1Panel from '@/components/personalModal/lawsuitDetail1Panel'
import lawsuitDetail3Panel from '@/components/personalModal/lawsuitDetail3Panel'
import bankCardDealQueryPanel from '@/components/personalModal/bankCardDealQueryPanel'
import bankCardRegQueryPanel from '@/components/personalModal/bankCardRegQueryPanel'
import bankCard2itemCheckPanel from '@/components/personalModal/bankCard2itemCheckPanel'
import bankCard3itemCheck1Panel from '@/components/personalModal/bankCard3itemCheck1Panel'
import bankCard3itemCheck2Panel from '@/components/personalModal/bankCard3itemCheck2Panel'
import bankCard4itemCheckPanel from '@/components/personalModal/bankCard4itemCheckPanel'
import icbcDataPanel from '@/components/personalModal/icbcDataPanel'
import familyTreePanel from '@/components/personalModal/familyTreePanel'
import invoiceInforPanel from '@/components/personalModal/invoiceInforPanel'
import idcardImgCheckPanel from '@/components/personalModal/idcardImgCheckPanel'
import idcard2itemCheckPanel from '@/components/personalModal/idcard2ItemCheckPanel'
import idcard3itemCheckPanel from '@/components/personalModal/idcard3ItemCheckPanel'
import entpLawsuit1Panel from '@/components/personalModal/entpLawsuit1Panel'
import entpLawsuit2Panel from '@/components/personalModal/entpLawsuit2Panel'
import entpLawsuit3Panel from '@/components/personalModal/entpLawsuit3Panel'
import manyLiabilitiesQuery1 from '@/components/personalModal/manyLiabilitiesQuery1'
import personalEnterprise from '@/components/personalModal/personalEnterprise'
import executives from '@/components/personalModal/executives'
import creditScore from '@/components/personalModal/creditScore'
import commercial from '@/components/personalModal/commercial'
import contactsRelation from '@/components/personalModal/contactsRelation'
// import FileUpload from '@/components/upload';
import addressVerif from '@/components/personalModal/addressVerif'

export default {
  name: 'CreditManage',
  components: {
    providentFundPanel,
    socialSecurityPanel,
    operatorReportPanel,
    taobaoReportPanel,
    alipayPanel,
    bankFlowPanel,
    taobaoPanel,
    operatorDetailsPanel,
    bankCardAuthPanel,
    lostLetterPanel,
    phoneTimePanel,
    phoneStatusPanel,
    carMaintenancePanel,
    carCollisionDataPanel,
    carAccurateValuationPanel,
    carrierTwoVerificationPanel,
    statusOfMobilePhonePanel,
    phoneNumberDowntimePanel,
    frequentContactsPanel,
    phoneVerificationPanel,
    callRelationshipVerificationPanel,
    mobilePhoneNumberCurrentCityVerPanel,
    vocationalQualificationCertificatePanel,
    // debtDetailPanel,
    bankCardThreeElementCertificationPanel,
    IDCardValidityInquiryPanel,
    bankCardTwoElementCertificationPanel,
    bankCardFourElementCertificationPanel,
    vehicleViolationInformationPanel,
    propertyVerificationPanel,
    riskWarningPanel,
    workUnitVerificationPanel,
    multiCreditBehaviorRiskAssessmentPanel,
    personalEducationReportPanel,
    fraudAlertPanel,
    vinDetailPanel,
    licensePanel,
    airTravelPanel,
    driveLicenceInfoPanel,
    driverPointerPanel,
    trafficViolationPanel,
    exitPermitPanel,
    negativePanel,
    hisLawsuit1Panel,
    hisLawsuit2Panel,
    hisLawsuit3Panel,
    hisCreditCheck1Panel,
    lawsuitDetail1Panel,
    lawsuitDetail3Panel,
    bankCardDealQueryPanel,
    bankCardRegQueryPanel,
    bankCard2itemCheckPanel,
    bankCard3itemCheck1Panel,
    bankCard3itemCheck2Panel,
    bankCard4itemCheckPanel,
    icbcDataPanel,
    familyTreePanel,
    invoiceInforPanel,
    idcardImgCheckPanel,
    idcard2itemCheckPanel,
    idcard3itemCheckPanel,
    entpLawsuit1Panel,
    entpLawsuit2Panel,
    entpLawsuit3Panel,
    manyLiabilitiesQuery1,
    personalEnterprise,
    executives,
    creditScore,
    commercial,
    contactsRelation,
    addressVerif
  },
  computed: {
  },
  data () {
    const validateIdNo = (rule, value, callback) => {
      let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (value === '') {
        callback(new Error('身份证号不能为空'))
      } else if (!(reg).test(value)) {
        callback(new Error('请输入正确的身份证号！'))
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

    const mLv = value => {
      switch (value) {
        case 'A':
          value = '0-500元'
          break
        case 'B':
          value = '500-1000 元'
          break
        case 'C':
          value = '1000-3000 元'
          break
        case 'D':
          value = '3000-10000 元'
          break
        case 'E':
          value = '大于 10000 元'
          break
      }
      return value
    }

    const tLv = value => {
      switch (value) {
        case 'A':
          value = '1 天'
          break
        case 'B':
          value = '2-7 天'
          break
        case 'C':
          value = '8-31 天'
          break
        case 'D':
          value = '32-62 天'
          break
        case 'E':
          value = '63-92 天'
          break
        case 'F':
          value = '大于 92 天'
          break
      }
      return value
    }

    const dLv = value => {
      switch (value) {
        case 'm24':
          value = '最近 24 个月'
          break
        case 'm12':
          value = '最近 12 个月'
          break
        case 'm6':
          value = '最近 6 个月'
          break
        case 'm3':
          value = '最近 3 个月'
          break
        case 'm1':
          value = '最近 1 个月'
          break
      }
      return value
    }
    return {
      imgPreviewUrl: $conf.baseUrl + 'oss/preview?is_img=true&hash=',
      navCollapse: 'compony', // compony
      curNav: 'invoiceInfor', // 初始是：invoiceInfor
      showSidebar: 'true',
      navList: [
        // 风控产品
        {
          name: '运营商报告',
          key: 'operatorReport',
          price: 0,
          sortName: '运营商报告',
          needQRcode: false,
          selfSendCode: true,
          navType: 'riskControl'
        },
        // {
        //   name: "支付宝报告",
        //   key: "alipay",
        //   price: 0,
        //   sortName: "支付宝",
        //   needQRcode: true,
        //   selfSendCode: false,
        //   navType: "riskControl"
        // },
        // 地址验证
        {
          name: '地址验证',
          key: 'addressVerif',
          price: 0,
          sortName: '地址验证',
          needQRcode: false,
          selfSendCode: true,
          navType: 'riskControl'
        },
        // {
        //   name: "淘宝报告",
        //   key: "taobaoReport",
        //   price: 0,
        //   sortName: "淘宝",
        //   needQRcode: true,
        //   selfSendCode: false,
        //   navType: "riskControl"
        // },
        // {
        //   name: "京东报告",
        //   key: "jdReport",
        //   price: 0,
        //   sortName: "京东",
        //   needQRcode: true,
        //   selfSendCode: false,
        //   navType: "riskControl"
        // },
        {
          name: '工作单位验证',
          key: 'workUnitVerification',
          price: 0,
          sortName: '工作单位验证',
          needQRcode: false,
          selfSendCode: false,
          navType: 'riskControl'
        },
        {
          name: '关联人关系验证',
          key: 'verificationRelations',
          price: 0,
          sortName: '关联人关系验证',
          needQRcode: false,
          selfSendCode: false,
          navType: 'riskControl'
        },
        // {
        //   name: "银行流水",
        //   key: "bankFlow",
        //   price: 0,
        //   sortName: "银行流水",
        //   needQRcode: false,
        //   selfSendCode: false,
        //   navType: "riskControl"
        // },
        // {
        //   name: "银真多头借贷报告",
        //   key: "probeReport",
        //   price: 0,
        //   sortName: "银真多头借贷",
        //   needQRcode: false,
        //   selfSendCode: false,
        //   navType: "riskControl"
        // },
        {
          name: '房产验证',
          key: 'propertyVerification',
          price: 0,
          sortName: '房产验证',
          needQRcode: false,
          selfSendCode: false,
          navType: 'riskControl'
        },
        {
          name: '风险度提示',
          key: 'riskWarning',
          price: 0,
          sortName: '风险度提示',
          needQRcode: false,
          selfSendCode: false,
          navType: 'riskControl'
        },
        {
          name: '多贷行为风险评估',
          key: 'multiCreditBehaviorRiskAssessment',
          price: 0,
          sortName: '多贷行为风险评估',
          needQRcode: false,
          selfSendCode: false,
          navType: 'riskControl'
        },
        {
          name: '欺诈度提示',
          key: 'fraudAlert',
          price: 0,
          sortName: '欺诈度提示',
          needQRcode: false,
          selfSendCode: false,
          navType: 'riskControl'
        },
        {
          name: '多重借贷查询',
          key: 'manyLiabilitiesQuery1',
          price: 10,
          sortName: '多重借贷查询',
          navType: 'riskControl'
        },

        {
          name: '个人信用验证',
          key: 'hisCreditCheck1',
          price: 0,
          sortName: '个人信用',
          navType: 'riskControl'
        },

        {
          name: '个人信用评分（专业版）',
          key: 'creditScore',
          price: 0,
          sortName: '个人信用评分（专业版）',
          navType: 'riskControl'
        },

        // 职业证书
        {
          name: '学历查询',
          key: 'education',
          price: 0,
          sortName: '学历',
          needQRcode: false,
          selfSendCode: false,
          navType: 'career'
        },
        {
          name: '职业资格证书',
          key: 'vocationalQualificationCertificate',
          price: 0,
          sortName: '职业资格证书',
          needQRcode: false,
          selfSendCode: false,
          navType: 'career'
        },
        {
          name: '个人学历报告',
          key: 'personalEducationReport',
          price: 0,
          sortName: '个人学历报告',
          needQRcode: false,
          selfSendCode: false,
          navType: 'career'
        },
        // 电商查询
        // {
        //   name: "淘宝查询",
        //   key: "taobao",
        //   price: 0,
        //   sortName: "淘宝",
        //   needQRcode: true,
        //   selfSendCode: false,
        //   navType: "eBusiness"
        // },
        // {
        //   name: "京东查询",
        //   key: "jd",
        //   price: 0,
        //   sortName: "京东",
        //   needQRcode: true,
        //   selfSendCode: false,
        //   navType: "eBusiness"
        // },

        // 交通出行
        // {
        //   name: "车辆维保查询",
        //   key: "carMaintenance",
        //   price: 0,
        //   sortName: "车辆维保",
        //   navType: "car"
        // },
        // {
        //   name: "车辆碰撞数据查询",
        //   key: "carCollisionData",
        //   price: 0,
        //   sortName: "车辆碰撞数据",
        //   navType: "car"
        // },
        // {
        //   name: "车辆精准估价",
        //   key: "carAccurateValuation",
        //   price: 0,
        //   sortName: "车辆精准估价",
        //   navType: "car"
        // },
        // {
        //   name: "人脸搜索",
        //   key: "faceSearch",
        //   price: 0,
        //   sortName: "人脸搜索",
        //   navType: "face"
        // },
        // {
        //   name: "车架号详情查询",
        //   key: "vinDetail",
        //   price: 0,
        //   sortName: "车架号详情",
        //   navType: "car"
        // },
        {
          name: '车牌号详情查询',
          key: 'license',
          price: 0,
          sortName: '车牌号详情',
          navType: 'car'
        },
        {
          name: '航旅信息查询',
          key: 'airTravel',
          price: 0,
          sortName: '航旅信息',
          navType: 'car'
        },
        {
          name: '驾驶证信息查询',
          key: 'driveLicenceInfo',
          price: 0,
          sortName: '驾驶证信息',
          navType: 'car'
        },
        {
          name: '驾照扣分查询',
          key: 'driverPointer',
          price: 0,
          sortName: '驾照扣分',
          navType: 'car'
        },
        {
          name: '交通违章查询',
          key: 'trafficViolation',
          price: 0,
          sortName: '交通违章',
          navType: 'car'
        },
        {
          name: '车辆违章信息',
          key: 'vehicleViolationInformation',
          price: 0,
          sortName: '车辆违章信息',
          needQRcode: false,
          selfSendCode: false,
          navType: 'car'
        },
        // 社保公积金

        {
          name: '公积金查询',
          key: 'providentFund',
          price: 0,
          sortName: '公积金',
          needQRcode: false,
          selfSendCode: false,
          navType: 'socialSecurity'
        },
        {
          name: '社保查询',
          key: 'socialSecurity',
          price: 0,
          sortName: '社保',
          needQRcode: false,
          selfSendCode: false,
          navType: 'socialSecurity'
        },

        // 司法查询
        {
          name: '负面信息验证',
          key: 'negative',
          price: 0,
          sortName: '负面信息',
          navType: 'traffic'
        },
        // {
        //   name: "失信被执行查询",
        //   key: "lostLetter",
        //   price: 0,
        //   sortName: "失信被执行",
        //   needQRcode: false,
        //   selfSendCode: false,
        //   navType: "traffic"
        // },
        {
          name: '个人涉诉查询（精简）',
          key: 'hisLawsuit2',
          price: 0,
          sortName: '个人涉诉',
          navType: 'traffic'
        },
        {
          name: '个人涉诉查询（专业）',
          key: 'hisLawsuit1',
          price: 0,
          sortName: '个人涉诉',
          navType: 'traffic'
        },
        {
          name: '个人涉诉查询（专业全部）',
          key: 'hisLawsuit3',
          price: 0,
          sortName: '个人涉诉',
          navType: 'traffic'
        },
        {
          name: '企业涉诉查询（简化版）',
          key: 'entpLawsuit1',
          price: 0,
          sortName: '企业涉诉',
          navType: 'traffic'
        },
        {
          name: '企业涉诉查询（专业详细版）',
          key: 'entpLawsuit3',
          price: 0,
          sortName: '企业涉诉',
          navType: 'traffic'
        },
        {
          name: '涉诉详情查询（简化版）',
          key: 'lawsuitDetail1',
          price: 0,
          sortName: '涉诉详情',
          navType: 'traffic'
        },
        {
          name: '涉诉详情查询（专业版）',
          key: 'lawsuitDetail3',
          price: 0,
          sortName: '涉诉详情',
          navType: 'traffic'
        },
        // 银行卡相关
        {
          name: '银行卡交易信息查询',
          key: 'bankCardDealQuery',
          price: 0,
          sortName: '银行卡交易信息',
          navType: 'bankCard'
        },
        {
          name: '银行卡开户行查询',
          key: 'bankCardRegQuery',
          price: 0,
          sortName: '银行卡开户行',
          navType: 'bankCard'
        },
        // {
        //   name: "银行卡鉴权",
        //   key: "bankCardAuth",
        //   price: 0,
        //   sortName: "银行卡",
        //   needQRcode: false,
        //   selfSendCode: false,
        //   navType: "bankCard"
        // },
        {
          name: '银行卡三元素认证',
          key: 'bankCardThreeElementCertification',
          price: 0,
          sortName: '银行卡三元素认证',
          needQRcode: false,
          selfSendCode: false,
          navType: 'basicDataQuery'
        },
        {
          name: '银行卡二元素认证',
          key: 'bankCardTwoElementCertification',
          price: 0,
          sortName: '银行卡二元素认证',
          needQRcode: false,
          selfSendCode: false,
          navType: 'basicDataQuery'
        },
        {
          name: '银行卡四元素认证',
          key: 'bankCardFourElementCertification',
          price: 0,
          sortName: '银行卡四元素认证',
          needQRcode: false,
          selfSendCode: false,
          navType: 'basicDataQuery'
        },
        {
          name: '银行卡二要素验证',
          key: 'bankCard2itemCheck',
          price: 0,
          sortName: '银行卡二要素',
          navType: 'bankCard'
        },
        {
          name: '银联三要素验证1',
          key: 'bankCard3itemCheck1',
          price: 0,
          sortName: '银联三要素',
          navType: 'bankCard'
        },
        {
          name: '银联三要素验证2',
          key: 'bankCard3itemCheck2',
          price: 0,
          sortName: '银联三要素',
          navType: 'bankCard'
        },
        {
          name: '银联四要素验证',
          key: 'bankCard4itemCheck',
          price: 0,
          sortName: '银联四要素',
          navType: 'bankCard'
        },
        // 企业查询
        {
          name: '发票信息查询',
          key: 'invoiceInfor',
          price: 0,
          sortName: '发票信息',
          navType: 'compony'
        },
        {
          name: '好信工商通',
          key: 'commercial',
          price: 0,
          sortName: '好信工商通',
          navType: 'compony'
        },
        {
          name: '企业高管信息',
          key: 'executives',
          price: 0,
          sortName: '企业高管信息',
          navType: 'compony'
        },
        // 企业查询
        {
          name: '个人名下企业查询',
          key: 'personalEnterprise',
          price: 50,
          sortName: '个人名下企业查询',
          navType: 'compony'
        },
        {
          name: '企业工商数据查询',
          key: 'icbcData',
          price: 0,
          sortName: '企业工商',
          navType: 'compony'
        },
        {
          name: '企业族谱信息查询',
          key: 'familyTree',
          price: 0,
          sortName: '企业族谱信息',
          navType: 'compony'
        },
        // 身份证
        {
          name: '身份证一致性图像验证',
          key: 'idcardImgCheck',
          price: 0,
          sortName: '身份证一致性',
          navType: 'idNo'
        },
        {
          name: '身份证二元素验证',
          key: 'idcard2itemCheck',
          price: 0,
          sortName: '身份证二元素',
          navType: 'idNo'
        },
        {
          name: '身份证三元素验证',
          key: 'idNoElement3',
          price: 0,
          sortName: '身份证三元素',
          navType: 'idNo'
        },
        {
          name: '身份证有效性查询',
          key: 'IDCardValidityInquiry',
          price: 0,
          sortName: '身份证有效性查询',
          needQRcode: false,
          selfSendCode: false,
          navType: 'idNo'
        },
        {
          name: '港澳通行证一致性',
          key: 'exitPermit',
          price: 0,
          sortName: '港澳通行证一致性',
          navType: 'idNo'
        },
        // 运营商数据

        // {
        //   name: "运营商查询",
        //   key: "operatorDetails",
        //   price: 0,
        //   sortName: "运营商",
        //   needQRcode: false,
        //   selfSendCode: true,
        //   navType: "operator"
        // },
        {
          name: '运营商二要素验证',
          key: 'carrierTwoVerification',
          price: 0,
          sortName: '运营商二要素验证',
          needQRcode: false,
          selfSendCode: false,
          navType: 'operator'
        },
        // 手机综合查询
        {
          name: '手机综合查询',
          key: 'mobileInquiry',
          price: 0,
          sortName: '手机综合查询',
          needQRcode: false,
          selfSendCode: false,
          navType: 'operator'
        },
        {
          name: '手机号在网时长查询',
          key: 'phoneTime',
          price: 0,
          sortName: '手机号在网时长',
          needQRcode: false,
          selfSendCode: false,
          navType: 'operator'
        },
        // {
        //   name: "手机号在网状态查询",
        //   key: "phoneStatus",
        //   price: 0,
        //   sortName: "手机号在网状态",
        //   needQRcode: false,
        //   selfSendCode: false,
        //   navType: "operator"
        // },
        {
          name: '手机号在网状态查询',
          key: 'statusOfMobilePhone',
          price: 0,
          sortName: '手机号当前状态',
          needQRcode: false,
          selfSendCode: false,
          navType: 'operator'
        },
        {
          name: '手机号停机次数',
          key: 'phoneNumberDowntime',
          price: 0,
          sortName: '手机号停机次数',
          needQRcode: false,
          selfSendCode: false,
          navType: 'operator'
        },
        {
          name: '手机验证',
          key: 'phoneVerification',
          price: 0,
          sortName: '手机验证',
          needQRcode: false,
          selfSendCode: false,
          navType: 'operator'
        },
        // {
        //   name: "手机号当前城市验证",
        //   key: "mobilePhoneNumberCurrentCityVer",
        //   price: 0,
        //   sortName: "手机号当前城市验证",
        //   needQRcode: false,
        //   selfSendCode: false,
        //   navType: "operator"
        // },
        {
          name: '常用联系人',
          key: 'frequentContacts',
          price: 0,
          sortName: '常用联系人',
          needQRcode: false,
          selfSendCode: false,
          navType: 'operator'
        },
        {
          name: '通话关系验证',
          key: 'callRelationshipVerification',
          price: 0,
          sortName: '通话关系验证',
          needQRcode: false,
          selfSendCode: false,
          navType: 'operator'
        }
      ],
      formRules: {
        id_name: [{
          required: true,
          message: '真实姓名不能为空',
          trigger: 'blur'
        }],
        id_number: [{
          validator: validateIdNo,
          trigger: 'blur'
        }],
        idCard: [{
          validator: validateIdNo,
          trigger: 'blur'
        }],
        mobile: [{
          validator: validatePhone,
          trigger: 'blur'
        }],
        phone: [{
          validator: validatePhone,
          trigger: 'blur'
        }],
        mobileNo: [{
          validator: validatePhone,
          trigger: 'blur'
        }],
        account: [{
          required: true,
          message: '账号不能为空',
          trigger: 'blur'
        }],
        entpName: [{
          required: true,
          message: '名称不能为空',
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: '名称不能为空',
          trigger: 'blur'
        }],
        bankCard: [{
          required: true,
          message: '银行卡号不能为空',
          trigger: 'blur'
        }],
        card_number: [{
          required: true,
          message: '银行卡号不能为空',
          trigger: 'blur'
        }],
        accountNo: [{
          required: true,
          message: '银行卡号不能为空',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }],
        bankType: [{
          required: true,
          message: '请选择银行类型',
          trigger: 'change'
        }],
        cardType: [{
          required: true,
          message: '请选择卡类型',
          trigger: 'change'
        }],
        month: [{
          required: true,
          type: 'number',
          message: '请选择数据量',
          trigger: 'change'
        }],
        query_name: [{
          required: true,
          message: '名称不能为空',
          trigger: 'blur'
        }],
        query_id: [{
          required: true,
          message: '证号不能为空',
          trigger: 'blur'
        }],
        city_code: [{
          required: true,
          message: '请选择城市',
          trigger: 'change'
        }],
        vinDetail: [{
          required: true,
          message: '车架号不能为空',
          trigger: 'blur'
        }],
        engine_no: [{
          required: true,
          message: '发动机号不能为空',
          trigger: 'blur'
        }],
        license_plate: [{
          required: true,
          message: '车牌号不能为空',
          trigger: 'blur'
        }],
        licenseNo: [{
          required: true,
          message: '驾驶证号不能为空',
          trigger: 'blur'
        }],
        province: [{
          required: true,
          message: '城市选择不能为空',
          trigger: 'blur'
        }],
        carNumber: [{
          required: true,
          message: '违章车牌号不能为空',
          trigger: 'blur'
        }],
        cityCode: [{
          required: true,
          message: '城市代码不能为空',
          trigger: 'blur'
        }],
        model_id: [{
          required: true,
          type: 'array',
          message: '请选择车型',
          trigger: 'change'
        }],
        lawsuitId: [{
          required: true,
          type: 'string',
          message: '涉诉标识码不能为空',
          trigger: 'blur'
        }],
        reg_date: [{
          required: true,
          message: '请选择上牌时间',
          trigger: 'change'
        }],
        mile: [{
          required: true,
          type: 'number',
          message: '行驶里程不能为空',
          trigger: 'blur'
        }],
        idNo: [{
          required: true,
          validator: validateIdNo,
          trigger: 'blur'
        }],
        call_verifymobile: [{
          required: true,
          message: '手机号码不能为空',
          trigger: 'blur'
        }],
        bankPreMobile: [{
          required: true,
          message: '预留手机号码不能为空',
          trigger: 'blur'
        }],
        accountNo: [{
          required: true,
          message: '银行卡号不能为空',
          trigger: 'blur'
        }],
        carType: [{
          required: true,
          message: '请选择车辆类型',
          trigger: 'change'
        }],
        carNo: [{
          required: true,
          message: '违章车牌号不能为空',
          trigger: 'blur'
        }],
        vehicleFrameNo: [{
          required: true,
          message: '违章车架号不能为空',
          trigger: 'blur'
        }],
        engineNo: [{
          required: true,
          message: '违章发动机号不能为空',
          trigger: 'blur'
        }],
        idType: [{
          required: true,
          message: '请选择证件类型',
          trigger: 'change'
        }],
        reasonCode: [{
          required: true,
          message: '请选择查询原因',
          trigger: 'change'
        }],
        company: [{
          required: true,
          message: '公司名称不能为空',
          trigger: 'blur'
        }],
        beginDate: [{
          required: true,
          message: '请选择有效期起始时间',
          trigger: 'change'
        }],
        hmNumber: [{
          required: true,
          message: '通行证号码不能为空',
          trigger: 'blur'
        }],
        expiryDate: [{
          required: true,
          message: '证件有效期截止日期不能为空',
          trigger: 'blur'
        }],
        birthday: [{
          required: true,
          message: '出生日期不能为空',
          trigger: 'blur'
        }],
        imageUrl: [{
          required: true,
          message: '请上传生活照',
          trigger: 'blur'
        }],
        key: [{
          required: true,
          message: '请填写企业标识（企业全称、注册号、统一社会信用代码）',
          trigger: 'blur'
        }],
        enterpriseName: [{
          required: true,
          message: '公司名称不能为空',
          trigger: 'blur'
        }],
        fileNo: [{
          required: true,
          message: '驾驶证档案编号不能为空',
          trigger: 'blur'
        }],
        invoiceCode: [{
          required: true,
          message: '发票代码不能为空',
          trigger: 'blur'
        }],
        invoiceNo: [{
          required: true,
          message: '发票号码不能为空',
          trigger: 'blur'
        }],
        invoiceDate: [{
          required: true,
          message: '开票日期不能为空',
          trigger: 'change'
        }],
        verifyType: [{
          required: true,
          message: '请输入认证类型',
          trigger: 'change'
        }],
        verifyKey: [{
          required: true,
          message: '请输入认证关键字',
          trigger: 'blur'
        }]

      },
      // 第二版 start
      // 控制结果面板V2版本
      resultModalV2: false,
      // 公共表单
      commonForm: {},
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
        mobile_type: '',
        password_for_beijing: ''
      },
      addressVerifForm: {
        idNo: '',
        idType: '0',
        mobileNo: '',
        name: '',
        address: '',
        reasonCode: '03'
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
      commercialForm: {
        verifyType: '2',
        verifyKey: '',
        reasonCode: '03'
      },
      // 人脸搜索
      faceSearchForm: {
        pic: ''
      },
      bankCardAuthForm: {
        id_name: '',
        id_number: '',
        card_number: '',
        mobile: ''
      },
      bankCardAuthKey: 0,
      dataTimeOpt: {
        shortcuts: [{
          text: '一周',
          value () {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          }
        },
        {
          text: '一个月',
          value () {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          }
        },
        {
          text: '3个月',
          value () {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          }
        }
        ],
        disabledDate (date) {
          return date && date.valueOf() > Date.now()
        }
      },
      recordModal: false,
      recordColumns: [{
        title: '查询日期',
        key: 'created_at'
      },
      {
        title: '手机号',
        key: 'phone',
        render: (h, params) => {
          return h('div', {}, params.row.phone || '-')
        }
      },
      {
        title: '身份证号',
        render: (h, params) => {
          return h(
            'div', {},
            params.row.id_number.length >= 9
              ? params.row.id_number.substr(0, 3) +
              '*'.repeat(params.row.id_number.length - 9) +
              params.row.id_number.substr(
                params.row.id_number.length - 6,
                6
              )
              : params.row.id_number
          )
        }
      },
      {
        title: '真实姓名',
        key: 'id_name'
      },
      {
        title: '操作',
        render: (h, params) => {
          return h('div', {}, [
            h(
              'Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.recordClickInfo(params.row.id)
                  }
                }
              },
              '查看数据'
            )
          ])
        }
      }
      ],
      recordData: {},
      jdForm: {
        id_name: '',
        id_number: ''
      },
      jdBaseColumns: [{
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
      jdBankColumns: [{
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
      jdBaitiaoColumns: [{
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
      jdAddressColumns: [{
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
      jdOrderColumns: [{
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
      taobaoReportForm: {
        id_name: '',
        id_number: ''
      },
      operatorReportForm: {
        id_name: '',
        id_number: '',
        phone: '',
        password: '',
        province: '',
        type: '',
        password_for_beijing: ''
      },
      alipayForm: {
        id_name: '',
        id_number: ''
      },
      jdReportForm: {
        id_name: '',
        id_number: ''
      },
      personalEnterpriseForm: {
        idCard: ''
      },
      probeReportForm: {
        id_name: '',
        id_number: '',
        mobile: ''
      },

      probeReportScoreColumns: [{
        title: '长周期评分',
        key: 'score_l'
      },
      {
        title: '短周期评分',
        key: 'score_s'
      }
      ],
      probeReportInfoColumns: [{
        title: '编号',
        key: 'report_no'
      },
      {
        title: '报告时间',
        key: 'time'
      }
      ],
      probeReportBaseColumns: [{
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
      probeReportPhoneColumns: [{
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
      probeReportSectionsColumns: [{
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
      probeReportPlatformInfosColumns: [{
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
      probeReportEveSumsColumns: [{
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
      probeReportRefInfosColumns: [{
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
        render: (h, params) => {
          return h('div', {}, mLv(params.row.ave_overdue_repay_amount_level))
        }
      }
      ],
      phoneTimeForm: {
        mobileNo: ''
      },
      phoneStatusForm: {
        id_name: '',
        id_number: '',
        mobile: ''
      },
      lostLetterForm: {
        query_name: '',
        query_id: ''
      },
      carMaintenanceForm: {
        vin: '',
        engine_no: '',
        license_plate: '',
        order_id: ''
      },
      carCollisionDataForm: {
        vin: '',
        engine_no: '',
        license_plate: '',
        order_id: ''
      },
      carAccurateValuationForm: {
        vin: '',
        city_id: [],
        model_id: [],
        reg_date: '',
        mile: 1,
        order_id: ''
      },
      vinDetailForm: {
        vin: ''
      },
      licenseForm: {
        name: '',
        licensePlate: ''
      },
      airTravelForm: {
        name: '',
        idCard: '',
        month: 6,
        passportNo: ''
      },
      driveLicenceInfoForm: {
        licenseNo: ''
      },
      driverPointerForm: {
        idCard: '',
        fileNo: '',
        province: ''
      },
      trafficViolationForm: {
        carNumber: '',
        carCode: '',
        carDriveNumber: '',
        cityCode: ''
      },
      exitPermitForm: {
        name: '',
        hmNumber: '',
        birthday: '',
        expiryDate: '',
        mark: '1'
      },
      debtDetailForm: {
        name: '',
        idNo: '',
        mobileNo: ''
      },
      negativeForm: {
        name: '',
        idCard: ''
      },
      dataType: [{
        value: 'cpws',
        label: '裁判文书'
      },
      {
        value: 'zxgg',
        label: '执行公告'
      },
      {
        value: 'sxgg',
        label: '失信公告'
      },
      {
        value: 'ktgg4',
        label: '开庭公告'
      },
      {
        value: 'fygg',
        label: '法院公告'
      },
      {
        value: 'wdhmd',
        label: '网贷黑名单'
      },
      {
        value: 'ajlc',
        label: '案件流程'
      },
      {
        value: 'bgt',
        label: '曝光台'
      }
      ],
      // 证件类型
      // allDataType: [{
      //   value: "cpws",
      //   label: "裁判文书"
      // },
      // {
      //   value: "zxgg",
      //   label: "执行公告"
      // },
      // {
      //   value: "sxgg",
      //   label: "失信公告"
      // },
      // {
      //   value: "ktgg4",
      //   label: "开庭公告"
      // },
      // {
      //   value: "fygg",
      //   label: "法院公告"
      // },
      // {
      //   value: "wdhmd",
      //   label: "网贷黑名单"
      // },
      // {
      //   value: "ajlc",
      //   label: "案件流程"
      // },
      // {
      //   value: "bgt",
      //   label: "曝光台"
      // }
      // ],
      // 查询原因
      reasonCodes: [{
        value: '01',
        label: '贷款审批'
      },
      {
        value: '02',
        label: '贷中管理'
      },
      {
        value: '03',
        label: '贷后管理'
      },
      {
        value: '04',
        label: '本人查询'
      },
      {
        value: '05',
        label: '异议查询'
      },
      {
        value: '99',
        label: '其他'
      }
      ],
      hisLawsuit1Form: {
        name: '',
        idCard: '',
        dataType: 'cpws',
        pageIndex: ''
      },
      hisLawsuit2Form: {
        name: '',
        idCard: '',
        dataType: 'cpws'
      },
      hisLawsuit3Form: {
        name: '',
        idCard: '',
        pageIndex: '1',
        dataType: ''
      },
      hisCreditCheck1Form: {
        name: '',
        idCard: ''
      },
      lawsuitDetail1Form: {
        dataType: 'cpws',
        lawsuitId: ''
      },
      lawsuitDetail3Form: {
        dataType: 'cpws',
        lawsuitId: ''
      },
      bankCardDealQueryForm: {
        name: '',
        idCard: '',
        accountNo: ''
      },
      bankCardRegQueryForm: {
        accountNo: ''
      },
      bankCard2itemCheckForm: {
        name: '',
        accountNo: ''
      },
      bankCard3itemCheck1Form: {
        name: '',
        idCard: '',
        accountNo: ''
      },
      bankCard3itemCheck2Form: {
        bankPreMobile: '',
        idCard: '',
        accountNo: ''
      },
      mobileInquiryForm: {
        idNo: '',
        idType: '0',
        name: '',
        mobileNo: '',
        reasonCode: '03'
      },
      bankCard4itemCheckForm: {
        name: '',
        idCard: '',
        accountNo: '',
        bankPreMobile: ''
      },
      personalEnterpriseForm: {
        idCard: ''
      },
      unionpay3Form: {
        name: '',
        bankPreMobile: '',
        idCard: '',
        accountNo: ''
      },
      icbcDataForm: {
        key: '',
        keyType: '1'
      },
      entpLawsuit1Form: {
        entpName: '',
        pageIndex: '',
        dateType: ''
      },
      entpLawsuit2Form: {
        enterpriseName: '',
        dateType: ''
      },
      entpLawsuit3Form: {
        name: '',
        pageIndex: '',
        dateType: ''
      },
      familyTreeForm: {
        key: ''
      },
      invoiceInforForm: {
        invoiceCode: '',
        invoiceNo: '',
        invoiceDate: '',
        invoiceMoney: '',
        checkCode: ''
      },
      idcardImgCheckForm: {
        name: '',
        imageUrl: '',
        idCard: ''
      },
      idcard2itemCheckForm: {
        name: '',
        idCard: ''
      },
      creditScoreForm: {
        name: '',
        idNo: '',
        mobileNo: '',
        accountNo: '',
        reasonCode: '03',
        idType: 0
      },
      idNoElement3Form: {
        name: '',
        idCard: '',
        beginDate: ''
      },

      carCityList: [],
      carTypeList: [],
      carDateOptions: {},
      carDateOptionsKey: 0,
      carCollisionDataKey: 0,
      carrierTwoVerificationForm: {
        name: '',
        idNo: '',
        mobileNo: ''
      },
      statusOfMobilePhoneForm: {
        mobileNo: ''
      },
      phoneNumberDowntimeForm: {
        mobileNo: ''
      },
      frequentContactsForm: {
        mobileNo: '',
        cy_verifymobile: ''
      },
      phoneVerificationForm: {
        name: '',
        idNo: '',
        mobileNo: ''
      },
      callRelationshipVerificationForm: {
        mobileNo: '',
        call_verifymobile: ''
      },
      mobilePhoneNumberCurrentCityVerForm: {
        mobileNo: '',
        city_code: ''
      },
      executivesForm: {
        name: '',
        idNo: '',
        idType: '0',
        reasonCode: '03'
      },
      vocationalQualificationCertificateForm: {
        name: '',
        idNo: ''
      },
      manyLiabilitiesQuery1Form: {
        mobile: ''
      },
      bankCardThreeElementCertificationForm: {
        name: '',
        idNo: '',
        accountNo: ''
      },
      IDCardValidityInquiryForm: {
        name: '',
        idNo: '',
        mobileNo: ''
      },
      bankCardTwoElementCertificationForm: {
        name: '',
        idNo: ''
      },
      bankCardFourElementCertificationForm: {
        name: '',
        idNo: ''
      },
      vehicleViolationInformationForm: {
        carType: '02',
        carNo: '',
        vehicleFrameNo: '',
        engineNo: ''
      },
      propertyVerificationForm: {
        idNo: '',
        idType: '0',
        name: '',
        mobileNo: '',
        reasonCode: '03'
      },
      riskWarningForm: {
        idNo: '',
        idType: '0',
        name: '',
        reasonCode: '03'
      },
      workUnitVerificationForm: {
        idNo: '',
        idType: '0',
        name: '',
        mobileNo: '',
        company: ''
      },
      multiCreditBehaviorRiskAssessmentForm: {
        idNo: '',
        idType: '0',
        name: ''
      },
      personalEducationReportForm: {
        name: '',
        idNo: ''
      },
      verificationRelationsForm: {
        idNo: '',
        idType: 0,
        mobileNo: '',
        name: '',
        reasonCode: '03',
        relationName: '',
        relationPhone: ''
      },
      personalEducationReportForm: {
        name: '',
        idNo: ''
      },
      fraudAlertForm: {
        idNo: '',
        idType: '0',
        name: '',
        mobileNo: '',
        ip: ''
      }
      // 第二版 end
    }
  },
  inject: ['reload'],
  beforeMount () {
    this.getNavListPrice()
    this.initCommonForm()
    this.initRecordData()
    this.needBeforeData()
    this.getProPrice()
  },
  methods: {
    getFaceImage (e) {
      if (e.target.files && e.target.files[0]) {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = evt => {
          this.faceSearchForm.pic = evt.target.result
        }
      }
    },
    async getProPrice () {
      const res = await this.$ajax('get', 'power/all')
      if (res.code === 0) {
        res.data.forEach(item => {
          this.navList.forEach(val => {
            if (item.dealKey === val.key) {
              val.price = item.price
            }
          })
        })
      } else {
        this.$router.push({ name: 'home' })
      }
    },
    /**
     * 子菜单click
     */
    subMenuClick (key) {
      this.curNav = key
    },
    getNavListPrice () {
      this.$ajax('get', 'power/all')
        .then(res => {
          res.data.forEach(e => {
            if (this.navList.find(j => j.key === e.dealKey)) {
              this.navList.find(j => j.key === e.dealKey).price = e.price
            } else {
            }
          })
        })
    },

    // 第二版 start
    // 需要预先请求的数据
    needBeforeData () {
      if (
        this.curNav === 'providentFund' &&
        !this.providentFundcityList.length
      ) {
        this.getCityList()
      }
      if (
        this.curNav === 'socialSecurity' &&
        !this.socialSecuritycityList.length
      ) {
        this.socialSecurityGetCityList()
      }
      if (this.curNav === 'bankFlow') {
        if (!this.bankTypeArr.length) {
          this.getBankType()
        }
        if (!this.bankCardTypeArr.length) {
          this.getBankCardType()
        }
      }
      if (this.curNav === 'carAccurateValuation') {
        if (!this.carCityList.length) {
          this.getCarCityList()
        }
        if (!this.carTypeList.length) {
          this.getCarTypeList()
        }
      }
    },
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

      // this.curNav = 'fraudAlert';       // 测试数据使用
      // this.resultModalV2 = true;    // 测试数据使用
      // this.commonForm.data = {};    // 测试数据使用
    },
    // 请求错误处理
    commonSendErrorFnV2 (word, flag) {
      this.commonForm.loading = false
      this.commonForm.errorMsg = word
      if (!flag) {
        this.$Message.error(word)
      }
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
          this.$ajax('post', u, this[f])
            .then(data => {
              if (data.token) {
                this.commonForm.token = data.token
                this.commonLoopFnV2(u2, f)
              } else {
                this.commonSendErrorFnV2(data.message)
              }
            })
            .catch(err => {
              this.commonSendErrorFnV2(
                err.message || '网络请求错误，请重试！',
                true
              )
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
        this.$ajax('post', u2, {
          ...this[f],
          ...this.commonForm
        })
          .then(data => {
            let Odata = data.data
            if (Odata.code === '0') {
              // 成功获取数据 停止请求
              this.commonForm.data = Odata.data
              this.commonForm.loading = false
            } else if (Odata.code === '0001') {
              // 需要主动获取验证码
              if (
                this.navList.find(e => e.key === this.curNav).selfSendCode &&
                f.province + f.type === '吉林电信'
              ) {
                // 吉林电信才需要
                this.commonOpenSelfSendVerCodeIptV2(...arguments)
              } else {
                // 输入短信验证码 继续轮询
                this.commonOpenVerCodeIptV2(...arguments)
              }
            } else if (Odata.code === '0012') {
              // 输入图形验证码 继续轮询
              this.commonForm.verImgSrc = Odata.img
              if (this.navList.find(e => e.key == this.curNav).needQRcode) {
                // 需要扫描二维码
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
          })
          .catch(err => {
            this.commonSendErrorFnV2(
              err.message || '网络请求错误，请重试！',
              true
            )
          })
      }
      loopFn()
    },
    // 打开验证码输入框
    commonOpenVerCodeIptV2 (u2, f) {
      this.$Modal.warning({
        title: '请输入验证码',
        render: h => {
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
              input: val => {
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
    // 打开主动发送验证码输入框
    commonOpenSelfSendVerCodeIptV2 (u2, f) {
      this.$Modal.warning({
        title: '请输入验证码',
        render: h => {
          return h('div', {}, [
            h(
              'p', {
                attrs: {
                  style: 'margin-top: 10px;'
                }
              },
              '吉林电信手机号请发送短信 CXXD 到 10001，获取短信验证码'
            ),
            h('Input', {
              props: {
                value: this.commonForm.smsCode,
                autofocus: true,
                placeholder: '请输入手机收到的验证码'
              },
              attrs: {
                style: 'margin-top: 16px;'
              },
              on: {
                input: val => {
                  this.commonForm.smsCode = val
                }
              }
            })
          ])
        },
        onOk: () => {
          // 验证码不为空才请求 为空再次弹出输入框
          if (!this.commonForm.smsCode) {
            this.$nextTick(() => {
              setTimeout(() => {
                this.commonOpenSelfSendVerCodeIptV2(...arguments)
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
        render: h => {
          return h('div', {}, [
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
                input: val => {
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
      let typeStr = this.navList.find(e => e.key == this.curNav).sortName
      this.$Modal.warning({
        title: '请使用手机' + typeStr + 'APP进行扫码',
        render: h => {
          return h('div', {}, [
            h('img', {
              attrs: {
                src: this.commonForm.verImgSrc,
                style: 'margin: 15px auto 4px; display: block;'
              }
            }),
            h(
              'p', {
                attrs: {
                  style: 'margin-top: 11px; color: #f00; text-align: center;'
                }
              },
              '*扫描以上二维码后，再点击确定按钮！'
            )
          ])
        },
        onOk: () => {
          this.commonLoopFnV2(...arguments)
        }
      })
    },
    // 查博士 start
    // 查询指定的车架号是否支持查询
    commonCarFn (f) {
      return new Promise((resolve, reject) => {
        this.$refs[f].validate(valid => {
          if (valid) {
            // 查询前重置commonForm
            this.initCommonForm()
            this.commonForm.loading = true
            // 打开结果面板
            this.resultModalV2 = true
            this.$ajax('post', 'cbh/get/check/brand', this[f])
              .then(data => {
                if (data.code == $conf.RETCODE_OK) {
                  resolve(data)
                } else {
                  this.commonSendErrorFnV2(data.message)
                  reject(data)
                }
              })
              .catch(err => {
                this.commonSendErrorFnV2(
                  err.message || '网络请求错误，请重试！',
                  true
                )
                reject(err)
              })
          }
        })
      })
    },
    // 获取购买报告编号 维保
    commonGetCarBuyReport (f) {
      return new Promise((resolve, reject) => {
        this.$ajax('post', 'cbh/get/buy/report', this[f])
          .then(data => {
            if (data.data.orderId) {
              this[f].order_id = data.data.orderId
              resolve(data)
            } else {
              this.commonSendErrorFnV2(data.message)
              reject(data)
            }
          })
          .catch(err => {
            this.commonSendErrorFnV2(
              err.message || '网络请求错误，请重试！',
              true
            )
            reject(err)
          })
      })
    },
    // 获取购买报告编号 碰撞
    commonGetCarBuyReport2 (f) {
      return new Promise((resolve, reject) => {
        this.$ajax('post', 'cbh/get/new/report/buy', this[f])
          .then(data => {
            if (data.data.orderId) {
              this[f].order_id = data.data.orderId
              resolve(data)
            } else {
              this.commonSendErrorFnV2(data.message)
              reject(data)
            }
          })
          .catch(err => {
            this.commonSendErrorFnV2(
              err.message || '网络请求错误，请重试！',
              true
            )
            reject(err)
          })
      })
    },
    // 获取指定的报告的状态
    commonGetCarReportStatus (f) {
      return new Promise((resolve, reject) => {
        this.$ajax('post', 'cbh/get/report/status', this[f])
          .then(data => {
            if (data.code === $conf.RETCODE_OK) {
              if (data.data.code === '1102') {
                // 继续轮询
                setTimeout(() => {
                  this.commonGetCarReportStatus(...arguments)
                }, 3000)
              } else {
                resolve(data)
              }
            } else {
              this.commonSendErrorFnV2(data.message)
              reject(data)
            }
          })
          .catch(err => {
            this.commonSendErrorFnV2(
              err.message || '网络请求错误，请重试！',
              true
            )
            reject(err)
          })
      })
    },
    // 获取指定报告的url
    commonGetCarReportUrl (f) {
      this.$ajax('post', 'cbh/get/new/report/url', this[f]).then(data => { })
    },
    // 获取指定报告的json数据
    commonGetCarReportJson (f) {
      return new Promise((resolve, reject) => {
        this.$ajax('post', 'cbh/get/new/report/json', this[f])
          .then(data => {
            if (data.code === $conf.RETCODE_OK) {
              // 成功获取数据 停止请求
              this.commonForm.data = {
                ...this.commonForm.data,
                ...data.data,
                haveJson: true
              }
              this.carCollisionDataKey += 1
              this.commonForm.loading = false
              resolve(data)
            } else {
              this.commonSendErrorFnV2(data.message)
              reject(data)
            }
          })
          .catch(err => {
            this.commonSendErrorFnV2(
              err.message || '网络请求错误，请重试！',
              true
            )
            reject(err)
          })
      })
    },
    // 精准估价
    commonGetCarPrice (f) {
      return new Promise((resolve, reject) => {
        let obj = {
          ...this[f],
          ...{
            city_id: this[f].city_id[this[f].city_id.length - 1],
            model_id: this[f].model_id[this[f].model_id.length - 1]
          }
        }
        this.$ajax('post', 'cbh/get/car/price', obj)
          .then(data => {
            if (data.code === $conf.RETCODE_OK) {
              // 成功获取数据 停止请求
              this.commonForm.data = {
                ...this.commonForm.data,
                ...data.data,
                havePriceJson: true
              }
              this.carCollisionDataKey += 1
              this.commonForm.loading = false
              resolve(data)
            } else {
              this.commonSendErrorFnV2(data.message)
              reject(data)
            }
          })
          .catch(err => {
            this.commonSendErrorFnV2(
              err.message || '网络请求错误，请重试！',
              true
            )
            reject(err)
          })
      })
    },
    // 查博士 end
    // 运营商查询公共方法
    commonOperatorFn (m, u1, u2, u3, f) {
      this.$refs[f].validate(valid => {
        if (valid) {
          this.commonForm.loading = true
          // 打开结果面板
          this.resultModalV2 = true
          this.$ajax(m, u1, this[f])
            .then(data => {
              let Odata = data.data
              if (Odata.province && Odata.type) {
                if (Odata.province + Odata.type === '北京移动') {
                  this.$Message.error('北京移动需输入客服密码！')
                  let needKFPwd = () => {
                    this[f].password_for_beijing = ''
                    this.$Modal.warning({
                      title: '请输入客服密码',
                      render: h => {
                        return h('Input', {
                          props: {
                            value: this[f].password_for_beijing,
                            autofocus: true,
                            placeholder: '北京移动需输入客服密码'
                          },
                          attrs: {
                            style: 'margin-top: 16px;'
                          },
                          on: {
                            input: val => {
                              this[f].password_for_beijing = val
                            }
                          }
                        })
                      },
                      onOk: () => {
                        // 验证码不为空才请求 为空再次弹出输入框
                        if (!this[f].password_for_beijing) {
                          this.$nextTick(() => {
                            setTimeout(() => {
                              needKFPwd()
                            }, 300)
                          })
                          this.$Message.error('客服密码不能为空，请重新输入！')
                        } else {
                          this[f].province = Odata.province
                          this[f].type = Odata.type
                          this.commonFnV2(u2, u3, f)
                        }
                      }
                    })
                  }
                  needKFPwd()
                  return
                }
                this[f].province = Odata.province
                this[f].type = Odata.type
                this.commonFnV2(u2, u3, f)
              } else {
                this.commonSendErrorFnV2('未查到手机号相关信息！')
              }
            })
            .catch(err => {
              this.commonSendErrorFnV2(
                err.message || '网络请求错误，请重试！',
                true
              )
            })
        }
      })
    },
    // 时间征信查询公共方法
    commonTimeFn (u, f) {
      this.$refs[f].validate(valid => {
        if (valid) {
          // 查询前重置commonForm
          this.initCommonForm()
          this.commonForm.loading = true
          // 打开结果面板
          this.resultModalV2 = true
          this.$ajax('post', u, this[f])
            .then(data => {
              this.commonForm.data = data.data
              this.commonForm.loading = false
            })
            .catch(err => {
              this.commonSendErrorFnV2(
                err.message || '网络请求错误，请重试！',
                true
              )
            })
        }
      })
    },
    operatorDetailsFn () {
      this.commonOperatorFn(
        'post',
        'tz/mobiledetail/get/area',
        'tz/mobiledetail/task/submit',
        'tz/mobiledetail/get/info',
        'operatorDetailsForm'
      )
    },
    // operatorReportFn () {
    //   this.commonOperatorFn(
    //     "get",
    //     "tz/mobilereport/get/info/area",
    //     "tz/mobilereport/task/submit",
    //     "tz/mobilereport/get/info",
    //     "operatorReportForm"
    //   );
    // },
    getCityList () {
      this.$ajax(
        'get',
        'tz/gongjijin/get/city',
        'providentFundcityListLoading'
      ).then(data => {
        this.providentFundcityList = data.data
      })
    },
    changeCity (code) {
      this.providentFundForm.isGetForm = false
      this.$ajax('get', 'tz/gongjijin/get/city/param', {
        city_code: code
      }).then(data => {
        let tempdata = null

        if (!tempdata && data.data.find(e => e.login_type === '1')) {
          tempdata = data.data.find(e => e.login_type === '1')
        }

        if (!tempdata && data.data.find(e => e.login_type === '2')) {
          tempdata = data.data.find(e => e.login_type === '2')
        }

        if (!tempdata && data.data.find(e => e.login_type === '3')) {
          tempdata = data.data.find(e => e.login_type === '3')
        }

        if (!tempdata && data.data.find(e => e.login_type === '4')) {
          tempdata = data.data.find(e => e.login_type === '4')
        }

        if (!tempdata) {
          tempdata = data.data.pop()
        }

        this.providentFundCheck = tempdata
        let len = this.providentFundCheck.login_params.length
        for (let i = 0; i < len; i++) {
          this.$set(
            this.providentFundForm,
            this.providentFundCheck.login_params[i].name,
            ''
          )
        }
        this.providentFundForm.isGetForm = true
        this.providentFundForm.login_type = this.providentFundCheck.login_type
      })
    },
    providentFundFn () {
      this.commonFnV2(
        'tz/gongjijin/task/submit',
        'tz/gongjijin/get/info',
        'providentFundForm'
      )
    },
    socialSecurityGetCityList () {
      this.$ajax(
        'get',
        'tz/shebao/get/city',
        'socialSecuritycityListLoading'
      ).then(data => {
        // let tempArr = data.data.filter(e => e.area_name == '深圳');
        this.socialSecuritycityList = data.data
      })
    },
    socialSecurityChangeCity (code) {
      this.socialSecurityForm.isGetForm = false
      this.$ajax('get', 'tz/shebao/get/city/param', {
        city_code: code
      }).then(data => {
        this.socialSecurityCheck = data.data[0]
        let len = this.socialSecurityCheck.login_params.length
        for (let i = 0; i < len; i++) {
          this.$set(
            this.socialSecurityForm,
            this.socialSecurityCheck.login_params[i].name
          )
        }
        this.socialSecurityForm.isGetForm = true
        this.socialSecurityForm.login_type = this.socialSecurityCheck.login_type
      })
    },
    socialSecurityFn () {
      this.commonFnV2(
        'tz/shebao/task/submit',
        'tz/shebao/get/info',
        'socialSecurityForm'
      )
    },
    educationFn () {
      this.commonFnV2(
        'tz/xuexin/task/submit',
        'tz/xuexin/get/info',
        'educationForm'
      )
    },
    taobaoFn () {
      this.commonFnV2(
        'tz/taobao/task/submit',
        'tz/taobao/get/info',
        'taobaoForm'
      )
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
      this.commonFnV2(
        'tz/bank/run/task/submit',
        'tz/bank/run/get/info',
        'bankFlowForm'
      )
    },
    getBankCardIdentityBasic () {
      this.$refs.bankCardAuthForm.validate(valid => {
        if (valid) {
          this.initCommonForm()
          // 打开结果面板
          this.resultModalV2 = true
          this.$ajax(
            'post',
            'tz/identity/info/bank/four',
            this.bankCardAuthForm,
            'commonForm.loading'
          )
            .then(data => {
              this.commonForm.data = {}
              this.commonForm.data.four = data.data
              this.bankCardAuthKey++
              this.$ajax(
                'post',
                'tz/identity/info/basic',
                this.bankCardAuthForm
              ).then(data => {
                this.commonForm.data.basic = data.data
                this.bankCardAuthKey++
              })
              this.$ajax(
                'post',
                'tz/identity/info/photo',
                this.bankCardAuthForm
              ).then(data => {
                this.commonForm.data.photo = data.data
                this.bankCardAuthKey++
              })
              this.$ajax(
                'post',
                'tz/identity/info/bank/two',
                this.bankCardAuthForm
              ).then(data => {
                this.commonForm.data.two = data.data
                this.bankCardAuthKey++
              })
              this.$ajax(
                'post',
                'tz/identity/info/bank/three',
                this.bankCardAuthForm
              ).then(data => {
                this.commonForm.data.three = data.data
                this.bankCardAuthKey++
              })
              this.$ajax(
                'post',
                'tz/identity/info/mobile',
                this.bankCardAuthForm
              ).then(data => {
                this.commonForm.data.mobile = data.data
                this.bankCardAuthKey++
              })
            })
            .catch(err => {
              this.commonSendErrorFnV2(
                err.message || '网络请求错误，请重试！',
                true
              )
            })
        }
      })
    },
    jdFn () {
      this.commonFnV2('tz/jd/task/submit', 'tz/jd/get/info', 'jdForm')
    },
    taobaoReportFn () {
      this.commonFnV2(
        'tz/taobaoreport/task/submit',
        'tz/taobaoreport/get/info',
        'taobaoReportForm'
      )
    },
    alipayFn () {
      this.commonFnV2(
        'tz/alipay/task/submit',
        'tz/alipay/get/info',
        'alipayForm'
      )
    },
    jdReportFn () {
      this.commonFnV2(
        'tz/jdreport/task/submit',
        'tz/jdreport/get/info',
        'jdReportForm'
      )
    },
    vinFn () {
      this.commonFnV2(
        'tx/carVinDetail1 ',
        'tz/jdreport/get/info',
        'jdReportForm'
      )
    },
    probeReportFn () {
      this.$refs.probeReportForm.validate(valid => {
        if (valid) {
          // 查询前重置commonForm
          this.initCommonForm()
          this.commonForm.loading = true
          // 打开结果面板
          this.resultModalV2 = true
          this.$ajax(
            'get',
            'tz/tanzhenreport/get/info',
            this.probeReportForm,
            'commonForm.loading'
          )
            .then(data => {
              if (data.data) {
                this.commonForm.data = data.data
              } else {
                this.commonSendErrorFnV2(data.message)
              }
            })
            .catch(err => {
              this.commonSendErrorFnV2(
                err.message || '网络请求错误，请重试！',
                true
              )
            })
        }
      })
    },
    lostLetterFn () {
      this.$refs.lostLetterForm.validate(valid => {
        if (valid) {
          // 查询前重置commonForm
          this.initCommonForm()
          this.commonForm.loading = true
          // 打开结果面板
          this.resultModalV2 = true
          this.$ajax(
            'get',
            'tz/shixin/get/info',
            this.lostLetterForm,
            'commonForm.loading'
          )
            .then(data => {
              if (data.data) {
                this.commonForm.data = data.data
              } else {
                this.commonSendErrorFnV2(data.message)
              }
            })
            .catch(err => {
              this.commonSendErrorFnV2(
                err.message || '网络请求错误，请重试！',
                true
              )
            })
        }
      })
    },
    phoneStatusFn () {
      this.$refs.phoneStatusForm.validate(valid => {
        if (valid) {
          // 查询前重置commonForm
          this.initCommonForm()
          this.commonForm.loading = true
          // 打开结果面板
          this.resultModalV2 = true
          this.$ajax(
            'get',
            'tz/mobile/get/info/status',
            this.phoneStatusForm,
            'commonForm.loading'
          )
            .then(data => {
              if (data.data) {
                this.commonForm.data = data.data
              } else {
                this.commonSendErrorFnV2(data.message)
              }
            })
            .catch(err => {
              this.commonSendErrorFnV2(
                err.message || '网络请求错误，请重试！',
                true
              )
            })
        }
      })
    },

    /**
     * 查询记录click
     */
    openRecord () {
      this.initRecordData()
      this.recordModal = true
      this.getRecord()
    },
    /**
     * 查询记录数据init
     */
    initRecordData () {
      this.recordData = {
        list: [],
        page: 1,
        perpage: 10,
        total: 0,
        loading: false,
        time: []
      }
    },
    /**
     * 获取查询记录data
     */
    getRecord () {
      this.$ajax(
        'get',
        'tz/history/get/list', {
          page: this.recordData.page,
          perPage: this.recordData.perpage,
          type: this.curNav,
          startTime: this.recordData.time.length
            ? dayjs(this.recordData.time[0]).format('YYYY-MM-DD') : '',
          endTime: this.recordData.time.length
            ? dayjs(this.recordData.time[1]).format('YYYY-MM-DD') : ''
        },
        'recordData.loading'
      ).then(data => {
        this.recordData.list = data.data.data
        this.recordData.total = data.data.total
      })
    },
    changeRecordPage (page) {
      this.recordData.page = page
      this.getRecord()
    },
    recordTimeChange (t, v) {
      this.recordData.time = t
    },
    recordClickInfo (v) {
      this.resultModalV2 = true
      this.$ajax(
        'get',
        'tz/history/get/detail', {
          type: this.curNav,
          id: v
        },
        'commonForm.loading'
      ).then(data => {
        this.commonForm.data = data.data
      })
    },
    carMaintenanceFn () {
      this.commonCarFn('carMaintenanceForm').then(() => {
        this.commonGetCarBuyReport('carMaintenanceForm').then(() => {
          this.commonGetCarReportStatus('carMaintenanceForm').then(() => {
            this.commonGetCarReportJson('carMaintenanceForm')
            this.commonGetCarReportUrl('carMaintenanceForm')
          })
        })
      })
    },
    carCollisionDataFn () {
      this.commonCarFn('carCollisionDataForm').then(() => {
        this.commonGetCarBuyReport2('carCollisionDataForm').then(() => {
          this.commonGetCarReportStatus('carCollisionDataForm').then(() => {
            this.commonGetCarReportJson('carCollisionDataForm')
            this.commonGetCarReportUrl('carCollisionDataForm')
          })
        })
      })
    },
    carAccurateValuationFn () {
      this.commonCarFn('carAccurateValuationForm').then(() => {
        this.commonGetCarBuyReport('carAccurateValuationForm').then(() => {
          this.commonGetCarReportStatus('carAccurateValuationForm').then(() => {
            this.commonGetCarReportJson('carAccurateValuationForm')
            this.commonGetCarPrice('carAccurateValuationForm')
            this.commonGetCarReportUrl('carAccurateValuationForm')
          })
        })
      })
    },
    getCarCityList () {
      this.$ajax('get', 'cbh/get/all/city').then(data => {
        data.data.forEach(e => {
          e.value = e.name
          e.label = e.name
          e.children = e.citys.map(j => {
            return {
              value: j.id,
              label: j.name
            }
          })
        })
        this.carCityList = data.data
      })
    },
    getCarTypeList () {
      this.$ajax('get', 'cbh/get/all/brand').then(data => {
        data.data.forEach(e => {
          e.value = e.id
          e.label = e.name
          e.children = []
          e.loading = false
          e.lv = 1
        })
        this.carTypeList = data.data
      })
    },
    carTypeLisLloadData (item, callback) {
      item.loading = true
      if (item.lv === 1) {
        this.$ajax('get', 'cbh/get/all/series', {
          brand_id: item.value
        }).then(data => {
          item.children = (data.data || []).map(e => {
            return {
              value: e.id,
              label: e.name,
              children: [],
              loading: false,
              lv: 2
            }
          })
          item.loading = false
          callback()
        })
      }
      if (item.lv === 2) {
        this.$ajax('get', 'cbh/get/all/models', {
          series_id: item.value
        }).then(data => {
          item.children = (data.data || []).map(e => {
            return {
              value: e.id,
              label: e.name,
              minSelectYear: e.minRegYear
            }
          })
          item.loading = false
          callback()
        })
      }
    },
    carTypeSelect (value, selectedData) {
      (this.carDateOptions = {
        disabledDate (date) {
          return (
            date &&
            (dayjs(date).isBefore(
              selectedData[selectedData.length - 1].minSelectYear + '-01-01'
            ) ||
              dayjs(date).isAfter(dayjs()))
          )
        }
      }),
      (this.carDateOptionsKey += 1)
    },
    carDateSelect (date) {
      this.carAccurateValuationForm.reg_date = date
    },
    carrierTwoVerificationFn () {
      this.commonTimeFn('sjzx/mobile2ItemCheck', 'carrierTwoVerificationForm')
    },
    statusOfMobilePhoneFn () {
      this.commonTimeFn('sjzx/mobileNowStatus', 'statusOfMobilePhoneForm')
    },
    phoneNumberDowntimeFn () {
      this.commonTimeFn('sjzx/mobileStopTimes', 'phoneNumberDowntimeForm')
    },
    frequentContactsFn () {
      this.commonTimeFn('sjzx/ofenUseRelation', 'frequentContactsForm')
    },
    faceSearchFn () {
      // this.commonTimeFn("sjzx/faceSearch", "faceSearchForm");
    },
    phoneVerificationFn () {
      this.commonTimeFn('sjzx/mobileCheck', 'phoneVerificationForm')
    },
    callRelationshipVerificationFn () {
      this.commonTimeFn(
        'sjzx/callRelationCheck',
        'callRelationshipVerificationForm'
      )
    },
    mobilePhoneNumberCurrentCityVerFn () {
      this.commonTimeFn(
        'sjzx/mobileCityCheck',
        'mobilePhoneNumberCurrentCityVerForm'
      )
    },
    vocationalQualificationCertificateFn () {
      this.commonTimeFn(
        'sjzx/jobQualifications',
        'vocationalQualificationCertificateForm'
      )
    },
    bankCardThreeElementCertificationFn () {
      this.commonTimeFn(
        'sjzx/bankCard3ItemCheck',
        'bankCardThreeElementCertificationForm'
      )
    },
    IDCardValidityInquiryFn () {
      this.commonTimeFn('sjzx/idcardCheck', 'IDCardValidityInquiryForm')
    },
    bankCardTwoElementCertificationFn () {
      this.commonTimeFn(
        'sjzx/bankCard2ItemCheck',
        'bankCardTwoElementCertificationForm'
      )
    },
    bankCardFourElementCertificationFn () {
      this.commonTimeFn(
        'sjzx/bankCard4ItemCheck',
        'bankCardFourElementCertificationForm'
      )
    },
    vehicleViolationInformationFn () {
      this.commonTimeFn(
        'sjzx/carPeccancyInfo',
        'vehicleViolationInformationForm'
      )
    },
    propertyVerificationFn () {
      this.commonTimeFn('sjzx/housePropertyCheck', 'propertyVerificationForm')
    },
    riskWarningFn () {
      this.commonTimeFn('sjzx/riskLevelPrompt', 'riskWarningForm')
    },
    workUnitVerificationFn () {
      this.commonTimeFn('sjzx/workUnitCheck', 'workUnitVerificationForm')
    },
    multiCreditBehaviorRiskAssessmentFn () {
      this.commonTimeFn(
        'sjzx/manyLoanRiskEval',
        'multiCreditBehaviorRiskAssessmentForm'
      )
    },
    personalEducationReportFn () {
      this.commonTimeFn('sjzx/educationReport', 'personalEducationReportForm')
    },
    mobileInquiryFn () {
      this.commonTimeFn('sjzx/mobileMixedQuery', 'mobileInquiryForm')
    },
    fraudAlertFn () {
      this.commonTimeFn('sjzx/frautLevelPrompt', 'fraudAlertForm')
    },
    executivesFn () { // 企业高管信息查询
      this.commonTimeFn('sjzx/highManagerInfo', 'executivesForm')
    },
    verificationRelationsFn () {
      this.commonTimeFn('sjzx/contactsRelationCheck', 'verificationRelationsForm')
    },
    addressVerifFn () {
      this.commonTimeFn('sjzx/addressVerif', 'addressVerifForm')
    },
    commercialFn () {
      this.commonTimeFn('sjzx/goodCreditIndustry', 'commercialForm')
    },
    creditScoreFn () {
      this.commonTimeFn('sjzx/creditScoreQueryHard', 'creditScoreForm')
    },
    // 天行数据
    vinDetailFn () {
      this.commonTimeFn('tx/carVinDetail1', 'vinDetailForm')
    },
    licenseFn () {
      this.commonTimeFn('tx/carLicensePlateDetail', 'licenseForm')
    },
    airTravelFn () {
      this.commonTimeFn('tx/flightInfo', 'airTravelForm')
    },
    driveLicenceInfoFn () {
      this.commonTimeFn('tx/driveLicenceInfo', 'driveLicenceInfoForm')
    },
    driverPointerFn () {
      this.commonTimeFn('tx/driveLicenceDecr', 'driverPointerForm')
    },
    trafficViolationFn () {
      this.commonTimeFn('tx/trafficPeccancy1', 'trafficViolationForm')
    },
    exitPermitFn () {
      this.commonTimeFn('tx/HmPassportCheck', 'exitPermitForm')
    },
    // 多重借贷查询-A
    manyLiabilitiesQuery1Fn () {
      this.commonTimeFn('tx/manyLiabilitiesQuery1', 'manyLiabilitiesQuery1Form')
    },

    negativeFn () {
      this.commonTimeFn('tx/negativeInfoCheck', 'negativeForm')
    },
    hisLawsuit1Fn () {
      this.commonTimeFn('tx/hisLawsuit1', 'hisLawsuit1Form')
    },
    hisLawsuit2Fn () {
      this.commonTimeFn('tx/hisLawsuit2', 'hisLawsuit2Form')
    },
    hisLawsuit3Fn () {
      this.commonTimeFn('tx/hisLawsuit3', 'hisLawsuit3Form')
    },
    hisCreditCheck1Fn () {
      this.commonTimeFn('tx/hisCreditCheck1', 'hisCreditCheck1Form')
    },
    lawsuitDetail1Fn () {
      this.commonTimeFn('tx/lawsuitDetail1', 'lawsuitDetail1Form')
    },
    lawsuitDetail3Fn () {
      this.commonTimeFn('tx/lawsuitDetail3', 'lawsuitDetail3Form')
    },
    bankCardDealQueryFn () {
      this.commonTimeFn('tx/bankCardDealQuery', 'bankCardDealQueryForm')
    },
    bankCardRegQueryFn () {
      this.commonTimeFn('tx/bankCardRegQuery', 'bankCardRegQueryForm')
    },
    bankCard2itemCheckFn () {
      this.commonTimeFn('tx/bankCard2itemCheck', 'bankCard2itemCheckForm')
    },
    bankCard3itemCheck2Fn () {
      this.commonTimeFn('tx/bankCard3itemCheck2', 'bankCard3itemCheck2Form')
    },
    bankCard3itemCheck1Fn () {
      this.commonTimeFn('tx/bankCard3itemCheck1', 'bankCard3itemCheck1Form')
    },
    bankCard4itemCheckFn () {
      this.commonTimeFn('tx/bankCard4itemCheck', 'bankCard4itemCheckForm')
    },
    phoneTimeFn () { // 手机在网时长
      this.commonTimeFn('sjzx/phoneTimeLong', 'phoneTimeForm')
    },
    icbcDataFn () {
      this.commonTimeFn('tx/indubusiQuery', 'icbcDataForm')
    },
    entpLawsuit1Fn () {
      this.commonTimeFn('tx/entpLawsuit1', 'entpLawsuit1Form')
    },
    entpLawsuit2Fn () {
      this.commonTimeFn('tx/entpLawsuit2', 'entpLawsuit2Form')
    },
    entpLawsuit3Fn () {
      this.commonTimeFn('tx/entpLawsuit3', 'entpLawsuit3Form')
    },
    familyTreeFn () {
      this.commonTimeFn('tx/entpGenealogy', 'familyTreeForm')
    },
    invoiceInforFn () {
      this.commonTimeFn('tx/invoiceInfoQuery', 'invoiceInforForm')
    },
    idcardImgCheckFn () { // 身份一致性图像验证
      this.commonTimeFn('tx/idcardImgCheck', 'idcardImgCheckForm')
    },
    personalEnterpriseFn () { // 个人名下企业查询
      this.commonTimeFn('tx/hisEntp', 'personalEnterpriseForm')
    },
    idcard2itemCheckFn () {
      this.commonTimeFn('tx/idcard2itemCheck', 'idcard2itemCheckForm')
    },
    idcard3itemCheckFn () {
      this.commonTimeFn('tx/idcard2itemCheck', 'idcard2itemCheckForm')
    },

    /**
     * @datePicker_onChange
     * 港澳通行证一致性_birthday
     */
    exitPermitBirthday (value) {
      this.exitPermitForm.birthday = value
    },
    /**
     * @datePicker_onChange
     * 港澳通行证一致性_expiryDate
     */
    exitPermitExpiryDate (value) {
      this.exitPermitForm.expiryDate = value
    },
    /**
     * @datePicker_onChange
     * 身份证三元素验证_beginDate
     */
    idNoElement3BeginDate (value) {
      this.idNoElement3Form.beginDate = value
    },
    /**
     * @datePicker_onChange
     * 发票信息查询_invoiceDate
     */
    invoiceInforInvoiceDate (value) {
      this.invoiceInforForm.invoiceDate = value
    }
  },
  watch: {
    curNav (v, ov) {
      this.needBeforeData()
    },
    $route (to, from) {
      if (this.$route.name === 'creditManage') {
        this.showSidebar = true
      };
    }
  },
  mounted () {

  }
}

</script>
