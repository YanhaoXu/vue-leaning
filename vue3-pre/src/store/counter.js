// 创建组合式api仓库

import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counterStore", () => {
  // 数据
  const count = ref(10);
  // 计算属性
  const doubleCount = computed(() => count.value * 2);
  // 方法
  function increaseCount() {
    count.value++;
  }
  function decreaseCount(val) {
    count.value += val;
  }
  function asyncChangeCount() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 修改数据
        count.value += 2;
        // 切换状态为已成功
        resolve();
      }, 1000);
    });
  }

  // 把外面需要使用的数据和方法 返回出去
  return { count, doubleCount, increaseCount, decreaseCount, asyncChangeCount };
});
