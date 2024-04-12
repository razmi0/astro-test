/** @type {import('tailwindcss').Config} */
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
        xs: "475px",
        "2xs": "375px",
      },
    },
    extend: {
      colors: {
        element: {
          800: "#1a1a1a",
          700: "#242424",
          600: "#2d2d2d",
          500: "#333333",
          400: "#243342",
          300: "#213547",
          200: "#1e3b4c",
          100: "#1b4151",
        },
        wt: {
          500: "#ffffff",
          400: "#ebe9e9",
          300: "#f5f5f5",
        },
        main: {
          100: "#f0f3f2",
          200: "#d1e0e0",
          300: "#7ee2c7",
          400: "#4db6ac",
          500: "#50ac93",
          600: "#0b9e8f",
          700: "#286b42",
          800: "#1b472c",
          900: "#003329",
          950: "#11301d",
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
