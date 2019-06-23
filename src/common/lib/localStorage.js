// localStorage 存
export function setStorage (key, value) {
  if (window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    console.log('浏览器不支持localStorage')
  }
}

// localStorage 取
export function getStorage (key) {
  if (window.localStorage) {
    let value = window.localStorage.getItem(key)
    try {
      if (value) {
        return JSON.parse(value)
      } else {
        return ''
      }
    } catch (e) {
      return ''
    }
  } else {
    console.log('浏览器不支持localStorage')
    return ''
  }
}

// localStorage 删数组中的某个值
export function delStorage (key) {
  if (window.localStorage) {
    window.localStorage.removeItem(name)
  } else {
    console.log('浏览器不支持localStorage')
    return ''
  }
}
