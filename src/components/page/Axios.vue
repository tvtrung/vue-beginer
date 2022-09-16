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
            data: [],
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