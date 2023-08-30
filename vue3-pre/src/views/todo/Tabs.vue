<template>
  <div>
    <h3>底部切换按钮</h3>
    <button @click="changeStatus(key)" v-for="(val, key) in statusMap">
      {{ val }}
    </button>
  </div>
</template>

<script setup>
// 子组件接收父组件的数据
defineProps({
  statusMap: Object,
});

// 定义事件
const emit = defineEmits(["change:status"]);

// 改变status
function changeStatus(msg) {
  emit("change:status", msg);
}
</script>

<style lang="scss" scoped></style>
