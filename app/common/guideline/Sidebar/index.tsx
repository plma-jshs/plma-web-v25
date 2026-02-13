import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import { SidebarInnerStyle } from "./index.css"

function Sidebar() {
    return (
        <FlexWrapper direction="column" flex="1 1 auto" className={SidebarInnerStyle}>
            <FlexWrapper
                direction="column"
                padding="medium"
                gap="medium"
                align="stretch"
                flex="0"
            >
                <FlexWrapper direction="column" gap="medium">
                    <Typography font="large-bold" color="Default">
                        Sidebar
                    </Typography>
                </FlexWrapper>
                <Line />
                <FlexWrapper direction="column" gap="small">
                    <Typography font="large-light" color="Default">
                        This is a sidebar area. You can put any content here, such as
                        navigation links, user profiles, or additional information.
                    </Typography>
                </FlexWrapper>
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default Sidebar
