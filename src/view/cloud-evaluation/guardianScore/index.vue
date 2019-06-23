<style lang="stylus" scoped>
.folkquerywrap {
  font-size: 14px;
}

.folkqueryitem {
  padding: 15px 20px;
  background: #fff;
  margin-bottom: 10px;
}

.folkqueryitemtitle {
  b {
    font-weight: 600;
    border-left: 4px solid #009cff;
    padding-left: 6px;
  }
}

.enterTitle {
  display: flex;
  justify-content: space-between;

  span {
    border-radius: 4px;
    padding: 1px 5px;
    padding-right: 72px;
  }
}

.folkqueryitembody {
  padding: 15px 0 0 40px;

  .itemFlex {
    display: flex;
  }

  .itemFlexLeft {
    width: 46%;
    margin-right: 10%;
  }

  .ivu-form .ivu-form-item .ivu-select {
    width: 80%;
  }

  .itemFlexRight {
    width: 35%;
  }
}

.singleForm {
  width: 48%;
}

.upfileimgwrap {
  text-align: center;
  padding: 56px 0 0;

  button {
    margin-left: 10px;
  }

  .imgdiv {
    width: 138px;
    margin: 11px auto 0;

    img {
      width: 100%;
    }
  }
}

.folkquerycombtn {
  background: #009cff;
}

.folkquerycombtndeep {
  padding: 6px 20px;
  font-size: 16px;
}
</style>

<template>
  <div class="folkquerywrap">
    <div class="folkqueryitem">
      <div class="folkqueryitemtitle">
        <b>查询条件</b>
      </div>
    </div>

    <div class="folkqueryitem">
      <div class="folkqueryitemtitle">
        <b>综合测评</b>
      </div>
      <div class="folkqueryitembody"></div>
    </div>
  </div>
</template>

<script>
import FileUpload from '@/components/upload'
import {
  checkPhone
} from '@/common/lib/check'
import {
  toDate
} from '@/common/lib/date'

