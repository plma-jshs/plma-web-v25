export const sidebarConfig = {
    tabFields: [
        {
            legend: "상벌점",
            tabGroups: [
                {
                    header: {
                        icon: "clipboard",
                        content: "상벌점 관리",
                    },
                    body: [
                        {
                            icon: "clipboard-list",
                            content: "상벌점 현황",
                            route: "/points/view",
                        },
                        {
                            icon: "clipboard-plus",
                            content: "상벌점 부여",
                            route: "/points/apply",
                        },
                        {
                            icon: "clipboard-clock",
                            content: "상벌점 기록",
                            route: "/points/history",
                        },
                        {
                            icon: "clipboard-pen-line",
                            content: "상벌점 사유",
                            route: "/points/reason",
                        },
                    ],
                },
            ],
        },
        {
            legend: "기숙사 설비",
            tabGroups: [
                {
                    header: {
                        icon: "clipboard",
                        content: "휴대폰 보관함 관리",
                    },
                    body: [
                        {
                            icon: "clipboard-list",
                            content: "보관함 현황",
                            route: "/devices/case/view",
                        },
                    ],
                },
                {
                    header: {
                        icon: "clipboard",
                        content: "휴대폰 보관함 관리",
                    },
                    body: [
                        {
                            icon: "clipboard-list",
                            content: "보관함 현황",
                            route: "/devices/case/view",
                        },
                    ],
                },
            ],
        },
    ],
} as const
