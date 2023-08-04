<template>
  <div>
    <h1>生命周期钩子函数</h1>
    <h3 ref="numRef">{{ num }}</h3>
    <button @click="num++">num++</button>
  </div>
</template>

<!-- <script>
export default {
  beforeCreate() {
    console.log("创建前", "beforeCreate");
  },
  setup() {
    console.log("setup", "setup");
  },
};
</script> -->

<script setup>
import {
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

const num = ref(10);

// 绑定dom元素
const numRef = ref(null);
console.log("numRef", numRef.value);

// 组合式api 生命周期钩子函数 都是以on开头的函数
console.log("setup");

// 定义变量储存定时器
const timer = ref(null);

// 初始化发ajax请求 直接在setup函数内发
// onBeforeMount生命周期存在感就比较小了
onBeforeMount(() => {
  console.log("挂载前", "onBeforeMount");
  console.log("numRef", numRef.value);
});

// 操作dom ***
onMounted(() => {
  console.log("挂载后", "onMounted");
  console.log("numRef", numRef.value);

  timer.value = setInterval(() => {
    console.log(666);
  }, 200);
});

onBeforeUpdate(() => {
  console.log("更新前 :>> ", numRef.value.textContent);
  console.log("更新前", "onBeforeUpdate");
});

onUpdated(() => {
  console.log("更新后 :>> ", numRef.value.textContent);
  console.log("更新后", "onUpdated");
});

// 销毁前 清除挂载在全局的属性和方法 ***
onBeforeUnmount(() => {
  console.log("销毁前 ", "onBefourUnmounted");
  console.log("num.value :>> ", num.value);
  console.log("销毁前 :>> ", numRef.value.textContent);

  // 清除定时器
  // clearInterval(timer.value);
});

// 销毁后 也能获取数据 但是不能获取dom
// 销毁后 清除挂载在全局的属性和方法
onUnmounted(() => {
  console.log("销毁后", "onUnmounted");
  console.log("num.value :>> ", num.value);
  // console.log("销毁后 :>> ", numRef.value.textContent);

  // 清除定时器
  clearInterval(timer.value);
});
</script>

<style lang="scss" scoped></style>
