


import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import styled from 'styled-components';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('我的文件', 'myDocument', <AppstoreOutlined />, [
        getItem('全部', 'all'),
        getItem('图片', 'image'),
        getItem('文档', 'document'),
        getItem('视频', 'video'),
        getItem('音频', 'audio'),
        getItem('其他', 'other'),
    ]),
    getItem('回收站', 'recycleBin', <MailOutlined />),
];

const StyleContainer = styled.div`
    padding: 10px;
`;

const SortSider: React.FC = () => {
    const router = useRouter();
    const { sort } = router.query;

    const onClick: MenuProps['onClick'] = (e) => {
        router.push(`./${e.key}`);
    };

    return (
        <StyleContainer>
            <Menu
                onClick={onClick}
                selectedKeys={[sort as string]}
                defaultOpenKeys={['myDocument']}
                style={{ 'borderInlineEnd': '0px' }}
                mode="inline"
                items={items}
            />

        </StyleContainer>
    );
};

export default SortSider;