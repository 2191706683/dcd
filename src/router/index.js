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
        component: () => import('@/views/Cart/Index.vue')
    },
    {
        path: '/user',
        name: 'user',
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
        component: () => import('@/views/Buy/Index.vue')
    },
    {
        path: '/type',
        name: 'type',
        component: () => import('@/views/Buy/BuyType.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router