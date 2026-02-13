import js from "@eslint/js"
import prettierConfig from "eslint-config-prettier"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
    {
        ignores: [
            "**/node_modules/**",
            "**/dist/**",
            "**/build/**",
            "**/coverage/**",
            "**/+types/**",
            "**/.react-router/**",
        ],
    },

    js.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: { globals: { ...globals.browser } },
        rules: {
            "no-empty-pattern": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-explicit-any": "off",
        },
        settings: { react: { version: "detect" } },
    },

    pluginReact.configs.flat["jsx-runtime"],
    prettierConfig,
])
