<template>
  <div>
    <div class="film-box" v-for="(item, index) in 10" :key="index">
      <!-- 电影图 -->
      <div class="film-pix">
        <img src="../../assets/images/nz.jpg">
      </div>
      <!-- 电影信息 -->
      <div class="film-info">
        <div class="film-title">
          <i>
            {{'哪吒之魔童降世'}}
          </i>
          <span class="want"><b>92</b>&nbsp;人想看</span>
        </div>
        <div class="film-actor">
          动画
          <br>
          2019-08-07上映
          <br>
          主演：吕艳婷 / 囧森瑟夫 / 翰墨
        </div>
      </div>
      <!-- 最热及按钮 -->
      <div class="buy-button">
        <button>预售</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .film-box {
    height: 130px;
    margin: 0 10px;
    border-top: 1px solid #E0E0E0;
    display: flex;
    align-items: center;
  }
  .film-pix img{
    width: 75px;
    height: 105px;
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
  .want {
    color: #42a5f5;
    font-size: 12px;
    margin-left: 5px;
  }
  .want b {
    font-size: 16px;
  }
  .film-title i {
    overflow: hidden;
    /*white-space: nowrap;*/
    text-overflow: ellipsis;
    font-size: 17px;
    color: #424242;
    width: 55%;
    font-style: normal;
    display: block;
    float: left;
  }
  .film-title div {
    float: left;
  }
  .film-actor {
    margin-top: 10px;
    line-height: 20px;
    font-size: 13px;
    color: #616161;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .film-label span {
    border: 1px solid #7986CB;
    border-radius: 5px;
    color: #7986CB;
    font-size: 12px;
    text-align: center;
    margin-right: 5px;
    padding: 0 2px;
    display: flex;
    float: left;
  }
  .buy-button {
    width: 25%;
    height: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .buy-button button {
    width: 60px;
    height: 30px;
    margin-left: 10px;
    border-radius: 2px;
    background-color: #42a5f5;
    border: 0;
    outline: none;
  }
  .buy-button div {
    display: flex;
    font-size: 7px;
    justify-content: center;
    text-align: center;
    color: #F5F5F5;
  }
</style>
