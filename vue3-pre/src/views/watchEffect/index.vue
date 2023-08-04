<template>
  <div>
    <h1>watchEffect 副作用侦听器</h1>
    <h3>{{ num }}</h3>
    <button @click="num++">num++</button>
    <button @click="stop">停止侦听</button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
const num = ref(10);

// 副作用侦听器
// 1 初始化执行回调函数里面的代码
// 2 当回调函数里面有响应式数据变化 执行回调函数代码
// 3 参数2传递配置项 配置项里只有flush
// 4 回调函数 形参是清除函数 onCleanUp 可以清除回调里面的挂载的属性和方法
// 5 返回停止函数 停止侦听 会执行一次清除函数
const stop = watchEffect(
  (onCleanUp) => {
    console.log("num.value :>> ", num.value);
    let num2 = num.value;
    console.log("num2 :>> ", num2);

    let timer = setInterval(() => {
      console.log(666);
    }, 200);

    onCleanUp(() => {
      console.log("清除");
      clearInterval(timer);
    });
  },
  { flush: "post" } // flush: pre post sync | dom更新 前 后 同步
);
</script>

<style lang="scss" scoped></style>
