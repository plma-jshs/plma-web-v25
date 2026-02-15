import Card from "@/common/components/Card"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

function Main() {
    return (
        <Card title="Title">
            <Typography font="large-bold" color="Default">
                Main Content
            </Typography>
            <Typography font="large-light" color="Default">
                This is the main content area. You can put any content here, such as
                articles, images, or other components.
            </Typography>
        </Card>
    )
}

export default Main
