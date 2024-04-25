
import Layout from '@/layout'
// cachePage  是否缓存页面
export default [
  // 供应商门户  项目概况
  {
    path: 'pm/pmproject',
    name: 'Pmproject',
    component: () => import('@/views/pm/pmproject/index.vue'),
    meta: { title: '项目概况', icon: 'home', cachePage: true }
  },
  {
    path: 'pm/pmprojectEdit',
    name: 'PmprojectEdit',
    component: () => import('@/views/pm/pmproject/edit.vue'),
    meta: { title: '修改项目概况', icon: 'home' }
  }
]
