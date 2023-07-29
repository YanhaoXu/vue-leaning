<template>
  <div>
    <h1>vue3 工具函数</h1>
    <p>person: {{ person }}</p>
    <p>person.name: {{ name }}</p>
    <p>person.age: {{ age }}</p>
    <p>person.sex: {{ sex }}</p>
    <button @click="($event) => (person.name = '大花猫')">修改person</button>
    <button @click="($event) => (name = '大花猫')">修改name</button>
    <h3>{{ readPerson }}</h3>
    <button @click="readPerson.name = '大花猫'">修改readPerson</button>
  </div>
</template>

<script setup>
import {
  ref,
  isRef,
  unref,
  reactive,
  toRef,
  toRefs,
  isProxy,
  isReactive,
  isReadonly,
  readonly,
  toRaw,
} from "vue";

const num = ref(10);

// isRef判断是否是ref创建的数据
console.log("isRef(num) :>> ", isRef(num));
console.log("isRef(20) :>> ", isRef(20));

// unref 获取ref数据的value值
console.log("unRef(num) :>> ", unref(num));
console.log("unRef(20) :>> ", unref(20));
console.log("20 :>> ", 20);

// toRef & toRefs 解构reactive响应式数据属性 拥有和源数据的响应式链接
const person = reactive({
  name: "小橘猫",
  age: 11,
  sex: true,
  address: {
    city: "成都市",
    point: [111, 222],
  },
});

const name = toRef(person, "name");

const { age, sex } = toRefs(person);

// isProxy 判断数据是否为reactive or readonly创建的数据
const p1 = new Proxy(
  {},
  {
    get() {},
    set() {},
  }
);
console.log("isProxy(p1) :>> ", isProxy(p1)); // false
console.log("isProxy(person) :>> ", isProxy(person)); // true

// 创建一个readonly数据
const readPerson = readonly({
  name: "小橘猫",
  age: 11,
});

console.log("isProxy(readPerson) :>> ", isProxy(readPerson)); // true
console.log("isReadonly(readPerson) :>> ", isReadonly(readPerson)); // true
console.log("isReactive(readPerson) :>> ", isReactive(readPerson)); // true
console.log("isReactive(person) :>> ", isReactive(person)); // false

// toRaw 获取reactive的原始值
console.log("toRaw(person) :>> ", toRaw(person));
</script>

<style lang="scss" scoped></style>
