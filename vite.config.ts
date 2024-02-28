import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, 'src', 'assets', 'svg')],
        symbolId: 'icon-[dir]-[name]'
      }),
      viteMockServe({
        enable: command == 'serve'
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnable: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    }
  }
})
