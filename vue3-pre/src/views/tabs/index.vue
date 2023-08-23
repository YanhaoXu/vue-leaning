<template>
  <div>
    <h1>选项卡</h1>
    <!-- 点击哪个按钮 把其 index 索引 赋值给 activeIndex -->
    <button
      :class="index === activeIndex && 'active'"
      v-for="(item, index) in navs"
      @click="activeIndex = index"
      :key="item"
    >
      {{ item }}
    </button>
    <!-- 当前索引 !== 选中索引 显示 -->
    <div
      v-for="(item, index) in contents"
      :hidden="index !== activeIndex"
      :key="item"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const navs = ["导航1", "导航2", "导航3"];
const contents = ["内容1", "内容2", "内容3"];

// 选中索引
const activeIndex = ref(0);
</script>

<style lang="scss" scoped>
.active {
  background: saddlebrown;
  color: white;
}
</style>
