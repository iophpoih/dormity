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
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      wtableData: [
        {
          wno: "1",
          wdno: "1001",
          wtheme: "水管",
          wmain: "水管坏了",
          wtime: "2022-03-13",
          wzhuangtai: "已处理",
          wdate: "2022-03-15",
          wnumber: "刘福华",
          wbeizhu: "",
        },
      ],
      worm: {},
      search: "",
      wormData: [],
      title: "编辑",
    };
  },
  mounted() {
    this.wtableData = JSON.parse(localStorage.getItem("wormData")) || [];
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>