<template>
    <h1>Hola mundo</h1>
    
    <MyCounter :value="5"/>
</template>

<script lang="ts" setup>
    import MyCounter from './Components/MyCounter.vue';
</script>

<style scoped>
h1{
    color: blue;
}
</style>