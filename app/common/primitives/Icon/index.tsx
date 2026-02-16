import { type LucideIcon, type LucideProps } from "lucide-react"

import FlexWrapper from "../FlexWrapper"

interface IconProps extends LucideProps {
    icon: LucideIcon
}

function Icon({ icon: IconComponent, ...rest }: IconProps) {
    return (
        <FlexWrapper direction="column">
            <IconComponent {...rest} />
        </FlexWrapper>
    )
}

export default Icon
