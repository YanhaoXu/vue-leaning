<template>
  <div>
    <h1>属性穿透 attrs</h1>
    <Child msg="你好啊" :num="10" class="box" @xx="log" @click="log777" />
  </div>
</template>

<script setup>
import Child from "./Child.vue";

function log() {
  console.log("666 :>> ", 666);
}

function log777() {
  console.log("777 :>> ", 777);
}
</script>

<style lang="scss" scoped></style>
