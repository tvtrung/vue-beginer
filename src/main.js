import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'

import {routers_data} from './routers'
import Vuex from 'vuex'
import Storage from './store/index'
import Bus from './bus/EventBus'
import NotieGlobal from './plugins/notie-global'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);
Vue.use(Bus);
Vue.use(NotieGlobal);

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routers_data,
    strict: true, // applies to all routes
})

const store = new Vuex.Store(Storage);
//store.state.a // -> `moduleA`'s state
//store.state.b // -> `moduleB`'s state

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
