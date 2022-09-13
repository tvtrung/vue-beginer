<template>
    <div class="container">
        <div class="menu">
            <ul>
                <li @click.prevent="goToPage('/list-to-do', 'ListTodo')" :class="{active : $route.name.trim() == 'ListTodo'}"><a href="#" >List To do</a></li>
                <li @click.prevent="goToPage('/list-post','ListPost')" :class="{active : $route.name.trim() == 'ListPost'}"><a href="#">List Post</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        goToPage(url, routename){
            let curent_root = this.$route.name;
            let route_name = routename;
            if(curent_root.trim() !== route_name.trim()){
                this.$router.push(url);
            }else{
                return false;
            }
        }
    },
    
}
</script>

<style>
    .menu{
        background-color: #155724;

    }
    .menu ul{
        padding: 0;
    }
    .menu ul li{
        list-style-type: none;
        display: inline-block;
        padding:10px 10px;
        transition: all 0.5s ease;
    }
    .menu ul li a{
        color: #FFF;
    }
    .menu ul li:hover{
        background-color: #28a745;
        cursor:pointer;
    }
    .menu ul li:hover a{
        text-decoration: none;
    }
    .menu ul li.active{
        background-color: #28a745;
    }
</style>