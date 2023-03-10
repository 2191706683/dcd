<template>
    <div class="navbar">
        <ul>
            <van-tabbar route v-model="active" active-color="#ffcc32">
                <van-tabbar-item replace to="/" icon="wap-home">首页</van-tabbar-item>
                <van-tabbar-item replace to="/cart" icon="shopping-cart" badge="2">购物车</van-tabbar-item>
                <van-tabbar-item replace to="/user" icon="manager">我的</van-tabbar-item>
            </van-tabbar>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let active = ref(null)
</script>

<style lang="stylus" scoped>
.navbar
    padding-bottom 14%
</style>