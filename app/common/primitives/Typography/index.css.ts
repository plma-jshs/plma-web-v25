import { style } from "@vanilla-extract/css"
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles"

import { vars } from "@/styles"

const properties = defineProperties({
    properties: {
        color: vars.colors.Text,
        fontSize: Object.fromEntries(
            Object.entries(vars.fonts.scale).map(([key, val]) => [key, val.size]),
        ),
        fontWeight: vars.fonts.weight,
        lineHeight: Object.fromEntries(
            Object.entries(vars.fonts.scale).map(([key, val]) => [key, val.lineHeight]),
        ),
    },
    shorthands: {},
})

export const sprinkles = createSprinkles(properties)
export type Sprinkles = Parameters<typeof sprinkles>[0]
