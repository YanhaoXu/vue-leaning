/* 获取鼠标位置 */
import { onMounted, onUnmounted, ref } from "vue";

export default function useMousemove() {
  // vue2 通过mixins混淆抽离js公共逻辑
  // vue3 组合式函数 抽离js公共逻辑 实现逻辑复用

  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
    console.log("666 :>> ", 666);
  }

  onMounted(() => window.addEventListener("mousemove", update));

  onUnmounted(() => window.removeEventListener("mousemove", update));

  // 外面需要使用的数据 进行返回出去
  return { x, y };
}
