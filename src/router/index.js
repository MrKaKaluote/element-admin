import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件

import login from '../page/login.vue'
import home from '../page/home.vue'
import notFound from '../page/404.vue'
import sub11 from '../page/menu1/sub1.vue'
import sub12 from '../page/menu1/sub2.vue'
import sub21 from '../page/menu2/sub1.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    redirect: '/login',
    hidden: true
  },
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
    path: '/menu1',
    component: home,
    name: '菜單一',
    iconCls: 'el-icon-message', //图标样式class
    children: [
      {
        path: 'sub1',
        component: sub11,
        name: '子菜單一'
      },
      {
        path: 'sub2',
        component: sub12,
        name: '子菜單二'
      }
    ]
  },
  {
    path: '/menu2',
    component: home,
    name: '菜單二',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'sub1',
        component: sub21,
        name: '配置管理'
      }
    ]
  }
];
var router = new VueRouter({
    routes
})
export default router;