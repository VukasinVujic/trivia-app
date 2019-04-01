import Vue from "vue";
import VueRouter from "vue-router";
import TriviaApp from "./components/TriviaApp.vue";
import Chuck from "./components/Chuck.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/trivia" },
  { path: "/trivia", component: TriviaApp, name: "trivia" },
  { path: "/chuck", component: Chuck, name: "chuck" }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
