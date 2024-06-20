import { watchDebounced } from '@vueuse/core'
import { ref } from 'vue'
import type { UnwrapRef } from 'vue'


export function useSingleDebounced<T>({ target, debounce, deep = false }: { target: T, debounce: number, deep?: boolean }) {
  const val = ref(target)
  const debouncedVal = ref(target)
  const setVal = (newVal: UnwrapRef<T>) => val.value = newVal
  watchDebounced(val, (newVal: UnwrapRef<T>) => debouncedVal.value = newVal, { debounce, deep })
  return [debouncedVal, setVal] as const
}