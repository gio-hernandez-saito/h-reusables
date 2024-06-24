import { BaseProps } from "@/types/global";
import { computed } from "vue";
import { convertStylesToString } from "@/utils/style";

export function useBase(props: BaseProps) {
  const _class = computed(() => props.cls ?? '');
  const _style = computed(() => props.styles ? convertStylesToString({ ...props.styles }) : {})
  return { _class, _style };
}