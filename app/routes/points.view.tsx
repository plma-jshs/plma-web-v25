import { useState } from "react"

import { createColumnHelper } from "@tanstack/react-table"

import Card from "@/common/components/Card"
import Datatable from "@/common/components/Datatable"
import FlexWrapper from "@/common/primitives/FlexWrapper"
import Typography from "@/common/primitives/Typography"

type PointsViewTable = {
    stuid: number
    grade: 1 | 2 | 3
    class: 1 | 2 | 3 | 4
    num: number
    name: string
    totalPlus: number
    totalMinus: number
    totalEtc: number
    sum: number
}

function PointsView() {
    const columnHelper = createColumnHelper<PointsViewTable>()

    const columns = [
        columnHelper.accessor("stuid", {
            header: "학번",
            cell: ({ getValue }) => {
                const value = getValue()
                return (
                    <Typography font="medium-bold" color="Default">
                        {String(value)}
                    </Typography>
                )
            },
            meta: {
                isCustomCell: true,
            },
        }),
        columnHelper.accessor("grade", {
            header: "학년",
        }),
        columnHelper.accessor("class", {
            header: "반",
        }),
        columnHelper.accessor("num", {
            header: "번호",
        }),
        columnHelper.accessor("name", {
            header: "성명",
        }),
        columnHelper.accessor("totalPlus", {
            header: "누계 상점",
        }),
        columnHelper.accessor("totalMinus", {
            header: "누계 벌점",
        }),
        columnHelper.accessor("totalEtc", {
            header: "기타",
        }),
        columnHelper.accessor("sum", {
            header: "합계",
        }),
    ]

    const [data, setData] = useState<PointsViewTable[]>([
        {
            stuid: 1,
            grade: 1,
            class: 1,
            num: 1,
            name: "홍길동",
            totalPlus: 10,
            totalMinus: 5,
            totalEtc: 0,
            sum: 5,
        },
        {
            stuid: 2,
            grade: 1,
            class: 1,
            num: 2,
            name: "김철우",
            totalPlus: 20,
            totalMinus: 10,
            totalEtc: 0,
            sum: 10,
        },
    ])

    return (
        <Card title="상벌점 현황">
            <FlexWrapper direction="column" align="stretch">
                <Datatable
                    columns={columns}
                    data={data}
                    filters={{
                        grade: {
                            type: "multiOption",
                            placeholder: "학년",
                            options: [
                                {
                                    value: 1,
                                    label: "1학년",
                                },
                                {
                                    value: 2,
                                    label: "2학년",
                                },
                                {
                                    value: 3,
                                    label: "3학년",
                                },
                            ],
                        },
                        class: {
                            type: "multiOption",
                            placeholder: "반",
                            options: [
                                {
                                    value: 1,
                                    label: "1반",
                                },
                                {
                                    value: 2,
                                    label: "2반",
                                },
                                {
                                    value: 3,
                                    label: "3반",
                                },
                                {
                                    value: 4,
                                    label: "4반",
                                },
                            ],
                        },
                    }}
                    defaultSorting={[{ id: "stuid", desc: false }]}
                />
            </FlexWrapper>
        </Card>
    )
}

export default PointsView
