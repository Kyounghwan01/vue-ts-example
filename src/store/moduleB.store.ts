import { Module } from "vuex";
import { RootState } from "@/store/index.ts";

interface ModuleB {
  data: string;
}

const module: Module<ModuleB, RootState> = {
  namespaced: true,
  state: {
    data: "ModuleB"
  },
  mutations: {
    setData(state, data: string) {
      state.data = data;
    }
  },
  actions: {
    setRootData({ commit }, data: string) {
      commit("setData", data);
    }
  },
  getters: {
    data: state => state.data
  }
};

export default module;
