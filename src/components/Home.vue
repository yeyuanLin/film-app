<template>
  <div>
<!--    1.固定头部-->
    <titlebar
      filmTitle="电影"
      city="深圳"
    ></titlebar>
<!--    面板组件-->
<!--底部导航条-->
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="film" @click.native="changeStatus(0)">
        <tabbaricon></tabbaricon>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  import TitleBar from "./common/TitleBar";
  import TabBarIcon from "./common/TabBarIcon";

  export default {
    data(){
      return {
        active:"",
        icon:[
          "icon-film","icon-yonghu"
        ]

      }
    },
    components: {
      "titlebar":TitleBar,
      "tabbaricon":TabBarIcon
    }
  }
</script>
<style scoped>
  .focused {
    color:red;
  }
</style>
