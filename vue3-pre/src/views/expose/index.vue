<template>
  <div>
    <h1>父组件</h1>
    <Child1 ref="child1Ref" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Child1 from "./Child1.vue";

// 组合式api语法 推荐写在setup语法糖里面
const child1Ref = ref(null);

onMounted(() => {
  console.log(child1Ref);
  console.log("child1Ref.value.msg :>> ", child1Ref.value.msg);
  child1Ref.value.getMsg();
});
</script>

<style lang="scss" scoped></style>
