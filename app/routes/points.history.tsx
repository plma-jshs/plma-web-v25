import { useState } from "react"

import { createColumnHelper } from "@tanstack/react-table"

import Card from "@/common/components/Card"
import Datatable from "@/common/components/Datatable"
import { PointType } from "@/common/enum/pointType"

type PointsHistoryTable = {
    id: number
    baseDate: string
    teacher: string
    student: [number, string]
    content: [PointType, number]
    reason: string
    applyDate: string
    deleteButton: string
}

function PointsHistory() {
    const columnHelper = createColumnHelper<PointsHistoryTable>()

    const columns = [
        columnHelper.accessor("id", {
            header: "ID",
        }),
        columnHelper.accessor("baseDate", {
            header: "기준일자",
        }),
        columnHelper.accessor("teacher", {
            header: "교사",
        }),
        columnHelper.accessor("student", {
            header: "학생",
            cell: (info) => {
                const [stuid, name] = info.getValue()
                return <a href={`/students/${stuid}`}>{`${name} (${stuid})`}</a>
            },
            meta: {
                isCustomCell: true,
            },
        }),
        columnHelper.accessor("content", {
            header: "내용",
            cell: (info) => {
                const [type, point] = info.getValue()
                const typeText = type === PointType.PLUS ? "상점" : "벌점"
                return `${typeText} ${point}점`
            },
            filterFn: (row, columnId, filterValue) => {
                const [type] = row.getValue(columnId) as [PointType, number]

                if (filterValue.length === 0) return true

                return filterValue.some(
                    (filter: [PointType, number]) => filter[0] === type,
                )
            },
            meta: {
                isCustomCell: true,
            },
        }),
        columnHelper.accessor("reason", {
            header: "사유",
        }),
        columnHelper.accessor("applyDate", {
            header: "적용 날짜",
        }),
        columnHelper.accessor("deleteButton", {
            header: "삭제",
            cell: (info) => {
                const id = info.row.original.id
                return <button onClick={() => {}}>삭제</button>
            },
            meta: {
                isCustomCell: true,
                disableOrder: true,
            },
        }),
    ]

    const [data, setData] = useState<PointsHistoryTable[]>([
        {
            id: 1,
            baseDate: "2024-01-01",
            teacher: "김선생님",
            student: [1, "홍길동"],
            content: [PointType.PLUS, 10],
            reason: "우수한 성적",
            applyDate: "2024-01-02",
            deleteButton: "",
        },
        {
            id: 2,
            baseDate: "2024-01-01",
            teacher: "김선생님",
            student: [2, "김철수"],
            content: [PointType.MINUS, 5],
            reason: "지각",
            applyDate: "2024-01-02",
            deleteButton: "",
        },
    ])

    return (
        <Card title="상벌점 기록">
            <Datatable
                columns={columns}
                data={data}
                filters={{
                    content: {
                        type: "multiOption",
                        placeholder: "반영내용",
                        options: [
                            { value: [PointType.PLUS, 0], label: "상점" },
                            { value: [PointType.MINUS, 0], label: "벌점" },
                        ],
                    },
                }}
                defaultSorting={[{ id: "id", desc: true }]}
            ></Datatable>
        </Card>
    )
}

export default PointsHistory
