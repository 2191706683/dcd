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
@import '../../assets/css/index.styl';
.grid-list 
    display flex
    flex-wrap wrap

.grid-item 
    fj(center)
    fa()
    wh(25%, 75px)
    flex-direction column

.grid-item img 
    wh(22px, 22px)

.grid-item span 
    margin-top 6px
</style>
