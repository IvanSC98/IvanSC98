import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router";
import VueScrollProgress from 'vue-scroll-progress' 

Vue.config.productionTip = false
Vue.use(VueScrollProgress)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

