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
          <p><button @click="redirect('/users/eduardo')" class="btn btn-primary">router.push('/users/eduardo')</button></p>
          <p><button @click="redirect({ path: '/users/eduardo' })" class="btn btn-warning">router.push({ name: 'user', params: { username: 'eduardo' } })</button></p>
          <p><button @click="redirect({ path: '/register', query: { plan: 'private' } })" class="btn btn-success">router.push({ path: '/register', query: { plan: 'private' } })</button></p>
          <p><button @click="redirect({ path: '/about', hash: '#team' })" class="btn btn-danger">router.push({ path: '/about', hash: '#team' })</button></p>
          <p><button @click="redirect(`/user/${username}`)" class="btn btn-info">router.push(`/user/${username}`)</button></p>
          <p><button @click="redirect({ path: `/user/${username}` })" class="btn btn-dark">router.push({ path: `/user/${username}` })</button></p>
          <p><button @click="redirect({ name: 'User', params: { id: username } })" class="btn btn-secondary">router.push({ name: 'User', params: { id: username } })</button></p>
          <p><button @click="redirect({ path: '/user', params: { username } })" class="btn btn-danger">router.push({ path: '/user', params: { username } })</button><strong> `params` cannot be used alongside `path` (error)</strong></p>
          <p><button @click="redirect({ path: '/navigation?page=2', replace: true })" class="btn btn-secondary">router.push({ path: '/navigation?page=2', replace: true })</button></p>

          <div>// go forward by one record, the same as router.forward()</div>
          <p><button @click="redirectGo(1)" class="btn btn-primary">router.go(1)</button></p>
          <div>// go back by one record, the same as router.back()</div>
          <p><button @click="redirectGo(-1)" class="btn btn-primary">router.go(-1)</button></p>
          <div>// go forward by 3 records</div>
          <p><button @click="redirectGo(3)" class="btn btn-primary">router.go(3)</button></p>
          <div>// fails silently if there aren't that many records</div>
          <p><button @click="redirectGo(-100)" class="btn btn-primary">router.go(-100)</button></p>
          <p><button @click="redirectGo(100)" class="btn btn-primary">router.go(100)</button></p>

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
            username : 'eduardo12'
        }
    },
    methods:{
        redirect(router){
            this.$router.push(router);
        },
        redirectGo(number){
            this.$router.go(number);
        }
    }
  }
  </script>
  
  <style>
  
  </style>