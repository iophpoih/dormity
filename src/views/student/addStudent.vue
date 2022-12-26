<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="学号" prop="sno">
        <el-input v-model="form.sno"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" number prop="age">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="宿舍" number prop="sdno">
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
      <el-button type="primary" @click="addstudent">添加</el-button>
      <el-button type="primary">取消</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      addStudentData: {},
      // {
      //   sno: "",
      //   name: "",
      //   age: "",
      //   sex: "",
      //   xueyuan: "",
      //   class: "",
      //   mingzu: "",
      //   phone: "",
      //   password: "",
      // },
      rules: {
        sno: [
          {
            required: true,
            message: "请输入学号",
            trigger: "blur",
          },
          { min: 1, max: 2, message: "长度在 1 到 2 个字符", trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { pattern: /^\+?[1-9]\d*$/, message: "请输入大于0的正整数" },
        ],
      },
      tableData: [],
    };
  },
  mounted() {
    this.tableData = JSON.parse(localStorage.getItem("tableData")) || []; //读取本地的localdata的数据
  },
  methods: {
    onSubmit() {},
    addstudent() {
      // this.addStudentData = JSON.parse(JSON.stringify(this.form));
      this.tableData.push(this.form);
      localStorage.setItem("tableData", JSON.stringify(this.tableData));
      this.form = {};
      this.$message({
        message: "添加成功",
        type: "success",
      });
    },
  },
};
</script>
     
<style lang="scss" scoped>
</style>