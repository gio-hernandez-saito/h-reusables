import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'

export function useLastPrevious<T>(value: Ref<T>, condition: (prev: T) => boolean) {
  const prevValue: Ref<T | undefined> = ref()
  watchEffect(() => {
    if (condition(value.value)) prevValue.value = value.value
  })
  return prevValue
}