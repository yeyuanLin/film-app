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
          <div>
            <mt-badge color="#FE9120">
              92%
              <span style="font-size: 12px"> 推荐度</span>
            </mt-badge>
          </div>
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
      <!-- 按钮 -->
      <div></div>
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
  .film-title div {
    float: left;
  }
  .film-actor {
    margin-top: 10px;
    line-height: 20px;
    font-size: 12px;
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
</style>
