<template>
    <div class="buyheader">
        <div class="buychoose">
            <img src="https://p3.dcarimg.com/img/motor-img/d6f728d6a1b5ed93ba1d8e394a860c3e~640x0.png" alt="">
            <div class="buychoose_right">
                <span>雪铁龙C6</span>
                <span @click="goToPage('type')">选择车型 ></span>
            </div>
        </div>
        <div class="buyprice">
            <div class="buyprice_cell">
                <span>全款(万元)</span>
                <span>15.50万</span>
            </div>
            <div class="buyprice_cell">
                <span>指导价(万元)</span>
                <span>15.50万</span>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goToPage = (path) => {
    router.push({name: `${path}`})
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
            width 220px
            flex-direction column
            color #c0c0c0
            height 50px
        .buychoose_right span:first-child
            font-size 16px
            color #000
    .buyprice
        margin-top 8px
        border-radius 8px
        background-color #f8f8f8
        height 72px
        fj(space-around)
        .buyprice_cell
            padding 15px 0 18px 0
            fj()
            fa()
            flex-direction column
        .buyprice_cell span
            font-size 12px
        .buyprice_cell span:last-child
            font-size 20px
            color #ff9100
</style>