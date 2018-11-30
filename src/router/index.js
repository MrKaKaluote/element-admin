import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件

import login from '../page/login.vue'
import home from '../page/home.vue'
import table from '../page/table/index.vue'
import notFound from '../page/404.vue'
import menutab from '../page/menu1/menuTab.vue'
import menutab1 from '../page/menu1/menuTab1.vue'
import menutable from '../page/menu2/menuTable.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

let routes = [
  {
    path: '/login',
    component: login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: notFound,
    name: '',
    hidden: true
  },
  {
    path: '/',
    component: home,
    name: '业务一览表',
    single: true,
    children: [
      {
        path: '/table',
        component: table,
        name: '业务一览表'
      }
    ]
  },
  {
    path: '/',
    component: home,
    name: '导航一',
    iconCls: 'el-icon-message', //图标样式class
    children: [
      {
        path: '/menutab',
        component: menutab,
        name: 'Tab'
      },
      {
        path: '/menutab1',
        component: menutab1,
        name: 'Tab1'
      }
    ]
  },
  {
    path: '/',
    component: home,
    name: '导航二',
    iconCls: 'el-icon-message',
    children: [
      {
        path: '/menutable',
        component: menutable,
        name: 'Table'
      }
    ]
  }
];
var router = new VueRouter({
    routes
})
export default router;