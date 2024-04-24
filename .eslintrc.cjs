/** @type {import("eslint").Linter.Config} */
const config = {
   parser: "@typescript-eslint/parser",
   parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
   },
   plugins: ["@typescript-eslint"],
   extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
   ],
   rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-return": "off",

      "@typescript-eslint/consistent-type-imports": [
         "warn",
         {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
         },
      ],
      "@typescript-eslint/no-unused-vars": [
         "warn",
         { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-misused-promises": [
         2,
         {
            checksVoidReturn: { attributes: false },
         },
      ],
   },
   ignorePatterns: ["src/types/supabase.ts"],
}

module.exports = config
