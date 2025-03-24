//在请求拦截器和相应拦截器中设置页面加载进度条
// 对于axios经行二次封装
import axios from 'axios'
import nProgress from 'nprogress'//引入进度条样式
import 'nprogress/nprogress.css'//start进度条开始，done进度条结束
import { ElMessage,ElLoading } from 'element-plus'//引用element-UI的弹窗
import { useRouter } from 'vue-router'
import {transParams,blobValidate} from '../utils.js/ruoyi'

let downloadLoadingInstance
// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request就是axios，只不过稍微配置一下
const requests = axios.create({
  //配置对象
  //基础路径，发请求的时候，路径当中会出现api
  baseURL: "https://vue.ruoyi.vip/prod-api",
  //代表超过请求的时间不超过5s
  timeout:5000
})

//请求拦截器,在请求之前，请求拦截器可以检测到，可以做一些事情
requests.interceptors.request.use(
  (config) => {
    //拿到会话框中的TOKEN
const token = sessionStorage.getItem('TOKEN')
    //config是配置对象，里面有个很重要的属性：headers（请求头）
if (token) {
  config.headers['Authorization'] = `Bearer ${token}`}
  // 进度条开始
  nProgress.start()
return config
}, (error) => {return Promise.reject(error) })

//响应拦截器
requests.interceptors.response.use(
   // 成功的回调函数，服务器响应数据会来以后，响应拦截器可以检测到，可以做一些事情
  (response) => {
    //进度条结束
    nProgress.done()
    //检查业务状态码
    if (response.data.code === 401) {
   //如果业务状态码是401，表示token已过期，注销登录
    ElMessage.error('用户信息已过期，请重新登录')//提示用户
      sessionStorage.removeItem('TOKEN')//删除token
      const router = useRouter()
      router.push('/login')//跳转到登录页
    } 
     return new Promise((resolve, reject) => {
    try {
      resolve(response.data)
    } catch (error) {
      reject(error)
    }
  })
  },
  // 失败的回调
  (error) => {
  nProgress.done() //请求失败，进度条结束
    const status = error.response?.code;
    if (status===401) {
      ElMessage.error('用户信息已过期，请重新登录')
      sessionStorage.removeItem('TOKEN')
      const router = useRouter()
      router.push('/login')
    } else if(status===404){
      ElMessage.error('请求的资源不存在')
    }else if(status===500){
      ElMessage.error('服务器内部错误')
    }else {
      ElMessage.error('请求失败，请稍后重试')
    }
    return Promise.reject(error)
  })

//通用下载方法
export const download = (url, params, filename, config) => {
  //显示加载状态
  downloadLoadingInstance = ElLoading.service({ text: '正在下载数据，请稍后', spinner: 'iconfont icon-loading', background: 'rbga(0,0,0,0.7)' })
  return requests.post(url, params, {
    transformRequest: [(params) => { return transParams(params) }],//将请求参数转换成URL编码格式
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },//表示请求体中的数据是 URL 编码格式。
    responseType: 'blob',
    ...config//合并传入的额外配置
  }).then(async (data) => {
    const isBlob = blobValidate(data)//验证响应数据是否为 Blob 类型。
    if (isBlob) {//如果是，则保存文件
      const blob = new Blob([data])
    saveAs(blob, filename)
    } else {
      const resText = await data.text()
      const rspObj = JSON.parse(resText)
      const errMsg =  rspObj.msg || errorCode[rspObj.code] ||errorCode['default']
      ElMessage.error(errMsg);
       downloadLoadingInstance.close();
    }
  }).catch((r) => {
    console.error(r);
    ElMessage.error('下载文件出现错误，请联系管理员')
    downloadLoadingInstance.close();
  })
  }
  export default requests