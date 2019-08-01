<template>
  <div>
    <img :src="focused?selectedIcon:normalIcon" class="iconStyle">
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
.iconStyle{
  width: 30px;
  height: 30px;
}
</style>
