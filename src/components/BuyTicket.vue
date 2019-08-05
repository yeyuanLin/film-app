<template>
  <div>
    <title-bar :title="['热映','预告']" @changeContent="changeActive"></title-bar>
    <div class="content-main">
      <hot-show v-if="active"></hot-show>
      <notice-film v-else></notice-film>
    </div>
  </div>
</template>

<script>
import TitleBar from "./common/TitleBar";
import HotShow from './apps/HotShow';
import NoticeFilm from './apps/NoticeFilm';

export default {
  data(){
    return {
      active: true,
    }
  },
  methods: {
    changeActive(sign) {
      this.active = sign;
    }
  },
  components: {
    TitleBar: TitleBar,
    HotShow: HotShow,
    NoticeFilm: NoticeFilm,
  }
}
</script>

<style scoped>
  .content-main {
    margin-top: 50px;
  }
</style>
