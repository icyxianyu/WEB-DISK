import { createGlobalStyle } from "styled-components"
import Layout from '@/components/layout/layout';
import { ConfigProvider } from "antd";

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
            <Layout>
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
                    <Component {...pageProps} />
                </ConfigProvider>
            </Layout>
        </>
    )
}
export default MyApp