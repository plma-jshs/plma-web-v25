import { recipe } from "@vanilla-extract/recipes"

import { PointType } from "@/common/enum/pointType"

export const pointChipStyle = recipe({
    base: {
        borderRadius: "4px",
    },
    variants: {
        type: {
            [PointType.PLUS]: {
                backgroundColor: "#4CAF50",
            },
            [PointType.MINUS]: {
                backgroundColor: "#F44336",
            },
            [PointType.ETC]: {
                backgroundColor: "#FF9800",
            },
        },
    },
})
