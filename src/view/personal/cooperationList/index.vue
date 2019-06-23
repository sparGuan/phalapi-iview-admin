<style lang="less" scoped>
  .bountymission {
    font-size: 14px;

    .changeinfoitem {
      padding: 15px 20px;
      background: #fff;
      margin-bottom: 10px;
      .itemTitle {
        b {
          font-weight: 600;
          border-left: 4px solid #009cff;
          padding-left: 6px;
        }
      }

      .itemContant {
        padding: 5px 20px;
        background: #fff;

        .itemList {
          border-bottom: 1px solid #ccc;
          padding: 10px 0;

          p {
            margin-bottom: 5px;
          }

          .infoBox {
            display: flex;
            // justify-content: space-between;
            align-items: center;

            .infoLeft {
              display: flex;
              align-items: center;
              width: 88%;
              .imgBox {
                position: relative;
                height: 100px;
                margin-right:30px;

                img {
                  -webkit-filter: blur(2px);
                  -moz-filter: blur(2px);
                  -o-filter: blur(2px);
                  -ms-filter: blur(2px);
                  filter: blur(2px);
                  width: 110px;
                  height: 100px;
                  object-fit: cover;
                }

                .name {
                  width: 100%;
                  position: absolute;
                  background:rgba(0, 156, 255, .7);
                  bottom: -4px;
                  height: 18px;
                  line-height: 18px;
                }
              }

              ul {
                li {
                  padding-top: 7px;
                }
              }
              .firstUl{
                margin-right:60px;
              }
            }

            .infoBtns {
              span {
                padding: 3px 8px;
                border-radius: 4px;
              }
            }
          }
        }
        .itemFlex{
          display: flex;
          margin-top: 30px;
          .itemFlexLeft{
            width:40%;
            margin-right:10%;
          }
          .itemFlexRight{
            width :40%
          }
        }
        .submitBtn{
          margin-left: 280px;
        }

      }
    }
  }

</style>

<template>
  <div class="bountymission">

    <div class="changeinfoitem">
      <div class="itemTitle">
        <b>甩单列表</b>
      </div>
      <div class="itemContant">
        <div class="itemList" v-for="(item,index) in rewardList" :key="index">
          <p>
            <span class="font_12 primary">开始时间：{{item.startDate}}</span>
          </p>
          <div class="infoBox">
            <div class="infoLeft">
              <div class="imgBox">
                <img :src='item.img' alt="暂无图片">
                <p class="name txtC white font_12">{{item.name}}</p>
              </div>
              <ul class="firstUl">
                <li>客户姓名：{{item.name}}</li>
                <li>发布类型：{{item.issueType}}</li>
                <li>任务状态：{{item.taskType}}</li>
              </ul>
              <ul>
                <li>赏金任务：{{item.account}}</li>
                <li>补充信息：{{item.replenish}}</li>
                <li>结束时间：{{item.endDate}}</li>
              </ul>
            </div>
            <div class="infoBtns font_12 pointer">
              <span class="addBtn primary_bg white">我要竞拍</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="changeinfoitem">
      <div class="itemTitle">
        <b>我的竞拍</b>
      </div>
      <div class="itemContant">
        <div class="itemList" v-for="(item,index) in taskList" :key="index">
          <p>
            <span class="font_12 primary">开始时间：{{item.startDate}}</span>
          </p>
          <div class="infoBox">
            <div class="infoLeft">
              <div class="imgBox">
                <img :src='item.img' alt="暂无图片">
                <p class="name txtC white font_12">{{item.name}}</p>
              </div>
              <ul class="firstUl">
                <li>客户姓名：{{item.name}}</li>
                <li>发布类型：{{item.issueType}}</li>
                <li>任务状态：{{item.taskType}}</li>
              </ul>
              <ul>
                <li>跟进反馈：{{item.feedback}}</li>
                <li>补充信息：{{item.replenish}}</li>
                <li>结束时间：{{item.endDate}}</li>
              </ul>
            </div>
            <div class="infoBtns font_12 pointer">
              <span class="addBtn primary_bg white">我的竞拍</span>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div class="changeinfoitem">
      <div class="itemTitle">
        <b>发布甩单</b>
      </div>
      <div class="itemContant">
        <Form ref="issueForm" :label-width="110">
          <div class="itemFlex">
            <div class="itemFlexLeft">
              <FormItem label="客户姓名">
                <Input type="text"  placeholder="请输入客户姓名" />
              </FormItem>
              <FormItem label="身份证">
                <Input type="text"  placeholder="请输入借款人身份证号码" />
              </FormItem>
              <FormItem label="手机号码">
                <Input type="text"  placeholder="请输入借款人手机号码" />
              </FormItem>
              <FormItem label="添加客户照片">
                <Input type="text"  placeholder="请输入时间" />
              </FormItem>

            </div>
            <div class="itemFlexRight">
              <FormItem label="时间">
                <DatePicker type="date" placeholder="Select date" class="pointer" style="width: 200px"></DatePicker>
              </FormItem>
              <FormItem label="发布类型">
                <Select style="width: 200px">
                  <Option value="0">寻人</Option>
                  <Option value="1">催收</Option>
                  <Option value="2">其他类型</Option>
                </Select>
              </FormItem>
              <FormItem label="悬赏金额">
                <Input type="number"  placeholder="请输入悬赏金额" />
              </FormItem>
              <FormItem label="补充信息">
                <Input type="textarea"  placeholder="请输入补充信息" />
              </FormItem>
            </div>
          </div>
          <FormItem>
            <Button type="primary" class="submitBtn">提交发布</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from '@/components/upload'
