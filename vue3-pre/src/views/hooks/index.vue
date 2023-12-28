<template>
  <div>
    <h1>组合式函数 hooks语法</h1>
    <div>{{ x }} -- {{ y }}</div>
    <div class="div" :style="{ width: width + 'px' }"></div>
  </div>
</template>

<script setup>
import useMousemove from "@/hooks/useMousemove";
import { useBodyWidth } from "@/hooks/useBodyWidth";

// 调用hooks函数 解构外面需要使用的参数
const { x, y } = useMousemove();

const { width } = useBodyWidth(400);
</script>

<style lang="scss" scoped>
.div {
  height: 100px;
  background: skyblue;
}
</style>
