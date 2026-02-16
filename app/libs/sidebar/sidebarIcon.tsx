import { forwardRef } from "react"

import {
    Clipboard,
    ClipboardClock,
    ClipboardList,
    ClipboardPenLine,
    ClipboardPlus,
    type LucideIcon,
} from "lucide-react"

import { sidebarConfig } from "./sidebar-config"

type ExtractIcons<T> = T extends string
    ? never
    : T extends readonly any[]
      ? ExtractIcons<T[number]>
      : T extends object
        ? {
              [K in keyof T]: K extends "icon"
                  ? T[K] extends string
                      ? T[K]
                      : never
                  : ExtractIcons<T[K]>
          }[keyof T]
        : never

export type AllSidebarIcons = ExtractIcons<typeof sidebarConfig>

const sidebarIconMap: Record<AllSidebarIcons, LucideIcon> = {
    clipboard: forwardRef((props, ref) => <Clipboard ref={ref} {...props} />),
    "clipboard-list": forwardRef((props, ref) => <ClipboardList ref={ref} {...props} />),
    "clipboard-plus": forwardRef((props, ref) => <ClipboardPlus ref={ref} {...props} />),
    "clipboard-clock": forwardRef((props, ref) => (
        <ClipboardClock ref={ref} {...props} />
    )),
    "clipboard-pen-line": forwardRef((props, ref) => (
        <ClipboardPenLine ref={ref} {...props} />
    )),
}

export function SidebarIconResolver({
    icon,
    ...props
}: {
    icon: AllSidebarIcons
    [key: string]: any
}) {
    const IconComponent = sidebarIconMap[icon]

    if (!IconComponent) {
        throw new Error(`Icon "${icon}" not found in sidebarIconMap.`)
    }

    return <IconComponent {...props} />
}
