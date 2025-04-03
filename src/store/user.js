import { defineStore } from "pinia";
import { reqGetCode, reqLogin, reqLogout } from "../api/login";
import {reqDepartTree} from "../api/system/user.js";
import { getToken, setToken, removeToken } from '../utils.js/token'
import { useRouter } from "vue-router";
import { getInfo } from "../api/login";
import { isEmpty, isHttp } from "../utils.js/valdate.js";
import defAva from '../assets/images/header.jpg'


export const userStore = defineStore('user', {
  state: () => ({
    code: {
      img: '',
      uuid: '',
      captchaEnabled: '',
      msg: ''
    },
    allowLogin: false,
    token: getToken() || '',
    treeList: {},
    id: '',
    name: '',
    avatar: '',
    roles: [],
    permissions:[]
  }),
  actions: {
    // 获取验证码
   async getCode(){
     try {
       const response = await reqGetCode()
       console.log(response);
       const {img,uuid,captchaEnabled} =await response
       this.code.img = img
       this.code.uuid = uuid
       this.code.captchaEnabled = captchaEnabled
     } catch (error) {
      console.error('获取验证码失败',error)
     }
    },

    //提交表单并发送登录请求
    async login(userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      const code = userInfo.code
      const uuid = userInfo.uuid
     try {
       const response = await reqLogin(username, password, code, uuid)
       if (response.code == 200) {
         console.log(response);
         this.allowLogin = true
        setToken(response.token)
       } else if (response.code == 500) {
         ElMessage.error(response.msg)
       }
        else {
         alert("登录失败," + '用户名或密码错误');
        }
     } catch (error) {
      console.log('登陆请求失败',error);
      throw error
     }
    },

    //获取用户信息
    GetInfo() {
      return new Promise((resolve, reject) => {
        getInfo().then((res) => {
          const user = res.user
          let avatar = user.avatar || ''
          //判断头像链接是否以http://或https://开头
          if (!isHttp(avatar)) {
           avatar = isEmpty(avatar) ? defAva :process.env.VITE_BASE_API + avatar
          }
          if (res.roles && res.roles.length > 0) {//验证是否返回一个非空数组
            this.roles = res.roles
            this.permissions = res.permissions
          } else {
           this.roles = ['ROLE_DEFAULT']
                   }
          this.id = user.id
          this.avatar = user.avatar
          resolve(res)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    //登出操作
    async logout() {
     try {
       removeToken()
       reqLogout()
     } catch (error) {
      alert('退出登陆失败')
      throw error
     }
    },

    //获取部门名称树状图信息
    async departTree() {
      try {
        const response = await reqDepartTree()
        if (response.code== 200) {
          this.treeList = response.data
        }
      } catch (error) {
        console.log('获取部门信息失败',error);
      }
    }
  }
})