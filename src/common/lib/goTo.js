/*
    目前参数只能是对象
    用法跟push({name: ''})一样
*/
import { createRandom } from './createRandom'

export function goTo (obj, isreplace) {
  if (this.$route.name == obj.name) {
    obj.query = Object.assign(obj.query || {}, { refreshKey: createRandom() })
  }
  if (isreplace) {
    this.$router.replace(obj)
  } else {
    this.$router.push(obj)
  }
}
