import { type JSX, memo, useState } from "react"

import {
    type ColumnDef,
    type SortingState,
    type TableOptions,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

import TableBodyCell from "../TableBodyCell"
import TableHeaderCell from "../TableHeaderCell"
import { bodyColumnStyle, paginationPageStyle, tableStyle } from "./index.css"

interface DatatableProps<T> extends Omit<
    TableOptions<T>,
    "data" | "columns" | "getCoreRowModel" | "getSortedRowModel"
> {
    columns: ColumnDef<T, any>[]
    data: T[]
    defaultSorting?: SortingState
}

function Datatable<T>({
    columns,
    data,
    defaultSorting = [],
    ...tableOptions
}: DatatableProps<T>) {
    const [sorting, setSorting] = useState<SortingState>(defaultSorting)

    const table = useReactTable({
        ...tableOptions,
        data,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        enableSortingRemoval: false,
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
    })

    function handleHeaderCellClick(columnId: string) {
        const column = table.getColumn(columnId)
        if (!column) return
        column.toggleSorting()
    }

    return (
        <FlexWrapper direction="column" align="stretch" gap="medium">
            <FlexWrapper direction="column" align="stretch">
                <table className={tableStyle}>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        <TableHeaderCell
                                            header={header}
                                            handleHeaderCellClick={handleHeaderCellClick}
                                        />
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className={bodyColumnStyle}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        <TableBodyCell cell={cell} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </FlexWrapper>
            <FlexWrapper direction="row" justify="flex-end" align="center">
                <FlexWrapper
                    direction="row"
                    justify="center"
                    align="center"
                    className={paginationPageStyle}
                >
                    <Typography font="medium-regular" color="Default">
                        {String(table.getState().pagination.pageIndex + 1)}
                    </Typography>
                </FlexWrapper>
            </FlexWrapper>
        </FlexWrapper>
    )
}

const MemoizedDatatable = memo(Datatable, (prevProps, nextProps) => {
    return prevProps.data === nextProps.data && prevProps.columns === nextProps.columns
}) as <T>(props: DatatableProps<T>) => JSX.Element

export default MemoizedDatatable
