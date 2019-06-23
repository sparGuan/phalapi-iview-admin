<style lang="stylus" scoped>
.carmaintenance
  background: #f6f6f6
  margin-top: 10px
  .cf:before, .cf:after
    content: ''
    display: table
  .cf:after
    clear: both
  .cf
    zoom: 1
  .fr
    float: right
  .fl
    float: left
  .wrap
    width: 1187px
    margin: 0 auto
    padding-bottom: 32px
  .carname
    margin: 0 0 1px 0
    height: 79px
    border-bottom: 2px solid #cbcbcb
    background-color: #fff
    p
      text-align: center
      color: #7b7b7b
      font-size: 12px
    .name
      line-height: 50px
      color: #393939
      font-size: 22px
      font-weight: 600
      position: relative
    p span
      margin-right: 30px
    .update
      width: 58px
      height: 20px
      font-size: 12px
      line-height: 20px
      display: block
      font-weight: 100
      color: #6b6b6b
      border: 1px solid #999
      border-radius: 4px
      position: absolute
      right: 28px
      bottom: 0px
      cursor: pointer
    .update_col
      color: #a7a7a7
      border: 1px solid #666
  .cartype
    width: 100%
    padding: 26px 30px 33px 30px
    background-color: #fff
    margin-bottom: 10px
    border-top: 1px solid #cbcbcb
  .cartype_list
    border-left: 1px solid #cbcbcb
    border-top: 1px solid #cbcbcb
  .cartype_list li
    width: 25%
    height: 58px
    padding: 0 17px
    line-height: 58px
    float: left
    font-size: 14px
    overflow: hidden
    color: #9d9d9d
    border-bottom: 1px solid #cbcbcb
    border-right: 1px solid #cbcbcb
  .cartype_list li span
    display: block
    float: right
    color: #000
  .report_box
    background-color: #fff
  .report_box .name
    margin: 0 29px
    text-align: center
    line-height: 50px
    color: #393939
    font-size: 22px
    font-weight: 600
    border-bottom: 1px solid #cbcbcb
  .report_type
    margin: 0 85px
    overflow: hidden
  .report_type li
    float: left
    width: 500px
    height: 120px
    padding-right: 15px
  .report_type .type
    font-weight: 600
    line-height: 40px
    color: #666
    font-size: 16px
  .report_type .point
    cursor: pointer
  .report_type .pointer
    cursor: pointer
  .report_type .pointer1
    // cursor: pointer
  .report_type .poin_cur
    cursor: pointer
  .report_type i
    width: 10px
    height: 14px
    display: block
    float: left
    background-color: #1f64ff
    margin: 12px 5px 0 0
  .report_type .col_f8e71c
    background-color: #f8e71c
  .report_type .col_bd10e0
    background-color: #bd10e0
  .report_type .col_417505
    background-color: #417505
  .tab_wrap .name .col_f8e71c
    background-color: #f8e71c
  .tab_wrap .name .col_bd10e0
    background-color: #bd10e0
  .tab_wrap .name .col_417505
    background-color: #417505
  .report_type p
    line-height: 25px
    color: #a7a7a7
    font-size: 14px
  .report_type p label
    display: inline-block
    position: relative
    color: #343434
    padding-right: 15px
    margin-right: 10px
  .report_type p .colff5
    color: #ff5c29
  /* .report_type p b
    width: 14px
    height: 14px
    text-align: center
    border-radius: 50%
    line-height: 6px
    position: absolute
    top: -4px
    right: -4px
    background: url('/static/icon/newLog.png') no-repeat */
  .report_tab
    .report_tab_ul
      overflow: hidden
      background-color: #f6f6f6
      li
        width: 20%
        height: 43px
        line-height: 43px
        text-align: center
        float: left
        border: 1px solid #ecebeb
        border-right: none
        cursor: pointer
        &:last-child
          border-right: 1px solid #ecebeb
      a
        display: block
        width: 55%
        margin: 0 auto
        position: relative
        color: #333
        font-size: 16px
      i
        width: 6px
        height: 14px
        display: block
        position: absolute
        background-color: #dbdbdb
        top: 15px
        left: 23px
      li.tab_click3 i
        left: 15px
      .color
        left: 0
      .cur
        width: 19.9%
        height: 43px
        border-bottom: 1px solid #fff
        background-color: #fff
        font-weight: 600
      .act
        background-color: #1f64ff
      .act1
        background-color: #f8e71c
      .act2
        background-color: #bd10e0
      .act3
        background-color: #417505
  .tab_click4 a
    color: #ff754a
    width: 60%
  .tab_wrap .record .record_col
    background-color: #f8e71c
  .tab_wrap
    background-color: #fff
  .tab_wrap .name
    text-align: center
    font-size: 20px
    font-weight: 600
    width: 1142px
    margin: 0 auto
    height: 99px
    color: #666
    line-height: 100px
    border-bottom: 1px solid #ecebeb
    position: relative
  .tab_wrap .name_p
    border-bottom: none
    height: 70px
  .tab_wrap .name i
    width: 8px
    height: 16px
    display: block
    position: absolute
    background-color: #1f64ff
    top: 42px
    left: 475px
  .tab_wrap .name i.tab_ipos
    left: 463px
  .tab_wrap .name label
    font-weight: 100
    font-size: 12px
    color: #c5c5c5
    cursor: pointer
    padding-left: 4px
  .tab_wrap .name label span
    display: inline-block
    width: 11px
    height: 11px
    margin-right: 4px
    background: url('/static/icon/questionl.png') no-repeat
  .tab_wrap .name a
    color: #ff0000
    position: absolute
    bottom: 2px
    right: 0
    font-size: 14px
    font-weight: 100
    line-height: 20px
    cursor: pointer
  .record
    width: 1142px
    margin: 0 auto
    line-height: 50px
    font-size: 14px
    font-weight: bold
    color: #666
  .record i
    margin: 20px 8px 0 0px
    width: 4px
    background-color: #1f64ff
    height: 10px
    display: block
    float: left
  .tab_wrap_img
    width: 285px
    height: 137px
    overflow: hidden
    margin: 0 75px 0 110px
    float: left
  .tab_wrap .mar_left
    margin-right: 107px
  .tab_wrap_img img
    width: 285px
    height: 137px
  .tab_wrap .list
    float: left
    width: 130px
  .tab_wrap .list li
    font-size: 14px
    line-height: 30px
    overflow: hidden
  .tab_wrap .list i
    width: 12px
    height: 12px
    display: block
    margin: 10px 5px 0 0px
    float: left
    background: url('/static/icon/succesm.png') 0 0 no-repeat
  .tab_wrap .list i.err
    background: url('/static/icon/errtip.png') 0 0 no-repeat
  .tab_wrap .time
    font-size: 18px
    color: #999
    text-align: center
    line-height: 55px
  .tab_wrap .time span
    padding-left: 26px
    background: url('/static/icon/icon_zan.png') 2px no-repeat
  .tab_wrap .linhei
    height: 150px
    line-height: 150px
  .tab_wrap .time label
    color: #ff754a
  .energer_img
    padding: 0 36px 15px 0
  .energer_img img
    display: block
    float: left
    margin-left: 46px
  .changbox_img
    float: left
  .list_pad45
    padding-top: 45px
  .list_one
    margin-left: 155px
    float: left
  .list_one li
    float: left
    width: 130px
    font-size: 14px
    height: 35px
    line-height: 35px
    overflow: hidden
  .list_one li i
    width: 12px
    height: 12px
    display: block
    margin: 13px 5px 0 0px
    float: left
    background: url('/static/icon/succesm.png') 0 0 no-repeat
  .list_one li .err
    width: 12px
    height: 12px
    display: block
    margin: 13px 5px 0 0px
    float: left
    background: url('/static/icon/errtip.png') 0 0 no-repeat
  .list_time
    overflow: hidden
    padding-bottom: 60px
  .list_time li
    margin-left: 90px
    height: 60px
    float: left
    width: 460px
    border-bottom: 1px solid #ecebeb
    line-height: 75px
    overflow: hidden
    font-size: 14px
  .list_time li label
    display: block
    float: left
    width: 230px
    color: #a2a2a2
  .licheng
    width: 910px
    margin-top: 100px
  .correct
    width: 225px
    height: 92px
    position: relative
  .correct i
    display: block
    position: absolute
    width: 18px
    height: 91px
    background: url('/static/icon/flagg.png') 0 0 no-repeat
    right: 0
    bottom: -3px
    z-index: 1
  .correct p
    text-align: right
    font-size: 12px
    padding-right: 20px
    line-height: 20px
  .correct .time_p1
    color: #858585
  .correct .time_p1
    color: #388058
  .pos_box
    position: relative
  .line
    width: 743px
    margin-left: 155px
    float: left
    border: 1px solid #ecebeb
  .line_das
    width: 72px
    float: left
    border: 1px dashed #ff541f
  .radius
    width: 184px
    height: 70px
    border: 1px solid #ff541f
    position: absolute
    top: -36px
    right: 32px
    padding-top: 10px
    border-radius: 4px
  .radius p
    text-align: center
    line-height: 26px
    font-size: 15px
    font-weight: 600
  .radius .font_col
    color: #ff6231
    font-size: 14px
    font-weight: 100
  .min_hei
    min-height: 100px
  .table_box
    width: 1064px
    margin: 0 auto
    padding-bottom: 60px
    padding-top: 35px
  .table_box table
    width: 1064px
    font-size: 14px
    border-top: 2px solid #ecebeb
  .table_box table th
    border-bottom: 1px solid #ecebeb
  .table_box table tr
    border-bottom: 1px solid #ecebeb
  .table_box table td
    text-align: center
  .table_tit
    height: 50px
    line-height: 50px
    color: #a0a0a0
    font-size: 14px
  .table_cent .tet
    width: 654px
    text-align: left
    line-height: 30px
    overflow: hidden
    word-break: break-all
  .fixT
    width: 1200px
    position: fixed
    top: 0
    z-index: 999
  .marg10
    margin-top: 10px
  .mar_140
    margin-right: 108px
  .light_1
    color: #ff754a
  .light_2
    color: #ff754a
  .light_3
    color: #ff754a
  .light_4
    color: #ff754a
  .light_5
    color: #ff754a
  .top
    padding-top: 30px
  /* 弹框 */
  .report_pos
    position: fixed
    background: rgba(189, 180, 180, 0.5)
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: 9999
    display: none
  .report_cent
    width: 412px
    height: 200px
    padding: 0 20px
    background: #fff
    position: fixed
    top: 50%
    left: 50%
    margin-top: -100px
    border-radius: 8px
    margin-left: -206px
  .report_cent .mReset
    color: #193544
    height: 33px
    font-weight: 600
    line-height: 33px
    font-size: 16px
    border-bottom: 1px solid #eee
  .report_cent .close
    display: inline-block
    float: right
    font-size: 24px
    line-height: 30px
    cursor: pointer
  .report_cent .mResucce
    margin-top: 20px
  .report_cent p
    text-align: center
    line-height: 30px
    height: 50px
  .report_cent .mBtnEnsure
    margin: 20px auto
    display: block
    width: 118px
    height: 38px
    font-size: 14px
    color: #fff
    background: rgb(255, 84, 31)
    line-height: 38px
    text-align: center
    border-radius: 10px
    cursor: pointer
    border: none
