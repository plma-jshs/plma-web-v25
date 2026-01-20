import { type NestedColors } from "../colors/primitives"

const ThemeNames = ["light", "dark"] as const
export type ThemeKeys = (typeof ThemeNames)[number]

export type NestedThemeType = {
    fonts: string
    colors: {
        Background: {
            Page: NestedColors
        }
    }
}

type ReplaceNestedType<T, From, To> = T extends From
    ? To
    : T extends object
      ? { [K in keyof T]: ReplaceNestedType<T[K], From, To> }
      : T

export type ThemeType = ReplaceNestedType<NestedThemeType, NestedColors, string>
