import { fontMap } from "../fonts"
import { type NestedThemeType } from "./_base"

export const LightTheme = {
    fonts: fontMap,
    colors: {
        Background: {
            Page: "turquoise.100",
        },
        Text: {
            Default: "carbonBlack.600",
            Dark: "carbonBlack.800",
            Light: "turquoise.400",
        },
    },
} as const satisfies NestedThemeType
