/**
 * colors
 */
// pur or gr
// --
const defaultThemeValue = "pur";

type ColorThemedKey = "container" | "title" | "separator" | "titleBorder" | "cssVar";

const colorThemes = {
  default: (type: ColorThemedKey) => {
    return colorThemes["light"][type];
  },
  light: {
    container: `bg-def-100 dark:bg-slate-800`,
    title: `text-${defaultThemeValue}-500 dark:text-${defaultThemeValue}-400`,
    separator: `bg-${defaultThemeValue}-500 dark:bg-${defaultThemeValue}-400`,
    titleBorder: `border-s-${defaultThemeValue}-500 dark:border-s-${defaultThemeValue}-400`,
    cssVar: `var(--color-${defaultThemeValue}-500)`,
  },
  dark: {
    container: `bg-slate-400 dark:bg-slate-900`,
    title: `text-${defaultThemeValue}-500 dark:text-${defaultThemeValue}-400`,
    separator: `bg-${defaultThemeValue}-500 dark:bg-${defaultThemeValue}-400`,
    titleBorder: `border-s-${defaultThemeValue}-500 dark:border-s-${defaultThemeValue}-400`,
    cssVar: `color-${defaultThemeValue}-500`,
  },
};

export default colorThemes;
