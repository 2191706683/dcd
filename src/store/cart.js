import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useCartStore = defineStore('cart', () => {
    const state = reactive({
        carList: JSON.parse(localStorage.getItem("carList")) || [],
        // len: JSON.parse(localStorage.getItem("carList")).length || 0
    })

    // 增加购物车中商品的数量
    const addCar = (item) => {
        let arrTitle = []
        // 把选中的车数据中的标题逐一放进arrTitle数组里
        state.carList.forEach(info => arrTitle.push(info.title))
        // 如果该数组中没有该车标题，则该车数量加一并把数量加一后的该车放入state.carList中
        if (arrTitle.indexOf(item.title) === -1) {
            item.num++
            state.carList.push(item)
        } else {
            // 如果数组中有该车标题，则直接找到该车在state.carList中的下标，和arrTitle下标相同，并修改数量
            state.carList[arrTitle.indexOf(item.title)].num++
        }
        // 把修改后的数组存入本地缓存中
        localStorage.setItem('carList', JSON.stringify(state.carList))
    }

    // 减少购物车的数量
    const decreaseCar = (item) => {
        let arrTitle = []
        // 把该车标题一遍并把标题放入arrTitle数组中
        state.carList.forEach(info => arrTitle.push(info.title))
        // 直接对数量进行减一，判断是否大于一在应用该函数时之前
        state.carList[arrTitle.indexOf(item.title)].num--
        // 把修改后的数组存入本地缓存中
        localStorage.setItem('carList', JSON.stringify(state.carList))
    }

    // 对在购物车的商品进行计算总和价格
    let sumPrice = computed(() => {
        // 初始化为零
        let sum = 0
        // 对购物车中的列表进行计算总和
        state.carList.forEach(item => {
            if (item.isChecked) {
                sum += item.num * item.price
            }
        })
        // 返回计算的总和
        return sum
    })

    // 在购物车的基础上所有商品加一
    const addAllCar = (cars) => {
        // 对所有车进行遍历，判断购物车是否有该车，并进行数量加一
        cars.forEach((item) => {
            addCar(item)
        })
        // 把修改后的数据存入本地缓存中
        localStorage.setItem('carList', JSON.stringify(state.carList))
    }
    
    // 对购物车的按钮进行全选
    const checkAll = (bool) => {
        // 把全选按钮的布尔值传过来,并把carList的值赋值为同一布尔值
        state.carList.forEach((item) => {
            item.isChecked = bool
        })
        // 把修改后的数据存入本地缓存中
        localStorage.setItem('carList', JSON.stringify(state.carList))
    }
    
    // 删除购物车的单个车
    const deleteCar = (item) => {
        let arrTitle = []
        // 把该车标题一遍并把标题放入arrTitle数组中
        state.carList.forEach(info => arrTitle.push(info.title))
        // 对该车进行删除
        state.carList.splice(arrTitle.indexOf(item.title), 1)
        // 把修改后的数据存入本地缓存中
        localStorage.setItem('carList', JSON.stringify(state.carList))
    }

    return {
        state,
        addCar,
        decreaseCar,
        sumPrice,
        addAllCar,
        checkAll,
        deleteCar
    }
})