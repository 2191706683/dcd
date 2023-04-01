<template>
    <div>
        <van-index-bar class="carindex_bar">
           <div v-for="item in carindex">
                <van-index-anchor class="carindex_anchor" :index="item.title">
                    <span class="carindex_title">{{item.title}}</span>
                </van-index-anchor>
                <div class="carindex_cell" v-for="cell in item.cell">
                    <img class="carindex_icon" :src="cell.icon" alt="">
                    <span class="carindex_text">{{cell.text}}</span>
                </div>
           </div>
        </van-index-bar>
    </div>
</template>

<script setup>
defineProps({
    carindex: {
        type: Array,
        value: []
    }
})
</script>

<style lang="stylus" scoped>
@import '../assets/css/index.styl'
.carindex_anchor 
    background-color #f7f8fc
    color red
    wh(100vw, 25px)
    .carindex_title
        color #979aa8
        font-weight normal
        font-size 15px
        margin-bottom 2px
.carindex_cell 
    display flex
    .carindex_icon
        wh(40px, 40px)
        padding 10px 12px
    .carindex_text
        font-size 15px
        line-height 60px
</style>