import { ref, watch } from 'vue'
import type { Ref } from 'vue'

interface ScrollDelimiterSize {
  scrollHeight: number;
  scrollWidth: number;
  offsetHeight: number;
  offsetWidth: number;
}

export const useScrollDelimiter = (elementRef: Ref<HTMLElement | null>) => {
  const delimiter = ref<ScrollDelimiterSize>({
    scrollHeight: 0,
    scrollWidth: 0,
    offsetHeight: 0,
    offsetWidth: 0
  })
  
  const updateDelimiter = () => {
    if (elementRef.value) {
      const { scrollHeight, scrollWidth, offsetHeight, offsetWidth } = elementRef.value
      delimiter.value = { scrollHeight, scrollWidth, offsetHeight, offsetWidth }
    }
  }
  
  watch(() => elementRef.value, () => updateDelimiter(), { immediate: true })
  
  return { delimiter }
}