export default {
  name: 'FolkQuery',
  data () {
    const validateIdNo = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('身份证号码不能为空'))
      } else if (value.length == 15) {
        callback()
      } else if (value.length == 18) {
        callback()
      } else {
        callback(new Error('身份证号码位数错误'))
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号码不能为空'))
      } else if (checkPhone(value)) {
        callback()
      } else {
        callback(new Error('手机号码错误'))
      }
    }
    return {
      imgPreviewUrl: $conf.baseUrl + 'oss/preview?is_img=true&hash=',
      addPersonalForm: {
        name: '',
        id_number: '',
        phone: '',
        photo: '',
        basic_car: 0,
        basic_house: 0,
        basic_liabilities: 0,
        status_credit: '',
        loading: false
      },
      tempForm: {
        name: ''
      },
      loanInquiryForm: {
        queryType: '1',
        id_name: '',
        reason: '',
        id_number: '',
        simpleNumber: '',
        loading: false
      },
      reasonList: [{
        value: '信贷咨询',
        label: '1'
      }, {
        value: '贷后管理',
        label: '2'
      }, {
        value: '赎楼咨询',
        label: '3'
      }, {
        value: '房贷咨询',
        label: '4'
      }],
      formRules: {
        name: [{
          required: true,
          message: '姓名不能为空',
          trigger: 'blur'
        }],
        phone: [{
          validator: validatePhone,
          trigger: 'blur'
        }],
        id_name: [{
          required: true,
          message: '真实姓名不能为空',
          trigger: 'blur'
        }],
        id_number: [{
          validator: validateIdNo,
          trigger: 'blur'
        }]
      },
      searchResultModal: false,
      searchResultObj: {},
      searchForm: {
        search: false,
        customer_id: '',
        perPage: 10,
        page: 1,
        searchList: []
      },
      feedbackForm: {
        feedback: false,
        customer_id: '',
        perPage: 10,
        page: 1,
        feedbackList: []
      },
      showInfo: false,
      date: ''
    }
  },
  components: {
    FileUpload
  },
  beforeMount () {
    if (this.$route.query.id_name && this.$route.query.id_number && this.$route.query.id_number.length >= 9) {
      let str = this.$route.query.id_number
      this.loanInquiryForm = {
        id_name: this.$route.query.id_name,
        id_number: str.substr(0, 3) + '*'.repeat(str.length - 6) + str.substr(str.length - 3, 3),
        loading: false
      }
      // this.loanInquiryFormOrigin.id_number = this.$route.query.id_number
    }

    this.resetAddPersonal()
  },
  methods: {
    resetAddPersonal () {
      this.addPersonalForm = {
        name: '',
        id_number: '',
        phone: '',
        photo: '',
        basic_car: 0,
        basic_house: 0,
        basic_liabilities: 0,
        status_credit: 0,
        loading: false
      }
    },
    IdFocusFn () {
      // this.loanInquiryForm.id_number = this.loanInquiryFormOrigin.id_number
    },
    IdBlurFn () {
      let str = this.loanInquiryForm.id_number
      if (str.length >= 9) {
        this.loanInquiryForm.id_number = str.substr(0, 3) + '*'.repeat(str.length - 6) + str.substr(str.length - 3, 3)
      }
    },
    IdChangeFn () {
      // this.loanInquiryFormOrigin.id_number = this.loanInquiryForm.id_number
    },
    fileUpSuccess (response, file, fileList) {
      this.addPersonalForm.photo = response.hash
      // console.log(response, file, fileList)
    },
    fileUpError (error, file, fileList) {
      this.$Message.error('文件上传失败！')
      // console.log(error, file, fileList)
    },
    bussiStatus (index) {
      if (this.addPersonalForm.status_credit.indexOf(index) != -1) {
        return true
      } else {
        return false
      }
    },
    preSubmitAddPersonal () {
      this.$refs.addPersonalForm.validate(valid => {
        if (valid) {
          if (!this.addPersonalForm.photo) {
            this.$Message.error('请上传客户照片！')
            return
          }
          this.date = toDate()
          this.showInfo = true
        }
      })
    },
    submitAddPersonal () {
      this.$refs.addPersonalForm.validate(valid => {
        if (valid) {
          if (!this.addPersonalForm.photo) {
            this.$Message.error('请上传客户照片！')
            return
          }
          this.$ajax('post', 'customer/basic/info/add', this.addPersonalForm, 'addPersonalForm.loading').then(
            data => {
              this.resetAddPersonal()
              this.$Message.success('录入信息成功！')
              this.showInfo = false
            })
        }
      })
    },
    // 411325199609258223
    startSearchPersonal () {
      this.$refs.loanInquiryForm.validate(valid => {
        if (valid) {
          this.searchResultModal = true
          var data = this.loanInquiryForm
          if (data.queryType == '1') {
            data.id_number = data.simpleNumber
          }
          this.$ajax('get', 'customer/basic/info/search', {
            id_name: data.id_name,
            id_number: data.id_number,
            queryType: data.queryType,
            reason: data.reason
          }, 'loanInquiryForm.loading').then(data => {
            this.searchResultObj = data.data
          }).catch(err => {
            this.searchResultModal = false
          })
        }
      })
    },
    clickImg () {
      img.click()
    },
    openFeedback (id) {
      this.feedbackForm.feedback = true
      this.feedbackForm.customer_id = id
      this.feedbackForm.loading = true
      this.$ajax('get', 'customer/customer/feedback', {
        customer_id: this.feedbackForm.customer_id,
        perPage: this.feedbackForm.perPage,
        page: this.feedbackForm.page
      }).then(data => {
        this.feedbackForm.loading = false
        this.feedbackForm.feedbackList = data.data
      })
    },
    changeFeedback (id) {
      this.feedbackForm.page = id
      this.openFeedback(id)
    },
    deleteFeedback (id) {
      this.$ajax('post', 'customer/customer/delete/' + id).then(data => {
        this.openFeedback(this.feedbackForm.customer_id)
      })
    }
  },
  filters: {
    afterSixNum (v) {
      return v ? (v.length > 6 ? v.substr(v.length - 6, 6) : '') : ''
    }
  }
}

</script>
