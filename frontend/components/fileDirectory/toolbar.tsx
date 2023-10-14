import { Button, Space } from 'antd'
import React from 'react'
import styled from 'styled-components';
import { UploadOutlined, DownloadOutlined, ShareAltOutlined, DeleteOutlined, FileAddOutlined } from '@ant-design/icons';
import SearchComponent from './search';
import IconButton from '../iconButton';

const StyleContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

interface Props {
    selectedRowKeys: React.Key[];
}

export default function Toolbar({ selectedRowKeys }: Props) {
    console.log(selectedRowKeys)
    return (

        <StyleContainer>
            {
                selectedRowKeys.length ?
                    <Space>
                        <IconButton
                            text="分享"
                            icon={<ShareAltOutlined />}
                            clickHandler={() => { }}
                        />
                        <IconButton
                            text="下载"
                            icon={<DownloadOutlined />}
                            clickHandler={() => { }}
                        />
                        <IconButton
                            text="删除"
                            icon={<DeleteOutlined />}
                            clickHandler={() => { }}
                        />

                    </Space>
                    : <>
                        <Space>
                            <IconButton
                                text="上传"
                                type='primary'
                                icon={<UploadOutlined />}
                                clickHandler={() => { }}
                            />
                            <IconButton
                                text="下载"
                                icon={<FileAddOutlined />}
                                clickHandler={() => { }}
                            />
                        </Space>
                        <SearchComponent />
                    </>
            }



        </StyleContainer>
    )
}
