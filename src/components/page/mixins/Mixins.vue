<template>
    <div>
        <Header/>
        <div class="container">
            <h3>{{title}}</h3>
            <div class="row">
                <div class="col-md-6">
                    <ul v-if="errors && errors.length">
                        <li v-for="(error, i) of errors" :key="i">
                        {{error.message}}
                        </li>
                    </ul>
                </div>
                <div class="col-md-12">
                    <ul  v-if="data_list !== null && data_list.length > 0">
                        <li v-for="(item, i) in data_list" :key="i">
                            {{i+1}}. {{item.title}}
                        </li>
                    </ul>
                </div>
                <div class="col-md-12">
                    <div v-if="data_list === null" class="text-center">Đang tải dữ liệu</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './../Header'
import LoadMixins from './LoadMixins.js'
export default {
    components:{
        Header
    },
    mixins: [LoadMixins]
}
</script>

<style>

</style>