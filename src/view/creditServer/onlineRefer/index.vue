<style lang='less' scoped>
.ivu-form-inline .ivu-form-item {
  display: block;
}
.formItem_small {
  width: 300px;
}
.formItem_area {
  width: 500px;
}
.title {
  margin-bottom: 15px;
}
</style>
<template>
  <div>
    <p class="primary title">
      请填写以下内容，问题提交后客服人员会及时与您联系！
    </p>
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="100"
      :inline="true"
    >
      <FormItem label="问题类型">
        <RadioGroup v-model="formValidate.type">
          <Radio label="1">操作使用</Radio>
          <Radio label="2">系统对接</Radio>
          <Radio label="3">其他</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="问题描述" prop="desc" class="formItem_area">
        <Input
          v-model="formValidate.desc"
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6 }"
          placeholder="您最多可以输入500个字符"
        ></Input>
      </FormItem>
      <FormItem label="手机号" prop="phone" class="formItem_small">
        <Input v-model="formValidate.phone"></Input>
      </FormItem>
      <FormItem label="电子邮箱" prop="email" class="formItem_small">
        <Input v-model="formValidate.email"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')"
          >提交</Button
        >
        <Button @click="handleReset('formValidate')" style="margin-left: 8px"
          >重置</Button
        >
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  name: 'onlineRefer',
  data () {
    const validatePhone = (rule, value, callback) => {
      let reg = /^[1][34578]\d{9}$/
      if (value === '') {
        callback(new Error('手机号码不能为空'))
      } else if (!(reg).test(value)) {
        callback(new Error('请输入正确手机号码！'))
      } else {
        callback()
      }
    }
    return {
      formValidate: {
        desc: '',
        phone: '',
        email: '',
        type: '1'
      },
      ruleValidate: {
        desc: [{
          required: true,
          message: '问题描述不能为空',
          trigger: 'blur'
        }],
        phone: [{
          required: true,
          validator: validatePhone,
          trigger: 'blur'
        }]

      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$ajax('post', 'ar/feedback/add', this.formValidate)
            .then(res => {
              this.$Message.success('success')
            })
        };
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}

</script>
