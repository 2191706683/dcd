<template>
    <div class="car_tag">
        <span class="car_tagitem" v-for="item in cartag" :key="item.id">{{item.tag}}</span>
    </div>
</template>

<script setup>
defineProps({
    cartag: {
        type: Array,
        value: []
    }
})
</script>

<style lang="stylus" scoped>
@import '../assets/css/index.styl'
.car_tag
    fj()
    fa(center) 
    margin-top 13px
    height 80px
    flex-wrap wrap
    .car_tagitem
        wh(23%, 32px)
        background-color #f7f8fc
        text-align center
        line-height 32px
</style>