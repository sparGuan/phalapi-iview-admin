<style lang="stylus" scoped>
.z-fileUpload
  display: inline-block
  width: 100%
  height: 100%
  position: relative
  .fileupload
    & >>> .ivu-upload
      .ivu-btn
        padding: 5px 12px
        height: 32px
        &:focus
          box-shadow: none
      .ivu-btn[disabled]
        color: #fff
        background-color: $basecolor
        border-color: $basecolor
      .ivu-btn-loading
        pointer-events: auto
  .uploadcoverbg
    position: absolute
    top: 0
    width: 100%
    height: 100%
    .uploadcoveri
      animation: rotate 1s infinite
  .uploadtextbg
    position: absolute
    top: -10px
    width: 100%
    height: 10px

  @keyframes rotate
    0%
      transform: rotate(0deg)
    100%
      transform: rotate(360deg)
</style>

<template>
  <div class="z-fileUpload">
    <Upload
      :action="upFileUrl"
      :with-credentials="true"
      :data="params"
      :show-upload-list="false"
      :before-upload="fileUpBefore"
      :on-success="fileUpSuccess"
      :on-error="fileUpError"
      :max-size="maxSize"
      :on-exceeded-size="fileMaxSize"
      ref="sendbizfile"
      name="upload"
      class="fileupload"
      :accept="accept">
      <slot name="icon"></slot>
    </Upload>
    <div v-if="fileUploading" class="uploadcoverbg">
      <Spin fix>
        <i class="fa fa-spinner uploadcoveri"></i>
      </Spin>
    </div>
    <div class="uploadtextbg">
      <span style="display: inline-block; width: 60%; background: #00bbff;"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-fileUpload',
  data () {
    return {
      upFileUrl: $conf.baseUrl + 'oss/upload',
      sendoutparams: {},
      fileUploading: false,
      imgwidth: 'auto',
      imgheight: 'auto'
    }
  },
  props: {
    filelist: {
      type: Array,
      default: function () {
        return []
      }
    },
    params: {
      type: Object,
      default: function () {
        return {}
      }
    },
    pushFlag: {
      type: Number,
      default: 0
    },
    accept: {
      type: String,
      default: ''
    },
    maxSize: {
      type: Number,
      default: 2048
    }
  },
  methods: {
    fileUpBefore (file) {
      this.sendoutparams = this.params
      this.fileUploading = true

      // 读取图片数据
      let _this = this
      let reader = new FileReader()
      reader.onload = function (e) {
        let data = e.target.result
        // 加载图片获取图片真实宽度和高度
        let image = new Image()
        image.onload = function () {
          _this.imgwidth = image.width
          _this.imgheight = image.height
        }
        image.src = data
      }
      reader.readAsDataURL(file)
    },
    fileUpSuccess (response, file, fileList) {
      this.fileUploading = false
      let newfile = {
        name: file.name,
        hash: response.hash,
        creatorflag: 1,
        pushflag: this.pushFlag
      }
      this.filelist.push(newfile)
      this.sendoutparams.imgwidth = this.imgwidth
      this.sendoutparams.imgheight = this.imgheight
      this.$emit('fileUpSuccess', response, file, fileList, this.sendoutparams)
    },
    fileUpError (error, file, fileList) {
      this.fileUploading = false
      this.$emit('fileUpError', error, file, fileList, this.sendoutparams)
    },
    fileMaxSize (file) {
      this.fileUploading = false
      this.$Message.error(file.name + ' 大小超过了' + (this.maxSize / 1024) + 'm，请压缩后重新上传！')
    }
  }
}
</script>
