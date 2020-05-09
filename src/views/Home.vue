<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Message></Message>
    <Children :parentMessage="message" :test="test" @counter="counter" />
    <p>
      부모의 카운트 : {{ count }}
    </p>
    <!-- <button @click="changeMessage">메세지 바꾸는 버튼</button> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Message from "@/components/Message.vue";
import Children from "@/components/Children.vue";

@Component({
  components: {
    Message,
    Children
  }
})
export default class Home extends Vue {
  public message: string = "hello world!";
  public test: string = "test";
  public count: number = 0;

  public changeMessage() {
    this.message = "change";
  }

  public counter() {
    this.count++;
  }
}
</script>
