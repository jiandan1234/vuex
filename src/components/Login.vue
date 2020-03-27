<template>
  <div class="login">
    <div class="wrapper">
      <!-- 头内容 -->
      <div class="top-con">
        <h2>vuex后台管理系统</h2>
      </div>
      <!-- 内容部分 -->
      <div class="btm-con">
        <el-form
          :model="loginform"
          status-icon
          :rules="rules"
          ref="loginform"
          label-width="100px"
          class="demo-loginform"
        >
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="loginform.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginform.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginform')">登录</el-button>
            <el-button @click="resetForm('loginform')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginform: {
        username: "",
        password: ""
      },
      rules: {
        // 对用户名的规格说明
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 18, message: "长度在 5 到 18个字符", trigger: "blur" }
        ],
        // 对密码的规则说明
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 18, message: "长度在 5 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let _this = this;
          this.axios
            .post("/api/checklogin", {
              username: _this.loginform.username,
              password: _this.loginform.password
            })
            .then(response => {
              if (response.data.length) {
                console.log("响应后端数据")
                // 将用户信息存在state中
                _this.$store.commit("save_userinfo", response.data[0]);
                this.$message({
                  message: "登陆成功",
                  type: "success"
                });
                // 调整到后台首页
                _this.$router.push("/home");
              } else {
                this.$message.error('请检查用户名或者密码是输入错误');
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrapper {
  width: 30%;
  height: 45%;
  background-color: #cfc;
}
.top-con {
  /* border:1px solid red; */
  padding: 5px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.btm-con {
  width: 80%;
  height: 80%;
  /* border:1px solid red; */
  margin-top: 20px;
}
</style>
