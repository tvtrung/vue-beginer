<template>
    <div>
        <h4>Component 3</h4>
        <div class="content">(Props) Title: <strong>{{title}}</strong></div>
        <hr>
        <h4>Normal</h4>
        <div class="content">(Vuex) Title: <strong>{{$store.state.name}}</strong></div>
        <button @click="$store.commit('setName', text);" class="btn btn-warning">Change Text (mutations)</button>
        <br><br>
        <button @click="$store.dispatch('updateProfile', text);" class="btn btn-warning">Change Text (dispatch)</button>
        <hr>
        <div class="content">(Vuex Module A) Title: <strong>{{$store.state.a.name}}</strong></div>
        
        <div class="content">(Vuex Module B) Title: <strong>{{$store.state.b.name}}</strong></div>
        <hr>
        <h4>Map</h4>
        <div class="content">(Vuex - mapGetters) Title: <strong>{{name}}</strong></div>
        <hr>
        <div><input type="text" v-model="text" class="form-control"></div><br/>
        <div>
            <button @click="setName(text)" class="btn btn-warning">Submit (Mutations)</button>
            <br><br>
            <button @click="updateProfile(text)" class="btn btn-warning">Submit (Action)</button>
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
        // ...mapState({nameABC: state => state.name}),
        ...mapGetters(['name']),
        // ...mapGetters({newName:'name'}),

        // ...mapState('store/modulesA', {
        //     a: state => state.a,
        //     b: state => state.b
        // }),
    },
    methods:{
        ...mapMutations(['setName']),
        ...mapActions(['updateProfile']),
    },
    mounted: function () {
        // console.log(this.$store);
        // console.log(this.$store.state.a);
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