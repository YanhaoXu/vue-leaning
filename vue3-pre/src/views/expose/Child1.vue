<template>
  <div>
    <h3>子组件</h3>
  </div>
</template>

<script>
import { defineComponent } from "vue";

// options语法 推荐卸载defineComponent里面
// options语法 组件数据和方法是默认暴露出去的
export default defineComponent({
  data() {
    return {
      msg: "你好啊",
    };
  },
  methods: {
    getMsg() {
      console.log(this.msg);
    },
  },
});
</script>

<style lang="scss" scoped></style>
