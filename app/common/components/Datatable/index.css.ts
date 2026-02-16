import { style } from "@vanilla-extract/css"

export const tableStyle = style({
    border: "1px solid #e0e0e0",
    borderCollapse: "collapse",
})

const cellStyle = {}

export const headerCellStyle = style({
    ...cellStyle,
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

export const bodyColumnStyle = style({
    selectors: {
        "&:nth-child(2n-1)": {
            backgroundColor: "#d0d0d0",
        },
    },
})

export const bodyCellStyle = style({
    ...cellStyle,
    border: "1px solid #c0c0c0",
})
