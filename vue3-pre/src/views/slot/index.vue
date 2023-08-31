<template>
  <div>
    <h1>插槽</h1>
    <!-- 2. 使用组件 -->
    <my-child>
      <!-- 默认插槽/匿名插槽 -->
      <!-- v-slot 合并了 slot slot-scope -->
      <!-- v-slot可以简化为# -->
      <template #default="{ num }">
        <p>我是匿名插槽内容--{{ num }}</p>
      </template>
      <!-- 具名插槽 -->
      <template #cat="{ msg }">
        <p>我是具名插槽内容--{{ msg }}</p>
      </template>

      <!-- 作用域插槽依托于具名和匿名 -->

      <!-- 封装组件 1. 组件传参 2. 插槽 -->
    </my-child>
    <hr />
    <reply-item :item="item" v-for="item in replyList" :key="item.name">
      <template #avatar="{ src }">
        <img :src="src" alt="" />
      </template>
      <template #default>发送</template>
    </reply-item>
  </div>
</template>

<script setup>
// 1. 引入组件
import MyChild from "./MyChild.vue";
import ReplyItem from "./ReplyItem.vue";

// 回复数据
const replyList = [
  { name: "小橘猫1", text: "今天天气不错1", avatar: "https://temp.im/100x100" },
  { name: "小橘猫2", text: "今天天气不错2", avatar: "https://temp.im/100x100" },
  { name: "小橘猫3", text: "今天天气不错3", avatar: "https://temp.im/100x100" },
];
</script>

<style lang="scss" scoped></style>
