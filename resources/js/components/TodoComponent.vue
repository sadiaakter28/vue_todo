<template>
    <div id="todo-list" class="container">
        <div class="row">
            <div class="col-md-6 mx-auto">
                <form @submit.prevent="saveData">
                    <div class="input-group mb-3 w-100">
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
            }
        },
        mounted() {
            this.getTodos()
        }
    }
</script>
