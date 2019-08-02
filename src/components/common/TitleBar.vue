<template>
  <div class="site-head">
    <!--    固定头部-->
    <i class="iconfont icon-back"></i>
    <span>{{filmTitle}}</span>
    <div class="right-head">
      <div class="icondiv city" >
        {{city}}
        <i class="iconfont icon-xiangxia"></i>
      </div>
      <div class="icondiv search" style="margin-right: 20px">
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
      filmTitle:{default:""},
      city:{default:""},

    }
  }
</script>
<style scoped>
  .site-head {
    display: flex;
    position: fixed;
    z-index: 999;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    /*后期：渐变*/
    background-color: #e8e8f5;
    height: 40px;
    padding: 0 7px;
    color: #2f2f2f;
    font-size: 14px;
    margin-right: 30px;
  }
  .right-head {
    display: flex;
  }
  .icondiv {
    display: flex;
    /*垂直居中*/
    align-items: center;
    height: 48px;
  }
  .icon-xiangxia {
    font-size: 12px;
  }
  .city {
    font-size: 8px;
    margin-right: 8px;
  }
  .search {
    margin-right: 20px;
  }
</style>
