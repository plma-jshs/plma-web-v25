import { paletteGenerator } from "./_base"

const shadeScales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const

export const Turquoise = paletteGenerator({
    light: 0.6084,
    chroma: 0.0892,
    hue: 185.37,
    steps: [...shadeScales],
})