export default {
  name: 'CooperationList',
  components: {
    FileUpload
  },
  data () {
    return {
      issueForm: {},
      imgPreviewUrl: $conf.baseUrl + 'oss/preview?is_img=true&hash=',
      id_img_positive_hash: '',
      rewardList: [{
        img: require('../../../assets/img/tx5.jpg'),
        name: '王晓明',
        startDate: '2018-8-31 12:37:01',
        endDate: '2018-8-31 12:37:01',
        issueType: '催收',
        taskType: '抵押贷款',
        account: '5000',
        replenish: '有车有房，抵押贷，需要20万短期'
      }, {
        img: require('../../../assets/img/tx6.jpg'),
        name: '安德里',
        startDate: '2018-8-31 12:37:01',
        endDate: '2018-8-31 12:37:01',
        issueType: '催收',
        taskType: '抵押贷款',
        account: '5000',
        replenish: '有车，急用，空放，5万'
      }],
      taskList: [{
        img: require('../../../assets/img/tx13.jpg'),
        name: '杨智嘉',
        startDate: '2018-8-31 12:37:01',
        endDate: '2018-8-31 12:37:01',
        issueType: '催收',
        taskType: '抵押贷款',
        feedback: '目前人已找到，下一步上门催收',
        replenish: '有车有房，抵押贷，需要20万短期'
      }, {
        img: require('../../../assets/img/tx8.jpg'),
        name: '孙春',
        startDate: '2018-8-31 12:37:01',
        endDate: '2018-8-31 12:37:01',
        issueType: '催收',
        taskType: '抵押贷款',
        feedback: '目前人已找到，下一步上门催收',
        replenish: '有车，急用，空放，5万'
      }, {
        img: require('../../../assets/img/tx9.jpg'),
        name: '陈柏青',
        startDate: '2018-8-31 12:37:01',
        endDate: '2018-8-31 12:37:01',
        issueType: '催收',
        taskType: '抵押贷款',
        feedback: '目前人已找到，下一步上门催收',
        replenish: '有车有房，抵押贷，需要20万短期'
      }]

    }
  }
}

</script>
