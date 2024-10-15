<template>
  <div class="counter-container">
    <h2 class="counter-title">MyCounter 2</h2>
    <h3 class="counter-display">Valor: {{ count }}</h3>
    <h3 class="counter-square">Cuadrado: {{ square }}</h3>

    <div class="button-container">
      <button @click="incrementar" class="counter-button">+1</button>
      <button @click="decrementar" class="counter-button">-1</button>
    </div>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { useSumRes } from '../useSumRes'
    import '../../style.css'

    export default defineComponent({
    props: {
        value: { type: Number, required: true }
    },
    setup(props) {
        const { count, incrementar, decrementar, square } = useSumRes(props.value)
        return { count, incrementar, decrementar, square }
    }
    })
</script>