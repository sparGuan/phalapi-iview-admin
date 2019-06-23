<style lang="stylus" scoped>
.folkquerywrap {
  font-size: 14px;
}

.folkqueryitem {
  padding: 15px 20px;
  background: #fff;
  margin-bottom: 10px;
}

.folkqueryitemtitle {
  b {
    font-weight: 600;
    border-left: 4px solid #009cff;
    padding-left: 6px;
  }
}

.enterTitle {
  display: flex;
  justify-content: space-between;

  span {
    border-radius: 4px;
    padding: 1px 5px;
    padding-right: 72px;
  }
}

.folkqueryitembody {
  padding: 15px 0 0 40px;

  .itemFlex {
    display: flex;
  }

  .itemFlexLeft {
    width: 46%;
    margin-right: 10%;
  }

  .ivu-form .ivu-form-item .ivu-select {
    width: 80%;
  }

  .itemFlexRight {
    width: 35%;
  }
}

.singleForm {
  width: 48%;
}

.upfileimgwrap {
  text-align: center;
  padding: 56px 0 0;

  button {
    margin-left: 10px;
  }

  .imgdiv {
    width: 138px;
    margin: 11px auto 0;

    img {
      width: 100%;
    }
  }
}

.folkquerycombtn {
  background: #009cff;
}

.folkquerycombtndeep {
  padding: 6px 20px;
  font-size: 16px;
}
</style>

