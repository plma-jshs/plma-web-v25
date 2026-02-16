import { tokenResolver } from "@/styles/fonts"
import { type FontToken } from "@/styles/fonts/_base"

import { type Sprinkles, sprinkles } from "./index.css"

const requiredProps = ["color"] as const

interface TypographyProps
    extends
        Required<Pick<Sprinkles, (typeof requiredProps)[number]>>,
        Partial<Omit<Sprinkles, (typeof requiredProps)[number]>> {
    font?: FontToken
    children?: string
}

function Typography({ children, color, font = "medium-regular" }: TypographyProps) {
    const { scale, weight } = tokenResolver(font)
    return (
        <p
            className={sprinkles({
                color,
                fontSize: scale,
                fontWeight: weight,
                lineHeight: scale,
            })}
        >
            {children}
        </p>
    )
}

export default Typography
