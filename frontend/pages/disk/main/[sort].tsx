import FileDirectory from '@/components/fileDirectory/fileDirectory';
import SortSider from '@/components/sortSlider/sortSider';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Sider, Content } = Layout

const StyledLayout = styled(Layout)`
    height:100%;
`;

export default function DeskHome() {

    return (
        <>
            <StyledLayout hasSider>
                <Sider width={200}>
                    <SortSider />
                </Sider>
                <Content>
                    <FileDirectory />
                </Content>
            </StyledLayout>
        </>
    )
} 