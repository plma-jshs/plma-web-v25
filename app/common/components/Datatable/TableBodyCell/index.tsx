import { type Cell, flexRender } from "@tanstack/react-table"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

interface TableBodyCellProps<T> {
    cell: Cell<T, any>
}

function TableBodyCell<T>({ cell }: TableBodyCellProps<T>) {
    return (
        <FlexWrapper direction="column" align="center" padding="large">
            {(() => {
                if (cell.column.columnDef.meta?.isCustomCell) {
                    return flexRender(cell.column.columnDef.cell, cell.getContext())
                }

                const value = cell.getValue()

                return (
                    <Typography font="medium-regular" color="Light">
                        {String(value)}
                    </Typography>
                )
            })()}
        </FlexWrapper>
    )
}

export default TableBodyCell
