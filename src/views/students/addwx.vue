<template>
  <el-form ref="worm" :model="worm" label-width="80px">
    <el-form-item label="维修单号">
      <el-input v-model="worm.wno"></el-input>
    </el-form-item>
    <el-form-item label="宿舍号">
      <el-input v-model="worm.wdno"></el-input>
    </el-form-item>
    <el-form-item label="维修主题">
      <el-input v-model="worm.wtheme"></el-input>
    </el-form-item>
    <el-form-item label="维修内容">
      <el-input v-model="worm.wmain"></el-input>
    </el-form-item>
    <el-form-item label="报修时间">
      <el-input v-model="worm.wtime"></el-input>
    </el-form-item>
    
    <el-button type="primary" @click="addWeixiu()">添加</el-button>
    <el-button type="primary">取消</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      worm: {},
      wormData: [
        {
          wno: "",
          wdno: "",
          wtheme: "",
          wmain: "",
          wtime: "",
          wzhuangtai: "",
          wdate: "",
          wnumber: "",
          wbeizhu: "",
        },
      ],
    };
  },
  mounted() {
    this.wormData = JSON.parse(localStorage.getItem("wormData")) || []; //读取本地的localdata的数据
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    addWeixiu() {
      this.wormData.push(this.worm);
      localStorage.setItem("wormData", JSON.stringify(this.wormData));
      this.worm = {};
      this.$message({
        message: "添加成功",
        type: "success",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>