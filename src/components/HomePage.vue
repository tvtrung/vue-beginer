<template>
    <div></div>
</template>

<script>
export default {
    mounted: function () {
        this.$nextTick(function () {
            /**Check Login */
            this.$router.push('/login')
        })
    }
}
</script>
    
<style>

</style>