import jsEslintPlugin from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import reactEslintPlugin from "eslint-plugin-react";
import stylisticPlugin from "@stylistic/eslint-plugin";
import jsonEslintPlugin from "@eslint/json";
import markdownEslintPlugin from "@eslint/markdown";
import jsDocPlugin from "eslint-plugin-jsdoc";
import importPlugin from "eslint-plugin-import";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import securityPlugin from "eslint-plugin-security";
import promisePlugin from "eslint-plugin-promise";
import globals from "globals/index.js";
import * as espree from "espree";
import { ESLint, Linter } from "eslint";

const eslintRules: Linter.RulesRecord = {
  "no-unused-vars": [ 2, { argsIgnorePattern: "^_" } ],
};

const stylisticRules: Linter.RulesRecord = {
  // Spacing
  "@stylistic/arrow-spacing": 2,
  "@stylistic/comma-spacing": [ 2, { before: false, after: true } ],
  "@stylistic/computed-property-spacing": [ 2, "never" ],
  "@stylistic/function-call-spacing": [ 2, "never" ],
  "@stylistic/key-spacing": [ 2, { beforeColon: false, afterColon: true, mode: "strict" } ],
  "@stylistic/keyword-spacing": [ 2, { before: true, after: true } ],
  "@stylistic/no-multi-spaces": 2,
  "@stylistic/no-whitespace-before-property": 2,
  "@stylistic/rest-spread-spacing": [ 2, "never" ],
  "@stylistic/template-curly-spacing": [ 2, "never" ],
  "@stylistic/switch-colon-spacing": 2,
  "@stylistic/space-infix-ops": 2,

  // Line breaks
  "@stylistic/function-call-argument-newline": [ 2, "never" ],
  "@stylistic/operator-linebreak": [ 2, "before", { overrides: { "|": "ignore" } } ],

  // Brackets
  "@stylistic/array-bracket-spacing": [ 2, "always" ],
  "@stylistic/wrap-regex": "error",
  "@stylistic/new-parens": 2,

  // Semis
  "@stylistic/semi-spacing": 2,
  "@stylistic/no-extra-semi": 2,

  // JSX
  "@stylistic/jsx-curly-spacing": [ 2, { when: "never", children: true, allowMultiline: false } ],
  "@stylistic/jsx-self-closing-comp": [ 2, { component: true, html: true } ],
  "@stylistic/jsx-equals-spacing": [ 2, "never" ],
  "@stylistic/jsx-curly-brace-presence": [ 2, {
    props: "always",
    children: "ignore",
    propElementValues: "always",
  } ],
  "@stylistic/jsx-tag-spacing": [ 2, {
    afterOpening: "never",
    beforeClosing: "never",
    closingSlash: "never",
    beforeSelfClosing: "always",
  } ],
  "@stylistic/jsx-pascal-case": [ 2, {
    allowAllCaps: false,
    allowNamespace: true,
    allowLeadingUnderscore: false,
  } ],

  // Misc.
  "@stylistic/padded-blocks": [ 2, { classes: "always", switches: "never" }, { allowSingleLineBlocks: false } ],
};

const reactRules: Linter.RulesRecord = {
  "react/react-in-jsx-scope": 0,
  "react/boolean-prop-naming": [ 2, { rule: "^is[A-Z]([A-Za-z0-9]?)+", validateNested: false } ],
  "react/void-dom-elements-no-children": 2,
};

const tsEslintRules: Linter.RulesRecord = {
  "@typescript-eslint/naming-convention": [
    "error", {
      selector: "typeAlias",
      format: [ "PascalCase" ],
      custom: { regex: "^T[A-Z]", match: true },
    },
    {
      selector: "interface",
      format: [ "PascalCase" ],
      custom: { regex: "^I[A-Z]", match: true },
    },
    {
      selector: "enum",
      format: [ "PascalCase" ],
      custom: { regex: "^(E)?[A-Z]", match: true },
    },
    {
      selector: "enumMember",
      format: [ "PascalCase" ],
    },
  ],
};

const tsReactRules: Linter.RulesRecord = {
  "react/prop-types": "off",
};

const jsDocRules: Linter.RulesRecord = {
  "jsdoc/require-description": 1,
  "jsdoc/require-jsdoc": [ 1, {
    require: {
      ArrowFunctionExpression: true,
      ClassDeclaration: true,
      ClassExpression: true,
      FunctionDeclaration: true,
      FunctionExpression: true,
      MethodDefinition: true,
    },
  } ],
};

const importRules: Linter.RulesRecord = {
  "import/newline-after-import": [
    "error",
    {
      count: 1,
    },
  ],
};

const customSecurityRules: Linter.RulesRecord = {
  "security/detect-object-injection": 0,
};

const commonPlugins: Linter.Config["plugins"] = {
  react: reactEslintPlugin,
  "react-hooks": reactHooksPlugin,
  "react-refresh": reactRefreshPlugin,
  "@stylistic": stylisticPlugin,
  jsdoc: jsDocPlugin,
  import: importPlugin,
  "jsx-a11y": jsxA11yPlugin,
  security: securityPlugin,
  promise: promisePlugin,
};

