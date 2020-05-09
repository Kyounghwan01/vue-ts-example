<template>
  <div class="div">
    <input type="text" v-model="message" />
    <div>{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// Class선언 후 vue를 상속받는다., 클래스를 컴포넌트로 사용하기위해 컴포넌트 데코레이터를 붙인다.
@Component
export default class Message extends Vue {
  public message: string = "메세지를 입력해주세요";
}
</script>

<style scoped></style>
