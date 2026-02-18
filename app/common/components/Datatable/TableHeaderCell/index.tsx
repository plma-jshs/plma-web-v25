import { type Header, flexRender } from "@tanstack/react-table"
import { MoveDown, MoveUp } from "lucide-react"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

import { moveDownButtonStyle, moveUpButtonStyle } from "./index.css"

interface TableHeaderProps<T> {
    header: Header<T, any>
}

function TableHeaderCell<T>({ header }: TableHeaderProps<T>) {
    return (
        <FlexWrapper direction="row" justify="stretch" align="center" padding="medium">
            <FlexWrapper
                direction="column"
                justify="center"
                align="center"
                flex="1 1 auto"
            >
                {(() => {
                    const content = flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                    )

                    return typeof content === "string" ? (
                        <Typography font="medium-bold" color="Default">
                            {content}
                        </Typography>
                    ) : (
                        content
                    )
                })()}
            </FlexWrapper>
            {header.column.columnDef.meta?.disableOrder ? null : (
                <FlexWrapper direction="row" align="center">
                    <Icon
                        icon={MoveUp}
                        size={12}
                        color={header.column.getIsSorted() === "asc" ? "black" : "gray"}
                        className={moveUpButtonStyle}
                    />
                    <Icon
                        icon={MoveDown}
                        size={12}
                        color={header.column.getIsSorted() === "desc" ? "black" : "gray"}
                        className={moveDownButtonStyle}
                    />
                </FlexWrapper>
            )}
        </FlexWrapper>
    )
}

export default TableHeaderCell
