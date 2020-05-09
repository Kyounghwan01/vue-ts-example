import Vue from "vue";
import Vuex, { StoreOptions, ActionContext } from "vuex";
import moduleA from "./moduleA.store";
import moduleB from "./moduleB.store";

Vue.use(Vuex);

export interface RootState {
  data: string;
}

const store = {
  modules: {
    moduleA,
    moduleB
  },
};

export default new Vuex.Store(store);
