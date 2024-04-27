/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

// 'sm': '640px' => (min-width: 640px)
// 'md': '768px' => (min-width: 768px)
// 'lg': '1024px' => (min-width: 1024px)
// 'xl': '1280px' => (min-width: 1280px)
// '2xl': '1536px' => (min-width: 1536px)

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      "2xs": "375px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        def: {
          100: "#FEFEFE",
          900: "#2E2E2E",
        },
        gr: {
          400: "#a2c999",
          500: "#397c5b",
          600: "#1d3822",
        },
        pur: {
          400: "#d5d4ea",
          500: "#7b8ec3",
          600: "#f3d2ff", //#ba9bc5
        },
      },

      animationDuration: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
        1100: "1100ms",
        1200: "1200ms",
        1300: "1300ms",
        1400: "1400ms",
        1500: "1500ms",
        1600: "1600ms",
        1700: "1700ms",
        1800: "1800ms",
        1900: "1900ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
        3500: "3500ms",
        4000: "4000ms",
        4500: "4500ms",
        5000: "5000ms",
      },
      animationDelay: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
        1100: "1100ms",
        1200: "1200ms",
        1300: "1300ms",
        1400: "1400ms",
        1500: "1500ms",
        1600: "1600ms",
        1700: "1700ms",
        1800: "1800ms",
        1900: "1900ms",
        2000: "2000ms",
      },
      animationIterationCount: {
        once: "1",
        twice: "2",
        three: "3",
        infinite: "infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    ({ addVariant, e, postcss }) => {
      addVariant("hover", ({ container, separator }) => {
        const hoverRule = postcss.atRule({ name: "media", params: "(hover: hover)" });
        hoverRule.append(container.nodes);
        container.append(hoverRule);
        hoverRule.walkRules((rule) => {
          rule.selector = `.${e(`hover${separator}${rule.selector.slice(1)}`)}:hover`;
        });
      });
    },
    ({ addUtilities }) =>
      addUtilities({
        ".animate-fill-none": {
          "animation-fill-mode": "normal",
        },
        ".animate-fill-forwards": {
          "animation-fill-mode": "forwards",
        },
        ".animate-fill-backwards": {
          "animation-fill-mode": "backwards",
        },
        ".animate-fill-both": {
          "animation-fill-mode": "both",
        },
      }),
    ({ addUtilities }) =>
      addUtilities({
        ".animate-timing-elastic": {
          "animation-timing-function": "cubic-bezier(0.25, 0.75, 0.5, 1.25)",
        },
        ".animate-timing-inelastic": {
          "animation-timing-function": "cubic-bezier(0.25, 0.75, 0.75, 1)",
        },
        ".animate-ease-linear": {
          "animation-timing-function": "linear",
        },
        ".animate-ease-in": {
          "animation-timing-function": "cubic-bezier(0.4, 0, 1, 1)",
        },
        ".animate-ease-out": {
          "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
        },
        ".animate-ease-in-out": {
          "animation-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
        },
      }),
    ({ matchUtilities, theme }) =>
      matchUtilities(
        {
          "animate-duration": (value) => ({
            "animation-duration": value,
          }),
        },
        {
          values: theme("animationDuration"),
        }
      ),
    ({ matchUtilities, theme }) =>
      matchUtilities(
        {
          "animate-delay": (value) => ({
            "animation-delay": value,
          }),
        },
        {
          values: theme("animationDelay"),
        }
      ),
    ({ matchUtilities, theme }) =>
      matchUtilities(
        {
          "animate-iteration-count": (value) => ({
            "animation-iteration-count": value,
          }),
        },
        {
          values: theme("animationIterationCount"),
        }
      ),
  ],
};
