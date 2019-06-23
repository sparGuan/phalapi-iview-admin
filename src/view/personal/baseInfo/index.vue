<style lang="stylus" scoped>
.border {
  border-bottom: 1px solid #dcdee2;
}

.avatarBox {
  img {
    width: 200px;
    height: 140px;
  }
}

.baseinfowrap {
  font-size: 14px;

  .baseinfotopwrap {
    margin-bottom: 15px;

    .baseinfotop {
      padding: 20px;
      display: flex;
      align-items: center;

      .baseTxt {
        text-align: right;
        width: 80%;
        margin-left: 6%;
        margin-right: 3%;

        p {
          span {
            padding: 0 7px 2px 10px;

            .registerTime, .byQuery {
              margin-top: 6px;
            }
          }

          .line {
            margin: 0 8px;
            font-size: 18px;
          }

          .company {
            width: 30%;
            font-weight: 500;
          }

          .register, .account {
            display: flex;
            justify-content: space-between;
          }

          .register {
            padding-top: 12px;
            width: 80%;
            margin-left: 20%;
          }

          .account {
            padding-top: 16px;
            width: 100%;
          }
        }
      }

      .baseinfotopl {
        text-align: center;

        .baseinfotoplimg {
          margin-bottom: 15px;

          img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
          }
        }
      }

      .baseinfotopr {
        flex: auto;
        padding-left: 20px;
        display: flex;
        justify-content: space-between;

        .companyname {
          font-size: 16px;

          small {
            font-size: 12px;
            margin-left: 20px;
          }
        }

        .detailinfo {
          font-size: 20px;
          margin: 9px 0 12px;

          .line {
            margin: 0 17px;
          }
        }

        .descript {
          & > i {
            font-size: 18px;
            margin-left: 15px;
            vertical-align: middle;
            cursor: pointer;

            &:hover {
              color: $basecolor;
            }
          }
        }

        .baseinfotoprr {
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .baseinfobot {
      padding: 15px 0;

      p {
        font-size: 20px;

        .line {
          font-size: 24px;
          margin: 0 20px;
        }

        .item {
          margin-right: 40px;

          i {
            font-size: 16px;
            font-style: normal;
            margin-left: 20px;
            color: #f00;
          }
        }
      }
    }
  }

  .baseinfobotwrap {
    .baseinfobotpanel {
      .baseinfobotpanelhead {
        display: flex;
        height: 35px;
        line-height: 35px;

        li {
          flex: auto;
          text-align: center;
          background: #a3dbfd;
          border-right: 1px solid #fff;
          padding: 1px 0;

          &:hover {
            color: #fff;
          }

          &.active {
            color: #fff;
            background: #009dff;
          }

          &:last-child {
            border-right: none;
          }
        }
      }

      .baseinfobotpanelbot {
        margin-top: 11px;

        .baseinfobotpanelbottable {
          // border: 1px solid #C5C5C5
          border-left: none;

          .baseinfobotpanelbothead {
            // background: #E79012
            height: 30px;
          }

          .baseinfobotpanelbothead, .baseinfobotpanelbotbody {
            & > div {
              display: flex;
            }

            & > div > div {
              padding: 4px 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-left: 1px solid #C5C5C5;
            }

            .baseinfobotpanelbotbodyitem > div {
              border-bottom: 1px solid #C5C5C5;
            }

            .middle {
              width: 160px;
            }

            .shorter {
              width: 90px;
            }

            .short {
              width: 110px;
            }

            .long {
              width: 170px;
              text-align: center;
            }

            .longer {
              width: 250px;
            }

            .edit {
              flex: auto;

              .ivu-btn {
                padding: 2px 20px;
                margin: 0 10px;
              }
            }
          }
        }
      }
    }
  }
}

.changeperwrap {
  margin-bottom: 15px;
  border-bottom: 1px solid #e6e6e6;

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  .changeperleft {
    b {
      font-weight: 600;
      border-left: 4px solid #009cff;
      padding-left: 6px;
    }
  }

  .changeperRight {
    padding: 20px 0 0 30px;

    .ivu-input-wrapper {
      width: 60%;

      .btns {
        margin-left: 80%;
      }
    }

    .submitBtn {
      margin-left: 10%;
    }
  }
}

.blacklistboxbody {
  color: #000;

  .blacklistboxbodyitem {
    padding: 10px 25px;
    margin: 10px 0;
    background: #fff;

    .infoBox {
      display: flex;
      justify-content: space-between;

      .infoLeft {
        display: flex;
        align-items: center;

        .imgBox {
          position: relative;
          height: 100px;
          margin-right: 30px;

          img {
            -webkit-filter: blur(2px);
            -moz-filter: blur(2px);
            -o-filter: blur(2px);
            -ms-filter: blur(2px);
            filter: blur(2px);
            width: 130px;
            height: 100px;
          }

          .name {
            width: 100%;
            text-align: center;
            position: absolute;
            background: rgba(0, 156, 255, 0.7);
            bottom: 0;
            height: 20px;
            line-height: 20px;
          }
        }

        .issueDetail {
          margin: 0 30px;

          li {
            padding-top: 7px;

            .clueTxt {
              margin-left: 15px;
            }
          }
        }
      }

      .infoBtns {
        padding-top: 10px;

        li {
          padding: 3px 8px;
          border-radius: 4px;
        }

        .moreBtn {
          margin-bottom: 25px;
        }
      }
    }
  }

  .addblacklistformwrap {
    padding-top: 40px;
    background: #fff !important;

    .addblacklistformhead {
      .tit {
        margin-bottom: 50px;
        text-align: center;

        span {
          background: #666;
          color: #fff;
          font-size: 16px;
          padding: 6px 10px;
          border-radius: 100px;
          display: inline-block;
        }
      }

      .txt {
        margin-bottom: 57px;
      }
    }
  }
}

.commonmodalcenter {
  padding-left: 10px;
}

.recharge {
  display: block;
  width: 300px;
  text-align: left;

  .showracharge {
    display: inline-block;
    width: 146px;
    vertical-align: middle;
    font-size: 13px;
  }
  .commonmodalwrap {
    /deep/.ivu-modal-body {
      max-height 360px;
      overflow-y: auto;
    }
  }
}
</style>

<template>
  <div class="baseinfowrap">
    <div class="baseinfotopwrap white_bg">
      <div class="baseinfotop">
        <div class="baseTxt">
          <p>
            <span class="company border font_16 ">{{
              userInfo.company_name || "贵公司名"
            }}</span>
          </p>
          <p>
            <span class="register border">
              <b class="byQuery">已查询人数：131</b>
              <b
                >{{ userInfo.name || "用户名" }}<i class="line">|</i
                >{{ userInfo.position_name || "职位" }}<i class="line">|</i
                >{{ userInfo.phone || "手机号" }}<i class="line">|</i
                >{{ userInfo.confirm_status === '1' ? '已认证' : "未认证" }}</b
              >
            </span>
          </p>
          <p>
            <span class="account border">
              <b class="registerTime"
                >上次登录：{{ userInfo.last_login_at || "未登录" }}</b
              >
              <div class="recharge">
                <div class="showracharge">
                  <i class="primary">剩余金额：</i>
                  {{ userInfo.amount || 0 }}&nbsp;<small>元</small>
                </div>

                <div class="showracharge">
                  <router-link :to="{ name: 'payOrder' }"
                    ><i class="primary">充值</i></router-link
                  >
                </div>
              </div>
            </span>
          </p>
        </div>
        <div class="baseinfotopl">
          <div class="baseinfotoplimg pointer" @click="editAvatar = true">
            <img
              v-if="addUserInfoForm.business_license_hash"
              :src="imgPreviewUrl + addUserInfoForm.business_license_hash"
              alt=""
            />
            <img v-else :src="require('../../../assets/img/me.jpg')" />
          </div>
          <span class="primary pointer" @click="startEditInfo">修改资料</span>
        </div>
      </div>
    </div>
    <div class="baseinfobotwrap">
      <div class="baseinfobotpanel">
        <ul class="baseinfobotpanelhead pointer">
          <li
            @click="curBotNav = 'query'"
            :class="{ active: curBotNav == 'query' }"
          >
            我的查询
          </li>
          <li
            @click="curBotNav = 'contract'"
            :class="{ active: curBotNav == 'contract' }"
          >
            我的合同
          </li>
          <li @click="curBotNav = 'qu'" :class="{ active: curBotNav == 'qu' }">
            我的发布
          </li>
        </ul>
        <div v-if="curBotNav == 'query'" class="baseinfobotpanelbot">
          <Table border :columns="columns1" :data="data1"></Table>
        </div>
        <div v-if="curBotNav == 'contract'" class="baseinfobotpanelbot">
          <Table border :columns="columns2" :data="data2"></Table>
        </div>
        <div
          v-if="curBotNav == 'qu'"
          class="blacklistboxbody baseinfobotpanelbot"
        >
          <div
            class="blacklistboxbodyitem"
            v-for="(item, index) in issueList"
            :key="index"
          >
            <div class="infoBox">
              <div class="infoLeft">
                <div class="imgBox">
                  <img :src="item.img" alt="暂无图片" />
                  <p class="name white font_12">{{ item.name }}</p>
                </div>
                <ul class="issueDetail font_14">
                  <li>对象：{{ item.object }}</li>
                  <li>所在地区：{{ item.city }}</li>
                  <li>身份证号码：{{ item.idNo }}</li>
                </ul>
                <ul class="issueDetail font_14">
                  <li>
                    发布人：{{ item.issuer }}
                    <Poptip content="15879084444" class="pointer">
                      <Icon type="ios-call" size="24" class="primary" />
                    </Poptip>
                  </li>
                  <li>发布时间：{{ item.issueDate }}</li>
                  <li>
                    第一次录入时间：{{ item.firstDate }}
                    <span class="clueTxt primary pointer">提供线索</span>
                  </li>
                </ul>
              </div>
              <ul class="infoBtns font_12 pointer">
                <li class="moreBtn orange_bg white">查看更多</li>
                <li class="addBtn primary_bg white">添加细节</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer">
      <p>深圳是银通融投资管理公司 版权所有 粤ICP备17007785号-1</p>
      <p>Copyright@2017-2018 ytr98.com ALL Rights Reserved</p>
    </div> -->

    <!-- 修改头像 -->
    <Modal
      v-model="editAvatar"
      :mask-closable="false"
      :footer-hide="true"
      :width="400"
      class-name="commonmodalwrap"
    >
      <div class="commonmodalhead" slot="header">
        <p><Icon type="ios-flash" size="22" />修改头像</p>
      </div>
      <div class="commonmodalcenter">
        <Form
          :model="addUserInfoForm"
          :rules="formRules"
          ref="addUserInfoForm1"
          :label-width="0"
        >
          <FormItem style="width: 90px; margin:auto; margin-bottom: 20px">
            <div style="display: inline-block;">
              <FileUpload
                :filelist="[]"
                :params="{}"
                @fileUpSuccess="fileUpSuccess"
                @fileUpError="fileUpError"
                :pushFlag="1"
                accept="image/*"
              >
                <Button type="primary" slot="icon">上传头像</Button>
              </FileUpload>
            </div>
          </FormItem>
          <FormItem
            style="width: 200px;height: 140px; margin:auto;"
            class="avatarBox"
          >
            <img
              v-if="addUserInfoForm.business_license_hash"
              :src="imgPreviewUrl + addUserInfoForm.business_license_hash"
              alt=""
            />
            <img v-else :src="require('../../../assets/img/me.jpg')" />
          </FormItem>
          <div style="margin-top: 10px; text-align: center;">
            <Button
              @click="submitAvatar"
              type="primary"
              class="folkqucombtndeep"
              shape="circle"
              style="width: 200px;"
              >提交修改</Button
            >
          </div>
        </Form>
      </div>
      <Spin fix v-if="changePersonalInfoLoading"></Spin>
      <div class="commonmodalfoot"></div>
    </Modal>

    <!-- 修改资料 -->
    <Modal
      v-model="changePersonalInfoModal"
      :mask-closable="false"
      :footer-hide="true"
      :width="500"
      class-name="commonmodalwrap"
    >
      <div class="commonmodalhead" slot="header">
        <p><Icon type="ios-flash" size="22" />修改个人资料</p>
      </div>
      <div class="commonmodalcenter">
        <div class="changeperwrap addinfowrap">
          <div class="changeperleft">
            <!-- <Icon type="md-create" size="16"/> -->
            <b class="itemLabel">补全信息</b>
          </div>
          <div class="changeperRight">
            <Form
              :model="addUserInfoForm"
              :rules="formRules"
              ref="addUserInfoForm1"
              :label-width="100"
            >
              <FormItem label="机构名称" class="formitemnoreddot">
                <Input
                  v-model.trim="addUserInfoForm.companyName"
                  placeholder="请输入机构名称"
                ></Input>
              </FormItem>
              <FormItem label="机构负责人">
                <Input
                  v-model.trim="addUserInfoForm.companyLeader"
                  placeholder="请输入机构负责人"
                ></Input>
              </FormItem>
              <FormItem label="负责人手机">
                <Input
                  v-model.trim="addUserInfoForm.companyPhone"
                  placeholder="请输入负责人手机"
                ></Input>
              </FormItem>
              <!-- <FormItem>
                <div class="demo-upload-list">
                  <template v-if="uploadList.status === 'finished'">
                    <img :src="uploadList.url">
                    <div class="demo-upload-list-cover">
                      <Icon type="ios-eye-outline" @click.native="handleView(uploadList.name)"></Icon>
                      <Icon type="ios-trash-outline" @click.native="handleRemove(uploadList)"></Icon>
                    </div>
                  </template>
                  <template v-else>
                    <Progress v-if="uploadList.showProgress" :percent="uploadList.percentage" hide-info></Progress>
                  </template>
                </div>
                <Upload ref="upload" :show-upload-list="false" :default-file-list="defaultList" :on-success="handleSuccess"
                  :format="['jpg','jpeg','png']" :max-size="2048" :on-format-error="handleFormatError"
                  :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" action="//jsonplaceholder.typicode.com/posts/"
                  style="display: inline-block;width:180px;">
                  <div style="width: 180px;height:50px;line-height: 50px;">
                    <Icon type="ios-camera" size="20"></Icon>
                  </div>
                </Upload>
              </FormItem>
              <FormItem>
                <img v-if="addUserInfoForm.business_license_hash" :src="imgPreviewUrl + addUserInfoForm.business_license_hash"
                  alt="" width="123px">
              </FormItem> -->
              <FormItem>
                <Button @click="submitInfo1" type="primary" class="submitBtn"
                  >提交修改</Button
                >
              </FormItem>
            </Form>
          </div>
        </div>
        <div class="changeperwrap bindinfowrap">
          <div class="changeperleft">
            <!-- <Icon type="md-create" size="16"/> -->
            <b>绑定信息</b>
          </div>
          <div class="changeperRight">
            <Form
              :model="addUserInfoForm"
              :rules="formRules"
              ref="addUserInfoForm2"
              :label-width="100"
            >
              <FormItem label="绑定手机">
                <Input
                  v-model.trim="addUserInfoForm.phone"
                  disabled
                  placeholder="请添加手机"
                ></Input>
              </FormItem>
              <FormItem>
                <Button
                  @click="phoneAuthModal = true"
                  v-if="addUserInfoForm.phone"
                  type="primary"
                  class="submitBtn"
                  >更换手机</Button
                >
                <Button
                  @click="phoneAuthModal = true"
                  v-else
                  type="primary"
                  class="submitBtn"
                  >绑定手机</Button
                >
              </FormItem>
            </Form>
          </div>
        </div>
        <div class="changeperwrap changepwdwrap">
          <div class="changeperleft">
            <!-- <Icon type="md-create" size="16"/> -->
            <b>修改密码</b>
          </div>
          <div class="changeperRight">
            <Form
              :model="addUserInfoForm"
              :rules="formRules"
              ref="addUserInfoForm3"
              :label-width="100"
            >
              <FormItem
                prop="origin_password"
                label="原密码"
                class="formitemnoreddot"
              >
                <Input
                  v-model.trim="addUserInfoForm.origin_password"
                  type="password"
                  placeholder="请输入原密码"
                ></Input>
              </FormItem>
              <FormItem prop="password" label="新密码">
                <Input
                  v-model.trim="addUserInfoForm.password"
                  type="password"
                  placeholder="请输入新密码"
                ></Input>
              </FormItem>
              <FormItem prop="password_confirmation" label="确认新密码">
                <Input
                  v-model.trim="addUserInfoForm.password_confirmation"
                  type="password"
                  placeholder="请确认新密码"
                ></Input>
              </FormItem>
              <FormItem>
                <Button @click="submitInfo3" type="primary">提交修改</Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
      <Spin fix v-if="changePersonalInfoLoading"></Spin>
      <div class="commonmodalfoot"></div>
    </Modal>
    <Modal title="View Image" v-model="visible">
      <img
        :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'"
        v-if="visible"
        style="width: 100%"
      />
    </Modal>
    <Modal
      v-model="phoneAuthModal"
      :mask-closable="false"
      :footer-hide="true"
      :width="400"
      class-name="commonmodalwrap"
    >
      <div class="commonmodalhead" slot="header">
        <p>手机验证</p>
      </div>
      <div class="commonmodalcenter">
        <!-- 忘记密码 -->
        <div class="lostpasswordwrap">
          <Form
            :model="editUserInfoForm"
            :rules="formRules"
            ref="editUserInfoForm"
            :label-width="90"
          >
            <FormItem prop="phone" label="手机号码：">
              <Input
                v-model.trim="editUserInfoForm.phone"
                placeholder="请输入手机号"
              ></Input>
            </FormItem>
            <FormItem label="验证码：">
              <Row>
                <Col span="14">
                  <FormItem prop="code">
                    <Input
                      v-model.trim="editUserInfoForm.code"
                      placeholder="请输入手机验证码"
                    ></Input>
                  </FormItem>
                </Col>
                <Col span="9" offset="1" style="text-align: right;">
                  <GetVerCode
                    @getCodeFn="getCodeFn"
                    type="changePhone"
                    ref="getCode"
                  ></GetVerCode>
                </Col>
              </Row>
            </FormItem>
          </Form>
        </div>
      </div>
      <div class="commonmodalfoot">
        <Button
          @click="submitChangePhone"
          type="primary"
          size="large"
          style="width: 50%; margin-bottom: 15px;"
          >确认修改</Button
        >
      </div>
    </Modal>
    <Modal v-model="contactSearchPerson" :mask-closable="false" :width="200">
      <p>联系人电话:</p>
    </Modal>
  </div>
</template>

<script>
import FileUpload from '@/components/upload'
import GetVerCode from '@/components/getVerCode'
import { mapActions } from 'vuex'
import {
  checkPhone
} from '@/common/lib/check'

export default {
  name: 'BaseInfo',
  data () {
    const validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'))
      } else if (checkPhone(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号'))
      }
    }
    const validateNewPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('新密码不能为空'))
      } else if (value.length < 6) {
        callback(new Error('新密码不少于6位'))
      } else if (!(/^\w+$/.test(value))) {
        callback(new Error('只能包含字母、数字或下划线'))
      } else if (this.addUserInfoForm.password_confirmation != '') {
        // 对第二个密码框单独验证
        this.$refs.addUserInfoForm3.validateField('password_confirmation')
        callback()
      } else {
        callback()
      }
    }
    const validateConfirmPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.addUserInfoForm.password) {
        callback(new Error('两次输入密码不一致'))
      } {
        callback()
      }
    }
    return {
      avatarUrl: $conf.baseUrl + 'oss/preview?is_img=true&hash=',
      upFileUrl: $conf.baseUrl + 'oss/upload',
      imgPreviewUrl: $conf.baseUrl + 'oss/preview?is_img=true&hash=',
      curBotNav: 'query', // query contract send
      descriptIsEdit: false,
      changePersonalInfoModal: false,
      changePersonalInfoLoading: false,
      contactSearchPerson: false,
      addUserInfoForm: {
        companyName: '',
        companyLeader: '',
        companyPhone: '',
        email: '',
        phone: '',
        business_license_hash: '',
        origin_password: '',
        password: '',
        password_confirmation: ''
      },
      contactSearchPerson: false,
      editUserInfoForm: {
        email: '',
        phone: '',
        code: ''
      },
      formRules: {
        companyName: [{
          required: true,
          message: '机构名称不能为空',
          trigger: 'blur'
        }],
        /* companyLeader: [
          { required: true, message: '机构负责人不能为空', trigger: 'blur' }
        ],
        companyPhone: [
          { required: true, message: '机构负责人手机不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ], */
        phone: [{
          validator: validateAccount,
          trigger: 'blur'
        }],
        code: [{
          required: true,
          message: '验证码不能为空',
          trigger: 'blur'
        }],
        origin_password: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        },
        {
          min: 6,
          message: '密码不少于6位',
          trigger: 'blur'
        }
        ],
        password: [{
          validator: validateNewPass,
          trigger: 'blur'
        }],
        password_confirmation: [{
          validator: validateConfirmPass,
          trigger: 'blur'
        }]
      },
      phoneAuthModal: false,
      editAvatar: false,
      // 我的查询Table
      columns1: [{
        title: '查询时间',
        key: 'date',
        align: 'center',
        width: 160
      },
      {
        title: '被查询人',
        key: 'byQuery',
        align: 'center'
      },
      {
        title: '被查询人身份信息',
        key: 'byQueryId',
        align: 'center',
        width: 180
      }, {
        title: '查询人',
        key: 'query',
        align: 'center'
      },
      {
        title: '查询单位',
        key: 'queryUnit',
        align: 'center',
        width: 150
      },
      {
        title: '查询目的',
        key: 'queryGoal',
        align: 'center'
      }, {
        title: '所在城市',
        key: 'city',
        align: 'center'
      },
      {
        title: '操作',
        key: 'handle',
        align: 'center',
        width: 110,
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              on: {
                click: () => {
                  this.searchPersonal()
                }
              }
            }, '联系查询人')
          ])
        }
      }
      ],
      data1: [{
        date: '2018-8-31 12:37:01',
        byQuery: '王伟',
        byQueryId: '620102198004277441',
        query: '崔权',
        queryUnit: '盈通财务管理公司',
        queryGoal: '贷款查询',
        city: '深圳'
      }, {
        date: '2018-8-31 12:37:01',
        byQuery: '王伟',
        byQueryId: '620102198004277441',
        query: '王端',
        queryUnit: '时间财务顾问管理公司',
        queryGoal: '贷款查询',
        city: '深圳'
      }, {
        date: '2018-8-31 12:37:01',
        byQuery: '王伟',
        byQueryId: '620102198004277441',
        query: '赵文理',
        queryUnit: '王道投资机构',
        queryGoal: '贷款查询',
        city: '深圳'
      }],
      // 我的合同Table
      columns2: [{
        title: '合同编号',
        key: 'compactNum',
        align: 'center'
      },
      {
        title: '合同签订时间',
        key: 'compactDate',
        align: 'center',
        width: 160
      },
      {
        title: '借款人',
        key: 'borrower',
        align: 'center'
      }, {
        title: '放款机构',
        key: 'lendingInstitution',
        align: 'center'
      },
      {
        title: '合同创建人',
        key: 'compactCreater',
        align: 'center'
      },
      {
        title: '操作',
        key: 'handle',
        align: 'center',
        width: 170,
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              style: {
                marginRight: '7px'
              },
              on: {
                click: () => { }
              }
            }, '详情'),
            h('Button', {
              props: {
                type: 'warning',
                size: 'small'
              },
              on: {
                click: () => { }
              }
            }, '提醒借款人')

          ])
        }
      }
      ],
      data2: [{
        compactNum: '2018081778254',
        compactDate: '2018-8-31 12:37:01',
        borrower: '王伟',
        lendingInstitution: '盈通财务管理公司',
        compactCreater: '张家齐'
      }, {
        compactNum: '2018081711452',
        compactDate: '2018-8-31 09:37:02',
        borrower: '王伟',
        lendingInstitution: '易王明投资顾问公司',
        compactCreater: '王端'
      }, {
        compactNum: '2018081715375',
        compactDate: '2018-8-30 12:04:05',
        borrower: '王伟',
        lendingInstitution: '英业达投资管理公司',
        compactCreater: '张师瑞'
      }, {
        compactNum: '20180817495375',
        compactDate: '2018-8-30 11:37:08',
        borrower: '王伟',
        lendingInstitution: '旺达财务管理公司',
        compactCreater: '赵文理'
      }],
      issueList: [{
        img: '../../../../static/img/tx8.jpg',
        name: '吴家乐',
        issueDate: '2018-8-31 12:37:01',
        firstDate: '2018-8-31 12:37:01',
        object: '老赖 ',
        issuer: '李强',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: '../../../../static/img/avatar_1.jpg',
        name: '林杰 ',
        issueDate: '2018-8-31 12:37:01',
        firstDate: '2018-8-31 12:37:01',
        object: '老赖',
        issuer: '王士豪',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: '../../../../static/img/avatar_2.jpg',
        name: '林孟哲',
        issueDate: '2018-8-31 12:37:01',
        firstDate: '2018-8-31 12:37:01',
        object: '老赖',
        issuer: '杨佳宏 ',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: '../../../../static/img/avatar_3.jpg',
        name: '张裕忠',
        issueDate: '2018-8-31 12:37:01',
        firstDate: '2018-8-31 12:37:01',
        object: '老赖',
        issuer: '邓家伟',
        city: '深圳',
        idNo: '440601198803113816'
      }],
      defaultList: [{
        'name': 'a42bdcc1178e62b4694c830f028db5c0',
        'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
      }],
      imgName: '',
      visible: false,
      uploadList: []

    }
  },
  components: {
    FileUpload,
    GetVerCode
  },
  watch: {
  },
  computed: {
    ...mapActions([
      'getUserInfo'
    ]),
    loginStatus () {
      return this.$store.state.loginStatus
    },
    userInfo () {
      return this.$store.state.user.userInfo
    }
  },
  methods: {
    // 查询联系人
    searchPersonal () {
      this.contactSearchPerson = true
    },
    submitAvatar () {
      this.editAvatar = false
    },
    fileUpSuccess (response, file, fileList) {
      if (this.addUserInfoForm.business_license_hash) {
        this.$Modal.confirm({
          title: '请确认',
          content: '头像更改？',
          onOk: () => {
            this.addUserInfoForm.business_license_hash = response.hash
          },
          onCancel: () => {

          }
        })
      } else {
        this.addUserInfoForm.business_license_hash = response.hash
      }
      // console.log(response, file, fileList);
    },
    fileUpError (error, file, fileList) {
      this.$Message.error('文件上传失败！')
      // console.log(error, file, fileList);
    },
    startDescriptEdit () {
      this.descriptIsEdit = true
      this.$nextTick(() => {
        this.$refs.descriptionipt.focus()
      })
    },
    descriptEditFn () {
      if (this.descriptIsEdit) {
        this.descriptIsEdit = false
        this.$ajax('post', 'user/center/description/change', {
          description: this.userInfo.description
        }).then(data => { })
      }
    },
    startEditInfo () {
      this.changePersonalInfoModal = true
      this.$ajax('get', 'user/center/edit/info', 'changePersonalInfoLoading').then(data => {
        this.addUserInfoForm = { ...this.addUserInfoForm,
          ...data.data
        }
      })
    },
    submitInfo1 () {
      this.$refs.addUserInfoForm1.validate(valid => {
        if (valid) {
          this.$ajax('post', 'user/center/company/info/change', this.addUserInfoForm, 'changePersonalInfoLoading')
            .then(data => {
              this.$Message.success('补全信息成功！')
            })
        }
      })
    },
    submitInfo3 () {
      this.$refs.addUserInfoForm3.validate(valid => {
        if (valid) {
          this.$ajax('post', 'user/center/password/update', this.addUserInfoForm, 'changePersonalInfoLoading').then(
            data => {
              this.addUserInfoForm.origin_password = ''
              this.addUserInfoForm.password = ''
              this.addUserInfoForm.password_confirmation = ''
              this.$Message.success('密码修改成功！')
            })
        }
      })
    },
    getCodeFn () {
      // 对手机号框单独验证
      this.$refs.editUserInfoForm.validateField('phone', error => {
        if (!error) {
          this.$refs.getCode.start(this.editUserInfoForm.phone)
        }
      })
    },
    submitChangePhone () {
      this.$refs.editUserInfoForm.validate(valid => {
        if (valid) {
          this.$ajax('post', 'user/center/phone/update', this.editUserInfoForm, 'changePersonalInfoLoading').then(
            data => {
              if (this.addUserInfoForm.phone) {
                this.$Message.success('手机换绑成功！')
              } else {
                this.$Message.success('手机绑定成功！')
              }
              this.addUserInfoForm.phone = this.editUserInfoForm.phone
              this.$store.commit('changeUserInfo', {
                phone: this.editUserInfoForm.phone
              })
            })

          this.phoneAuthModal = false
        }
      })
    },
    handleView (name) {
      this.imgName = name
      this.visible = true
    },
    handleRemove (file) {
      const fileList = this.$refs.upload.fileList
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
    },
    handleSuccess (res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
      file.name = '7eb99afb9d5f317c912f08b5212fd69a'
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      })
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      })
    },
    handleBeforeUpload () {
      const check = this.uploadList.length < 5
      if (!check) {
        this.$Notice.warning({
          title: 'Up to five pictures can be uploaded.'
        })
      }
      return check
    }
  },
  mounted () {
    typeof this.getUserInfo === 'function' && this.getUserInfo()
    if (this.$refs.upload) {
      this.uploadList = this.$refs.upload.fileList
    }
  }
}

</script>
