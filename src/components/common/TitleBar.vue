<template>
  <div class="header">
    <div class="pix">
      <img src="../../assets/images/lyy.jpg">
    </div>
    <div class="title">
      <span v-if="typeof(title)=='string'">
        {{title}}
      </span>
      <div v-else class="title-button">
        <button :class="active?'active-button':'no-active-button'" @click="buttonClick(true)">{{title[0]}}</button>
        <button :class="!active?'active-button':'no-active-button'" @click="buttonClick(false)">{{title[1]}}</button>
      </div>

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
        active: true
      }
    },
    methods: {
      buttonClick(sign) {
        this.active=sign;
        this.$emit("changeContent", sign);
      }
    },
    props: {
      title:{default:""},

    }
  }
</script>
<style scoped>
  .header {
    position: fixed;
    top: 0;
    background-color: #FAFAFA;
    z-index: 999;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E0E0E0;
  }
  .pix {
    margin-left: 10px;
    width: 70px;
  }
  .pix img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .header-right {
    margin-right: 10px;
    display: flex;
  }
  .title span{
    width: 70px;
    text-align: center;
  }
  .title-button {
    width: 130px;
    height: 35px;
    border: 1px solid #FFAB00;
  }
  .title-button button {
    width: 65px;
    height: 35px;
    float: left;
    font-size: 14px;
    border: 0;
    outline: none;
  }
  .active-button {
    color: #F5F5F5;
    background-color: #FFAB00;
  }
  .no-active-button {
    color: #FFAB00;
    background-color: #F5F5F5;
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
