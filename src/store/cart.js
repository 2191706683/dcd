import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCartStore = defineStore('cart', () => {
    const state = reactive({
        carList: [],
    })

    const addCar = (item) => {
        let arrName = []
        state.carList.forEach(info => arrName.push(info.name))
        if (arrName.indexOf(item.name === -1)) {
            item.num++
            state.carList.unshift(item)
        } else {
            // carList[arrName.indexOf(item.name)].
        }
    }
    return {
        state,
        addCar
    }
})