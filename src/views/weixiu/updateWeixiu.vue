<template>
  <div>
    <el-table
      :data="
        wtableData.filter(
          (data) =>
            !search || data.wdno.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="维修单号" prop="wno"> </el-table-column>
      <el-table-column label="宿舍号" prop="wdno"> </el-table-column>
      <el-table-column label="维修主题" prop="wtheme"> </el-table-column>
      <el-table-column label="维修内容" prop="wmain"> </el-table-column>
      <el-table-column label="报修时间" prop="wtime"> </el-table-column>
      <el-table-column label="维修状态" prop="wzhuangtai"> </el-table-column>
      <el-table-column label="处理时间" prop="wdate"> </el-table-column>
      <el-table-column label="维修人员" prop="wnumber"> </el-table-column>
      <el-table-column label="备注" prop="wbeizhu"> </el-table-column>
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
        <el-form-item label="维修状态">
          <el-select v-model="worm.wzhuangtai">
            <el-option label="已处理" value="已处理"></el-option>
            <el-option label="未处理" value="未处理"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处理时间">
          <el-input v-model="worm.wdate"></el-input>
        </el-form-item>
        <el-form-item label="维修人员">
          <el-input v-model="worm.wnumber"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="worm.wbeizhu"></el-input>
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
      wtableData: [],
      worm: {},
      search: "",
      wormData: [],
      title: "编辑",
    };
  },
  mounted() {
    this.wtableData = JSON.parse(localStorage.getItem("wormData")) || [];
  },
  methods: {
    handleEdit(index, row) {
      this.worm = row;
      this.dialogVisible = true;
      // console.log(index, row);
    },
    ok() {
      localStorage.setItem("wormData", JSON.stringify(this.wtableData)); //将数据存在本地中
      this.dialogVisible = false;
      worm = {};
    },
    handleDelete(index, row) {
      for (let i = 0; i < this.wtableData.length; i++) {
        if (this.wtableData[i].wno === row.wno) {
          this.wtableData.splice(i, 1); //删除localdata里面的数据从i开始第几个数据
          localStorage.setItem("wormData", JSON.stringify(this.wtableData)); //将数据存在本地中
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