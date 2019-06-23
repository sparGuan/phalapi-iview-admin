<!--
 权限变更
 @author hvv
 @date 2018-11-16
 -->
<style lang="less" scoped>
.modalContent {
  padding: 0;
}

.labelTxt {
}
</style>
<template>
  <div>
    <div class="listBox">
      <p class="boxTitle">
        <span class="primary">当前账号列表</span>
      </p>
      <Table border :columns="columns1" :data="data1"></Table>
      <div class="pageBox font_12">
        <Page :total="100" show-total show-elevator />
      </div>
    </div>
    <!-- 查看详情 -->
    <Modal v-model="modal1" width="460">
      <p slot="header" style="color:#2d8cf0;">
        <Icon type="ios-information-circle"></Icon>
        <span>账号权限</span>
      </p>
      <div class="modalContent">
        <span class="labelTxt primary font_16 bottom_10">会员信息共享服务</span>
        <RadioGroup v-model="serviceGroup">
          <Radio
            :label="index"
            v-for="(item, index) in serviceList"
            :key="index"
            :disabled="isDisabled"
            >{{ item.value }}</Radio
          >
        </RadioGroup>
      </div>
      <div slot="footer" :style="'display:' + checkDisplay[isDisabled] + ''">
        <Button type="primary" long>确认</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: 'limitModify',
  data () {
    return {
      isDisabled: true,
      modal1: false,
      modal2: false,
      serviceGroup: '',
      checkDisplay: { true: 'none', false: 'block' },
      serviceList: [
        {
          value: '债权管理查询'
        },
        {
          value: '合同管理查询'
        },
        {
          value: '债权管理查询'
        },
        {
          value: '合同管理查询'
        }
      ],
      content: '',
      columns1: [
        {
          title: '账号',
          key: 'account',
          align: 'center'
        },
        {
          title: '名称',
          key: 'name',
          align: 'center'
        },
        {
          title: '用户级别',
          key: 'userLevel',
          align: 'center'
        },
        {
          title: '创建时间',
          key: 'date',
          align: 'center'
        },
        {
          title: '操作',
          key: 'handle',
          align: 'center',
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
                      this.modal1 = true
                      this.isDisabled = true
                    }
                  }
                },
                '查看详情'
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
                      this.modal1 = true
                      this.isDisabled = false
                    }
                  }
                },
                '权限修改'
              )
            ])
          }
        }
      ],
      data1: [{}]
    }
  },
  methods: {
    releaseDate () { },
    search () { },
    confirmDel () { }
  }
}
</script>
