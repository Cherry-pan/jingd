<template>
  <div class="box">
    <div class="title">
      <span>超值抢购</span>
    </div>
    <div class="box1 flex">
      <div class="left flex">
        <img src="../static/images/cp1.jpg" alt />
      </div>
      <div class="right flex">
          <div class="first">
              <img src="../static/images/cp2.jpg" alt />
          </div>              
          <img src="../static/images/cp3.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.title {
  margin-left: 10px;
}
span {
  width: 70px;
  border-left: 2px solid #ca1523;
  display: inline-block;
  text-align: center;
  font-size: 14px;
}
.box1{
    border: 1px solid #E8E8E8;
    padding-bottom: 16px;
    margin-top: 8px;
}
.right{
    flex:1;
    flex-direction: column;
}
.left{
    width: 50%;
    border-right: 1px solid #E8E8E8;
}
.left img {
    height: 176px;    
}
.first{
    border-bottom: 1px solid #E8E8E8;
}
.right img:first-child{
    width: 145px;
    height: 80px;
}
.right img:nth-child(2){
    width: 145px;
    height: 80px;
}
</style>