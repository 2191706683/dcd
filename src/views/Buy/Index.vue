<template>
    <div class="buy">
        <div class="tip">提交后会有经销商与您联系</div>
        <Navbar :title="buyHeader.title" />
        <BuyHeader :buyHeader="buyHeader" />
        <BuyForm />
    </div>
</template>
  
<script setup>
import Navbar from '@/components/Navbar.vue';
import BuyHeader from './BuyHeader.vue'
import BuyForm from './BuyForm.vue';

import {computed } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const buyHeader = computed(() => route.query)

</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
.buy
    margin-top 50px
    .tip
        wh(100%, 26px)
        padding-left 20px
        line-height 26px
        color #a59999
        background-color #f8f8f8
</style>