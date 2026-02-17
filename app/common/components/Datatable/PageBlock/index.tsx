import {
    Ban,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Ellipsis,
} from "lucide-react"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

import { pageBlockStyle } from "./index.css"

export type PageBlockType = "prev" | "page" | "bridge" | "next"

interface PageBlockProps {
    type: PageBlockType
    page?: number
    disabled?: boolean
    hightlighted?: boolean
    handleClick: () => void
}

function PageBlock({
    type,
    page,
    disabled = false,
    hightlighted = false,
    handleClick,
}: PageBlockProps) {
    return (
        <FlexWrapper
            direction="column"
            align="center"
            justify="center"
            onClick={disabled ? undefined : handleClick}
            className={pageBlockStyle}
        >
            {type === "page" ? (
                <Typography
                    font="medium-regular"
                    color={hightlighted ? "Light" : disabled ? "Dark" : "Default"}
                >
                    {String(page)}
                </Typography>
            ) : (
                <Icon
                    icon={(() => {
                        switch (type) {
                            case "prev":
                                return ChevronLeft
                            case "bridge":
                                return Ellipsis
                            case "next":
                                return ChevronRight
                            default:
                                return Ban
                        }
                    })()}
                    size={20}
                    color={disabled ? "#000" : "#fff"}
                />
            )}
        </FlexWrapper>
    )
}

export default PageBlock
