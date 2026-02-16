import { type JSX, memo, useState } from "react"

import {
    type ColumnDef,
    type SortingState,
    type TableOptions,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { MoveDown, MoveUp } from "lucide-react"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

import {
    bodyCellStyle,
    bodyColumnStyle,
    headerCellStyle,
    moveDownButtonStyle,
    moveUpButtonStyle,
    tableStyle,
} from "./index.css"

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
                                    <th
                                        key={header.id}
                                        className={headerCellStyle}
                                        onClick={() =>
                                            handleHeaderCellClick(header.column.id)
                                        }
                                    >
                                        <FlexWrapper
                                            direction="row"
                                            justify="stretch"
                                            align="center"
                                            padding="medium"
                                        >
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
                                                        <Typography
                                                            font="medium-bold"
                                                            color="Default"
                                                        >
                                                            {content}
                                                        </Typography>
                                                    ) : (
                                                        content
                                                    )
                                                })()}
                                            </FlexWrapper>
                                            {header.column.columnDef.meta
                                                ?.disableOrder ? null : (
                                                <FlexWrapper
                                                    direction="row"
                                                    align="center"
                                                >
                                                    <Icon
                                                        icon={MoveUp}
                                                        size={12}
                                                        color={
                                                            header.column.getIsSorted() ===
                                                            "asc"
                                                                ? "black"
                                                                : "gray"
                                                        }
                                                        className={moveUpButtonStyle}
                                                    />
                                                    <Icon
                                                        icon={MoveDown}
                                                        size={12}
                                                        color={
                                                            header.column.getIsSorted() ===
                                                            "desc"
                                                                ? "black"
                                                                : "gray"
                                                        }
                                                        className={moveDownButtonStyle}
                                                    />
                                                </FlexWrapper>
                                            )}
                                        </FlexWrapper>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className={bodyColumnStyle}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className={bodyCellStyle}>
                                        <FlexWrapper
                                            direction="column"
                                            align="center"
                                            padding="large"
                                        >
                                            {(() => {
                                                if (
                                                    cell.column.columnDef.meta
                                                        ?.isCustomCell
                                                ) {
                                                    return flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext(),
                                                    )
                                                }

                                                const value = cell.getValue()

                                                return (
                                                    <Typography
                                                        font="medium-regular"
                                                        color="Light"
                                                    >
                                                        {String(value)}
                                                    </Typography>
                                                )
                                            })()}
                                        </FlexWrapper>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </FlexWrapper>
            <FlexWrapper direction="row" justify="flex-end" align="center">
                <FlexWrapper direction="row">
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
