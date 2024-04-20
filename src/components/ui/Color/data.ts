/**
 * colors
 */
// pur or gr
// --
const defaultThemeValue = "pur";

type ColorThemedKey = "container" | "title" | "separator" | "titleBorder" | "cssVar" | "button" | "buttonText";

const colorThemes = {
  default: (type: ColorThemedKey) => {
    return colorThemes["light"][type];
  },
  light: {
    container: `bg-def-100 dark:bg-slate-800`,
    title: `text-${defaultThemeValue}-600 dark:text-${defaultThemeValue}-600`,
    separator: `bg-${defaultThemeValue}-600 dark:bg-${defaultThemeValue}-600`,
    titleBorder: `border-s-${defaultThemeValue}-600 dark:border-s-${defaultThemeValue}-400`,
    cssVar: `var(--color-${defaultThemeValue}-500)`,
    button: `bg-${defaultThemeValue}-600 dark:bg-${defaultThemeValue}-600`,
    buttonText: `text-${defaultThemeValue}-600 dark:text-${defaultThemeValue}-600`,
  },
  dark: {
    container: `bg-slate-400 dark:bg-slate-900`,
    title: `text-${defaultThemeValue}-400 dark:text-${defaultThemeValue}-400`,
    separator: `bg-${defaultThemeValue}-400 dark:bg-${defaultThemeValue}-400`,
    titleBorder: `border-s-${defaultThemeValue}-400 dark:border-s-${defaultThemeValue}-400`,
    cssVar: `color-${defaultThemeValue}-500`,
    button: `bg-${defaultThemeValue}-400 dark:bg-${defaultThemeValue}-400`,
    buttonText: `text-${defaultThemeValue}-400 dark:text-${defaultThemeValue}-400`,
  },
};

export default colorThemes;
