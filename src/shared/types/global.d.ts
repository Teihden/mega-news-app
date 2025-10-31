/* eslint-disable @typescript-eslint/naming-convention, no-unused-vars */

declare global {
  interface ImportMetaEnv {
    readonly API_URL?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

/* eslint-enable @typescript-eslint/naming-convention, no-unused-vars */

export {};
