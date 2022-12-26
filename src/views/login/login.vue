<template>
  <div class="loginview">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      class="login-form"
      @keyup.enter.native="submitForm('loginForm')"
    >
      <h2 class="login-title">登录</h2>
      <!-- 账号 -->
      <el-form-item prop="account">
        <el-input
          type="text"
          placeholder="请输入账号"
          v-model="loginForm.account"
          autocomplete="off"
          prefix-icon="el-icon-user-solid"
          clearable
        ></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input
          :type="iseye ? 'text' : 'password'"
          placeholder="请输入密码"
          v-model="loginForm.password"
          autocomplete="off"
          prefix-icon="el-icon-lock"
          clearable
        >
          <i
            slot="suffix"
            class="el-input__icon iconfont"
            :class="iseye ? 'icon-a-huaban1fuben39' : 'icon-a-huaban1fuben40'"
            @click="iseye = !iseye"
          ></i>
        </el-input>
      </el-form-item>
      <!-- 身份 -->
      <el-form-item prop="sf">
        <el-select
          v-model="loginForm.sf"
          autocomplete="off"
          placeholder="请输选择身份"
          prefix-icon="el-icon-user-solid"
          clearable
        >
          <el-option label="学生" value="学生"></el-option>
          <el-option label="管理员" value="管理员"></el-option>
        </el-select>
      </el-form-item>
      <!-- 点击登录，进行验证 -->
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('loginForm')"
          class="login-btn"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    // 账号验证器
    var validateAccount = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入账号"));
      } else if (!/^[a-zA-Z0-9\u4e00-\u9fa5]{2,12}$/.test(value)) {
        callback(new Error("请输入2至12位的字母，数字或中文"));
      } else {
        callback();
      }
    };
    // 密码验证器
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else if (!/^\w{6,12}$/.test(value)) {
        callback(new Error("请输入6至12位的字母，数字或下划线"));
      } else {
        callback();
      }
    };
    // 身份验证器
    var validateSf = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输选择身份"));
      } else {
        callback();
      }
    };
    return {
      // 是否显示密码
      iseye: false,
      // 验证表单
      loginForm: {
        account: "",
        password: "",
        sf: "",
      },
      account1: "admin",
      password1: "123456",
      studentData: [],
      adminData: [],
      // 验证规则
      rules: {
        account: [
          { required: true, validator: validateAccount, trigger: "blur" },
        ],
        password: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        sf: [{ required: true, validator: validateSf, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 验证方法
    submitForm() {
      if (this.loginForm.sf === "学生") {
        this.studentData = JSON.parse(localStorage.getItem("tableData"));
        for (let i = 0; i < this.studentData.length; i++) {
          if (this.studentData[i].sno == this.loginForm.account) {
            if (this.studentData[i].password == this.loginForm.password) {
              localStorage.setItem(
                "zhanghao",
                JSON.stringify(this.studentData[i])
              );
              this.$router.push("/homes");
              return;
            }
          }
        }
        this.$message({
          message: "账号或密码错误",
          type: "warning",
        });
      }
      if (this.loginForm.sf === "管理员") {
        this.adminData = JSON.parse(localStorage.getItem("atableData")) || [];
        if (
          this.account1 == this.loginForm.account &&
          this.password1 == this.loginForm.password
        ) {
          this.$router.push("/home");
          return;
        }
        for (let i = 0; i < this.adminData.length; i++) {
          if (this.adminData[i].ano == this.loginForm.account) {
            if (this.adminData[i].apassword == this.loginForm.password) {
              this.$router.push("/home");
              return;
            }
          }
        }
        this.$message({
          message: "账号或密码错误",
          type: "warning",
        });
      }
      if (this.loginForm.sf === "") {
        this.$message({
          message: "请选择身份登录",
          type: "warning",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loginview {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center bottom;
  background-size: cover;
  background: url(https://img1.baidu.com/it/u=1321940328,116039627&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800);
  .login-form {
    width: 300px;
    height: 200px;
    max-width: 300px;
    min-width: 150px;
    text-align: center;

    .login-title {
      color: #fff;
      font-size: 28px;
      margin-bottom: 20px;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>