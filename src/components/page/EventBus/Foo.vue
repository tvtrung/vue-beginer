<template>
    <div class="comp">
        <div>
            <div class="text-center">Recived</div>
            <div class="text-center"><strong> Count: {{count}}</strong></div>
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
        
    },
    mounted(){
        this.$bus.on('increaseCounter', (value) => {
            this.count = value;
            console.log('on bus: ',value);
        })
    },
    destroyed(){
        this.$bus.off('increaseCounter');
    }
}
</script>

<style scoped>
    .comp{
        background-color: green;
        min-height:200px;
        width: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #FFF;
    }
</style>