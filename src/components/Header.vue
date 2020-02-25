<template>
  <div class="flex a_items j_content">
    <div class="logo">
      <div class="img"></div>
    </div>
    <div class="search">
      <div class="box flex a_items">
        <span></span>
        <input type="text" placeholder="请输入你要查找的内容" />
      </div>
    </div>
    <div class="submit">登录</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  width: 66px;
  height: 35px;
  line-height: 35px;
  overflow: hidden;
}
.img {
  width: 100px;
  height: 42px;
  background: url(../static/images/sprites.png);
  background-size: 210%;
  background-position-y: -319px;
  background-position-x: 5px;
}
.search input {
  border: 1px solid white;
  height: 25px;
  padding-left: 5px;
  width: 230px;
  border-radius: 5px;
}
.submit {
  padding: 5px 10px;
  font-size: 14px;
  color: white;
}
</style>