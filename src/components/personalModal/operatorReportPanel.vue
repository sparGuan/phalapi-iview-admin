<style lang="stylus" scoped>
.operatorreportwrap
  //
</style>

<template>
  <div class="commontablewrap operatorreportwrap">
    <div class="report_title">
      <span>编号：{{data.report_info.report_no}}</span>
      <span class="fr">报告时间：{{data.report_info.time}}</span>
    </div>
    <!-- 风险评估 -->
    <table class="full">
      <tr>
        <td class="tc border" rowspan="3" colspan="3">
          <div class="big_font">
            <span class="big_font_title">欺诈评估风险：</span>{{data.report_info.risk_level == '风险：低' ? '低' : data.report_info.risk_level == '风险：中' ? '中' : '高'}}</div>
        </td>
        <td :class="{orange: data.report_info.risk_level == '风险：低'}" valign="bottom" class="third pd_x bggray">低：较小的欺诈和失信风险</td>
      </tr>
      <tr>
        <td :class="{orange: data.report_info.risk_level == '风险：中'}" class="pd_x bggray">中：有一定欺诈和失信风险</td>
      </tr>
      <tr>
        <td :class="{orange: data.report_info.risk_level == '风险：高'}" valign="top" class="pd_x bggray">高：较高的欺诈和失信风险</td>
      </tr>
    </table>
    <!-- 量化评分 -->
    <table class="full">
      <tr>
        <td class="tc border" rowspan="15">
          <div>
            <div class="big_font_title">运营商量化评分</div>
            <div>
              <span class="big_font_xl">{{data.report_info.score}}</span>&nbsp;
              <span v-if="data.report_info.score <= 900 && data.report_info.score >= 800" class="darkgray">极好</span>
              <span v-if="data.report_info.score <= 799 && data.report_info.score >= 750" class="darkgray">较好</span>
              <span v-if="data.report_info.score <= 749 && data.report_info.score >= 600" class="darkgray">一般</span>
              <span v-if="data.report_info.score <= 599 && data.report_info.score >= 400" class="darkgray">差</span>
            </div>
          </div>
        </td>
        <td class="border half quarter half pd_x" rowspan="4">
          <div>身份特征</div>
          <div>
            <Rate v-model="data.report_info.identity_level" disabled class="ratestarwrap" />
          </div>
        </td>
        <td class="border half quarter half pd_x">入网历史</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.identity_sub_level" v-model="data.report_info.identity_sub_level.history_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
        <td class="bggray third pd_x" rowspan="15" valign="middle">
          <div :class="{orange: data.report_info.score <= 900 && data.report_info.score >= 800}">800-900：等级极好，人群占比15%</div>
          <div :class="{orange: data.report_info.score <= 799 && data.report_info.score >= 750}">750-799：等级较好，人群占比25%</div>
          <div :class="{orange: data.report_info.score <= 749 && data.report_info.score >= 600}">600-749：等级一般，人群占比45%</div>
          <div :class="{orange: data.report_info.score <= 599 && data.report_info.score >= 400}">400-599：等级差，人群占比15%</div>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">使用套餐</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.identity_sub_level" v-model="data.report_info.identity_sub_level.package_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">区域经济水平</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.identity_sub_level" v-model="data.report_info.identity_sub_level.financial_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">性别年龄</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.identity_sub_level" v-model="data.report_info.identity_sub_level.physiological_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border quarter half pd_x" rowspan="3">
          <div>消费能力</div>
          <div>
            <Rate v-model="data.report_info.consumption_level" disabled class="ratestarwrap" />
          </div>
        </td>
        <td class="border half quarter half pd_x">消费总量</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.consumption_sub_level" v-model="data.report_info.consumption_sub_level.count_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">消费稳定性</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.consumption_sub_level" v-model="data.report_info.consumption_sub_level.stable_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">可用余额</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.consumption_sub_level" v-model="data.report_info.consumption_sub_level.recently_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border quarter half pd_x" rowspan="5">
          <div>通信行为</div>
          <div>
            <Rate v-model="data.report_info.communication_level" disabled class="ratestarwrap" />
          </div>
        </td>
        <td class="border half quarter half pd_x">漫游活跃度</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.communication_sub_level" v-model="data.report_info.communication_sub_level.roam_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">本地活跃度</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.communication_sub_level" v-model="data.report_info.communication_sub_level.local_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">区域集中指数</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.communication_sub_level" v-model="data.report_info.communication_sub_level.area_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">作息时间指数</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.communication_sub_level" v-model="data.report_info.communication_sub_level.timefield_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">长期持续指数</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.communication_sub_level" v-model="data.report_info.communication_sub_level.silent_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border quarter half pd_x" rowspan="3">
          <div>人脉关系</div>
          <div>
            <Rate v-model="data.report_info.relationship_level" disabled class="ratestarwrap" />
          </div>
        </td>
        <td class="border half quarter half pd_x">主叫人脉</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.relationship_sub_level" v-model="data.report_info.relationship_sub_level.calling_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">被叫人脉</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.relationship_sub_level" v-model="data.report_info.relationship_sub_level.called_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
      <tr>
        <td class="border half quarter half pd_x">平衡度</td>
        <td class="border half quarter half pd_x">
          <Rate v-if="data.report_info.relationship_sub_level" v-model="data.report_info.relationship_sub_level.ballance_level" disabled class="ratestarwrap" />
          <p v-else>未发现</p>
        </td>
      </tr>
    </table>
    <!-- 申请信息校验 -->
    <table class="full bggray darkgray">
      <tr>
        <td colspan="6" class="title pd_x">
          <h2>申请信息校验</h2>
        </td>
      </tr>
      <tr>
        <td class="tr" width="10%">姓名：</td>
        <td width="20%">{{data.applier_info.name}}</td>
        <td class="tr" width="14%">性别：</td>
        <td width="20%">{{data.applier_info.gender}}</td>
        <td class="tr" width="10%">年龄：</td>
        <td width="21%">{{data.applier_info.age}}</td>
      </tr>
      <tr>
        <td class="tr">手机号：</td>
        <td>{{data.applier_info.phone_number}}</td>
        <td class="tr">身份证归属地：</td>
        <td colspan="3">{{data.applier_info.idcard_location}}</td>
      </tr>
      <tr>
        <td class="tr">身份证：</td>
        <td colspan="5">{{data.applier_info.idcard}}</td>
      </tr>
      <tr>
        <td></td>
        <td colspan="3">
          <div class="match_info">
            <div>{{data.sensitive_info.find(e => e.result_detail_info && e.result_detail_info.operator_info_check).result_detail_info.operator_info_check.idcard_matching}}</div>
            <div>{{data.sensitive_info.find(e => e.result_detail_info && e.result_detail_info.operator_info_check).result_detail_info.operator_info_check.name_matching}}</div>
          </div>
        </td>
        <td colspan="2"></td>
      </tr>
      <tr v-if="data.applier_info.home_address">
        <td class="tr">居住地：</td>
        <td colspan="3">{{data.applier_info.home_address}}</td>
        <td class="tr">居住地电话：</td>
        <td>{{data.applier_info.home_telephone_number}}</td>
      </tr>
      <tr v-if="data.applier_info.home_address_map_result && data.applier_info.home_address_map_result.formatted_address">
        <td></td>
        <td colspan="3">
          <div class="match_info gray">
            <div>居住地地图定位结果：{{data.applier_info.home_address_map_result.formatted_address}}</div>
            <div>定位经纬度：{{data.applier_info.home_address_map_result.longitude}},{{data.applier_info.home_address_map_result.latitude}}</div>
            <div>定位精度：{{data.applier_info.home_address_map_result.level}}</div>
          </div>
        </td>
        <td colspan="2"></td>
      </tr>
      <tr v-if="data.applier_info.company_address">
        <td class="tr">工作地：</td>
        <td colspan="3">{{data.applier_info.company_address}}</td>
        <td class="tr">工作地电话：</td>
        <td>{{data.applier_info.company_telephone_number}}</td>
      </tr>
      <tr v-if="data.applier_info.company_address_map_result && data.applier_info.company_address_map_result.formatted_address">
        <td></td>
        <td colspan="3">
          <div class="match_info gray">
            <div>工作地地图定位结果：{{data.applier_info.company_address_map_result.formatted_address}}</div>
            <div>定位经纬度：{{data.applier_info.company_address_map_result.latitude}},{{data.applier_info.company_address_map_result.longitude}}</div>
            <div>定位精度：{{data.applier_info.company_address_map_result.level}}</div>
          </div>
        </td>
        <td colspan="2"></td>
      </tr>
      <tr v-for="list in data.applier_info.contacts">
        <td class="tr">联系人：</td>
        <td>{{list.name}}</td>
        <td class="tr">联系电话：</td>
        <td colspan="3">{{list.phone_number}}</td>
      </tr>
      <!-- <tr>
                    <td></td>
                    <td colspan="3">
                      <div class="match_info gray">
                        <div>被叫37次共27分钟 主叫54次共93分钟</div>
                        <div>手机号未在黑名单中出现</div>
                      </div>
                    </td>
                    <td colspan="2"></td>
                  </tr> -->
      <tr>
        <td colspan="6"></td>
      </tr>
    </table>
    <!-- 运营商基本信息 -->
    <table class="border full">
      <tr>
        <td colspan="4" class="title  pd_x">
          <h2>运营商基本信息</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x" width="15%">手机号：</td>
        <td class="pd_x" width="35%">{{data.operator_info.phone_number}}</td>
        <td class="pd_x" width="15%">运营商类型：</td>
        <td class="pd_x" width="35%">{{data.operator_info.operator_type}}</td>
      </tr>
      <tr>
        <td class="pd_x">姓名：</td>
        <td class="pd_x">{{data.operator_info.name}}</td>
        <td class="pd_x">身份证：</td>
        <td class="pd_x">{{data.operator_info.idcard}}</td>
      </tr>
      <tr>
        <td class="pd_x">邮箱：</td>
        <td class="pd_x">{{data.operator_info.email}}</td>
        <td class="pd_x">地址：</td>
        <td class="pd_x">{{data.operator_info.address}}</td>
      </tr>
      <tr>
        <td class="pd_x">会员等级：</td>
        <td class="pd_x">{{data.operator_info.vip_level}}</td>
        <td class="pd_x">积分值：</td>
        <td class="pd_x">{{data.operator_info.accumulate_points}}</td>
      </tr>
      <tr>
        <td class="pd_x">在网时长：</td>
        <td class="pd_x">{{data.operator_info.registration_history}}</td>
        <td class="pd_x">套餐类型：</td>
        <td class="pd_x">{{data.operator_info.order_description}}</td>
      </tr>
      <tr>
        <td class="pd_x">可用余额：</td>
        <td class="pd_x">{{data.operator_info.available_amount}}</td>
        <td class="pd_x">手机归属地：</td>
        <td class="pd_x">{{data.operator_info.phone_number_location}}</td>
      </tr>
      <tr>
        <td class="pd_x">主要活动区域：</td>
        <td class="pd_x" colspan="3">{{data.operator_info.main_active_location}} {{data.operator_info.main_location_percent ? '（活动时间占比：' + data.operator_info.main_location_percent + '）' : ''}}</td>
      </tr>
    </table>
    <!-- 风险信息扫描 -->
    <table class="border full">
      <tr>
        <td class="title pd_x" colspan="4">
          <h2>风险信息扫描</h2>
        </td>
      </tr>
      <!-- 运营商关键信息匹配 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[0].item_name}}</td>
        <td v-if="data.sensitive_info[0].check_result == 'result_detail_info'" colspan="2" class="pd_x">
          <div>{{data.sensitive_info[0].result_detail_info.operator_info_check.idcard_matching}}</div>
          <div>{{data.sensitive_info[0].result_detail_info.operator_info_check.name_matching}}</div>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[0].risk_level.includes('风险：') ? data.sensitive_info[0].risk_level : '风险：' + data.sensitive_info[0].risk_level}}</td>
      </tr>
      <!-- 入网时长检查 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[1].item_name}}</td>
        <td v-if="data.sensitive_info[1].check_result == 'result_detail_info'" colspan="2" class="pd_x">
          <div>{{data.sensitive_info[1].result_detail_info.inservice_duration_check.result}}</div>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[1].risk_level.includes('风险：') ? data.sensitive_info[1].risk_level : '风险：' + data.sensitive_info[1].risk_level}}</td>
      </tr>
      <!-- 申请人黑名单命中检查 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[2].item_name}}</td>
        <td v-if="data.sensitive_info[2].check_result == 'result_detail_info'" colspan="2" class="pd_x">
          <div>{{data.sensitive_info[2].result_detail_info.applier_hit_black_check.phone_hit_result}}</div>
          <div>{{data.sensitive_info[2].result_detail_info.applier_hit_black_check.idcard_hit_result}}</div>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[2].risk_level.includes('风险：') ? data.sensitive_info[2].risk_level : '风险：' + data.sensitive_info[2].risk_level}}</td>
      </tr>
      <!-- 紧急联系人黑名单命中检查 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[3].item_name}}</td>
        <td v-if="data.sensitive_info[3].check_result == 'result_detail_info'" colspan="2" class="pd_x">
          <div v-for="list in data.sensitive_info[3].result_detail_info.contacts_hit_black_check">
            【{{list.name}}】{{list.phone_number}} {{list.phone_hit_result}}
          </div>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[3].risk_level.includes('风险：') ? data.sensitive_info[3].risk_level : '风险：' + data.sensitive_info[3].risk_level}}</td>
      </tr>
      <!-- 黑名单通信记录 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[4].item_name}}</td>
        <td v-if="data.sensitive_info[4].check_result == 'result_detail_info'" class="pd_x">
          <div>共与{{data.sensitive_info[4].result_detail_info.call_simple_record.callers_number}}个号码通信</div>
        </td>
        <td v-if="data.sensitive_info[4].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[4].result_detail_info.call_simple_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[4].risk_level.includes('风险：') ? data.sensitive_info[4].risk_level : '风险：' + data.sensitive_info[4].risk_level}}</td>
      </tr>
      <!-- 紧急联系人通信记录 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[5].item_name}}</td>
        <td v-if="data.sensitive_info[5].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[5].result_detail_info.call_record.call_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>被叫{{list.called_info.called_count}}次共{{list.called_info.called_duration}}分钟</td>
              <td>主叫{{list.calling_info.calling_count}}次共{{list.calling_info.calling_duration}}分钟</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[5].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[5].result_detail_info.call_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[5].risk_level.includes('风险：') ? data.sensitive_info[5].risk_level : '风险：' + data.sensitive_info[5].risk_level}}</td>
      </tr>
      <!-- 民间借贷通信记录 -->
      <tr class="bg_warn">
        <td class="pd_x quart">{{data.sensitive_info[6].item_name}}</td>
        <td v-if="data.sensitive_info[6].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[6].result_detail_info.call_record.call_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>被叫{{list.called_info.called_count}}次共{{list.called_info.called_duration}}分钟</td>
              <td>主叫{{list.calling_info.calling_count}}次共{{list.calling_info.calling_duration}}分钟</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[6].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[6].result_detail_info.call_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[6].risk_level.includes('风险：') ? data.sensitive_info[6].risk_level : '风险：' + data.sensitive_info[6].risk_level}}</td>
      </tr>
      <!-- 金融机构通信记录 -->
      <tr class="bg_warn">
        <td class="pd_x quart">{{data.sensitive_info[7].item_name}}</td>
        <td v-if="data.sensitive_info[7].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[7].result_detail_info.call_record.call_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>被叫{{list.called_info.called_count}}次共{{list.called_info.called_duration}}分钟</td>
              <td>主叫{{list.calling_info.calling_count}}次共{{list.calling_info.calling_duration}}分钟</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[7].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[7].result_detail_info.call_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[7].risk_level.includes('风险：') ? data.sensitive_info[7].risk_level : '风险：' + data.sensitive_info[7].risk_level}}</td>
      </tr>
      <!-- 信用卡机构通信记录 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[8].item_name}}</td>
        <td v-if="data.sensitive_info[8].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[8].result_detail_info.call_record.call_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>被叫{{list.called_info.called_count}}次共{{list.called_info.called_duration}}分钟</td>
              <td>主叫{{list.calling_info.calling_count}}次共{{list.calling_info.calling_duration}}分钟</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[8].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[8].result_detail_info.call_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[8].risk_level.includes('风险：') ? data.sensitive_info[8].risk_level : '风险：' + data.sensitive_info[8].risk_level}}</td>
      </tr>
      <!-- P2P平台与互联网小贷通信记录 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[9].item_name}}</td>
        <td v-if="data.sensitive_info[9].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[9].result_detail_info.call_record.call_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>被叫{{list.called_info.called_count}}次共{{list.called_info.called_duration}}分钟</td>
              <td>主叫{{list.calling_info.calling_count}}次共{{list.calling_info.calling_duration}}分钟</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[9].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[9].result_detail_info.call_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[9].risk_level.includes('风险：') ? data.sensitive_info[9].risk_level : '风险：' + data.sensitive_info[9].risk_level}}</td>
      </tr>
      <!-- P2P平台与互联网小贷联系记录 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[10].item_name}}</td>
        <td v-if="data.sensitive_info[10].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[10].result_detail_info.sms_record.sms_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>发送{{list.send_count}}次</td>
              <td>接收{{list.receive_count}}次</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[10].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[10].result_detail_info.sms_record.sms_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.sender_receiver_number != 0 || list.send_receive_count != 0">
              <td>{{list.sender_receiver_number}}个对象</td>
              <td>总共{{list.send_receive_count}}次</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[10].risk_level.includes('风险：') ? data.sensitive_info[10].risk_level : '风险：' + data.sensitive_info[10].risk_level}}</td>
      </tr>
      <!-- 律师通信记录 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[11].item_name}}</td>
        <td v-if="data.sensitive_info[11].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[11].result_detail_info.call_record.call_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>被叫{{list.called_info.called_count}}次共{{list.called_info.called_duration}}分钟</td>
              <td>主叫{{list.calling_info.calling_count}}次共{{list.calling_info.calling_duration}}分钟</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[11].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[11].result_detail_info.call_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[11].risk_level.includes('风险：') ? data.sensitive_info[11].risk_level : '风险：' + data.sensitive_info[11].risk_level}}</td>
      </tr>
      <!-- 公检法通信记录 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[12].item_name}}</td>
        <td v-if="data.sensitive_info[12].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[12].result_detail_info.call_record.call_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>被叫{{list.called_info.called_count}}次共{{list.called_info.called_duration}}分钟</td>
              <td>主叫{{list.calling_info.calling_count}}次共{{list.calling_info.calling_duration}}分钟</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[12].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[12].result_detail_info.call_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[12].risk_level.includes('风险：') ? data.sensitive_info[12].risk_level : '风险：' + data.sensitive_info[12].risk_level}}</td>
      </tr>
      <!-- 110通信记录 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[13].item_name}}</td>
        <td v-if="data.sensitive_info[13].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[13].result_detail_info.call_record.call_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>被叫{{list.called_info.called_count}}次共{{list.called_info.called_duration}}分钟</td>
              <td>主叫{{list.calling_info.calling_count}}次共{{list.calling_info.calling_duration}}分钟</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[13].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[13].result_detail_info.call_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[13].risk_level.includes('风险：') ? data.sensitive_info[13].risk_level : '风险：' + data.sensitive_info[13].risk_level}}</td>
      </tr>
      <!-- 120通信记录 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[14].item_name}}</td>
        <td v-if="data.sensitive_info[14].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[14].result_detail_info.call_record.call_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>被叫{{list.called_info.called_count}}次共{{list.called_info.called_duration}}分钟</td>
              <td>主叫{{list.calling_info.calling_count}}次共{{list.calling_info.calling_duration}}分钟</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[14].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[14].result_detail_info.call_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[14].risk_level.includes('风险：') ? data.sensitive_info[14].risk_level : '风险：' + data.sensitive_info[14].risk_level}}</td>
      </tr>
      <!-- 澳门通信记录 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[15].item_name}}</td>
        <td v-if="data.sensitive_info[15].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[15].result_detail_info.call_record.call_list" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>被叫{{list.called_info.called_count}}次共{{list.called_info.called_duration}}分钟</td>
              <td>主叫{{list.calling_info.calling_count}}次共{{list.calling_info.calling_duration}}分钟</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[15].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[15].result_detail_info.call_record.call_bucket_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="3">【{{list.bucket_name}}】</td>
            </tr>
            <tr v-if="list.callers_number != 0 || list.call_count != 0 || list.call_duration != 0">
              <td>{{list.callers_number}}个号码</td>
              <td>联系{{list.call_count}}次</td>
              <td>共{{list.call_duration}}分钟</td>
            </tr>
            <tr v-else>
              <td colspan="3">未发现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[15].risk_level.includes('风险：') ? data.sensitive_info[15].risk_level : '风险：' + data.sensitive_info[15].risk_level}}</td>
      </tr>
      <!-- 身份证关联的其它信息 -->
      <tr>
        <td class="pd_x quart">{{data.sensitive_info[16].item_name}}</td>
        <td v-if="data.sensitive_info[16].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[16].result_detail_info.idcard_correlation_phone_info" class="full subtable">
            <tr>
              <td class="subtitle" colspan="2">【{{list.phone_number}}】</td>
            </tr>
            <tr>
              <td>运营商类型：</td>
              <td>{{list.operator_type}}</td>
            </tr>
            <tr>
              <td>归属地：</td>
              <td>{{list.operator_location}}</td>
            </tr>
            <tr>
              <td>最近一次出现时间：</td>
              <td>{{list.latest_present_time}}</td>
            </tr>
            <tr>
              <td>是否命中黑名单：</td>
              <td>{{list.phone_hit_result}}</td>
            </tr>
          </table>
        </td>
        <td v-if="data.sensitive_info[16].check_result == 'result_detail_info'" valign="top">
          <table v-for="list in data.sensitive_info[16].result_detail_info.idcard_correlation_name_info" class="full subtable">
            <tr>
              <td class="subtitle">【{{list.name}}】</td>
            </tr>
            <tr>
              <td>{{list.latest_present_tim}} 最后一次出现</td>
            </tr>
          </table>
        </td>
        <td v-else colspan="2" class="pd_x">未发现</td>
        <td class="half quarter pd_x">{{data.sensitive_info[16].risk_level.includes('风险：') ? data.sensitive_info[16].risk_level : '风险：' + data.sensitive_info[16].risk_level}}</td>
      </tr>
    </table>
    <!-- 通信检测 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="2">
          <h2>通信检测 | {{data.communication_detection.the_last_call_time}}</h2>
        </td>
      </tr>
      <tr>
        <td class="half pd_x">静默次数</td>
        <td class="half pd_x">{{data.communication_detection.silent_count}}</td>
      </tr>
      <tr>
        <td class="half pd_x">平均静默时长</td>
        <td class="half pd_x">{{data.communication_detection.average_silent_duration_time}}</td>
      </tr>
      <tr>
        <td class="half pd_x">最近一次静默时长</td>
        <td class="half pd_x">{{data.communication_detection.the_last_silent_duration_time}}</td>
      </tr>
      <tr>
        <td class="half pd_x">夜间活动情况</td>
        <td class="half pd_x">{{data.communication_detection.night_activities}}</td>
      </tr>
    </table>
    <!-- 通话月份分布 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="9">
          <h2>通话月份分布</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x">月份</td>
        <td class="pd_x">通话号总数</td>
        <td class="pd_x">互通号占比</td>
        <td class="pd_x">呼叫次数</td>
        <td class="pd_x">主叫次数</td>
        <td class="pd_x">主叫时长(分钟)</td>
        <td class="pd_x">被叫次数</td>
        <td class="pd_x">被叫时长(分钟)</td>
        <td class="pd_x">短信数量</td>
      </tr>
      <tr v-for="list in data.communication_month_info">
        <td class="pd_x">{{list.month}}</td>
        <td class="pd_x">{{list.call_phone_number_count}}</td>
        <td class="pd_x">{{list.two_way_phone_number_per}}</td>
        <td class="pd_x">{{list.call_count}}</td>
        <td class="pd_x">{{list.calling_count}}</td>
        <td class="pd_x">{{list.calling_duration_time}}</td>
        <td class="pd_x">{{list.called_count}}</td>
        <td class="pd_x">{{list.called_duration_time}}</td>
        <td class="pd_x">{{list.sms_count}}</td>
      </tr>
    </table>
    <!-- 通话时间段分布 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">
          <h2>通话时间段分布</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x">时间段</td>
        <td class="pd_x">主叫次数</td>
        <td class="pd_x">被叫次数</td>
        <td class="pd_x">主叫时长(分钟)</td>
        <td class="pd_x">被叫时长(分钟)</td>
      </tr>
      <tr v-for="list in data.communication_time_bucket_info">
        <td class="pd_x">{{list.time_bucket}}</td>
        <td class="pd_x">{{list.calling_count}}</td>
        <td class="pd_x">{{list.called_count}}</td>
        <td class="pd_x">{{list.calling_duration_time}}</td>
        <td class="pd_x">{{list.called_duration_time}}</td>
      </tr>
    </table>
    <!-- 通话时长分布 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="5">
          <h2>通话时长分布</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x">通话时长(分钟)</td>
        <td class="pd_x">主叫次数</td>
        <td class="pd_x">被叫次数</td>
        <td class="pd_x">主叫时长(分钟)</td>
        <td class="pd_x">被叫时长(分钟)</td>
      </tr>
      <tr v-for="list in data.communication_time_duration_info">
        <td class="pd_x">{{list.time_duration}}</td>
        <td class="pd_x">{{list.calling_count}}</td>
        <td class="pd_x">{{list.called_count}}</td>
        <td class="pd_x">{{list.calling_duration_time}}</td>
        <td class="pd_x">{{list.called_duration_time}}</td>
      </tr>
    </table>
    <!-- 通话区域分布（城市） -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="10">
          <h2>通话区域分布（城市）</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x" width="10%">地区</td>
        <td class="pd_x" width="10%">联系次数</td>
        <td class="pd_x" width="10%">主叫次数</td>
        <td class="pd_x" width="10%">被叫次数</td>
        <td class="pd_x" width="10%">主叫时间(分钟)</td>
        <td class="pd_x" width="10%">被叫时间(分钟)</td>
        <td class="pd_x" width="10%">主叫次数百分比</td>
        <td class="pd_x" width="10%">被叫次数百分比</td>
        <td class="pd_x" width="10%">主叫时间百分比</td>
        <td class="pd_x" width="10%">被叫时间百分比</td>
      </tr>
      <tr v-for="list in data.communication_city_info">
        <td class="pd_x">{{list.city}}</td>
        <td class="pd_x">{{list.call_count}}</td>
        <td class="pd_x">{{list.calling_count}}</td>
        <td class="pd_x">{{list.called_count}}</td>
        <td class="pd_x">{{list.calling_duration_time}}</td>
        <td class="pd_x">{{list.called_duration_time}}</td>
        <td class="pd_x">{{list.calling_count_per}}</td>
        <td class="pd_x">{{list.called_count_per}}</td>
        <td class="pd_x">{{list.calling_duration_time_per}}</td>
        <td class="pd_x">{{list.called_duration_time_per}}</td>
      </tr>
    </table>
    <!-- 通话区域分布（省份） -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="10">
          <h2>通话区域分布（省份）</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x" width="10%">地区</td>
        <td class="pd_x" width="10%">联系次数</td>
        <td class="pd_x" width="10%">主叫次数</td>
        <td class="pd_x" width="10%">被叫次数</td>
        <td class="pd_x" width="10%">主叫时间(分钟)</td>
        <td class="pd_x" width="10%">被叫时间(分钟)</td>
        <td class="pd_x" width="10%">主叫次数百分比</td>
        <td class="pd_x" width="10%">被叫次数百分比</td>
        <td class="pd_x" width="10%">主叫时间百分比</td>
        <td class="pd_x" width="10%">被叫时间百分比</td>
      </tr>
      <tr v-for="list in data.communication_province_info">
        <td class="pd_x">{{list.province}}</td>
        <td class="pd_x">{{list.call_count}}</td>
        <td class="pd_x">{{list.calling_count}}</td>
        <td class="pd_x">{{list.called_count}}</td>
        <td class="pd_x">{{list.calling_duration_time}}</td>
        <td class="pd_x">{{list.called_duration_time}}</td>
        <td class="pd_x">{{list.calling_count_per}}</td>
        <td class="pd_x">{{list.called_count_per}}</td>
        <td class="pd_x">{{list.calling_duration_time_per}}</td>
        <td class="pd_x">{{list.called_duration_time_per}}</td>
      </tr>
    </table>
    <!-- 出行信息 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="6">
          <h2>出行信息</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x">时间段</td>
        <td class="pd_x">出行时间</td>
        <td class="pd_x">回程时间</td>
        <td class="pd_x">出行地</td>
        <td class="pd_x">目的地</td>
        <td class="pd_x">行程持续时间</td>
      </tr>
      <tr v-for="list in data.travel_info">
        <td class="pd_x">{{list.during_type}}</td>
        <td class="pd_x">{{list.start_time}}</td>
        <td class="pd_x">{{list.return_time}}</td>
        <td class="pd_x">{{list.departure_place}}</td>
        <td class="pd_x">{{list.destination_place}}</td>
        <td class="pd_x">{{list.duration_days}}</td>
      </tr>
      <tr v-if="!data.travel_info.length">
        <td class="tc" colspan="6">未发现</td>
      </tr>
    </table>
    <!-- 最近六个月消费情况 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" :colspan="data.bill_info.length">
          <h2>近六个月消费情况</h2>
        </td>
      </tr>
      <tr>
        <td v-for="list in data.bill_info" class="pd_x">{{list.month}}</td>
      </tr>
      <tr>
        <td v-for="list in data.bill_info" class="pd_x">{{list.consumption_amount}}</td>
      </tr>
    </table>
    <!-- 充值记录 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="4">
          <h2>充值记录</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x">充值时间</td>
        <td class="pd_x">充值次数</td>
        <td class="pd_x">充值总金额</td>
        <td class="pd_x">最大单笔充值金额</td>
      </tr>
      <tr v-for="list in data.recharge_info">
        <td class="pd_x">{{list.recharge_time}}</td>
        <td class="pd_x">{{list.recharge_count}}</td>
        <td class="pd_x">{{list.recharge_amount}}</td>
        <td class="pd_x">{{list.recharge_max}}</td>
      </tr>
      <tr v-if="!data.recharge_info.length">
        <td class="tc" colspan="4">未发现</td>
      </tr>
    </table>
    <!-- 常用联系人TOP30通话时段统计 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="11">
          <h2>常用联系人TOP30通话时段统计</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x">联系次数排名</td>
        <td class="pd_x">联系次数</td>
        <td class="pd_x">号码</td>
        <td class="pd_x">互联网标识</td>
        <td class="pd_x">标识类型</td>
        <td class="pd_x">归属地</td>
        <td class="pd_x">近24小时<br>
          <small>被/主叫次数</small><br>
          <small>被/主叫时长(分钟)</small>
        </td>
        <td class="pd_x">1-7天<br>
          <small>被/主叫次数</small><br>
          <small>被/主叫时长(分钟)</small>
        </td>
        <td class="pd_x">7-30天<br>
          <small>被/主叫次数</small><br>
          <small>被/主叫时长(分钟)</small>
        </td>
        <td class="pd_x">30-90天<br>
          <small>被/主叫次数</small><br>
          <small>被/主叫时长(分钟)</small>
        </td>
        <td class="pd_x">90-180天<br>
          <small>被/主叫次数</small><br>
          <small>被/主叫时长(分钟)</small>
        </td>
      </tr>
      <tr v-if="index < 30" v-for="(list, index) in data.label_info" :class="{bg_warn: list.label_type.includes('紧急')}">
        <td class="pd_x">{{list.sort_index}}</td>
        <td class="pd_x">{{list.contact_count}}</td>
        <td class="pd_x">{{list.phone_number}}</td>
        <td class="pd_x">{{list.label_name}}</td>
        <td class="pd_x">{{list.label_type}}</td>
        <td class="pd_x">{{list.phone_location}}</td>
        <td class="pd_x">{{list.call_distribute ? list.call_distribute.called_count_24h : '-'}}/{{list.call_distribute ? list.call_distribute.calling_count_24h : '-'}}<br>{{list.call_distribute ? list.call_distribute.called_len_24h : '-'}}/{{list.call_distribute ? list.call_distribute.calling_len_24h : '-'}}</td>
        <td class="pd_x">{{list.call_distribute ? list.call_distribute.called_count_7d : '-'}}/{{list.call_distribute ? list.call_distribute.calling_count_7d : '-'}}<br>{{list.call_distribute ? list.call_distribute.called_len_7d : '-'}}/{{list.call_distribute ? list.call_distribute.calling_len_7d : '-'}}</td>
        <td class="pd_x">{{list.call_distribute ? list.call_distribute.called_count_30d : '-'}}/{{list.call_distribute ? list.call_distribute.calling_count_30d : '-'}}<br>{{list.call_distribute ? list.call_distribute.called_len_30d : '-'}}/{{list.call_distribute ? list.call_distribute.calling_len_30d : '-'}}</td>
        <td class="pd_x">{{list.call_distribute ? list.call_distribute.called_count_90d : '-'}}/{{list.call_distribute ? list.call_distribute.calling_count_90d : '-'}}<br>{{list.call_distribute ? list.call_distribute.called_len_90d : '-'}}/{{list.call_distribute ? list.call_distribute.calling_len_90d : '-'}}</td>
        <td class="pd_x">{{list.call_distribute ? list.call_distribute.called_count_180d : '-'}}/{{list.call_distribute ? list.call_distribute.calling_count_180d : '-'}}<br>{{list.call_distribute ? list.call_distribute.called_len_180d : '-'}}/{{list.call_distribute ? list.call_distribute.calling_len_180d : '-'}}</td>
      </tr>
      <tr v-if="!data.label_info.length">
        <td class="tc" colspan="11">未发现</td>
      </tr>
    </table>
    <!-- 通话数据分析 -->
    <table class="full border">
      <tr>
        <td class="title pd_x" colspan="11">
          <h2>通话数据分析</h2>
        </td>
      </tr>
      <tr>
        <td class="pd_x">联系次数排名</td>
        <td class="pd_x">联系次数</td>
        <td class="pd_x">号码</td>
        <td class="pd_x">互联网标识</td>
        <td class="pd_x">标识类型</td>
        <td class="pd_x">归属地</td>
        <td class="pd_x">联系时间(分)</td>
        <td class="pd_x">主叫次数</td>
        <td class="pd_x">被叫次数</td>
        <td class="pd_x">最早通话时间</td>
        <td class="pd_x">最近通话时间</td>
      </tr>
      <tr v-for="list in data.label_info" :class="{bg_warn: list.label_type.includes('紧急')}">
        <td class="pd_x">{{list.sort_index}}</td>
        <td class="pd_x">{{list.contact_count}}</td>
        <td class="pd_x">{{list.phone_number}}</td>
        <td class="pd_x">{{list.label_name}}</td>
        <td class="pd_x">{{list.label_type}}</td>
        <td class="pd_x">{{list.phone_location}}</td>
        <td class="pd_x">{{list.contact_duration}}</td>
        <td class="pd_x">{{list.calling_count}}</td>
        <td class="pd_x">{{list.called_count}}</td>
        <td class="pd_x">{{list.earliest_time || '未发现'}}</td>
        <td class="pd_x">{{list.latest_time || '未发现'}}</td>
      </tr>
      <tr v-if="!data.label_info.length">
        <td class="tc" colspan="11">未发现</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OperatorReport',
  data () {
    return {

    }
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
