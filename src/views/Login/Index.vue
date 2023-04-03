<template>
  <div>
    <!-- closeable 模式，在右侧显示关闭按钮 -->
    <van-notice-bar
      class="notice_bar"
      @close="backPage"
      background="#eeeeee"
      color="#000"
      mode="closeable"
      >您需要<router-link to="/login">登录</router-link>才能继续访问或回<router-link
        to="/"
        >首页</router-link
      >
    </van-notice-bar>
    <div class="login_icon">
      <img
        src="https://p3.dcarimg.com/obj/eden-cn/vlseh7ubqnuhs/motor/favicon/favicon-96x96.png"
        alt=""
      />
    </div>
    <div class="login-body login" v-if="state.type === 'login'">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            size="large"
            v-model="state.username1"
            name="username"
            label="用户名"
            placeholder="手机号/邮箱/用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            size="large"
            v-model="state.password1"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px; margin-top: 20px">
          <div style="padding: 0 0 12px 16px" @click="toggle('register')">立即注册</div>
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
    <div class="login-body registry" v-else>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            size="large"
            v-model="state.username1"
            name="username1"
            label="用户名"
            placeholder="11位手机号"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            size="large"
            v-model="state.password1"
            type="password"
            name="password1"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px; margin-top: 20px">
          <div style="padding: 0 0 12px 16px" @click="toggle('login')">登录</div>
          <van-button round block type="primary" color="#ffcc32" native-type="submit">
            立即注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { login, register } from "@/service/user.js";
import md5 from "js-md5";
import {
  showSuccessToast,
  showLoadingToast,
  showFailToast,
  closeToast,
  showToast,
} from "vant";

const router = useRouter();

const checked = ref(false);

const state = reactive({
  type: "login",
  username1: "",
  password1: "",
});

// 切换登录还是注册
const toggle = (type) => {
  state.type = type;
};

const backPage = () => {
  history.back();
};

// 判断当前状态类型是否为loing，并判断是否勾选了同意，若无，则探出提示，若勾选了，则进行相关步骤
const onSubmit = async (values) => {
  if (state.type === "login") {
    if (!checked.value) {
      showToast("请勾选协议！");
    } else {
      // 把表单的用户名和密码传给登录接口，返回状态码和信息给data
      const data = await login({
        loginName: values.username,
        passwordMd5: md5(values.password),
      });
      // 定义弹出层显示的倒计时
      let second = 1;
      // 定义弹出层
      const toast = showLoadingToast({
        duration: 0,
        forbidClick: true,
        message: "登录中...",
      });

      /* 进行一秒定时, 倒计时先逐渐减一,如果不为0,则弹出层消息不变
        若为0,则清除该定时,检查登录接口返回的状态码是否为200，若为200，则登录成功，
        设置isLogin为true,并把返回的token设置到本地存储中，
        弹出登录成功窗口，跳转到首页
        否则弹出登录接口返回的信息
        并弹出成功弹窗并关闭,最后进行页面刷新
      */
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `登录中...`;
        } else {
          clearInterval(timer);
          if (data.resultCode == 200) {
            localStorage.setItem("isLogin", true);
            localStorage.setItem("token", data.data);
            showSuccessToast("登录成功");
            window.location.href = "/";
          } else {
            showFailToast(`${data.message}`);
          }
          closeToast();
        }
      }, 1000);
    }
  } else {
    /* 若当前状态为register,则向注册接口发送post请求，并传参，
      返回状态码和信息    
    */
    const data = await register({
      loginName: values.username1,
      password: values.password1,
    });
    // 若状态码不为0，弹出接口返回的信息
    if (data.resultCode !== 200) {
      showFailToast(`${data.message}`);
    } else {
      // 若为200，弹出注册成功并跳转到登录页面
      showSuccessToast("注册成功");
      router.push({ name: "login" });
    }
  }
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
