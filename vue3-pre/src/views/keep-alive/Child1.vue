<template>
  <div>
    <h3>子组件1</h3>
    <input type="text" name="" id="">
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log("子组件1 onMounted 挂载");
})

onUnmounted(() => {
  console.log("子组件1 onUnmounted 销毁");
})

onActivated(() => {
  console.log("子组件1 onActivated 激活");
})

onDeactivated(() => {
  console.log("子组件1 onDeactivated 失活");
})

</script>

<style lang="scss" scoped></style>0