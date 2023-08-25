<template>
  <div>
    <h1>购物车</h1>
    <h3>总数量: {{ calcTotalCount }}</h3>
    <h3>总价格: {{ calcTotalPrice }}</h3>
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="allChecked" @change="handleAll" />
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in shopList" :key="item.name">
          <td>
            <input
              type="checkbox"
              @change="handleCheck"
              v-model="item.isChecked"
            />
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="item.count > 1 && item.count--">-</button>
            {{ item.count }}
            <button @click="item.count < 10 && item.count++">+</button>
          </td>
          <td>{{ item.count * item.price }}</td>
          <td><button @click="handleDel(index)">删除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

// 购物车数据
const shopList = reactive([
  { name: "小衣服", price: 300, count: 3, isChecked: false },
  { name: "小裤子", price: 400, count: 4, isChecked: false },
  { name: "小帽子", price: 500, count: 5, isChecked: false },
  { name: "小裙子", price: 600, count: 6, isChecked: false },
  { name: "小背心", price: 700, count: 7, isChecked: false },
]);

// 全选数据
const allChecked = ref(false);

// 删除
function handleDel(index) {
  console.log("index :>> ", index);
  // 删除
  shopList.splice(index, 1);
}

// 全选事件
function handleAll() {
  console.log("allChecked.value :>> ", allChecked.value);
  // 把全选数据赋值给所有小 checkbox
  shopList.forEach((v) => {
    v.isChecked = allChecked.value;
  });
}
// 触发全选
function handleCheck() {
  // 所有isChecked 为 true allChecked 才为 true
  allChecked.value = shopList.every((v) => v.isChecked);
}

// 计算总数量
const calcTotalCount = computed(() => {
  return shopList.reduce((total, cur) => {
    // 当前 √ 才叠加 当前不打 √ 把当前数据移植到下一次中
    return cur.isChecked ? total + cur.count : total;
  }, 0);
});

// 计算总价格
const calcTotalPrice = computed(() => {
  return shopList.reduce((total, cur) => {
    return cur.isChecked ? total + cur.count * cur.price : total;
  }, 0);
});
</script>

<style lang="scss" scoped></style>
