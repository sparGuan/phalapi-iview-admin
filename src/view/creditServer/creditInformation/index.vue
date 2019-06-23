<style lang="less" scoped>
.ivu-modal-content {
  .nameIpt,
  .idNumIpt {
    height: 23px;
    margin-bottom: 3px;
    font-size: 12px;
    border: none;
    border: 1px solid lightgrey;
    padding-left: 4px;
  }
  .nameIpt {
    width: 110px;
    margin-right: 20px;
  }
  .debtModalHead {
    margin-bottom: 15px;
  }
  .debtManageInfo {
    border-top: 1px solid #e0e6e9;
    padding: 15px 3px 0 3px;
    margin-top: 10px;
  }
  .overdueSum {
    font-size: 12px;
    border: none;
    border: 1px solid lightgrey;
    height: 23px;
    width: 155px;
  }
  .overdueList {
    display: flex;
    justify-content: space-between;
  }
  .debtModalDateList {
    margin-bottom: 15px;
  }
}
.creditInforWrap {
  .tabs {
    ul {
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid lightgray;
      font-size: 17px;
      height: 40px;
      line-height: 40px;
      .active {
        width: 100px;
        text-align: center;
        color: rgb(77, 145, 253);
        border-bottom: 2px solid rgb(77, 145, 253);
        margin-top: 2px;
      }
    }
  }
  .content {
    .ivu-form .ivu-form-item {
      width: 40%;
    }
  }
  // 贷款申请
  .apply {
    .applySearch,
    .searchResult {
      margin-bottom: 25px;
    }
    .applySearch {
      .serialIpt {
        height: 23px;
        border: none;
        border: 1px solid lightgrey;
      }
      .applyInfo {
        display: flex;
        justify-content: space-between;
      }
      .applyInfoForm {
        padding-top: 15px;
        .applyTitle {
          margin-bottom: 10px;
          padding-left: 32px;
        }
        .formTxt {
          margin-bottom: 10px;
          padding-left: 12px;
        }
        .citySelect {
          width: 45% !important;
        }
        .addressDetail {
          margin-left: -90px;
        }
      }
    }
    // 查询结果
    .resultList {
      display: flex;
      justify-content: space-between;
      table td {
        text-align: center;
        height: 37px;
      }
      .thHeight {
        height: 45px;
      }
    }
    // 查询记录
    .queryLog {
      .logTable {
      }
    }
  }
  // 贷款审批
  .examine {
    .ivu-input-icon-normal + .ivu-input {
      height: 23px !important;
      border-radius: 0 !important;
    }
  }
  .debtManage {
    .debtTable {
      position: relative;
      .batchBtn {
        padding: 3px 8px;
        border-radius: 4px;
        position: absolute;
        bottom: 4px;
      }
    }
  }
  // 不良信息目录
  .badInfo {
    font-size: 12px;
    .badInfoOutline {
      .outlineItem {
        padding: 50px 0;
        padding-left: 10px;
        display: flex;
        align-items: center;
      }
      .titleBox {
        width: 140px;
        height: 70px;
        background: #d8eaff;
        border-radius: 4px;
        box-shadow: 3px 2px 2px gray;
        border: 1px solid lightgrey;
        margin-right: 30px;
        display: flex;
        align-items: center;
        padding: 0 5px;
        b {
          font-weight: 600;
        }
      }
      .badInfoTxt {
        color: #2db7f5;
      }
    }
  }
  // 不良信息详情
  .badInfoDetail {
    // 不良信息录入
    .badInfoEntering {
      .badInfoForm {
        padding: 15px 0;
        .formTxt {
          margin-bottom: 10px;
          padding-left: 12px;
        }
      }
    }
    .uploadWrap {
      .uploadTxtBox {
        border: 1px solid #e0e6e9;
        padding: 15px;
        font-size: 12px;
        h3 {
          margin-bottom: 13px;
        }
        p {
          margin-bottom: 10px;
        }
        .uploadTemplate {
          text-align: center;
          span {
            padding: 3px 10px;
            border-radius: 4px;
            margin-right: 20px;
          }
        }
        .uploadBox {
          border-top: 1px solid #e0e6e9;
          text-align: center;
          padding-top: 15px;
        }
      }
    }
  }
}
.debtManageModalInfo {
  margin-top: 15px;
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
}
</style>
<template>
  <div class="creditInforWrap">
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="pointer"
          :class="{ active: currentIndex === index }"
          @click="checkTab(index)"
        >
          {{ tab.txt }}
        </li>
      </ul>
    </div>
    <div class="borderL"></div>
    <div class="content">
      <!-- 贷款申请 -->
      <div class="apply listBox" v-if="currentIndex === 0">
        <!-- 贷款申请查询 -->
        <div class="applySearch">
          <p class="boxTitle">
            <span class="primary">贷款申请查询</span>
            <!-- <span class="pointer">申请编号：
							<b v-if="isSerialTxt">{{applyNumber}}</b>
							<b v-else><input type="number" class="serialIpt" autofocus @blur="serialChange()" v-model="serialIpt"></b>
							&#x3000;
            <Icon type="ios-create" size='25' @click="editSerial()" /></span>-->
          </p>
          <!-- 表单 -->
          <div class="applyInfo">
            <div class="applyInfoForm">
              <Form
                ref="formValidate1"
                :model="formValidate1"
                :rules="ruleValidate1"
                :label-width="100"
                :inline="true"
              >
                <!-- <div class="applyTitle">贷款申请信息</div>  -->
                <FormItem label="姓名" prop="id_name">
                  <Input v-model="formValidate1.id_name"></Input>
                </FormItem>
                <FormItem label="身份证号" prop="id_number">
                  <Input v-model="formValidate1.id_number"></Input>
                </FormItem>
                <FormItem label="申请日期">
                  <FormItem prop="apply_date" style="width:260px">
                    <DatePicker
                      type="date"
                      @on-change="applyDateChange"
                      placeholder="请输入出生日期"
                    ></DatePicker>
                  </FormItem>
                </FormItem>
                <FormItem label="申请金额" prop="apply_money">
                  <Input v-model="formValidate1.apply_money"></Input>
                </FormItem>
                <FormItem label="借款描述" prop="desc">
                  <Input v-model="formValidate1.desc" placeholder></Input>
                </FormItem>
                <FormItem
                  label="借款用途"
                  prop="assure_type"
                  style="width:260px"
                >
                  <Select v-model="formValidate1.assure_type">
                    <Option
                      v-for="(item, index) in borrowUseList"
                      :key="index"
                      :value="item.value"
                      >{{ item.name }}</Option
                    >
                  </Select>
                </FormItem>
                <FormItem label="贷款时长" prop="limit_month">
                  <Input
                    v-model="formValidate1.limit_month"
                    placeholder="月"
                  ></Input>
                </FormItem>
                <FormItem label="借款地址" prop="city_code">
                  <Cascader
                    :data="applyInfoAddress.data"
                    v-model="applyInfoAddress.value"
                    @on-change="applyInfoAddressChange"
                  ></Cascader>
                </FormItem>
                <FormItem label="邮箱地址" prop="email">
                  <Input v-model="formValidate1.email" placeholder></Input>
                </FormItem>
                <div class="applyTitle">
                  完善下列信息，可获得更全面的风险管理服务
                </div>
                <FormItem label="手机号码" prop="phone">
                  <Input v-model="formValidate1.phone"></Input>
                </FormItem>
                <FormItem label="填写可查">
                  <span class="red">[风险速查报告]</span>和
                  <span class="red">[风险监控服务]</span>
                </FormItem>
                <FormItem
                  label="常用地址"
                  prop="currentAddress"
                  class="citySelect"
                >
                  <Cascader
                    :data="applyInfoAddress.data"
                    v-model="applyInfoCurrentAddress.value"
                    @on-change="applyInfoCurrentAddressChange"
                  ></Cascader>
                </FormItem>
                <FormItem label prop="currentAddressDetail">
                  <Input
                    v-model="formValidate1.currentAddressDetail"
                    class="addressDetail"
                    placeholder="详细地址"
                  ></Input>
                </FormItem>
                <FormItem label="工作单位" prop="company">
                  <Input
                    v-model="formValidate1.company"
                    placeholder="单位全称"
                  ></Input>
                </FormItem>
                <br />
                <FormItem>
                  <Button
                    type="primary"
                    @click="applySubmit('formValidate1')"
                    style="margin-right: 15px"
                    >提交</Button
                  >
                  <!-- <Button @click="handleReset('formValidate1')">重置</Button> -->
                  <Button @click="handleReset('formValidate2')">重置</Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
        <!-- 查询结果 -->
        <div class="searchResult">
          <p class="boxTitle">
            <span class="primary">查询结果</span>
          </p>
          <div class="resultList">
            <!-- 小额信贷交易概况 -->
            <table
              class="leftTable"
              width="45%"
              border="1"
              cellpadding="0"
              cellspacing="0"
              bordercolor="#e8eaec"
              style="border-collapse:collapse;"
            >
              <tr>
                <th colspan="4" class="table_bg thHeight">小额信贷交易概况</th>
              </tr>
              <tr>
                <td rowspan="4" width="34%">贷款申请记录</td>
                <td width="33%">待审核</td>
                <td width="33">{{ creditLog.applyingCount }}</td>
              </tr>
              <tr>
                <td>审批通过</td>
                <td>{{ creditLog.applyPassedCount }}</td>
              </tr>
              <tr>
                <td>审批拒绝</td>
                <td>{{ creditLog.applyRejectCount }}</td>
              </tr>
              <tr>
                <td>客户取消</td>
                <td>{{ creditLog.applyCancelCount }}</td>
              </tr>
              <tr>
                <td rowspan="2">正常还款账户</td>
                <td>未结清</td>
                <td>{{ creditLog.wjqCount }}</td>
              </tr>
              <tr>
                <td>已结清</td>
                <td>{{ creditLog.jqCount }}</td>
              </tr>
              <tr>
                <td rowspan="2">已常还款账户</td>
                <td>未结清</td>
                <td>{{ creditLog.ejqCount }}</td>
              </tr>
              <tr>
                <td>已结清</td>
                <td>{{ creditLog.etotalCount }}</td>
              </tr>
              <tr>
                <td rowspan="3">查询记录</td>
                <td>3个月内</td>
                <td>{{ creditLog.queryCount3Month }}</td>
              </tr>
              <tr>
                <td>6个月内</td>
                <td>{{ creditLog.queryCount6Month }}</td>
              </tr>
              <tr>
                <td>两年内</td>
                <td>{{ creditLog.queryCount2Year }}</td>
              </tr>
            </table>

            <!-- 风险速查概况 -->
            <table
              class="rightTable"
              width="45%"
              border="1"
              cellpadding="0"
              cellspacing="0"
              bordercolor="#e8eaec"
              style="border-collapse:collapse;"
            >
              <tr>
                <th colspan="2" class="table_bg thHeight">风险速查概况</th>
              </tr>
              <tr></tr>
              <tr>
                <td colspan="2">共检测项，发现风险项</td>
              </tr>
              <tr>
                <td width="50%">黑名单</td>
                <td>{{ quickRisk.BlackList }}</td>
              </tr>
              <tr>
                <td>多重申请</td>
                <td>{{ quickRisk.JudiInfo }}</td>
              </tr>
              <tr>
                <td>多重借贷</td>
                <td>{{ quickRisk.applyInfoAt }}</td>
              </tr>
              <tr>
                <td>逾期信息</td>
                <td>{{ quickRisk.mulApply }}</td>
              </tr>
              <tr>
                <td>申请信息不一致风险</td>
                <td>{{ quickRisk.mulLd }}</td>
              </tr>
              <tr>
                <td>负面信息关联风险</td>
                <td>{{ quickRisk.negaInfo }}</td>
              </tr>
              <tr>
                <td>信息多人共用风险</td>
                <td>{{ quickRisk.overInfo }}</td>
              </tr>
              <tr>
                <td>司法信息</td>
                <td>{{ quickRisk.pubInfo }}</td>
              </tr>
              <tr>
                <td colspan="2">
                  高风险：
                  <b class="red">A</b>&#x3000; 中风险：
                  <b class="orange">B</b>&#x3000; 低风险：
                  <b class="yellow">C</b>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <!-- 查询记录 -->
        <div class="queryLog">
          <p class="boxTitle">
            <span class="primary">查询记录</span>
            <span class="logIpts font_12">
              姓名：
              <input
                type="text"
                class="nameIpt"
                v-model="query.id_name"
              />&nbsp; 身份证号：
              <input
                type="number"
                class="idNumIpt"
                v-model="query.id_Number"
                placeholder="支持后四位搜索"
              />&#x3000;
              <b class="searchBtn primary_bg white pointer" @click="queryBtn"
                >搜索</b
              >
            </span>
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
      <!-- 贷款审批 -->
      <div class="examine listBox" v-if="currentIndex === 1">
        <div class="examineQuery">
          <p class="boxTitle">
            <span class="primary">贷款审批查询</span>
            <span class="logIpts font_12">
              申请日期：
              <DatePicker
                type="date"
                size="small"
                @on-change="examineStartDate"
                placeholder="Select date"
                style="width: 130px"
              ></DatePicker>
              <i class="border_basic">-</i>
              <DatePicker
                type="date"
                size="small"
                @on-change="examineEndDate"
                placeholder="Select date"
                style="width: 130px"
              ></DatePicker
              >姓名：
              <input
                type="text"
                class="nameIpt"
                v-model="examine.id_name"
              />&nbsp; 身份证号：
              <input
                type="number"
                class="idNumIpt"
                v-model="examine.id_number"
                placeholder="支持后四位搜索"
              />&#x3000;
              <b
                class="searchBtn primary_bg white pointer"
                @click="examineSearch"
                >搜索</b
              >
            </span>
          </p>
          <div class="examineTable">
            <Table border :columns="columns2" :data="data2"></Table>
            <div class="pageBox font_12">
              <Page
                :total="total2"
                show-total
                show-elevator
                @on-change="table2Change"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 债权管理 -->
      <div class="debtManage listBox" v-if="currentIndex === 2">
        <div class="debtQuery">
          <p class="boxTitle">
            <span class="primary">债权管理查询</span>
            <span class="logIpts font_12">
              姓名：
              <input
                type="text"
                class="nameIpt"
                v-model="debtManageQuery.id_name"
              />&nbsp; 身份证号：
              <input
                type="number"
                class="idNumIpt"
                v-model="debtManageQuery.id_number"
                placeholder="支持后四位搜索"
              />&#x3000;
              <b
                class="searchBtn primary_bg white pointer"
                @click="debtManageSearch"
                >搜索</b
              >
            </span>
          </p>
          <div class="debtTable">
            <Table
              border
              :columns="columns3"
              :data="data3"
              ref="selection"
              @on-select="handleColumns3"
            ></Table>
            <div class="pageBox font_12">
              <Page
                :total="total3"
                show-total
                show-elevator
                @on-change="table3Change"
              />
            </div>
            <span class="batchBtn primary_bg white cursor" @click="batchHandel"
              >批量结清</span
            >
          </div>
        </div>
      </div>
      <!-- 逾期管理 -->
      <div class="overdueManage listBox" v-if="currentIndex === 3">
        <div class="overdueQuery">
          <p class="boxTitle">
            <span class="primary">逾期管理查询</span>
            <span class="logIpts font_12">
              姓名：
              <input
                type="text"
                class="nameIpt"
                v-model="overdueManage.id_number"
              />&nbsp; 身份证号：
              <input
                type="number"
                class="idNumIpt"
                v-model="overdueManage.id_number"
                placeholder="支持后四位搜索"
              />&#x3000;
              <b
                class="searchBtn primary_bg white pointer"
                @click="overdueManageSearch"
                >搜索</b
              >
            </span>
          </p>
          <div class="debtTable">
            <Table border :columns="columns4" :data="data4"></Table>
            <div class="pageBox font_12">
              <Page
                :total="total4"
                show-total
                show-elevator
                @on-change="table4Change"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 不良信息 -->
      <div class="badInfo listBox" v-if="currentIndex === 4">
        <!-- 概览 -->
        <div class="badInfoOutline pointer" v-if="badInfo.isTotalList === 0">
          <!-- 不良信息查询 -->
          <div class="badInfoQuery outlineItem" @click="badInfoDetail(0)">
            <span class="titleBox">
              <Icon type="ios-search" size="40" color="#19be6b" />
              <b>不良信息查询</b>
            </span>
            <span class="badInfoTxt"
              >提供包括MSP行业不良、司法信息、逾期信息、其他关联风险等在内的个人不良信息查询，即时提供个人不良信息报告。</span
            >
          </div>
          <!--不良信息录入  -->
          <div class="badInfoQuery outlineItem" @click="badInfoDetail(1)">
            <span class="titleBox">
              <Icon type="ios-clipboard-outline" size="40" color="#19be6b" />
              <b>不良信息录入</b>
            </span>
            <span class="badInfoTxt"
              >不良信息共享作为一个惩戒机制，能有效限制不良借款人的后续民间借贷活动，从而起到震慑不良借贷者，帮助催收的作用。</span
            >
          </div>
          <!--不良信息批量上传  -->
          <!-- <div class="badInfoQuery outlineItem" @click="badInfoDetail(2)">
						<span class="titleBox">
							<Icon type="ios-cloud-upload-outline" size='40' color="#19be6b" />
							<b style="word-wrap:break-word">不良信息批量下载</b>
						</span>
						<span class="badInfoTxt">用于批量共享本机构借款人不良信息，可获得一定比例的不良信息查询，风险速查次数。</span>
          </div>-->
        </div>
      </div>
      <!-- 详情 -->
      <div class="badInfoDetail listBox" v-if="badInfo.isTotalList === 1">
        <!-- 不良信息查询 -->
        <div class="applySearch" v-if="badInfo.detailStatus === 0">
          <p class="boxTitle">
            <span class="primary">不良信息查询</span>
          </p>
          <div class="applyInfo">
            <div class="applyInfoForm">
              <Form
                ref="formValidate2"
                :model="formValidate2"
                :rules="ruleValidate2"
                :label-width="80"
                :inline="true"
              >
                <FormItem label="姓名" prop="id_name">
                  <Input v-model="formValidate2.id_name"></Input>
                </FormItem>
                <FormItem label="身份证号" prop="id_number">
                  <Input v-model="formValidate2.id_number"></Input>
                </FormItem>
                <FormItem label="手机号码" prop="phone">
                  <Input v-model="formValidate2.phone"></Input>
                </FormItem>
                <FormItem></FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    @click="badInfoQuerysubmit('formValidate2')"
                    >查询</Button
                  >
                  <Button
                    @click="handleReset('formValidate2')"
                    style="margin-left: 8px"
                    >重置</Button
                  >
                </FormItem>
              </Form>
            </div>
          </div>
          <!-- 查询记录 -->
          <div class="queryLog">
            <p class="boxTitle">
              <span class="primary">查询记录</span>
              <span class="logIpts font_12">
                姓名：
                <input
                  type="text"
                  class="nameIpt"
                  v-model="badInfoQuery.id_namber"
                />&nbsp; 身份证号：
                <input
                  type="number"
                  class="idNumIpt"
                  v-model="badInfoQuery.id_number"
                  placeholder="支持后四位搜索"
                />&#x3000;
                <b
                  class="searchBtn primary_bg white pointer"
                  @click="badInfoQueryHistoryBtn"
                  >搜索</b
                >
              </span>
            </p>
            <div class="logTable">
              <Table border :columns="columns5" :data="data5"></Table>
              <div class="pageBox font_12">
                <Page
                  :total="total5"
                  show-total
                  show-elevator
                  @on-change="table5Change()"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 不良信息录入 -->
        <div class="badInfoEntering" v-if="badInfo.detailStatus === 1">
          <p class="boxTitle">
            <span class="primary">不良信息录入</span>
            <span class>录入须知</span>
          </p>
          <div class="badInfoForm">
            <Form
              ref="formValidate3"
              :model="formValidate3"
              :rules="ruleValidate3"
              :label-width="100"
              :inline="true"
            >
              <!-- <div class="applyTitle">基本信息</div>  -->
              <FormItem label="姓名" prop="id_name">
                <Input v-model="formValidate3.id_name"></Input>
              </FormItem>
              <FormItem label="身份证号" prop="id_number">
                <Input v-model="formValidate3.id_number"></Input>
              </FormItem>
              <FormItem label="手机号码" prop="phone">
                <Input v-model="formValidate3.phone"></Input>
              </FormItem>
              <!-- <div class="applyTitle">合同信息</div>  -->
              <FormItem label="借款类型" prop="loan_type" style="width:260px">
                <Select v-model="formValidate3.loan_type">
                  <Option value="0">经营</Option>
                  <Option value="1">消费</Option>
                  <Option value="2">其它</Option>
                </Select>
              </FormItem>
              <FormItem label="借款日期">
                <Row>
                  <FormItem prop="date" style="width:260px">
                    <DatePicker
                      type="date"
                      @change="badInfoBorrowSDate"
                    ></DatePicker>
                  </FormItem>
                </Row>
              </FormItem>
              <FormItem label="到期日期">
                <Row>
                  <FormItem prop="date" style="width:260px">
                    <DatePicker
                      type="date"
                      @change="badInfoBorrowEDate"
                    ></DatePicker>
                  </FormItem>
                </Row>
              </FormItem>
              <!-- <FormItem label="借款地点" prop="borrowLocation">
								<Input v-model="formValidate3.borrowLocation" placeholder="中文"></Input>
              </FormItem>-->
              <FormItem label="逾期开始日期">
                <Row>
                  <FormItem prop="date" style="width:260px">
                    <DatePicker
                      type="date"
                      @change="badInfoOverdueDate"
                      v-model="formValidate3.overdueDate"
                    ></DatePicker>
                  </FormItem>
                </Row>
              </FormItem>
              <FormItem label="借款金额" prop="loan_money">
                <Input v-model="formValidate3.loan_money"></Input>
              </FormItem>
              <FormItem label="逾期总额" prop="ovredue_money">
                <Input
                  v-model="formValidate3.ovredue_money"
                  placeholder
                ></Input>
              </FormItem>
              <FormItem></FormItem>
              <!-- <FormItem label="常用地址" prop="currentAddressDetail">
                  <citySelect v-model="formValidate3.currentAddressDetail"> </citySelect>
              </FormItem>
              <FormItem label="工作单位" prop="company" class="citySelect">
                <Input v-model="formValidate3.company" placeholder="单位全称"></Input>
              </FormItem>-->
              <FormItem>
                <Button
                  type="primary"
                  @click="badInfoEnterSubmit('formValidate3')"
                  >提交</Button
                >
                <Button
                  @click="handleReset('formValidate3')"
                  style="margin-left: 8px"
                  >重置</Button
                >
              </FormItem>
            </Form>
          </div>
          <!-- 录入记录 -->
          <div class="queryLog">
            <p class="boxTitle">
              <span class="primary">录入记录</span>
              <span class="logIpts font_12">
                姓名：
                <input
                  type="text"
                  class="nameIpt"
                  v-model="badInfoEnterQueryParams.id_name"
                />&nbsp; 身份证号：
                <input
                  type="number"
                  class="idNumIpt"
                  v-model="badInfoEnterQueryParams.id_number"
                  placeholder="支持后四位搜索"
                />&#x3000;
                <b
                  class="searchBtn primary_bg white pointer"
                  @click="badInfoEnterQuery"
                  >搜索</b
                >
              </span>
            </p>
            <div class="logTable">
              <Table border :columns="columns6" :data="data6"></Table>
              <div class="pageBox font_12">
                <Page
                  :total="total6"
                  show-total
                  show-elevator
                  @on-change="table6Change"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 不良信息批量上传 -->
        <!-- <div class="uploadWrap" v-if="badInfo.detailStatus === 2">
					<div class="">
						<p class="boxTitle"><span class="primary">不良信息批量上传</span></p>
						<div class="uploadTxtBox">
							<h3>上传说明：</h3>
							<p>请下载不良信息模板，根据模板中各字段的填报规则填报后批量上传（上传文件为Excel格式，大小不超过5M）。</p>
							<p>【必填项】：姓名、身份证号、借款日期、到期日期、借款日期、逾期开始日期、欠款总金额、手机号</p>
							<p>【选填项】：工作单位、常用住址</p>
							<p class="uploadTemplate"><span class=" primary_bg white">下载：行业不良信息模板</span></p>
							<div class="uploadBox">
								<span>
									<Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
										<div style="padding:0 5px">
											<Icon type="ios-cloud-upload" size="22" style="color: #3399ff"></Icon>
											<p>点击或拖拽上传</p>
										</div>
									</Upload>
								</span>
							</div>
						</div>
        </div>-->
        <!-- 上传文件历史记录 -->
        <!-- <div class="uploadRecordTable">
						<p class="boxTitle"><span class="primary">上传文件历史记录</span></p>
						<Table border :columns="columns7" :data='data7'></Table>
						<div class="pageBox font_12">
							<Page :total="total7" show-total show-elevator />
						</div>
					</div>
        </div>-->
      </div>
    </div>
    <!-- 管理modal -->
    <Modal v-model="debtManageModal.modal" width="440">
      <p slot="header" style="color:#2d8cf0;">
        <Icon type="ios-information-circle"></Icon>
        <span>债权管理</span>
      </p>
      <div class="modalContent">
        <p class="bottom_15">
          <b class="iptLable_small">姓名</b>
          <input
            type="text"
            class="smallIpt"
            v-model="debtManageModal.id_name"
          />
        </p>
        <p class="bottom_15">
          <b class="iptLable_small">身份证号</b>
          <input
            type="number"
            class="middleIpt"
            v-model="debtManageModal.id_number"
            placeholder="支持后四位搜索"
          />
        </p>
        <p class="debtManageModalRadio">
          <RadioGroup
            v-model="debtManageModal.type"
            @on-change="debtStyleChange"
          >
            <Radio
              :label="index + 1"
              v-for="(item, index) in debtStyleList"
              :key="index"
              >{{ item.label }}</Radio
            >
          </RadioGroup>
        </p>
        <div class="debtManageModalInfo" v-if="this.debtManageModal.type != 1">
          <!-- 贷款逾期 -->
          <div v-if="this.debtManageModal.type === 2">
            <p class="bottom_15">
              <i class="red">*&nbsp;</i>
              <b class="iptLable_middle">逾期开始日期</b>
              <DatePicker
                type="date"
                @on-change="overdueStartDate"
                placeholder="Select date"
                style="width: 180px"
              ></DatePicker>
            </p>
            <p class="bottom_15">
              <b class="iptLable_middle">&nbsp;&nbsp;逾期结束日期</b>
              <DatePicker
                type="date"
                @on-change="overdueEndDate"
                placeholder="Select date"
                style="width: 180px"
              ></DatePicker>
            </p>
            <p class="bottom_15">
              <i class="red">*&nbsp;</i>
              <b class="iptLable_middle">逾期金额</b>
              <input
                type="number"
                class="smallIpt"
                v-model="debtManageModal.overdue_money"
              />
            </p>
          </div>
          <!--贷款结清  -->
          <div v-if="this.debtManageModal.type === 3">
            <i class="red">*&nbsp;</i>
            <b class="iptLable_middle">结清日期</b>
            <DatePicker
              type="date"
              @on-change="settleDate"
              placeholder="Select date"
              style="width: 180px"
            ></DatePicker>
          </div>
          <!--贷款展期  -->
          <div v-if="this.debtManageModal.type === 4">
            <i class="red">*&nbsp;</i>
            <b class="iptLable_middle">展期到展日期</b>
            <DatePicker
              type="date"
              @on-change="deferDate"
              placeholder="Select date"
              style="width: 180px"
            ></DatePicker>
          </div>
        </div>
      </div>
      <div slot="footer">
        <Button type="primary" long @click="debtManageSubmit">确定</Button>
      </div>
    </Modal>
    <!-- 风险速查Modal -->
    <Modal v-model="riskQuick.modal" width="460">
      <p slot="header" style="color:#2d8cf0;">
        <Icon type="ios-information-circle"></Icon>
        <span>风险速查查询</span>
      </p>
      <div class="modalContent">
        <p class="bottom_15">
          <b class="red">*</b> 手机号码：
          <input type="number" v-model="riskQuick.phone" class="smallIpt" />
        </p>
        <p class="bottom_15">
          &nbsp;&nbsp;工作单位：
          <input type="text" v-model="riskQuick.company" class="middleIpt" />
        </p>
        <p class="bottom_15">
          &nbsp;&nbsp;邮箱地址：
          <input
            type="text"
            v-model="riskQuick.email"
            placeholder="邮箱地址"
            class="largeIpt"
          />
        </p>
        <p class="primary">
          信息完善度越高，风控效果越明显，提交后，您将获得
          <b class="red">风险速查报告</b>及 <b class="red">风险监控服务</b>。
        </p>
      </div>
      <div slot="footer">
        <Button type="primary" long @click="riskQuickSubmit">确认</Button>
      </div>
    </Modal>
    <!-- 逾期管理_加入黑名单_基本信息Modal -->
    <Modal v-model="blackList.modal" width="350">
      <p slot="header" style="color:#2d8cf0;">
        <Icon type="ios-information-circle"></Icon>
        <span>确认加入黑名单</span>
      </p>
      <div class="modalContent">
        <p class="top_15">
          <Checkbox v-model="blackList.single">确认已履行告知义务</Checkbox>
        </p>
      </div>
      <div slot="footer">
        <Button type="primary" long @click="intoBlackList">确认</Button>
      </div>
    </Modal>
    <Modal
      v-model="pdfModal"
      :mask-closable="false"
      :fullscreen="true"
      width="90%"
      ok-text="关闭"
      class-name="commonmodalwrap tanzhiresultModal"
    >
      <div class="commonmodalcenter" id="pdfDom">
        <creditServer :data="pdfData"></creditServer>
      </div>
    </Modal>
  </div>
