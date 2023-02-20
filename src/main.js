import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.config.globalProperties.routeJump = function (params) {
  console.log(params);
}

app.use(createPinia())
app.use(router)

app.mount('#app')
