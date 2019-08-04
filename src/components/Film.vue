<template>
  <div>
    <!-- 头 -->
    <title-bar title="电影"></title-bar>
    <div class="film-main">
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
              <img class="each-img">
                <i>92% 人气推荐</i>
              <div class="film-title">
                <span>电影电影 {{item}}</span>
              </div>
              <div class="buy-ticket">
                <mt-button size="small">购票</mt-button>
              </div>
            </div>
          </div>
      </div>
      </div>

      <!-- 影评 -->
      <div>
        <div class="hot-title">
          <span>影评</span>
        </div>
        <div class="content-main" v-for="(item, index) in 5" :key="index">
          <!-- id头像区 -->
          <div style="height: 70px">
            <div class="pix">
              <img src="../assets/images/lyy.jpg">
            </div>
            <div class="p-info">
              <i>林业园</i> 点评了
              <div>
                <span>哪吒之魔童降世</span>
                <mt-badge size="small" color="#FCCE18">&nbsp;&nbsp;9分&nbsp;&nbsp;</mt-badge>
              </div>
            </div>
          </div>
          <!-- 评论内容区 -->
          <div class="p-content">
            &nbsp;&nbsp;哪吒（ nézhā），中国古代神话传说人物，道教护法神。 哪吒信仰兴盛于道教与民间信仰；在道教的头衔为中坛元帅、通天太师、威灵显赫大将军、三坛海会大神等；尊称太子爷、三太子、善胜童子。
            <span>全文</span>
          </div>
          <!-- 图片区 -->
          <div class="p-image">
            <img class="p-img2"
              v-for="(img, index) in [require('../assets/images/lyy.jpg'),require('../assets/images/lyy.jpg'),require('../assets/images/lyy.jpg'),require('../assets/images/lyy.jpg')]"
              :src="img" :key="index">
          </div>
          <!-- 评论数点赞数区 -->
          <div class="p-bottom">
            <div>
              <img src="../assets/images/pinglun.png">
              10
            </div>
            <div>
              <img v-if="true" src="../assets/images/dianzan_.png">
              <img v-else src="../assets/images/dianzan.png">
              128
            </div>
          </div>
        </div>
      </div>
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
    }
  }
</script>

<style scoped>
  .film-main::-webkit-scrollbar{
    display: none;
  }
  .film-main {
    margin-top: 50px;
    margin-bottom: 57px;
  }
  .hot-title {
    background-color: #F5F5F5;
    height: 40px;
  }
  .hot-title span{
    color: #999;
    font-size: 12px;
    line-height: 40px;
    margin-left: 15px;
  }

  .lateral-sliding {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    margin: 10px 0 0 10px;
  }
  .lateral-sliding::-webkit-scrollbar{
    display: none;
  }
  .lateral-sliding-item {
    display: flex;
    margin-right: 8px;
  }
  .each-div {
    width: 100px;
    height: 200px;
    position: relative;
  }
  .each-img {
    background-color: #0086b3;
    width: 100px;
    height: 130px;
  }
  .each-div i {
    color: #FCCE18;
    font-size: 10px;
    position: absolute;
    top: 112px;
    left: 5px;
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
    margin-top: 5px;
  }
  .pix {
    float: left;
    margin: 10px 10px;
  }
  .p-info {
    float: left;
    margin: 15px 10px 10px 10px;
    font-size: 14px;
  }
  .pix img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .p-info i {
    color: #FE9120;
    font-style:normal;
    margin-bottom: 5px;
  }
  .p-info div {
    margin-top: 5px;
    color: #5D87B8;
  }
  .p-content {
    margin: 0 15px 10px 15px;
    font-size: 17px;
    line-height: 22px;
    color: #424242;
  }
  .p-content span {
    color: #5D87B8;
  }
  .p-image {
    width: 360px;
    margin-left: 15px;
    margin-right: 30px;
  }
  .p-img1 {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  .p-img2 {
    width: 30%;
    height: 115px;
    margin-right: 3px;
    object-fit: cover;
  }
  .p-bottom {
    height: 30px;
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    align-items: center;
    font-size: 9px;
    color: #9E9E9E;
  }
  .p-bottom div {
    width: 60px;
  }
  .p-bottom img {
    height: 15px;
  }
  .content-main {
    border-top: 1px solid #E0E0E0;
    border-bottom: 8px solid #F5F5F5;
  }
</style>
