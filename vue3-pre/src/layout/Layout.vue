<template>
  <div class="layout df">
    <div class="navs fn df fdc">
      <router-link
        class="link df jcc aic mb10"
        v-for="item in routes.filter((v) => v.path !== '/')"
        :to="item.path"
        :key="item.path"
      >
        {{ item.path }}
      </router-link>
    </div>
    <div class="app-main f1 p15">
      <!--路由视图组件-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
// 导入路由配置项
import { routes } from "../router";
console.log("routes", routes);
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  .navs {
    overflow-y: scroll;
    width: 140px;
    background: sandybrown;
    .link {
      flex: none;
      height: 40px;
      background: darkcyan;
      color: white;
    }
  }
}

.router-link-active {
  background: firebrick !important;
}
.app-main {
  overflow: scroll;
  .page-css {
    color: salmon;
  }
}
</style>
