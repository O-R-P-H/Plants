import {createRouter,createWebHistory} from "vue-router";
import Auth from "@/pages/Auth.vue";
import MainPage from "@/pages/MainPage.vue";

const routes = [
    {
        path:'/',
        name:'Auth',
        component:Auth
    },
    {
        path:'/Main',
        name: 'Main',
        component: MainPage
    }
]
const router = createRouter({history:createWebHistory(),
    routes
})
export default router