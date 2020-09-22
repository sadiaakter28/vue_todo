import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Welcome from './components/Welcome.vue';
import Login from './components/LoginForm.vue';
import Home from './components/TodoComponent.vue';
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                auth: true
            }
        },
    ],
});

export  default  router;


