
import { MouseEvent, SVGProps } from "react";
 export type IconProps = { name: IconNames } & IconNamedProps & (IconNamedProps["name"] extends "copy" ? { check?: boolean } : {});

export type IconNamedProps = SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: MouseEvent) => void;
  title: string;
  check?: boolean;
  mirror?: boolean;
};
export const defaultHeight = 24;
