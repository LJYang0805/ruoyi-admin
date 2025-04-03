//判断url是否是http或https为开头 
export const isHttp = (url) => {
 return url.indexOf('http://') == 0 || url.indexOf("https://") == 0
}

//判断字符串是否为空null 或undefined
export const isEmpty = (value) => {
 if (value == '' ||value == null || value == undefined || value == 'undefined') {
  return true
 } else {
  return false
 }
}