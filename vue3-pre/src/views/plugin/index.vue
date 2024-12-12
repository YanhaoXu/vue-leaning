<template>
  <div>
    <h1>vue3 插件 plugin</h1>
    <h3>全局组件</h3>
    <my-button>我是全局按钮</my-button>
    <hr>
    <div v-hh>我是div</div>
    <hr>
    <h3>全局属性和方法</h3>
    <div>{{ $abc }}</div>
    <button @click="sayHi">点击hi</button>
  </div>
</template>

<script setup>
import { getCurrentInstance, inject } from 'vue';
const { $abc, sayHi } = getCurrentInstance().appContext.config.globalProperties
console.log('$abc :>> ', $abc);
console.log('sayHi :>> ', sayHi);

// inject注入数据
const $num = inject("$num")
console.log('$num :>> ', $num);

</script>

<style lang="scss" scoped></style>