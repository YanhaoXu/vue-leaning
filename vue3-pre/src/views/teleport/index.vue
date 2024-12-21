<template>
  <div>
    <h1>Teleport 传送门组件</h1>

    <button @click="visible = !visible">切换弹窗</button>
    <!-- to=class或者id -->
    <Teleport to="body">
      <div class="model" v-if="visible">
        <button @click="visible = false">关闭弹窗</button>
      </div>
    </Teleport>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const visible = ref(true)
</script>

<style lang="scss" scoped>
.model {
  width: 200px;
  height: 100px;
  background: darkgray;
  position: fixed;
  z-index: 999;
  left: 200px;
  top: 200px;
}
</style>