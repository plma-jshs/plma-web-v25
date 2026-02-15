import { Camera, ChevronLeft } from "lucide-react"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

function Tab() {
    return (
        <FlexWrapper
            direction="row"
            align="center"
            justify="space-between"
            style={{
                paddingInline: "12px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
            }}
        >
            <FlexWrapper
                direction="row"
                align="center"
                style={{ gap: "12px", paddingBlock: "8px" }}
            >
                <Camera size={20} color="#fff" />
                <Typography font="medium-regular" color="Default">
                    서비스 소개
                </Typography>
            </FlexWrapper>

            <ChevronLeft size={20} color="#fff" />
        </FlexWrapper>
    )
}

export default Tab
