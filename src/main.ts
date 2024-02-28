import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore: element-plus
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import 'virtual:svg-icons-register'
import MyPlugin from '@/components'

const app = createApp(App)
app.mount('#app')
app.use(ElementPlus, { locale: zhCn })
app.use(MyPlugin)
