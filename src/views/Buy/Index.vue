<template>
    <div class="buy">
        <div class="tip">提交后会有经销商与您联系</div>
        <Navbar title="雪铁龙C6" />
        <BuyHeader />
        <BuyForm />
    </div>
</template>
  
<script setup>
import Navbar from '@/components/Navbar.vue';
import BuyHeader from './BuyHeader.vue'
import BuyForm from './BuyForm.vue';


</script>

<style lang="stylus" scoped>
.buy
    margin-top 50px
    .tip
        padding-left 20px
        width 100%
        height 26px
        line-height 26px
        color #a59999
        background-color #f8f8f8
</style>