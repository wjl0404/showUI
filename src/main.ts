import { createApp } from 'vue'
// import './style.css'
import './styles/index.scss'
import App from './App.vue'
import Button from './button'
import ShowmeUI from '../build'
import '../build/style.css'

// createApp(App).use(Button).mount('#app')

createApp(App).use(ShowmeUI).mount('#app')
