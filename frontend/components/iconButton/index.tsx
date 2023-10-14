import { Button, Space } from 'antd'
import React, { MouseEventHandler, ReactNode } from 'react'

interface Props {
    text: string
    type?: "text" | "link" | "default" | "primary" | "dashed" | undefined
    icon: ReactNode
    clickHandler: MouseEventHandler<HTMLElement>
}

export default function IconButton({ text, type = "default", icon, clickHandler }: Props) {

    return (
        <Button type={type}
            onClick={clickHandler}
        >
            {icon}
            {text}
        </Button>
    )
}
