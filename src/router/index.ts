import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '~/layouts/home.vue'
// import { setupLayouts } from 'virtual:generated-layouts'
// import generatedRoutes from '~pages'

// const routes = setupLayouts(generatedRoutes)
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// })

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/MonitorKanban/Overview',
    // component: Layout,
    // meta: { title: '首页' },
    // children: [
    //   {
    //     path: '/',
    //     name: 'home',
    //     component: () => import('~/pages/index.vue'),
    //   },
    // ],
  },
  {
    path: '/login',
    component: () => import('~/pages/login.vue'),
  },
  {
    path: '/MonitorKanban',
    component: Layout,
    meta: { title: '监控看板' },
    children: [
      {
        path: '/MonitorKanban/Overview',
        meta: { title: '概览' },
        component: () => import('~/pages/MonitorKanban/Overview.vue'),
      },
      {
        path: '/MonitorKanban/ClientMonitor',
        meta: { title: '客户端监控' },
        component: () => import('~/pages/MonitorKanban/ClientMonitor.vue'),
      },
    ],
  },
  {
    path: '/FirmwareUpgrade',
    component: Layout,
    meta: { title: '固件升级' },
    children: [
      {
        path: '/FirmwareUpgrade/VersionMonitor',
        meta: { title: '版本监控' },
        component: () => import('~/pages/FirmwareUpgrade/VersionMonitor.vue'),
      },
      {
        path: '/FirmwareUpgrade/VersionManagement',
        meta: { title: '版本管理' },
        component: () => import('~/pages/FirmwareUpgrade/VersionManagement.vue'),
      },
    ],
  },
  {
    path: '/SyncConfig',
    component: Layout,
    meta: { title: '同步配置' },
    children: [
      {
        path: '/SyncConfig/DictionaryManagement',
        meta: { title: '字典管理' },
        component: () => import('~/pages/SyncConfig/DictionaryManagement.vue'),
      },
    ],
  },
  {
    path: '/ServiceResourceManage',
    component: Layout,
    meta: { title: '服务资源' },
    children: [
      {
        path: '/ServiceResourceManage/Overview',
        meta: { title: '概览' },
        component: () => import('~/pages/ServiceResourceManage/ServiceResource/Overview.vue'),
      },
      {
        path: '/ServiceResourceManage/ServiceManage',
        meta: { title: '服务管理' },
        component: () => import('~/pages/ServiceResourceManage/ServiceResource/ServiceManage.vue'),
      },
      {
        path: '/ServiceResourceManage/ServiceAuthorize',
        meta: { title: '服务授权' },
        children: [
          {
            path: '/ServiceResourceManage/ServiceAuthorize/Whitelist',
            meta: { title: '机构白名单' },
            component: () => import('~/pages/ServiceResourceManage/ServiceAuthorize/Whitelist.vue'),
          },
        ],
      },
      {
        path: '/ServiceResourceManage/Visitlog',
        meta: { title: '访问日志' },
        component: () => import('~/pages/ServiceResourceManage/ServiceResource/Visitlog.vue'),
      },
    ],
  },
]

// 菜单主路由
export const currentRoute = '/MonitorKanban/Overview'

// 当前路由
export const menuRoutes = () => {
  return menuRoutes?.children?.find(r => r.path === window.location.pathname)
}
// const currentRoute =

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
