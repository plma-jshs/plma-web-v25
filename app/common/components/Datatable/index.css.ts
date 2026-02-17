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

export const paginationStyle = style({
    borderRadius: "4px",
    overflow: "hidden",
})
