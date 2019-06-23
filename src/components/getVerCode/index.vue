<style lang="stylus" scoped>
.getvercodewrap
  //
</style>

<template>
  <div class="getvercodewrap">
    <Button v-if="countDownTime2 < 0" @click="getVerCode" type="primary">获取验证码</Button>
    <Button v-else type="primary" disabled>{{countDownTime2 + 's 后重发'}}</Button>
  </div>
</template>

<script>
export default {
  name: 'GetVerCode',
  data () {
    return {
      countDownTime1: 60, // 倒计时总时间60s
      countDownTime2: -1 // 倒计时进行中时间
    }
  },
  props: {
    type: {
      type: String,
      default: 'register'
    }
  },
  methods: {
    getVerCode () {
      this.$emit('getCodeFn')
    },
    start (phone) {
      this.countDownTime2 = this.countDownTime1
      let timeFn = () => {
        setTimeout(() => {
          if (this.countDownTime2 >= 0) {
            this.countDownTime2 -= 1
            timeFn()
          }
        }, 1000)
      }
      timeFn()
      let url = this.type == 'register' ? 'sms/send/register/verificationcode' : this.type == 'lostpassword' ? 'sms/send/password/forget/verificationcode' : this.type == 'changePhone' ? 'sms/send/phone/change/verificationcode' : ''
      this.$ajax('post', url, { phone: phone }).then(data => {
        // 只获取验证码 不做处理
        this.$Message.success('验证码发送成功！请查收！')
      }).catch(err => {
        // 获取失败重置时间
        this.countDownTime2 = 0
      })
    }
  }
}
</script>
