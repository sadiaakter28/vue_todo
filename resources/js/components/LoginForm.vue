<template>
    <div class="container">
        <Navbar></Navbar>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" v-model="user.email" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-model="user.password" id="exampleInputPassword1">
        </div>
        <button type="submit" @click="login" class="btn btn-primary">Submit</button>
    </div>
</template>

<script>
    import Navbar from './layouts/Navbar';

    export default {
        name: 'Login',
        components: {
            Navbar
        },
        data: ()=> ({
            user:{
                email:"",
                password:""
            }
        }),
        methods: {
            login() {
                axios.post("/api/user/login", this.user).then(response=>{
                    if(response.data.access_token ) {
                        localStorage.setItem("blog_token", response.data.access_token);
                        localStorage.setItem("user", JSON.stringify(response.data.user));
                        console.log('this.user',response);
                        this.$router.push('/home');
                    }
                })
            },
            isLoggedIn() {
                let authToken = getAuthToken()
                return !!authToken && !isTokenExpired(authToken)
            }
        }
    }
</script>
