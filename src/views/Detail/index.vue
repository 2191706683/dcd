<template>
    <div class="detail">
        <Navbar title="雪铁龙" />
        <div class="detail_header">
            <div class="detail_header_title">
                <span class="header_title-left">雪铁龙C6</span>
                <span class="header_score">
                    <span>
                        <img
                            src="https://lf3-motor.dcarstatic.com/obj/motor-fe-static/motor/pc/_next/./static/images/dcar-score-icon-b1e77ee8508275751ad2..svg"
                            alt="" 
                        />
                    </span>
                    <span>3.91分</span>
                </span>
            </div>
            <div class="detail_header_price">
                <span class="header_price_left">19.78-25.69万</span>
                <span class="header_price_middle">指导价：21.68-27.59万</span>
                <span class="header_price_right">全国价</span>
            </div>
            <div class="detail_header_hotsale">
                <span class="header_hotsale_left">02月中型轿车销量 NO.43</span>
                <span class="header_hotsale_right">中型轿车热门 NO.10</span>
            </div>
            <img class="header_show-img"
                    src="https://p6-dcd.byteimg.com/img/tos-cn-i-0000c0030/05807adce3e142fdb7497a1d805e1fd3~tplv-resize:1200:0.webp"
                    alt="">
            <div class="detail_header_show">
                <span class="header_show_left">
                    内饰
                    <van-icon name="play" />
                </span>
                <span class="header_show_middle">
                    2705张图
                    <van-icon name="play" />
                </span>
                <span class="header_show_right">
                    视频说明图
                    <van-icon name="play" />
                </span>
            </div>
            <div class="detail_header_description">
                <div class="header_description_cell">
                    <span>参数配置</span>
                    <span>1.8T款在售</span>
                </div>
                <div>
                    <span>懂车帝实测</span>
                    <span>暂无数据</span>
                </div>
                <div>
                    <span>懂车分</span>
                    <span>12个优点</span>
                </div>
                <div>
                    <span>车友圈</span>
                    <span>99条新动态</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
.detail_header
    padding 21px 20px 0 20px
    background-color #d4def3
    height 365px
    // background-image linear-gradient(#d4def3, #fff) 
    .detail_header_title
        padding-bottom 10px
    .detail_header_title span:first-child
        height 40px
        font-size 24px
    .detail_header_title span:last-child
        margin-left 20px
    .detail_header_price
        padding-bottom 13px
    .detail_header_price span:first-child
        color #e62021
        font-size 13px
        font-weight 600
    .detail_header_price span:nth-child(n+2)
        margin-left 6px
        color #606370
    .detail_header_hotsale span
        background-color #f1f4fb
        padding 2px 5px
    .detail_header_hotsale span:last-child
        margin-left 10px
    .header_show-img
        position:absolute;
        margin-top -20px
        height 230px
        clip:rect(70px 500px 180px 0px)
    .detail_header_show
        wh(200px, 20px)
        fj()
        fa()
        margin-top 180px
        // background-color #fff
        margin 175px auto 0
        color #606370
    .detail_header_description
        fj()
        margin-top 30px
        background-color #fff
        height 80px
        .header_description_cell
            fj()
            flex-direction column
            
</style>