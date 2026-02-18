import { PointType } from "@/common/enum/pointType"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import { pointChipStyle } from "./index.css"

interface PointChipProps {
    type: PointType
}

const PointName = {
    [PointType.PLUS]: "상점",
    [PointType.MINUS]: "벌점",
    [PointType.ETC]: "기타",
}

function PointChip({ type }: PointChipProps) {
    return (
        <FlexWrapper
            direction="column"
            padding="small"
            className={pointChipStyle({ type })}
            style={{ paddingInline: "8px" }}
        >
            <Typography font="small-bold" color="Default">
                {PointName[type]}
            </Typography>
        </FlexWrapper>
    )
}

export default PointChip
