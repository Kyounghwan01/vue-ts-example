import Vue from "vue";
import Vuex, { StoreOptions, ActionContext } from "vuex";

Vue.use(Vuex);

interface State {
  count: number;
}

// storeOptions은 타입이 이미 vuex에 정의되어 있다
// vuex에서는 어떻가 사용되는지 알 수 있고 state는 generic은 s타입이다.
const store: StoreOptions<State> = {
  // generic으로 state강제화
  state: {
    count: 0
  },
  mutations: {
    setCount(state: State, count: number) {
      state.count = count;
    }
  },
  actions: {
    increse(
      { state, getters, dispatch, commit }: ActionContext<State, State>,
      params: number
    ) {
      commit("setCount", state.count + 1);
    },

    decrese({ state, commit }: ActionContext<State, State>) {
      commit("setCount", state.count - 1);
    }
  },
  getters: {
    count: (state: State) => state.count
  }
};

export default new Vuex.Store(store);
