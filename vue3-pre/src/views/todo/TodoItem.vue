<template>
  <div>
    {{ item.name }}
    <button v-if="!item.done" @click="changeDone(index)">完成</button>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
  index: Number,
});
// 定义事件
const emit = defineEmits(["change:done"]);
// 修改状态
function changeDone(index) {
  // 子传父 通知父组件修改数据
  emit("change:done", index);
}
</script>

<style lang="scss" scoped></style>
