<template>
  <div class="page">
    <van-skeleton style="height: 150px;" :row="5" :loading="loading">
      <div class="grid-list">
        <div class="grid-item" v-for="item in gridList" :key="item.id">
          <img :src="item.icon" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>

<script setup>
import { ref,onMounted, computed } from "vue";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();

const gridList = computed(() => userStore.state.gridList);

const loading = ref(true);

onMounted(async () => {
  await userStore.loadUser();
  loading.value = false;
});
</script>

<style lang="stylus" scoped>
/* pages/user/childCpns/jr-user_head/jr-user_head.wxss *//* pages/user/childCpns/jr-user_body/jr-user_body.wxss */
.grid-list {
  display: flex;
  flex-wrap: wrap;
}
.grid-item {
  display: flex;
  width: 25%;
  flex-direction: column;
  height: 75px;
  justify-content: center;
  align-items: center;
}
.grid-item img {
  width: 22px;
  height: 22px;
}
.grid-item span {
  margin-top: 6px;
}
</style>
