<template>
  <!-- 用户界面组件 -->
  <div class="user">
    <UserHeader />
    <UserBody />
    <UserFooter />
    <Tabbar />
  </div>
</template>

<script setup>
// 引入底部导航和子组件页面sddfsdfdf
import Tabbar from "@/components/Tabbar.vue";
import UserHeader from "./UserHeader.vue";
import UserBody from "./UserBody.vue";
import UserFooter from "./UserFooter.vue";
</script>

<style lang="stylus" scoped></style>
