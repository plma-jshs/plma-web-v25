import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import { CardHeaderStyle, CardStyle } from "./index.css"

interface CardProps {
    title?: string
    children?: React.ReactNode
}

function Card({ title, children }: CardProps) {
    return (
        <FlexWrapper direction="column" align="stretch" className={CardStyle}>
            <FlexWrapper direction="row" padding="large" className={CardHeaderStyle}>
                <Typography font="medium-regular" color="Default">
                    {title}
                </Typography>
            </FlexWrapper>
            <FlexWrapper direction="column" align="stretch" padding="larger" gap="medium">
                {children}
            </FlexWrapper>
        </FlexWrapper>
    )
}

export default Card
