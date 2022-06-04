import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router'
import "./styles/index.css"

const app = createApp(App)

app.use(router)
  .mount('#app')
