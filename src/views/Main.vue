<template>
  <Header />
  <Sidebar />
  <div class="content-box" :class="{ 'content-collapse': collapse }">
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { LoopType } from '@/types/types';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default defineComponent({
  components: {
    Header,
    Sidebar
  },
  setup() {
    const store = useStore();

    // 缓存列表
    const tagsList = computed(() =>
      store.state.tagsList.map((item: LoopType) => item.name)
    );

    // 侧边栏折叠
    const collapse = computed<boolean>(() => store.state.collapse);
    return {
      tagsList,
      collapse
    };
  }
});
</script>
