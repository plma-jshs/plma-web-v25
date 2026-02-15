import Line from "@/common/components/Line"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"
import TabGroup from "@/features/Sidebar/TabGroup"

function Sidebar() {
    return (
        <FlexWrapper
            direction="column"
            padding="medium"
            gap="medium"
            align="stretch"
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
                style={{ overflow: "auto", scrollbarWidth: "none" }}
            >
                <TabGroup legend="Tab Group 1" />
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default Sidebar
