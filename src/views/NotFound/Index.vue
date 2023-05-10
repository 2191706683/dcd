<template>
    <div class="notfound">
      <h1>404</h1>
      <router-link to="/">回到首页</router-link> 
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
function goHome() {
  router.push("/");
}
</script>

<style lang="stylus" scoped>
.notfound
    font-size 40px
    text-align center
    margin-top 250px
</style>
