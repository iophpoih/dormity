<template>
  <div>
    <el-table
      :data="
        dtableData.filter(
          (data) =>
            !search || data.dno.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="宿舍号" prop="dno"> </el-table-column>
      <el-table-column label="宿舍类别" prop="dleibie"> </el-table-column>
      <el-table-column label="楼宇" prop="dlouyu"> </el-table-column>
      <el-table-column label="备注" prop="dbeizhu"> </el-table-column>
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
      dialogVisible: false,
      dorm: {},
      dtableData: [
        {
          dno: "1001",
          dleibie: "六人间",
          dlouyu: "男一栋",
          dbeizhu: "",
        },
      ],
      search: "",
      title: "编辑",
    };
  },
  mounted() {
    this.dtableData = JSON.parse(localStorage.getItem("roomData")) || []; //读取本地的localdata的数据
  },
  methods: {
    handleEdit(index, row) {
      this.dorm = row;
      this.dialogVisible = true;
    },
    ok() {
      localStorage.setItem("dtableData", JSON.stringify(this.dtableData)); //将数据存在本地中
      this.dialogVisible = false;
      dorm = {};
    },
    handleDelete(index, row) {
      for (let i = 0; i < this.dtableData.length; i++) {
        if (this.dtableData[i].dno === row.dno) {
          this.dtableData.splice(i, 1); //删除localdata里面的数据从i开始第几个数据
          localStorage.setItem("roomData", JSON.stringify(this.dtableData)); //将数据存在本地中
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

<style lang="sass" scoped>
</style>