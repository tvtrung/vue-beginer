import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import {routers_data} from './routers'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers_data
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
