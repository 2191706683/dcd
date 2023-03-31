<template>
  <div class="cartcard">
    <van-checkbox checked-color="#ffcc32" v-model="cardData.isChecked" />
    <van-swipe-cell>
      <van-card
        class="cartcard_card"
        :num="cardData.num"
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
        <van-button @click="deleteC(cardData)" square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart.js";
import { showSuccessToast } from 'vant';

// 使用defineEmits创建名称，接受一个数组
// const emit = defineEmits(['clickChild'])

const cartStore = useCartStore();

const props = defineProps({
  cardData: {
    type: Object,
    value: {},
  },
});

const cardData = props.cardData;

// const clickChild=()=>{
//   emit('clickChild',cardData.isChecked)
// }

const add = (cardData) => {
  cartStore.addCar(cardData);
};

const decrease = (cardData) => {
  if (cardData.num > 1) {
    cartStore.decreaseCar(cardData);
  }
};

const deleteC = (cardData) => {
  cartStore.deleteCar(cardData);
  showSuccessToast('删除成功');
}
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
:deep(.van-card__price)
    color red
// :deep(van-submit-bar__price :after)
//   content '万'
</style>
