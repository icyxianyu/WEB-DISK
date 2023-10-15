
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Space } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import TableComponent from './table';
import Toolbar from './toolbar';

const breadcrumbItems =
    [
        {
            title: <HomeOutlined />,
        },
        {
            title: (
                <>
                    <UserOutlined />
                    <span>Application List</span>
                </>
            ),
        },
        {
            title: 'Application',
        },
    ];

const StyleContainer = styled.div`
    padding: 24px 0 0 24px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const FileDirectory: React.FC = () => {
    const router = useRouter();
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const { sort } = router.query;

    return (
        <StyleContainer>
            {
                sort === "all" ?
                    <Space direction='vertical'>
                        <Toolbar
                            selectedRowKeys={selectedRowKeys} />
                        <Breadcrumb items={breadcrumbItems} />
                    </Space> : null
            }
            <TableComponent
                selectedRowKeys={selectedRowKeys}
                setSelectedRowKeys={setSelectedRowKeys} />
        </StyleContainer>
    );
};

export default FileDirectory;