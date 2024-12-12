<template>
  <div>
    <h1>自定义指令</h1>
    <input type="text" v-focus="10" v-model="text">
    <hr>
    <input type="text" v-model="msg">
    <button v-copy="msg">复制</button>
  </div>
</template>

<script setup>
import { ref } from "vue";


const msg = ref("小橘猫")
const text = ref("文本")

</script>

<style lang="scss" scoped></style>
