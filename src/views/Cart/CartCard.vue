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
import { ref } from 'vue'
import { useCartStore } from "@/store/cart.js";
import { showSuccessToast } from 'vant';

// 使用defineEmits创建名称，接受一个数组
// const emit = defineEmits(['clickChild'])

const cartStore = useCartStore();

// 接收父组件传来的所有车的值
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

// 点击加号进行数量加1
const add = (cardData) => {
  cartStore.addCar(cardData);
};

// 点击减号进行数量减一,并进行判断是否数量大于一
const decrease = (cardData) => {
  if (cardData.num > 1) {
    cartStore.decreaseCar(cardData);
  }
};

// 删除该车在购物车中的信息
const deleteC = (cardData) => {
  let len = ref(cartStore.state.carList.length);
  cartStore.deleteCar(cardData);
  showSuccessToast('删除成功');
  // 判断是否是最后一个车,如果是,则进行页面刷新,使空购物车的信息能显现
  if (len.value == 1) {
    location.reload()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl';
.cartcard
    fj()
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
