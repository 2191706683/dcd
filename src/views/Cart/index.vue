<template>
  <div class="cart">
    <div class="cart_header">
      <div class="cart_title">
        <span>购物车({{ len }})</span>
        <span>管理</span>
      </div>
      <div class="cart_sum">共{{ len }}件宝贝</div>
      <div class="cardcontainer">
        <CartCard
          v-for="item in carList"
          :key="item.id"
          class="cart_card"
          :cardData="item"
        />
      </div>
    </div>
    <van-submit-bar class="submit_bar" :price="`${price}` * 100" button-text="提交订单">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    <Tabbar />
  </div>
</template>

<script setup>
import Tabbar from "@/components/Tabbar.vue";
import CartCard from "./CartCard.vue";
import { ref, computed } from "vue";
import { useCartStore } from "../../store/cart";
const cartStore = useCartStore();

const len = ref(cartStore.state.carList.length);
let checked = ref(false);
let carList = JSON.parse(localStorage.getItem("carList"));
// let price = ref(Number(cartStore.comSum()));
// console.log(price);

const price = computed(() => {
  let sum = 0;
  carList.forEach((item) => {
    sum += item.num * item.price;
  });
  return sum.toFixed(2);
});
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl';
.cart
    // padding-bottom 40%
    .cart_title
        fj()
        font-size 18px
        font-weight bold
        color #fff
        padding 20px 20px 0 14px
    .cart_sum
        padding 18px 0 30px 14px
        font-size 13px
        color #fff
    .cart_header
        wh(100%, 86px)
        background-color #ffcc32
        padding-bottom 90px
        .cardcontainer
            padding-bottom 90px
            .cart_card
              margin 0 auto
              padding 26px 10px
              width 330px
              background-color #f7f8fa
              margin-bottom 14px
              border-radius 12px
    .submit_bar
      margin-bottom 50px
</style>
