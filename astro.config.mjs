import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
   site: "https://vasyldev.cc",
   integrations: [react(), sitemap()],
   server: {
      port: 3000,
   },
})
