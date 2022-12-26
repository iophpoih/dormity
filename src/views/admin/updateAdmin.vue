<template>
  <div>
    <el-table
      :data="
        atableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="编号" prop="ano"> </el-table-column>
      <el-table-column label="姓名" prop="aname"> </el-table-column>
      <el-table-column label="身份" prop="asf"> </el-table-column>
      <el-table-column label="密码" prop="apassword"> </el-table-column>
      <el-table-column align1="right">
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
      title: "编辑",
      dialogVisible: false,
      atableData: [
        {
          ano: "",
          aname: "",
          asf: "",
          apassword: "",
        },
      ],
      aorm: {},
      search: "",
    };
  },
  mounted() {
    this.atableData = JSON.parse(localStorage.getItem("atableData")) || [];
  },
  methods: {
    handleEdit(index, row) {
      this.aorm = row;
      this.dialogVisible = true;
      // console.log(index, row);
    },
    ok() {
      localStorage.setItem("atableData", JSON.stringify(this.atableData)); //将数据存在本地中
      this.dialogVisible = false;
      aorm = {};
    },
    handleDelete(index, row) {
      for (let i = 0; i < this.atableData.length; i++) {
        if (this.atableData[i].sno === row.sno) {
          this.atableData.splice(i, 1); //删除localdata里面的数据从i开始第几个数据
          localStorage.setItem("atableData", JSON.stringify(this.atableData)); //将数据存在本地中
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