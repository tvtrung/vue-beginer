<template>
    <div>
        <h4>Component 3</h4>
        <div class="content">(Props) Title: <strong>{{title}}</strong></div>
        <div class="content">(Vuex) Title: <strong>{{$store.state.a.name}}</strong></div>
        <div class="content">(Vuex - mapGetters) Title: <strong>{{name}}</strong></div>
        <div><input type="text" v-model="text" class="form-control"></div><br/>
        <div>
            <button @click="setName(text)" class="btn btn-warning">Submit Mutations</button>
            <button @click="updateProfile(text)" class="btn btn-success">Submit Action</button>
        </div>
    </div>
</template>
  
<script>
import {mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import Header from './../Header'
  export default {
    components:{
        Header,
    },
    props:{
        title:String
    },
    data(){
        return {
            text:'Hello World'
        }
    },
    computed:{
        ...mapGetters(['name']),
    },
    methods:{
        ...mapMutations(['setName']),
        ...mapActions(['updateProfile']),
    },
    mounted: function () {
        // console.log(this.$store);
        console.log(this.$store.state.a);
    }
  }
</script>
  
<style scoped>
    h4{
        color:#FFF;
    }
    .content{
        color:#FFF
    }
</style>