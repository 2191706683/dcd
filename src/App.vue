<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router"; // hooks

const router = useRouter();

router.beforeEach((to, from, next) => {
  const { requiredLogin } = to.meta;
  const isLogin = localStorage.getItem("isLogin");
  // 判断是否已经登录并是否页面需要登录权限，如果是，跳转到登录页面，若否，则放行
  if (!isLogin && requiredLogin) {
    next("login");
  } else {
    next();
  }
  if (to.meta.index > from.meta.index) {
    // 从主页面 去到子页面
    state.transitionName = "slide-left";
  } else if (to.meta.index < from.meta.index) {
    state.transitionName = "slide-right";
  } else {
    // 平级
    state.transitionName = "";
  }
});

const state = reactive({
  transitionName: 'slide-left'
})
</script>

<template>
  <router-view class="router-view" v-slot="{ Component }">
    <transition :name="state.transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.router-view {
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  bottom: 0;
  -webkit-overflow-scrolling: touch;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  height: 100%;
  /* 提前告知浏览器，即将会有 transform 渐变 */
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0); 
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
