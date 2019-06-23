<style lang="stylus" scoped>
.blacklistwrap {
  font-size: 14px;
}

.blacklistbox {
  .blacklistboxhead {
    display: flex;
    height: 35px;
    line-height: 35px;

    li {
      flex: auto;
      text-align: center;
      background: #a3dbfd;
      border-right: 1px solid #fff;
      padding: 4px 0;

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

  .warninginfo {
    color: #999;
    margin-top: 10px;
  }

  .blacklistboxbody {
    color: #000;
  }

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

          img {
            -webkit-filter: blur(2px);
            -moz-filter: blur(2px);
            -o-filter: blur(2px);
            -ms-filter: blur(2px);
            filter: blur(2px);
            width: 110px;
            height: 100px;
            name-fit: cover;
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

        .itemUl {
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
    padding: 15px 0;
    background: #fff;

    .tit {
      width: 643px;
      margin-bottom: 10px;

      b {
        font-weight: 600;
        border-left: 4px solid #009cff;
        padding-left: 6px;
      }
    }

    .noticeTxt {
      margin-bottom: 20px;
    }

    .enterForm {
      padding-left: 24%;
    }

    .ivu-form .ivu-form-item {
      width: 61%;
    }
  }
}

.blacklistcombtndeep {
  padding: 2px 20px;
  border-color: @background;
}
</style>

<template>
  <div class="blacklistwrap">
    <div class="blacklistbox">
      <ul class="blacklistboxhead pointer">
        <li
          :class="{ active: curNav == 'blackList' }"
          @click="curNav = 'blackList'"
        >
          黑名单列表
        </li>
        <li
          :class="{ active: curNav == 'myQuery' }"
          @click="curNav = 'myQuery'"
        >
          我的查询
        </li>
        <li :class="{ active: curNav == 'mySend' }" @click="curNav = 'mySend'">
          我的发布
        </li>
        <li
          :class="{ active: curNav == 'sendBlack' }"
          @click="curNav = 'sendBlack'"
        >
          发布黑名单
        </li>
      </ul>
      <p class="warninginfo font_12 txtC">
        <i class="red">*</i>
        使用平台黑名单功能，信息为使用平台的信贷人员所分享，不代表本平台观点和意见。
      </p>
      <div v-if="curNav == 'blackList'" class="blacklistboxbody">
        <div
          class="blacklistboxbodyitem"
          v-for="(item, index) in blackList"
          :key="index"
        >
          <div class="infoBox">
            <div class="infoLeft">
              <div class="imgBox">
                <img :src="item.img" alt="暂无图片" />
                <p class="name white font_12">{{ item.name }}</p>
              </div>
              <ul class="itemUl">
                <li>对象：{{ item.name }}</li>
                <li>所在地区：{{ item.city }}</li>
                <li>身份证号码：{{ item.idNo }}</li>
              </ul>
              <ul class="itemUl">
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
      <div v-if="curNav == 'myQuery'" class="blacklistboxbody">
        <div
          class="blacklistboxbodyitem"
          v-for="(item, index) in queryList"
          :key="index"
        >
          <div class="infoBox">
            <div class="infoLeft">
              <div class="imgBox">
                <img :src="item.img" alt="暂无图片" />
                <p class="name white font_12">{{ item.name }}</p>
              </div>
              <ul class="itemUl">
                <li>对象：{{ item.name }}</li>
                <li>所在地区：{{ item.city }}</li>
                <li>身份证号码：{{ item.idNo }}</li>
              </ul>
              <ul class="itemUl">
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

      <div v-if="curNav == 'mySend'" class="blacklistboxbody">
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
              <ul class="itemUl">
                <li>对象：{{ item.name }}</li>
                <li>所在地区：{{ item.city }}</li>
                <li>身份证号码：{{ item.idNo }}</li>
              </ul>
              <ul class="itemUl">
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

      <div v-if="curNav == 'sendBlack'" class="blacklistboxbody">
        <div class="addblacklistformwrap">
          <p class="tit txtC"><b>录入黑名单信息</b></p>
          <p class="noticeTxt txtC font_12">
            1、录入黑名单信息，发布需经后台审核，审核成功后可在我的发布中查看；<br />
            2、请确保信息的真实性，慎重发布，发布虚假信息，行业公布并关闭账户。
          </p>
          <Form
            :model="addBlackListForm"
            :rules="formRules"
            ref="addBlackListForm"
            :label-width="100"
            class="enterForm"
          >
            <FormItem label="所在地区">
              <Input
                v-model.trim="addBlackListForm.name"
                placeholder="请输入所在地区"
              ></Input>
            </FormItem>
            <FormItem label="姓名">
              <Input
                v-model.trim="addBlackListForm.name"
                placeholder="请输入姓名"
              ></Input>
            </FormItem>
            <FormItem label="身份证号码">
              <Input
                v-model.trim="addBlackListForm.name"
                placeholder="请输入身份证号码"
              ></Input>
            </FormItem>
            <FormItem label="对象">
              <Select v-model="addBlackListForm.name">
                <Option :value="1" :key="1">老赖</Option>
                <Option :value="2" :key="2">风险客户</Option>
                <Option :value="3" :key="3">黑中介</Option>
                <Option :value="4" :key="4">其他</Option>
              </Select>
            </FormItem>
            <FormItem label="照片">
              <div>
                <FileUpload
                  :filelist="[]"
                  :params="{}"
                  @fileUpSuccess="fileUpSuccess"
                  @fileUpError="fileUpError"
                  :pushFlag="1"
                  accept="image/*"
                >
                </FileUpload>
              </div>
              <img
                :src="require('../../../assets/img/aboutusimg1.jpg')"
                alt=""
                width="105"
                style="margin-left: 15px;"
              />
            </FormItem>
            <FormItem label="细节说明">
              <Input
                v-model.trim="addBlackListForm.name"
                type="textarea"
                :rows="4"
                placeholder="请输入细节说明，包括欠款金额，逾期时间等信息"
              ></Input>
            </FormItem>
            <FormItem class="txtC">
              <Button type="primary">提交审核</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from '@/components/upload'

export default {
  name: 'BlackList',
  data () {
    return {
      curNav: 'blackList',
      addBlackListForm: {
        name: ''
      },
      formRules: {
        name: [{
          required: true,
          message: '姓名不能为空',
          trigger: 'blur'
        }]
      },
      blackList: [{
        img: require('../../../assets/img/avatar_4.jpg'),
        name: '王晓明',
        issueDate: '2018-8-12 10:00:00',
        firstDate: '2018-8-01 08:37:01',
        issuer: '王端和',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_5.jpg'),
        name: '安德里',
        issueDate: '2018-9-31 12:37:01',
        firstDate: '2018-10-31 12:37:01',
        issuer: '冯兴国',
        city: '深圳',
        idNo: '425125198810013153'
      }, {
        img: require('../../../assets/img/avatar_6.jpg'),
        name: '伊犁',
        issueDate: '2018-7-31 12:37:01',
        firstDate: '2018-8-31 12:37:01',
        issuer: '陈国菱 ',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_7.jpg'),
        name: '王大力',
        issueDate: '2018-11-31 12:37:01',
        firstDate: '2018-11-01 12:37:01',
        issuer: '于烈红',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_8.jpg'),
        name: '刘晓宇',
        issueDate: '2018-8-06 12:37:01',
        firstDate: '2018-8-01 12:37:01',
        issuer: '荣二可',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_9.jpg'),
        name: '阚清',
        issueDate: '2018-10-21 12:37:01',
        firstDate: '2018-10-08 12:37:01',
        issuer: '刘西亚',
        city: '深圳',
        idNo: '440601198803113816'
      }],
      queryList: [{
        img: require('../../../assets/img/avatar_10.jpg'),
        name: '伊犁',
        issueDate: '2018-7-31 12:37:01',
        firstDate: '2018-8-31 12:37:01',
        issuer: '陈国菱 ',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_11.jpg'),
        name: '刘晓宇',
        issueDate: '2018-8-06 12:37:01',
        firstDate: '2018-8-01 12:37:01',
        issuer: '荣二可',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_12.jpg'),
        name: '王大力',
        issueDate: '2018-11-31 12:37:01',
        firstDate: '2018-11-01 12:37:01',
        issuer: '于烈红',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_13.jpg'),
        name: '王晓明',
        issueDate: '2018-8-12 10:00:00',
        firstDate: '2018-8-01 08:37:01',
        issuer: '王端和 ',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_14.jpg'),
        name: '安德里',
        issueDate: '2018-9-31 12:37:01',
        firstDate: '2018-10-31 12:37:01',
        issuer: '冯兴国',
        city: '深圳',
        idNo: '425125198810013153'
      }],
      issueList: [{
        img: require('../../../assets/img/avatar_15.jpg'),
        name: '刘晓宇',
        issueDate: '2018-8-06 12:37:01',
        firstDate: '2018-8-01 12:37:01',
        issuer: '荣二可',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_16.jpg'),
        name: '阚清',
        issueDate: '2018-10-21 12:37:01',
        firstDate: '2018-10-08 12:37:01',
        issuer: '刘西亚',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_17.jpg'),
        name: '伊犁',
        issueDate: '2018-7-31 12:37:01',
        firstDate: '2018-8-31 12:37:01',
        issuer: '陈国菱 ',
        city: '深圳',
        idNo: '440601198803113816'
      }, {
        img: require('../../../assets/img/avatar_18.jpg'),
        name: '王大力',
        issueDate: '2018-11-31 12:37:01',
        firstDate: '2018-11-01 12:37:01',
        issuer: '于烈红',
        city: '深圳',
        idNo: '440601198803113816'
      }]
    }
  },
  components: {
    FileUpload
  },
  methods: {
    fileUpSuccess (response, file, fileList) {
      console.log(response, file, fileList)
    },
    fileUpError (error, file, fileList) {
      console.log(error, file, fileList)
    }
  }
}

</script>
