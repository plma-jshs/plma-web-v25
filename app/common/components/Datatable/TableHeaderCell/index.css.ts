import { style } from "@vanilla-extract/css"

const moveButtonStyle = {}

export const moveUpButtonStyle = style({
    ...moveButtonStyle,
    marginRight: "-3px",
})

export const moveDownButtonStyle = style({
    ...moveButtonStyle,
    marginLeft: "-3px",
})
