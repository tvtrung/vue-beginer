export default {
    install (Vue, options) {
        Vue.mixin({
            methods: {
                notie_success(message) {
                    alert('Success: ' + message)
                },
                
                notie_warning(message) {
                    alert('Warning: ' + message)
                },
                
                notie_error(message) {
                    alert('Error: ' + message)
                },
            }
        })
    }
  }