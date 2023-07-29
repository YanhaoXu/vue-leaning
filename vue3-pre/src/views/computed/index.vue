<template>
  <div>
    <h3>computed 计算属性</h3>
    <h3>num: {{ num }}</h3>
    <h3>doubleNum: {{ doubleNum }}</h3>
    <h3>doubleNum: {{ doubleNum }}</h3>
    <h3>doubleNum: {{ doubleNum }}</h3>
    <h3>doubleNum: {{ doubleNum }}</h3>
    <h3>doubleNum: {{ doubleNum }}</h3>
    <h3>tripleNum: {{ tripleNum }}</h3>
    <h3>doubleNumFn: {{ doubleNumFn() }}</h3>
    <h3>doubleNumFn: {{ doubleNumFn() }}</h3>
    <h3>doubleNumFn: {{ doubleNumFn() }}</h3>
    <h3>doubleNumFn: {{ doubleNumFn() }}</h3>
    <h3>doubleNumFn: {{ doubleNumFn() }}</h3>
    <button @click="($event) => num++">num++</button>
    <button @click="($event) => tripleNum++">tripleNum++</button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

// 计算属性具备缓存

const num = ref(10);

// computed 计算属性 计算得到返回值
// 只有getter
const doubleNum = computed(() => {
  console.log("执行计算属性");
  return num.value * 2;
});
// doubleNum.value = 20;

// getter 和 setter 模式
const tripleNum = computed({
  // 访问value属性 触发getter函数
  get() {
    return num.value * 3;
  },

  // 修改value属性 触发setter函数
  set(newVal) {
    console.log("newVal :>> ", newVal);
    num.value = newVal / 3;
  },
});

// 函数获取num2值
function doubleNumFn() {
  console.log("函数执行");
  return num.value * 2;
}
</script>

<style lang="scss" scoped></style>
