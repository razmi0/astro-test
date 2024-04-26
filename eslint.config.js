import pluginJs from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y-strict";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...jsxA11y.configs['jsx-a11y-strict'],
  {
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
];
