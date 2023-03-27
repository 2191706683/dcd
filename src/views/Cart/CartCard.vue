<template>
  <div class="cartcard">
    <van-checkbox v-model="checked" />
    <van-swipe-cell>
      <van-card
        class="cartcard_card"
        :num="num"
        :price="`${cardData.price}万`"
        :desc="cardData.title"
        :title="cardData.name"
        :thumb="cardData.img"
      >
        <template #footer>
          <van-button size="small" @click="add(cardData)">+</van-button>
          <van-button size="small" @click="decrease(cardData)">-</van-button>
        </template>
      </van-card>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart.js";
import { ref, reactive } from "vue";

const cartStore = useCartStore();

const props = defineProps({
  cardData: {
    type: Object,
    value: {},
  },
});

let checked = ref(false);

const cardData = props.cardData;

let num = ref(cardData.num);

const add = (cardData) => {
  num.value++;
  cartStore.addCar(cardData);
};

const decrease = (cardData) => {
  if (num.value > 1) {
    num.value--;
    cartStore.decreaseCar(cardData);
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl';
.cartcard
    fj()
    // display flex
    .cartcard_card
        padding 4px 0px 4px 12px
        width 300px
        background-color @white
    .delete-button 
      height 100%
      margin-left 2px
/deep/ .van-card__price
    color red
</style>
