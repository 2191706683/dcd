<template>
    <div>
        <div class="tabcar">
            <CarIcon :caricon="caricon" />
            <CarTag :cartag="cartag" />
            <CarHot :carhot="carhot" />
        </div>
        <CarIndex :carindex="carindex" />
    </div>
</template>

<script setup>
// 引入组件
import CarIcon from '@/components/CarIcon.vue'
import CarTag from '@/components/CarTag.vue'
import CarHot from '@/components/CarHot.vue'
import CarIndex from '@/components/CarIndex.vue'

import { onMounted, computed } from 'vue'
import { useTabCarStore } from '@/store/tabcar.js'

// 获取Home组件传过来的参数
const props = defineProps({
    tabname: {
        type: String,
        value: ''
    }
})

const tabcarStore = useTabCarStore()

// 利用参数转化为需要取得的相应的数据
const tabname_caricon = `${props.tabname}_caricon`
const tabname_cartag = `${props.tabname}_cartag`
const tabname_carhot = `${props.tabname}_carhot`

// 拿到tabcarStore中的数据
const caricon = computed(() => tabcarStore.state[tabname_caricon])
const cartag = computed(() => tabcarStore.state[tabname_cartag])
const carhot = computed(() => tabcarStore.state[tabname_carhot])
const carindex = computed(() => tabcarStore.state.carindex)

// 获取newcar和energy的数据
onMounted(async () => {
    tabcarStore.loadTabCar()
})
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
.tabcar
    padding 12px 15px 0px 15px
</style>