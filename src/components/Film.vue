<template>
  <div class="111">
    <!-- 头 -->
    <mt-header title="电影">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!-- <mt-button icon="search" slot="right"></mt-button>-->
      <mt-button slot="right">深圳 <span class="iconfont icon-xiangxia"></span></mt-button>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    <div style="height: 200px">
    <!-- 轮播图 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item style="background-color: #0077aa">1</mt-swipe-item>
        <mt-swipe-item style="background-color: #a71d5d">2</mt-swipe-item>
        <mt-swipe-item style="background-color: #FFCE44">3</mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 正在热映 -->
    <div>
      <div class="hot-title">
        <span>正在热映</span>
      </div>

      <div class="lateral-sliding">
        <div class="lateral-sliding-item" v-for="(item,index) in 10" :key="index">
          <div class="each-div">
            <div class="each-img">
              <span>92% 人气推荐</span>
            </div>
            <div class="film-title">
              <span>电影电影电影电影电影 {{item}}</span>
            </div>
            <div class="buy-ticket">
              <mt-button size="small">购票</mt-button>
            </div>
          </div>
        </div>
    </div>
    </div>

    <div>
      <h1>电影</h1>
    </div>
  </div>
</template>

<script>
  import TitleBar from "./common/TitleBar";

  export default {
    data(){
      return {
        selected: "1",
      }
    },
    methods: {
      changeState(id) {
        if (id){

        }
      }
    },
    components: {
      TitleBar: TitleBar
    },
    created() {

    }
  }
</script>

<style>
  .mint-header {
    height: 50px;
    background-color: #fff;
    color: #333;
  }
  .mint-header-title {
    font-size: 20px;
  }
  .mint-button-text {
    font-size: 15px;
  }
  .mint-button-text span  {
    font-size: 15px;
  }
  .mintui-search {
    margin-left: 10px;
    font-size: 22px;
  }
  .hot-title {
    background-color: #F2F2F2;
    height: 40px;
  }
  .hot-title span{
    color: #999;
    font-size: 12px;
    line-height: 40px;
    margin-left: 15px;
  }



  .lateral-sliding {
    height: 250px;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    margin: 10px 0 10px 10px;
  }
  .lateral-sliding-item {
    display: flex;
    margin-right: 8px;
  }
  .each-div {
    width: 100px;
    height: 200px;
  }
  .each-img {
    background-color: #0086b3;
    width: 100px;
    height: 130px;
    color: #FCCE18;
    font-size: 10px;
    line-height: 240px;
  }
  .each-img span {
    margin-left: 3px;
  }
  .film-title {
    height: 30px;
    font-size: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 30px;
  }
  .buy-ticket button{
    width: 55px;
    height: 25px;
    background-color: #FFCE44;
    color: #2f2f2f;
  }
</style>
