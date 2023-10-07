
import { Layout } from 'antd';
import styled from 'styled-components';
import HeaderContainer from '../gobalHeader/header';
import SliderContainer from '../globalSider/sider';

const { Content } = Layout;

const LayoutContainer = styled(Layout)`
    width: 100vw;
    height: 100vh;
`;

export default function Layouts({ children }: any) {

    return (
        <LayoutContainer>
            <HeaderContainer />
            <Layout hasSider>
                <SliderContainer />
                <Content >{children}</Content>
            </Layout>
        </LayoutContainer >
    )

}