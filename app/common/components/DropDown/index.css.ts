import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

export const dropDownStyle = style({
    position: "relative",
    cursor: "pointer",
})

export const valueStyle = style({
    minWidth: "120px",
    background: "#fff",
    border: "1px solid #ccc",

    selectors: {
        "&:hover": {
            boxShadow: "inset 0 0 1px 2px rgba(0, 0, 0, 0.05)",
        },
    },
})

export const optionWrapperStyle = recipe({
    base: {
        width: "100%",
        display: "grid",
        background: "#fff",
        position: "absolute",
        top: "100%",
        left: 0,
        gridTemplateRows: "0fr",
        marginTop: "-1px",
    },
    variants: {
        open: {
            true: {
                gridTemplateRows: "1fr",
                border: "1px solid #ccc",
            },
        },
    },
})

export const optionStyle = recipe({
    base: {
        background: "#fff",
        borderRadius: "4px",
    },
    variants: {
        active: {
            true: {
                background: "#007bff",
            },
            false: {
                selectors: {
                    "&:hover": {
                        background: "#bfdeff",
                    },
                },
            },
        },
    },
})
