import type { ArrowProps } from "@/components/icons/Arrow.astro";
import type { Button } from "@/components/ui/Button";
import type { LocalImageProps } from "astro/assets";
import type { ComponentProps, HTMLAttributes, HTMLTag } from "astro/types";

/**
 *
 *
 *
 *
 *
 *
 */
type ImageNames =
  /**
   *
   *
   *
   *
   *
   * WEBPs
   *
   *
   *
   *
   */
  | `${
      | "vijay-et-lou"
      | `lorem-${"lou" | "vijay"}`
      | "placeholder"
      | "oak"
      | `outdoor-${"1" | "2" | "3" | "4" | "10" | "11"}`}.${"webp" | "png"}`
  /**
   *
   *
   *
   * PNGs
   *
   *
   *
   *
   */
  | `${`tree-${1 | 2 | 3 | 4}`}.png`;
/**
 *
 *
 *
 *
 * PropsWithContent
 *
 */
type PropsWithContent<T extends HTMLTag> = {
  /**
   *
   *
   *
   *
   *
   *
   */
  content: string;
  /**
   *
   *
   *
   *
   *
   *
   */
  props?: HTMLAttributes<T>;
};
/**
 *
 *
 *
 *Theme
 *
 *
 */
type Theme = "light" | "dark";
/**
 *
 *
 *PropsNoContent
 *
 *
 *
 */
type PropsNoContent<T extends HTMLTag> = {
  /**
   *
   *
   *
   *
   *
   *
   */
  props?: HTMLAttributes<T>;
};
/**
 *
 *
 *ReactPropsWithContent
 *
 *
 *
 */
type ReactPropsWithContent<T> = {
  /**
   *
   *
   *
   *
   *
   *
   */
  content: string;
  /**
   *
   *
   *
   *
   *
   *
   */
  props?: T;
};
/**
 *
 *
 *FadeImageProps
 *
 *
 *
 */
type FadeImageProps = {
  /**
   *
   *
   *
   *
   *
   *
   */
  props?: Omit<LocalImageProps<HTMLAttributes<"img">>, "src">;
  /**
   *
   *
   *
   *
   *
   *
   */
  name: ImageNames;
};
/**
 *
 *
 *
 *HTMLHeadingTags
 *
 *
 */
type HTMLHeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
/**
 *
 *
 *SegmentFormat
 *
 *
 *
 */
type SegmentFormat = "text" | "image-text";
/**
 *
 *
 *
 *TitleIconProps
 *
 *
 */
type TitleIconProps<T extends SegmentFormat> = T extends "text"
  ? /**
     *
     *
     *
     *
     * T === "text" give access to icon
     *
     */
    PropsWithContent<HTMLHeadingTags> & {
      icon?: ImageNames;
      iconProps?: Omit<HTMLAttributes<"img">, "src">;
      wrapperIconProps?: HTMLAttributes<"div">;
    }
  : /**
     *
     *
     *
     *
     *
     *
     */
    PropsWithContent<HTMLHeadingTags>;
/**
 *
 *
 *
 * SharedProps across all segments types
 *
 *
 */
interface SharedProps<T extends SegmentFormat> {
  type: T;
  title?: TitleIconProps<T>;
  subtitle?: PropsWithContent<"small">;
  text?: PropsWithContent<"p"> & { threshold?: number };
  article?: PropsNoContent<"article">;
  theme?: Theme;
  /**
   * type card only available in text segment
   */
  card?: T extends "text" ? boolean : never;
  focusWrapperClass?: (this["card"] extends true ? string : never) | string;
}
/**
 *
 *
 *
 *
 * ImageProps is available in image-text segment
 *
 */
interface ImageProps {
  img?: FadeImageProps;
  figure?: PropsNoContent<"figure">;
  figCaption?: PropsWithContent<"figcaption">;
}
/**
 *
 *
 *
 *
 *FormProps
 *
 */

interface FormProps {
  input?: PropsNoContent<"input">;
  button?: ReactPropsWithContent<ComponentProps<typeof Button>> & {
    arrowIcon?: boolean;
    arrowProps?: ArrowProps;
  };
  label?: PropsWithContent<"label">;
  form?: PropsNoContent<"form">;
  spacer?: boolean;
}
/**
 *
 *
 *
 * SegmentPropsMap is a utility type mapping all segment types to their respective props
 *
 *
 *
 */
type SegmentPropsMap = {
  "image-text": ImageProps & SharedProps<"image-text"> & FormProps;
  text: SharedProps<"text"> & FormProps;
};
/**
 *
 *
 *
 * Utility type
 *
 *
 */
type Prettify<T> = {
  [K in keyof T]: T[K];
};
/**
 *
 *
 *
 *
 *
 *
 */
export type {
  FadeImageProps,
  FormProps,
  HTMLHeadingTags,
  ImageNames,
  ImageProps,
  Prettify,
  SegmentFormat,
  SegmentPropsMap,
  Theme,
};
