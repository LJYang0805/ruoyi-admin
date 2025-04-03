import requests from '../utils.js/requests'
// 获取验证码的请求
export const reqGetCode = () => {
  return requests({url:'/captchaImage',method:'GET'})
}
//登录网络请求
export const reqLogin = (username,password,code,uuid) => {
  const data = {
    username,
    password, 
    code,
    uuid
  }
  return requests({url:'/login',method:'POST',data:data})
}

//获取用户详情
export const getInfo = () => {
  return requests({
    url: 'getInfo',
    method:'GET'
  })
}

//登出网络请求
export const reqLogout=()=> {
 return requests({
    url: '/logout',
    method: 'POST'
  })
}
