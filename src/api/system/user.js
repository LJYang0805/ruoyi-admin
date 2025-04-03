import axios from 'axios'
import requests from '../../utils.js/requests'
import {parseStrEmpty} from '../../utils.js/ruoyi'
//获取部门树
export const reqDepartTree=()=> {
 return requests({
    url: '/system/user/deptTree',
    method:'GET'
  })
}
//查询用户列表
export const listUser = (query) => {
  return requests({
    url: '/system/user/list',
    method: 'GET',
    params:query
  })
}
//用户状态修改
export const changeUserStatus = (userId, userStatus) => {
 const data = { userId, userStatus }
 return requests({
  url: 'system/user/changeStatus',
  method: 'PUT',
  data: data
 })
}

//查询用户详情
export const getUser = (userId) => {
  return requests({
    url: '/system/user/' + parseStrEmpty(userId),//parseStrEmpty防止userId为空时，也能正常返回请求
    method:'GET'
  })
}

//删除用户
export const delUser = (userId) => {
  return requests({
    url:'/system/user/'+userId,
    method:'DELETE'
  })
}

//用户密码重置
export const resetUserPwd = (userId,password) => {
  const data = { 
    userId,
    password
  }
  return requests({
    url: '/system/user/resetPwd',
    method: 'PUT',
    data:data
  })
}

//查询授权角色
export const getAuthRole = (userId) => {
  userId = Number(userId)
  console.log(typeof userId);
  return requests({
    url: `system/user/authRole/${userId}`,
    method:'GET',
  })
}

//保存授权角色
export const updateAuthRole = (data) =>{
  return requests({
    url: '',
    method: 'PUT',
    params:data
  })
}