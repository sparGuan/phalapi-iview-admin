<style lang="less" scoped>
.econtractwrap {
  font-size: 14px;
  .changeinfoitem {
    padding: 15px 20px;
    background: #fff;
    margin-bottom: 10px;
    .itemTitle {
      display: flex;
      justify-content: space-between;
      b {
        font-weight: 600;
        border-left: 4px solid #009cff;
        padding-left: 6px;
      }
    }
    .itemContent {
      padding-top: 15px;
      .itemFlex {
        display: flex;
        .itemFlexLeft {
          width: 38%;
          margin-right: 8%;
        }
        .itemFlexRight {
          width: 38%;
        }
      }
      // .createBtn{
      //   margin-right: 10%;
      // }
      .searchIpt {
        width: 300px;
        margin-bottom: 15px;
      }
      .noticeTxt {
        margin-left: 35px;
      }
    }
  }
}
</style>

<template>
  <div class="econtractwrap">
    <div class="changeinfoitem">
      <div class="itemTitle">
        <b>合同模板</b>
      </div>
      <div class="itemContent">
        <Form ref="addPersonalForm" :label-width="130">
          <FormItem label="合同模板类型">
            <Select style="width: 200px">
              <Option :value="0" :key="0">借款合同</Option>
              <Option :value="1" :key="1">借款协议</Option>
              <Option :value="2" :key="2">借条</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Button type="primary">编辑模板</Button>
          </FormItem>
        </Form>
      </div>
    </div>
    <div class="changeinfoitem">
      <div class="itemTitle">
        <b>创建电子合同</b>
      </div>
      <div class="itemContent">
        <Form ref="addPersonalForm" :label-width="130">
          <div class="itemFlex">
            <div class="itemFlexLeft">
              <FormItem label="借款人">
                <Input type="text" placeholder="请输入借款人姓名" />
              </FormItem>
              <FormItem label="借款人身份证">
                <Input type="text" placeholder="请输入借款人身份证号码" />
              </FormItem>
            </div>
            <div class="itemFlexRight">
              <FormItem label="合同模板类型">
                <Select style="width: 200px">
                  <Option :value="0" :key="0">借款合同</Option>
                  <Option :value="1" :key="1">借款协议</Option>
                  <Option :value="2" :key="2">借条</Option>
                </Select>
              </FormItem>
              <FormItem label="借款人账号">
                <Input type="text" placeholder="请输入借款人账号" />
              </FormItem>
            </div>
          </div>
          <FormItem>
            <Button type="primary" class="createBtn">创建合同</Button>
            <!-- <Button type="warning">修改合同</Button> -->
          </FormItem>
        </Form>
        <p class="primary font_12 noticeTxt">
          提示：借款人也必须为本平台注册用户
        </p>
      </div>
      <!-- <div class="itemContent frame" style="width: 150px;height: 80px">
        <div>确定要发送给借款人?</div>
        <div>
          <Button>否</Button>
          <Button>是</Button>
        </div>
      </div> -->
    </div>
    <div class="changeinfoitem">
      <div class="itemTitle">
        <b>待签电子合同</b>
      </div>
      <div class="itemContent">
        <Input
          search
          enter-button
          class="searchIpt"
          placeholder="请输入查询的合同的关键字"
        />
        <div class="itemTable">
          <Table border :columns="columns1" :data="data1"></Table>
        </div>
      </div>
    </div>
    <div class="changeinfoitem">
      <div class="itemTitle">
        <b>已签电子合同</b>
      </div>
      <div class="itemContent">
        <div>
          <Input
            search
            enter-button
            class="searchIpt"
            placeholder="请输入查询的合同的关键字"
          />
        </div>
        <div class="itemTable">
          <Table border :columns="columns2" :data="data2"></Table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EContract',
  data () {
    return {
      addPersonalForm: '',
      columns1: [{
        title: '合同编号',
        key: 'compactNum',
        align: 'center',
        width: 160
      },
      {
        title: '合同签订时间',
        key: 'compactDate',
        align: 'center',
        width: 150
      },
      {
        title: '借款人',
        key: 'borrower',
        align: 'center'
      },
      {
        title: '放款机构',
        key: 'loanCompany',
        align: 'center'
      }, {
        title: '合同创建人',
        key: 'compactCreator',
        align: 'center'
      },
      {
        title: '操作',
        key: 'handle',
        align: 'center',
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'warning',
                size: 'small'
              },
              style: {
                marginRight: '10px'
              },
              on: {
                click: () => { }
              }
            }, '查看'),
            h('Button', {
              props: {
                type: 'primary',
                size: 'small'
              },
              on: {
                click: () => { }
              }
            }, '详情')
          ])
        }
      }
      ],
      data1: [{
        compactNum: '2018081718768',
        compactDate: '2018-08-17',
        borrower: '王伟',
        loanCompany: '高明财务信息公司',
        compactCreator: '王法圣'
      }, {
        compactNum: '2018081718768',
        compactDate: '2018-08-17',
        borrower: '李志',
        loanCompany: '施尔美投资有限公司',
        compactCreator: '周家荣'
      }],
      columns2: [{
        title: '合同编号',
        key: 'compactNum',
        align: 'center',
        width: 160
      },
      {
        title: '合同签订时间',
        key: 'compactDate',
        align: 'center',
        width: 150
      },
      {
        title: '借款人',
        key: 'borrower',
        align: 'center'
      },
      {
        title: '放款机构',
        key: 'loanCompany',
        align: 'center'
      }, {
        title: '合同创建人',
        key: 'compactCreator',
        align: 'center'
      },
      {
        title: '操作',
        key: 'handle',
        align: 'center',
        width: 180,
        render: (h, params) => {
          return h('div', [
            h('Button', {
              props: {
                type: 'warning',
                size: 'small'
              },
              style: {
                marginRight: '10px'
              },
              on: {
                click: () => { }
              }
            }, '查看'),
            h('Button', {
              props: {
                type: 'primary',
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
        compactNum: '2018081718768',
        compactDate: '2018-08-17',
        borrower: '王伟',
        loanCompany: '高明财务信息公司',
        compactCreator: '王法圣'
      }, {
        compactNum: '2018081718768',
        compactDate: '2018-08-17',
        borrower: '李志',
        loanCompany: '施尔美投资有限公司',
        compactCreator: '周家荣'
      }]
    }
  }

}
</script>
