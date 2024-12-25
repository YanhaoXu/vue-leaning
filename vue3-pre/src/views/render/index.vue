<script>
import { defineComponent, h, reactive, ref } from "vue";
import Foo from "./Foo.vue";

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

    const hr = h("hr");

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
        // 组件
        h(Foo, {}),
      ]);
  },
});
</script>
