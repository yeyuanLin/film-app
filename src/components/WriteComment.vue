<template>
  <div class="writeComment">
    <titlebar></titlebar>
    <div class="search">
      <div class="searchbar">
        <div class="searchbar-inner">
          <i class="iconfont icon-sousuo"></i>
          <input class="searchbar-core" type="search" placeholder=" 搜索想点评的电影"/>
        </div>
<!--        <router-link to="" class="searchbar-cancel">取消</router-link>-->
      </div>
    </div>
    <div class="please">邀你点评</div>


<!--    <div class="film-list" v-for="(item,i) in 1" >-->
<!--      <div class="film-item">-->
<!--        <div class="item-left">-->
<!--          <img class="film-img" :src="require('../assets/images/nz.jpg')"/>-->
<!--        </div>-->
<!--        <div class="details">-->
<!--          <h4 class="film-name">哪吒之魔童降世</h4>-->
<!--          <span class="desc">天地灵气孕育出了一颗能量巨大的混元珠，那就是哪吒</span>-->
<!--          <div>-->
<!--            <b>人气推荐度：90%</b>-->
<!--            <span>正在热映</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="go-write">-->
<!--          <i class="iconfont icon-xieyingping"></i>-->
<!--          <span>写点评</span>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="film-box" v-for="(item, index) in 10" :key="index">
      <!-- 电影图 -->
      <div class="film-pix">
        <img src="../assets/images/nz.jpg">
      </div>
      <!-- 电影信息 -->
      <div class="film-info">
        <div class="film-title">
          {{'哪吒之魔童降世'}}
        </div>
        <div class="film-introduce">
          天地灵气孕育出了一颗能量巨大的混元珠，那就是哪吒
          <br>
          推荐度：90%
        </div>
      </div>
      <!-- 最热及按钮 -->
      <div class="write-button">
        <i class="iconfont icon-xieyingping"></i>
        写点评
      </div>
    </div>
  </div>
</template>
<script>
  import TitleBar from "./common/TitleBar";

  export default {
    data(){
      return {
        value:"",
      }
    },
    components: {
      titlebar: TitleBar
    }
  }
</script>
<style scoped>
  .writeComment {
    display: flex;
    flex-direction: column;
  }
  .search {
    height: 50px;
    overflow: hidden;
    margin-top: 50px;
  }
  .searchbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e6e6e6;
    box-sizing: border-box;
    padding: 8px 10px;
    z-index: 1;
  }
  .searchbar-inner {
    display: flex;
    flex: 1;
    align-items: center;
    background-color: #fff;

    border-radius: 5px;
    height: 28px;
    padding:4px 6px;
  }
  .icon-sousuo {
    font-size: 20px;
    color:#bdbdbd;
  }
  .searchbar-core {
    border:0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: 0;
  }
  .searchbar-core::-webkit-input-placeholder {
    color:#bdbdbd;
    font-size: 14px;
  }
  .searchbar-cancel {
    color:#26a2ff;
    margin-left: 10px;
    text-decoration: none;
  }

  .please {
    height: 18px;
    background-color: #eee;
    font-size: 12px;
    padding-left: 15px;
    color: #757575;
    display: flex;
    align-items: center;
  }

  /*.film-item {*/
  /*  margin:8px 10px;*/
  /*  display: flex;*/
  /*  justify-content: space-around;*/
  /*}*/
  /*.film-img {*/
  /*  width: 60px;*/
  /*  height: 60px;*/
  /*}*/
  /*.details {*/
  /*  !*width: 140px;*!*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  font-size: 12px;*/

  /*}*/
  /*.film-name {*/
  /*  font-size: 15px;*/
  /*  font-weight: normal;*/
  /*  margin: 0;*/
  /*}*/
  /*.desc {*/
  /*  width: 32%;*/
  /*  white-space: nowrap;*/
  /*  text-overflow: ellipsis;*/
  /*  overflow: hidden;*/
  /*}*/

  /*.go-write {*/
  /*  float: left;*/
  /*}*/

  .film-box {
    height: 130px;
    margin: 0 10px;
    border-top: 1px solid #E0E0E0;
    display: flex;
    align-items: center;
  }
  .film-pix img{
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .film-info {
    width: 60%;
    margin-left: 10px;
  }
  .film-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 19px;
    color: #424242;
  }
</style>
