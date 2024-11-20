import { createApp } from 'vue'
//引入ElementPlus
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/style/index.css'
//引入路由
import router from './router/routes'


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
