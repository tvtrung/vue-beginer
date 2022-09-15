export default {
    updateProfile(context, name){
        console.log('updateProfile');
        console.log('context: ',context);
        console.log('name: ',name);
        context.commit('setName',name);

    }
}