<style lang="less" scoped>
.wrap{
    // display: inline-block;
    select{
        padding-left: 6px;
        margin-right: 10px;
        cursor: pointer;
        option{
            color: gray;
        }
    }
}
</style>
<template>
    <div class="wrap">
        <select v-model="prov">
            <option v-for="(item,index) in provList" :key="index" :value="item.region_name" :data_id="item.region_id">{{item.region_name}}</option>
        </select>
        <select v-model="city">
            <option v-for="(item,index) in cityList" :key="index" :value="item.region_name" :data_id="item.region_id">{{item.region_name}}</option>
        </select>
        <select v-model="district" v-if="districtList">
            <option v-for="(item,index) in districtList" :key="index" :value="item.region_name" :data_id="item.region_id">{{item.region_name}}</option>
        </select>
    </div>
</template>
<script>
export default {
  name: 'citySelect',
  props: {

  },
  data () {
    return {
      prov: '北京市',
      city: '北京市',
      district: '东城区',
      provList: [],
      cityList: [],
      districtList: []
    }
  },
  created: function () {
    this.getAreaCode()
  },
  methods: {
    getAreaCode: function () {
      this.$ajax('post', 'ar/area/code')
        .then(res => {
          this.provList = res.data
          this.updateCity()
          this.updateDistrict()
        })
    },
    updateCity: function () {
      var list = this.provList
      for (var i in list) {
        var obj = list[i]
        if (obj.region_name == this.prov) {
          this.cityList = obj.sub
          break
        }
      };
      this.city = this.cityList[1].region_name
    },
    updateDistrict: function () {
      var list = this.cityList
      for (var i in list) {
        var obj = list[i]
        if (obj.region_name == this.city) {
          this.districtList = obj.sub
          break
        }
      }
      if (this.districtList && this.districtList.length > 0 && this.districtList[1].region_name) {
        this.district = this.districtList[1].region_name
      } else {
        this.district = ''
      }
    }
  },
  watch: {
    prov: function () {
      this.updateCity()
      this.updateDistrict()
    },
    city: function () {
      this.updateDistrict()
    }
  }
}
</script>
