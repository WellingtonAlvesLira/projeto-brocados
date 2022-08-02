import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'



Vue.config.productionTip = false

//Plugns da aplicação.
new Vue({
  vuetify,
  router,
  bootstrap,

  render: h => h(App)
}).$mount('#app')
