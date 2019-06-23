/*
    获取当前时间返回2018-8-31  12:34:02 格式
*/
export function toDate () {
  let date = new Date()
  return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}
