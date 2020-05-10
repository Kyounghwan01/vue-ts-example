import { Module, Mutation, Action, VuexModule } from "vuex-module-decorators";

@Module({ namespaced: true, name: "moduleA" })
export default class ModlueA extends VuexModule {
  public data: string = "moduleA";

  @Mutation
  public SET_DATA(data: string) {
    this.data = data;
  }

  // mutation과 동일한 이름이면 안된다.
  @Action
  public setData(data: string) {
    this.context.commit("SET_DATA", data);
  }
  // state의 값과 중복안됨
  get moduleAData() {
    return this.data;
  }
}

// import { Module } from "vuex";
// import { RootState } from "@/store/index.ts";

// interface ModuleA {
//   data: string;
// }

// const module: Module<ModuleA, RootState> = {
//   namespaced: true,
//   state: {
//     data: "ModuleA"
//   },
//   mutations: {
//     setData(state, data: string) {
//       state.data = data;
//     }
//   },
//   actions: {
//     setRootData({ commit }, data: string) {
//       commit("setData", data);
//     }
//   },
//   getters: {
//     data: state => state.data
//   }
// };

// export default module;
