<script>
import { defineComponent, h } from "vue";
export default defineComponent({
  // 形参1 props接受父组件传递的数据
  // 形参2 解构slots 可以接收父组件传递的插槽内容

  setup(props, { slots }) {
    console.log("slots", slots);
    // slots.default() 默认插槽 调用父组件传递的虚拟dom
    return () =>
      h("div", [
        h("h3", "Foo 组件"),
        h("div", [slots.default(20), slots.king("小橘猫")]), //! 插槽的本质就是函数
      ]);
  },
});
</script>
