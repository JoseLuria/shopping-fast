import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'
import preact from '@astrojs/preact'
import image from '@astrojs/image'

export default defineConfig({
  integrations: [
    tailwind(),
    preact(),
    image({
      erviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
})
