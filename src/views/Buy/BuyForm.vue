<template>
  <van-divider class="divider"> 提交信息，立即购买 </van-divider>
  <van-form class="buyForm" @submit="onSubmit">
    <van-cell-group class="cellgroup" inset>
      <van-field
        size="large"
        v-model="result"
        is-link
        readonly
        name="area"
        label="购车城市"
        placeholder="点击选择省市区"
        :rules="[{ required: true, message: '请选择城市' }]"
        @click="showArea = true"
      />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
      </van-popup>
      <van-field
        size="large"
        v-model="state.username"
        name="您的姓名"
        label="姓名"
        placeholder="请输入姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        size="large"
        v-model="state.telphone"
        type="tel"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button class="submit" block color="#ffd452" native-type="submit">
        立即购买
      </van-button>
    </div>
    <div class="checkbox">
      <van-checkbox v-model="checked" shape="square" checked-color="#ffd452">
        同意
      </van-checkbox>
      <a
        href="https://m.dcdapp.com/motor/inapp/dealer_m/personnel-info-statement.html?series_id=1375&dealer_id=1"
        >《个人信息保护声明》</a
      >
    </div>
  </van-form>
</template>

<script setup>
import { ref, reactive } from "vue";
import { areaList } from "@vant/area-data";
import { showSuccessToast, showLoadingToast, closeToast, showToast } from "vant";

// 定义购车城市并赋值
const result = ref("");
// 定义购车弹出层选中的城市
const showArea = ref(false);
const checked = ref(false);
const state = reactive({
  username: null,
  telphone: null
})

// 如果点击确认按钮弹窗，则把选中的值传入result中，并带上/
const onConfirm = ({ selectedOptions }) => {
  showArea.value = false;
  result.value = selectedOptions.map((item) => item.text).join("/");
};

// 先判断是否勾选了同意，若无，则探出提示，若勾选了，则进行相关步骤
const onSubmit = () => {
  if (checked.value == false) {
    showToast("请勾选协议！");
  } else {
    // 先定义弹出层
    const toast = showLoadingToast({
      duration: 0,
      forbidClick: true,
      message: "付款中...",
    });
    // 定义弹出层显示的倒计时
    let second = 2;
    
    /* 进行一秒定时, 倒计时先逐渐减一,如果不为0,则弹出层消息不变
        若为0,则清除该定时,并弹出成功弹窗并关闭,最后进行页面刷新
    */
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast.message = `付款中...`;
      } else {
        clearInterval(timer);
        showSuccessToast("付款成功");
        closeToast();
        location.reload();
      }
    }, 1000);
  }
};
</script>

<style lang="stylus" scoped>
// @import '../../assets/css/index.styl'
.divider
    color #000
    border-color #ffe698
    padding 0 16px
    height 14px
.buyForm
    .cellgroup
        margin-top 10px
        box-shadow: 4px 4px #f4f4f4;
    .submit
        font-size 16px
    .checkbox
        display flex
        justify-content center
        align-items center
        height 20px
    .checkbox a
       color #999999
       text-decoration underline
</style>
