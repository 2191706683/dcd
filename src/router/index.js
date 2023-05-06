import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            index: 1
        },
        component: () => import('@/views/Home/Home.vue')
    },
    {
        path: '/cart',
        name: 'cart',
        meta: {
            requiredLogin: true,
            index: 1
        },
        component: () => import('@/views/Cart/Index.vue')
    },
    {
        path: '/user',
        name: 'user',
        meta: {
            requiredLogin: true,
            index: 1
        },
        component: () => import('@/views/User/Index.vue')
    },
    {
        path: '/search',
        name: 'search',
        meta: {
            index: 2
        },
        component: () => import('@/views/Search/Index.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        meta: {
            index: 2
        },
        component: () => import('@/views/Detail/Index.vue')
    },
    {
        path: '/buy',
        name: 'buy',
        meta: {
            requiredLogin: true,
            index: 3
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

export default router