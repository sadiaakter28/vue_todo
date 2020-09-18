<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card mt-4">
                    <div class="card-header d-flex justify-content-between">
                        <h3>Vue Todo App</h3>
                        <a @click="logout()">Logout</a>
                    </div>

                    <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                        <div id="todo-list" class="container">
                            <div class="row">
                                <div class="col-md-6 mx-auto">
                                    <form @submit.prevent="saveData">
                                        <div class="input-group mb-3 w-100 mt-3">
                                            <input v-model="todoName" type="text" id="todoName" class="form-control"
                                                   placeholder="Add New Todo" aria-label="Recipient's username"
                                                   aria-describedby="button-addon2">
                                            <div class="input-group-append">
                                                <button v-if="this.isEdit == false" class="btn btn-success" type="submit">Add</button>
                                                <button v-else @click="updateTodo()" class="btn btn-primary" type="button">Update</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <table class="table">
                                <tr v-for="(todo) in todos" :key="todo.id" :title="todo.title">
                                    <td class="text-left">{{todo.title}}</td>
                                    <td class="text-right">
                                        <button @click="editTodo(todo.title, todo.id)" class="btn btn-info">Edit</button>
                                        <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

</template>

<script>
    export default {
        data(){
            return{
                todos:[],
                id: '',
                todoName:'',
                isEdit:false
            }
        },
        methods:{
            getTodos(){
                axios.get('/api/todos').then((res) => {
                    console.log(res.data)
                    this.todos = res.data
                },error => {
                    console.error(error)
                    }
                )
            },
            saveData(){
                axios.post('/api/todo', {title: this.todoName}).then((res)=>{
                    this.todoName = '';
                    this.getTodos();
                    console.log(res)
                }).catch((error)=>{
                    console.log(error)
                })
            },
            editTodo(title, id) {
                this.id =id
                this.todoName = title
                this.isEdit = true
            },
            updateTodo(){
                axios.put('/api/todo/'+this.id,
                    {title: this.todoName})
                    .then(res => {
                        this.todoName =''
                        this.isEdit =false
                        this.getTodos()
                        console.log(res)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            deleteTodo(id){
                console.log(id);
                axios.delete(`/api/todo/${id}`)
                    .then(res => {
                        this.todoName =''
                        this.getTodos()
                        console.log(res)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            logout() {
                       localStorage.setItem("blog_token",null);
                        window.location.href = "login";

                        console.log(localStorage)

            },
            created(){
                axios.default.headers.common["Authorization"] = "Bearer " + localStorage.getItem("blog_token");
                this.$store.dispatch('currentUser/getUser')
            }
        },
        mounted() {
            this.getTodos()
        }
    }
</script>
