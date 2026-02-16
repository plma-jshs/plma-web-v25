import { paletteGenerator } from "./_base"

const shadeScales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const

export const CarbonBlack = paletteGenerator({
    light: 0.58,
    chroma: 0.0164,
    hue: 264.44,
    steps: [...shadeScales],
})
