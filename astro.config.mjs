import cloudflare from "@astrojs/cloudflare"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
   output: "server",
   integrations: [
      react(),
      tailwind({
         applyBaseStyles: false,
      }),
   ],
   server: {
      port: 3000,
   },
   experimental: {
      serverIslands: true,
   },
   adapter: cloudflare(),
})
