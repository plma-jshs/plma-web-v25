import { type ThemeType } from "./_base"

export const DarkTheme = {
    fonts: "'Inter', sans-serif",
    colors: {
        Background: {
            Page: "turquoise.100",
        },
    },
} as const satisfies ThemeType
