<template>
  <div>
    <h1>customRef 自定义Ref</h1>
    <h3>{{ num }}</h3>
    <button @click="($event) => num++">num++</button>
    <h3>{{ num2 }}</h3>
    <button @click="($event) => num2++">num2++</button>
  </div>
</template>

<script setup>
import { customRef } from "vue";

// track 依赖收集
// trigger 派发更新
let temp = 20;
const num = customRef((track, trigger) => ({
  get() {
    // 访问数据做依赖收集
    track();
    return temp;
  },
  set(newVal) {
    console.log("newVal :>> ", newVal);
    temp = newVal;
    // 设置值的时候做派发更新
    trigger();
  },
}));

console.log("num :>> ", num);

// 自定义数据
const num2 = useThrottle(30, 1000);

// 封装一个hooks函数
function useThrottle(value, wait) {
  // 变量loding 储存状态
  let loading = false;

  return customRef((track, trigger) => ({
    get() {
      // 依赖收集
      track();
      return value;
    },
    set(newValue) {
      if (loading) return;

      loading = true;
      // 数据赋值
      value = newValue;
      // 派发更新
      trigger();
      // 等待一段时间之后 把loading还原成false
      setTimeout(() => {
        loading = false;
      }, wait);
    },
  }));
}
</script>

<style lang="scss" scoped></style>
