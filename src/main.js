import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import store from './store';
import Axios from 'axios';


Vue.config.productionTip = false

Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;
//Plugns da aplicação.
new Vue({
  vuetify,
  router,
  bootstrap,
  store,
  render: h => h(App)
}).$mount('#app')
