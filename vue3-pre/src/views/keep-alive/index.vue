<template>
  <div>
    <h1>keep-alive 缓存组件</h1>

    <button @click="flag = !flag">切换</button>
    <!-- 缓存组件keep-alive -->
    <!-- 包裹的组件会生成两个生命周期 激活activated 失活deactivated -->
    <!-- 组件不会销毁 -->
    <!-- keep-alive只能包含一个组件 -->
    <!-- <keep-alive>
      <Child1 v-if="flag" />
    </keep-alive> -->

    <hr>
    <!-- include包含 exclude不包含 -->
    <!-- 可以传入字符串 正则 数组 -->
    <!-- max最大缓存数量 -->
    <keep-alive :include="/Child1/" :max="10">
      <component :is="flag ? Child1 : Child2" />
    </keep-alive>

    <hr>
    <h3>页面缓存</h3>
    <input type="text" name="" id="">

  </div>
</template>
<script>
export default { name: "Keep" }
</script>
<script setup>
import { ref } from 'vue';
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'

const flag = ref(true)

</script>

<style lang="scss" scoped></style>