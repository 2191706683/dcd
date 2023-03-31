<template>
  <div class="user">
    <UserHeader />
    <UserBody />
    <UserFooter />
    <Tabbar />
  </div>
</template>

<script setup>
import Tabbar from "@/components/Tabbar.vue";
import UserHeader from "./UserHeader.vue";
import UserBody from "./UserBody.vue";
import UserFooter from "./UserFooter.vue";
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl';
.user
    // padding 0 20px
</style>
