<template>
    <div class="detail">
        <Navbar title="雪铁龙" />
        <DetailHeader />
        <div class="detail_tabbar">
            <div class="cartype">车型</div> 
            <div class="saling">在售</div>
        </div>
        <DetailContent />
        <van-action-bar class="action_bar">
            <van-action-bar-button class="action_bar-button" color="#1f2129" text="加入购物车" />
            <van-action-bar-button class="action_bar-button" color="#ffcc32" text="立即购买" />
        </van-action-bar>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import DetailHeader from './DetailHeader.vue';
import DetailContent from './DetailContent.vue'
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
.detail
    height 100%
    background-color #f7f8fc
    .detail_tabbar
        margin-top 8px
        height 50px
        padding 12px 10px 10px 0px
        font-size 18px
        background-color #fff
        .cartype
            padding-left 18px
        .saling 
            wh(30px, 10px)
            font-size 12px
            margin-top 18px
            margin-left 8px
            padding 6px 6px 6px 8px
            border 1px solid #afb0b7
            background-color #fff
    .action_bar
        height 60px
        .action_bar-button
            height 48px
</style>