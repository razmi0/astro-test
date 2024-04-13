// Add your types here

export type IconNames = "menu";

export type Prettyfy<T> = {
  [K in keyof T]: T[K];
};
