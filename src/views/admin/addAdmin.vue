<template>
  <el-form ref="aorm" :model="aorm" label-width="80px">
    <el-form-item label="编号">
      <el-input v-model="aorm.ano"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="aorm.aname"></el-input>
    </el-form-item>
    <el-form-item label="身份">
      <el-select v-model="aorm.asf">
        <el-option label="管理员" value="管理员"></el-option>
        <el-option label="学生" value="学生"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="aorm.apassword"></el-input>
    </el-form-item>
    <el-button type="primary" @click="addadmin">添加</el-button>
    <el-button type="primary">取消</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      aorm: {},
      atableData: [{}],
    };
  },
  mounted() {
    this.atableData = JSON.parse(localStorage.getItem("atableData")) || [];
  },
  methods: {
    addadmin() {
      this.atableData.push(this.aorm);
      localStorage.setItem("atableData", JSON.stringify(this.atableData));
      this.aorm = {};
      this.$message({
        message: "添加成功",
        type: "success",
      });
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>