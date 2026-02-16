import { createVar, style } from "@vanilla-extract/css"
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles"

export const flex = createVar()

export const base = style({ display: "flex", flex })

const properties = defineProperties({
    properties: {
        flexDirection: ["row", "column", "row-reverse", "column-reverse"],
        justifyContent: [
            "stretch",
            "flex-start",
            "center",
            "flex-end",
            "space-around",
            "space-between",
        ],
        alignItems: ["stretch", "flex-start", "center", "flex-end"],
        flexWrap: ["nowrap", "wrap", "wrap-reverse"],
        gap: {
            none: 0,
            small: "4px",
            medium: "8px",
            large: "12px",
            larger: "16px",
        },
        padding: {
            none: 0,
            small: "4px",
            medium: "8px",
            large: "12px",
            larger: "16px",
        },
    },
    shorthands: {
        direction: ["flexDirection"],
        justify: ["justifyContent"],
        align: ["alignItems"],
        wrap: ["flexWrap"],
    },
})

export const sprinkles = createSprinkles(properties)
export type Sprinkles = Parameters<typeof sprinkles>[0]
