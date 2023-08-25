<template>
  <div>
    <h1>todoList</h1>
    <!-- 新增 -->
    <div>
      <input type="text" v-model="newTask" @keyup.enter="add" />
      <button @click="add">新增</button>
    </div>
    <!-- 渲染列表 -->
    <div v-for="(item, index) in filterList" :key="item.name">
      {{ item.name }}
      <button v-if="!item.done" @click="item.done = true">完成</button>
    </div>
    <!-- 切换状态 -->
    <div>
      <button @click="status = 'all'">全部</button>
      <button @click="status = 'undone'">未完成</button>
      <button @click="status = 'done'">已完成</button>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

// 新增数据字符串
const newTask = ref("");

// 新增
function add() {
  // 把数据拼接在数组头部
  taskList.unshift({
    name: newTask.value,
    done: false,
  });
  //清空输入框
  newTask.value = "";
}

// 全部 未完成 已完成
const taskList = reactive([
  { name: "吃饭", done: false },
  { name: "睡觉", done: true },
  { name: "打豆豆", done: false },
]);

// 显示状态 all/全部 done/已完成 undone/未完成
const status = ref("all");

// 筛选数据
const filterList = computed(() => {
  switch (status.value) {
    case "all":
      return taskList;
      break;
    case "done":
      return taskList.filter((v) => v.done);
      break;
    case "undone":
      return taskList.filter((v) => !v.done);
      break;
    default:
      throw new Error("未知的选项");
      break;
  }
});

// console.log("filterList.value :>> ", filterList.value);
</script>

<style lang="scss" scoped></style>
