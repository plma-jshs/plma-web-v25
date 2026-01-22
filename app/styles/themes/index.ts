import { getColorFromNested } from "../colors/primitives"
import { type NestedThemeType, type ThemeKeys, type ThemeType } from "./_base"
import { DarkTheme } from "./dark"
import { LightTheme } from "./light"

function extractColors<T extends Object>(obj: T): T {
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === "object") {
            obj[key as keyof T] = extractColors(value)
        } else getColorFromNested(value)
    })
    return obj
}

function colorResolver(theme: NestedThemeType): ThemeType {
    const resolvedColors: ThemeType["colors"] = extractColors(theme.colors)

    return {
        ...theme,
        colors: resolvedColors,
    }
}

export const Themes: Record<ThemeKeys, ThemeType> = {
    light: colorResolver(LightTheme),
    dark: colorResolver(DarkTheme),
}

export { type ThemeType }
