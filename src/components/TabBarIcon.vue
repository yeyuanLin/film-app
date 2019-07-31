<template>
  <div>
    <img :src="focused?selectedImage:normalImage" class="iconStyle">
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    props:{
      focused:false,
      selectedImage:{default:""},
      normalImage:{default:""}
    }
  }
</script>
