<script>
import { defineComponent, h } from "vue";
export default defineComponent({
  // 主动接受父组件传递的数据
  props: ["msg", "num"],
  // 1. 定义子传父的事件名
  emits: ["update:msg"],
  setup(props, { emit }) {
    return () =>
      h("div", [
        h("h3", "组件通信"),
        h("div", props.msg),
        h("div", "num:" + props.num),
        h(
          "button",
          {
            onClick() {
              // 子传父 emit(自定义事件名, 数据)
              emit("update:msg", "大花猫");
            },
          },
          "更新msg"
        ),
      ]);
  },
});
</script>
