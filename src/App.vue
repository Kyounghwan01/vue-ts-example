<template>
  <div id="app">
    {{ $store.state }}
    <Count />
    <button @click="increse">증가</button>
    <button @click="decrese">감소</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";
import Count from "./components/Count.vue";
import { Action, namespace } from "vuex-class";

import { getModule } from "vuex-module-decorators";
import MyStore from "@/store/moduleA.store.ts";
const someModule = namespace("Counter");

@Component({
  components: {
    Count
  }
})
export default class App extends Vue {
  public moduleA: any;
  public created() {
    this.moduleA = getModule(MyStore, this.$store);
    this.$store.dispatch("ModlueA/setData", "q");
    this.$store.dispatch("moduleB/setRootData", "testtestBBB");
  }

  @someModule.Action public readonly increse: any;
  // public increse() {
  //   this.$store.dispatch("Counter/increse");
  // }

  @someModule.Action public readonly decrese: any;
  // public decrese() {
  //   this.$store.dispatch("Counter/decrese");
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
