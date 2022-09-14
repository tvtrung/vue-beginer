<template>
    <div class="container">
        <div class="menu">
            <ul>
                <li @click.prevent="goToPage('/list-to-do', 'ListTodo')" :class="{active : $route.name.trim() == 'ListTodo'}"><a href="#" >List To do</a></li>
                <li @click.prevent="goToPage('/list-post','ListPost')" :class="{active : $route.name.trim() == 'ListPost'}"><a href="#">List Post</a></li>
                <li @click.prevent="goToPage('/abcdefgh','NotFound')" :class="{active : $route.name.trim() == 'NotFound'}"><a href="#">Not Found</a></li>
                <li @click.prevent="goToPage('/user-main','AfterUser')" :class="{active : $route.name.trim() == 'AfterUser'}"><a href="#">Prefix</a></li>
                <li @click.prevent="goToPage('/chapters/a/b','ChaptersA')" :class="{active : $route.name.trim() == 'ChaptersA'}"><a href="#">Chapter+</a></li>
                <li @click.prevent="goToPage('/chapters','ChaptersB')" :class="{active : $route.name.trim() == 'ChaptersB'}"><a href="#">Chapter*</a></li>
                <li @click.prevent="goToPage('/users/posva','User')" :class="{active : $route.name.trim() == 'User'}"><a href="#">Sensitive</a></li>
                <li @click.prevent="goToPage('/customer/posva','UserID')" :class="{active : $route.name.trim() == 'UserID'}"><a href="#">Customer</a></li>
                <li @click.prevent="goToPage('/customer/posva/profile','UserIDChildren')" :class="{active : $route.name.trim() == 'UserIDChildren'}"><a href="#">Customer profile</a></li>
                <li @click.prevent="goToPage('/navigation','Navigation')" :class="{active : $route.name.trim() == 'Navigation'}"><a href="#">Navigation</a></li>
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
                this.$router.push({
                    path: url,
                    // preserve current path and remove the first char to avoid the target URL starting with `//`
                    params: { pathMatch: this.$route.path.substring(1).split('/') },
                    // preserve existing query and hash if any
                    query: this.$route.query,
                    hash: this.$route.hash,
                })
                
                // this.$router.push({name:routename});
                // return false;
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