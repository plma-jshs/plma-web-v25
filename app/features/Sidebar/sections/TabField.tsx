import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import TabGroup, { type tabGroupType } from "../components/TabGroup"

interface TabFieldProps {
    legend?: string
    tabGroups: readonly tabGroupType[]
}

function TabField({ legend, tabGroups }: TabFieldProps) {
    return (
        <FlexWrapper direction="column" gap="small" align="stretch">
            {legend ? (
                <FlexWrapper direction="column" style={{ paddingInline: "12px" }}>
                    <Typography font="small-regular" color="Default">
                        {legend}
                    </Typography>
                </FlexWrapper>
            ) : null}

            <FlexWrapper direction="column" align="stretch">
                {tabGroups.map((tabGroup, index) => (
                    <TabGroup key={index} header={tabGroup.header} body={tabGroup.body} />
                ))}
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default TabField
