import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/css/bootstrap-grid.min.css'
import './assets/bootstrap/js/bootstrap.bundle.min.js'

export const apiKey = '//apikey'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
