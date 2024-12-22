// 全局入口文件
// 导入createApp函数用于创建app实例
import { createApp } from "vue";

// 引入重置样式
import "@/assets/reset.scss";

// 导入顶级根组件
import App from "./App.vue";

// 创建实例
const app = createApp(App);

// 导入路由
import router from "./router";
// 使用路由
app.use(router);

// 引入自定义指令自动注册函数
import { useDirectives } from "./directives";
// 执行函数传入app
useDirectives(app);

// 引入自定义插件
import myPlugin from "@/plugins/myPlugin";
// 插件使用 app.use(插件, 配置项)
app.use(myPlugin, { name: "小橘猫" });

// 引入pinia & 使用pinia插件
import { createPinia } from "pinia";
app.use(createPinia());

// 引入动画
import "animate.css";

// 挂载app实例 在index.html的id为app的div内部
app.mount("#app");
