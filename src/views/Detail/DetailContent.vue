<template>
  <div class="detail_content">
    <div class="detail_content_cell" v-for="item in detailData" :key="item.id">
      <div class="detail_content_description">
        <span>{{ item.description }}</span>
      </div>
      <div class="detail_content_cart">
        <div class="detail_cart_header">
          <div class="detail_cart_title">{{ item.title }}</div>
          <div class="detail_cart_price">
            <span>{{ item.price }}万</span>
            <span>指导价{{ item.guide_price }}万</span>
          </div>
        </div>
        <div class="detail_cart-button">
          <span @click="addCar(item)">加入购物车</span>
          <span @click="goToPage('buy', item)">立即购买</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { showSuccessToast } from "vant";
import { useCartStore } from "@/store/cart";
import { useRouter } from "vue-router";

const router = useRouter();
const cartStore = useCartStore();
const props = defineProps({
  detailData: {
    type: Array,
    value: [],
  },
});
/* 先判断是否登录，若无，跳转登录，若有，添加该item车到购物车内，
    添加成功后跳出弹窗提示
*/
const addCar = (item) => {
  const isLogin = localStorage.getItem("isLogin");
  if (!isLogin) {
    router.push({ name: "login" });
  } else {
    showSuccessToast("添加成功");
    cartStore.addCar(item);
  }
};

/* 跳转到购买页面，并带上该item车所有参数，
  以便购物页面显示该标题 */
const goToPage = (path, car) => {
  router.push({ name: `${path}`, query: car });
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
.detail_content
        padding 0px 16px 52px 16px
        .detail_content_description
            padding 22px 22px 22px 0px
        .detail_content_description span
            border-left 2px solid #000
            padding-left 10px
        .detail_content_cart
            padding 20px 14px 20px 14px
            height 94px
            font-size 16px
            background-color #fff
            .detail_cart_header
                fj()
                .detail_cart_price
                    fa(end)
                    flex-direction column
                .detail_cart_price span:first-child
                    font-size 17px
                    color #ef4444
                .detail_cart_price span:last-child
                    margin-top 12px
                    font-size 12px
                    color #979aa8
            .detail_cart-button
                fj()
                margin-top 16px
            .detail_cart-button span
                wh(144px, 38px)
                text-align center
                line-height 38px
                background-color #fff9e6
                border 1px solid #ffe28c
            .detail_cart-button span:active
                background #ffffda
</style>
