<template>
  <div class="cart">
    <div class="cart_header">
      <div class="cart_title">
        <span>购物车({{ len }})</span>
        <span>管理</span>
      </div>
      <div class="cart_sum">共{{ len }}件宝贝</div>
      <div class="empty" v-if="len==0">购物车空空如也，去<router-link to="/">首页</router-link>购物吧</div>
      <div v-else class="cardcontainer">
        <CartCard
          v-for="item in carList"
          :key="item.id"
          class="cart_card"
          :cardData="item"
        />
      </div>
    </div>
    <van-submit-bar
      @submit="onSubmit"
      class="submit_bar"
      :price="`${sumPrice}` * 100"
      button-text="提交订单"
    >
      <van-checkbox
        v-if="len"
        checked-color="#ffcc32"
        @click.stop="checkAll(checked)"
        v-model="checked"
        >全选</van-checkbox
      >
    </van-submit-bar>
    <Tabbar />
  </div>
</template>

<script setup>
import Tabbar from "@/components/Tabbar.vue";
import CartCard from "./CartCard.vue";
import { ref, computed, onMounted, watch } from "vue";
import { useCartStore } from "../../store/cart";
import { showSuccessToast, showLoadingToast, closeToast, showToast } from "vant";

const cartStore = useCartStore();

let len = ref(cartStore.state.carList.length);
let carList = computed(() => cartStore.state.carList);
let sumPrice = computed(() => cartStore.sumPrice);

let checked = ref(null);

const onSubmit = () => {
  if (sumPrice.value == 0) {
    showToast("请勾选商品！");
  } else {
    const toast = showLoadingToast({
      duration: 0,
      forbidClick: true,
      message: "付款中...",
    });

    let second = 1;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast.message = `付款中...`;
      } else {
        clearInterval(timer);
        showSuccessToast("付款成功");
        for (let i= 0; i < carList.value.length; ) {
          if (carList.value[i].isChecked) {
            cartStore.deleteCar(carList.value[i]);
          } else {
            i++
          }
        }
        closeToast();
        location.reload()
      }
    }, 1000);
  }
};
const checkAll = (bool) => {
  cartStore.checkAll(bool);
};

// const clickEven=(val)=>{
//   // console.log(val);
//   if (!val) {
//     checked.value = false
//   }
// }

onMounted(() => {
  checked.value = true;
  carList.value.forEach((item) => {
    if (!item.isChecked) checked.value = false;
  });
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
        .empty
            margin-top 250px  
            text-align center
            font-size 16px
            letter-spacing 4px
            font-weight bold
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
