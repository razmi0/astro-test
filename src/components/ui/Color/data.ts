/**
 * colors
 */
// pur or gr
// --
const defaultThemeValue = "pur";

type ColorThemedKey =
  | "container"
  | "containerAfterHero"
  | "title"
  | "separator"
  | "titleBorder"
  | "cssVar"
  | "button"
  | "buttonText"
  | "heroCssVar"
  | "heroButton"
  | "heroHighlight";

const colorThemes = {
  default: (type: ColorThemedKey) => {
    return colorThemes["light"][type];
  },
  light: {
    container: `bg-def-100 dark:bg-slate-800`,
    containerAfterHero: `bg-gradient-to-b from-white to-def-100 dark:bg-gradient-to-b from-slate-700 to-slate-800`,
    title: `text-${defaultThemeValue}-600 dark:text-${defaultThemeValue}-600`,
    separator: `bg-${defaultThemeValue}-600 dark:bg-${defaultThemeValue}-600`,
    titleBorder: `border-s-${defaultThemeValue}-600 dark:border-s-${defaultThemeValue}-400`, // 400 - 500 - 600
    cssVar: `var(--color-${defaultThemeValue}-500)`,
    button: `bg-${defaultThemeValue}-600 dark:bg-${defaultThemeValue}-600`,
    buttonText: `text-${defaultThemeValue}-600 dark:text-${defaultThemeValue}-600`,
    hero: `bg-${defaultThemeValue}-500 dark:bg-${defaultThemeValue}-500`,
    heroCssVar: `var(--color-${defaultThemeValue}-500)`,
    heroButton: `bg-${defaultThemeValue}-500 dark:bg-${defaultThemeValue}-500`,
    heroHighlight: `text-${defaultThemeValue}-500 dark:text-${defaultThemeValue}-500`,
  },
  dark: {
    container: `bg-slate-400 dark:bg-slate-900`,
    containerAfterHero: `bg-gradient-to-b from-white to-def-100 dark:bg-gradient-to-b from-slate-700 to-slate-800`,
    title: `text-${defaultThemeValue}-400 dark:text-${defaultThemeValue}-400`,
    separator: `bg-${defaultThemeValue}-400 dark:bg-${defaultThemeValue}-400`,
    titleBorder: `border-s-${defaultThemeValue}-400 dark:border-s-${defaultThemeValue}-600`,
    cssVar: `color-${defaultThemeValue}-500`,
    button: `bg-${defaultThemeValue}-400 dark:bg-${defaultThemeValue}-400`,
    buttonText: `text-${defaultThemeValue}-400 dark:text-${defaultThemeValue}-400`,
  },
};

export default colorThemes;
