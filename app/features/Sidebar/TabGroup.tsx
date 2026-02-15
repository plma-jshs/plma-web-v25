import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import Tab from "./Tab"

interface TabGroupProps {
    legend?: string
}

function TabGroup({ legend }: TabGroupProps) {
    return (
        <FlexWrapper direction="column" gap="medium" align="stretch">
            {legend ? (
                <FlexWrapper direction="column" style={{ paddingInline: "8px" }}>
                    <Typography font="smaller-regular" color="Default">
                        {legend}
                    </Typography>
                </FlexWrapper>
            ) : null}

            <FlexWrapper direction="column" align="stretch">
                <Tab />
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default TabGroup
