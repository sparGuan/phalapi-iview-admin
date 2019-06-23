/**
 * 验证邮箱
 * @email {string}
 * 返回true或false
 */
export function checkEmail (email) {
  let re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
  if (re.test(email)) {
    return true
  } else {
    return false
  }
}

/**
 * 验证身份证
 * @identity {string} identity
 * 返回true或false
 */
export function checkIdentity (identity) {
  var reg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/
  var reg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$/
  if (reg1.test(identity) || reg2.test(identity)) {
    return true
  } else {
    return false
  }
}

/**
 * 验证手机号 11位数字，以1开头
 * @phone {number}
 * 返回true或false
 */
export function checkPhone (phone) {
  var reg = /^1[0-9]{10}$/
  if (phone && phone.length == 11 && reg.test(phone)) {
    return true
  } else {
    return false
  }
}

/**
 * 验证Url
 * @url {string}
 * @flag {bool} 为true时可匹配 www.aaa.com 形式 为false或不传时严格匹配http或https开头的url
 * 返回true或false
 */
export function checkUrl (url, flag) {
  let reg
  if (flag) {
    reg = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+(:[0-9]{2,4})?(\/[\w\?\+\.#=@&%-]+)*(\/)?$/
  } else {
    reg = /^https?:\/\/[\w-]+(\.[\w-]+)+(:[0-9]{2,4})?(\/[\w\?\+\.#=@&%-]+)*(\/)?$/
  }
  if (reg.test(url)) {
    return true
  } else {
    return false
  }
}

/**
 * 验证QQ
 * @qq {string} 5到11位数字
 * 返回true或false
 */
export function checkQQ (qq) {
  let reg = /^[1-9]([0-9]{4,10})$/
  if (reg.test(qq)) {
    return true
  } else {
    return false
  }
}
// 银行卡号校验
export function bankCardValidate (bankno) {
  const lastNum = +bankno.substr(bankno.length - 1, 1)
  const first15Num = bankno.substr(0, bankno.length - 1)
  const newArr = []
  for (let i = first15Num.length - 1; i > -1; i -= 1) {
    newArr.push(first15Num.substr(i, 1))
  }
  const arrJiShu = []
  const arrJiShu2 = []
  const arrOuShu = []
  for (let j = 0; j < newArr.length; j += 1) {
    if ((j + 1) % 2 === 1) {
      if (parseInt(newArr[j], 10) * 2 < 9) {
        arrJiShu.push(parseInt(newArr[j], 10) * 2)
      } else {
        arrJiShu2.push(parseInt(newArr[j], 10) * 2)
      }
    } else {
      arrOuShu.push(newArr[j])
    }
  }

  const jishuChild1 = []
  const jishuChild2 = []
  for (let h = 0; h < arrJiShu2.length; h += 1) {
    jishuChild1.push(parseInt(arrJiShu2[h], 10) % 10)
    jishuChild2.push(parseInt(arrJiShu2[h], 10) / 10)
  }

  let sumJiShu = 0
  let sumOuShu = 0
  let sumJiShuChild1 = 0
  let sumJiShuChild2 = 0
  let sumTotal = 0
  for (let m = 0; m < arrJiShu.length; m += 1) {
    sumJiShu += parseInt(arrJiShu[m], 10)
  }

  for (let n = 0; n < arrOuShu.length; n += 1) {
    sumOuShu += parseInt(arrOuShu[n], 10)
  }

  for (let p = 0; p < jishuChild1.length; p += 1) {
    sumJiShuChild1 += parseInt(jishuChild1[p], 10)
    sumJiShuChild2 += parseInt(jishuChild2[p], 10)
  }
  sumTotal =
    parseInt(sumJiShu, 10) + parseInt(sumOuShu, 10) + parseInt(sumJiShuChild1, 10) + parseInt(sumJiShuChild2, 10)
  const k = parseInt(sumTotal, 10) % 10 === 0 ? 10 : parseInt(sumTotal, 10) % 10
  const luhn = 10 - k
  if (lastNum === luhn) {
    return true
  } else {
    return false
  }
}

// 身份证号校验
export function IdCardValidate (idCard) {
  const idCards = trim(idCard.replace(/ /g, ''))
  if (idCard.length === 15) {
    return isValidityBrithBy15IdCard(idCards)
  } else if (idCards.length === 18) {
    const idCardS = idCards.split('') // 得到身份证数组
    if (isValidityBrithBy18IdCard(idCards) && isTrueValidateCodeBy18IdCard(idCardS)) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

function isValidityBrithBy18IdCard (idCard18) {
  const year = idCard18.substring(6, 10)
  const month = idCard18.substring(10, 12)
  const day = idCard18.substring(12, 14)
  const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day))
  // 这里用getFullYear()获取年份，避免千年虫问题
  if (
    tempDate.getFullYear() !== parseFloat(year) ||
    tempDate.getMonth() !== parseFloat(month) - 1 ||
    tempDate.getDate() !== parseFloat(day)
  ) {
    return false
  } else {
    return true
  }
}
function isValidityBrithBy15IdCard (idCard15) {
  const year = idCard15.substring(6, 8)
  const month = idCard15.substring(8, 10)
  const day = idCard15.substring(10, 12)
  const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day))
  if (
    tempDate.getYear() !== parseFloat(year) ||
    tempDate.getMonth() !== parseFloat(month) - 1 ||
    tempDate.getDate() !== parseFloat(day)
  ) {
    return false
  } else {
    return true
  }
}
function trim (str) {
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
