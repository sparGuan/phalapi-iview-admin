<!--
 积分管理
 @author hvv
 @date 2018-11-16
 -->
<style lang="less" scoped>
.pointList {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    b {
      margin-bottom: 20px;
    }
  }
}

.tabs {
  margin: 15px 0;
  span {
    width: 100px;
    cursor: pointer;
    margin-right: 30px;
  }
  .active {
    text-align: center;
    color: rgb(77, 145, 253);
    border-bottom: 2px solid rgb(77, 145, 253);
    margin-top: 2px;
  }
}
.dateSelect{
	margin-top: 20px;
	margin-bottom: 15px;
}
</style>
<template>
	<div>
		<div class="listBox">
			<p class="boxTitle">
				<span class="primary">积分管理</span>
			</p>
			<ul class="pointList">
				<li>
					<b>积分总额</b>
					<span>0</span>
				</li>
				<li>
					<b>本月增加积分</b>
					<span>0</span>
				</li>
				<li>
					<b>本年累计积分</b>
					<span>0</span>
				</li>
			</ul>
			<p class="tabs">
				<span :class="{'active':isLeftTab == index}" v-for="(item,index) in tabList" @click="checkTab(index)">{{item.value}}</span>
			</p>
			<div class="dateSelect" v-if="!isLeftTab">
				<span>积分月份：</span>
				<Select v-model="yearList"  style="width:130px">
					<Option v-for="item in yearList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				年&#x3000;
				<Select v-model="monthList" style="width:130px">
					<Option v-for="item in monthList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>
				月
			</div>
			<div>
				<div class="acquireTable" v-if="!isLeftTab">
					<Table border :columns="columns1" :data='data1'></Table>
					<div class="pageBox font_12">
						<Page :total="100" show-total show-elevator />
					</div>
				</div>
				<div class="ruleTable" v-else>
					<Table border :columns="columns2" :data='data2'></Table>
					<div class="pageBox font_12">
						<Page :total="100" show-total show-elevator />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'limitModify',
  data () {
    return {
      isLeftTab: 0,
      tabList: [
        {
          value: '积分获得明细'
        },
        {
          value: '积分规则说明'
        }
      ],
      yearList: [
        {
          value: '2014',
          label: '2014'
        },
        {
          value: '2015',
          label: '2015'
        },
        {
          value: '2016',
          label: '2016'
        },
        {
          value: '2017',
          label: '2017'
        },
        {
          value: '2018',
          label: '2018'
        }
      ],
      monthList: [
        {
          value: '0',
          label: '0'
        },
        {
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        },
        {
          value: '3',
          label: '3'
        },
        {
          value: '4',
          label: '4'
        }, {
          value: '5',
          label: '5'
        },
        {
          value: '6',
          label: '6'
        },
        {
          value: '7',
          label: '7'
        },
        {
          value: '8',
          label: '8'
        },
        {
          value: '9',
          label: '9'
        }, {
          value: '10',
          label: '10'
        },
        {
          value: '11',
          label: '11'
        },
        {
          value: '12',
          label: '12'
        }
      ],
      columns1: [
        {
          title: '积分来源',
          key: 'pointOrigin',
          align: 'center'
        },
        {
          title: '月累计积分',
          key: 'pointMonth',
          align: 'center'
        },
        {
          title: '年累计积分',
          key: 'pointYear',
          align: 'center'
        }
      ],
      data1: [{}],
      columns2: [
        {
          title: '积分操作',
          key: 'pointHandle',
          align: 'center'
        },
        {
          title: '积分数量',
          key: 'pointNum',
          align: 'center'
        },
        {
          title: '详细说明',
          key: 'detail',
          align: 'center'
        }
      ],
      data2: [{}]
    }
  },
  methods: {
    releaseDate () {},
    search () {},
    confirmDel () {},
    checkTab (index) {
      this.isLeftTab = index
    }
  }
}
</script>
