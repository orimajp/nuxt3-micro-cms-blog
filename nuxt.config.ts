import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path' //追加
import { createCommonJS } from 'mlly' //追加
const { __dirname } = createCommonJS(import.meta.url) //追加
const { API_KEY, SERVICE_DOMAIN } = process.env

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // 配信フォルダをclientに
    srcDir: 'client/',
    // .envファイルの読み込み
    privateRuntimeConfig: {
        apiKey: API_KEY,
        serviceDomain: SERVICE_DOMAIN
    },
    css: [ '@/assets/css/style.css' ],
    buildModules: ['@nuxtjs/tailwindcss'],
    publicRuntimeConfig: {
        apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
        serviceDomain: process.env.NODE_ENV !== 'production' ? SERVICE_DOMAIN : undefined,
    },
    hooks: {
      'pages:extend'(pages) {
          pages.push({
              name: 'page',
              path: '/page/:p',
              file: resolve(__dirname, 'client/pages/index.vue')
          }),
          pages.push({
            name: 'tag',
            path: '/tag/:tagId/page/:p',
            file: resolve(__dirname, 'client/pages/index.vue')
        })
      }
  },
})
