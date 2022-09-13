<template>
    <div>
        <Header/>
        <div class="container">
            <h2>List Post</h2>
            <div>
                <div class="row">
                    <div class="col-md-4" v-for="(item, i) in listpost" :key="i">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">{{item.title}}</h4>
                                <p class="card-text">{{item.description}}</p>
                                <router-link :to="{path: '/post-detail/' + item.id}" class="btn btn-primary">Viewmore</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header'

    let data_post = [
        {id:1,title:'Title 1', description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'},
        {id:2,title:'Title 2', description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'},
        {id:3,title:'Title 3', description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution'},
    ];
    export default {
        components:{
            Header
        },
        data(){
            return{
                listpost: data_post
            }
        }
    }
</script>

<style>
    .card{
        margin-bottom: 15px;
    }
</style>