import { forwardRef } from "react";

type BackgroundType =
  | "charcoal-smudge"
  | "mathematics"
  | "dots"
  | "snow"
  | "dust"
  | "speckles"
  | "grunge"
  | "squares"
  | "lines"
  | "stars"
  | "math"
  | "wood"
  | "cotton"
  | "mosaic"
  | "cubes"
  | "paper-fibers"
  | "denim"
  | "paper"
  | "pinstripe"
  | "diag";
interface BackgroundProps {
  className?: string;
  type: BackgroundType;
  extension?: string;
}

const Background = forwardRef<HTMLImageElement, BackgroundProps>(
  ({ className, extension = "png", type, ...rest }, ref) => {
    return (
      // <div>
      <img
        ref={ref}
        aria-hidden="true"
        src={`./${type}.${extension}`}
        alt=""
        className={`m-auto absolute inset-[1px] w-full h-full pointer-events-none object-cover ${className}`}
        {...rest}
      />
      // </div>
    );
  }
);

export default Background;
