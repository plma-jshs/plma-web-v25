import { useState } from "react"

import Card from "@/common/components/Card"
import Datatable from "@/common/components/Datatable"
import FlexWrapper from "@/common/primitives/FlexWrapper"

type PointsViewTable = {
    stuid: number
    grade: number
    class: number
    num: number
    name: string
    totalPlus: number
    totalMinus: number
    totalEtc: number
    sum: number
}

function PointsView() {
    const [columns, setColumns] = useState([
        {
            accessorKey: "stuid",
            header: "학번",
        },
        {
            accessorKey: "grade",
            header: "학년",
        },
        {
            accessorKey: "class",
            header: "반",
        },
        {
            accessorKey: "num",
            header: "번호",
        },
        {
            accessorKey: "name",
            header: "성명",
        },
        {
            accessorKey: "totalPlus",
            header: "누계 상점",
        },
        {
            accessorKey: "totalMinus",
            header: "누계 벌점",
        },
        {
            accessorKey: "totalEtc",
            header: "기타",
        },
        {
            accessorKey: "sum",
            header: "합계",
        },
    ])

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
            name: "김철수",
            totalPlus: 20,
            totalMinus: 10,
            totalEtc: 0,
            sum: 10,
        },
    ])

    return (
        <Card title="상벌점 현황">
            <FlexWrapper direction="column" align="stretch">
                <Datatable columns={columns} data={data} />
            </FlexWrapper>
        </Card>
    )
}

export default PointsView
