import { globalStyle } from "@vanilla-extract/css"
import { style } from "@vanilla-extract/css"

import { vars } from "@/styles"

globalStyle("*", {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
})

globalStyle("html, body", {
    width: "100%",
    height: "100%",
})

export const AppWrapper = style({
    width: "100%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
})

export const SidebarWrapper = style({
    overflow: "hidden"
})

export const OutletWrapper = style({
    overflow: "auto",
    scrollbarWidth: "none",

    selectors: {
        [`&::-webkit-scrollbar`]: {
            display: "none",
        },
    },
})
