<template>
  <div>
    <h1>todoList</h1>
    <!-- 新增 -->
    <AddTodo @add="addData" />
    <!-- 渲染Item -->
    <TodoItem
      @change:done="taskList[$event].done = true"
      :item="item"
      :index="index"
      v-for="(item, index) in filterList"
      :key="item.name"
    />
    <!-- 切换状态 -->
    <Tabs @change:status="status = $event" :statusMap="statusMap" />
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import AddTodo from "./AddTodo.vue";
import Tabs from "./Tabs.vue";
import TodoItem from "./TodoItem.vue";

// 处理函数 形参val 收到子组件传递的数据
function addData(val) {
  // 父组件添加数据
  taskList.unshift(val);
}

// 全部 未完成 已完成
const taskList = reactive([
  { name: "吃饭", done: false },
  { name: "睡觉", done: true },
  { name: "打豆豆", done: false },
]);

// 显示状态 all/全部 done/已完成 undone/未完成
const status = ref("all");
// 底部状态
const statusMap = {
  all: "全部",
  undone: "未完成",
  done: "已完成",
};
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
