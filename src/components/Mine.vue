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


    <div class="command">
        <div class="tuijian">
          <span>推荐的电影</span>
          <router-link to="#">
            <span class="more">更多</span>
            <i class="iconfont"></i>
          </router-link>
        </div>
        <div class="command-film">
          <div class="command-film-item" v-for="(item,i) in 4" :key="i">
            <img class="tuijianImg" :src="require('../assets/images/nz.jpg')">
            <div class="film-name">哪吒之魔童降世 {{item}}</div>
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
    background-color: #F3F1F4;
  }
  .mine-head {
    background-image: url("../assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 35px;
  }
  .iconImg{
    width: 20px;
    height: 20px;
    line-height: 1.5;
  }

  .sep {
    color: #e0e0e0;
  }
  .more {
    text-decoration: none;
  }
  .command {
    display: flex;
    flex-direction: column;
    margin:0 15px;
    font-size:12px;

  }
  .tuijian {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    /*margin-top: 5px;*/
    border-bottom: 1px solid #999;

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
    width: 88px;
    height: 115px;
  }

  .film-name {
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
