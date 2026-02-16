import { recipe } from "@vanilla-extract/recipes"

const tabBaseStyle = {
    borderRadius: "4px",
    cursor: "pointer",
}

export const tabHeaderStyle = recipe({
    base: tabBaseStyle,
    variants: {
        isHighlighted: {
            true: {
                background: "#007bff",
            },
            false: {
                selectors: {
                    "&:hover": {
                        background: "#495057",
                    },
                },
            },
        },
    },
    defaultVariants: {
        isHighlighted: false,
    },
})

export const tabBodyStyle = recipe({
    base: tabBaseStyle,
    variants: {
        isHighlighted: {
            true: {
                background: "#fff",
            },
            false: {
                selectors: {
                    "&:hover": {
                        background: "#495057",
                    },
                },
            },
        },
    },
    defaultVariants: {
        isHighlighted: false,
    },
})

export const tabHeaderButtonStyle = recipe({
    base: {
        transform: "rotate(0deg)",
        transition: "transform 0.3s ease",
    },
    variants: {
        isOpen: {
            true: {
                transform: "rotate(-90deg)",
            },
        },
    },
    defaultVariants: {
        isOpen: true,
    },
})
