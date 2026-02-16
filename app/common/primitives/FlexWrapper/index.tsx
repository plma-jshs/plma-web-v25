import { assignInlineVars } from "@vanilla-extract/dynamic"
import clsx from "clsx"

import { type Sprinkles, base, flex as flexProperty, sprinkles } from "./index.css"

const requiredProps = ["direction"] as const

interface FlexWrapperProps
    extends
        React.HTMLAttributes<HTMLDivElement>,
        Required<Pick<Sprinkles, (typeof requiredProps)[number]>>,
        Partial<Omit<Sprinkles, (typeof requiredProps)[number]>> {
    children?: React.ReactNode
    flex?: string
    className?: string
}

function FlexWrapper({
    children,
    direction,
    gap = "none",
    justify = "flex-start",
    align = "flex-start",
    padding = "none",
    flex = "",
    className = "",
    ...rest
}: FlexWrapperProps) {
    return (
        <div
            className={clsx(
                base,
                sprinkles({
                    direction,
                    justify,
                    align,
                    gap,
                    padding,
                }),
                className,
            )}
            style={assignInlineVars({ [flexProperty]: flex })}
            {...rest}
        >
            {children}
        </div>
    )
}

export default FlexWrapper
