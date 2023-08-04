<template>
  <div>
    <h1>watch 侦听器</h1>
    <h3 ref="numRef">num: {{ num }}</h3>
    <button @click="($event) => num++">num++</button>
    <h3>person: {{ person }}</h3>
    <button @click="($event) => person.age++">修改person</button>
    <button @click="($event) => (person.k1[0].k2 = 999)">修改深层</button>
    <button @click="stop">停止侦听</button>
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
  k1: [{ k2: 666 }],
});

// watch侦听器 观察数据变化 执行回调函数里面的代码
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
watch([num, () => person.age], (newVal, oldVal) => {
  // 观察数据变化 执行回调函数里面代码
  console.log("newVal :>> ", newVal);
  console.log("oldVal :>> ", oldVal);
});

// 3 观察数据变化 配置项
const numRef = ref(null);

watch(
  [num, person],
  (newVal, oldVal) => {
    // 观察数据变化 执行回调函数里面代码
    console.log("oldVal :>> ", oldVal);
    console.log("newVal :>> ", newVal);
    console.log("numRef.value.textContent :>> ", numRef.value.textContent);
  },
  {
    // immediate: true, // 立即执行 回调函数里面代码
    deep: true, // 深度监听
    flush: "pre", //默认 pre dom更新前执行 post更新后执行 sync dom更新同步执行
  }
);

// 4 watch onCleanup 清除回调
watch(num, (newVal, oldVal, onCleanup) => {
  console.log("newVal :>> ", newVal);

  let timer = setInterval(() => {
    console.log("666");
  }, 200);

  // 清空回调里面的挂载的属性和方法
  onCleanup(() => {
    console.log("清空");
    clearInterval(timer);
  });
});

// 5 停止侦听
const stop = watch(num, () => {
  console.log("更新");
});
</script>

<style lang="scss" scoped></style>
