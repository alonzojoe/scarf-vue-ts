import { createRouter,createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultView.vue';
import Login from '../views/Login.vue';
import NewsFeed from '../views/NewsFeed.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,   
        children: [
            {
                path: '/',
                name: 'login',
                component: Login
            },
            {
                path: '/newsfeed',
                name: 'feed',
                component: NewsFeed
            }
        ],  
        
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;