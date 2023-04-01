<template>
  <div class="car_hot">
    <div class="car_hotcar_title">热门车系</div>
    <div class="car_hotcar">
      <router-link
        to="/detail"
        class="car_hotcar_item"
        v-for="item in carhot"
        :key="item.id"
      >
        <img class="car_hotcar_img" :src="item.img" alt="" />
        <span>{{ item.title }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  carhot: {
    type: Array,
    value: [],
  },
});
</script>

<style lang="stylus" scoped>
@import '../assets/css/index.styl'
.car_hot
    margin-top 10px
    height 190px
    .car_hotcar_title
        line-height 20px
        font-size 14px
    .car_hotcar
        fj()
        flex-wrap wrap
        padding-top 11px
        .car_hotcar_item
            fa()
            wh(33%, 73px)
            flex-direction column
            box-sizing border-box
            color #000
            .car_hotcar_img
                width 84px
</style>
