import { createApp } from 'vue'
//引入ElementPlus
import ElementPlus from "element-plus"
import { zhCn } from 'element-plus/es/locales.mjs'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/style/index.css'
//引入路由
import router from './router/index'
//引入pinia
import { createPinia } from 'pinia'
//引入sSplitpanes组件
import { Splitpanes, Pane } from "splitpanes";
//引入splitpanes分格器样式
import "splitpanes/dist/splitpanes.css";
import Pagination from './components/Pagination/index.vue'//引入分页器
import RightToolbar from './components/RightToolbar/index.vue'//引入右侧小工具
import Vue3Treeselect from "vue3-treeselect";//引入Treeselect组件
import "vue3-treeselect/dist/vue3-treeselect.css";// 引入 Treeselect 的样式文件

const pinia = createPinia()//创建pinia实例
const app = createApp(App)
// 配置全局 warnHandler
app.config.warnHandler = (msg, instance, trace) => {
  // 忽略 Prop 验证失败的警告
  if (/Invalid prop|Failed prop type/.test(msg)) {
    return;
  }

  // 忽略特定组件或属性的警告
  if (msg.includes('ElTag') && msg.includes('type')) {
    return;
  }

  // 其他警告正常输出到控制台
  console.warn(msg, instance, trace);
};
app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.use(pinia)//使用pinia
// 注册 Splitpanes 和 Pane 组件
app.component('Splitpanes', Splitpanes);
app.component('Pane', Pane);
app.component('Pagination', Pagination)
app.component('RightToolbar', RightToolbar)
app.component('Vue3Treeselect', Vue3Treeselect)
app.mount('#app')

