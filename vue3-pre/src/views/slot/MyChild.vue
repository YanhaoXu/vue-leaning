<template>
  <div>
    <h3>子组件</h3>
    <!-- 默认插槽 占位 -->
    <slot :num="10" />
    <hr />
    <!-- 具名插槽 占位 -->
    <slot name="cat" msg="我是小橘猫"></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
