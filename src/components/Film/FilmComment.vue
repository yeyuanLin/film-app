<template>
  <div class="film-head">
<!--    <h1>影评</h1><br>-->
    <carousel
      :carouselImg="require('../../assets/images/carousel01.png')"
    ></carousel>
  </div>
</template>
<script>
  import Carousel from "./Carousel";

  export default {
    data(){
      return {

      }
    },
    components:{
      "carousel":Carousel
    }
  }
</script>
<style scoped>
  .film-head{
    margin-top:40px;
  }
</style>
