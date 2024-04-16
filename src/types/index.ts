// Add your types here

import type { LocalImageProps } from "astro/assets";
import type { HTMLAttributes, HTMLTag } from "astro/types";

export type IconNames = "menu";

export type ImageNames = `${"vijay-et-lou" | "lorem-lou" | "placeholder" | "lorem-vijay" | "oak"}.webp`;

export type PropsWithContent<T extends HTMLTag> = {
  content: string;
  props?: HTMLAttributes<T>;
};

export type Theme = "light" | "dark";

export type PropsNoContent<T extends HTMLTag> = {
  props?: HTMLAttributes<T>;
};

export type ReactPropsWithContent<T> = {
  content: string;
  props?: T;
};

export type FadeImageProps = {
  props?: Omit<LocalImageProps<HTMLAttributes<"img">>, "src">;
  name: ImageNames;
};

export type HTMLHeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type ContentFormat = "card" | "text" | "image-text" | "text-image";

export type Prettyfy<T> = {
  [K in keyof T]: T[K];
};
