import { defineConfig } from "i18next-cli";

export default defineConfig({
  locales: [ "en", "ru" ],
  extract: {
    input: [ "src/**/*.{ts,tsx}" ],
    output: "src/shared/i18n/locales/{{language}}/{{namespace}}.ts",
    outputFormat: "ts",
    defaultNS: "common",
    sort: true,
    preservePatterns: [
      "meta:*",
      "widgets:header.*",
    ],
  },
});
