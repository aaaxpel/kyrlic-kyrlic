import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Admin from '../views/Admin.vue'

const routes =
    [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
    }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;