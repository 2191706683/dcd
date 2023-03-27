<template>
  <!-- <div class="header">
    <div class="icon">
      <van-icon size="30" name="https://i.imgtg.com/2023/03/28/jlG5I.png" />
      <van-icon size="28" name="https://i.imgtg.com/2023/03/28/jlLf1.png" />
    </div>
    <div class="header_desc">
      <img class="desc_img" src="https://i.imgtg.com/2023/03/25/jBzWp.webp" alt="" />
      <div class="desc_msg">
        <div class="desc_name">吃腻的奶油 ></div>
        <div class="desc_medal">0个勋章</div>
        <div class="desc_detail">
          <span>动态 0</span>
          <span>关注 0</span>
          <span>粉丝 0</span>
        </div>
      </div>
    </div>
  </div> -->
  <!--pages/user/childCpns/jr-user_head/jr-user_head.wxml-->
  <div class="item">
    <div class="top">
      <img
        src="https://i.imgtg.com/2023/03/25/jBzWp.webp"
        alt=""
      />
      <div class="message">
        <div class="name">吃腻的奶油</div>
        <div class="state">
          <span class="follow">0<span>关注</span></span>
          <span class="fans">0<span>粉丝</span></span>
          <span class="liked">0<span>获赞</span></span>
        </div>
      </div>
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

<script setup></script>

<style lang="stylus" scoped>
@import '../../assets/css/index.styl';
.item {
  // background-color: #fbf9e0;
  background-image linear-gradient(#fbf9e0, #fff) 
  padding: 15px 15px 0 15px;
  color #000;
}

.top {
  display: flex;
  align-items: center;
}
.top img {
  border: 1px solid #fff;
  border-radius: 50%;
  width: 75px;
  height: 75px;
}
.top .message {
  display: flex;
  margin-left: 13px;
  height: 58px;
  flex-direction: column;
  justify-content: space-around;
  font-weight: 600;
}
.follow, .fans, .liked {
  margin-right: 17px;
}
.follow span, .fans span, .liked span {
  margin-left: 3px;
  font-size: 5pt;
  font-weight: normal;
}
.description {
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px 0 10px;
}
.description span {
  background-color: #fbf9e0;
}
.description .tag {
  width: 130px;
  padding: 1px 5px;
  font-size: 4pt;
  border-radius: 3px;
}
.description .introduction {
  font-size: 5pt;
}
.description .btns {
  display: flex;
}
.btns span {
  display: flex;
  padding: 0 20px;
  margin-right: 6px;
  span-align: center;
  align-items: center;
  font-size: 5pt;
  border-radius: 3px;
}
.btns img {
  background-color: #fbf9e0;
  width: 25px;
  height: 25px;
  padding: 3px;
  border-radius: 3px;
}
</style>
