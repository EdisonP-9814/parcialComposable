<template>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <hr/>
    <MyCounter :value="5"/>
    <MyCounter2 :value="10"/>
    <MyCounter3 :value="20"/>
</template>

<script lang="ts" setup>
    import MyCounter from './Components/MyCounter.vue';
    import MyCounter2 from './Components/MyCounter2.vue';
    import MyCounter3 from './Components/MyCounter3.vue';
    
</script>

<style scoped>
h1{
    
    color: blue;
}
</style>