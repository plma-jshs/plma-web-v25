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

import PageBlock, { type PageBlockType } from "./PageBlock"
import TableBodyCell from "./TableBodyCell"
import TableHeaderCell from "./TableHeaderCell"
import { bodyColumnStyle, paginationStyle, tableStyle } from "./index.css"

interface DatatableProps<T> extends Omit<
    TableOptions<T>,
    "data" | "columns" | "getCoreRowModel" | "getSortedRowModel"
> {
    columns: ColumnDef<T, any>[]
    data: T[]
    defaultSorting?: SortingState
}

function getPaginationItems(pageCount: number, page: number) {
    if (pageCount <= 4) {
        return Array.from({ length: pageCount }, (_, index) => index + 1)
    }

    if (page <= 3) {
        return [1, 2, 3, "bridge", pageCount]
    }

    if (page >= pageCount - 2) {
        return [1, "bridge", pageCount - 2, pageCount - 1, pageCount]
    }

    return [1, "bridge", page - 1, page, page + 1, "bridge", pageCount]
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

    function handlePageBlockClick(type: PageBlockType, page?: number) {
        switch (type) {
            case "prev":
                table.previousPage()
                break
            case "next":
                table.nextPage()
                break
            case "page":
                if (page !== undefined) {
                    table.setPageIndex(page - 1)
                }
                break
        }
    }

    const currentPage = table.getState().pagination.pageIndex + 1
    const totalPages = table.getPageCount()

    return (
        <FlexWrapper direction="column" align="stretch" gap="larger">
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
                <FlexWrapper direction="row" align="center" className={paginationStyle}>
                    <PageBlock
                        type="prev"
                        handleClick={() => handlePageBlockClick("prev")}
                        disabled={!table.getCanPreviousPage()}
                    />
                    {getPaginationItems(totalPages, currentPage).map((item, index) =>
                        item === "bridge" ? (
                            <PageBlock
                                key={`bridge-${index}`}
                                type="bridge"
                                handleClick={() => {}}
                                disabled
                            />
                        ) : (
                            <PageBlock
                                key={`page-${item}`}
                                type="page"
                                page={item as number}
                                hightlighted={item === currentPage}
                                handleClick={() =>
                                    handlePageBlockClick("page", item as number)
                                }
                            />
                        ),
                    )}
                    <PageBlock
                        type="next"
                        handleClick={() => handlePageBlockClick("next")}
                        disabled={!table.getCanNextPage()}
                    />
                </FlexWrapper>
            </FlexWrapper>
        </FlexWrapper>
    )
}

const MemoizedDatatable = memo(Datatable, (prevProps, nextProps) => {
    return prevProps.data === nextProps.data && prevProps.columns === nextProps.columns
}) as <T>(props: DatatableProps<T>) => JSX.Element

export default MemoizedDatatable
