import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'home' */ '../views/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          title: '系统首页'
        },
        component: () =>
          import(/* webpackChunkName: 'dashboard' */ '../views/home/Home.vue')
      },
      {
        path: '/mood-essay',
        name: 'mood-essay',
        meta: {
          title: '心情随笔'
        },
        component: () =>
          import(
            /* webpackChunkName: 'mood-essay' */ '../views/mood-essay/MoodEssay.vue'
          )
      },
      {
        path: '/trifles',
        name: 'trifles',
        meta: {
          title: '鸡毛蒜皮'
        },
        component: () =>
          import(
            /* webpackChunkName: 'trifles' */ '../views/trifles/Trifles.vue'
          )
      },
      {
        path: '/statistics',
        name: 'statistics',
        meta: {
          title: '归档统计'
        },
        component: () =>
          import(
            /* webpackChunkName: 'trifles' */ '../views/statistics/Statistics.vue'
          )
      },
      {
        path: '/todo',
        name: 'todo',
        meta: {
          title: '代办事项'
        },
        component: () =>
          import(/* webpackChunkName: 'trifles' */ '../views/todo/Todo.vue')
      },
      {
        path: '/user-manage',
        name: 'user-manage',
        meta: {
          title: '用户管理'
        },
        component: () =>
          import(
            /* webpackChunkName: 'trifles' */ '../views/user-manage/UserManage.vue'
          )
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          title: '个人中心'
        },
        component: () =>
          import(/* webpackChunkName: 'user' */ '../views/user/User.vue')
      },
      {
        path: '/tabs',
        name: 'tabs',
        meta: {
          title: 'tab标签'
        },
        component: () =>
          import(/* webpackChunkName: 'tabs' */ '../views/Tabs.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () =>
      import(/* webpackChunkName: 'login' */ '../views/login/Login.vue')
  },
  // 未匹配的路径名称导航到该路径
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () =>
      import(
        /* webpackChunkName: "not-found" */ '../views/not-found/NotFound.vue'
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('userInfo');
  if (!role && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
});

export default router;
