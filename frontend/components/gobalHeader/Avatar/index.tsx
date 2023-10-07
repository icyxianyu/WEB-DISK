import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Badge, Space } from 'antd';

const AvatarContent: React.FC = () => (
    <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
);

export default AvatarContent;