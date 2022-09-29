<template>
    <div class="outer">
        <Header/>
        <div class="container">
            <h4>scoped</h4>
            <p class="welcome-text">Hello Parent</p>
            <child/>
            <div>
                <h4>SCSS</h4>
                <ul>
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                    <li><a href="#">Menu 4</a></li>
                    <li><a href="#">Menu 5</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './../Header'
    import child from './child'
    export default{
        components:{
            Header,
            child
        },
        data(){
            return {
                color:'orange',
            }
        }
    }
</script>

<style lang="scss" scoped>
    .welcome-text {
        color: red;
    }
    ul{
        padding-left: 0;
        li{
            list-style-type: none;
            display: inline-block;
            padding: 0 15px;
            a{
                color:v-bind(color);
                &:hover{
                    color: blue;
                }
            }
        }
    }

    .outer::v-deep .child-content{
        background-color: pink;
    }
</style>