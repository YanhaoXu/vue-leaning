<template>
  <div>
    <h1>v-on & v-bind</h1>
    <h3>v-on 事件</h3>
    <button v-on:click="log666">打印666</button>
    <button @click="log666">打印666</button>
    <p>
      <input type="text" v-model="msg" @blur="log666" @input="showMsg" />
    </p>
    <p>
      <select @change="showSel">
        <option value="成都市">成都市</option>
        <option value="武汉市">武汉市</option>
        <option value="广州市">广州市</option>
      </select>
    </p>
    <hr />
    <h3>v-bind绑定属性</h3>
    <div class="box"></div>
    <!-- <div class="box" v-bind:class="box1"></div> -->
    <div class="box" :class="'box1'"></div>
    <h3>数组方式 + class</h3>
    <div class="box" :class="['box1', 'box2']"></div>
    <h3>对象方式 + class</h3>
    <div class="box" :class="{ box1: false, box2: true }"></div>
    <h3>三目运算方式 + class</h3>
    <div class="box" :class="false ? 'box1' : 'box2'"></div>
    <h3>短路运算符 + class</h3>
    <div class="box" :class="true && 'box1'"></div>
    <h3>v-bind + style</h3>
    <div class="box" :style="{ color: 'red', backgroundColor: 'green' }">
      我是内容
    </div>
    <div class="box" :style="styleObject">我是内容</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// v-on:事件名 = '表达式'
// @事件名='表达式'
function log666() {
  console.log("666", 666);
}

const msg = ref("你好啊");
function showMsg() {
  console.log(msg.value);
}

function showSel() {
  console.log("change");
}

// v-bind:自定义属性='表达式' 绑定自定义属性
// :自定义属性='表达式'

const styleObject = { color: "red", backgroundColor: "green" };
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  border: 10px solid #333;
  margin-bottom: 10px;
}
.box1 {
  background: darkcyan;
}
.box2 {
  box-shadow: 0 0 10px firebrick;
}
</style>
