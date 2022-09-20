<template>
    <div class="comp">
        <div>
            <div class="text-center">Send</div>
            <div class="text-center"><strong> Count: {{count}}</strong></div>
            <div>
                <button @click="inCrease()" class="btn btn-warning">Increase</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            count:1
        }
    },
    methods:{
        inCrease(){
            this.count++;
            this.$bus.emit('increaseCounter', this.count);
        }
    }
}
</script>

<style scoped>
    .comp{
        background-color: brown;
        min-height:200px;
        width: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #FFF;
    }
</style>