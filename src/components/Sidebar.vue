<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in menu">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}</el-menu-item
                >
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index"
                >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

type Menu = {
  icon: string;
  index: string;
  title: string;
};

export default defineComponent({
  setup() {
    const $route = useRoute();
    const $store = useStore();
    const userInfo = computed(() => $store.getters.userInfo);
    const userType = userInfo.value.userType
    let menu: Menu[] = []
    // 超级管理员菜单数据
    const menuRoot: Menu[] = [
      {
        icon: 'el-icon-s-home',
        index: '/',
        title: '系统首页'
      },
      {
        icon: 'el-icon-s-order',
        index: '/mood-essay',
        title: '心情随笔'
      },
      {
        icon: 'el-icon-s-order',
        index: '/trifles',
        title: '鸡毛蒜皮'
      },
      {
        icon: 'el-icon-s-order',
        index: '/statistics',
        title: '归档统计'
      },
      {
        icon: 'el-icon-s-order',
        index: '/todo',
        title: '代办事项'
      },
      {
        icon: 'el-icon-s-order',
        index: '/user-manage',
        title: '用户管理'
      }
    ]
    // 普通用户菜单数据
    const menuDefault: Menu[] = [
      {
        icon: 'el-icon-s-home',
        index: '/',
        title: '系统首页'
      },
      {
        icon: 'el-icon-s-order',
        index: '/mood-essay',
        title: '心情随笔'
      },
      {
        icon: 'el-icon-s-order',
        index: '/trifles',
        title: '鸡毛蒜皮'
      },
      {
        icon: 'el-icon-s-order',
        index: '/statistics',
        title: '归档统计'
      },
      {
        icon: 'el-icon-s-order',
        index: '/todo',
        title: '代办事项'
      }
    ];

    if(userType!=2){
        menu = menuRoot
    }else{
        menu = menuDefault
    }
    // 当前路由
    const onRoutes = computed(() => {
      return $route.path;
    });

    // 侧边栏折叠
    const collapse = computed(() => $store.state.collapse);

    return {
      menu,
      onRoutes,
      collapse
    };
  }
});
</script>

<style lang="less" scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.sidebar > ul {
  height: 100%;
}
</style>
