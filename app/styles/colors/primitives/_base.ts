const shadeScales = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const

export type ColorValue = `oklch(${number} ${number} ${number})`

const L_MAX = 0.95
const L_MIN = 0.05

function normalize(step: number) {
    return (step - 500) / 450
}

export function paletteGenerator<T extends (typeof shadeScales)[number][]>({
    light,
    chroma,
    hue,
    steps,
    gamma = 1.4,
}: {
    light: number
    chroma: number
    hue: number
    steps: T
    gamma?: number
}): {
    [K in T[number]]: ColorValue
} {
    const result = {} as {
        [K in T[number]]: ColorValue
    }

    for (const step of steps) {
        const lightNormalized = normalize(step)
        const chromaNormalized = normalize(step)

        const sLight =
            lightNormalized < 0
                ? light + Math.pow(Math.abs(lightNormalized), gamma) * (L_MAX - light)
                : lightNormalized > 0
                  ? light - Math.pow(Math.abs(lightNormalized), gamma) * (light - L_MIN)
                  : light
        const sChroma = Math.pow(1 - Math.abs(chromaNormalized), gamma) * chroma

        const color: ColorValue = `oklch(${Number(sLight.toFixed(2))} ${Number(sChroma.toFixed(2))} ${hue})`

        result[step as T[number]] = color
    }

    return result
}
