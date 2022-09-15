export default {
    setName:(state, name) => {
        state.name = name;
        console.log('mutations');
        console.log('state: ' + state);
        console.log('name: ' + name);
    },
}