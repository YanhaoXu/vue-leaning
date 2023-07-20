<template>
  <div>
    <h1>基本語法</h1>
    <p>我是p标签</p>
    <h3>胡须语法</h3>
    <h3>num:{{ num1 }}</h3>
    <h3>函数:{{ getMsg() }}</h3>
    <h3>四则运算:{{ num1 + num2 }}</h3>
    <h3>三目运算运算:{{ false ? 40 : 60 }}</h3>
    <h3>短路运算符:{{ true && "你好啊" }}</h3>
    <h3>正则表达式:{{ /www/.test("wwwww") }}</h3>
  </div>
</template>

<script setup>
// 定义在全局的数据和方法 自动被模板解包 可以直接使用

// 胡须语法 {{表达式}}
const num1 = 20;
function getMsg() {
  return "hello";
}
// 四则运算
const num2 = 30;
</script>

<style lang="scss" scoped></style>
