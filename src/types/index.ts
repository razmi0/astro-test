// Add your types here

import type { Button } from "@/components/ui/Button";
import type { LocalImageProps } from "astro/assets";
import type { ComponentProps, HTMLAttributes, HTMLTag } from "astro/types";
type IconNames = "menu";

type ImageNames = `${"vijay-et-lou" | "lorem-lou" | "placeholder" | "lorem-vijay" | "oak"}.webp`;

type PropsWithContent<T extends HTMLTag> = {
  content: string;
  props?: HTMLAttributes<T>;
};

type Theme = "light" | "dark";

type PropsNoContent<T extends HTMLTag> = {
  props?: HTMLAttributes<T>;
};

type ReactPropsWithContent<T> = {
  content: string;
  props?: T;
};

type FadeImageProps = {
  props?: Omit<LocalImageProps<HTMLAttributes<"img">>, "src">;
  name: ImageNames;
};

type HTMLHeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type ContentFormat = "card" | "text" | "image-text" | "text-image";

interface SharedProps<T extends ContentFormat> {
  type: T;
  title?: PropsWithContent<HTMLHeadingTags>;
  subtitle?: PropsWithContent<"small">;
  text?: PropsWithContent<"p">;
  article?: PropsNoContent<"article">;
  theme?: Theme;
}

interface ImageProps {
  img?: FadeImageProps;
  figure?: PropsNoContent<"figure">;
  figCaption?: PropsWithContent<"figcaption">;
}

interface FormProps {
  inputProps?: PropsNoContent<"input">;
  buttonProps?: ReactPropsWithContent<ComponentProps<typeof Button>>;
  labelProps?: PropsWithContent<"label">;
  formProps?: PropsNoContent<"form">;
}

type ContentPropsMap = {
  "image-text": ImageProps & SharedProps<"image-text"> & FormProps;
  "text-image": ImageProps & SharedProps<"text-image"> & FormProps;
  card: SharedProps<"card"> & FormProps;
  text: SharedProps<"text"> & FormProps;
};

type Prettyfy<T> = {
  [K in keyof T]: T[K];
};

export type {
  ContentFormat,
  ContentPropsMap,
  FadeImageProps,
  FormProps,
  HTMLHeadingTags,
  IconNames,
  ImageNames,
  Prettyfy,
  Theme,
};
