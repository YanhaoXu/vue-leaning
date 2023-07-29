<template>
  <div>
    <h1>watch 侦听器 & watchEffect 副作用侦听器</h1>
    <h3>num: {{ num }}</h3>
    <button @click="($event) => num++">num++</button>
    <h3>person: {{ person }}</h3>
    <button @click="($event) => person.age++">修改person</button>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

// ref创建的基本数据
const num = ref(10);

// reactive创建的引用数据
const person = reactive({
  name: "小橘猫",
  age: 11,
});

// watch侦听器
// 1 观察单个数据变化
watch(num, (newVal, oldVal) => {
  // 观察数据变化 执行回调函数里面代码
  console.log("newVal :>> ", newVal);
  console.log("oldVal :>> ", oldVal);
});

watch(
  () => person.age,
  (newVal, oldVal) => {
    // 观察数据变化 执行回调函数里面代码
    console.log("newVal :>> ", newVal);
    console.log("oldVal :>> ", oldVal);
  }
);

// 2 观察多个数据变换
</script>

<style lang="scss" scoped></style>
