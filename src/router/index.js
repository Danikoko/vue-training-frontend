import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home.vue';
import LoginPage from '../pages/Login.vue';
import RegisterPage from '../pages/Register.vue';

const routes = [
    {
        path: '/', 
        component: HomePage
    },
    {
        path: '/login', 
        component: LoginPage
    },
    {
        path: '/register', 
        component: RegisterPage
    }
];

const router = createRouter({
    scrollBehavior: function() {
        return { x: 0, y: 0 };
    },
    history: createWebHistory(),
    routes
});

export default router;