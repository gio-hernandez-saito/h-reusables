import { watchDebounced } from '@vueuse/core'
import type { Ref } from 'vue'

export function useMultipleDebounced({ targets, debounce, callBack, deep = false }: {
  targets: Ref[],
  debounce: number,
  callBack: Function,
  deep?: boolean
}) {
  watchDebounced(() => targets.map(value => value.value), (newVal) => callBack(newVal), { debounce, deep })
}