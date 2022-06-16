import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerElement from './global/index'
import 'normalize.css'
import '@/assets/css/index.less'

const app = createApp(App)
// 注册
app.use(registerElement)
app.use(store)
store.dispatch('login/loadLoginStatus')
app.use(router)
app.mount('#app')
