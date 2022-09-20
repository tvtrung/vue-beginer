<template>
    <div>
        <Header/>
        <div class="container">
            <div class="outer">
                <Bar/>
                <Foo/>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './../Header'
import Bar from './Bar'
import Foo from './Foo'
export default {
    components:{
        Header,
        Bar,
        Foo
    }
}
</script>

<style scoped>
    .outer{
        background-color: pink;
        min-height:400px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>