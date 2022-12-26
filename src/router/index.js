import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入登录页
import Login from "@/views/login/login.vue"
// 引入公共页
import Layout from "@/views/layout/layout.vue"
// 引入系统首页
import Home from "@/views/index/index.vue"
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
    path: "/home",
    component: Layout,
    children: [
      // 系统首页
      { path: '', component: Home },
    ]
  },
  //学生
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
  //
  //学生管理
  {
    path: "/student",
    component: Layout,
    //导航数据
    meta: { title: "学生管理" },
    // 默认
    redirect: "/student/addstudent",
    children: [
      // 添加学生
      { path: '/student/addstudent', component: () => import("../views/student/addStudent.vue"), meta: { title: "添加学生" } },
      { path: '/student/updatestudent', component: () => import("../views/student/updateStudent.vue"), meta: { title: "管理学生" } }
    ]
  },
  // 宿舍管理
  {
    path: "/dormity",
    component: Layout,
    //导航数据
    meta: { title: "宿舍管理" },
    // 默认
    redirect: "/dormity/addDormity",
    children: [
      // 添加宿舍
      { path: '/dormity/addDormity', component: () => import("@/views/dormity/addDormity.vue"), meta: { title: "添加宿舍" } },
      // 管理宿舍
      { path: '/dormity/updateDormity', component: () => import("@/views/dormity/updateDormity.vue"), meta: { title: "管理宿舍" } }
    ]
  },
  // 维修管理
  {
    path: "/weixiu",
    component: Layout,
    //导航数据
    meta: { title: "维修管理" },
    // 默认
    redirect: "/weixiu/addWeixiu",
    children: [
      // 添加维修
      { path: '/weixiu/addWeixiu', component: () => import("../views/weixiu/addWeixiu.vue"), meta: { title: "添加维修" } },
      // 维修管理
      { path: '/weixiu/updateWeixiu', component: () => import("../views/weixiu/updateWeixiu.vue"), meta: { title: "管理维修" } }
    ]
  },
  // 管理员管理
  {
    path: "/admin",
    component: Layout,
    //导航数据
    meta: { title: "管理员管理" },
    // 默认
    redirect: "/admin/addAdmin",
    children: [
      // 添加管理员
      { path: '/admin/addAdmin', component: () => import("../views/admin/addAdmin.vue"), meta: { title: "添加管理员" } },
      // 管理员管理
      { path: '/admin/updateAdmin', component: () => import("../views/admin/updateAdmin.vue"), meta: { title: "管理管理员" } }
    ]
  },
  // 设置
  {
    path: "/set",
    component: Layout,
    //导航数据
    meta: { title: "设置" },
    // 默认
    redirect: "/set/setlist",
    children: [
      { path: '/set/setlist', component: () => import("../views/set/setlist.vue"), meta: { title: "声明" } }
    ]
  },
]

const router = new VueRouter({
  routes,
})

export default router
