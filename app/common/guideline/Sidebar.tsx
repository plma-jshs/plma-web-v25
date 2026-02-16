import { useEffect } from "react"

import { useLocation } from "react-router"

import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import TabField from "@/features/Sidebar/sections/TabField"
import { sidebarConfig } from "@/libs/sidebar/sidebar-config"

function Sidebar() {
    return (
        <FlexWrapper
            direction="column"
            padding="medium"
            gap="medium"
            align="stretch"
            flex="1 1 auto"
            style={{ background: "#343a40", overflow: "hidden" }}
        >
            <FlexWrapper direction="column" gap="medium">
                <Typography font="large-bold" color="Default">
                    Sidebar
                </Typography>
            </FlexWrapper>
            <Line />
            <FlexWrapper
                direction="column"
                align="stretch"
                gap="larger"
                style={{ overflow: "auto", scrollbarWidth: "none", paddingBlock: "12px" }}
            >
                {sidebarConfig.tabFields.map((tabField, index) => (
                    <TabField
                        key={index}
                        legend={tabField.legend}
                        tabGroups={tabField.tabGroups}
                    />
                ))}
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default Sidebar
