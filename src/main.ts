import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'uno.css'

import Vue3Lottie from 'vue3-lottie'
import router from '@/router'

import App from './App.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(Vue3Lottie, { name: 'Vue3Lottie' })
app.use(ElementPlus)

app.mount('#app')
