
import {HTTP} from '../../../api/http-common';

export default {
    data(){
        return {
            title:'List Post',
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