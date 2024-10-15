<template>
    <div class="min-h-screen bg-gray-100">
      <h1 class="text-4xl font-bold text-center py-8 text-gray-800">
        Contadores
      </h1>
      <div class="counters-grid">
        <MyCounter :value="5"/>
        <MyCounter2 :value="10"/>
        <MyCounter3 :value="20"/>
      </div>
    </div>
  </template>

<script lang="ts" setup>
    import MyCounter from './Components/MyCounter.vue';
    import MyCounter2 from './Components/MyCounter2.vue';
    import MyCounter3 from './Components/MyCounter3.vue';
    
</script>