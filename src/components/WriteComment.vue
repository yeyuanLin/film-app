<template>
  <div class="writeComment">
    <mt-search placeholder="搜索想点评的电影" v-model="value"></mt-search>
    <span>邀您点评</span>
    <div class="film-list">
      <img class="film-img" :src="require('../assets/images/nz.jpg')">
      <div class="details">
        <h4 class="film-name">哪吒之魔童降世</h4>
        <span class="desc">天地灵气孕育出了一颗能量巨大的混元珠，原始天尊将混元珠提炼出来，其中仙气化作灵珠，魔气化作魔丸，天尊将它们封存于宝莲之中。</span>
        <div>
          <span>人气推荐度：92%</span>
          <p>正在热映</p>
        </div>
      </div>
      <div class="goto-write">
        <i class="iconfont"></i>
        <span>写点评</span>
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
  .mint-search {
    height: 55px;
  }
  .mint-searchbar {
    padding:5px 10px;
  }
</style>
