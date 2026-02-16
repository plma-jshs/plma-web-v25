export const sizeScales = ["smaller", "small", "medium", "large", "larger"] as const
export const weightScales = ["light", "regular", "bold"] as const

export type RawFontWeight = Record<(typeof weightScales)[number], number>
export type FontWeight = Record<(typeof weightScales)[number], string>

export type RawFontScale = Record<
    (typeof sizeScales)[number],
    {
        size: number
        lineHeight: number
    }
>

export type FontScale = Record<
    (typeof sizeScales)[number],
    { size: string; lineHeight: string }
>

export type FontToken = `${(typeof sizeScales)[number]}-${(typeof weightScales)[number]}`

export type ResolvedFontToken = {
    scale: (typeof sizeScales)[number]
    weight: (typeof weightScales)[number]
}

export type FontMap = {
    scale: FontScale
    weight: FontWeight
}
