import { ref, watch } from 'vue'
import type { UnwrapRef } from 'vue'

export function useStateRef<T>(original: T) {
  const state = ref(original)
  const stateRef = ref(original)
  const setState = (newState: UnwrapRef<T>) => state.value = newState;
  watch(state, (newState: UnwrapRef<T>) => stateRef.value = newState)
  return { state, setState, stateRef }
}