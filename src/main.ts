import { createApp } from 'vue'
import App from './App'
import { store, key } from './config/store'
import router from './config/routerGuard'
import 'element-plus/lib/theme-chalk/index.css'
createApp(App).use(router).use(store, key).mount('#app')
