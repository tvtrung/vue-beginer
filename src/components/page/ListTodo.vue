<template>
    <div>
        <Header/>
        <div class="container">
            <div class="header">
                <h2>Task Management</h2>
            </div>
            <div class="main-content">
                <div class="section-input">
                    <div class="row">
                        <div class="col-md-6">
                            <div v-if="itemSeleted !== null">
                                <h4 >Edit "{{this.data_input.task_name}}"</h4>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="button-add">
                                <div v-if="itemSeleted === null">
                                    <button v-on:click="addTodo" class="btn btn-success"><b-icon icon="plus-circle-fill" style=""></b-icon> Add new</button>
                                </div>
                                <div v-else>
                                    <button v-on:click="canelUpdateTodo" class="btn btn-danger">Cancel</button>&nbsp;
                                    <button v-on:click="updateTodo" class="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-add">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="taskname">Task Name:</label>
                                    <input v-model="data_input.task_name" type="text" class="form-control" placeholder="Task Name" id="taskname">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Status:</label>
                                    <select v-model="data_input.status" name="" id="" class="form-control">
                                        <option value="1">Not started</option>
                                        <option value="2">In Progress</option>
                                        <option value="3">Done</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Priority:</label>
                                    <select v-model="data_input.priority" name="" id="" class="form-control">
                                        <option value="1" selected>Low</option>
                                        <option value="2">Normal</option>
                                        <option value="3">Hight</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Owner:</label>
                                    <select v-model="data_input.owner" name="" id="" class="form-control">
                                        <option value="1" selected>Trung Tran</option>
                                        <option value="2">Doremon</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="time-start">Time start:</label>
                                    <input v-model="data_input.time_start"  type="date" class="form-control" placeholder="Time Start" id="time-start">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="time-start">Time end:</label>
                                    <input v-model="data_input.time_end"  type="date" class="form-control" placeholder="Time Start" id="time-start">
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <table class="table table-bordered table-hover table-sm">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Task Name</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Owner</th>
                            <th>Time start</th>
                            <th>Time End</th>
                            <th>Time Create</th>
                            <th class="col-action-head">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in listTodo" :key="i" :class="itemSeleted === item.id ? 'active' : '' ">
                            <td>{{i + 1}}</td>
                            <td><span v-bind:title="item.task_name">{{item.task_name}}</span></td>
                            <td>{{item.status | statusText}}</td>
                            <td>{{item.priority | priorityText}}</td>
                            <td>{{item.owner | ownerText}}</td>
                            <td>{{item.time_start}}</td>
                            <td>{{item.time_end}}</td>
                            <td>{{item.time_create}}</td>
                            <td class="col-action-body">
                                <button @click="editItem(item.id)" class="btn btn-success">Edit</button>
                                <button @click="deleteItem(item.id)" class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="footer">
                <button v-on:click="goToLogin()" class="btn btn-danger">Logout</button>&nbsp;
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header'
    import Vue from 'vue';
    import VueToast from 'vue-toast-notification';
    // Import one of available themes
    import 'vue-toast-notification/dist/theme-default.css';
    //import 'vue-toast-notification/dist/theme-sugar.css';
    Vue.use(VueToast);

    let dataTodo = [
        {
            id:0,
            task_name:'Task 1',
            status:1,
            priority:1,
            owner:1,
            time_start:'2022-09-08',
            time_end:'2022-09-10',
            time_create:'2022-09-10',
        },
    ];
    let data_status = {
        1: 'Not started',
        2: 'In Progress',
        3: 'Done',
    };
    let data_priority = {
        1: 'Low',
        2: 'Normals',
        3: 'Hight',
    };
    let data_owner = {
        1: 'Trung Tran',
        2: 'Doremon',
    };

    export default {
        components:{
            Header
        },
        data(){
            return {
                listTodo:dataTodo,
                data_input:{
                    task_name:'',
                    status:'1',
                    priority:'1',
                    owner:'1',
                    time_start:'',
                    time_end:'',
                },
                itemSeleted:null
            }
        },
        filters:{
            statusText(value){
                return data_status[value];
            },
            priorityText(value){
                return data_priority[value];
            },
            ownerText(value){
                return data_owner[value];
            },
        },
        methods:{
            reseInput(){
                this.data_input = {
                    task_name:'',
                    status:'1',
                    priority:'1',
                    owner:'1',
                    time_start:'',
                    time_end:'',
                };
                this.itemSeleted = null;
            },
            addTodo(){
                let dataListToDo = JSON.parse(JSON.stringify(this.listTodo));

                if(this.data_input.task_name === ''){
                    Vue.$toast.open({type:'error', message:'Bạn chưa nhập tên Task'});
                    return false;
                }

                let item = {
                    id:dataListToDo.length,
                    task_name:this.data_input.task_name,
                    status:this.data_input.status,
                    priority:this.data_input.priority,
                    owner:this.data_input.owner,
                    time_start:this.data_input.time_start,
                    time_end:this.data_input.time_end,
                    time_create:new Date().toJSON().slice(0,10),
                };
                dataListToDo.push(item);
                this.listTodo = dataListToDo;
                this.reseInput();
                Vue.$toast.open({type:'success', message:'Thêm mới thành công'});
                return true;
            },
            deleteItem(id){
                let data = JSON.parse(JSON.stringify(this.listTodo));
                data = data.filter(x => x.id !== id);
                this.listTodo = data;
                Vue.$toast.open({type:'success', message:'Xóa thành công'});
                this.reseInput();
                return true;
            },
            editItem(id){
                this.itemSeleted = id;
                let data = JSON.parse(JSON.stringify(this.listTodo));
                let item = data.filter(x => x.id === id)[0];
                this.data_input = {
                    task_name:item.task_name,
                    status:item.status,
                    priority:item.priority,
                    owner:item.owner,
                    time_start:item.time_start,
                    time_end:item.time_end,
                }
            },
            canelUpdateTodo(){
                this.reseInput();
                return true;
            },
            updateTodo(){
                let id = this.itemSeleted;
                let data = JSON.parse(JSON.stringify(this.listTodo));

                data.map((item, i) => {
                    if(item.id === id){
                        data[i].task_name = this.data_input.task_name;
                        data[i].status = this.data_input.status;
                        data[i].priority = this.data_input.priority;
                        data[i].owner = this.data_input.owner;
                        data[i].time_start = this.data_input.time_start;
                        data[i].time_end = this.data_input.time_end;
                    }
                })
                this.listTodo = data;
                this.reseInput();
                Vue.$toast.open({type:'success', message:'Cập nhật thành công'});
                return true;
            },
            goToLogin(){
                this.$router.push('/login');
            },
        },
        computed: {
            getType() {
                return this.data_input.task_name
            },
            getText() {
                return this.data_input.status
            }
        },
        watch:{
            getType(newValue, oldValue) {
            	console.log('watch task_name:');
                console.log('newValue: ',newValue);
                console.log('oldValue: ',oldValue);
            },
            getText(newValue, oldValue) {
            	console.log('watch status:');
                console.log('newValue: ',newValue);
                console.log('oldValue: ',oldValue);
            },
        }
    }
</script>

<style scoped>
    .header{
        text-align: center;
        background-color: #17a2b8;
        color:#FFF;
        padding: 5px 0;
        margin-top: 20px;
    }
    .section-input{
        background: #f5f5f5;
        padding: 15px;
    }
    .section-input .button-add{
        text-align: right;
    }
    .col-action-head{
        width:150px;
        text-align: center;
    }
    .col-action-body{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .col-action-body button{
        padding: 0px 10px;
        font-size: 14px;
        height: 30px;
    }
    tr.active{
        background-color: #ccc;
    }
</style>>