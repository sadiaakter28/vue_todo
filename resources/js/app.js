/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import router from './router.js';
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
        if (!localStorage.getItem("blog_token")) {
            next({
                name: 'Login',
                params: {nextUrl: to.fullPath}
            })
        } else {
            next();
        }
    }
    if (to.name === 'Login') {
        if (localStorage.getItem("blog_token")) {
            next('/home');
        }
    }
    next();
});

import Vue from 'vue';
import App from './components/App';

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
