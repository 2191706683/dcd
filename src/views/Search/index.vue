<template>
    <div>
        <Navbar />
        <form action="/">
        <van-search
            class="search"
            v-model="value"
            show-action
            autofocus
            clearable
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
        />
        </form>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref } from 'vue';

const value = ref(null)

const onSearch = () => {
    console.log('搜素了')
}

const onCancel = () => history.back()

</script>

<style lang="stylus" scoped>
.search
    margin-top 50px
</style>