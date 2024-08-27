import type { Config } from "tailwindcss"

const config: Config = {
   content: ["./src/**/*.{astro,ts,tsx,mdx}"],
   theme: {
      container: {
         center: true,
         padding: "1rem",
         screens: {
            sm: "100%",
            md: "100%",
            lg: "604px",
            xl: "604px",
            "2xl": "604px",
         },
      },
      extend: {
         fontSize: {
            xs: "0.85rem",
            sm: "0.95rem",
            base: "0.965rem",
            lg: "1.05rem",
         },
         colors: {
            border: "hsl(var(--border))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: "hsl(var(--primary))",
            "primary-darker": "hsl(var(--primary-darker))",
            secondary: "hsl(var(--secondary))",
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
         },
         fontFamily: {
            primary: "var(--font-primary)",
            secondary: "var(--font-secondary)",
         },
         boxShadow: {
            shadow: "var(--shadow)",
         },
      },
   },
   plugins: [],
}
export default config
