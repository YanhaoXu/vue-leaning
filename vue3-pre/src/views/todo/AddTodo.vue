<template>
  <div>
    <h3>添加</h3>
    <div>
      <input type="text" v-model="newTask" @keyup.enter="add" />
      <button @click="add">新增</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 新增数据字符串
const newTask = ref("");

// 定义事件
const emit = defineEmits(["add"]);

// 新增
function add() {
  // 把数据拼接在数组头部
  // taskList.unshift({
  //   name: newTask.value,
  //   done: false,
  // });

  emit("add", {
    name: newTask.value,
    done: false,
  });

  //清空输入框
  newTask.value = "";
}
</script>

<style lang="scss" scoped></style>