</template>
<script>
import creditServer from '@/components/creditServer/index'
export default {
  name: 'creditInformation',
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
      limitBtn: true,
      pdfModal: false,
      pdfData: {},
      isSerialTxt: true,
      serialIpt: '',
      applyNumber: '1234566',
      borrowUseList: [],
      applyInfoAddress: {
        value: [],
        data: []
      },
      applyInfoCurrentAddress: {
        value: []
      },
      creditLog: {
        applyingCount: '',
        applyPassedCount: '',
        applyRejectCount: '',
        applyCancelCount: '',
        wjqCount: '',
        jqCount: '',
        ejqCount: '',
        etotalCount: '',
        queryCount3Month: '',
        queryCount6Month: '',
        queryCount2Year: ''
      },
      quickRisk: {
        Blacklist: '',
        JudiInfo: '',
        applyInfoAt: '',
        mulApply: '',
        mulLd: '',
        negaInfo: '',
        overInfo: '',
        pubInfo: ''
      },
      query: {
        id_name: '',
        id_number: '',
        currentIndex: '1'
      },
      riskQuick: {
        id: '',
        modal: false,
        phone: '',
        company: '',
        email: ''
      },
      blackList: {
        modal: false,
        single: true
      },
      examine: {
        apply_sdate: '',
        apply_edate: '',
        id_name: '',
        id_number: '',
        currentIndex: '1'
      },
      debtManageQuery: {
        id_name: '',
        id_number: '',
        currentIndex: '1'
      },
      debtManageIds: [],
      debtManageModal: {
        modal: false,
        model1: '',
        id_name: '',
        id_number: '',
        id: '',
        type: 1,
        overdue_stime: '',
        overdue_etime: '',
        overdue_money: '',
        ext_etime: '',
        settle_time: ''
      },
      overdueManage: {
        id_name: '',
        id_number: '',
        hasEndDate: true,
        currentIndex: '1'
      },
      overdueList: [
        {
          value: '0',
          label: '逾期中'
        },
        {
          value: '1',
          label: '恢复正常'
        },
        {
          value: '2',
          label: '结清'
        },
        {
          value: '3',
          label: '核销'
        }
      ],

      debtStyleList: [
        {
          label: '正常还款'
        },
        {
          label: '贷款逾期'
        },
        {
          label: '贷款结清'
        },
        {
          label: '贷款展期'
        }
      ],
      badInfo: {
        isTotalList: 0,
        detailStatus: ''
      },
      tabs: [
        {
          txt: '贷款申请'
        },
        {
          txt: '贷款审批'
        },
        {
          txt: '债权管理'
        },
        {
          txt: '逾期管理'
        },
        {
          txt: '不良信息'
        }
      ],
      currentIndex: 0,
      formValidate1: {
        id_name: '',
        id_number: '',
        apply_date: '',
        apply_money: '',
        city_code: '',
        assure_type: '',
        limit_month: '',
        desc: '',
        currentAddress: '',
        currentAddressDetail: '',
        company: ''
      },
      ruleValidate1: {
        id_name: [
          {
            required: true,
            message: '姓名不能为空',
            trigger: 'blur'
          }, {
            type: 'string',
            min: 2,
            max: 4,
            message: '姓名长度不符',
            trigger: 'blur'
          }
        ],
        id_number: [
          {
            required: true,
            validator: validateIdNo,
            trigger: 'blur'
          }
        ],
        apply_date: [
          {
            required: true,
            message: '申请日期不能为空',
            trigger: 'blur'
          }
        ],
        apply_money: [
          {
            required: true,
            message: '申请金额不能为空',
            trigger: 'blur'
          }
        ],
        city_code: [
          {
            required: true,
            message: '借款地点不能为空',
            trigger: 'blur'
          }
        ],
        assure_type: [
          {
            required: true,
            message: '借款用途不能为空',
            trigger: 'change'
          }
        ],
        limit_month: [
          {
            required: true,
            message: '贷款时长不能为空',
            trigger: 'blur'
          }
        ]
      },
      // 小额信贷交易概况Table
      total1: 0,
      columns1: [
        {
          title: 'ID',
          key: 'id',
          align: 'center',
          width: 100
        },
        {
          title: '查询时间',
          key: 'add_time',
          align: 'center',
          width: 170
        },
        {
          title: '姓名',
          key: 'id_name',
          align: 'center'
        },
        {
          title: '身份证号码',
          key: 'id_number',
          align: 'center',
          width: 230
        },
        {
          title: '操作',
          key: 'handle',
          align: 'center',
          width: 220,
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.uploadPdf(params.row.id)
                    }
                  }
                },
                '报告'
              )
              // h(
              //   "Button",
              //   {
              //     props: {
              //       type: "error",
              //       size: "small"
              //     },
              //     on: {
              //       click: () => {
              //         this.riskQuick.id = params.row.id;
              //         this.riskQuick.modal = true;
              //       }
              //     }
              //   },
              //   '风险速查'
              // )
            ])
          }
        }
      ],
      data1: [],
      // 贷款审批查询Table
      loan_isEdit: true,
      loanRefuseReason_isEdit: true,
      columns2: [
        {
          title: '姓名',
          key: 'id_name',
          align: 'center',
          width: 80
        },
        {
          title: '身份证号',
          key: 'id_number',
          align: 'center',
          width: 180
        },
        {
          title: '申请日期',
          key: 'apply_date',
          align: 'center',
          width: 110
        },
        {
          title: '申贷金额',
          key: 'apply_money',
          align: 'center',
          width: 120
        },
        {
          title: '审批结果',
          key: 'cu_status',
          align: 'center',
          width: 150,
          render: (h, params) => {
            var checkStatus = { 'true': '通过', 'false': '未通过' }
            if (params.row.approv_ret == 'wait') {
              this.checkCuStatus(params.row.cu_status)
              return h('Select', {
                props: {
                  value: '' + params.row.cu_status + ''
                },
                on: {
                  'on-change': (value) => {
                    params.row.cu_status = value
                    this.checkCuStatus(params.row.cu_status)
                  }
                }
              },
              [
                h('Option', {
                  props: {
                    value: '1'
                  }
                }, '同意贷款'),
                h('Option', {
                  props: {
                    value: '2'
                  }
                }, '拒绝贷款'),
                h('Option', {
                  props: {
                    value: '3'
                  }
                }, '延迟处理'),
                h('Option', {
                  props: {
                    value: '4'
                  }
                }, '客户取消')
              ])
            } else {
              return h('div', {}, checkStatus[params.row.approv_ret])
            }
          }
        },
        {
          title: '借款金额',
          key: 'loan_money',
          align: 'center',
          width: 100,
          render: (h, params) => {
            return h('Input', {
              props: {
                type: 'text',
                value: params.row.loan_money,
                disabled: this.loan_isEdit
              },
              on: {
                input: (val) => {
                  params.row.loan_money = val
                }
              }
            })
          }
        },
        {
          title: '借款日期',
          key: 'loan_date',
          align: 'center',
          width: 150,
          render: (h, params) => {
            return h('DatePicker', {
              props: {
                type: 'datetime',
                format: 'yyyy-MM-dd',
                placeholder: params.row.loan_date,
                disabled: this.loan_isEdit
              },
              on: {
                'on-change': (val) => {
                  params.row.loan_date = val
                }
              }
            })
          }
        },
        {
          title: '还款期数',
          key: 'loan_pers',
          align: 'center',
          width: 100,
          render: (h, params) => {
            return h('Input', {
              props: {
                type: 'text',
                value: params.row.loan_pers,
                disabled: this.loan_isEdit
              },
              on: {
                input: (val) => {
                  params.row.loan_pers = val
                }
              }
            })
          }
        },
        {
          title: '到期日期',
          key: 'expire_date',
          align: 'center',
          width: 150,
          render: (h, params) => {
            return h('DatePicker', {
              props: {
                type: 'datetime',
                format: 'yyyy-MM-dd',
                placeholder: params.row.expire_date,
                disabled: this.loan_isEdit
              },
              on: {
                'on-change': (val) => {
                  params.row.expire_date = val
                }
              }
            })
          }
        },
        {
          title: '担保方式',
          key: 'assure_type',
          align: 'center',
          width: 110,
          render: (h, params) => {
            return h('Select', {
              props: {
                type: 'text',
                value: params.row.assure_type,
                disabled: this.loan_isEdit
              },
              on: {
                'on-change': (label) => {
                  params.row.assure_type = label
                  console.log(label)
                }
              }
            },
            this.borrowUseList.map((item) => {
              return h('Option', {
                props: {
                  value: item.value,
                  label: item.name
                }
              })
            }))
          }
        },
        {
          title: '拒贷原因',
          key: 'refuse_reason',
          align: 'center',
          width: 100,
          render: (h, params) => {
            return h('Select', {
              props: {
                disabled: this.loanRefuseReason_isEdit
              },
              on: {
                'on-change': (val) => {
                  params.row.refuse_reason = val
                }
              }
            },
            [
              h('Option', {
                props: {
                  value: '1'
                }
              }, '原因1'),
              h('Option', {
                props: {
                  value: '2'
                }
              }, '原因2'),
              h('Option', {
                props: {
                  value: '3'
                }
              }, '原因3')
            ])
          }
        },
        {
          title: '剩余期限',
          key: 'surplus_pers',
          align: 'center',
          width: 100
        },
        {
          title: '操作',
          key: 'handle',
          align: 'center',
          width: 150,
          render: (h, params) => {
            if (params.row.approv_ret === 'wait') {
              return h('div', [
                h(
                  'Button',
                  {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        this.examinePass(params.row)
                      }
                    }
                  },
                  '提交'
                )
              ])
            }
          }
        }
      ],
      data2: [],
      total2: 0,
      // 债权管理
      volumeTypes: [
        {
          value: '逾期中'
        },
        {
          value: '恢复正常'
        },
        {
          value: '结清'
        },
        {
          value: '核销'
        }
      ],
      columns3: [
        {
          title: '姓名',
          key: 'id_name',
          align: 'center',
          type: 'selection',
          width: 80
        },
        {
          title: '身份证号',
          key: 'id_number',
          align: 'center',
          width: 180
        },
        {
          title: '借款日期',
          key: 'loan_date',
          align: 'center',
          width: 170
        },
        {
          title: '到期日期',
          key: 'expire_date',
          align: 'center',
          width: 170
        },
        {
          title: '借款金额',
          key: 'loan_money',
          align: 'center',
          width: 170
        },
        {
          title: '剩余期限',
          key: 'surplus_pers',
          align: 'center',
          width: 100
        },
        {
          title: '操作',
          key: 'handle',
          align: 'center',
          width: 150,
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      let originData = params.row
                      this.debtManageModal.modal = true
                      this.debtManageModal.id_name = originData.id_name
                      this.debtManageModal.id_number = originData.id_number
                      this.debtManageModal.id = originData.id
                    }
                  }
                },
                '管理'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.uploadPdf(params.row.id)
                    }
                  }
                },
                '报告'
              )
            ])
          }
        }
      ],
      data3: [],
      total3: 0,
      // 逾期管理
      columns4: [
        {
          title: '姓名',
          key: 'id_name',
          align: 'center',
          width: 80
        },
        {
          title: '身份证号',
          key: 'id_number',
          align: 'center',
          width: 180
        },
        {
          title: '借款日期',
          key: 'loan_date',
          align: 'center',
          width: 170
        },
        {
          title: '逾期状态',
          key: 'overdue_status',
          align: 'center',
          width: 150,
          render: (h, params) => {
            return h('Select', {
              props: {
                value: params.row.overdue_status
              },
              on: {
                'on-change': (val) => {
                  params.row.overdue_status = val
                }
              }
            },
            [
              h('Option', {
                props: {
                  value: '1'
                }
              }, '逾期中'),
              h('Option', {
                props: {
                  value: '2'
                }
              }, '恢复正常'),
              h('Option', {
                props: {
                  value: '3'
                }
              }, '结清'),
              h('Option', {
                props: {
                  value: '4'
                }
              }, '核销')
            ])
          }
        },

        {
          title: '逾期总金额/元',
          key: 'overdue_money',
          align: 'center',
          width: 180,
          render: (h, params) => {
            var isDisabled = ''
            if (params.row.overdue_status == '1') {
              isDisabled = false
            } else {
              isDisabled = true
            };
            return h('Input', {
              props: {
                value: params.row.overdue_money,
                disabled: isDisabled
              },
              style: {
                marginBottom: '5px',
                marginTop: '5px'
              },
              on: {
                input: val => {
                  params.row.overdue_money = val
                }
              }
            })
          }
        },
        {
          title: '逾期开始日',
          key: 'overdue_sdate',
          align: 'center',
          width: 150,
          render: (h, params) => {
            var isDisabled = ''
            if (params.row.overdue_status == '1') {
              isDisabled = false
            } else {
              isDisabled = true
            };
            return h('DatePicker', {
              props: {
                type: 'datetime',
                format: 'yyyy-MM-dd',
                placeholder: params.row.overdue_sdate,
                disabled: isDisabled
              },
              on: {
                'on-change': (val) => {
                  params.row.overdue_sdate = val
                }
              }
            })
          }
        },
        {
          title: '逾期结束日',
          key: 'overdue_edate',
          align: 'center',
          width: 150,
          render: (h, params) => {
            var isDisabled = ''
            if (params.row.overdue_status == '1') {
              isDisabled = false
            } else {
              isDisabled = true
            };
            return h('DatePicker', {
              props: {
                type: 'datetime',
                format: 'yyyy-MM-dd',
                placeholder: params.row.overdue_edate,
                disabled: isDisabled
              },
              on: {
                'on-change': (val) => {
                  params.row.overdue_edate = val
                }
              }
            })
          }
        },
        {
          title: '剩余期限',
          key: 'surplus_pers',
          align: 'center',
          width: 100
        },
        {
          title: '操作',
          key: 'handle',
          align: 'center',
          width: 150,
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginBottom: '5px',
                    marginTop: '5px'
                  },
                  on: {
                    click: () => {
                      if (this.limitBtn) {
                        this.limitBtn = false
                        var obj = params.row
                        var confirmParams = {
                          id: obj.id,
                          overdue_status: obj.overdue_status
                        }
                        if (obj.overdue_status == '1') {
                          confirmParams.overdue_stime = obj.overdue_sdate
                          confirmParams.overdue_etime = obj.overdue_edate
                          confirmParams.overdue_money = obj.overdue_money
                        };
                        this.$ajax('post', 'ar/overdue/upstate', confirmParams)
                          .then(res => {
                            this.limitBtn = true
                            this.$Message.success('提交成功！')
                          })
                          .catch(res => {
                            this.limitBtn = true
                          })
                      }
                    }
                  }
                },
                '提交'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    marginLeft: '10px',
                    marginBottom: '5px',
                    marginTop: '5px'
                  },
                  on: {
                    click: () => {
                      this.uploadPdf(params.row.id)
                    }
                  }
                },
                '报告'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  style: {
                    marginBottom: '5px'
                  },
                  on: {
                    click: () => {
                      this.blackList.modal = true
                      this.blackList.id = params.row.id
                    }
                  }
                },
                '转入黑名单'
              )
            ])
          }
        }
      ],
      data4: [],
      total4: 0,
      // 不良信息查询
      columns5: [
        {
          title: '姓名',
          key: 'id_name',
          align: 'center'
        },
        {
          title: '身份证号',
          key: 'id_number',
          align: 'center'
        },
        {
          title: '手机号',
          key: 'mobile',
          align: 'center'
        },
        {
          title: '查询时间',
          key: 'created_at',
          align: 'center'
        },
        {
          title: '操作',
          key: 'is_report',
          align: 'center',
          render: (h, params) => {
            // if(params.row.is_report){
            //   return h("div", [
            //     h(
            //       "Button",
            //       {
            //         props: {
            //           type: "primary",
            //           size: "small"
            //         },
            //         on: {
            //           click: () => {
            //             this.uploadPdf()
            //           }
            //         }
            //       },
            //       "报告"
            //     )
            //   ]);
            // }else{
            return h('div', {}, '不存在不良信息')
            // }
          }
        }
      ],
      data5: [],
      total5: 0,
      // 不良信息录入
      columns6: [
        {
          title: '序号',
          key: 'num',
          align: 'center'
        },
        {
          title: '姓名',
          key: 'id_name',
          align: 'center'
        },
        {
          title: '身份证号码',
          key: 'id_number',
          align: 'center',
          width: 180
        },
        {
          title: '录入日期',
          key: 'created_at',
          align: 'center',
          width: 170
        },
        {
          title: '逾期开始时间',
          key: 'overdue_sdate',
          align: 'center'
        },
        {
          title: '欠款总额/元',
          key: 'overdue_money',
          align: 'center'
        }
      ],
      data6: [],
      total6: 0,
      // 上传文件历史记录
      columns7: [
        {
          title: '文件名称',
          key: 'fileName',
          align: 'center'
        },
        {
          title: '上传时间',
          key: 'uploadTime',
          align: 'center',
          width: 170
        },
        {
          title: '上传成功',
          key: 'uploadSucceed',
          align: 'center'
        },
        {
          title: '上传失败',
          key: 'uploadFailure',
          align: 'center'
        },
        {
          title: '增加风险速查查询次数',
          key: 'queriesNum',
          align: 'center'
        },
        {
          title: '操作',
          key: 'handle',
          align: 'center'
        }
      ],
      data7: [],
      total7: 0,
      formValidate2: {
        id_name: '',
        id_number: '',
        phone: ''
      },
      ruleValidate2: {
        id_name: [
          {
            required: true,
            message: '姓名不能为空',
            trigger: 'blur'
          }, {
            type: 'string',
            min: 2,
            max: 4,
            message: '姓名长度不符',
            trigger: 'blur'
          }
        ],
        id_number: [
          {
            required: true,
            validator: validateIdNo,
            trigger: 'blur'
          }
        ],
        phone: [
          {
            required: true,
            validator: validatePhone,
            trigger: 'blur'
          }
        ]
      },
      badInfoQuery: {
        id_name: '',
        id_number: ''
      },

      formValidate3: {
        id_name: '',
        id_number: '',
        phone: '',
        loan_date: '',
        expire_date: '',
        loan_money: '',
        loan_type: '',
        overdue_sdate: '',
        ovredue_money: ''
        // overdue_money: "",
        // current_address: "",
        // company: "",
      },
      ruleValidate3: {
        id_name: [
          {
            required: true,
            message: '姓名不能为空',
            trigger: 'blur'
          }, {
            type: 'string',
            min: 2,
            max: 4,
            message: '姓名长度不符',
            trigger: 'blur'
          }
        ],
        id_number: [
          {
            required: true,
            validator: validateIdNo,
            trigger: 'blur'
          }
        ],
        phone: [
          {
            required: true,
            validator: validatePhone,
            trigger: 'blur'
          }
        ]
      },
      badInfoEnterQueryParams: {
        id_name: '',
        id_number: '',
        currentIndex: '1'
      }
    }
  },
  created () {
    this.getAreaCode()
    this.queryType()
  },
  mounted () {
    let params = this.$route.params
    let arr = Object.keys(params)
    if (arr.length) {
      this.currentIndex = params.tabIndex
    };
    this.defaultTableQuery(this.currentIndex)
  },
  methods: {
    /**
     * 获取城市代码
     */
    getAreaCode: function () {
      this.$ajax('post', 'ar/area/code')
        .then(res => {
          this.applyInfoAddress.data = res.data
        })
    },
    /**
     * 贷款table type查询
     */
    queryType () {
      this.$ajax('get', 'ar/assure/type')
        .then(res => {
          this.borrowUseList = res.data
        })
    },
    /**
     * common
     * 对象value为空则软删除
     */
    filterNull (obj) {
      let newObj = {}
      for (let k in obj) {
        if ((obj[k] === 0 || obj[k]) && obj[k].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
          newObj[k] = obj[k]
        }
      };
      return newObj
    },
    /**
     * 主页tab切换
     */
    checkTab (index) {
      this.currentIndex = index
      this.badInfo.isTotalList = 0
      this.defaultTableQuery(index)
    },
    defaultTableQuery (index) {
      if (index == '0') {
        this.queryBtn()
      };
      if (index == '1') {
        this.examineSearch()
      };
      if (index == '2') {
        this.debtManageSearch()
      };
      if (index == '3') {
        this.overdueManageSearch()
      };
    },

    /**
     * 更改申请编号
     */
    // editSerial() {
    //   this.isSerialTxt = !this.isSerialTxt;
    // },
    applyInfoAddressChange (value) {
      this.formValidate1.city_code = value[2]
    },
    applyInfoCurrentAddressChange (value) {
      this.formValidate1.currentAddress = value[2]
    },
    /**
     * 贷款申请日期change
     */
    applyDateChange (value) {
      this.formValidate1.apply_date = value
    },
    /**
     * 贷款table查询
     */
    queryBtn () {
      this.$ajax('post', 'ar/history/list', this.query)
        .then(res => {
          this.data1 = res.data
          this.total1 = res.total
        })
    },
    /**
     * 贷款table查询记录分页
     */
    table1Change (index) {
      this.query.currentIndex = index
      this.queryBtn()
    },
    checkCuStatus (value) {
      if (value == '1') {
        this.loan_isEdit = false
        this.loanRefuseReason_isEdit = true
      } else if (value == '2') {
        this.loan_isEdit = true
        this.loanRefuseReason_isEdit = false
      } else {
        this.loan_isEdit = true
        this.loanRefuseReason_isEdit = true
      }
    },
    /**
     *贷款审批操作提交
     */
    examinePass (tableData) {
      if (this.limitBtn) {
        this.limitBtn = false
        var type = tableData.cu_status
        var params = {
          id: tableData.id,
          type: type
        }
        if (type == '1') {
          params.loan_money = tableData.loan_money
          params.loan_date = tableData.loan_date
          params.loan_pers = tableData.loan_pers
          params.assure_type = tableData.assure_type
        };
        if (type == '2') {
          params.ref_reasons = tableData.refuse_reason
        }
        this.$ajax('post', 'ar/approval/operation', params)
          .then(res => {
            this.limitBtn = true
          })
          .catch(res => {
            this.limitBtn = true
          })
      }
    },
    /**
     * 风险速查modal提交
     */
    riskQuickSubmit () {
      if (!this.riskQuick.phone) {
        this.$Message.error('手机号码不能为空！')
        return
      };
      this.riskQuick.modal = false
      let params = this.filterNull(this.riskQuick)
      this.$ajax('post', 'ar/risk/quick', params)
        .then(res => {
        })
    },
    /**
     * 转入黑名单
     */
    intoBlackList () {
      if (this.limitBtn) {
        this.limitBtn = false
        var obj = this.blackList
        if (obj.single) {
          var params = {
            id: obj.id
          }
          this.$ajax('post', 'ar/overdue/addBlack', params)
            .then(res => {
              this.limitBtn = true
              obj.modal = false
            })
            .catch(res => {
              this.limitBtn = true
            })
        } else {
          this.$Message.error('error')
        }
      }
    },

    /**
     * 监听申请
     */
    // serialChange() {
    //   let oldSerialVal = this.applyNumber;
    //   if (!this.serialIpt) {
    //     this.instance("warning");
    //     this.serialIpt = oldSerialVal;
    //   }else {
    //     this.applyNumber = this.serialIpt;
    //   }
    //   this.editSerial();
    // },
    instance (type) {
      const content = '<p>申请编码不能为空,恢复上次编码！</p>'
      this.$Modal.error({
        content: content
      })
    },
    /**
     * 贷款申请submit
     */
    applySubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid && this.limitBtn) {
          this.limitBtn = false
          if (this.formValidate1.currentAddressDetail) {
            this.$Message.error('常住地址和详细地址为必填')
            return
          };
          this.$ajax('post', 'ar/loan/apply', this.formValidate1)
            .then(res => {
              this.limitBtn = true
              let data = res.data
              this.creditLog = data.creditLog
              if (data.quickRisk) {
                this.quickRisk = data.quickRisk
              };
            })
            .catch(res => {
              this.limitBtn = true
            })
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    /**
     * 贷款审批开始日期
     */
    examineStartDate (value) {
      this.examine.apply_sdate = value
    },

    /**
     * 贷款审批结束日期
     */
    examineEndDate (value) {
      this.examine.apply_edate = value
    },

    /**
     * 贷款审批table搜索
     */
    examineSearch () {
      this.$ajax('post', 'ar/approval/list', this.examine)
        .then(res => {
          this.data2 = res.data
          this.total2 = res.total
        })
    },
    /**
     * 贷款审批table搜索记录分页
     */
    table2Change (index) {
      this.examine.currentIndex = index
      this.examineSearch()
    },
    /**
     * 债权管理table query
     */
    debtManageSearch () {
      this.$ajax('post', 'ar/claims/list', this.debtManageQuery)
        .then(res => {
          this.data3 = res.data
          this.total3 = res.total
        })
    },
    /**
     * 债权管理table记录分页
     */
    table3Change (index) {
      this.debtManageQuery.currentIndex = index
      this.debtManageSearch()
    },
    handleColumns3 (selection, row) {
      this.debtManageIds = selection
    },
    /**
     * 债权管理-批量结清
     */
    batchHandel () {
      let arr = this.debtManageIds
      var params = { ids: [] }
      for (var key in arr) {
        params.ids.push(arr[key].id)
      }
      this.$ajax('post', 'ar/claims/batch/Settle', params)
        .then(res => {
        })
    },
    /**
     * 债权管理modal
     */
    debtManageSubmit () {
      if (this.limitBtn) {
        this.limitBtn = false
        let obj = this.debtManageModal
        var params = {
          id: obj.id,
          type: obj.type
        }
        if (obj.type == '2') {
          params.overdue_stime = obj.overdue_stime
          params.overdue_etime = obj.overdue_etime
          params.overdue_money = obj.overdue_money
        };
        if (obj.type == '3') {
          params.settle_time = obj.settle_time
        };
        if (obj.type == '4') {
          params.ext_etime = obj.ext_etime
        };
        this.$ajax('post', 'ar/claims/mange', params)
          .then(res => {
            this.limitBtn = true
            this.debtManageModal.modal = false
          })
          .catch(res => {
            this.limitBtn = true
          })
      }
    },
    cancel () { },
    debtStyleChange (value) {
      // this.debtManageModal.type = value;
    },
    overdueStartDate (value) {
      this.debtManageModal.overdue_stime = value
    },
    overdueEndDate (value) {
      this.debtManageModal.overdue_etime = value
    },
    /**
     * 结清日期Datepicker
     */
    settleDate (value) {
      this.debtManageModal.settle_time = value
    },
    /**
     * 展期到展Datepicker
     */
    deferDate (value) {
      console.log(value)
      this.debtManageModal.ext_etime = value
    },
    /**
     * 逾期管理table query
     */
    overdueManageSearch () {
      this.$ajax('post', 'ar/overdue/list', this.overdueManage)
        .then(res => {
          this.data4 = res.data
          this.total4 = res.total
        })
    },
    /**
     * 逾期管理table记录分页
     */
    table4Change (index) {
      this.overdueManage.currentIndex = index
      this.overdueManageSearch()
    },
    /**
 * 不良信息详情跳转
 */
    badInfoDetail (status) {
      this.badInfo.isTotalList = 1
      this.badInfo.detailStatus = status
      if (status == '0') {
        this.badInfoQueryHistoryBtn()
      };
      if (status == '1') {
        this.badInfoEnterQuery()
      };
    },

    /**
     * 不良信息查询
     */
    badInfoQuerysubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid && this.limitBtn) {
          this.limitBtn = false
          this.$ajax('post', 'ar/badInfo/search', this.formValidate2)
            .then(res => {
              this.limitBtn = true
              this.data5.push(res.data)
            })
            .catch(res => {
              this.limitBtn = true
            })
        }
      })
    },
    /**
     * 不良信息查询记录
     */
    badInfoQueryHistoryBtn () {
      this.$ajax('post', 'ar/badInfo/search/log', this.badInfoQuery)
        .then(res => {
          this.data5 = res.data
          this.total5 = res.total
        })
    },
    /**
    * 不良信息查询记录分页
    */
    table5Change (index) {
      this.badInfoQuery.currentIndex = index
      this.badInfoQueryHistoryBtn()
    },
    /**
     * 不良信息录入
     */
    badInfoEnterSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid && this.limitBtn) {
          this.limitBtn = false
          this.$ajax('post', 'ar/badInfo/add', this.formValidate3)
            .then(res => {
              this.limitBtn = true
            })
            .catch(res => {
              this.limitBtn = true
            })
        };
      })
    },
    /**
     * 不良信息录入记录
     */
    badInfoEnterQuery () {
      this.$ajax('post', 'ar/badInfo/add/log', this.badInfoEnterQueryParams)
        .then(res => {
          this.data6 = res.data
          this.total6 = res.total
        })
    },
    table6Change (index) {
      this.badInfoEnterQueryParams.currentIndex = index
      this.badInfoEnterQuery()
    },
    /**
    * 不良信息录入开始日期
    */
    badInfoBorrowSDate (value) {
      this.formValidate3.loan_date = value
    },

    /**
     * 不良信息录入结束日期
     */
    badInfoBorrowEDate (value) {
      this.formValidate3.expire_date = value
    },
    /**
     * 不良信息录入逾期开始日期
     */
    badInfoOverdueDate (value) {
      this.formValidate3.overdue_sdate = value
    },
    uploadPdf (id) {
      this.pdfModal = true
      var params = {
        id: id
      }
      this.$ajax('post', 'ar/report/data', params)
        .then(res => {
          this.pdfData = res.data
          this.getPdf('民间小额信贷征信报告')
        })
    }

  },
  components: {
    creditServer
    //   loanApply,loanExamin,debtManagement,overdueManagement,badnessInfo
  }
}
</script>
