// Add your types here

export type IconNames = "menu";

export type ImageNames = `${"vijay-et-lou" | "lorem-lou" | "placeholder" | "lorem-vijay" | "oak"}.webp`;

export type Prettyfy<T> = {
  [K in keyof T]: T[K];
};
