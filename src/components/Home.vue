<template>
  <div>
    <!--    1.固定头部-->
    <titlebar
      filmTitle="电影"
      city="深圳"
    ></titlebar>
    <!--    面板组件-->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <filmcomment></filmcomment>
      </mt-tab-container-item>
    </mt-tab-container>



    <!--底部导航条-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">
        <tabbaricon
          :selectedIcon="require('../assets/images/film_.png')"
          :normalIcon="require('../assets/images/film.png')"
          :focused="selected=='1'"
        ></tabbaricon>
        电影
      </mt-tab-item>
      <mt-tab-item id="2">
        <tabbaricon
          :selectedIcon="require('../assets/images/ticket_.png')"
          :normalIcon="require('../assets/images/ticket.png')"
          :focused="selected=='2'"
        ></tabbaricon>
        购票
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" :src="require('../assets/images/comment.png')">
        写影评
      </mt-tab-item>
      <mt-tab-item id="4">
        <tabbaricon
          :selectedIcon="require('../assets/images/ranking_.png')"
          :normalIcon="require('../assets/images/ranking.png')"
          :focused="selected=='4'"
        ></tabbaricon>
        榜单
      </mt-tab-item>
      <mt-tab-item id="5">
        <tabbaricon
          :selectedIcon="require('../assets/images/mine_.png')"
          :normalIcon="require('../assets/images/mine.png')"
          :focused="selected=='5'"
        ></tabbaricon>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import TitleBar from "./common/TitleBar";
  import TabBarIcon from "./common/TabBarIcon";
  import FilmComment from "./Film/FilmComment";

  export default {
    data(){
      return {
        selected: "1",
        value: "",
        active:"1",
        icons: {
          "1": ["../assets/images/film.png", "../assets/images/film_.png"],
          "2": ["../assets/images/ticket.png", "../assets/images/ticket_.png"],
          "4": ["../assets/images/ranking.png", "../assets/images/ranking_.png"],
          "5": ["../assets/images/mine.png", "../assets/images/mine_.png"]
        }
      }
    },
    methods: {
      changeState(id) {
        if (id){

        }
      }
    },
    components: {
      "titlebar":TitleBar,
      "tabbaricon":TabBarIcon,
      "filmcomment":FilmComment,

    }
  }
</script>
<style scoped>

</style>
