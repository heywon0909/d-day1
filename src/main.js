import Vue from 'vue'
import App from './App.vue'
import Vuetify from './plugins/vuetify'
import router from './router/index.js'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(Vuetify);

new Vue({
  Vuetify,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
