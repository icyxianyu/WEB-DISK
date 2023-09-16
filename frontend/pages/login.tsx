import Layout from '@/layout/layout';
import LoginAndRegister from '@/loginAndRegister';
import { styled } from 'styled-components';
const LoginContainer = styled.div`
    display:flex;
    height:100%;
    width:100%;
`;

export default function LoginPage() {

    return (
        <>
            <Layout>
                <LoginContainer>
                    <LoginAndRegister />
                </LoginContainer>
            </Layout>
        </>
    )

}