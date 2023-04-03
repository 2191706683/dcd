<template>
    <div class="buy">
        <div class="tip">提交后会有经销商与您联系</div>
        <Navbar :title="buyHeader.name" />
        <BuyHeader :buyHeader="buyHeader" />
        <BuyForm />
    </div>
</template>
  
<script setup>
// 引入页面组件
import Navbar from '@/components/Navbar.vue';
import BuyHeader from './BuyHeader.vue'
import BuyForm from './BuyForm.vue';

import {computed } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

// 对跳转到该页面传过来的参数进行定义，该参数为单个车的数据或detail中的头部数据
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