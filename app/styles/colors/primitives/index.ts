import { CarbonBlack } from "./CarbonBlack"
import { Turquoise } from "./Turquoise"

export const colors = {
    turquoise: Turquoise,
    carbonBlack: CarbonBlack,
}

type ColorKeys = keyof typeof colors
type NestedColorKeys<C extends ColorKeys> = C extends keyof typeof colors
    ? typeof colors extends string | number
        ? never
        : keyof (typeof colors)[C] & (string | number)
    : never

export type NestedColors = {
    [C in ColorKeys]: NestedColorKeys<C> extends never
        ? never
        : `${C}.${NestedColorKeys<C>}`
}[ColorKeys]

export function getColorFromNested(colorString: NestedColors): string {
    const [colorKey, shade] = colorString.split(".") as [
        ColorKeys,
        NestedColorKeys<ColorKeys>,
    ]

    const color = colors[colorKey]

    return color[shade] as string
}
