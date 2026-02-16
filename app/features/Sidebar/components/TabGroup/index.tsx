import { useEffect, useState } from "react"

import { useLocation, useNavigate } from "react-router"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import type { AllSidebarIcons } from "@/libs/sidebar/sidebarIcon"

import Tab, { type tabType } from "../Tab"
import { tabGroupStyle } from "./index.css"

export type tabGroupType = {
    header: {
        icon: AllSidebarIcons
        content: string
    }
    body: readonly tabType[]
}

type TabGroupProps = tabGroupType

function TabGroup({ header, body }: TabGroupProps) {
    const [isOpen, setIsOpen] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()

    function handleClick(mode: "header" | "body", route: string) {
        if (mode === "header") {
            setIsOpen(!isOpen)
        } else if (mode === "body" && route) {
            navigate(route)
        }
    }

    useEffect(() => {}, [location.pathname])

    return (
        <FlexWrapper direction="column" align="stretch">
            <Tab
                icon={header.icon}
                content={header.content}
                route=""
                type="header"
                isOpen={isOpen}
                isHighlighted={body.some((tab) => tab.route === location.pathname)}
                handleClick={handleClick}
            />
            <div className={tabGroupStyle({ isOpen })}>
                <FlexWrapper
                    direction="column"
                    align="stretch"
                    style={{ overflow: "hidden" }}
                >
                    <FlexWrapper
                        direction="column"
                        align="stretch"
                        gap="small"
                        style={{ paddingTop: "4px" }}
                    >
                        {body.map((tab, tabIndex) => (
                            <Tab
                                key={tabIndex}
                                icon={tab.icon}
                                content={tab.content}
                                route={tab.route}
                                type="body"
                                isHighlighted={tab.route === location.pathname}
                                handleClick={handleClick}
                            />
                        ))}
                    </FlexWrapper>
                </FlexWrapper>
            </div>
        </FlexWrapper>
    )
}

export default TabGroup
