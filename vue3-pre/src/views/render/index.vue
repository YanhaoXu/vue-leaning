<script>
import {
  defineComponent,
  h,
  onMounted,
  reactive,
  ref,
  withDirectives,
} from "vue";
import Foo from "./Foo.vue";
import Bar from "./Bar.vue";

export default defineComponent({
  setup() {
    const num = ref(10);
    const flag = ref(false);
    const list = reactive([
      { name: "小橘猫1" },
      { name: "小橘猫2" },
      { name: "小橘猫3" },
      { name: "小橘猫4" },
    ]);
    const msg = ref("小橘猫");

    const hr = h("hr");

    // 自定义指令 聚焦
    const focus = {
      mounted(el, binding) {
        console.log("binding.value", binding.value);
        // 聚焦
        el.focus();
        // 数据赋值
        el.value = binding.value;
      },
    };

    // 模板引用
    const divRef = ref();
    onMounted(() => {
      console.log("divRef.value", divRef.value);
    });

    // 返回渲染函数
    return () =>
      h("div", [
        h("h1", { id: "h", class: "m", style: { color: "#333" } }, "渲染函数"),
        h("h3", "响应式数据 num:" + num.value),
        h(
          "button",
          {
            onClick() {
              num.value++;
              flag.value = !flag.value;
              console.log("num.value", num.value);
            },
          },
          "num++"
        ),
        hr,
        // v-if
        h("h3", "v-if"),
        h("div", [flag.value ? h("span", "我是true") : h("span", "我是false")]),
        hr,
        // v-for
        h("h3", "v-for"),
        h("ul", [list.map((item) => h("li", { key: item.name }, item.name))]),
        // 组件 插槽
        h("h3", "插槽"),
        h(Foo, null, {
          // 默认插槽
          default: (props) => h("div", "我是默认插槽default--" + props),
          // 具名插槽
          king: (props) => h("div", "我是具名插槽king--" + props),
        }),
        // 组件通信
        h("h3", "组件通信"),
        h(Bar, {
          msg: msg.value,
          num: 20,
          "onUpdate:msg": (data) => {
            msg.value = data;
          },
        }),
        hr,
        // 自定义指令
        h("h3", "自定义指令"),
        withDirectives(h("input"), [[focus, "大花猫"]]),
        h("h3", "模板引用"),
        h("div", { ref: divRef }, "我是一个div"),
      ]);
  },
});
</script>
