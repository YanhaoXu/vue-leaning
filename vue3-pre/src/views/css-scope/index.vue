<template>
  <div class="page-css">
    <h1>css作用域</h1>
    <div class="box"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  border: 4px solid #666;
}

.page-css {
  color: blue;
}
</style>
