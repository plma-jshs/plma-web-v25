import { recipe } from "@vanilla-extract/recipes"

export const tabGroupStyle = recipe({
    base: {
        display: "grid",
        gridTemplateRows: "0fr",
        transition: "grid-template-rows 0.3s cubic-bezier(0.2, 1, 0.2, 1)",
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
