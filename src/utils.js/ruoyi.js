
/**
 * 通用js方法封装处理
 * Copyright (c) 2019 ruoyi
 */

// 日期格式化
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/').replace('T', ' ').replace(new RegExp(/\.[\d]{3}/gm), '');
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

//添加日期范围
export const addDateRange= function (params, dateRange, propName) {
 let search = params
 //判断params,params是否存在并且符合要求，如果存在，不操作，如果不存在或者不符合要求，重置为空对象并重新赋值
 search.params = typeof (search.params) === 'object' && search.params !== null && Array.isArray(search.params) ? search.params : {}
 //判断dateRange是否是一个数组
 dateRange = Array.isArray(dateRange) ? dateRange : []
 //判断是否给日期范围命名,若未命名，则用默认命名，若已命名，则动态修改命名
 if (!propName) {//未命名，使用默认命名
  search.params['beginTime'] = dateRange[0]
  search.params['endTime'] = dateRange[1]
 } else {
   search.params['begin' + propName] = dateRange[0]
  search.params['end' + propName] = dateRange[1]
 }
 return search//返回处理后的params
}

//转换字符串
export const parseStrEmpty =function (str){
  if (!str || str == 'undefined' || str == 'null') {
    return str = ''
  }
  return str
}
/**
* 参数处理
* @param {*} params  参数
*/
export const transParams=(params)=> {
  let result = ''
  for (const propName of Object.keys(params)) {
    const value = params[propName];
    var part = encodeURIComponent(propName) + "=";
    if (value !== null && value !== "" && typeof (value) !== "undefined") {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
            let params = propName + '[' + key + ']';
            var subPart = encodeURIComponent(params) + "=";
            result += subPart + encodeURIComponent(value[key]) + "&";
          }
        }
      } else {
        result += part + encodeURIComponent(value) + "&";
      }
    }
  }
  return result
}

// 验证是否为blob格式
export const  blobValidate=(data) =>{
  return data.type !== 'application/json'
}
