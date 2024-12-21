<template>
  <div>
    <h3>子组件1</h3>
  </div>
</template>

<script setup>
// 模拟顶层异步
await new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, 2000)
})

console.log('666 :>> ', 666);
</script>

<style lang="scss" scoped></style>