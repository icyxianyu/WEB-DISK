
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
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

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    return (
        <StyleContainer>
            <Toolbar
                selectedRowKeys={selectedRowKeys} />
            <Breadcrumb items={breadcrumbItems} />
            <TableComponent
                selectedRowKeys={selectedRowKeys}
                setSelectedRowKeys={setSelectedRowKeys} />
        </StyleContainer>
    );
};

export default FileDirectory;