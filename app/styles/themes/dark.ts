import { fontMap } from "../fonts"
import { type NestedThemeType } from "./_base"

export const DarkTheme = {
    fonts: fontMap,
    colors: {
        Background: {
            Page: "turquoise.300",
        },
        Text: {
            Default: "carbonBlack.600",
            Dark: "carbonBlack.800",
            Light: "turquoise.500",
        },
    },
} as const satisfies NestedThemeType
