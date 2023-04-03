<template>
    <div class="buyheader">
        <div class="buychoose">
            <img src="https://p3.dcarimg.com/img/motor-img/d6f728d6a1b5ed93ba1d8e394a860c3e~640x0.png" alt="">
            <div class="buychoose_right">
                <span>{{ buyHeader.name }}</span>
                <span v-if="buyHeader.title" @click="goToPage('type')">{{ buyHeader.title }}</span>
                <span v-else @click="goToPage('type')">选择车型 ></span>
            </div>
        </div>
        <div class="buyprice">
            <div class="buyprice_cell">
                <span>全款(万元)</span>
                <span v-if="buyHeader.price">{{ buyHeader.price }}</span>
                <span v-else>---</span>
            </div>
            <div class="buyprice_cell">
                <span>指导价(万元)</span>
                <span v-if="buyHeader.guide_price">{{ buyHeader.guide_price }}</span>
                <span v-else>---</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
    buyHeader: {
        type: Object,
        default: {}
    }
})
const router = useRouter()
/* 
    跳转传入的类型选择页面，并消除该路由历史记录，
    以便返回时能直接返回上一页面，针对一键立即购买
 */
const goToPage = (path) => {
    router.push({name: `${path}`, replace:true})
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
.buyheader
    padding 2px 20px 0 20px
    .buychoose
        fj()
        fa()
        padding 9px 0
        img 
            width 100px
        .buychoose_right
            fj(space-around)
            wh(220px, 50px)
            flex-direction column
            color #c0c0c0
        .buychoose_right span:first-child
            font-size 16px
            color #000
    .buyprice
        fj(space-around)
        margin-top 8px
        border-radius 8px
        background-color #f8f8f8
        height 72px
        .buyprice_cell
            fj()
            fa()
            padding 15px 0 18px 0
            flex-direction column
        .buyprice_cell span
            font-size 12px
        .buyprice_cell span:last-child
            font-size 20px
            color #ff9100
</style>