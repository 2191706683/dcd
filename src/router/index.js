import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        meta: {
            requiredLogin: true
        },
        component: () => import('@/views/Cart/Index.vue')
    },
    {
        path: '/user',
        name: 'user',
        meta: {
            requiredLogin: true
        },
        component: () => import('@/views/User/Index.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/Search/Index.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/Detail/Index.vue')
    },
    {
        path: '/buy',
        name: 'buy',
        meta: {
            requiredLogin: true
        },
        component: () => import('@/views/Buy/Index.vue')
    },
    {
        path: '/type',
        name: 'type',
        component: () => import('@/views/Buy/BuyType.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/Index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 路由守卫，登录判断
router.beforeEach((to, from, next) => {
    const { requiredLogin } = to.meta
    const isLogin = localStorage.getItem('isLogin')
    // 判断是否已经登录并是否页面需要登录权限，如果是，跳转到登录页面，若否，则放行
    if (!isLogin && requiredLogin) {
        next('login')
    } else {
        next()
    }
})

export default router