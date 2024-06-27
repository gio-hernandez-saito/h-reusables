import { BaseProps, SVGIcon } from "@/types/global";

export type IconsPair<IconName extends string = string> = {
  [icon in IconName]?: SVGIcon;
}

export interface HIconProps<IconName extends string = string> {
  icons: IconsPair<IconName>
  icon: IconName;
}

export interface HIconWrapperProps extends BaseProps {
  iconProps: HIconProps
}