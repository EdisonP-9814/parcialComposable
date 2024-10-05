<template>
    <h1>Hola mundo</h1>
    <h3>contador: {{ contador }}</h3>
    <h3>Cuadrado: {{ contador*contador }}</h3>

    <div>
        <button @click="contador++">+1</button>
        <button @click="contador--">-1</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, toValue } from 'vue';

    export default defineComponent({
        props:{
            value:{type: Number, required:true}
        },        
        setup(props) {
            const contador = ref(props.value);
            return { contador: contador}
        },
    })
</script>