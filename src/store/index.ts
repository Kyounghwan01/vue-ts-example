import Vue from "vue";
import Vuex, { StoreOptions, ActionContext } from "vuex";
import ModlueA from "./moduleA.store";
import moduleB from "./moduleB.store";
import Counter from "./counter";

Vue.use(Vuex);

export interface RootState {
  data: string;
}

const store = {
  modules: {
    ModlueA,
    moduleB,
    Counter
  },
};

export default new Vuex.Store(store);
