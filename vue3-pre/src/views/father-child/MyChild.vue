<template>
  <div>
    <h3>子组件</h3>
    <p>字符串: {{ msg }}</p>
    <p>数字: {{ num }}</p>
    <p>数组: {{ list }}</p>
    <p>对象: {{ obj }}</p>

    <hr />
    <p>num: {{ props.num }}</p>

    <button @click="sendNum">子组件传递数据</button>
  </div>
</template>

<script setup>
// 单向数据流原则: 父组件传递数据给子组件 修改数据也只能父组件去修改

// 通过 defineProps 接受父组件传递的函数
const props = defineProps({
  // 完全语法
  msg: {
    type: String,
    // required: true,
    default: "我是默认数据",
  },
  // 简单语法
  // msg: String,

  num: {
    type: Number,
    default: 20,
  },
  list: {
    type: Array,
    default: [2, 2, 2],
  },
  obj: {
    type: Object,
  },
});

console.log("props :>> ", props);
console.log("props.obj :>> ", props.obj);

// 父传子的数据 不可以直接修改 因为违背了单向数据流
// props.msg ="666"

// 定义事件
const emit = defineEmits(["update:num"]);

// 方法
function sendNum() {
  // emit 自定义时间, 数据
  emit("update:num", 30);
}
</script>

<style lang="scss" scoped></style>
