import { useEffect, useState } from "react"

import { ChevronDown } from "lucide-react"

import FlexWrapper from "@/common/primitives/FlexWrapper"
import Icon from "@/common/primitives/Icon"
import Typography from "@/common/primitives/Typography"

import { dropDownStyle, optionStyle, optionWrapperStyle, valueStyle } from "./index.css"

interface DropDownProps<ColumnType> {
    options: {
        label: string
        value: ColumnType
    }[]
    value: ColumnType[]
    onChange: (value: ColumnType[]) => void
    isMulti?: boolean
    placeholder?: string
}

function DropDown<ColumnType>({
    options,
    value,
    onChange,
    isMulti = false,
    placeholder,
}: DropDownProps<ColumnType>) {
    const [open, setOpen] = useState(false)

    function handleOptionClick(option: ColumnType) {
        if (isMulti) {
            if (value.includes(option)) {
                onChange(value.filter((v) => v !== option))
            } else {
                onChange([...value, option])
            }
        } else {
            onChange([option])
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as HTMLElement
            if (!target.closest(`.${dropDownStyle}`)) {
                setOpen(false)
            }
        }
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    return (
        <FlexWrapper direction="column" align="stretch" className={dropDownStyle}>
            <FlexWrapper
                direction="row"
                justify="space-between"
                align="stretch"
                padding="medium"
                gap="large"
                className={valueStyle}
                style={{ paddingInline: "12px" }}
                onClick={() => setOpen((prev) => !prev)}
            >
                <Typography font="small-regular" color="Default">
                    {value
                        .map((v) => options.find((o) => o.value === v)?.label)
                        .sort()
                        .join(", ") ||
                        placeholder ||
                        "선택하세요"}
                </Typography>

                <FlexWrapper direction="column" align="stretch" justify="center">
                    <Icon icon={ChevronDown} size={16} />
                </FlexWrapper>
            </FlexWrapper>
            <div className={optionWrapperStyle({ open })}>
                <FlexWrapper
                    direction="column"
                    align="stretch"
                    style={{ overflow: "hidden" }}
                >
                    {options.map((option, index) => (
                        <FlexWrapper
                            key={`${option.value}-${index}`}
                            direction="column"
                            onClick={() => handleOptionClick(option.value)}
                            padding="small"
                            align="stretch"
                        >
                            <FlexWrapper
                                direction="column"
                                padding="small"
                                style={{ paddingInline: "8px" }}
                                className={optionStyle({
                                    active: value.includes(option.value),
                                })}
                            >
                                <Typography
                                    font="small-regular"
                                    color={
                                        value.includes(option.value) ? "Light" : "Default"
                                    }
                                >
                                    {option.label}
                                </Typography>
                            </FlexWrapper>
                        </FlexWrapper>
                    ))}
                </FlexWrapper>
            </div>
        </FlexWrapper>
    )
}

export default DropDown
