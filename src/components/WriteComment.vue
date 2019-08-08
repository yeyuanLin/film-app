<template>
  <div class="writeComment">
    <div class="search">
      <div class="searchbar">
        <div class="searchbar-inner">
          <i class="iconfont icon-sousuo"></i>
          <input class="searchbar-core" type="search" placeholder="搜索想点评的电影"/>
        </div>
        <routerlink to="" class="searchbar-cancel" style="display: none">取消</routerlink>
      </div>
    </div>
    <div class="please">邀你点评</div>
    <div class="film-list" v-for="(item,i) in 10" >
      <div class="film-item">
        <img class="film-img" :src="require('../assets/images/nz.jpg')"/>
        <div class="details">
          <h4 class="film-name">哪吒之魔童降世</h4>
          <p class="desc">天地灵气孕育出了一颗能量巨大的混元珠，那就是哪吒</p>
          <div>
            <b>人气推荐度：90%</b>
            <span>正在热映</span>
          </div>
        </div>
        <div class="go-write">
          <i class="iconfont icon-xieyingping"></i>
          <span>写点评</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        value:"",
      }
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
  }
  .searchbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e6e6e6;
    box-sizing: border-box;
    padding: 8px 10px;
    color:#dadada;
    z-index: 1;
  }
  .searchbar-inner {
    display: flex;
    flex: 1;
    align-items: center;
    background-color: #fff;
    border-radius: 3px;
    height: 28px;
    padding:4px 6px;
  }
  .icon-sousuo {
    font-size: 20px;
    color: #d9d9d9;
  }
  .searchbar-core {
    border:0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: 0;
  }
  .searchbar-cancel {
    color:#26a2ff;
    margin-left: 10px;
    text-decoration: none;
  }

  .please {
    height: 18px;
    background-color: #efefef;
    font-size: 8px;
    line-height: 18px;
    padding-left: 15px;
  }
  .film-item {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }
  .film-img {
    width: 60px;
    height: 60px;
  }
  .details {
    /*width: 140px;*/
    display: flex;
    flex-direction: column;
    font-size: 12px;

  }
  .film-name {
    font-size: 15px;
    font-weight: normal;
    margin: 0;
  }
  .desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }


</style>
