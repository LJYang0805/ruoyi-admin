import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '../store'
const routes = [
    {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },  {
    path: '/main',
    name: 'Main',
    component: () => import('../components/Main.vue'),
    redirect:'/dashboard',//设置默认子路由
    children: [
       {
    path: '/dashboard',
    name: 'Dashboard',
    component: ()=> import('../views/Dashboard/Dashboard.vue')
  },
  {
    path: '/system/user',
    name: 'User',
    component:()=> import('../views/User/user.vue')
  },
  {
    path: '/system/role',
    name: 'Role',
    component:()=> import('../views/Role/role.vue')
  }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
   //滚动行为，控制页面跳转时的位置，y是页面刚跳转至detail组件时，滚动条的位置
  scrollBehavior (to, from, savedPosition) {
    return {y:0}
  }
})
router.beforeEach((to, from, next) => {
  //to：可以获取到需要跳转到那个路由信息
  //from:可以获取到你从哪个路由而来的信息
  //next:放行函数 next()放行 next(path)放行到指定路由
  const store = useStore(); //创建useStore实例
   // 获取token
  const token = store.$state.token || sessionStorage.getItem('TOKEN'); // 获取token，支持store和sessionStorage
    //如果已有token，就不能通过修改地址栏跳转到Login页面
  if (token) {
    // 如果修改地址到Login页面则会跳转到Main组件
   if (to.path==='/') {
     next('/main')
   } else {
     //如果修改至其他任何页面都直接放行
     next()
    }
    //如果没有token，修改地址栏的任何页面都会跳转至login页面
  } else {
    if (to.path !== '/') {
      next('/')
    } else {
      next()
    }
  }
});
export default router