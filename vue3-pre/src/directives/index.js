// 导入 自定义指令
import copy from "./copy";
import focus from "./focus";

// app.directive("自定义指令名", 自定义指令配置项)

// 把自定义指令封装成函数
const directives = { copy, focus };

// 导出一个函数 形参是app
export function useDirectives(app) {
  // 遍历键名循环注册
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key]);
  });
}
