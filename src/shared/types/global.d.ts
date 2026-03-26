import "i18next";
import { defaultNS, resources } from "../i18n/resources";

/* eslint-disable @typescript-eslint/naming-convention, no-unused-vars */

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)["en"];
    enableSelector: true;
  }
}

declare global {
  interface ImportMetaEnv {
    readonly VITE_API_URL?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

/* eslint-enable @typescript-eslint/naming-convention, no-unused-vars */

export {};
