import LoginAndRegister from '@/components/loginAndRegister';
import { styled } from 'styled-components';

const LoginContainer = styled.div`
    display:flex;
    height:100%;
    width:100%;
`;

export default function LoginPage() {

    return (
        <>
            
                <LoginContainer>
                    <LoginAndRegister />
                </LoginContainer>
        </>
    )

}