<template>
    <div>
        <Header/>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <ul v-if="errors && errors.length">
                        <li v-for="(error, i) of errors" :key="i">
                        {{error.message}}
                        </li>
                    </ul>
                </div>
                <div class="col-md-12">
                    <ul  v-if="data_list !== null && data_list.length > 0">
                        <li v-for="(item, i) in data_list" :key="i">
                            {{i+1}}. {{item.title}}
                        </li>
                    </ul>
                </div>
                <div class="col-md-12">
                    <div v-if="data_list === null" class="text-center">Đang tải dữ liệu</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import axios from 'axios';
import {HTTP} from '../../api/http-common';
export default {
    components:{
        Header
    },
    data(){
        return {
            data_list: null,
            params:{
                body:'',
                type:'post',
                page:2
            },
            errors: []
        }
    },
    created(){
        HTTP.get(`posts`)
        .then(response => {
            console.log('get:response',response);
            if(Array.isArray(response.data)){
                this.data_list = response.data;
            }
        })
        .catch(e => {
            this.errors.push(e)
        })

        HTTP.post(`posts`, this.params)
        .then(response => {
            console.log('post:response',response);
        })
        .catch(e => {
            this.errors.push(e)
        })
    },
    methods:{
        changeText(){
        }
    }
}
</script>

<style>

</style>