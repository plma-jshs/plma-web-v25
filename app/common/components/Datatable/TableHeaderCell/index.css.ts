import { style } from "@vanilla-extract/css"

export const headerCellStyle = style({
    cursor: "pointer",
    border: "1px solid #e0e0e0",
    selectors: {
        "&:hover": {
            boxShadow: "inset 0 0 1px 2px rgba(0, 0, 0, 0.05)",
        },
    },
})

const moveButtonStyle = {}

export const moveUpButtonStyle = style({
    ...moveButtonStyle,
    marginRight: "-3px",
})

export const moveDownButtonStyle = style({
    ...moveButtonStyle,
    marginLeft: "-3px",
})
