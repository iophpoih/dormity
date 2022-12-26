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
      <!-- 系统首页 -->
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 学生管理-->
      <el-submenu index="/student">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>学生管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/student/addStudent">添加学生</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/student/updateStudent">管理学生</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 宿舍管理 -->
      <el-submenu index="/dormity">
        <template slot="title">
          <i class="el-icon-house"></i>
          <span>宿舍管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/dormity/addDormity">添加宿舍</el-menu-item>
          <el-menu-item index="/dormity/updateDormity">管理宿舍</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 维修管理 -->
      <el-submenu index="/weixiu">
        <template slot="title">
          <i class="el-icon-help"></i>
          <span>维修管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/weixiu/addWeixiu">添加维修</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/weixiu/updateWeixiu">管理维修</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 管理员管理 -->
      <el-submenu index="/admin">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>管理员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/admin/addAdmin">添加管理员</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/admin/updateAdmin">管理管理员</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 声明 -->
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