<template>
  <div class="folkquerywrap">
    <div class="folkqueryitem">
      <div class="folkqueryitemtitle">
        <b>贷款查询</b>
      </div>
      <div class="folkqueryitembody singleForm">
        <Form
          :model="loanInquiryForm"
          :rules="formRules"
          ref="loanInquiryForm"
          :label-width="115"
        >
          <FormItem label="查询方式">
            <RadioGroup v-model="loanInquiryForm.queryType">
              <Radio label="1">简易查询</Radio>
              <Radio label="2">精准查询</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem
            prop="simpleNumber"
            label="身份证号码"
            v-if="loanInquiryForm.queryType == '1'"
          >
            <Input
              v-model.trim="loanInquiryForm.simpleNumber"
              placeholder="请输入身份证号码后六位"
            ></Input>
          </FormItem>
          <FormItem prop="id_number" label="身份证号码" v-else>
            <Input
              v-model.trim="loanInquiryForm.id_number"
              placeholder="请输入完整身份证号码"
            ></Input>
          </FormItem>
          <FormItem prop="id_name" label="姓名/公司名称">
            <Input
              v-model.trim="loanInquiryForm.id_name"
              placeholder="请输入姓名/公司名称"
            ></Input>
          </FormItem>
          <FormItem label="查询原因">
            <Select v-model="loanInquiryForm.reason">
              <Option
                :value="item.value"
                v-for="(item, index) in reasonList"
                :key="index"
                >{{ item.value }}</Option
              >
            </Select>
          </FormItem>
          <FormItem>
            <Button @click="startSearchPersonal" type="primary"
              >提交查询</Button
            >
          </FormItem>
        </Form>
      </div>
    </div>

    <div class="folkqueryitem">
      <div class="folkqueryitemtitle">
        <b>赎楼查询</b>
      </div>
      <div class="folkqueryitembody">
        <Form
          :model="addPersonalForm"
          :rules="formRules"
          ref="addPersonalForma"
          :label-width="115"
        >
          <div class="itemFlex">
            <div class="itemFlexLeft">
              <FormItem label="权利人姓名">
                <Input
                  v-model.trim="tempForm.name"
                  placeholder="请输入权利人姓名"
                ></Input>
              </FormItem>
              <FormItem label="权利人身份证">
                <Input
                  v-model.trim="tempForm.name"
                  placeholder="请输入权利人身份证"
                ></Input>
              </FormItem>
              <FormItem label="产权编号">
                <Input
                  v-model.trim="tempForm.name"
                  placeholder="请输入产权编号"
                ></Input>
              </FormItem>
            </div>
            <div class="itemFlexRight">
              <FormItem label="产权书类型">
                <Select v-model="tempForm.name">
                  <Option :value="1" :key="1">房产证</Option>
                  <Option :value="2" :key="2">不动产证</Option>
                </Select>
              </FormItem>
              <FormItem label="查询方式">
                <Select v-model="tempForm.name">
                  <Option :value="1" :key="1">分户</Option>
                  <Option :value="2" :key="2">分栋</Option>
                </Select>
              </FormItem>
            </div>
          </div>
          <FormItem>
            <Button type="primary">提交查档</Button>
          </FormItem>
        </Form>
      </div>
    </div>
    <div class="folkqueryitem">
      <div class="folkqueryitemtitle enterTitle">
        <b>录入客户信息</b>
        <span @click="$goto({ name: 'customList' })" class="orange  pointer"
          >在库客户管理 <Icon type="ios-arrow-forward" size="18"
        /></span>
      </div>
      <div class="folkqueryitembody">
        <Form
          :model="addPersonalForm"
          :rules="formRules"
          ref="addPersonalForm"
          :label-width="115"
        >
          <div class="itemFlex">
            <div class="itemFlexLeft">
              <FormItem prop="name" label="姓名" class="formitemnoreddot">
                <Input
                  v-model.trim="addPersonalForm.name"
                  placeholder="请输入姓名"
                ></Input>
              </FormItem>
              <FormItem prop="id_number" label="身份证号码">
                <Input
                  v-model.trim="addPersonalForm.id_number"
                  placeholder="请输入身份证号码"
                ></Input>
              </FormItem>
              <FormItem prop="phone" label="手机号码" class="formitemnoreddot">
                <Input
                  v-model.trim="addPersonalForm.phone"
                  placeholder="请输入手机号码"
                ></Input>
              </FormItem>
              <FormItem label="负债情况">
                <Select v-model="addPersonalForm.basic_liabilities">
                  <Option :value="0" :key="0">一般</Option>
                  <Option :value="1" :key="1">高</Option>
                  <Option :value="2" :key="2">超高</Option>
                </Select>
              </FormItem>
            </div>
            <div class="itemFlexRight">
              <FormItem label="房产基本信息">
                <Select v-model="addPersonalForm.basic_house" width="100">
                  <Option :value="1" :key="1">有</Option>
                  <Option :value="0" :key="0">无</Option>
                </Select>
              </FormItem>
              <FormItem prop="basic_car" label="车辆基本信息">
                <Select v-model="addPersonalForm.basic_car">
                  <Option :value="1" :key="1">有</Option>
                  <Option :value="0" :key="0">无</Option>
                </Select>
              </FormItem>
              <FormItem label="信贷交易状态">
                <Select v-model="addPersonalForm.status_credit">
                  <Option :value="0" :key="0">发放贷款</Option>
                  <Option :value="1" :key="1">逾期中</Option>
                  <Option :value="2" :key="2">结单</Option>
                  <Option :value="3" :key="3">黑名单</Option>
                  <Option :value="4" :key="4">风险客户</Option>
                  <Option :value="5" :key="5">催收中</Option>
                  <Option :value="6" :key="6">提起诉讼</Option>
                  <Option :value="7" :key="7">查封</Option>
                </Select>
              </FormItem>
              <FormItem
                v-if="addPersonalForm.status_credit == 0"
                label="信贷交易类型"
              >
                <Select>
                  <Option :value="0" :key="0">信用贷款</Option>
                  <Option :value="1" :key="1">房产抵押贷款</Option>
                  <Option :value="2" :key="2">赎楼过桥</Option>
                  <Option :value="3" :key="3">车辆抵押贷款</Option>
                  <Option :value="4" :key="4">其他贷款方式</Option>
                </Select>
              </FormItem>
            </div>
          </div>
          <FormItem>
            <Button
              @click="preSubmitAddPersonal"
              type="primary"
              :loading="addPersonalForm.loading"
              >提交录入</Button
            >
          </FormItem>
          <!-- <div class="upfileimgwrap">
                客户照片<div style="display: inline-block">
                  <FileUpload
                    :filelist="[]"
                    :params="{}"
                    @fileUpSuccess="fileUpSuccess"
                    @fileUpError="fileUpError"
                    :pushFlag="1"
                    accept="image/*">
                    <Button type="primary" class="folkquerycombtn" slot="icon">添加照片</Button>
                  </FileUpload>
                </div>
                <div class="imgdiv">
                  <img v-if="addPersonalForm.photo" :src="imgPreviewUrl + addPersonalForm.photo" alt="">
                </div> -->
        </Form>
      </div>
    </div>

    <div class="folkqueryitem">
      <div class="folkqueryitemtitle">
        <b>房产评估</b>
      </div>
      <div class="folkqueryitembody">
        <Form
          :model="addPersonalForm"
          :rules="formRules"
          ref="addPersonalFormb"
          :label-width="115"
        >
          <div class="itemFlex">
            <div class="itemFlexLeft">
              <FormItem label="物业名称">
                <Input
                  v-model.trim="tempForm.name"
                  placeholder="请输入小区名称"
                ></Input>
              </FormItem>
              <FormItem label="栋数">
                <Input
                  v-model.trim="tempForm.name"
                  placeholder="请输入小区栋数"
                ></Input>
              </FormItem>
              <FormItem label="房号">
                <Input
                  v-model.trim="tempForm.name"
                  placeholder="请输入房号"
                ></Input>
              </FormItem>
              <FormItem label="登记价">
                <Input
                  v-model.trim="tempForm.name"
                  placeholder="请输入登记价（元）"
                ></Input>
              </FormItem>
              <FormItem label="建筑面积">
                <Input
                  v-model.trim="tempForm.name"
                  placeholder="请输入建筑面积（平方米）"
                ></Input>
              </FormItem>
            </div>
            <div class="itemFlexRight">
              <FormItem label="是否计税">
                <Select v-model="tempForm.name">
                  <Option :value="1" :key="1">是</Option>
                  <Option :value="2" :key="2">否</Option>
                </Select>
              </FormItem>
              <FormItem label="房屋类型">
                <Select v-model="tempForm.name">
                  <Option :value="1" :key="1">普通</Option>
                </Select>
              </FormItem>
              <FormItem label="权利人性质">
                <Select v-model="tempForm.name">
                  <Option :value="1" :key="1">个人</Option>
                </Select>
              </FormItem>
              <FormItem label="是否满两年">
                <Select v-model="tempForm.name">
                  <Option :value="1" :key="1">是</Option>
                  <Option :value="2" :key="2">否</Option>
                </Select>
              </FormItem>
              <FormItem label="评估目的">
                <Input
                  v-model.trim="tempForm.name"
                  placeholder="请输入评估目的"
                ></Input>
              </FormItem>
            </div>
          </div>
          <FormItem>
            <Button type="primary">提交评估</Button>
          </FormItem>
        </Form>
      </div>
    </div>
    <!-- 提交录入确认 -->
    <Modal
      v-model="showInfo"
      width="1000"
      :mask-closable="false"
      :styles="{ top: '20px' }"
    >
      <p slot="header" style="color:#666text-align:center">
        <span>提交录入确认</span>
      </p>
      <div class="changeinfo">
        <div class="changeinfoitem">
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
                <div class="iteminfo">{{ addPersonalForm.name }}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">身份证号码</div>
                <div class="iteminfo">{{ addPersonalForm.id_number }}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">手机号码</div>
                <div class="iteminfo">{{ addPersonalForm.phone }}</div>
              </div>
              <div class="leftitem item">
                <div class="itemname">录入时间</div>
                <div class="iteminfo">{{ date }}</div>
              </div>
            </div>
            <div class="rightitem">
              <div class="rightitem item">
                <div class="itemname" style="margin-bottom: 150px">
                  客户照片
                </div>
                <div class="itemShow" style="float: left">
                  <viewer
                    :options="{ navbar: false, title: false, toolbar: false }"
                  >
                    <div>
                      <img
                        v-if="addPersonalForm.photo"
                        :src="imgPreviewUrl + addPersonalForm.photo"
                        id="img"
                        style="width: 120px cursor: pointermargin-bottom: 10px"
                      />
                      <div>
                        <Button
                          @click="clickImg"
                          type="primary"
                          style="dispaly: block"
                          >点击看大图</Button
                        >
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
          <div class="itemright">
            <div class="rightitem">
              <div class="leftitem item">
                <div class="itemname">车辆基本信息</div>
                <div class="iteminfo">
                  {{ addPersonalForm.basic_car ? "有" : "无" }}
                </div>
              </div>
              <div class="leftitem item">
                <div class="itemname">房产基本信息</div>
                <div class="iteminfo">
                  {{ addPersonalForm.basic_house ? "有" : "无" }}
                </div>
              </div>
              <div class="leftitem item">
                <div class="itemname">负债情况</div>
                <div
                  class="iteminfo"
                  v-if="addPersonalForm.basic_liabilities === 0"
                >
                  一般
                </div>
                <div
                  class="iteminfo"
                  v-if="addPersonalForm.basic_liabilities === 1"
                >
                  高
                </div>
                <div
                  class="iteminfo"
                  v-if="addPersonalForm.basic_liabilities === 2"
                >
                  超高
                </div>
              </div>
              <div class="leftitem item">
                <div class="itemname">录入时间</div>
                <div class="iteminfo">{{ date }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="changeinfoitem">
          <div class="itemleft">
            <div class="lefttitle">
              <i class="fa fa-tasks"></i>
              <span class="lefttitlespan">借贷交易状况</span>
            </div>
          </div>
          <div class="itemright" v-if="addPersonalForm">
            <div class="rightitem">
              <div class="leftitem item">
                <div class="itemname">已发放贷款</div>
                <div class="iteminfo">
                  {{ addPersonalForm.status_credit == 0 ? "有" : "无" }}
                </div>
              </div>
              <div class="leftitem item">
                <div class="itemname">逾期中</div>
                <div class="iteminfo">
                  {{ addPersonalForm.status_credit == 1 ? "有" : "无" }}
                </div>
              </div>
              <div class="leftitem item">
                <div class="itemname">已结算</div>
                <div class="iteminfo">
                  {{ addPersonalForm.status_credit == 2 ? "有" : "无" }}
                </div>
              </div>
              <div class="leftitem item">
                <div class="itemname">黑名单</div>
                <div class="iteminfo">
                  {{ addPersonalForm.status_credit == 3 ? "有" : "无" }}
                </div>
              </div>
            </div>
            <div class="rightitem">
              <div class="leftitem item">
                <div class="itemname">高风险客户</div>
                <div class="iteminfo">
                  {{ addPersonalForm.status_credit == 4 ? "有" : "无" }}
                </div>
              </div>
              <div class="leftitem item">
                <div class="itemname">验收中</div>
                <div class="iteminfo">
                  {{ addPersonalForm.status_credit == 5 ? "有" : "无" }}
                </div>
              </div>
              <div class="leftitem item">
                <div class="itemname">诉讼</div>
                <div class="iteminfo">
                  {{ addPersonalForm.status_credit == 6 ? "有" : "无" }}
                </div>
              </div>
              <div class="leftitem item">
                <div class="itemname">查封</div>
                <div class="iteminfo">
                  {{ addPersonalForm.status_credit == 7 ? "有" : "无" }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <Button type="primary" shape="circle" @click="submitAddPersonal"
          >确认提交</Button
        >
      </div>
    </Modal>

    <!-- 查询结果 -->
    <Modal
      v-model="searchResultModal"
      :mask-closable="false"
      :footer-hide="true"
      :width="900"
      class-name="commonmodalwrap"
    >
      <div class="commonmodalhead" slot="header">
        <p>银通融风控系统信贷查询结果</p>
      </div>
      <div class="commonmodalcenter">
        <div class="searchresultitem">
          <div class="searchresultitemleft">
            <span class="tit">个人信息</span>
          </div>
          <div class="searchresultitemright">
            <div class="left">
              <img
                v-if="searchResultObj.photo"
                :src="imgPreviewUrl + searchResultObj.photo"
                alt=""
              />
              <img
                v-else
                :src="require('../../../assets/icon/headimg_icon1.png')"
                alt=""
              />
            </div>
            <div class="right">
              <div class="top">
                <span>{{ searchResultObj.name }}</span
                ><span>({{ searchResultObj.id_number | afterSixNum }})</span>
              </div>
              <div class="bot">
                <span class="txt">查询时间：{{ searchResultObj.time }}</span
                ><span class="line">|</span
                ><span class="txt"
                  >查询人：{{ searchResultObj.selectMan }} ({{
                    searchResultObj.company
                  }})</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="searchresultitem">
          <div class="searchresultitemleft">
            <span class="tit">信贷风险指数</span>
          </div>
          <div class="searchresultitemright">
            <div class="searchresultitemrightitem warning">
              信贷评分<span>75</span>
            </div>
            <div class="searchresultitemrightitem success">
              信贷风险<span>低</span>
            </div>
          </div>
        </div>
        <div class="searchresultitem">
          <div class="searchresultitemleft">
            <span class="tit">借贷信息</span>
          </div>
          <div class="searchresultitemright">
            <div class="searchresultitemrightitem">
              查询记录<span
                style="cursor:pointer"
                @click="searchForm.search = true"
                >{{ searchResultObj.queryCount }}</span
              >
            </div>
            <div class="searchresultitemrightitem">
              放款记录<span>{{ searchResultObj.countLoan }}</span>
            </div>
            <div class="searchresultitemrightitem">
              查档记录<span>{{ "0" }}</span>
            </div>
            <hr class="searchresultitemrighthr" />
            <div class="searchresultitemrightitem">
              监控记录<span>{{ "0" }}</span>
            </div>
            <div class="searchresultitemrightitem">
              反馈跟进<span
                style="cursor:pointer"
                @click="openFeedback(searchResultObj.id)"
                >{{ searchResultObj.countFeedback }}</span
              >
            </div>
            <div class="searchresultitemrightitem">
              智能问单<span>{{ "0" }}</span>
            </div>
            <div class="searchresultitemrightitem">
              其他记录<span>{{ "0" }}</span>
            </div>
          </div>
        </div>

        <div class="searchresultitem">
          <div class="searchresultitemleft">
            <span class="tit">风险信息</span>
          </div>
          <div class="searchresultitemright">
            <div class="searchresultitemrightitem">
              逾期记录<span>{{ searchResultObj.countOverdue }}</span>
            </div>
            <div class="searchresultitemrightitem">
              催收记录<span>{{ searchResultObj.countBlacklist }}</span>
            </div>
            <div class="searchresultitemrightitem">
              风险记录<span>{{ searchResultObj.countRisk }}</span>
            </div>
            <div class="searchresultitemrightitem">
              诉讼记录<span>{{ searchResultObj.countCollection }}</span>
            </div>
            <hr class="searchresultitemrighthr" />
            <div class="searchresultitemrightitem">
              查封记录<span>{{ searchResultObj.countLitigation }}</span>
            </div>
            <div class="searchresultitemrightitem">
              黑名单<span>{{ searchResultObj.countSeal }}</span>
            </div>
            <div class="searchresultitemrightitem">
              诉讼信息<span>{{ "0" }}</span>
            </div>
            <div class="searchresultitemrightitem">
              其他信息<span>{{ "0" }}</span>
            </div>
          </div>
        </div>
      </div>
      <Spin fix v-if="loanInquiryForm.loading"></Spin>
      <div class="commonmodalfoot">
        <Button
          @click="searchResultModal = false"
          type="primary"
          size="large"
          style="width: 150px margin-bottom: 15px"
          >确 认</Button
        >
      </div>
    </Modal>

    <!-- 查询记录 -->
    <Modal
      v-model="searchForm.search"
      :mask-closable="false"
      :footer-hide="true"
      :width="1200"
      class-name="commonmodalwrap"
    >
      <div class="commonmodalhead" slot="header">
        <p>银通融风控系统信贷查询记录</p>
      </div>
      <div class="commonmodalcenter searchlistwrap">
        <div class="searchlisttable">
          <div class="searchlistthead">
            <div>
              <div class="middle">查询时间</div>
              <div class="short">被查询人</div>
              <div class="long">被查询人身份信息</div>
              <div class="short">查询人</div>
              <div class="longer">查询单位</div>
              <div class="short">查询目的</div>
              <div class="short">所在城市</div>
              <div class="edit">操作</div>
            </div>
          </div>
          <div class="searchlisttbody">
            <div class="searchlisttbodyitem">
              <div class="middle">2018-8-31 12:37:01</div>
              <div class="short">王伟</div>
              <div class="long">620102198004277441</div>
              <div class="short">崔权</div>
              <div class="longer">盈通财务管理公司</div>
              <div class="short">贷款查询</div>
              <div class="short">深圳</div>
              <div class="edit">
                <Button type="primary" size="small">联系查询人</Button>
              </div>
            </div>
            <div class="searchlisttbodyitem">
              <div class="middle">2018-8-31 09:37:02</div>
              <div class="short">王伟</div>
              <div class="long">620102198004277441</div>
              <div class="short">王端</div>
              <div class="longer">易王明投资顾问公司</div>
              <div class="short">贷款查询</div>
              <div class="short">深圳</div>
              <div class="edit">
                <Button type="primary" size="small">联系查询人</Button>
              </div>
            </div>
            <div class="searchlisttbodyitem">
              <div class="middle">2018-8-30 12:04:05</div>
              <div class="short">王伟</div>
              <div class="long">620102198004277441</div>
              <div class="short">李浩明</div>
              <div class="longer">高明财务信息公司</div>
              <div class="short">贷款查询</div>
              <div class="short">深圳</div>
              <div class="edit">
                <Button type="primary" size="small">联系查询人</Button>
              </div>
            </div>
            <div class="searchlisttbodyitem">
              <div class="middle">2018-8-30 11:37:08</div>
              <div class="short">王伟</div>
              <div class="long">620102198004277441</div>
              <div class="short">赵文理</div>
              <div class="longer">时间财务顾问管理公司</div>
              <div class="short">贷款查询</div>
              <div class="short">深圳</div>
              <div class="edit">
                <Button type="primary" size="small">联系查询人</Button>
              </div>
            </div>
            <div class="searchlisttbodyitem">
              <div class="middle">2018-8-30 09:38:06</div>
              <div class="short">王伟</div>
              <div class="long">620102198004277441</div>
              <div class="short">张师瑞</div>
              <div class="longer">王道投资机构</div>
              <div class="short">贷款查询</div>
              <div class="short">深圳</div>
              <div class="edit">
                <Button type="primary" size="small">联系查询人</Button>
              </div>
            </div>
            <div class="searchlisttbodyitem">
              <div class="middle">2018-8-30 10:35:00</div>
              <div class="short">王伟</div>
              <div class="long">620102198004277441</div>
              <div class="short">王往力</div>
              <div class="longer">旺达财务管理公司</div>
              <div class="short">贷款查询</div>
              <div class="short">深圳</div>
              <div class="edit">
                <Button type="primary" size="small">联系查询人</Button>
              </div>
            </div>
            <div class="searchlisttbodyitem">
              <div class="middle">2018-8-29 17:27:09</div>
              <div class="short">王伟</div>
              <div class="long">620102198004277441</div>
              <div class="short">钱名</div>
              <div class="longer">致富投资管理</div>
              <div class="short">贷款查询</div>
              <div class="short">深圳</div>
              <div class="edit">
                <Button type="primary" size="small">联系查询人</Button>
              </div>
            </div>
            <div class="searchlisttbodyitem">
              <div class="middle">2018-8-29 16:37:05</div>
              <div class="short">王伟</div>
              <div class="long">620102198004277441</div>
              <div class="short">李名瑞</div>
              <div class="longer">英业达投资管理公司</div>
              <div class="short">贷款查询</div>
              <div class="short">深圳</div>
              <div class="edit">
                <Button type="primary" size="small">联系查询人</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="commonpagenav">
          <Page :total="100" />
        </div>
      </div>
      <Spin fix v-if="loanInquiryForm.loading"></Spin>
      <div class="commonmodalfoot">
        <Button
          @click="searchList = false"
          type="primary"
          size="large"
          style="width: 150px margin-bottom: 15px"
          >确 认</Button
        >
      </div>
    </Modal>

    <!-- 反馈列表 -->
    <Modal
      v-model="feedbackForm.feedback"
      :mask-closable="false"
      :footer-hide="true"
      :width="850"
      class-name="commonmodalwrap"
    >
      <div class="commonmodalhead" slot="header">
        <p>反馈列表</p>
      </div>
      <div class="commonmodalcenter searchlistwrap">
        <div class="searchlisttable">
          <div class="searchlistthead">
            <div>
              <div class="long">添加时间</div>
              <div class="longg">反馈内容</div>
              <div class="edit">操作</div>
            </div>
          </div>
          <div class="searchlisttbody">
            <div
              class="searchlisttbodyitem"
              v-for="(feedback, index) in feedbackForm.feedbackList.data"
              :key="index"
            >
              <div class="long">{{ feedback.updated_at }}</div>
              <div class="longg">{{ feedback.content }}</div>
              <div class="edit">
                <Button
                  @click="deleteFeedback(feedback.id)"
                  type="primary"
                  size="small"
                  >删除</Button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="commonpagenav">
          <Page
            :current.sync="feedbackForm.feedbackList.current_page"
            :page-size="feedbackForm.feedbackList.per_page"
            :total="feedbackForm.feedbackList.total"
            @on-change="changeFeedback"
          >
          </Page>
        </div>
      </div>
      <Spin fix v-if="feedbackForm.loading"></Spin>
      <div class="commonmodalfoot">
        <Button
          @click="feedbackForm.feedback = false"
          shape="circle"
          type="primary"
          size="large"
          style="width: 150px margin-bottom: 15px"
          >确 认</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script>
import FileUpload from '@/components/upload'
import {
  checkPhone
} from '@/common/lib/check'
import {
  toDate
} from '@/common/lib/date'

export default {
  name: 'FolkQuery',
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
    return {
      imgPreviewUrl: $conf.baseUrl + 'oss/preview?is_img=true&hash=',
      addPersonalForm: {
        name: '',
        id_number: '',
        phone: '',
        photo: '',
        basic_car: 0,
        basic_house: 0,
        basic_liabilities: 0,
        status_credit: '',
        loading: false
      },
      tempForm: {
        name: ''
      },
      loanInquiryForm: {
        queryType: '1',
        id_name: '',
        reason: '',
        id_number: '',
        simpleNumber: '',
        loading: false
      },
      reasonList: [{
        value: '信贷咨询',
        label: '1'
      }, {
        value: '贷后管理',
        label: '2'
      }, {
        value: '赎楼咨询',
        label: '3'
      }, {
        value: '房贷咨询',
        label: '4'
      }],
      formRules: {
        name: [{
          required: true,
          message: '姓名不能为空',
          trigger: 'blur'
        }],
        phone: [{
          validator: validatePhone,
          trigger: 'blur'
        }],
        id_name: [{
          required: true,
          message: '真实姓名不能为空',
          trigger: 'blur'
        }],
        id_number: [{
          validator: validateIdNo,
          trigger: 'blur'
        }]
      },
      searchResultModal: false,
      searchResultObj: {},
      searchForm: {
        search: false,
        customer_id: '',
        perPage: 10,
        page: 1,
        searchList: []
      },
      feedbackForm: {
        feedback: false,
        customer_id: '',
        perPage: 10,
        page: 1,
        feedbackList: []
      },
      showInfo: false,
      date: ''
    }
  },
  components: {
    FileUpload
  },
  beforeMount () {
    if (this.$route.query.id_name && this.$route.query.id_number && this.$route.query.id_number.length >= 9) {
      let str = this.$route.query.id_number
      this.loanInquiryForm = {
        id_name: this.$route.query.id_name,
        id_number: str.substr(0, 3) + '*'.repeat(str.length - 6) + str.substr(str.length - 3, 3),
        loading: false
      }
      // this.loanInquiryFormOrigin.id_number = this.$route.query.id_number
    }

    this.resetAddPersonal()
  },
  methods: {
    resetAddPersonal () {
      this.addPersonalForm = {
        name: '',
        id_number: '',
        phone: '',
        photo: '',
        basic_car: 0,
        basic_house: 0,
        basic_liabilities: 0,
        status_credit: 0,
        loading: false
      }
    },
    IdFocusFn () {
      // this.loanInquiryForm.id_number = this.loanInquiryFormOrigin.id_number
    },
    IdBlurFn () {
      let str = this.loanInquiryForm.id_number
      if (str.length >= 9) {
        this.loanInquiryForm.id_number = str.substr(0, 3) + '*'.repeat(str.length - 6) + str.substr(str.length - 3, 3)
      }
    },
    IdChangeFn () {
      // this.loanInquiryFormOrigin.id_number = this.loanInquiryForm.id_number
    },
    fileUpSuccess (response, file, fileList) {
      this.addPersonalForm.photo = response.hash
      // console.log(response, file, fileList)
    },
    fileUpError (error, file, fileList) {
      this.$Message.error('文件上传失败！')
      // console.log(error, file, fileList)
    },
    bussiStatus (index) {
      if (this.addPersonalForm.status_credit.indexOf(index) != -1) {
        return true
      } else {
        return false
      }
    },
    preSubmitAddPersonal () {
      this.$refs.addPersonalForm.validate(valid => {
        if (valid) {
          if (!this.addPersonalForm.photo) {
            this.$Message.error('请上传客户照片！')
            return
          }
          this.date = toDate()
          this.showInfo = true
        }
      })
    },
    submitAddPersonal () {
      this.$refs.addPersonalForm.validate(valid => {
        if (valid) {
          if (!this.addPersonalForm.photo) {
            this.$Message.error('请上传客户照片！')
            return
          }
          this.$ajax('post', 'customer/basic/info/add', this.addPersonalForm, 'addPersonalForm.loading').then(
            data => {
              this.resetAddPersonal()
              this.$Message.success('录入信息成功！')
              this.showInfo = false
            })
        }
      })
    },
    // 411325199609258223
    startSearchPersonal () {
      this.$refs.loanInquiryForm.validate(valid => {
        if (valid) {
          this.searchResultModal = true
          var data = this.loanInquiryForm
          if (data.queryType == '1') {
            data.id_number = data.simpleNumber
          }
          this.$ajax('get', 'customer/basic/info/search', {
            id_name: data.id_name,
            id_number: data.id_number,
            queryType: data.queryType,
            reason: data.reason
          }, 'loanInquiryForm.loading').then(data => {
            this.searchResultObj = data.data
          }).catch(err => {
            this.searchResultModal = false
          })
        }
      })
    },
    clickImg () {
      img.click()
    },
    openFeedback (id) {
      this.feedbackForm.feedback = true
      this.feedbackForm.customer_id = id
      this.feedbackForm.loading = true
      this.$ajax('get', 'customer/customer/feedback', {
        customer_id: this.feedbackForm.customer_id,
        perPage: this.feedbackForm.perPage,
        page: this.feedbackForm.page
      }).then(data => {
        this.feedbackForm.loading = false
        this.feedbackForm.feedbackList = data.data
      })
    },
    changeFeedback (id) {
      this.feedbackForm.page = id
      this.openFeedback(id)
    },
    deleteFeedback (id) {
      this.$ajax('post', 'customer/customer/delete/' + id).then(data => {
        this.openFeedback(this.feedbackForm.customer_id)
      })
    }
  },
  filters: {
    afterSixNum (v) {
      return v ? (v.length > 6 ? v.substr(v.length - 6, 6) : '') : ''
    }
  }
}

</script>
