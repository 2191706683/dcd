<template>
  <div class="page">
    <div class="grid-list">
      <div class="grid-item" v-for="item in gridList" :key="index">
        <img :src="item.icon" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const gridList = [
  {
    icon: "https://i.imgtg.com/2023/03/28/jl2BK.png",
    name: "消息私信",
  },
  {
    icon: "https://i.imgtg.com/2023/03/28/jl9fs.png",
    name: "收藏",
  },
  {
    icon: "https://i.imgtg.com/2023/03/28/jl6Za.png",
    name: "浏览历史",
  },
  {
    icon: "https://i.imgtg.com/2023/03/28/jlfxg.png",
    name: "下载管理",
  },
  {
    icon: "https://i.imgtg.com/2023/03/28/jllJB.png",
    name: "点赞",
  },
  {
    icon: "https://i.imgtg.com/2023/03/28/jl80S.png",
    name: "钱包",
  },
  {
    icon: "https://i.imgtg.com/2023/03/28/jluMN.png",
    name: "任务",
  },
  {
    icon: "https://i.imgtg.com/2023/03/28/jlI1C.png",
    name: "全部",
  },
];
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
