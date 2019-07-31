<template>
  <div>
    <h1>home</h1>
<!--    固定头部-->
    <mt-header title="电影" fixed>
<!--      左侧的返回链接-->
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
<!--      右侧搜索按钮-->
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>


    <!-- 最下面的部分 -->

  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
