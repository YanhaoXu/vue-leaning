<template>
  <div>
    <h1>购物车</h1>
    <table>
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in shopList" :key="item.name">
          <td><input type="checkbox" /></td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.count * item.price }}</td>
          <td><button @click="handleDel(index)">删除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// 购物车数据
const shopList = reactive([
  { name: "小衣服", price: 300, count: 3, isChecked: false },
  { name: "小裤子", price: 400, count: 4, isChecked: false },
  { name: "小帽子", price: 500, count: 5, isChecked: false },
  { name: "小裙子", price: 600, count: 6, isChecked: false },
  { name: "小背心", price: 700, count: 7, isChecked: false },
]);

// 删除
function handleDel(index) {
  console.log("index :>> ", index);
  // 删除
  shopList.splice(index, 1);
}
</script>

<style lang="scss" scoped></style>
