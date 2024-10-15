<template>
  <div class="counter-container">
    <h2 class="counter-title">Mycounter 3</h2>
    <h3 class="counter-display">Valor: {{ count }}</h3>
    <h3 class="counter-square">Cuadrado: {{ square }}</h3>

    <div class="button-container">
      <button @click="incrementar" class="counter-button">+1</button>
      <button @click="decrementar" class="counter-button">-1</button>
    </div>
  </div>
</template>


<script lang="ts" setup>
    import { useSumRes } from '../useSumRes'
    import '../../style.css'

    const props = defineProps<{
    value: number
    }>()

    const { count, incrementar, decrementar, square } = useSumRes(props.value)
</script>