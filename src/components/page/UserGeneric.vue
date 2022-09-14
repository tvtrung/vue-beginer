<template>
    <div>
      <Header/>
      <div class="container">
          <h3>Page "{{$route.name}}"</h3>
          <hr>
          <div>Param: {{$route.params}}</div>
          <div>query: {{$route.query}}</div>
          <div>hash: {{$route.hash}}</div>
          <hr>
      </div>
    </div>
  </template>
  
  <script>
  import Header from './Header'
  export default {
      components:{
          Header
      },
      data(){
          return {
  
          }
      },
  }
  </script>
  
  <style>
  
  </style>