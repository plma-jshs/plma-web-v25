import { createTheme, createThemeContract } from "@vanilla-extract/css"

import { Themes } from "./themes"
import type { ThemeKeys, ThemeType } from "./themes/_base"

const baseTheme: ThemeKeys = "light"

const themes: Record<ThemeKeys, string> = {} as Record<ThemeKeys, string>

const vars = createThemeContract<ThemeType>(Themes[baseTheme])

for (const themeName in Themes) {
    const theme = Themes[themeName as ThemeKeys]
    themes[themeName as ThemeKeys] = createTheme(vars, theme)
}

export { vars }
export default themes
