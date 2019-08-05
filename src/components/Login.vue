<template>
  <div class="site-login">

    <div class="head-bar">
      <i class="iconfont icon-back"></i>
      <span>帮助</span>
    </div>
    <h4 class="please">请输入账号密码</h4>
    <mt-field label="" placeholder="手机号/邮箱"></mt-field>
    <mt-field label="" placeholder="输入密码" type="password"></mt-field>
    <mt-button class="login-btn uname-login" type="primary" size="large" @click="login">登录</mt-button>
    <mt-button class="login-btn msg-login" size="large" @click="login">用短信验证登录</mt-button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        uname:"",
        upwd:"",
        unameholder:"手机号或者邮箱",
        upwdholder:"请输入登录密码"

      }
    },
    methods:{
      login(){
        console.log("登录一下")
      }
    }

  }
</script>
<style scoped>
  .site-login {
    display: flex;
    flex-direction: column;
    margin:10px 20px 10px 10px;
  }

  .head-bar {
    display: flex;
    justify-content: space-between;
    margin:10px;
  }
  .please {
    margin:10px 0 40px 10px;
    font-size: 20px;
    font-style: normal;
    font-family: "Microsoft JhengHei UI Light";
  }
  .field-control {
    border-bottom: 2px solid #F0F0F0;
    color:#333;
  }
  .login-btn {
    margin-top: 20px;
    border-radius: 30px;
    border-bottom: 1px solid #666;
  }

  /*.foot-bar {*/
  /*  display: flex;*/
  /*}*/
  .mint-button--primary {
    /*改为渐变色*/
    background-color: #FFCE44;

  }
  .msg-login {
    border:1px solid #FFCE44;
    color:#FFCE44;
  }

</style>
