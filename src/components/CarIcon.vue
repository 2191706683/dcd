<template>
  <div class="car_icon">
    <div class="car_icon_item" v-for="item in caricon" :key="item.id">
      <img class="car_icon_img" v-lazy="item.icon" alt="" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  caricon: {
    type: Array,
    value: [],
  },
});
</script>

<style lang="stylus" scoped>
@import '../assets/css/index.styl'
.car_icon
    fj(space-around)
    .car_icon_item
        fa()
        flex-direction column
        .car_icon_img
            wh(32px, 32px)
</style>
