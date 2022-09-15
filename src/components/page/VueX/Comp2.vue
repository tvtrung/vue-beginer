<template>
    <div>
        <h4>Component 2</h4>
        <div class="comp3">
            <Comp3 :title="title"/>
        </div>
    </div>
</template>
  
<script>
import Header from './../Header'
import Comp3 from './Comp3.vue'
export default {
    components:{
        Header,
        Comp3
    },
    props:{
        title:String
    },
    data(){
        return {
  
        }
    },
  }
</script>
  
<style scoped>
    h4{
        color:#FFF;
    }
    .comp3{
        width: 80%;
        background: #dc3545;
        padding: 15px;
    }
</style>