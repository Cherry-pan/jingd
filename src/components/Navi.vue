<template>
  <div class="box flex j_items">
    <ul class="flex j_content">
      <li class="item1">
        <img src="../static/images/nav0.png" alt />
        <div class="desc">分类查询</div>
      </li>
      <li class="item1">
        <img src="../static/images/nav1.png" alt />
        <div class="desc">物流查询</div>
      </li>
      <li class="item1">
        <img src="../static/images/nav2.png" alt />
        <div class="desc">购物车</div>
      </li>
      <li class="item1">
        <img src="../static/images/nav3.png" alt />
        <div class="desc">我的京东</div>
      </li>
    </ul>
    <ul class="flex j_content">
       <li class="item1">
        <img src="../static/images/nav4.png" alt />
        <div class="desc">充值中心</div>
      </li>
      <li class="item1">
        <img src="../static/images/nav5.png" alt />
        <div class="desc">领券中心</div>
      </li>
      <li class="item1">
        <img src="../static/images/nav6.png" alt />
        <div class="desc">京东超市</div>
      </li>
      <li class="item1">
        <img src="../static/images/nav7.png" alt />
        <div class="desc">我的关注</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box{
  border-bottom: 2px solid #ebebeb;
  flex-direction: column;
}
ul {
  padding: 0 10px;
}
.item1 {
  margin: 15px;
  text-align: center;
}
.item1 img {
  width: 32px;
  height: 32px;
}
.desc {
  font-size: 12px;
}
</style>