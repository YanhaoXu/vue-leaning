<template>
  <div>
    <h1>supense 懒加载提示组件</h1>
    <h3>顶层异步await 配合suspense</h3>
    <Suspense>
      <Child1 />
      <!-- 具名插槽 #fallback 在组件渲染前 占位提示 -->
      <template #fallback>
        loading...
      </template>
    </Suspense>
    <hr>
    <h3>异步组件配合suspense</h3>
    <Suspense>
      <Child2>
      </Child2><template #fallback>
        loading...
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import Child1 from './Child1.vue';

// 异步组件
const Child2 = defineAsyncComponent(() => import("./Child2.vue"))

</script>

<style lang="scss" scoped></style>