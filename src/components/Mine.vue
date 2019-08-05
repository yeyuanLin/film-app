<template>
  <div class="app-mine">
    <div class="mine-head">
        <img :src="require('../assets/images/lyy.jpg')" class="headImg"/>
        <span class="uname">小魔鬼玛丽娅</span>
    </div>

    <div class="file-mine">
      <div>
        <img class="iconImg" :src="require('../assets/images/my-film.png')">
        <span>我的电影票</span>
      </div>
      <span class="sep">|</span>
      <div>
        <img class="iconImg" :src="require('../assets/images/film-list.png')">
        <span>我的影单</span>
      </div>
    </div>


    <div class="command">
        <div class="tuijian">
          <span>推荐的电影</span>
          <router-link to="#">
            <span>更多</span>
            <i class="iconfont"></i>
          </router-link>
        </div>
        <div class="command-film">
          <img class="tuijianImg" :src="require('../assets/images/nz.jpg')">
          <p class="film-name">哪吒之魔童降世</p>
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
          headImage:{default:""},
          myTicket:{default:""},
          myFilmList:{default:""},
          recommend:{default:""},
          more:{default:""},
          filmImg:{default:""},
          filmName:{default:""},
      }
  }
</script>
<style scoped>
  .mine-head {
    background-image: url("../assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }

  .app-mine .headImg{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  .app-mine .uname {
    margin-top: 5px;
    color: #fff;
  }

  .file-mine {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 35px;
  }
  .iconImg{
    width: 20px;
    height: 20px;
    line-height: 1.5;
  }

  .sep {
    color: #e0e0e0;
  }
  .command {
    display: flex;
    flex-direction: column;
    margin:0 10px;
    font-size:12px;
  }
  .tuijian {
    display: flex;
    justify-content: space-between;
    height: 30px;
    margin-top: 5px;

  }
  .command-film {
    display: flex;
    flex-direction: column;
  }
  .tuijianImg {
    width: 85px;
    height: 115px;
  }
  .film-name {
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
