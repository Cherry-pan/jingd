<template>
    <div>
        <div class="title">
            这是分类页面
        </div>
        <router-link to='/'>
            <div class="return">返回首页</div>
        </router-link>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.title{
    background: #ca1523;
    color: white;
    height: 40px;
    text-align: center;
    font-weight: bold;
    line-height: 40px;
}
.return{
    margin:10px;
    background: #ca1523;
    padding: 10px 20px; 
    width: 80px;
    color: white;
    border-radius: 10px;
    text-align: center;
}
</style>