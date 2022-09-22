<template>
    <div>
        <Header/>
        <div class="container">
            <div id="message">{{content}}</div>
            <button @click="changeText()">Change</button>
            <hr>
            <div class="text-center"><img src="../../assets/images/lifecycle.png" alt="" style="width:50%"></div>
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
            content: 'LifeCycle Vuejs'
        }
    },
    beforeCreate(){
        console.log('------------------------------')
        console.log('beforeCreate:', this.content); /** undefined */
        console.log('beforeCreate DOM message:', document.getElementById('message')); /** null */
    },
    created(){
        console.log('------------------------------')
        console.log('created:', this.content); /** LifeCycle Vuejs */
        console.log('created DOM message:', document.getElementById('message')); /** null */
    },
    beforeMount(){
        console.log('------------------------------')
        console.log('beforeMount:', this.content) /** LifeCycle Vuejs */
        console.log('beforeMount DOM message:', document.getElementById('message')); /** null */
    },
    mounted(){
        console.log('------------------------------')
        console.log('mounted:', this.content); /** LifeCycle Vuejs */
        console.log('mounted DOM message:', document.getElementById('message')); /** <div id="message">Hello world</div> */
    },
    beforeUpdate(){
        console.log('------------------------------')
        console.log('beforeUpdate');
    },
    updated(){
        console.log('------------------------------')
        console.log('updated:', this.content);

    },
    beforeDestroy(){
        console.log('------------------------------')
        delete this.content
        console.log('beforeDestroy DOM message:', document.getElementById('message')); /** null */
    },
    destroyed(){
        console.log('------------------------------')
        console.log('this: ', this.content);
        console.log('destroyed DOM message:', document.getElementById('message')); /** null */
    },
    methods:{
        changeText(){
            this.content = 'Hello World';
        }
    }
}
</script>

<style>

</style>