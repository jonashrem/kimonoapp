import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
import { FormSelectPlugin } from 'bootstrap-vue'
import router from './router'
import './registerServiceWorker'
Vue.use(FormSelectPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
