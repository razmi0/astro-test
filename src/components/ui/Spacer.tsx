import type { HTMLAttributes } from "react";

const Spacer = ({ ...props }: { props?: HTMLAttributes<"div"> }) => {
  return <div className="grow" {...props}></div>;
};

export default Spacer;
