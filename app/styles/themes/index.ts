import { type NestedColors, getColorFromNested } from "../colors/primitives"
import { type NestedThemeType, type ThemeKeys, type ThemeType } from "./_base"
import { DarkTheme } from "./dark"
import { LightTheme } from "./light"

function extractColors<T>(obj: T): T {
    if (obj === null || typeof obj !== "object") return obj

    const resolved: Record<string, unknown> = (Array.isArray(obj) ? [] : {}) as Record<
        string,
        unknown
    >

    Object.entries(obj as Record<string, unknown>).forEach(([key, value]) => {
        if (value !== null && typeof value === "object") {
            resolved[key] = extractColors(value)
        } else if (typeof value === "string") {
            resolved[key] = getColorFromNested(value as NestedColors)
        } else {
            resolved[key] = value
        }
    })

    return resolved as T
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
