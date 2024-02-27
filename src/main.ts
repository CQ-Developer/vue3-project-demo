import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore: element-plus
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import 'virtual:svg-icons-register'

const app = createApp(App)
app.mount('#app')
app.use(ElementPlus, { locale: zhCn })
