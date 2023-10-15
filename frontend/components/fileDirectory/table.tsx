'use client'
import type { ColumnsType } from 'antd/es/table';
import { Empty, Skeleton, Space, Table } from 'antd';
import styled from 'styled-components';
import IconType from './iconType';
import { useEffect, useState } from 'react';
import { useSwitch } from '@/hooks/useSwitch';
import { useRouter } from 'next/router';

interface DataType {
    key: React.Key;
    type: string;
    name: React.ReactNode;
    time: string;
    size: string;
}
interface Props {
    selectedRowKeys: React.Key[];
    setSelectedRowKeys: Function;
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

export default function TableComponent({ selectedRowKeys, setSelectedRowKeys }: Props) {
    const [data, setData] = useState<DataType[]>([]);
    const [load, , close, open] = useSwitch(true);
    const router = useRouter();

    const { pathname, query } = router;
    const { path, sort } = query;

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    useEffect(() => {
        open();
        console.log("path", path)
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
            close();

        }, 1000)
    }, [path])

    const onClickHandle = (record: DataType) => {
        // 修改 query
        const { key, type } = record;
        router.push({
            pathname,
            query: {
                path: key,
                sort: sort
            }
        })
    }

    return (
        <StyleContainer>
            <Skeleton active loading={load}>
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
                    /> : <Empty style={{ margin: "auto" }} />
                }
            </Skeleton>
        </StyleContainer>
    )
}
