<style lang="less" scoped>
  .introducebox {
    .border_r {
      border-right: 1px solid #e8eaec;
    }

    .border_t {
      border-bottom: 1px solid #e8eaec;
    }

    .itemList {
      margin-top: 60px;
      .itemTitle {
        margin-bottom: 20px;
        .titleTxt {
          font-weight: 600;
          border-bottom: 1px solid #666;
          padding-bottom: 3px;
        }
        .titleTxt,
        .englishTxt {
          padding-top: 3px
        }
      }
      .itemContent {
        display: flex;
        justify-content: space-between;

        li {
          display: flex;
          flex-direction: column;
          align-items: center;

          b {
            padding: 7px 0 10px 0;
          }
        }

        .serverItem {
          border: 1px solid #e8eaec;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: calc(95%/3);
          transition: all ease .3s;
          &:hover {
            box-shadow: 0 4px 8px #ccc;
          }

          .itemTop {
            text-align: center;
            display: flex;
            flex-direction: column;
            background: #e0e2e7;
            width: 100%;
            padding: 15px 0 10px 0;

            b {
              margin-top: 10px;
            }

          }

          .activeItem {
            background: #999;
          }

          .itemBtm {
            text-align: center;
            padding: 25px 0;

            b {
              padding-top: 10px
            }
          }
        }
      }

      .licenseUl {
        li {
          width: calc(85%/4);
          box-shadow: 0 4px 8px #ccc;

          h2 {
            width: 30px;
            height: 30px;
            text-align: center;
            border-radius: 50%;
          }

          b {
            border-bottom: 1px solid #ccc;
            padding: 12px 0 3px 0;
            margin-bottom: 15px;
          }

          small {
            font-size: 12px;
            padding-top: 8px;
          }
        }

        li:first-of-type,
        li:last-of-type {
          color: #fff;
          background: #767a86;

          h2 {
            color: #767a86;
            background: #fff;
          }
        }

        li:first-of-type,
        li:nth-of-type(3) {
          padding: 15px 0 20px 0;
        }

        li:nth-of-type(2),
        li:nth-of-type(3) {
          background: #efefef;
          padding: 10px 0;

          h2 {
            background: #9fa0a0;
            color: #fff;
          }
        }

        li:nth-of-type(2),
        li:last-of-type {
          padding: 25px 0;
        }

      }

      .blackListUl {
        margin-bottom: 20px;
        li {
          border: 1px solid #e8eaec;
          width: calc(95%/5);
          padding: 10px;
          text-align: center;
          transition: all ease .3s;
          &:hover {
            box-shadow: 0 4px 8px #ccc;
          }

          b {
            // color:#f39800;
          }

          span {
            color: #999;
          }
        }

      }

      .antiFraudBox {
        height: 230px;
        background: url(../../../static/img/antiFraud_bg.png) no-repeat;
        background-size: 1200px;

        .listBox {
          span {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 1px solid #ccc;

            // display: flex;
            // justify-content: center;
            // align-items: center;
            i {
              width: 30px;
              color: white;
              text-align: center;
              border: 1px solid #ccc;
            }
          }
        }
      }

      .lineBox {
        padding-top: 50px;

        .hr {
          border-bottom: 1px solid #f39c24;
          margin-bottom: -7px;
        }

        .lineUl {
          display: flex;
          justify-content: space-between;
          padding: 0 30px;

          li {
            display: flex;
            flex-direction: column;
            align-items: center;

            i {
              width: 12px;
              height: 12px;
              border-radius: 50%;
            }
          }

          li:nth-of-type(2n-1) {
            b {
              margin-top: 5px;
            }
          }

          li:nth-of-type(2n) {
            margin-top: -25px;

            b {
              margin-bottom: 5px;
            }
          }
        }
      }
    }

    .solutionList {
      background: #cdcdcd33;
      padding: 15px;

      ul {
        padding: 10px;
        background: #fff;
        padding: 15px 10px;

        b {
          border-bottom: 1px solid #999;
          padding-bottom: 3px !important;
          margin-bottom: 10px;
        }
      }
    }

    .advantagesUl {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 0 20px;

      li {
        width: calc(97%/3);
        margin: 6px 0;
        position: relative;
        transition: all ease .3s;
        &:hover {
          box-shadow: 0 4px 8px #ccc;
        }

        img {
          width: 100%;
          height: 190px;
        }

        i {
          position: absolute;
          top: 50%;
          left: 50%;
          font-weight: 600;
          font-size: 16px;
          transform: translate(-50%, -50%);
          text-align: center;
        }
      }
    }

    .userBox {
      background: #cdcdcd33;
      padding: 15px;

      .userUl {
        display: flex;
        flex-wrap: wrap;
        padding: 15px;

        li {
          display: flex;
          flex-direction: column;
          width: calc(100%/3);
          padding: 18px;

          span {
            margin-bottom: 20px;

            b {
              padding-left: 5px;
            }
          }

          p {
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }

</style>

<template>
  <div class="appwrap">
    <div class="introducebox font_14">
      <div class="itemList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">安全高效</b></p>
          <p><b class="englishTxt font_12">STAFETY AND EFFICIENCY</b></p>
        </div>
        <ul class="itemContent">
          <li>
            <i><img src="../../../static/img/safeList_1.png" alt=""></i>
            <b>更安全</b>
            <span>最大限度保障业务系统和数据安全</span>
          </li>
          <li>
            <i><img src="../../../static/img/safeList_2.png" alt=""></i>
            <b>更便捷</b>
            <span>以最少的时间成本获取更大的价值</span>
          </li>
          <li>
            <i><img src="../../../static/img/safeList_3.png" alt=""></i>
            <b>更简单</b>
            <span>快速上手，无需技术门槛和学习成本</span>
          </li>
          <li>
            <i><img src="../../../static/img/safeList_4.png" alt=""></i>
            <b>更高效</b>
            <span>全面的收钱售后体系，为企业提供优质服务</span>
          </li>
        </ul>
      </div>
      <div class="itemList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">高品质的产品和服务</b></p>
          <p><b class="englishTxt font_12">HIGH QUALITY PRODUCTS AND SERIVICES</b></p>
        </div>
        <div class="itemContent">
          <div class="serverItem">
            <span class="itemTop activeItem">
              <i><img src="../../../static/img/productList_1.png" alt=""></i>
              <b class="white">安全可靠</b>
            </span>
            <span class="itemBtm">
              <b>全方位保障客户数据隐私，始终把客户放在第一位</b>
              <b>完善的技术支持，保障产品的安全性，稳定性，让您放心</b>
            </span>
          </div>
          <div class="serverItem">
            <span class="itemTop">
              <i><img src="../../../static/img/productList_2.png" alt=""></i>
              <b>快速精准</b>
            </span>
            <span class="itemBtm">
              <b>对查新报告进行分类统计，账目清晰明确，收支透明</b>
              <b>仅需简单输入基础信息，便能秒出报告，数据快速精准</b>
            </span>
          </div>
          <div class="serverItem">
            <span class="itemTop">
              <i><img src="../../../static/img/productList_3.png" alt=""></i>
              <b>敏捷智能</b>
            </span>
            <span class="itemBtm">
              <b>可以根据需求组合产品方案，达到客户需求</b>
              <b>数据的统计更贴近客户，以此获得更多的数据事件预知</b>
            </span>
          </div>
        </div>
      </div>
      <div class="itemList solutionList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">解决方案</b></p>
          <p><b class="englishTxt font_12">SOLUTION</b></p>
        </div>
        <ul class="itemContent">
          <li>
            <i><img src="../../../static/img/resolveList_1.png" alt=""></i>
            <b>用户画像</b>
            <span>客户定位、客户行为偏好、客户社会属性</span>
          </li>
          <li>
            <i><img src="../../../static/img/resolveList_2.png" alt=""></i>
            <b>信用风险</b>
            <span>破产、失业、家庭稳定性、偿还能力不足</span>
          </li>
          <li>
            <i><img src="../../../static/img/resolveList_3.png" alt=""></i>
            <b>欺诈风险</b>
            <span>团伙骗贷、伪造资料、第三人称欺诈</span>
          </li>
          <li>
            <i><img src="../../../static/img/resolveList_4.png" alt=""></i>
            <b>内部风险</b>
            <span>信审人员、销售人员、内外勾结</span>
          </li>
        </ul>
      </div>
      <div class="itemList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">我们的优势</b></p>
          <p><b class="englishTxt font_12">OUR ADVANTAGES</b></p>
        </div>
        <ul class="advantagesUl">
          <li>
            <img src="../../../static/img/f_1.png" alt="">
            <i>丰富的数据源</i>
          </li>
          <li>
            <img src="../../../static/img/f_2.png" alt="">
            <i class="white">强大的分布式网络数据获取系统</i>
          </li>
          <li>
            <img src="../../../static/img/f_3.png" alt="">
            <i>稳定、安全的数据接口</i>
          </li>
          <li>
            <img src="../../../static/img/f_4.png" alt="">
            <i class="white">基于分布式大数据实时处理高性能计算平台</i>
          </li>
          <li>
            <img src="../../../static/img/f_5.png" alt="">
            <i>行业专业知识以及行业经验</i>
          </li>
          <li>
            <img src="../../../static/img/f_6.png" alt="">
            <i class="white">甚至市场需求、解决行业痛点</i>
          </li>
        </ul>
      </div>
      <div class="itemList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">用户画像</b></p>
          <p><b class="englishTxt font_12">USER PROTRAIT</b></p>
        </div>
        <div class="userBox">
          <ul class="userUl white_bg">
            <li class="border_r border_t">
              <span>
                <i><img src="../../../static/img/userList_1.png" alt=""></i>
                <b>稳定性</b>
              </span>
              <p>家庭稳定性&nbsp;|&nbsp;工作稳定性&nbsp;|&nbsp;居住稳定性&nbsp;|&nbsp;手机号码稳定性</p>
            </li>
            <li class="border_r border_t">
              <span>
                <i><img src="../../../static/img/userList_2.png" alt=""></i>
                <b>资产预测</b>
              </span>
              <p>是否有车&nbsp;|&nbsp;是否有房&nbsp;|&nbsp;车辆价值&nbsp;|&nbsp;房产价值</p>
            </li>
            <li class="border_t">
              <span>
                <i><img src="../../../static/img/userList_3.png" alt=""></i>
                <b>行为偏好</b>
              </span>
              <p>电商购物倾向&nbsp;|&nbsp;线下消费偏好&nbsp;|&nbsp;兴趣爱好</p>
            </li>
            <li class="border_r">
              <span>
                <i><img src="../../../static/img/userList_4.png" alt=""></i>
                <b>社交圈</b>
              </span>
              <p>朋友圈分布&nbsp;|&nbsp;朋友圈特征&nbsp;|&nbsp;朋友圈拓展</p>
            </li>
            <li class="border_r">
              <span>
                <i><img src="../../../static/img/userList_5.png" alt=""></i>
                <b>消费能力</b>
              </span>
              <p>电商购物频率&nbsp;|&nbsp;购买商品价值&nbsp;|&nbsp;购物消费金额&nbsp;|&nbsp;购物多样性</p>
            </li>
            <li>
              <span>
                <i><img src="../../../static/img/userList_6.png" alt=""></i>
                <b>其他</b>
              </span>
              <p>信贷需求&nbsp;|&nbsp;出差特征&nbsp;|&nbsp;信用历史&nbsp;|&nbsp;收入预测</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="itemList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">数据集成</b></p>
          <p><b class="englishTxt font_12">DATA INTEGRATION</b></p>
        </div>
        <div class="lineBox">
          <!-- <hr> -->
          <p class="hr"></p>
          <ul class="lineUl">
            <li>
              <i class="primary_bg"></i>
              <b>电商数据</b>
            </li>
            <li>
              <b>验证信息</b>
              <i class="red_bg"></i>
            </li>
            <li>
              <i class="green_bg"></i>
              <b>车辆信息</b>
            </li>
            <li>
              <b>实名验证</b>
              <i class="orange_bg"></i>
            </li>
            <li>
              <i class="yellow_bg"></i>
              <b>多重借贷</b>
            </li>
            <li>
              <b>银行卡验证</b>
              <i class="primary_bg"></i>
            </li>
            <li>
              <i class="red_bg"></i>
              <b>手机三要素</b>
            </li>
            <li>
              <b>黑名单</b>
              <i class="green_bg"></i>
            </li>
            <li>
              <i class="orange_bg"></i>
              <b>APP活跃度</b>
            </li>
            <li>
              <b>消费数据</b>
              <i class="yellow_bg"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="itemList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">授权信息</b></p>
          <p><b class="englishTxt font_12">LICENSE INFORMATION</b></p>
        </div>
        <ul class="itemContent licenseUl">
          <li>
            <h2>1</h2>
            <b>运营商报告</b>
            <small>社交网络关联分析</small>
            <small>通话、短信模型异常</small>
            <small>手机号码稳定性，使用频率、使用偏好</small>
          </li>
          <li>
            <h2>2</h2>
            <b>京东报告</b>
            <small>京东信用分</small>
            <small>京东消费能力</small>
            <small>京东消费偏好</small>
          </li>
          <li>
            <h2>3</h2>
            <b>淘宝/支付宝报告</b>
            <small>芝麻信用</small>
            <small>淘宝消费偏好</small>
            <small>花呗/借呗信息</small>
          </li>
          <li>
            <h2>4</h2>
            <b>学信网报告</b>
            <small>毕业院校/时间</small>
            <small>学历、学籍状态</small>
            <small>花呗/借呗信息</small>
          </li>
        </ul>
      </div>
      <div class="itemList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">反欺诈</b></p>
          <p><b class="englishTxt font_12"> ANTI-FRAUD</b></p>
        </div>
        <div class="antiFraudBox">
        </div>
      </div>
      <div class="itemList">
        <div class="itemTitle txtC">
          <p><b class="titleTxt">黑名单</b></p>
          <p><b class="englishTxt font_12">BLACK LIST</b></p>
        </div>
        <ul class="itemContent blackListUl">
          <li>
            <i><img src="../../../static/img/blackList_1.svg" alt=""></i>
            <b class="">银行黑名单</b>
            <span>千万级银行精准的逾期黑名单，联合多家银行，实现联防联控</span>
          </li>
          <li>
            <i><img src="../../../static/img/blackList_2.svg" alt=""></i>
            <b>消费金融、P2P、小贷</b>
            <span>百万级消金逾期分级名单，欺诈名单，业务拒绝的名单，百万级P2P黑名单。</span>
          </li>
          <li>
            <i><img src="../../../static/img/blackList_3.svg" alt=""></i>
            <b>贷款中介、诈骗骚扰号码</b>
            <span>通过网络数据采集，每天更新58网、赶集网等贷款中介号码。号码识别骚然诈骗电话号码。</span>
          </li>
          <li>
            <i><img src="../../../static/img/blackList_4.svg" alt=""></i>
            <b>网络不良记录</b>
            <span>网络信息丰富，从网络信息扫描客户的不良行为，让其充分暴露。</span>
          </li>
          <li>
            <i><img src="../../../static/img/blackList_5.svg" alt=""></i>
            <b>法院[失信]被执行</b>
            <span>全国失信被执行人名单，网络采集高法信息，每日更新。</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introduce',
  data () {
    return {
    }
  }
}

</script>
