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
            @click-left-icon="onSearch"
        />
        </form>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref } from 'vue';
import { showToast } from 'vant'
import _ from 'lodash'

const value = ref(null)

const ajax1 = () => {
    console.log('开始搜索，搜索内容为' + value.value)
}

// const ajax2 = () => {
//     if (!value.value) {
//         console.log('输入内容为空')
//     } else {
//         console.log('输入内容为' + value.value)
//     }
// }

let debounceAjax1 = _.debounce(ajax1, 1000)
// let debounceAjax2 = _.debounce(ajax2, 1000)

const onSearch = () => {
    if (!value.value) {
        showToast('搜索内容为空，请输入内容')
        return
    }
    debounceAjax1()
}

// const onUpdate = () => {
//     debounceAjax2()
// }



const onCancel = () => history.back()

</script>

<style lang="stylus" scoped>
.search
    margin-top 50px
</style>