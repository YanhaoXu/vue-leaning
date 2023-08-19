<template>
  <div>
    <h3>子组件</h3>
    <p>{{ modelValue }}</p>
    <p>{{ xx }}</p>
    <button @click="changeMsg">子组件修改msg</button>
    <button @click="changeXx">子组件修改xx</button>
  </div>
</template>

<script setup>
// defineProps 来接受父组件传递的数据
defineProps({
  modelValue: String,
  xx: Boolean,
});
// 定义事件
const emit = defineEmits(["update:modelValue", "update:xx"]);
function changeMsg() {
  // emit 触发自定义事件, 数据
  emit("update:modelValue", "大黑猫");
}

function changeXx() {
  emit("update:xx", true);
}
</script>

<style lang="scss" scoped></style>
