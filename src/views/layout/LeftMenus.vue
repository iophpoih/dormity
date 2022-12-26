<template>
  <div>
    <el-menu
      :default-active="nowRouter"
      router
      class="el-menu-vertical-demo"
      :unique-opened="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 学生首页 -->
      <el-menu-item index="/homes">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 学生管理-->
      <el-submenu index="/students">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>个人信息管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/students/studentscx">个人信息管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 维修管理 -->
      <el-submenu index="/students">
        <template slot="title">
          <i class="el-icon-help"></i>
          <span>维修管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/students/addwx">添加维修信息</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/students/updatewx">查看维修信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/set">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/">退出登录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    // 打开
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // 关闭
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    // 默认
    nowRouter() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>