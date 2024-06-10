import childProcess from 'child_process'
import { resolve } from 'path'
import postCssPxToRem from 'postcss-pxtorem'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'

import pwa from './config/pwa'

let commitHash = ''
try {
  commitHash = childProcess.execSync('git rev-parse HEAD').toString()
} catch {
  console.error('commitHash 获取失败 vite.config.ts')
}

const envDir = './env'

const isTrue = flag => flag === 'true'

const rootValue = 192

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, resolve(__dirname, envDir), '')
  const isDev = command === 'serve'

  return {
    base: env.VITE_BASE_URL || '/',
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames(chunkInfo) {
            if (['no-hash.png'].includes(chunkInfo.name)) {
              return 'assets/[name][extname]'
            }
            return 'assets/[name]-[hash][extname]'
          },
        },
        // plugins: [visualizer({ open: true })],
      },
    },
    plugins: [
      // react({
      // babel: {
      //   plugins: [
      //     ['@babel/plugin-proposal-decorators', { legacy: true }],
      //     ['@babel/plugin-proposal-class-properties', { loose: true }],
      //   ],
      // },
      // }),
      isTrue(env.VITE_PWA_ENABLE) && pwa({ mode, isDev }),
    ].filter(Boolean),
    envDir,
    resolve: {
      alias: [
        {
          find: '@',
          replacement: () => resolve(__dirname, 'src'),
        },
        {
          find: /^~.+/,
          replacement: val => {
            return val.replace(/^~/, '')
          },
        },
      ] as any,
    },
    server: {
      host: '0.0.0.0',
      open: isTrue(env.VITE_OPEN),
      port: Number(env.VITE_PORT),
      proxy: {
        // '/api': {
        //   target: 'http://127.0.0.1:8089/',
        //   ws: true,
        //   changeOrigin: true,
        // },
      },
    },
    define: {
      __ROOT_VALUE__: JSON.stringify(rootValue),
      __COMMIT_HASH__: JSON.stringify(commitHash),
    },
    css: {
      preprocessorOptions: {
        // scss: {
        //   additionalData: `@use "sass:math"; @import "./src/styles/themes.scss"; @import "./src/styles/variable.scss"; @import "./src/styles/mixin.scss";`,
        // },
      },
      modules: {
        scopeBehaviour: 'local',
        generateScopedName: '[local]__[hash:base64:5]',
        globalModulePaths: [],
        localsConvention: 'camelCase',
      },
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: () => {
              // if (input.file.includes('.rem.scss')) {
              //   return otherRootValue
              // }
              return rootValue
            },
            propList: ['*'],
            exclude: input => {
              if (/rem\.scss$/.test(input)) {
                return false
              }
              return true
            },
          }),
        ],
      },
    },
  }
})
