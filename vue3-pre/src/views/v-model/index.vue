<template>
  <div>
    <h1>v-model</h1>
    <h3>v-model 绑定元素底层实现</h3>
    <input type="text" v-model="msg" />
    <p>{{ msg }}</p>
    <hr />
    <h3>v-model 手动实现</h3>
    <!-- <input type="text" :value="msg" @input="changeMsg" /> -->
    <input type="text" :value="msg" @input="msg = $event.target.value" />
    <hr />
    <input type="checkbox" v-model="flag" />
    <p>{{ flag }}</p>
    <!-- 标签 $event 事件源 -->
    <input
      type="checkbox"
      :checked="flag"
      @change="falg = $event.target.checked"
    />
    <h3>v-model 绑定组件</h3>
    <!-- 组件$event 接受子组件传递的数据 -->
    <!-- <my-child :msg="msg" @abc="msg = $event"></my-child> -->
    <my-child :modelValue="msg" @update:modelValue="msg = $event"></my-child>
    <!-- vue2 .sync修饰符可以做父子组件数据同步 -->
    <!-- vue3 v-model 父子组件数据同步 替换了 vue.sync 修饰符 -->
    <my-child v-model="msg" v-model:xx="flag"></my-child>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 引入子组件
import MyChild from "./MyChild.vue";

const msg = ref("小橘猫");
const flag = ref(false);

// <input type="text" :value="msg" @input="changeMsg" />
// function changeMsg(e) {
//   console.log("e :>> ", e);
//   msg.value = e.target.value;
// }
</script>

<style lang="scss" scoped></style>
