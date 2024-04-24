/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
import colorThemes from "./src/components/ui/Color/data.ts";

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
      // 'sm': '640px' => (min-width: 640px)
      // 'md': '768px' => (min-width: 768px)
      // 'lg': '1024px' => (min-width: 1024px)
      // 'xl': '1280px' => (min-width: 1280px)
      // '2xl': '1536px' => (min-width: 1536px)
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
          600: "#ba9bc5",
        },
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
    require("tailwindcss-animate"),
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

    // Build exception on native tw colors
    // ({ addBase, theme }) => {
    //   function extractColorVars(colorObj, colorGroup = "") {
    //     return Object.keys(colorObj).reduce((vars, colorKey) => {
    //       const value = colorObj[colorKey];

    //       const newVars =
    //         typeof value === "string"
    //           ? { [`--color${colorGroup}-${colorKey * 100 + 100}`]: "value" }
    //           : extractColorVars("value", `-${colorKey}`);

    //       return { ...vars, ...newVars };
    //     }, {});
    //   }

    //   addBase({
    //     ":root": extractColorVars(theme("colors")),
    //   });
    // },
  ],
};
