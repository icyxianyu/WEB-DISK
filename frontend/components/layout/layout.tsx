
import styled from 'styled-components';

const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;

`;


export default function Layout({ children }: any) {

    return (
        <LayoutContainer>
            {children}
        </LayoutContainer>

    )

}