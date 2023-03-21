<template>
    <div>
        <van-nav-bar class="navbar" :title="props.title" fixed>
            <template #left>
                <van-icon @click="onClickLeft" name="arrow-left" color="#000" size="24" />
                <van-icon @click="goToPage('home')" class="icon" name="wap-home-o" color="#000" size="24" />
            </template>
            <template #right>
                <van-icon @click="goToPage('search')" name="search" color="#000" size="24" />
                <van-icon class="icon" name="apps-o" color="#000" size="24" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
    title: {
        type: String,
        default: '搜索'
    }
})
const router = useRouter()

const onClickLeft = () => history.back()

const goToPage = (path) => {
    router.push({name: `${path}`})
}

</script>

<style lang="stylus" scoped>
.navbar
    height 49px
.icon
    margin-left 16px
</style>