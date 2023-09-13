<template>
  <!-- 穿透的属性默认绑定在最外层的元素上 -->
  <div>
    <h3>子组件</h3>
    <!-- <div>{{ msg }} -- {{ num }} -- {{ class }}</div> -->
    <!-- 模板里面的$attrs也能获取父组件传递的属性和方法 -->
    <!-- vue2 $attrs 和 $listeners vue3合并为$attrs -->
    <div>{{ $attrs }}</div>
    <!-- <button cat="小橘猫" age="11">我是按钮</button> -->
    <button v-bind="{ name: '小橘猫', age: '11' }">我是按钮</button>
    <button v-bind="$attrs">我是新按钮</button>
  </div>
</template>
<!-- <script>
export default {
  // 禁用最外层的属性和方法穿透
  inheritAttrs: false,
  // 给子组件命名
  name: "MyChild",
};
</script> -->
<script setup>
import { useAttrs } from "vue";

// defineProps 接受的数据 子组件最外层会消失
// defineProps(["msg", "num", "class"]);

// $attrs 来接受

const $attrs = useAttrs();
console.log("$attrs :>> ", $attrs);
$attrs.onXx();
console.log("$attrs.onXx :>> ", $attrs.onXx);
</script>

<style lang="scss" scoped></style>
