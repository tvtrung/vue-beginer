<template>
    <div>
      <Header/>
      <div class="container">
        <h3>Page "{{$route.name}}"</h3>
        <div>(Vue 2.0 - Vuex 3.0)</div>
        <hr>
        <div>Param: {{$route.params}}</div>
        <div>query: {{$route.query}}</div>
        <div>hash: {{$route.hash}}</div>
        <hr>
        <div class="comp1">
            <Comp1 :title="title"/>
        </div>
      </div>
    </div>
  </template>
  
<script>
    import Header from './../Header'
    import Comp1 from './Comp1.vue'
    export default {
        components:{
            Header,
            Comp1
        },
        data(){
            return {
                title:'Learn Vuejs 2022'
            }
        },
    }
</script>

<style scoped>
    .comp1{
        width: 100%;
        background-color: rgb(248, 213, 11);
        padding: 15px;
    }
</style>