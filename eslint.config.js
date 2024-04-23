import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  eslintPluginAstro.configs["flat/typescript"],
  eslintPluginAstro.configs["flat/jsx-a11y-strict"],

  {
    rules: {
      // override/add rules settings here, such as:
      "no-unused-vars": ["warn"],
      // "astro/no-set-html-directive": "error"
    },
  },
];
