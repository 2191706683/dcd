<template>
  <div>
    <Navbar title="雪铁龙C6" />
    <div class="buytype">
      <template v-for="item in detailData" :key="item.id">
        <div @click="choose(item)" class="cell">
          <div class="cell_left">{{ item.title }}</div>
          <div class="cell_right">
            <span>{{ item.price }}万</span>
            <span>指导价：{{item.guide_price}}万</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import { useDetailStore } from "@/store/detail.js";
import { onMounted, computed } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()
const detailStore = useDetailStore();

const detailData = computed(() => detailStore.state.detailData);

const choose = (car) => {
  router.push({ name: 'buy', query: car, replace:true});
}

onMounted(() => {
  detailStore.loadDetailContent();
});
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl'
.buytype
    margin-top 50px
.cell
    fj()
    padding 10px 14px
    height 36px
    .cell_left
        font-size 16px
    .cell_right
        fa(end)
        fj()
        flex-direction column
        padding 0 0 6px 0
        color #ff9100
    .cell_right span:last-child
        color #9999b3
        text-decoration line-through
</style>
