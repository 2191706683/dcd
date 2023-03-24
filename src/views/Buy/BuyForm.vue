<template>
  <van-divider class="divider">
    提交信息，立即购买
  </van-divider>

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
        @click="showArea = true"
      />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
      </van-popup>
      <van-field
        size="large"
        v-model="username"
        name="您的姓名"
        label="姓名"
        placeholder="请输入姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        size="large"
        v-model="password"
        type="tel"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button class="submit" block color="#ffe698" native-type="submit">
        立即购买
      </van-button>
    </div>
    <div class="checkbox">
      <van-checkbox v-model="checked" shape="square" checked-color="#ffd452">
        同意
      </van-checkbox>
      <a href="https://m.dcdapp.com/motor/inapp/dealer_m/personnel-info-statement.html?series_id=1375&dealer_id=1">《个人信息保护声明》</a> 
    </div>
  </van-form>
</template>

<script setup>
import { ref } from "vue";
import { areaList } from "@vant/area-data";

const result = ref("");
const showArea = ref(false);
const checked = ref(true);
const username = ref(null);
const password = ref(null);

const onConfirm = ({ selectedOptions }) => {
  showArea.value = false;
  result.value = selectedOptions.map((item) => item.text).join("/");
};

const onSubmit = () => {};
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
