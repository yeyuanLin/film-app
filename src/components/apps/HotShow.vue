<template>
  <div>
    <div class="film-box" v-for="(item, index) in 10" :key="index">
      <!-- 电影图 -->
      <div class="film-pix">
        <img src="../../assets/images/nz.jpg"/>
      </div>
      <!-- 电影信息 -->
      <div class="film-info">
        <div class="film-title">
          <i>
            {{'哪吒之魔童降世'}}
          </i>
          <span class="want" style="font-size: 12px"><b>92%</b>&nbsp;推荐度</span>
        </div>
        <div class="film-actor">
          动画
          <br>
          主演：吕艳婷 / 囧森瑟夫 / 翰墨
        </div>
        <div class="film-label">
          <span>
            IMAX3D
          </span>
          <span>
            3D
          </span>
        </div>
      </div>
      <!-- 最热及按钮 -->
      <div class="buy-button">
        <div>
          <span class="hot-today">今日最热<div></div></span><span class="hot-week">本周最热<div></div></span>
        </div>
        <button>购票</button>
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
  .want {
    color: #FE9120;
    font-size: 12px;
  }
  .want b {
    font-size: 16px;
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
  }
  .buy-button button {
    width: 60px;
    height: 30px;
    margin-left: 10px;
    margin-top: 25px;
    background-color: #FFD740;
    border: 0;
    outline: none;
    border-radius: 2px;
  }
  .buy-button div {
    display: flex;
    font-size: 7px;
    justify-content: center;
    text-align: center;
    color: #F5F5F5;
  }
  .hot-today div {
    border-top: 3px solid #FF5252;
    border-left: 10px solid #FF5252;
    border-right: 10px solid #FF5252;
    border-bottom: 3px solid transparent;
  }
  .hot-week div {
    border-top: 3px solid #FFA000;
    border-left: 10px solid #FFA000;
    border-right: 10px solid #FFA000;
    border-bottom: 3px solid transparent;
  }
  .hot-today {
    /*margin-left: 20px;*/
    width: 20px;
    height: 20px;
    padding-top: 3px;
    background: -webkit-linear-gradient(#E64A19, #FF5252); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#E64A19, #FF5252); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#E64A19, #FF5252); /* Firefox 3.6 - 15 */
    background: linear-gradient(#E64A19, #FF5252); /* 标准的语法（必须放在最后） */
  }
  .hot-week {
    width: 20px;
    height: 20px;
    float: left;
    margin-left: 3px;
    padding-top: 3px;
    background: -webkit-linear-gradient(#EF6C00, #FFA000); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#EF6C00, #FFA000); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#EF6C00, #FFA000); /* Firefox 3.6 - 15 */
    background: linear-gradient(#EF6C00, #FFA000); /* 标准的语法（必须放在最后） */
  }
</style>
