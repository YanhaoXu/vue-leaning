// numStore 仓库

// defineStore定义仓库函数
import { defineStore } from "pinia";

// 定义仓库 & 导出仓库
export const useNumStore = defineStore("numStore", {
  // state 状态/数据
  state: () => {
    return { num: 10 };
  },
  // 计算属性
  getters: {
    doubleNum() {
      return this.num * 2;
    },
  },
  // 函数 和 vuex区别 没有mutations
  actions: {
    // 不传参
    increaseNum() {
      this.num++;
    },
    // 传参
    decreaseNum(val) {
      this.num += val;
    },
    // 异步方法
    asyncChangeNum() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.num += 2;
          // 切换状态为成功
          resolve();
        }, 1000);
      });
    },
  },
});
