<template>
  <div class="item">
    <div class="top">
      <img class="avator" src="https://i.imgtg.com/2023/03/25/jBzWp.webp" alt="" />
      <div class="message">
        <div class="name">吃腻的奶油</div>
        <div class="state">
          <span class="follow">0<span>关注</span></span>
          <span class="fans">0<span>粉丝</span></span>
          <span class="liked">0<span>获赞</span></span>
        </div>
      </div>
      <img
        @click="logout"
        class="logout"
        src="https://i.imgtg.com/2023/03/31/2ehvP.png"
        alt=""
      />
    </div>
    <div class="description">
      <span class="tag">+ 添加年龄、学校标签</span>
      <div class="introduction">填写简介更容易获得大家的关注,点击添加 ></div>
      <div class="btns">
        <span>申请认证</span>
        <span>编辑资料</span>
        <img src="https://i.imgtg.com/2023/03/28/jl0w6.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { showConfirmDialog } from "vant";

const logout = () => {
  showConfirmDialog({
    message: "你真的舍得离开我吗？",
  })
    .then(() => {
      // on confirm
      localStorage.removeItem("isLogin");
      location.reload();
    })
    .catch(() => {
      // on cancel
    });
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl';
.item 
    background-image linear-gradient(#fbf9e0, #fff)
    padding 15px 15px 0 15px
    color #000

.top 
    fa()
.top .avator 
    border 1px solid #fff
    border-radius: 50%
    wh(75px, 75px)

.top .message 
    fj(space-around)
    margin-left 13px
    height 58px
    flex-direction column
    font-weight 600

.top .logout 
    wh(25px, 25px)
    margin-left 70px
    margin-bottom 26px

.follow, .fans, .liked 
    margin-right 17px

.follow span, .fans span, .liked span 
    margin-left 3px
    font-size 5pt
    font-weight normal

.description 
    fj(space-around)
    height 100px
    flex-direction column
    padding 5px 0 10px

.description span 
    background-color #fbf9e0

.description .tag 
    width 130px
    padding 1px 5px
    font-size 4pt
    border-radius 3px

.description .introduction 
    font-size 5pt
.description .btns 
    display flex

.btns span 
    fa()
    padding 0 20px
    margin-right 6px
    span-align center
    font-size 5pt
    border-radius 3px

.btns img 
    background-color #fbf9e0
    wh(25px, 25px)
    padding: 3px
    border-radius: 3px

</style>
