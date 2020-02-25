<template>
  <div>
    <ul class="flex j_content">
      <li class="first">
        <img src="../static/images/icon-home.png" alt />
      </li>
      <router-link to="/classify">
        <li class="first">
          <img src="../static/images/icon-catergry.png" alt />
        </li>
      </router-link>
      <li class="first">
        <img src="../static/images/icon-cart.png" alt />
      </li>
      <li class="first">
        <img src="../static/images/icon-me.png" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.first img {
  width: 60px;
  height: 50px;
}
</style>