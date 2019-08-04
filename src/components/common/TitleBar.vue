<template>
  <div class="header">

<!--  <mt-header :title="title" fixed>-->
<!--    <router-link to="/" slot="left">-->
<!--      <mt-button>-->
<!--        <img src="../../assets/images/lyy.jpg">-->
<!--      </mt-button>-->
<!--    </router-link>-->
<!--    &lt;!&ndash; <mt-button icon="search" slot="right"></mt-button>&ndash;&gt;-->
<!--    <mt-button class="city" slot="right">-->
<!--      深圳-->
<!--      <span class="iconfont icon-xiangxia"></span>-->
<!--    </mt-button>-->
<!--    <mt-button class="iconfont icon-sousuo" slot="right"></mt-button>-->
<!--  </mt-header>-->

    <div class="pix">
      <img src="../../assets/images/lyy.jpg">
    </div>
    <div class="title">
      {{title}}
    </div>
    <div class="header-right">
      <div class="city">
        深圳
        <i class="iconfont icon-xiangxia"></i>
      </div>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
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
      title:{default:""},

    }
  }
</script>
<style scoped>
  .header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
  }
  .pix {
    width: 50px;
  }
  .pix img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .header-right {
    display: flex;
  }
  .title {
    width: 50px;
  }
  .city {
    line-height: 50px;
    font-size: 12px;
  }
  .icon-xiangxia {
    font-size: 12px;
  }
  .search {
    margin-left: 10px;
    line-height: 50px;
  }
</style>
