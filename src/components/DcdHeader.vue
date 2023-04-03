<template>
    <div class="DcdHeader">
        <img class="DcdHeader_img" src="https://lf3-motor.dcarstatic.com/obj/motor-fe-static/motor/wap/_next/./static/images/logo-ece55ce00243df6953f4..png">
        <router-link to="/search">
            <van-search
                placeholder="搜你所想"
                disabled
                class="DcdHeader_search"
            />
        </router-link>
        <van-button class="DcdHeader_button">打开App</van-button>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
@import '../assets/css/index.styl'
.DcdHeader {
    fa()
    padding 8px 12px 0 12px
}
.DcdHeader_img
    wh(25%, 18px)
.DcdHeader_search
    margin-left 15px
    width 85%
.DcdHeader_button
    wh(26%, 25px)
    background-color $primary
    font-size 10px
</style>