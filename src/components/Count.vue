<template>
 <div>
   {{$store.getters.count}}
 </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";

export default class Count extends Vue {}
</script>