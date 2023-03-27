import { defineStore } from "pinia";
import { getUser } from "@/service/home";
import { reactive } from "vue";

export const useUserStore = defineStore('user', () => {
    // 初始化数据，完成响应式
    const state = reactive({
       icon: '',
       name: ''
    })
    
    // 获取newcar，energy数据 
    const loadUser = async () => {
        const { data } = await getUser()
        console.log(data, '---')
    }
    return {
        state
    }
})