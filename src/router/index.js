import { createRouter, createWebHashHistory } from 'vue-router'

import Recommend from '@/views/Recommend'
import Singer from '@/views/Singer'
import TopList from '@/views/TopList'
import Search from '@/views/Search'

const routes = [
  {
    path: '/',
    redirect: 'recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
