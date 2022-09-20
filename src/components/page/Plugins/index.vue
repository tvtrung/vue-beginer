<template>
    <div>
        <Header/>
        <div class="container">
            <div class="notifications">
                <button @click="notie_success('Success!')">Click Success</button>
                <button @click="notie_warning('Warning!')">Click Warning</button>
                <button @click="notie_error('Error!')">Click Error</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../Header.vue';
export default {
    components: { Header }
}
</script>

<style>
    
</style>