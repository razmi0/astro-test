type Direction = "right" | "left" | "up" | "down";
const dirs = {
  right: "scale(1,1)",
  left: "scale(-1,1)",
  up: "rotate(90)",
  down: "rotate(-90)",
};

export default function MenuIcon({ direction = "right" }: { direction?: Direction }) {
  return (
    <svg
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      className="pointer"
      transform={dirs[direction]}
    >
      <style>{`
            .rects > .rect-1 {
              width: 25px;
              transition: width 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25);
            }
            .rects > .rect-2 {
              width: 15px;
              transition: width 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25);
            }
            .rects > .rect-3 {
              width: 10px;
              transition: width 0.2s cubic-bezier(0.25, 0.75, 0.5, 1.25);
            }
            svg:hover > .rects > .rect-1 {
              width: 10px;
            }
            svg:hover > .rects > .rect-3 {
              width: 25px;
            }
          `}</style>
      <g className="rects">
        <rect y="25%" height="3" rx="1" className="rect-1 fill-slate-900 dark:fill-slate-300" />
        <rect y="50%" height="3" rx="1" className="rect-2 fill-slate-900 dark:fill-slate-300" />
        <rect y="75%" height="3" rx="1" className="rect-3 fill-slate-900 dark:fill-slate-300" />
      </g>
    </svg>
  );
}
