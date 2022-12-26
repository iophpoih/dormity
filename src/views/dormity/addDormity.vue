<template>
  <el-form ref="dorm" :model="dorm" label-width="80px">
    <el-form-item label="宿舍号">
      <el-input v-model="dorm.dno"></el-input>
    </el-form-item>
    <el-form-item label="宿舍类别">
      <el-select v-model="dorm.dleibie">
        <el-option label="单人间" value="单人间"></el-option>
        <el-option label="六人间" value="六人间"></el-option>
        <el-option label="八人间" value="八人间"></el-option>
        <el-option label="十人间" value="十人间"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="楼宇">
      <el-select v-model="dorm.dlouyu">
        <el-option label="男一栋" value="男一栋"></el-option>
        <el-option label="男二栋" value="男二栋"></el-option>
        <el-option label="男三栋" value="男三栋"></el-option>
        <el-option label="女四栋" value="女四栋"></el-option>
        <el-option label="女五栋" value="女五栋"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="dorm.dbeizhu"></el-input>
    </el-form-item>
    <el-button type="primary" @click="addroom">添加</el-button>
    <el-button type="primary">取消</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      dorm: {},
      roomData: [
        { dno: 20001, dleibie: "六人间", dlouyu: "男二栋", dbeizhu: "没得" },
      ],
    };
  },
  mounted() {
    this.roomData = JSON.parse(localStorage.getItem("roomData")) || []; //读取本地的localdata的数据
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    addroom() {
      this.roomData.push(this.dorm);
      localStorage.setItem("roomData", JSON.stringify(this.roomData));
      this.form = {};
      this.$message({
        message: "添加成功",
        type: "success",
      });
    },
  },
};
</script>

<style lang="sass" scoped>
</style>