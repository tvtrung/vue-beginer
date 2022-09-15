<template>
    <div>
        <h4>Component 1</h4>
        <div class="comp2">
            <Comp2 :title="title"/>
        </div>
    </div>
  </template>
  
  <script>
  import Header from './../Header'
  import Comp2 from './Comp2.vue'
  export default {
      components:{
          Header,
          Comp2
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
    .comp2{
        width: 80%;
        background: #155724;
        padding: 15px;
    }
</style>