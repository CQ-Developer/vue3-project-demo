import { createApp } from 'vue'
import App from './App.vue'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore: element-plus
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg
import 'virtual:svg-icons-register'
// 自定义插件
import MyPlugin from '@/components'
// 引入全局样式
import '@/styles/index.scss'

const app = createApp(App)
app.mount('#app')
app.use(ElementPlus, { locale: zhCn })
app.use(MyPlugin)
