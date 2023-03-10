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
        component: () => import('@/views/Cart/index.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/User/index.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/Search/index.vue')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('@/views/Detail/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router