import { type NestedColors } from "../colors/primitives"
import { type FontMap } from "../fonts"

type ReplaceNestedType<T, From, To> = T extends From
    ? To
    : T extends object
      ? { [K in keyof T]: ReplaceNestedType<T[K], From, To> }
      : T

const ThemeNames = ["light", "dark"] as const
export type ThemeKeys = (typeof ThemeNames)[number]

type NestedColorsBundle = {
    Background: {
        Page: NestedColors
    }
    Text: {
        Default: NestedColors
        Dark: NestedColors
        Light: NestedColors
    }
}

type ColorsBundle = ReplaceNestedType<NestedColorsBundle, NestedColors, string>

export type NestedThemeType = {
    fonts: FontMap
    colors: NestedColorsBundle
}

export type ThemeType = {
    fonts: FontMap
    colors: ColorsBundle
}
