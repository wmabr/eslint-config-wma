import pluginJs from "eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: { globals: globals.browser },

    ignorePatterns: ["dist/"],

    rules: {
      semi: "error",
      "arrow-body-style": ["error", "as-needed"],
      camelcase: [
        "warn",
        {
          properties: true,
          ignoreDestructuring: true,
          ignoreImports: true,
          ignoreGlobals: false,
        },
      ],
      "capitalized-comments": "warn",
      curly: "error",
      "default-case-last": "error",
      "dot-notation": "error",
      "func-style": [
        "error",
        "declaration",
        {
          allowArrowFunctions: true,
          overrides: { namedExports: "declaration" },
        },
      ],
      "no-alert": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-else-return": "error",
      "no-empty": "error",
      "no-empty-function": "error",
      "no-eval": "error",
      "no-extra-boolean-cast": "error",
      "no-lone-blocks": "error",
      "no-magic-numbers": [
        "warn",
        {
          ignore: [-1, 0, 1, 2, 10, 100],
          ignoreArrayIndexes: true,
        },
      ],
      "@stylistic/js/arrow-parens": ["error", "always"],
      "@stylistic/js/arrow-spacing": "error",
      "@stylistic/js/eol-last": ["error", "always"],
      "@stylistic/js/no-multiple-empty-lines": [
        "error",
        { max: 2, maxBOF: 0, maxEOF: 1 },
      ],
      "@stylistic/js/no-multi-spaces": "error",
      "@stylistic/js/quotes": [
        "warn",
        "single",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      "no-var": "warn",
      "prefer-exponentiation-operator": "warn",
      yoda: "error",
    },
  },
];
