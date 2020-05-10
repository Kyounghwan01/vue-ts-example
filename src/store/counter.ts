import Vue from "vue";
import Vuex, { StoreOptions, ActionContext, Module } from "vuex";
import { RootState } from "@/store/index.ts";

interface Counter {
  count: number;
}

// storeOptions은 타입이 이미 vuex에 정의되어 있다
// vuex에서는 어떻가 사용되는지 알 수 있고 state는 generic은 s타입이다.
const module: Module<Counter, RootState> = {
  // generic으로 state강제화
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    setCount(state, count: number) {
      state.count = count;
    }
  },
  actions: {
    increse(
      { state, getters, dispatch, commit }, params: number
    ) {
      commit("setCount", state.count + 1);
    },

    decrese({ state, commit }) {
      commit("setCount", state.count - 1);
    }
  },
  getters: {
    count: (state: Counter) => state.count
  }
};

export default module;
