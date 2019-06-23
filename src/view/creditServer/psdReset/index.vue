<!--
 密码重置
 @author hvv
 @date 2018-11-16
 -->
<style lang="less" scoped>
.ivu-form .ivu-form-item {
  width: 40%;
}
p {
  padding-left: 24px;
  margin-bottom: 20px;
}
</style>
<template>
  <div>
    <div class="listBox">
      <p class="boxTitle">
        <span class="primary">密码重置</span>
      </p>
      <div class="">
        <Form
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="90"
        >
          <FormItem label="旧密码" prop="oldPsd">
            <Input v-model="formValidate.oldPsd"></Input>
          </FormItem>
          <FormItem label="新密码" prop="newPsd">
            <Input v-model="formValidate.newPsd"></Input>
          </FormItem>
          <FormItem label="确认密码" prop="confirmPsd">
            <Input v-model="formValidate.confirmPsd"></Input>
          </FormItem>
          <p>注意：密码必须包含大小写字母、数字、长度10-20位(eg:Abc1234567)</p>
          <FormItem>
            <Button
              type="primary"
              @click="handleSubmit('formValidate')"
              style="margin-right: 15px"
              >确认</Button
            >
            <Button @click="handleReset('formValidate')">重置</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'limitModify',
  data () {
    return {
      formValidate: {
        oldPsd: '',
        newPsd: '',
        confirmPsd: ''
      },
      ruleValidate: {
        oldPsd: [{
          required: true,
          message: '旧密码不能为空',
          trigger: 'blur'
        }],
        newPsd: [{
          required: true,
          message: '请填写新密码',
          trigger: 'blur'
        }],
        confirmPsd: [{
          required: true,
          message: '请确认密码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    handleSubmit () { },
    handleReset () { }

  }
}
</script>
