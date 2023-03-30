<template>
  <div>
    <!-- closeable 模式，在右侧显示关闭按钮 -->
    <van-notice-bar
      class="notice_bar"
      @close="backPage"
      background="#eeeeee"
      color="#000"
      mode="closeable"
      >您需要登录才能继续访问</van-notice-bar
    >
    <div class="login_icon">
      <img
        src="https://p3.dcarimg.com/obj/eden-cn/vlseh7ubqnuhs/motor/favicon/favicon-96x96.png"
        alt=""
      />
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          size="large"
          v-model="username"
          name="username"
          label="用户名"
          placeholder="手机号/邮箱/用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          size="large"
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px; margin-top: 20px">
        <van-button round block type="primary" color="#ffcc32" native-type="submit">
          登录
        </van-button>
      </div>
      <div class="checkbox">
        <van-checkbox v-model="checked" checked-color="#ffd452" />
        <span class="deal"
          >已阅读并同意以下协议
          <a
            href="https://m.dcdapp.com/motor/inapp/dealer_m/personnel-info-statement.html?series_id=1375&dealer_id=1"
          >
            平台服务协议 </a
          >、
          <a
            href="https://m.dcdapp.com/motor/inapp/dealer_m/personnel-info-statement.html?series_id=1375&dealer_id=1"
          >
            隐私权政策 </a
          >、
          <a
            href="https://m.dcdapp.com/motor/inapp/dealer_m/personnel-info-statement.html?series_id=1375&dealer_id=1"
          >
            法律声明 </a
          >、
          <a
            href="https://m.dcdapp.com/motor/inapp/dealer_m/personnel-info-statement.html?series_id=1375&dealer_id=1"
          >
            支付宝及客户端服务协议 </a
          >,未注册手机号将自动为您创建账号。
        </span>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"

const router = useRouter()

const username = ref(null);
const password = ref(null);
const checked = ref(false);

const goToPage = (path) => {
  router.push({ name: `${path}` });
};

const onSubmit = (values) => {
  // console.log(values)
  const { username, password } = values
  if (username === "admin" && password === "123") {
    localStorage.setItem('isLogin', true)
    goToPage('home')
  }
}

const backPage = () => {
  history.back();
};
</script>

<style lang="stylus" scoped>
.notice_bar
    height 50px
    line-height 50px
    font-weight bold
.login_icon
    width 100%
    text-align center
    padding 40px 0
img
    border-radius 50%
.checkbox
    display flex
    width 100%
    justify-content center
    align-items start
    margin 20px auto
    .deal
        margin-left 20px
        width 300px
        font-size 14px
        line-height 18px
    .deal > a
       color #ffcc32
</style>
