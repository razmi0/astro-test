// Add your types here

import type Background from "@/components/ui/Background";
import type { Button } from "@/components/ui/Button";
import type { LocalImageProps } from "astro/assets";
import type { ComponentProps, HTMLAttributes, HTMLTag } from "astro/types";
type IconNames = "tree";
//
type ImageNames = `${
  | "vijay-et-lou"
  | "lorem-lou"
  | "placeholder"
  | "lorem-vijay"
  | "oak"
  | `outdoor-${"1" | "2" | "3" | "4"}`}.webp`;

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
type SegmentFormat = "card" | "text" | "image-text";

interface SharedProps<T extends SegmentFormat> {
  type: T;
  title?: PropsWithContent<HTMLHeadingTags>;
  subtitle?: PropsWithContent<"small">;
  text?: PropsWithContent<"p"> & { threshold?: number };
  article?: PropsNoContent<"article">;
  theme?: Theme;
}

interface ImageProps {
  img?: FadeImageProps;
  figure?: PropsNoContent<"figure">;
  figCaption?: PropsWithContent<"figcaption">;
}

interface CardProps {
  backgroundProps?: ComponentProps<typeof Background>;
}

interface FormProps {
  input?: PropsNoContent<"input">;
  button?: ReactPropsWithContent<ComponentProps<typeof Button>>;
  label?: PropsWithContent<"label">;
  form?: PropsNoContent<"form">;
  spacer?: boolean;
}

type SegmentPropsMap = {
  "image-text": ImageProps & SharedProps<"image-text"> & FormProps;
  card: SharedProps<"card"> & FormProps & CardProps;
  text: SharedProps<"text"> & FormProps;
};

type Prettify<T> = {
  [K in keyof T]: T[K];
};

export type {
  SegmentFormat,
  SegmentPropsMap,
  FadeImageProps,
  FormProps,
  HTMLHeadingTags,
  IconNames,
  ImageNames,
  ImageProps,
  Prettify,
  Theme,
};
