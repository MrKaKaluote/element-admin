<template>
<div class="login-page-container">
  <!-- <button @click="login">login</button> -->
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <!-- <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input> -->
            <el-input type="text" v-model="ruleForm2.account" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
           <!--  <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input> -->
           <el-input type="password" v-model="ruleForm2.checkPass" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox click="remberuser" v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="login" :loading="logining">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import * as commonApi from 'api/common'
import * as types from '../store/mutation-types'
export default {
  props: {
  },
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: 'admin',
        checkPass: '1'
      },
      rules2: {
        account: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }
        ],
        checkPass: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      },
      checked: true
    };
  },
  created() {
    // alert(123)
    this.ruleForm2.checkPass = ''
  },
  methods: {
    // handleSubmit2(ev) {
    //   var _this = this;
    //   _this.$refs.ruleForm2.validate((valid) => {
    //     if (valid) {
    //       _this.logining = true;
    //       var loginParams = {
    //         username: this.ruleForm2.account,
    //         password: this.ruleForm2.checkPass
    //       };
    //       if (loginParams.username == "admin" && loginParams.password == "1") {
    //         // _this.logining = false;
    //         sessionStorage.setItem('user', JSON.stringify(loginParams));
    //         _this.setUsername('admin');
    //         _this.setPassword('1');
    //         _this.login();
    //       } else {
    //         _this.logining = false;
    //         _this.$alert('用户名或密码错误！', '提示信息', {
    //           confirmButtonText: '确定'
    //         });
    //       }
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    login() {
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          if (this.ruleForm2.account == "admin" && this.ruleForm2.checkPass == "1") {
            const params = {
              userName: this.ruleForm2.account,
              password: this.ruleForm2.checkPass
            }
            commonApi.loginUserNo(params).then((res) => {
              let {data} = res
              if (data.success === true) {
                this.logining = false
                this.$router.push({ path: '/menutab' });
              } else {
              }
            }).catch(() => {
              // $toast.show('对不起,连接服务器异常,请稍后再试!', 1500)
            })
            sessionStorage.setItem('user', JSON.stringify(params));
            this.setUsername('admin');
            this.setPassword('1');
          } else {
            this.logining = false;
            this.$alert('用户名或密码错误！', '提示信息', {
              confirmButtonText: '确定'
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    ...mapMutations({
      setUsername: types.SET_USERNAME,
      setPassword: types.SET_PASSWORD
    })
  }
}
</script>

<style scoped>
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

label.el-checkbox.remember {
    margin: 0px 0px 35px 0px;
}
</style>