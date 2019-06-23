<style lang="less" scoped>
.commontablewrap {
  .code-view {
    text-align: center;
  }
}
</style>
<template>
  <div class="commontablewrap">
    <div class="code-view">违规城市代码查询</div>
    <div v-for="item in cityData" style="margin: 15px;">
      <label>{{ item.province }}</label>
      <Table border :columns="columns7" :data="item.cities"></Table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cityData: [],
      columns7: [
        {
          title: '城市名称',
          key: 'name',
          align: 'center',
          width: 300
        },
        {
          title: '城市代码',
          key: 'code',
          align: 'center',
          width: 100
        },
        {
          title: '是否需要输入发动机号(0:不需要 ，1:需要)',
          key: 'needEngine',
          align: 'center'
        },
        {
          title: '需要输入几位发动机号(0:全部，1-9:需要发动机号 后 N 位',
          key: 'engineNo',
          align: 'center'
        },
        {
          title: '是否需要输入车架号(0:不需要 ，1:需要)',
          key: 'needVin',
          align: 'center'
        }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      const data = await this.$ajax('post', '/tx/cityCode')
      if (data.code === 0) {
        this.cityData = data.data.cityResult
      }
    }
  }
}
</script>
