import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入登录页
import Login from "@/views/login/login.vue"
// 引入公共页
import Layouts from "@/views/layout/layouts.vue"
// 引入系统首页
import Homes from "@/views/index/indexs.vue"

Vue.use(VueRouter)

const routes = [
  // 默认登录页
  {
    path: "/",
    redirect: "/login"
  },
  // 登录
  {
    path: "/login",
    component: Login
  },
  // 页面主体
  {
    path: "/homes",
    component: Layouts,
    children: [
      // 系统首页
      { path: '', component: Homes },
    ]
  },
  //学生管理
  {
    path: "/students",
    component: Layouts,
    //导航数据
    meta: { title: "个人信息" },
    // 默认
    redirect: "/students/studentscx",
    children: [
      // 添加学生
      { path: '/students/studentscx', component: () => import("../views/students/studentscx.vue"), meta: { title: "个人信息查询" } }
    ]
  },
  // 维修管理
  {
    path: "/students",
    component: Layouts,
    //导航数据
    meta: { title: "维修管理" },
    // 默认
    redirect: "/students/addwx",
    children: [
      // 添加维修
      { path: '/students/addwx', component: () => import("../views/students/addwx.vue"), meta: { title: "添加维修" } },
      // 维修管理
      { path: '/students/updatewx', component: () => import("../views/students/updatewx.vue"), meta: { title: "管理维修" } }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
