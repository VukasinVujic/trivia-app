import Vue from "vue";
import Vuex from "vuex";

import { ChuckModule } from "./moduls/ChuckModule";
import { TriviaModule } from "./moduls/TriviaModule";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ChuckModule,
    TriviaModule
  }
});
