import Vue from "vue";
import VueRouter from "vue-router";
import TriviaApp from "./components/TriviaApp.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/trivia" },
  { path: "/trivia", component: TriviaApp, name: "trivia" }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
