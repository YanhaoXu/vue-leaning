import { defineComponent } from "vue";

export default defineComponent({
  props: ["msg", "num"],
  // 定义事件名
  emits: ["update:num"],
  setup(props, { emit }) {
    return () => (
      <div>
        <h3>Bar 组件通信</h3>
        <p>num:{props.msg}</p>
        <p>num:{props.num}</p>
        {/* 子传父触发函数传递数据 */}
        <button onClick={() => emit("update:num", 30)}>更新num</button>
      </div>
    );
  },
});
