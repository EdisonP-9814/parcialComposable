import { ref, computed } from 'vue'

export function useSumRes(initialValue: number = 0) {
  const count = ref(initialValue)

  const incrementar = () => {
    count.value++
  }

  const decrementar = () => {
    count.value--
  }

  const square = computed(() => count.value * count.value)

  return {count,incrementar,decrementar,square}
}