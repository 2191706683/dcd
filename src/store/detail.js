import { defineStore } from "pinia";
import { reactive } from "vue";
import { getDetail } from "@/service/detail";

export const useDetailStore = defineStore('detail', () => {
    const state = reactive({
        detailData: [],
        detailHeader: {}
    })

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