<template>
  <div>
    <h1>pinia 组合式api用法</h1>
    <h3>直接使用仓库数据</h3>
    <h3>count:{{ counterStore.count }}</h3>
    <h3>doubleCount:{{ counterStore.doubleCount }}</h3>
    <h3>响应式解构</h3>
    <h3>count:{{ count }}</h3>
    <h3>doubleCount:{{ doubleCount }}</h3>
    <h3>计算属性</h3>
    <h3>countC:{{ countC }}</h3>
    <h3>doubleCountC:{{ doubleCountC }}</h3>
    <hr />
    <h3>方法使用</h3>
    <button @click="increaseCount">increaseCount++</button>
    <button @click="decreaseCount(-2)">decreaseCount-2</button>
    <button @click="asyncChangeCount">count异步</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";
import { computed } from "vue";
// 实例化仓库
const counterStore = useCounterStore();
console.log("counterStore", counterStore);

// 解构方法
const { increaseCount, decreaseCount, asyncChangeCount } = counterStore;

// 响应式解构数据
const { count, doubleCount } = storeToRefs(counterStore);

// 计算属性
const countC = computed(() => {
  return counterStore.count;
});
const doubleCountC = computed(() => {
  return counterStore.doubleCount;
});
</script>

<style lang="scss" scoped></style>
