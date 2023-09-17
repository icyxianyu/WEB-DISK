import HeaderContainer from "@/components/header/header"
import SliderContainer from "@/components/slider/slider"
import { Layout } from 'antd';
import styled from "styled-components";
const { Header, Sider, Content } = Layout;

const Container = styled(Layout)`
    width:100%;
    height:100%;
`;

const StyledHeader = styled(Header)`
    box-shadow: 0px 1px 0px rgba(17,17,26,0.05), 0px 0px 8px rgba(17,17,26,0.1);
`;

const StyledSlider = styled(Sider)`
    box-shadow: 0px 0px 16px rgba(17,17,26,0.1), 0px 0px 0px ;
`;

export default function DeskHome() {

    return (
        <>
            <Container>
                <StyledHeader>
                    <HeaderContainer />
                </StyledHeader>
                <Layout hasSider>
                    <StyledSlider >
                        <SliderContainer />
                    </StyledSlider>
                    <Content >Content</Content>
                </Layout>
            </Container>
        </>
    )
}