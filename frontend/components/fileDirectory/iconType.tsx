import { FolderOutlined } from '@ant-design/icons'
import React from 'react'
interface Props {
    type: string
}

export default function IconType({ type }: Props) {

    return (
        <div style={{fontSize:"30px"}}>
            <FolderOutlined />
        </div>
    )
}
