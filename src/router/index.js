import Vue from "vue"
import VueRouter from "vue-router"

// 引入组件

import login from '../page/login.vue'
import home from '../page/home.vue'
import notFound from '../page/404.vue'
import ordermanage from '../page/declareManage/orderManage.vue'
import detailmanage from '../page/declareManage/detailManage.vue'
import configmanage from '../page/configManage/configManage.vue'
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
    path: '/declare',
    component: home,
    name: '申报管理',
    iconCls: 'el-icon-message', //图标样式class
    children: [
      {
        path: 'ordermanage',
        component: ordermanage,
        name: '订单信息管理'
      },
      {
        path: 'detailmanage',
        component: detailmanage,
        name: '清单信息管理'
      }
    ]
  },
  {
    path: '/config',
    component: home,
    name: '配置管理',
    iconCls: 'el-icon-message',
    children: [
      {
        path: 'configmanage',
        component: configmanage,
        name: '配置管理'
      }
    ]
  }
];
var router = new VueRouter({
    routes
})
export default router;