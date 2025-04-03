import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  server: {
    hmr: true,// 启用热模块替换
    host: '0.0.0.0',// 监听所有网络接口
       proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VITE_BASE_API]: {
        target: `http://localhost:5173`,
        changeOrigin: true,
        rewrite: {
          ['^' + process.env.VITE_BASE_API]: ''
        }
      }
    },
  },
  optimizeDeps: {
    include: ['splitpanes','vue'],// 预构建依赖
  },
  plugins: [
    AutoImport({
        // 自动导入 Element Plus 组件
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // 自动注册 Element Plus 组件
      resolvers: [ElementPlusResolver()]
    }),
    vue()
  ]
})
