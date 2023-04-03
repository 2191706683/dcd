import { defineStore } from "pinia";
import { reactive } from "vue";
import { getDetail } from "@/service/detail";

export const useDetailStore = defineStore('detail', () => {
    const state = reactive({
        detailData: [],
        detailHeader: {}
    })

    // 调用getDetail函数把数据获取到并解构，把值放入state中
    const loadDetailContent = async () => {
        const { data } = await getDetail()
        state.detailData = data.detail
        state.detailHeader = data.detailHeader
    }
    return {
        state,
        loadDetailContent
    }
})