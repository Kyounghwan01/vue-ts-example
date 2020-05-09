<template>
  <div>
    <p>
      {{ alertMessage }}
    </p>
    {{ parentMessage }}
    {{test}}

    <button @click="counter">자식증가버튼</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";

@Component
export default class Children extends Vue {
  @Prop() public test?: string;
  @Prop() public parentMessage?: string;

  public alertMessage: string = "";

  // 감시할 속성명 지정,
  // watch 옵션(immediate: true) - 생성되지마자 실행
  // watch 옵션 - deep: 감시할 속성명이 객체인 경우 객체 내부 값이 바뀌는 것까지 감시한다.
  @Watch("parentMessage", { immediate: false, deep: true })
  public update(value: string, oldValue: string) {
    this.alertMessage = `메세지 업데이트 됨, ${value}`;
  }

  @Emit()
  public counter() {
    // console.log("counter");
  }
}
</script>

<style scoped></style>
