import {
    type FontMap,
    type FontScale,
    type FontToken,
    type FontWeight,
    type RawFontScale,
    type RawFontWeight,
    type ResolvedFontToken,
} from "./_base"

const rawFontScales = {
    smaller: { size: 12, lineHeight: 16 },
    small: { size: 14, lineHeight: 20 },
    medium: { size: 16, lineHeight: 24 },
    large: { size: 20, lineHeight: 28 },
    larger: { size: 24, lineHeight: 32 },
} as const satisfies RawFontScale

export const fontScales = Object.fromEntries(
    Object.entries(rawFontScales).map(([key, val]) => {
        return [key, { size: `${val.size}px`, lineHeight: `${val.lineHeight}px` }]
    }),
) as FontScale

const rawFontWeights = {
    light: 300,
    regular: 400,
    bold: 700,
} as const satisfies RawFontWeight

export const fontWeights = Object.fromEntries(
    Object.entries(rawFontWeights).map(([key, val]) => {
        return [key, val.toString()]
    }),
) as FontWeight

export const fontMap = {
    scale: fontScales,
    weight: fontWeights,
} as const satisfies FontMap

export function tokenResolver(token: FontToken): ResolvedFontToken {
    const [scale, weight] = token.split("-") as [keyof FontScale, keyof FontWeight]
    return { scale, weight }
}

export { type FontMap }
