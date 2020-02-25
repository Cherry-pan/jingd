<template>
  <el-carousel :interval="5000" arrow="never" height="200px">
    <el-carousel-item v-for="item in imglist" :key="item.id">
      <img :src="item.idView" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imglist: [        
          { id: 0, idView: require("../static/images/banner1.jpg") },
          { id: 1, idView: require("../static/images/banner2.jpg") },
          { id: 2, idView: require("../static/images/banner3.jpg") }
      ]
    };
  }
};
</script>
<style scoped>
.el-carousel__item {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin: 0;
}
img{
  height: 200px;
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>