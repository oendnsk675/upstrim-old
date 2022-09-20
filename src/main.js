import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/index.css'; // Here
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';




library.add(fas)

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8000/api/v1/';

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(VueSweetalert2)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
