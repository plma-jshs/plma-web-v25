import { recipe } from "@vanilla-extract/recipes"

export const tabGroupStyle = recipe({
    base: {
        display: "grid",
        gridTemplateRows: "0fr",
        transition: "grid-template-rows 0.3s ease",
    },
    variants: {
        isOpen: {
            true: {
                gridTemplateRows: "1fr",
            },
            false: {
                gridTemplateRows: "0fr",
            },
        },
    },
    defaultVariants: {
        isOpen: true,
    },
})
