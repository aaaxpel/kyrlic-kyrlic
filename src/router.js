import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Admin from '../views/Admin.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import AllTickets from '../views/AllTickets.vue'

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
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/allTickets',
        name: 'All Tickets',
        component: AllTickets
    }
    ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;