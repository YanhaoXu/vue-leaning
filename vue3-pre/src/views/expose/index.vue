<template>
  <div>
    <h1>父组件</h1>
    <Child1 ref="child1Ref" />
    <Child2 ref="child2Ref" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";

// 组合式api语法 推荐写在setup语法糖里面
const child1Ref = ref(null);
const child2Ref = ref(null);

onMounted(() => {
  console.log(child1Ref);
  console.log("child1Ref.value.msg :>> ", child1Ref.value.msg); // 你好啊
  child1Ref.value.getMsg();
  console.log("-------------------------");
  console.log(child2Ref);
  console.log("child2Ref.value.msg :>> ", child2Ref.value.msg); // 你好啊2
  child2Ref.value.getMsg(); // 你好啊2
});
</script>

<style lang="scss" scoped></style>
