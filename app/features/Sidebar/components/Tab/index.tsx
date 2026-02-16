import { memo } from "react"

import { ChevronLeft } from "lucide-react"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import { type AllSidebarIcons, SidebarIconResolver } from "@/libs/sidebar/sidebarIcon"

import { tabBodyStyle, tabHeaderButtonStyle, tabHeaderStyle } from "./index.css"

export type tabType = {
    readonly icon: AllSidebarIcons
    readonly content: string
    readonly route: string
}

export interface TabProps extends tabType {
    type: "header" | "body"
    isOpen?: boolean
    isHighlighted: boolean
    handleClick: (mode: "header" | "body", route: string) => void
}

function Tab({
    icon,
    content,
    route,
    type,
    isOpen = true,
    isHighlighted,
    handleClick,
}: TabProps) {
    return (
        <FlexWrapper
            direction="row"
            align="center"
            justify="space-between"
            style={{
                paddingInline: "12px",
            }}
            className={
                type === "header"
                    ? tabHeaderStyle({ isHighlighted })
                    : tabBodyStyle({ isHighlighted })
            }
            onClick={() => handleClick(type, route)}
        >
            <FlexWrapper
                direction="row"
                align="center"
                style={{ gap: "12px", paddingBlock: "8px" }}
            >
                <SidebarIconResolver
                    icon={icon}
                    size={20}
                    color={type === "body" && isHighlighted ? "#000" : "#fff"}
                />
                <Typography
                    font="medium-regular"
                    color={type === "body" && isHighlighted ? "Dark" : "Default"}
                >
                    {content}
                </Typography>
            </FlexWrapper>

            {type === "header" && (
                <FlexWrapper
                    direction="column"
                    className={tabHeaderButtonStyle({ isOpen })}
                >
                    <ChevronLeft size={16} strokeWidth={3} color="#fff" />
                </FlexWrapper>
            )}
        </FlexWrapper>
    )
}

const MemoizedTab = memo(Tab, (prevProps, nextProps) => {
    return (
        prevProps.isOpen === nextProps.isOpen &&
        prevProps.isHighlighted === nextProps.isHighlighted
    )
})

export default MemoizedTab
