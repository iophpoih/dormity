<template>
  <el-form
    ref="form"
    :visible.sync="dialogVisible"
    :model="form"
    label-width="80px"
  >
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
        <el-option label="男" value="man"></el-option>
        <el-option label="女" value="woman"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="学院">
      <el-select v-model="form.xueyuan" placeholder="请选择">
        <el-option label="软件学院" value="rj"></el-option>
        <el-option label="财金学院" value="cj"></el-option>
        <el-option label="棋艺学院" value="qy"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="班级">
      <el-select v-model="form.class" placeholder="请选择">
        <el-option label="软件213-1" value="r1"></el-option>
        <el-option label="软件213-2" value="r2"></el-option>
        <el-option label="软件213-3" value="r3"></el-option>
        <el-option label="软件213-4" value="r4"></el-option>
        <el-option label="财金213-1" value="c1"></el-option>
        <el-option label="财金213-2" value="c2"></el-option>
        <el-option label="财金213-3" value="c3"></el-option>
        <el-option label="财金213-4" value="c4"></el-option>
        <el-option label="棋艺213-1" value="q1"></el-option>
        <el-option label="棋艺213-2" value="q2"></el-option>
        <el-option label="棋艺213-3" value="q3"></el-option>
        <el-option label="棋艺213-4" value="q4"></el-option>
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
    <el-button type="primary">修改</el-button>
    <el-button type="primary">取消</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        sno: "",
        name: "",
        age: "",
        sdno:"",
        sex: "",
        xueyuan: "",
        class: "",
        mingzu: "",
        phone: "",
        password: "",
      },
      roomData: [],
    };
  },
  mounted() {
    // this.roomData = JSON.parse(localStorage.getItem("roomData")); //读取本地的localdata的数据
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
     
<style lang="scss" scoped>
</style>