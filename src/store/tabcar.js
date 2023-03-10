import { defineStore } from "pinia";
import { getTabCar } from "@/service/home";
import { reactive } from "vue";

export const useTabCarStore = defineStore('newcar', () => {
    // 初始化数据，完成响应式
    const state = reactive({
        newcar_caricon: [],
        newcar_cartag: [],
        newcar_carhot: [],
        energy_caricon: [],
        energy_cartag: [],
        energy_carhot: [],
        carindex: []
    })
    
    // 获取newcar，energy数据 
    const loadTabCar = async () => {
        const { data } = await getTabCar()
        state.newcar_caricon = data.newcar.caricon
        state.newcar_cartag = data.newcar.cartag
        state.newcar_carhot = data.newcar.carhot
        state.energy_caricon = data.energy.caricon
        state.energy_cartag = data.energy.cartag
        state.energy_carhot = data.energy.carhot
        state.carindex = data.carindex
    }
    return {
        state,
        loadTabCar
    }
})