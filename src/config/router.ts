import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
    Router
} from "vue-router"
const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'home',
    component: () => import("../layout/layout"),
    children: [
        {
            path: '/',
            name: 'main',
            component: () => import("../pages/home/home")
        }
    ]
}, {
    path: '/login',
    name: 'login',
    component: () => import("../pages/login/login")
}]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router