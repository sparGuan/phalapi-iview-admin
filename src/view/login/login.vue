<style lang="less">
@import "./login.less";
.login-con {
  box-shadow: 0 0 10px hsla(262, 52%, 47%, 0.45);
}
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="征信大数据平台" :bordered="false">
        <div class="form-con">
          <login-form
            @on-success-valid="handleSubmit"
            :loading="loading"
          ></login-form>
          <p class="login-tip">深圳市银通融投资管理有限公司 @版权所有</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions } from 'vuex'
export default {
  components: {
    LoginForm
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    // ...mapActions([
    //   'handleLogin',
    //   'getUserInfo'
    // ]),
    handleSubmit ({ account, password }) {
      if (account !== '' && password !== '') {
        this.loading = true
        this.$ajax('post', 'login', { account, password }).then(res => {
          this.loading = false
          if (res.code === 0) {
            this.$Message.success('登录成功！')
            this.$store.commit('changeUserInfo', res.data)
            this.$store.commit('changeLoginStatus', true)
            this.$store.commit('changeLoginModalStatus', {
              display: false
            })
            this.$router.push({
              name: this.$config.homeName
            })
          } else {
            this.$Message.error('账号密码输入不正确！')
          }
        })
      } else {
        this.$Message.error('请输入账号密码')
      }
    }
  }
}
</script>

<style>
</style>
