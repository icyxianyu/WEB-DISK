import { Layout } from 'antd';
import styled from "styled-components";

const { Sider } = Layout
const StyledSlider = styled(Sider)`
    box-shadow: 0px 20px 16px rgba(17,17,26,0.1);
    z-index: 1;
`;

export default function SliderContainer() {

    return (
        <StyledSlider width={100}>
            slider
        </StyledSlider>
    )
}