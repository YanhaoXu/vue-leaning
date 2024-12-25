<script>
import { defineComponent, h } from "vue";
export default defineComponent({
  setup() {
    return () => h("div", [h("h3", "Foo 组件")]);
  },
});
</script>
