<template>
  <div class="app-mine">
    <div class="mine-head">
        <img :src="require('../assets/images/lyy.jpg')" class="headImg"/>
        <span class="uname">小魔鬼玛丽娅</span>
    </div>

    <div class="file-mine">
      <div>
        <img class="iconImg" :src="require('../assets/images/my-film.png')">
        <span>我的电影票</span>
      </div>
      <span class="sep">|</span>
      <div>
        <img class="iconImg" :src="require('../assets/images/film-list.png')">
        <span>我的影单</span>
      </div>
    </div>

    <div class="gray"></div>
    <div class="command">
        <div class="tuijian">
          <span>推荐的电影</span>
          <div>
            <span class="more">更多</span>
            <i class="iconfont"></i>
          </div>
        </div>
        <div class="command-film">
          <div class="command-film-item" v-for="(item,i) in 4" :key="i">
            <img class="tuijianImg" :src="require('../assets/images/nz.jpg')">
            <div class="film-name">哪吒 {{item}}</div>
          </div>
        </div>
    </div>

  </div>
</template>
<script>
  export default {
      data(){
          return {

          }
      },
      props: {
          headImage:{default:""},
          myTicket:{default:""},
          myFilmList:{default:""},
          recommend:{default:""},
          more:{default:""},
          filmImg:{default:""},
          filmName:{default:""},
      }
  }
</script>
<style scoped>
  .app-mine {
    background-color: #f1f1f3;
  }
  .mine-head {
    background-image: url("../assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color:#616161;
  }

  .app-mine .headImg{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  .app-mine .uname {
    margin-top: 5px;
    color: #fff;
  }

  .file-mine {
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
  }
  .file-mine div {
    display: flex;
    align-items: center;
  }
  .gray {
    height: 10px;
    background-color: #f1f1f3;
  }
  .iconImg{
    width: 20px;
    height: 20px;
    line-height: 1.5;
    margin-right: 10px;
  }

  .sep {
    color: #f5f5f5;
  }
  .more {
    text-decoration: none;
    font-size: 12px;
    color: #919191;
  }

  .command {
    display: flex;
    flex-direction: column;
    padding:0 15px;
    background-color: #fff;


  }
  .tuijian {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    /*margin-top: 5px;*/
    border-bottom: 1px solid #E0E0E0;
    font-size:15px;
    color:#616161;

  }
  .command-film {
    display: flex;
    margin-top: 10px;
  }
  .command-film-item {
    width: 25%;
    display: flex;
    flex-direction: column;

  }
  .tuijianImg {
    width: 80px;
    height: 110px;
  }

  .film-name {
    text-align: center;
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 8px;
    color: #424242;
  }
</style>

<!--<div class="site-login">-->
  <!--    <div class="app-name">-->
  <!--      <img :src="require('../assets/images/lyy.jpg')">-->
  <!--      <span class="name">电影</span>-->
  <!--    </div>-->
  <!--    <mt-field class="field-control" type="text" placeholder="手机号/邮箱" v-model="uname"></mt-field>-->
  <!--    <mt-field class="field-control" type="password" placeholder="输入密码" v-model="upwd"></mt-field>-->
  <!--    <mt-button class="login-btn"><i class="iconfont icon-back"></i></mt-button>-->
  <!--    <div>-->
  <!--      <div>忘记密码</div>-->
  <!--      <span>|</span>-->
  <!--      <div>用户注册</div>-->
  <!--    </div>-->
  <!--    <div>登录用户即代表阅读并同意 <span>服务协议</span></div>-->


<!--/*.site-login {*/-->
<!--/*  display: flex;*/-->
<!--/*  flex-direction: column;*/-->
<!--/*}*/-->
<!--/*.app-name {*/-->
<!--/*  display: flex;*/-->
<!--/*  justify-content: center;*/-->
<!--/*  align-items: center;*/-->
<!--/*  height: 100px;*/-->
<!--/*}*/-->
<!--/*.app-name img{*/-->
<!--/*  width: 50px;*/-->
<!--/*  height: 50px;*/-->
<!--/*  border-radius: 50%;*/-->
<!--/*  object-fit: cover;*/-->
<!--/*}*/-->
<!--/*.name {*/-->
<!--/*  display: flex;*/-->
<!--/*  align-items: center;*/-->
<!--/*  font-size: 30px;*/-->
<!--/*}*/-->
<!--/*.field-control {*/-->
<!--/*  border-bottom: 2px solid #F0F0F0;*/-->
<!--/*  color: #333;*/-->
<!--/*}*/-->
<!--/*.login-btn {*/-->
<!--/*  margin-top: 20px;*/-->
<!--/*  border-radius: 30px;*/-->
<!--/*  border-bottom: 1px solid #666;*/-->
<!--/*}*/-->
