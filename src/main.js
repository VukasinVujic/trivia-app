import Vue from "vue";
import App from "./App.vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from "vuex";
Vue.use(Vuex);

import { store } from "./store";
import { router } from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
