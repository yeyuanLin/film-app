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


    <div class="myFilm">
      <div>
        <div>
          <span>推荐的电影</span>
          <router-link to="#">
            <span>更多</span>
            <i class="iconfont"></i>
          </router-link>
        </div>
        <div>
          <div>
            <img :src="require('../assets/images/nz.jpg')">
            <span>哪吒之魔童降世</span>
          </div>
        </div>
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
    height: 300px;
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
    height: 40px;
  }
  .iconImg{
    width: 20px;
    height: 20px;
    line-height: 1.5;
  }

  .sep {
    color: #e0e0e0;
  }
</style>
