import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCartStore = defineStore('cart', () => {
    const state = reactive({
        carList: JSON.parse(localStorage.getItem("carList")) || [],
    })

    // 增加购物车中商品的数量
    const addCar = (item) => {
        let arrTitle = []
        state.carList.forEach(info => arrTitle.push(info.title))
        if (arrTitle.indexOf(item.title) === -1) {
            item.num++
            state.carList.push(item)
        } else {
            state.carList[arrTitle.indexOf(item.title)].num++
        }
        localStorage.setItem('carList', JSON.stringify(state.carList))
    }

    // 减少购物车的数量
    const decreaseCar = (item) => {
        let arrTitle = []
        state.carList.forEach(info => arrTitle.push(info.title))
        state.carList[arrTitle.indexOf(item.title)].num--
        localStorage.setItem('carList', JSON.stringify(state.carList))
    }

    const comSum = () => {
        let sum = 0
        state.carList.forEach(item => {
            sum += item.num * item.price
        })
        return sum.toFixed(2)
    }

    // 在购物车的基础上所有商品加一
    const addAllCar = (cars) => {
        cars.forEach((item) => {
            addCar(item)
        })
        localStorage.setItem('carList', JSON.stringify(state.carList))
    }

    return {
        state,
        addCar,
        decreaseCar,
        comSum,
        addAllCar
    }
})