</style>

<template>
  <div class="commontablewrap carmaintenance">
    <div class="wrap">
      <div class="carname">
        <p class="name updateStatus">
          {{data.brand}} - {{data.seriesName}}
        </p>
        <p>
          报告编号：<span>{{data.reportNo}}</span>
          报告生成时间：<span>{{data.makeReportDate}}</span>
          报告更新时间：<span>{{data.updateTime}}</span>
        </p>
      </div>
      <div class="cartype">
        <ul class="cartype_list cf">
          <li>VIN码 <span>{{data.vin}}</span></li>
          <li>生产厂商<span>{{data.manufacturer}}</span></li>
          <li>生产年份<span>{{data.makeDate}}</span></li>
          <li>产地 <span>{{data.productionArea}}</span></li>
          <li>车辆类型<span>{{data.carType}}</span></li>
          <li>变速箱类型<span>{{data.transmissionType}}</span></li>
          <li>排量 <span>{{data.displacement}}</span></li>
          <li>排放标准<span>{{data.effluentStandard || '--'}}</span></li>
        </ul>
      </div>
      <!--报告概要-->
      <div class="report_box">
        <p class="name">报告概要</p>
        <ul class="report_type">
          <li>
            <div class="type"><i></i>事故分析</div>
            <p>
              车身结构维修记录：
              <label v-if="!data.constructAnalyzeRepairRecords">无</label>
              <label v-else class="pointer1">有 <span class="colff5">{{data.constructAnalyzeRepairRecords.length}}</span> 条记录 <b></b></label>
              疑似火烧维修记录：
              <label>{{data.carFireFlag ? '有' : '无'}}</label>
            </p>
            <p>
              疑似水泡维修记录：
              <label>{{data.carWaterFlag ? '有' : '无'}}</label>
            </p>
          </li>
          <li>
            <div class="type"><i class="col_f8e71c"></i>车况分析</div>
            <p>
              重要组成部件维修记录：
              <label v-if="!data.componentAnalyzeRepairRecords">无</label>
              <label v-else class="pointer1">有 <span class="colff5">{{data.componentAnalyzeRepairRecords.length}}</span> 条记录 <b></b></label>
            </p>
            <p>
              外观覆盖件维修记录：
              <label v-if="!data.outsideAnalyzeRepairRecords">无</label>
              <label v-else class="pointer1">有 <span class="colff5">{{data.outsideAnalyzeRepairRecords.length}}</span> 条记录 <b></b></label>
            </p>
          </li>
          <li>
            <div class="type"><i class="col_bd10e0"></i>里程分析</div>
            <p>
              里程表记录：
              <label>{{data.mileageIsNormalFlag ? '正常' : '异常'}}</label>
            </p>
            <!-- 如果里程表异常的话就不显示，如果最后的公里数为0的话也不显示 -->
            <p v-if="data.mileageIsNormalFlag">
              最后公里数：<label>{{data.normalRepairRecords[data.normalRepairRecords.length-1].mileage}}公里</label>
              预估至今公里数：<label>{{data.mileageEstimate}}公里</label>
            </p>
          </li>
          <li>
            <div class="type"><i class="col_417505"></i>车主爱惜度</div>
            <p>
              最后一次保养时间：<label>{{data.lastMainTainTime || '--'}}</label>
              年平均保养次数：<label>{{data.mainTainTimes || '--'}}</label>
            </p>
            <p>
              最后一次进店时间：<label>{{data.lastRepairTime || '--'}}</label>
              年平均行驶里程：<label>{{data.mileageEveryYear}}公里/年</label>
            </p>
          </li>
        </ul>
      </div>
      <!--事故,车况，里程，车主爱惜度，普通报告-->
      <div class="report_tab">
        <!-- <ul class="report_tab_ul cf">
          <li class="tab_click cur"><a> <i class="act"></i> 事故分析</a></li>
          <li class="tab_click1"><a> <i></i> 车况分析</a></li>
          <li class="tab_click2"><a> <i></i> 里程分析</a></li>
          <li class="tab_click3"><a> <i class="color"></i> 车主爱惜度</a></li>
          <li class="tab_click4"><a> 普通报告（9条）</a></li>
        </ul> -->

        <div class="tab_div">
          <div id="tab" class="tab_wrap cf">
            <p class="name"><i></i>事故分析 <label @click="toNewPage('http://api.chaboshi.cn/new_report/showPcRule')"><span></span>解析规则</label><!-- <a class="plainRep">详细记录 &gt;&gt;</a> --></p>
            <p class="record cf"><i></i>车身结构维修记录</p>
            <div class="tab_wrap_img mar_left">
              <img src="/static/icon/carbody.png">
            </div>

            <div class="cf">
              <ul class="list" style="width: 100px;">
                <li>
                  <i></i>A柱
                </li>
                <li>
                  <i></i>B柱
                </li>
                <li>
                  <i></i>C柱
                </li>
                <li>
                  <i></i>D柱
                </li>
              </ul>
              <ul class="list" style="width: 145px;">
                <li>
                  <i></i>左侧围
                </li>
                <li>
                  <i></i>右侧围
                </li>
                <li>
                  <i></i>前减震器座
                </li>
                <li>
                  <i></i>后减震器座
                </li>
              </ul>
              <ul class="list" style="width: 115px;">
                <li>
                  <i></i>前纵梁
                </li>
                <li>
                  <i></i>后纵梁
                </li>
                <li>
                  <i></i>防火墙
                </li>
                <li>
                  <i></i>后围板
                </li>
              </ul>
              <ul class="list">
                <!-- <li>
                  <i></i>前横梁
                </li>-->
                <!--<li>
                  <i></i>后横梁
                </li>-->
                <!-- <li>
                  <i></i>车顶横梁
                </li>-->
                <li>
                  <i></i>车身底板
                </li>
                <li>
                  <i :class="{err: data.carFireFlag}"></i>水泡
                </li>
                <li>
                  <i :class="{err: data.carWaterFlag}"></i>火烧
                </li>
              </ul>
              <ul class="list">
                <!-- <li>
                  <i></i>前轮旋
                </li>
                <li>
                  <i></i>后轮旋
                </li>-->
              </ul>
            </div>

            <div v-if="data.constructAnalyzeRepairRecords && data.constructAnalyzeRepairRecords.length" class="table_box">
              <table>
                <tr class="table_tit">
                  <th style="width: 130px;">日期</th>
                  <th style="width: 130px;">公里数</th>
                  <th style="width: 150px;">维修类型</th>
                  <th style="width:654px;">内容</th>
                </tr>
                <tr v-for="list in data.constructAnalyzeRepairRecords" class="table_cent">
                  <td style="width: 130px;">{{list.date}}</td>
                  <td style="width: 130px;">
                    {{list.mileage}}
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;">{{list.type}}</div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目：<span v-html="list.content"></span>
                      <br>材料：{{data.materal}}
                      <br>备注：{{list.remark}}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <p v-else class="time"><span></span>此车没有车身结构维修记录！</p>

          </div>

          <!--车况分析-->
          <div id="tab1" class="tab_wrap marg10 cf">
            <p class="name"><i class="col_f8e71c"></i>车况分析 <label @click="toNewPage('http://api.chaboshi.cn/new_report/showPcRule')"><span></span>解析规则</label><!-- <a class="plainRep">详细记录 &gt;&gt;</a> --></p>
            <p class="record"><i class="record_col"></i>重要组成部件维修记录</p>
            <div class="energer_img cf">
              <img src="/static/icon/energer.png">
              <img style="padding-top: 40px" src="/static/icon/changbox.png">
              <div class="list_pad45 cf">
                <ul class="list_one">
                  <li>
                    <i></i>发动机
                  </li>
                  <li>
                    <i></i>前/后桥
                  </li>
                  <li>
                    <i></i>转向系统
                  </li>
                  <li>
                    <i></i>空调系统
                  </li>
                </ul>
                <ul class="list_one">
                  <li>
                    <i></i>变速箱
                  </li>
                  <li>
                    <i></i>悬架系统
                  </li>
                  <li>
                    <i></i>制动系统
                  </li>
                  <li>
                    <i></i>气囊安全带
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="data.componentAnalyzeRepairRecords && data.componentAnalyzeRepairRecords.length" class="table_box">
              <table>
                <tr class="table_tit">
                  <th style="width: 130px;">日期</th>
                  <th style="width: 130px;">公里数</th>
                  <th style="width: 150px;">维修类型</th>
                  <th style="width:654px;">内容</th>
                </tr>
                <tr v-for="list in data.componentAnalyzeRepairRecords" class="table_cent">
                  <td style="width: 130px;">{{list.date}}</td>
                  <td style="width: 130px;">
                    {{list.mileage}}
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;">{{list.type}}</div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目：<span v-html="list.content"></span>
                      <br>材料：{{data.materal}}
                      <br>备注：{{list.remark}}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <p v-else class="time"><span></span>此车没有重要组成部件维修记录！</p>

            <p class="record"><i class="record_col"></i>车身覆盖件维修记录</p>
            <div class="tab_wrap_img mar_140">
              <img src="/static/icon/outline.png">
            </div>

            <div class="cf">
              <ul class="list">
                <li>
                  <i></i>左前门
                </li>
                <li>
                  <i></i>左后门
                </li>
                <li>
                  <i></i>右后门
                </li>
                <li>
                  <i></i>右前门
                </li>
              </ul>
              <ul class="list">
                <li>
                  <i></i>左前翼子板
                </li>
                <li>
                  <i></i>左后翼子板
                </li>
                <li>
                  <i></i>右后翼子板
                </li>
                <li>
                  <i></i>右前翼子板
                </li>
              </ul>
              <ul class="list">
                <li>
                  <i></i>前机盖
                </li>
                <li>
                  <i></i>后尾门
                </li>
                <li>
                  <i></i>前保险杠
                </li>
                <li>
                  <i></i>后保险杠
                </li>
              </ul>
              <ul class="list">
                <li>
                  <i></i>车顶
                </li>
                <li>
                  <i></i>底大边
                </li>
                <li>
                  <i></i>挡风玻璃
                </li>
              </ul>
            </div>

            <div v-if="data.outsideAnalyzeRepairRecords && data.outsideAnalyzeRepairRecords.length" class="table_box">
              <table>
                <tr class="table_tit">
                  <th style="width: 130px;">日期</th>
                  <th style="width: 130px;">公里数</th>
                  <th style="width: 150px;">维修类型</th>
                  <th style="width:654px;">内容</th>
                </tr>
                <tr v-for="list in data.outsideAnalyzeRepairRecords" class="table_cent">
                  <td style="width: 130px;">{{list.date}}</td>
                  <td style="width: 130px;">
                    {{list.mileage}}
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;">{{list.type}}</div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目：<span v-html="list.content"></span>
                      <br>材料：{{data.materal}}
                      <br>备注：{{list.remark}}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <p v-else class="time"><span></span>此车没有车身覆盖件维修记录！</p>
          </div>

          <!--里程分析-->
          <div id="tab2" class="tab_wrap marg10">
            <p class="name"><i class="col_bd10e0"></i>里程分析 <label @click="toNewPage('http://api.chaboshi.cn/new_report/showPcRule')"><span></span>解析规则</label><!-- <a class="plainRep">详细记录 &gt;&gt;</a> --></p>
            <div class="licheng cf">
              <div class="correct fl">
                <p class="time_p">首次进厂时间/公里数</p>
                <p class="time_p1">{{data.normalRepairRecords[0].date}} / {{data.normalRepairRecords[0].mileage}}公里</p>
                <i></i>
              </div>
              <div class="correct fr">
                <p class="time_p">末次进厂时间/公里数</p>
                <p class="time_p1">{{data.normalRepairRecords[data.normalRepairRecords.length-1].date}} / {{data.normalRepairRecords[data.normalRepairRecords.length-1].mileage}}公里</p>
                <i></i>
              </div>
            </div>
            <div class="pos_box cf">
              <p class="line"></p>
              <p class="line_das"></p>
              <div class="radius">
                <p>查博士预估行驶里程 </p>
                <p class="font_col">约等于{{data.mileageEstimate}}公里</p>
              </div>
            </div>
            <div class="min_hei">
              <ul class="error cf">
              </ul>
            </div>
          </div>
          <!--车主爱惜度-->
          <div id="tab3" class="tab_wrap marg10">
            <p class="name"><i class="tab_ipos col_417505"></i>车主爱惜度 <label @click="toNewPage('http://api.chaboshi.cn/new_report/showPcRule')"><span></span>解析规则</label><!-- <a class="plainRep">详细记录 &gt;&gt;</a> --></p>
            <ul class="list_time">
              <li>
                <label>最后一次保养时间：</label>
                <span>
                  {{data.lastMainTainTime || '--'}}
                </span>
              </li>
              <li>
                <label>年平均保养次数：</label>
                <span>
                  {{data.mainTainTimes || '--'}}
                </span>
              </li>
              <li>
                <label>最后一次进店时间：</label>
                <span>
                  {{data.lastRepairTime || '--'}}
                </span>
              </li>
              <li>
                <label>年平均行驶里程：</label>
                <span>
                  <span style="float:left">{{data.mileageEveryYear}}公里/年</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!--普通报告-->
        <!-- <div id="tab4" class="tab_wrap" style="display: none">
          <p class="name name_p">详细维修保养记录 </p>
          <div class="table_box">
            <table>
              <tbody>
                <tr class="table_tit">
                  <th style="width: 130px;">日期</th>
                  <th style="width: 130px;">公里数</th>
                  <th style="width: 150px;">维修类型</th>
                  <th style="width:654px;">内容</th>
                </tr>

                <tr class="table_cent">
                  <td style="width: 130px;">2017-04-01</td>
                  <td style="width: 130px;">
                    0
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;">902</div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目： 碰撞;右前部;
                      <br>材料：
                      <br>备注： 非全损、非水淹、非盗抢、10000~20000;
                    </div>
                  </td>
                </tr>
                <tr class="table_cent">
                  <td style="width: 130px;">2017-04-01</td>
                  <td style="width: 130px;">
                    0
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;">902</div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目： 碰撞;右前部;
                      <br>材料：
                      <br>备注： 非全损、非水淹、非盗抢、10000~20000;
                    </div>
                  </td>
                </tr>
                <tr class="table_cent">
                  <td style="width: 130px;">2017-04-19</td>
                  <td style="width: 130px;">
                    900
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;"></div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目： 多部位喷漆;事故车;
                      <br>材料：
                    </div>
                  </td>
                </tr>
                <tr class="table_cent">
                  <td style="width: 130px;">2017-07-01</td>
                  <td style="width: 130px;">
                    0
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;">902</div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目： 碰撞;
                      <br>材料：
                      <br>备注： 非全损、非水淹、非盗抢、~3000;
                    </div>
                  </td>
                </tr>
                <tr class="table_cent">
                  <td style="width: 130px;">2017-07-01</td>
                  <td style="width: 130px;">
                    0
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;">902</div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目： 碰撞;
                      <br>材料：
                      <br>备注： 非全损、非水淹、非盗抢、~3000;
                    </div>
                  </td>
                </tr>
                <tr class="table_cent">
                  <td style="width: 130px;">2017-07-12</td>
                  <td style="width: 130px;">
                    5000
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;"></div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目： 二保;首保;
                      <br>材料： 超级全合成机油(4L，0W20):1; 机油滤清器总成:1;
                    </div>
                  </td>
                </tr>
                <tr class="table_cent">
                  <td style="width: 130px;">2017-12-01</td>
                  <td style="width: 130px;">
                    0
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;">902</div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目： 碰撞֐¤;
                      <br>材料：
                      <br>备注： 非全损、非水淹、非盗抢、3000~5000;
                    </div>
                  </td>
                </tr>
                <tr class="table_cent">
                  <td style="width: 130px;">2017-12-01</td>
                  <td style="width: 130px;">
                    0
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;">902</div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目： 碰撞;
                      <br>材料：
                      <br>备注： 非全损、非水淹、非盗抢、3000~5000;
                    </div>
                  </td>
                </tr>
                <tr class="table_cent">
                  <td style="width: 130px;">2018-07-16</td>
                  <td style="width: 130px;">
                    15000
                  </td>
                  <td style="width: 150px;">
                    <div style="width: 130px;padding:0 10px; word-break: break-all;"></div>
                  </td>
                  <td style="width:654px;">
                    <div class="tet">项目： 右后翼子板轻微修复2015;后杠整块油漆2013;右后翼子板整块重漆2013;右后门修复2015;后杠修复2015;右后门整块重漆2013;事故车;
                      <br>材料：
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import toTop from '@/common/lib/toTop'

export default {
  name: 'CarCollisionData',
  data () {
    return {
      toTop
    }
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {

  },
  methods: {
    toNewPage (u) {
      window.open(u)
    }
  }
}
</script>
