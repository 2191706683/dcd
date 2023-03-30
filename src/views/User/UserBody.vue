<template>
  <div class="page">
    <div class="grid-list">
      <div class="grid-item" v-for="item in gridList" :key="item.id">
        <img :src="item.icon" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore()

const gridList = computed(() => userStore.state.gridList)

onMounted(() => {
  userStore.loadUser()
})

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
