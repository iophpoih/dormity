<template>
  <el-form ref="dorm" :model="dorm" label-width="80px">
    <el-form-item label="宿舍号">
      <el-input v-model="dorm.dno"></el-input>
    </el-form-item>
    <el-form-item label="宿舍类别">
      <el-select v-model="dorm.dleibie">
        <el-option label="单人间" value="one"></el-option>
        <el-option label="六人间" value="six"></el-option>
        <el-option label="八人间" value="eight"></el-option>
        <el-option label="十人间" value="ten"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="楼宇">
      <el-select v-model="dorm.dlouyu">
        <el-option label="男一栋" value="mone"></el-option>
        <el-option label="男二栋" value="mtwo"></el-option>
        <el-option label="男三栋" value="mthree"></el-option>
        <el-option label="女四栋" value="wfour"></el-option>
        <el-option label="女五栋" value="wfify"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="dorm.dbeizhu"></el-input>
    </el-form-item>
    <el-button type="primary">修改</el-button>
    <el-button type="primary">取消</el-button>
  </el-form>
</template>

<script>
export default {
    data() {
    return {
      dorm: {
        dno: "",
        dleibie: "",
        dlouyu: "",
        dbeizhu: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="sass" scoped>
</style>