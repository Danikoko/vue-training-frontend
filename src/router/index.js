import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home.vue';
import LoginPage from '../pages/Login.vue';
import RegisterPage from '../pages/Register.vue';
import useUserStore from '../store/user';

const routes = [
    {
        path: '/', 
        component: HomePage,
        beforeEnter: (to, from, next) => {
            // Install the user store
            const userStore = useUserStore();
            // Redirect if user is not authenticated
            if (userStore.userIsAuth === false) {
                return next('/login');
            }
            // Allow route entry if user is authenticated
            return next();
        }
    },
    {
        path: '/login', 
        component: LoginPage,
        beforeEnter: (to, from, next) => {
            // Install the user store
            const userStore = useUserStore();
            // Redirect if user is authenticated
            if (userStore.userIsAuth === true) {
                return next('/');
            }
            // Allow route entry if user is not authenticated
            return next();
        }
    },
    {
        path: '/register', 
        component: RegisterPage,
        beforeEnter: (to, from, next) => {
            // Install the user store
            const userStore = useUserStore();
            // Redirect if user is authenticated
            if (userStore.userIsAuth === true) {
                return next('/');
            }
            // Allow route entry if user is not authenticated
            return next();
        }
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