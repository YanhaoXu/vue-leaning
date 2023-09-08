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
    path: "/on-bind", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/on-bind/index.vue"),
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
  {
    path: "/setup", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/setup/index.vue"),
      },
    ],
  },
  {
    path: "/ref", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/ref/index.vue"),
      },
    ],
  },
  {
    path: "/reactive", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/reactive/index.vue"),
      },
    ],
  },
  {
    path: "/toRef-toRefs", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/toRef-toRefs/index.vue"),
      },
    ],
  },
  {
    path: "/shallowRef", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/shallowRef/index.vue"),
      },
    ],
  },
  {
    path: "/customRef", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/customRef/index.vue"),
      },
    ],
  },
  {
    path: "/utils-fn", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/utils-fn/index.vue"),
      },
    ],
  },
  {
    path: "/computed", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/computed/index.vue"),
      },
    ],
  },
  {
    path: "/watch", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/watch/index.vue"),
      },
    ],
  },
  {
    path: "/watchEffect", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/watchEffect/index.vue"),
      },
    ],
  },
  {
    path: "/life-cycle", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/life-cycle/index.vue"),
      },
    ],
  },
  {
    path: "/father-child", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/father-child/index.vue"),
      },
    ],
  },
  {
    path: "/v-model", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/v-model/index.vue"),
      },
    ],
  },
  {
    path: "/tabs", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/tabs/index.vue"),
      },
    ],
  },
  {
    path: "/shopcar", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/shopcar/index.vue"),
      },
    ],
  },
  {
    path: "/todo", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/todo/index.vue"),
      },
    ],
  },
  {
    path: "/slot", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/slot/index.vue"),
      },
    ],
  },
  {
    path: "/expose", // 配置路由地址
    component: Layout, //配置组件
    children: [
      // children里面渲染二级路由
      {
        path: "",
        // 路由懒加载,输入路由地址才会加载
        component: () => import("@/views/expose/index.vue"),
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
