// vue3 插件
// // 1. 插件本身是一个对象 暴露install方法
// const myPlugin = {
//   // app就是全局实例 options可以接受插件的配置项
//   install(app, options) {
//     console.log("app :>> ", app);
//     console.log("options :>> ", options);
//   },
// };

import MyButton from "@/components/MyButton.vue";

// 2. 插件本身就是一个函数
const myPlugin = (app, options) => {
  console.log("options :>> ", options);
  // 1. 注册全局组件
  app.component("MyButton", MyButton);
  // 2. 注册全局自定义指令
  app.directive("hh", () => {
    console.log("哈哈");
  });
  // 3. 注册全局属性和方法
  // 全局属性
  app.config.globalProperties.$abc = "abc";
  // 全局方法
  app.config.globalProperties.sayHi = () => {
    console.log("hi");
  };
  // 4. 提供全局数据
  app.provide("$num", 30);
};
export default myPlugin;
