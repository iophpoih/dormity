<template>
  <el-table
    :data="
      tableData.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
    style="width: 100%"
  >
    <el-table-column label="学号" prop="sno"> </el-table-column>
    <el-table-column label="姓名" prop="name"> </el-table-column>
    <el-table-column label="年龄" prop="age"> </el-table-column>
    <el-table-column label="宿舍" prop="sdno"> </el-table-column>
    <el-table-column label="性别" prop="sex"> </el-table-column>
    <el-table-column label="学院" prop="xueyuan"> </el-table-column>
    <el-table-column label="班级" prop="class"> </el-table-column>
    <el-table-column label="民族" prop="mingzu"> </el-table-column>
    <el-table-column label="电话" prop="phone"> </el-table-column>
    <el-table-column label="密码" prop="password"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      datap: {},
      tableData: [
        {
          // sno: "1",
          // name: "",
          // age: "",
          // sex: "",
          // xueyuan: "",
          // class: "",
          // mingzu: "",
          // phone: "",
          // password: "",
        },
      ],
    };
  },
  mounted() {
    this.datap = JSON.parse(localStorage.getItem("zhanghao"));
    this.tableData.push(this.datap);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>