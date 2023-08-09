<template>
  <div>
    <h1>父子传参</h1>
    <!-- 2. 使用组件 -->
    <!-- 单标签语法 -->
    <!-- <MyChild /> -->
    <!-- 双标签语法 短横线分割命名法 -->
    <!-- 父传子 通过 自定义属性='值' -->
    <my-child
      msg="我是父组件传递的数据"
      :num="num"
      :list="[1, 2, 3, 4]"
      :obj="{ name: '小橘猫' }"
      @update:num="getNum"
    ></my-child>

    <!-- 父组件接受子组件传递的数据 -->
    <!-- @update:num="getNum" -->
    <!-- @update:num="num = $event" -->

    <button @click="num++">num++</button>
  </div>
</template>

<script setup>
// 1. 引入组件
import { ref } from "vue";
import MyChild from "./MyChild.vue";

const num = ref(20);

// 处理函数 形参接受自组建传递的数据
function getNum(val) {
  console.log("val :>> ", val);
  // 通知父组件 更新数据
  num.value = val;
}
</script>

<style lang="scss" scoped></style>
