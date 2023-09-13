<template>
  <div></div>
</template>

<script setup>
// setup语法糖 组件内部默认关闭 无法通过外部ref访问组件内数据和方法
import { ref } from "vue";

// 定义数据和方法
const msg = ref("你好啊2");
const getMsg = () => {
  console.log("msg.value :>> ", msg.value);
};
// 暴露了组件 想要暴露的数据和方法
defineExpose({ msg, getMsg });
</script>

<style lang="scss" scoped></style>
