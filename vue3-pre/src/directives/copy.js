// 复制copy

export default {
  // 挂载后执行一次复制
  mounted(el, binding) {
    const { value } = binding;
    console.log("挂载 :>> ", value);
    // 按钮点击 执行复制api
    el.onclick = () => {
      // 复制api
      navigator.clipboard.writeText(value).then(() => {
        console.log(value + "复制成功");
      });
    };
  },
  // 更新后执行一次复制
  updated(el, binding) {
    const { value } = binding;
    console.log("更新 :>> ", value);
    // 按钮点击 执行复制api
    el.onclick = () => {
      // 复制api
      navigator.clipboard.writeText(value).then(() => {
        console.log(value + "复制成功");
      });
    };
  },
};
