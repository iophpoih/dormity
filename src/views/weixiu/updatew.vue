<template>
    <el-form ref="worm" :model="worm" label-width="80px">
    <el-form-item  label="维修单号">
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
       <el-option label="已处理" value="chuli"></el-option>
        <el-option label="未处理" value="weichuli"></el-option>
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
    <el-button type="primary">修改</el-button>
    <el-button type="primary">取消</el-button>
  </el-form>
</template>

<script>
    export default {
        data() {
    return {
      worm: {
        wno: "",
        wdno: "",
        wtheme: "",
        wmain: "",
        wtime: "",
        wzhuangtai: "",
        wdate: "",
        wnumber: "",
        wbeizhu: ""
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
    }
</script>

<style lang="scss" scoped>

</style>