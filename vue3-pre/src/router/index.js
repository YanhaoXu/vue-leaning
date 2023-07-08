// 路由入口文件

// createRouter 创建路由实例
// createWebHashHistory hash模式 地址上有#
// createWebHistory 历史模式
import { createRouter, createWebHashHistory } from "vue-router";

// 静态引入Layout框架组件
import Layout from "@/layout/Layout.vue";

// 配置项 配置路由地址和路由组件的一一对应关系
export const routes = [
  { path: "/", redirect: "/base" }, // 路由重定向
  {
    path: "/base", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        component: () => import("@/views/base/index.vue"),
      },
    ],
  },
  {
    path: "/base-directive", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/base-directive/index.vue"),
      },
    ],
  },
  {
    path: "/css-scope", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/css-scope/index.vue"),
      },
    ],
  },
];

// 创建路由实例 导入配置项和模式
const router = createRouter({
  routes, // 路由配置项
  history: createWebHashHistory(), // 模式
});

// 导出路由实例
export default router;
