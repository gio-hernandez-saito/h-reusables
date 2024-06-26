import { HIconWrapperProps } from "@/types/atomics/atoms/icon/HIcon";

export interface HBaseButtonProps {
  cls?: string;
  preIcon?: HIconWrapperProps
  text?: string;
  postIcon?: HIconWrapperProps
  disabled?: boolean
}

export interface HTextButtonProps {
  text: string;
}

export interface HIconButtonProps {
  icon: HIconWrapperProps
}