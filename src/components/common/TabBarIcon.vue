<template>
  <div>
<!--    <img :src="focused?selectedImage:normalImage" class="iconStyle">-->
    <i :class="focused?selectedIcon:normalIcon" class="iconfont"></i>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        status:0,
        list:[]
      }
    },
    props:{
      focused:false,
      selectedIcon:{default:""},
      normalIcon:{default:""}

    }
  }
</script>
<style scoped>

</style>
