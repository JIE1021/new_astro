/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly APIFLASH_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
