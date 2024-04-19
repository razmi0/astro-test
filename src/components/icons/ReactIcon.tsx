export type ReactIconName = "contact" | "about" | "home" | "activities" | "faq";

type IconProps = {
  name: ReactIconName;
  className?: string;
  props?: any;
};

export default function ReactIcon({ name, className, ...props }: IconProps) {
  const Icon = icons[name];
  return <Icon className={className || ""} {...props} />;
}

const Contact = ({ className, ...props }: Omit<IconProps, "name">) => (
  <svg viewBox="0 0 24 24" version="1.1" fill="currentcolor" className={className} {...props}>
    <g>
      <title>Contact</title>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-101.000000, -207.000000)">
          <g transform="translate(101.000000, 207.000000)">
            <polygon
              points="16.5 19 11 19 11 15 18 15 18 11 22 11 22 19 19.5 19 18 20.5"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></polygon>
            <polygon
              points="2 3 18 3 18 15 8.5 15 6.5 17 4.5 15 2 15"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></polygon>
            <line stroke="currentcolor" strokeLinecap="round" strokeWidth="1.5" x1="9.5" x2="10" y1="9" y2="9"></line>
            <line stroke="currentcolor" strokeLinecap="round" strokeWidth="1.5" x1="13" x2="13.5" y1="9" y2="9"></line>
            <line stroke="currentcolor" strokeLinecap="round" strokeWidth="1.5" x1="6" x2="6.5" y1="9" y2="9"></line>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const About = ({ className, ...props }: Omit<IconProps, "name">) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22 10.4003 22 8.8884 21.6244 7.5475 20.9565 7.1912 20.7791 6.7839 20.72 6.3994 20.8229L4.1734 21.4185C3.207 21.677 2.323 20.793 2.5815 19.8267L3.1771 17.6006C3.28 17.2161 3.2209 16.8088 3.0435 16.4525 2.3756 15.1116 2 13.5997 2 12 2 6.4771 6.4771 2 12 2 17.5228 2 22 6.4771 22 12ZM7 11C7 13 9 16 10 17Q11 18 12 18 13 18 14 17C15 16 17 13 17 11 17 8 14.0249 7.4317 12 9.4998 9.9751 7.4317 7 8 7 11Z"
        fill="currentcolor"
      ></path>
    </g>
  </svg>
);

const Home = ({ className, ...props }: Omit<IconProps, "name">) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <title>accueil</title>
    <g>
      <rect fill="transparent"></rect>
      <path
        d="M9 21H4C3.44772 21 3 20.5523 3 20V12.4142C3 12.149 3.10536 11.8946 3.29289 11.7071L11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L20.7071 11.7071C20.8946 11.8946 21 12.149 21 12.4142V20C21 20.5523 20.5523 21 20 21H15M9 21H15M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21"
        stroke="currentcolor"
        strokeLinejoin="round"
        strokeWidth={2}
      ></path>
    </g>
  </svg>
);

const Activities = ({ className, ...props }: Omit<IconProps, "name">) => (
  <svg version="1.0" viewBox="0 0 64 64" xmlSpace="preserve" fill="currentcolor" className={className} {...props}>
    <title>activités et tarifs</title>
    <g>
      <path
        fill="currentcolor"
        d="M20,16h24c0.809,0,1.538-0.487,1.848-1.234c0.31-0.748,0.139-1.607-0.434-2.18l-12-12 C33.023,0.195,32.512,0,32,0s-1.023,0.195-1.414,0.586l-12,12c-0.572,0.572-0.743,1.432-0.434,2.18C18.462,15.513,19.191,16,20,16z "
      ></path>
      <path
        fill="currentcolor"
        d="M16,28h32c0.809,0,1.538-0.487,1.848-1.234c0.31-0.748,0.139-1.607-0.434-2.18l-6.545-6.545H21.131 l-6.545,6.545c-0.572,0.572-0.743,1.432-0.434,2.18C14.462,27.513,15.191,28,16,28z"
      ></path>
      <path fill="currentcolor" d="M28,63c0,0.553,0.447,1,1,1h6c0.553,0,1-0.447,1-1v-9h-8V63z"></path>
      <path
        fill="currentcolor"
        d="M57.414,48.586L50.828,42H13.172l-6.586,6.586c-0.572,0.572-0.743,1.432-0.434,2.18 C6.462,51.513,7.191,52,8,52h48c0.809,0,1.538-0.487,1.848-1.234C58.157,50.018,57.986,49.158,57.414,48.586z"
      ></path>
      <path
        fill="currentcolor"
        d="M12,40h40c0.809,0,1.538-0.487,1.848-1.234c0.31-0.748,0.139-1.607-0.434-2.18L46.828,30H17.172 l-6.586,6.586c-0.572,0.572-0.743,1.432-0.434,2.18C10.462,39.513,11.191,40,12,40z"
      ></path>
    </g>
  </svg>
);

const Faq = ({ className, ...props }: Omit<IconProps, "name">) => (
  <svg fill="currentcolor" viewBox="0 0 24 24" className={className} {...props}>
    <title>faq</title>
    <g>
      <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21Zm1-4.5v2H11v-2Zm3-7a3.984,3.984,0,0,1-1.5,3.122A3.862,3.862,0,0,0,13.063,15H11.031a5.813,5.813,0,0,1,2.219-3.936A2,2,0,0,0,13.1,7.832a2.057,2.057,0,0,0-2-.14A1.939,1.939,0,0,0,10,9.5,1,1,0,0,1,8,9.5V9.5a3.909,3.909,0,0,1,2.319-3.647,4.061,4.061,0,0,1,3.889.315A4,4,0,0,1,16,9.5Z"></path>
    </g>
  </svg>
);

const icons = {
  contact: Contact,
  about: About,
  home: Home,
  activities: Activities,
  faq: Faq,
};
