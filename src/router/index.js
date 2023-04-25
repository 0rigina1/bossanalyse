import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/user/Login.vue";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        mete: {
            'title': '登录'
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Dashboard'),
        mete: {
            title: '数据面板'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
