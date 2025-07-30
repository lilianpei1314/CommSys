import { createWebHashHistory, createRouter, } from 'vue-router'

import Layout from '@/pages/layout/index.vue'
import NotFound from '@/pages/404.vue'
import Login from '@/pages/login.vue'
import Register from '@/pages/register.vue'
import Activity from '@/pages/activity/activity.vue'
import Club from '@/pages/club/club.vue'
import Mine from '@/pages/mine/mine.vue'
import Home from '@/pages/home/home.vue'
const routes = [
  {
    path: "/",
    component: Layout,
    redirect: '/home',
    children: [
      {
        name: 'home',
        path: "/home",
        meta: {
          title: '首页'
        },
        component: Home
      },
      {
        name: 'club',
        path: "/club",
        meta: {
          title: '社团列表'
        },
        component: Club
      },
      {
        name: 'activity',
        path: "/activity",
        meta: {
          title: '活动列表'
        },
        component: Activity
      },
      {
        name: 'mine',
        path: "/mine",
        meta: {
          title: '个人中心'
        },
        component: Mine
      },
    ],
  },
  {
    path: "/:pashMatch(.*)*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router 