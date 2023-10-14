import type { ColumnsType } from 'antd/es/table';
import { Empty, Skeleton, Space, Table } from 'antd';
import styled from 'styled-components';
import IconType from './iconType';
import { useEffect, useState } from 'react';

interface DataType {
    key: React.Key;
    type: string;
    name: React.ReactNode;
    time: string;
    size: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: '文件名',
        dataIndex: 'name',
        // 开启排序图标
        sorter: true,
        sortDirections: ['descend'],

    },
    {
        title: '修改事件',
        dataIndex: 'time',
        sorter: true,
        sortDirections: ['descend'],
    },
    {
        title: '大小',
        dataIndex: 'size',
        sorter: true,
        sortDirections: ['descend'],
    },
];


const StyleContainer = styled.div`
    margin-top: 16px;
    cursor: pointer;
    width: 100%;
    user-select: none;
    flex:1;
    display:flex;
`;

interface Props {
    selectedRowKeys: React.Key[];
    setSelectedRowKeys: Function;
}

export default function TableComponent({ selectedRowKeys, setSelectedRowKeys }: Props) {
    const [data, setData] = useState<DataType[]>([]);
    const [load, setloading] = useState<boolean>(true);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    useEffect(() => {
        setTimeout(() => {
            const temp = []
            for (let i = 0; i < 46; i++) {
                temp.push({
                    key: i,
                    name: <Space><IconType type={"X"} />文件夹{i}</Space>,
                    time: new Date().toDateString(),
                    size: `200${i}`,
                    type: '文件夹',
                });
            }
            setData(temp);
            setloading(false);
        }, 1000)
    }, [])

    const onClickHandle = (record: DataType) => {

    }

    return (
        <StyleContainer>

            <Skeleton active
                loading={load}
            >
                {
                    data.length ? <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        scroll={{ y: 1100 }}
                        onRow={(record) => {
                            return {
                                onClick: () => { onClickHandle(record) }, // 点击行
                            };
                        }}
                    /> : <Empty style={{ margin: 'auto' }} />
                }
            </Skeleton>

        </StyleContainer>
    )
}
