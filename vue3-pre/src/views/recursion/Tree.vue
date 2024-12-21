<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.name">
        {{ item.name }}
        <button
          @click="item.expand = !item.expand"
          v-if="item.children?.length"
        >
          {{ item.expand ? "-" : "+" }}
        </button>
        <!-- 递归 -->
        <Tree v-show="item.expand" :data="item.children" />
      </li>
    </ul>
  </div>
</template>

<!-- setup函数语法糖 组件名===文件名.vue -->
<script setup>
defineProps({ data: Array });
</script>

<style lang="scss" scoped></style>
