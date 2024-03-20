import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/fruit',
        component: () => import('./components/Fruit/Index.vue'),
        name: 'fruit.index',
    },
    {
        path: '/users/login',
        component: () => import('./components/User/Login.vue'),
        name: 'user.login',
    },
    {
        path: '/users/register',
        component: () => import('./components/User/Registration.vue'),
        name: 'user.register',
    },
    {
        path: '/users/personal',
        component: () => import('./components/User/Personal.vue'),
        name: 'user.personal',
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('./components/User/Personal.vue'),
        name: '404'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next();
        } else {
            return next({
                name:'user.login'
            })
        }
    }

    if ((to.name === 'user.login' || to.name === 'user.register') && accessToken) {
        return next({
            name: 'user.personal'
        })
    }

    next();
});
export default router;
