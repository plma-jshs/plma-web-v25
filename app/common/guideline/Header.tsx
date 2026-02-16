import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

function Header() {
    return (
        <FlexWrapper
            direction="row"
            align="center"
            justify="flex-end"
            style={{
                padding: "12px",
                borderBottom: "1px solid #ccc",
            }}
        >
            <Typography font="medium-regular" color="Default">
                강재환
            </Typography>
        </FlexWrapper>
    )
}

export default Header
