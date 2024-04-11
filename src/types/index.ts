
// Add your types here

 export type Prettyfy<T> = {
  [K in keyof T]: T[K];
};
