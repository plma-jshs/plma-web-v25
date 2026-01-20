import { type NestedColors, getColorFromNested } from "../colors/primitives"
import { type ThemeKeys, type ThemeType } from "./_base"
import { DarkTheme } from "./dark"
import { LightTheme } from "./light"

function colorResolver<T>(obj: T): T {
    if (typeof obj === "string" && obj.includes(".")) {
        return getColorFromNested(obj as NestedColors) as T
    }

    if (typeof obj === "object" && obj !== null) {
        const result: Record<string, any> = {}
        for (const key in obj) {
            result[key] = colorResolver(obj[key])
        }
        return result as T
    }

    return obj
}

export const Themes: Record<ThemeKeys, ThemeType> = {
    light: colorResolver(LightTheme),
    dark: colorResolver(DarkTheme),
}

export { type ThemeType }
