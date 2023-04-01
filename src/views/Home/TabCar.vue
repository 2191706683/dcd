<template>
  <div>
    <div class="tabcar">
      <van-skeleton title :row="4" :loading="loading">
        <CarIcon :caricon="caricon" />
      </van-skeleton>
      <van-skeleton style="margin-top: 40px" title :row="4" :loading="loading">
        <CarTag :cartag="cartag" />
      </van-skeleton>
      <van-skeleton style="margin-top: 40px" title :row="4" :loading="loading">
        <CarHot :carhot="carhot" />
      </van-skeleton>
    </div>
    <CarIndex :carindex="carindex" />
  </div>
</template>

<script setup>
// 引入组件
import CarIcon from "@/components/CarIcon.vue";
import CarTag from "@/components/CarTag.vue";
import CarHot from "@/components/CarHot.vue";
import CarIndex from "@/components/CarIndex.vue";

import { ref, onMounted, computed } from "vue";
import { useTabCarStore } from "@/store/tabcar.js";
import { showLoadingToast, closeToast } from "vant";

// 获取Home组件传过来的参数
const props = defineProps({
  tabname: {
    type: String,
    value: "",
  },
});

//使用tabcar数据仓库
const tabcarStore = useTabCarStore();

// 利用参数转化为需要取得的相应的数据
const tabname_caricon = `${props.tabname}_caricon`;
const tabname_cartag = `${props.tabname}_cartag`;
const tabname_carhot = `${props.tabname}_carhot`;

// 拿到tabcarStore中的数据
const caricon = computed(() => tabcarStore.state[tabname_caricon]);
const cartag = computed(() => tabcarStore.state[tabname_cartag]);
const carhot = computed(() => tabcarStore.state[tabname_carhot]);
const carindex = computed(() => tabcarStore.state.carindex);

// 定义骨架屏是否显示
const loading = ref(true);

// 获取newcar和energy的数据，并使用骨架屏及加载弹窗
onMounted(async () => {
  showLoadingToast({
    message: "加载中...",
    forbidClick: true,
  });
  await tabcarStore.loadTabCar();
  loading.value = false;
  closeToast();
});
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
.tabcar
    padding 12px 15px 0px 15px
</style>
