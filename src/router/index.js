import { createRouter, createWebHistory } from 'vue-router'
import { userStore } from '../store/user.js'
import { isReLogin } from '../utils.js/requests.js'
import { filterDynamicRoutes } from '../plugins/auth.js'
//公共路由
export const constantRoutes = [
    {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },  {
    path: '/main',
    name: 'Main',
    component: () => import('../components/main.vue'),
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
//动态路由
export const dynamicRoutes = [
      {
        name: 'authUser',
        path: 'system/user-auth/:userId',  // 不要以 `/` 开头
        component: () => import('../views/User/authUser.vue'),
        meta: { permissions: ['system:user:edit'] }
      },
      {
        name: 'roleUser',
        path: 'system/role-auth',
        component: () => import('../views/Role/authRole.vue'),
        meta: { permissions: ['system:role:edit'] }
      }
];

const router = createRouter({
  history: createWebHistory(),
  routes:constantRoutes,
   //滚动行为，控制页面跳转时的位置，y是页面刚跳转至detail组件时，滚动条的位置
  scrollBehavior (to, from, savedPosition) {
    return {y:0}
  }
})


router.beforeEach((to, from, next) => {
  //to：可以获取到需要跳转到那个路由信息
  //from:可以获取到你从哪个路由而来的信息
  //next:放行函数 next()放行 next(path)放行到指定路由
  const store = userStore(); //创建userStore实例
   // 获取token
  const token = store.$state.token || sessionStorage.getItem('TOKEN'); // 获取token，支持store和sessionStorage
    //如果已有token，就不能通过修改地址栏跳转到Login页面
  if (token) {
    // 如果修改地址到Login页面则会跳转到Main组件
    const store = userStore()
    if (store.$state.roles.length === 0) {
      store.GetInfo().then(async() => {
        isReLogin.show = true
        const accessRoutes = filterDynamicRoutes(dynamicRoutes)
        accessRoutes.forEach((item) => {
          if (!router.hasRoute(item.name)) {//如果没有添加该路由才能添加
            router.addRoute('Main',item)
          } 
        })
        console.log("动态路由已注册", router.getRoutes());
        next({ path: to.fullPath, replace: true }); // 关键！重新跳转一次，确保路由生效
      }).catch(error => {
        console.error('获取角色失败',error);
        next('/')
      })
    } else {
      if (to.path==='/') {
     next('/main')
   } else {
     //如果修改至其他任何页面都直接放行
     next()
    }
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