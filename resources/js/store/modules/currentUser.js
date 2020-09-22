import axios from "axios";

const state = {
    user: {}
};
const getters = {

};
const actions = {
    loginUser( {}, user){
        axios.post("/api/user/login", {
            email: user.email,
            password: user.password,
        }).then(response=>{
            // console.log(response, 'dfdsf');
            if( response.data.access_token ) {
                //save token

                localStorage.setItem(
                    "blog_token",
                    response.data.access_token
                )
                console.log('user',response);
                this.$router.push('/home');
        }
            // console.log(response.data)
        })
    }
};
const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
