<template>
  <div>
    <!--    1.固定头部-->

    <!--    面板组件-->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <app-film></app-film>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <app-buy-ticket></app-buy-ticket>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        榜单
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <app-mine></app-mine>
      </mt-tab-container-item>
    </mt-tab-container>

    <!--底部导航条-->
    <mt-tabbar v-model="selected" fixed>
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
  import TabBarIcon from "./common/TabBarIcon";
  import Film from "./Film";
  import Mine from "./Mine";
  import BuyTicket from "./BuyTicket";

  export default {
    data(){
      return {
        selected: "1",
      }
    },
    components: {
      tabbaricon: TabBarIcon,
      appFilm: Film,
      appMine: Mine,
      appBuyTicket: BuyTicket,
    },
    watch:{
      'selected': function(newVal,oldVal){
        if(newVal=="3"){
          this.$router.push({name:'writeLink'});
        }
      },
    }

  }
</script>
