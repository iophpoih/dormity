<template>
  <div class="layout">
    <!-- 后台首页 -->
    <el-container class="layout-main">
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <LeftMenus />
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <!-- 面包屑导航 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="v in navArr"
              :key="v.path"
              :to="v.path"
              >{{ v.text }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </el-header>
        <el-main>
          <!-- 二级路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入侧边栏组件
import LeftMenus from "./LeftMenus.vue";
export default {
  components: {
    // 注册侧边栏组件
    LeftMenus,
  },
  data() {
    return {
      // 导航数组
      navArr: [],
    };
  },
  methods: {
    // 计算导航
    navNum() {
      /* console.log(this.$route.matched); */
      let arr = [];
      this.$route.matched.forEach((v) => {
        if (v.meta.title) {
          arr.push({ path: v.path, text: v.meta.title });
        }
      });
      this.navArr = [{ path: "/homes", text: "首页" }, ...arr];
    },
  },
  // 监听路由,以便侧边栏改变时，也改变
  watch: {
    "$route.path"() {
      this.navNum();
    },
  },
  // 创建后
  created() {
    this.navNum();
  },
};
</script>

<style lang="scss" scoped>
.layout,
.layout-main {
  width: 100%;
  height: 100%;
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  background-color: #f5f5f5;
}
</style>