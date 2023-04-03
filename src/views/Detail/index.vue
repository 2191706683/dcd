<template>
  <div class="detail">
    <Navbar :title="detailHeader.name" />
    <DetailHeader :detailHeader="detailHeader" />
    <div class="detail_tabbar">
      <div class="cartype">车型</div>
      <div class="saling">在售</div>
    </div>
    <DetailContent :goToPage="goToPage" :detailData="detailData" />
    <van-action-bar class="action_bar">
      <van-action-bar-button
        @click="addAll(detailData)"
        class="action_bar-button"
        color="#1f2129"
        text="加入购物车"
      />
      <van-action-bar-button
        @click="goToPage('buy', detailHeader)"
        class="action_bar-button"
        color="#ffcc32"
        text="立即购买"
      />
    </van-action-bar>
  </div>
</template>

<script setup>
// 引入页面组件
import Navbar from "@/components/Navbar.vue";
import DetailHeader from "./DetailHeader.vue";
import DetailContent from "./DetailContent.vue";

import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useDetailStore } from "@/store/detail";
import { useCartStore } from "@/store/cart";
import { showSuccessToast } from "vant";

const router = useRouter();
const detailStore = useDetailStore();
const cartStore = useCartStore();

// 获取到detail仓库中的所有类型车详情数据
const detailData = computed(() => detailStore.state.detailData);
// 获取到detail仓库中的该详情页头部展示数据
const detailHeader = computed(() => detailStore.state.detailHeader);

/* 跳转到购买页面，并带上该类车参数，
  以便购物页面显示该标题 */
const goToPage = (path, car) => {
  router.push({ name: `${path}`, query: car });
};

/* 先判断是否登录，若无，跳转登录，若有，添加该item车到购物车内，
    添加成功后跳出弹窗提示
*/
const addAll = (cars) => {
  const isLogin = localStorage.getItem("isLogin");
  if (!isLogin) {
    router.push({ name: "login" });
  } else {
    showSuccessToast("添加成功");
    cartStore.addAllCar(cars);
  }
};

// 挂载后获取详情下部分接口的相关数据
onMounted(async () => {
  await detailStore.loadDetailContent();
});
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
.detail
    height 100%
    background-color #f7f8fc
    .detail_tabbar
        margin-top 8px
        height 50px
        padding 12px 10px 10px 0px
        font-size 18px
        background-color #fff
        .cartype
            padding-left 18px
        .saling
            wh(30px, 10px)
            font-size 12px
            margin-top 18px
            margin-left 8px
            padding 6px 6px 6px 8px
            border 1px solid #afb0b7
            background-color #fff
    .action_bar
        height 60px
        .action_bar-button
            height 48px
</style>
