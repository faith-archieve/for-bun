import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', component: () => import('pages/IndexPage.vue')},
            {path: 'secondpage', component: () => import('pages/secondpage.vue')}
        ],
    },
    {
        path: '/aaaa',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {path: '', component: () => import('pages/secondpage.vue')},
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
