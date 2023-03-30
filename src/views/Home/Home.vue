<template>
  <div>
    <DcdHeader />
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <div>
        <van-tabs v-model:active="active" color="#000" line-width="20px">
          <van-tab title="新车"><TabCar tabname="newcar" /></van-tab>
          <van-tab title="新能源"><TabCar tabname="energy" /></van-tab>
          <van-tab title="准确找车"><Accurate /></van-tab>
        </van-tabs>
      </div>
    </van-pull-refresh>
    <Tabbar />
  </div>
</template>

<script setup>
// 引入组件
import Tabbar from "@/components/Tabbar.vue";
import DcdHeader from "@/components/DcdHeader.vue";
import TabCar from "./TabCar.vue";
import Accurate from "./Accurate.vue";

import { ref } from "vue";

let active = ref(null);
let isLoading = ref(true);

const onRefresh = () => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};
</script>

<style lang="stylus" scoped></style>
