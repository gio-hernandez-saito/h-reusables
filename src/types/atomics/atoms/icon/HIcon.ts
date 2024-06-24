import { BaseProps, SVGIcon } from "@/types/global";

export interface IconsPair {
  [icon: string]: SVGIcon;
}

export interface HIconProps<Icons extends Record<string, SVGIcon>> {
  icons: Icons
  icon: keyof Icons,
}

export interface HIconWrapperProps extends BaseProps {
  iconProps: HIconProps<IconsPair>
}