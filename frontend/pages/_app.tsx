import { createGlobalStyle } from "styled-components"
import { ConfigProvider } from "antd";
import Layouts from "@/components/layout/layout";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

function MyApp({ Component, pageProps }: any) {
    return (
        <>
            <GlobalStyle />
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            headerBg: '#fff',
                            siderBg: '#fff',
                        },
                    },
                }}
            >
                <Layouts>
                    <Component {...pageProps} />
                </Layouts>
            </ConfigProvider>
        </>
    )
}
export default MyApp

{/* <Container>
<StyledHeader>
    <HeaderContainer />
</StyledHeader>
<Layout hasSider>
    <StyledSlider >
        <SliderContainer />
    </StyledSlider>
    <Content >Content</Content>
</Layout>
</Container> */}