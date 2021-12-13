import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router";
import VueScrollProgress from 'vue-scroll-progress' 
import VCalendar from 'v-calendar'

Vue.use(VCalendar, {
  locales: {
    'es-ES': {
      firstDayOfWeek: 1,
      masks: {
        L: 'YYYY-MM-DD',
        // ...optional `title`, `weekdays`, `navMonths`, etc
      }
    }
  }
});

Vue.config.productionTip = false
Vue.use(VueScrollProgress)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

