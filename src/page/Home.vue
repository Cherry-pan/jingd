<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <div class="swiper">
      <Swiper></Swiper>
    </div>
    <div class="classify">
      <Navi></Navi>
    </div>
    <div class="ad">
      <Hot></Hot>
    </div>
    <div class="content"></div>
    <div class="foot">
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Swiper from "../components/Swiper.vue";
import Navi from "../components/Navi.vue";
import Foot from "../components/Foot.vue";
import "../assets/common.css";
import Hot from "../components/Hot.vue";
export default {
  name: "app",
  components: {
    Header,
    Swiper,
    Navi,
    Foot,
    Hot
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  background: #ca1523;
  height: 35px;
}

.classify {
  height: 180px;
}
.ad {
  margin-top: 10px;
}

.foot {
  margin-top: 8px;
  height: 40px;
}
</style>
