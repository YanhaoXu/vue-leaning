<template>
  <div>
    <h1>递归组件</h1>
    <!-- 使用递归组件 -->
    <Tree :data="treeData" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Tree from "./Tree.vue";

// 地柜树形结构数据
const treeData = reactive([
  {
    name: "小橘猫1",
    children: [
      {
        name: "小橘猫1-1",
        children: [
          {
            name: "小橘猫1-1-1",
          },
        ],
      },
      {
        name: "小橘猫1-2",
      },
      {
        name: "小橘猫1-3",
      },
    ],
  },
  {
    name: "小橘猫2",
    children: [
      {
        name: "小橘猫2-1",
      },
      {
        name: "小橘猫2-2",
        children: [
          {
            name: "小橘猫2-2-1",
          },
        ],
      },
      {
        name: "小橘猫2-3",
      },
    ],
  },
  {
    name: "小橘猫3",
  },
]);
</script>

<style lang="scss" scoped></style>
