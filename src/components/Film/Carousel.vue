<template>
  <div>
    <img :src="carouselImg" class="carouselImg">
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    props:{
      carouselImg:{default:""}
    }
  }
</script>
<style scoped>
  .carouselImg {
    display: flex;
    width: 370px;
    height: 150px;
    margin: 0 auto;
  }
</style>
