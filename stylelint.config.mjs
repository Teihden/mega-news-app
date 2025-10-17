const patternRegex = "^[a-z0-9]+(-[a-z0-9]+)*(__([a-z0-9]+(-[a-z0-9]+)*))?(--([a-z0-9]+(-[a-z0-9]+)*))?$";

/** @type {import("stylelint").Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "@stylistic/stylelint-config",
    "stylelint-config-idiomatic-order",
  ],
  plugins: [
    "@stylistic/stylelint-plugin",
    "stylelint-order",
  ],
  customSyntax: "postcss-styled-syntax",
  rules: {
    // Order & Structure
    "order/order": [
      "dollar-variables",
      "custom-properties",
      "declarations",
      "at-rules",
      "at-variables",
      "less-mixins",
      "rules",
    ],

    // Descending
    "no-descending-specificity": [ true, { ignore: [ "selectors-within-list" ] } ],

    // Empty lines
    "at-rule-empty-line-before": [ "always", { except: [ "first-nested" ], ignoreAtRules: [ "import" ] } ],
    "comment-empty-line-before": [ "always", { except: [ "first-nested" ] } ],
    "custom-property-empty-line-before": null,
    "declaration-empty-line-before": [ "always", { except: [ "after-declaration", "first-nested" ] } ],
    "rule-empty-line-before": [ "always", { except: [ "first-nested", "after-single-line-comment" ] } ],

    // Color
    "color-named": "never",

    // Invalid
    "function-calc-no-unspaced-operator": true,
    "no-invalid-double-slash-comments": true,

    // Notation
    "font-weight-notation": "numeric",

    // Length
    "length-zero-no-unit": true,
    "@stylistic/number-leading-zero": "never",
    "@stylistic/max-line-length": 150,

    // Pattern
    "custom-media-pattern": [ patternRegex ],
    "keyframes-name-pattern": [ patternRegex ],
    "custom-property-pattern": [ patternRegex ],
    "selector-class-pattern": [ patternRegex ],
  },
  overrides: [
    {
      files: [ "**/*.{js,jsx,ts,tsx}" ],
      rules: {
        "@stylistic/no-empty-first-line": null,
        "@stylistic/no-extra-semicolons": null,
        "nesting-selector-no-missing-scoping-root": null,
      },
    },
    {
      files: [ "**/*.ts", "**/*.tsx" ],
      rules: {
        "@stylistic/declaration-bang-space-before": null,
      },
    },
  ],
};