const commonRules: Linter.RulesRecord = {
  ...jsEslintPlugin.configs.recommended.rules,
  ...eslintRules,
  ...stylisticPlugin.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
    jsx: true,
    arrowParens: true,
    braceStyle: "1tbs",
    blockSpacing: true,
    quoteProps: "as-needed",
    commaDangle: "always-multiline",
    severity: "error",
  }).rules,
  ...stylisticRules,
  ...reactEslintPlugin.configs.recommended.rules,
  ...reactRules,
  ...importPlugin.flatConfigs.recommended.rules,
  ...reactRefreshPlugin.configs.vite.rules,
  ...jsxA11yPlugin.flatConfigs.recommended.rules,
  ...securityPlugin.configs.recommended.rules,
  ...customSecurityRules,
  ...promisePlugin.configs["flat/recommended"].rules,
};

const jsSetting: Linter.Config["settings"] = {
  react: {
    version: "detect",
  },
  "import/resolver": {
    alias: {
      map: [
        [ "@public", "./public" ],
        [ "@app", "./src/app" ],
        [ "@entities", "./src/entities" ],
        [ "@features", "./src/features" ],
        [ "@pages", "./src/pages" ],
        [ "@shared", "./src/shared" ],
        [ "@widgets", "./src/widgets" ],
      ],
      extensions: [ ".js", ".jsx" ],
    },
    node: true,
  },
};

const jsLanguageOptions: Linter.Config["languageOptions"] = {
  ecmaVersion: "latest",
  sourceType: "module",
  globals: {
    ...globals.browser,
    ...globals.builtin,
    ...globals.node,
    ...globals.nodeBuiltin,
    ...globals.serviceworker,
    ...globals.webextensions,
  },
  parser: espree as unknown as NonNullable<Linter.Config["languageOptions"]>["parser"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
  },
};

const jsRules: Linter.RulesRecord = {
  ...(jsDocPlugin.configs["flat/recommended"].rules as unknown as Linter.RulesRecord),
  ...jsDocRules,
  ...reactHooksPlugin.configs.flat.recommended?.rules ?? {},
  ...importRules,
};

const tsPlugins: Linter.Config["plugins"] = {
  "@typescript-eslint": tsEslintPlugin as unknown as ESLint.Plugin,
};

const tsLanguageOptions: Linter.Config["languageOptions"] = {
  parser: tsEslintParser,
  parserOptions: {
    projectService: true,
    tsconfigRootDir: import.meta.dirname,
    ecmaFeatures: {
      ecmaVersion: "latest",
      impliedStrict: true,
    },
  },
};

const tsSetting: Linter.Config["settings"] = {
  "import/resolver": {
    alias: {
      map: [
        [ "@public", "./public" ],
        [ "@app", "./src/app" ],
        [ "@entities", "./src/entities" ],
        [ "@features", "./src/features" ],
        [ "@pages", "./src/pages" ],
        [ "@shared", "./src/shared" ],
        [ "@widgets", "./src/widgets" ],
      ],
      extensions: [ ".js", ".jsx", ".ts", ".tsx" ],
    },
    node: true,
    typescript: {
      alwaysTryTypes: true,
      project: "./tsconfig.json",
    },
  },
};

const tsRules: Linter.RulesRecord = {
  ...[
    tsEslintPlugin.configs.strictTypeChecked,
    tsEslintPlugin.configs.stylisticTypeChecked,
  ]
    .flat()
    .filter((cfg = {}): cfg is { rules: Linter.RulesRecord } => "rules" in cfg)
    .reduce((acc, { rules }) => ({ ...acc, ...rules }), {}),
  ...tsEslintRules,
  ...tsReactRules,
  ...(jsDocPlugin.configs["flat/recommended-typescript"].rules ?? {}),
  ...jsDocRules,
  ...importPlugin.flatConfigs.typescript.rules,
};

const config: Linter.Config[] = [
  {
    name: "js",
    files: [ "**/*.{js,mjs,cjs,jsx,mjsx}" ],
    plugins: { ...commonPlugins },
    settings: jsSetting,
    languageOptions: jsLanguageOptions,
    rules: { ...commonRules, ...jsRules },
  },
  {
    name: "ts",
    files: [ "**/*.{ts,mts,cts,tsx,mtsx}" ],
    plugins: { ...commonPlugins, ...tsPlugins },
    settings: { ...jsSetting, ...tsSetting },
    languageOptions: { ...jsLanguageOptions, ...tsLanguageOptions },
    rules: { ...commonRules, ...tsRules },
  },
  {
    name: jsonEslintPlugin.meta.name,
    files: [ "**/*.json" ],
    plugins: { json: jsonEslintPlugin as unknown as ESLint.Plugin },
    language: "json/json",
  },
  {
    name: markdownEslintPlugin.meta.name,
    files: [ "**/*.md" ],
    plugins: { markdown: markdownEslintPlugin as unknown as ESLint.Plugin },
    language: "markdown/commonmark",
    processor: markdownEslintPlugin.processors.markdown,
  },
  {
    name: "ignores",
    ignores: [
      "node_modules/",
      "build/",
      "dist/",
      "public/",
      "assets/",
      ".temp/",
      ".cache/",
    ],
  },
  {
    name: "linter",
    linterOptions: {
      reportUnusedDisableDirectives: 2,
      reportUnusedInlineConfigs: 2,
    },
  },
];

export default config;
