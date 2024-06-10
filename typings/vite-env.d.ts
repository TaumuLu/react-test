/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare const __ROOT_VALUE__: number
declare const __COMMIT_HASH__: string

// declare module '*.svg?jsx' {
//   import { ReactElement } from 'react'
//   const src: ReactElement<any, any>
//   export default src
// }

declare module 'virtual:svg-icons-names' {
  const ids: string[]
  export default ids
}
