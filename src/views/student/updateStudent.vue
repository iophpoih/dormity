<template>
  <div>
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
      <el-table-column alignl="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="学号">
          <el-input v-model="form.sno"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="宿舍">
          <el-input v-model="form.sdno"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.sex">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学院">
          <el-select v-model="form.xueyuan" placeholder="请选择">
            <el-option label="软件学院" value="软件学院"></el-option>
            <el-option label="财金学院" value="财金学院"></el-option>
            <el-option label="棋艺学院" value="棋艺学院"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级">
          <el-select v-model="form.class" placeholder="请选择">
            <el-option label="软件213-1" value="软件213-1"></el-option>
            <el-option label="软件213-2" value="软件213-2"></el-option>
            <el-option label="软件213-3" value="软件213-3"></el-option>
            <el-option label="软件213-4" value="软件213-4"></el-option>
            <el-option label="财金213-1" value="财金213-1"></el-option>
            <el-option label="财金213-2" value="财金213-2"></el-option>
            <el-option label="财金213-3" value="财金213-3"></el-option>
            <el-option label="财金213-4" value="财金213-4"></el-option>
            <el-option label="棋艺213-1" value="棋艺213-1"></el-option>
            <el-option label="棋艺213-2" value="棋艺213-2"></el-option>
            <el-option label="棋艺213-3" value="棋艺213-3"></el-option>
            <el-option label="棋艺213-4" value="棋艺213-4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="民族">
          <el-input v-model="form.mingzu"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="ok">修改</el-button>
        <el-button type="primary">取消</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      search: "",
      form: {},
      title: "编辑",
    };
  },
  mounted() {
    this.tableData = JSON.parse(localStorage.getItem("tableData")) || [];
  },
  methods: {
    handleEdit(index, row) {
      this.form = row;
      this.dialogVisible = true;
      // console.log(index, row);
    },
    ok() {
      localStorage.setItem("tableData", JSON.stringify(this.tableData)); //将数据存在本地中
      this.dialogVisible = false;
      form = {};
    },
    handleDelete(index, row) {
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].sno === row.sno) {
          this.tableData.splice(i, 1); //删除localdata里面的数据从i开始第几个数据
          localStorage.setItem("tableData", JSON.stringify(this.tableData)); //将数据存在本地中
          this.$message({
            message: "删除成功",
            type: "success",
          });
          break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>