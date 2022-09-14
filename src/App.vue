<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // react to route changes...
        console.log('Route change');
      }
    )
  },
}
</script>

<style>

</style>
