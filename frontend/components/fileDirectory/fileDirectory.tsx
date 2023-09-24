
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import styled from 'styled-components';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
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
    padding: 24px;
`;

const FileDirectory: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);

    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <StyleContainer>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Breadcrumb
                items={breadcrumbItems}
            />
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </StyleContainer>
    );
};

export default FileDirectory;