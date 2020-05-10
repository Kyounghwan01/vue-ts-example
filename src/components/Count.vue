<template>
  <div>
    awd
    {{ count }}
  </div>
</template>

<script lang="ts">
// vuex-class 데코레이터 사용
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";
import { Getter, namespace } from "vuex-class";

// @getter을 모듈 안에 있는 것을 사용할 때
const someModule = namespace("Counter");

@Component
export default class Count extends Vue {
  // @Getter public readonly 'Counter/count'!: number;
  @someModule.Getter public readonly count!: number;
}
</script>
