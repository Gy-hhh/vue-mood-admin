<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
  </router-view>
  <router-view v-if="!$route.meta.keepAlive" :key="key"></router-view>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useRoute } from 'vue-router';
  export default defineComponent({
    setup() {
      const $route = useRoute();
      const key = computed(() => $route.path + Math.random());
      return{key}
    }
  })
</script>
<style lang="less">
@import './assets/css/main.css';
@import './assets/css/color-dark.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
