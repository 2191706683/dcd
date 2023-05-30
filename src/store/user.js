import { defineStore } from "pinia";
import { getUser } from "@/service/user";
import { reactive } from "vue";

export const useUserStore = defineStore('user', () => {
    // 初始化数据，完成响应式
    const state = reactive({
       gridList: []
    })
    
    // /获取newcar，energy数据 
    const loadUser = async () => {
        const { data } = await getUser()
        state.gridList = data
    }
    return {
        state,
        loadUser
    }
})