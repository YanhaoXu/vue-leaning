// 路由入口文件

// createRouter 创建路由实例
// createWebHashHistory hash模式 地址上有#
// createWebHistory 历史模式
import { createRouter, createWebHashHistory } from 'vue-router';

// 配置项 配置路由地址和路由组件的一一对应关系

const routes  = []

// 创建路由实例 导入配置项和模式
const router = createRouter({
  routes, // 路由配置项
  history:createWebHashHistory(),// 模式
})

// 导出路由实例
export default router
