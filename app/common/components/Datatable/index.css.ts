import { style } from "@vanilla-extract/css"

export const tableStyle = style({
    border: "1px solid #e0e0e0",
    borderCollapse: "collapse",
})

export const bodyColumnStyle = style({
    selectors: {
        "&:nth-child(2n-1)": {
            backgroundColor: "#d0d0d0",
        },
    },
})

export const headerCellStyle = style({
    cursor: "pointer",
    border: "1px solid #e0e0e0",
    selectors: {
        "&:hover": {
            boxShadow: "inset 0 0 1px 2px rgba(0, 0, 0, 0.05)",
        },
    },
})

export const bodyCellStyle = style({
    border: "1px solid #c0c0c0",
})

export const filterStyle = style({
    background: "#e0e0e0",
    borderRadius: "4px",
})

export const paginationStyle = style({
    borderRadius: "4px",
    overflow: "hidden",
})
