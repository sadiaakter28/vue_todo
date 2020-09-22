<template>
    <nav class=" navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link :to="{name: 'welcome'}" class="navbar-brand">Todo</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-link" v-if="!token">
                    <router-link :to="{name: 'Login'}" class="navbar-brand">Login</router-link>
                </li>
                <li  class="nav-link" v-else>
                    <span @click="logout">Logout</span>
                </li>
            </ul>
        </div>
    </nav>

</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                token: ''
            }
        },
        methods: {
            logout() {
                localStorage.removeItem("blog_token");
                localStorage.removeItem("user");
                this.$router.push('/');
                console.log(localStorage)
            },
        },

        mounted() {
            if(localStorage.getItem('blog_token')) {
                this.token = localStorage.getItem('blog_token')
            }
        }
    }
</script>
