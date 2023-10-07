import { SwapOutlined } from '@ant-design/icons'
import { Avatar, Badge, Space } from 'antd'
import React from 'react'

export default function Upload() {
    return (
            <Badge>
                <Avatar icon={<SwapOutlined />} />
            </Badge>
    )
}
