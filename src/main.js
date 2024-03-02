import './styles.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './lang'
import '@/config/vee-validate/rules'
import '@/config/vee-validate/messages'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css'


const app = createApp(App)
app.use(PrimeVue);
app.use(router)
app.use(createPinia())
app.use(i18n)
app.mount('#app')
