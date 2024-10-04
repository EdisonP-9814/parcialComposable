<template>
    <h1>Hola mundo</h1>
    <h3>contador: {{ contador }}</h3>
    <h3>Cuadrado: {{ contador*contador }}</h3>

    <div>
        <button @click="contador++">+1</button>
        <button @click="contador--">-1</button>
    </div>
</template>

<script lang="ts" setup>
    import{ref} from 'vue';

    const props = defineProps<{
        value: number;
    }>();
    
    const contador = ref(props.value);
    
</script>