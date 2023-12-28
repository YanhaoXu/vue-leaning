/* 获取屏幕宽度 得到width */
import { onMounted, onUnmounted, ref } from "vue";

export function useBodyWidth(limit = 0) {
  const width = ref(0);

  function widthUpdate() {
    const BODY_WIDTH = document.body.clientWidth;
    width.value = BODY_WIDTH - limit;
  }

  onMounted(() => {
    // 初始化执行一次
    widthUpdate();
    // 屏幕变化执行一次
    window.addEventListener("resize", widthUpdate);
  });

  // 组件销毁时 拆卸挂载在全局的属性和方法
  onUnmounted(() => {
    window.removeEventListener("resize", widthUpdate);
  });

  // 外面要使用的数据 return返回+-
  return { width };
}
