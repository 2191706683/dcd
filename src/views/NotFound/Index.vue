<template>
  <div class="notfound">
    <h1>404</h1>
    <h3>该页面不存在</h3>
    <router-link to="/">回到首页</router-link>
  </div>
</template>

<script setup>
//
import { useRouter } from "vue-router";
const router = useRouter();
function goHome() {
  router.push("/");
}
</script>

<style lang="stylus" scoped>
.notfound
    position relative
    transform translate3d(0, 150%, 0)
    font-size 30px
    line-height 50px
    text-align center
</style>
