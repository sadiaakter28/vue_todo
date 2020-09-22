<template>
    <div class="container">
        <Navbar></Navbar>
        <div class="d-flex justify-content-center align-items-center">
            <h1 style="margin-top: 300px;">Welcome Vue Todo App</h1>
        </div>
    </div>
</template>


<script>
    import Navbar from './layouts/Navbar';

    export default {
        name: 'Welcome',
        components: {
            Navbar
        },
        data() {
            return {}
        },

        methods: {}
    }


</script>
