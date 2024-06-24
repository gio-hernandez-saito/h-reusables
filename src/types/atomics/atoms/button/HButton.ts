import { HIconWrapperProps } from "@/types/atomics/atoms/icon/HIcon";

export interface HBaseButtonProps {
  preIcon?: HIconWrapperProps
  text?: string;
  postIcon?: HIconWrapperProps
}

export interface HTextButtonProps {
  text: string;
}

export interface HIconButtonProps {
  icon: HIconWrapperProps
}