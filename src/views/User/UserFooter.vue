<template>
  <!-- 底部发布功能，目前还没完成，需连数据库增加信息 -->
  <div class="page">
    <img src="https://i.imgtg.com/2023/03/28/jl3HL.png" alt="" />
    <div class="title">分享今天值得记录的瞬间</div>
    <span class="publish">+ 发布</span>
  </div>
</template>

<script setup></script>  

<style lang="stylus" scoped>
@import '../../assets/css/index.styl';
.page 
    fa()
    flex-direction column
    padding-top 30px
    border-top 7px solid #f2f2f2

.page img 
    wh(70px, 60px)
    padding 7px 0

.page .title 
    padding 7px 0

.page .publish 
    wh(75px, 20px)
    margin-top 7px
    padding 7px 10px
    text-align center
    line-height 20px
    color #fff
    background-color #ffcc32
    border-radius 2px
    font-size 11pt

</style>
