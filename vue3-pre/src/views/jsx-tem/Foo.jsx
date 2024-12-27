import { defineComponent } from "vue";

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <div>
        <h3>Foo 组件</h3>
        <div>{slots.default("小橘猫")}</div>
        <div>{slots.king(20)}</div>
      </div>
    );
  },
});
