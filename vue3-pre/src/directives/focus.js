// 聚焦focus
export default {
  // 形参el 获取dom binding.value获取指令的值
  // 创建后
  created(el, binding) {},
  // 挂载前
  beforeMount(el, binding) {},
  // 挂载后
  mounted(el, binding) {
    console.log("el :>> ", el);
    console.log("binding :>> ", binding);
    el.focus();
  },
  // 更新前
  beforeUpdate(el, binding) {},
  // 更新后
  updated(el, binding) {},
  // 销毁前
  beforeUnmount(el, binding) {},
  // 销毁后
  unmounted(el, binding) {},
};
