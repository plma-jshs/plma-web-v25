import { z } from "zod"

import { PointType } from "@/common/enum/pointType"

export const PointSchema = z.object({
    id: z.number().int().nonnegative(),
    studentId: z.number().int().nonnegative(),
    teacherId: z.number().int().nonnegative(),
    point: z.number().int(),
    type: z.enum(PointType),
    baseDate: z.date(),
    updatedDate: z.date(),
    reasonId: z.number().int().nonnegative(),
    comment: z.string().max(500).nullable(),
})

export type Point = z.infer<typeof PointSchema>
