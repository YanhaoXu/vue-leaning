<template>
  <div>
    <h1>pinia 配置项语法</h1>
    <h3>渲染方式1</h3>
    <h3>num:{{ numStore.num }}</h3>
    <h3>doubleNum:{{ numStore.doubleNum }}</h3>
    <h3>渲染方式2 toRefs解构响应式数据</h3>
    <h3>num:{{ num }}</h3>
    <h3>doubleNum:{{ doubleNum }}</h3>
    <h3>渲染方式3 响应式连接</h3>
    <h3>numC:{{ numC }}</h3>
    <h3>doubleNumC:{{ doubleNumC }}</h3>
    <hr />
    <h3>方法使用</h3>
    <button @click="numStore.increaseNum">num++</button>
    <button @click="increaseNum">increaseNum++</button>
    <button @click="decreaseNum(-2)">decreaseNum-2</button>
    <button @click="changeNum">asyncChangeNum+2</button>
  </div>
</template>

<script setup>
// 导入仓库hook函数
import { useNumStore } from "@/store/num";
import { storeToRefs } from "pinia";
import { computed } from "vue";

// 实例化仓库
const numStore = useNumStore();
console.log("numStore :>> ", numStore);

// 渲染方式2 解构响应式数据
const { num, doubleNum } = storeToRefs(numStore);
console.log("num :>> ", num);
console.log("doubleNum :>> ", doubleNum);

// computed 进行响应式结构
const numC = computed(() => numStore.num);
const doubleNumC = computed(() => numStore.num);
console.log("numC :>> ", numC);
console.log("doubleNumC :>> ", doubleNumC);

// 解构方法
const { increaseNum, decreaseNum, asyncChangeNum } = numStore;

// 控制异步执行
async function changeNum() {
  // 等待Promise执行完毕
  await asyncChangeNum();
  // 执行后面代码
  console.log("异步完成");
}
</script>

<style lang="scss" scoped></style>
