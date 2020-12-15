import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BIcon, BIconChevronDown, BIconChevronRight } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.component('BIcon', BIcon)
Vue.component('BIconChevronDown', BIconChevronDown)
Vue.component('BIconChevronRight', BIconChevronRight)

new Vue({
  render: h => h(App),
}).$mount('#app')
