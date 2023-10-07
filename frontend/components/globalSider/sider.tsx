import { DiffOutlined, HomeOutlined, UserAddOutlined } from '@ant-design/icons';
import { Layout, Tabs } from 'antd';
import styled from "styled-components";
import IconText from '../Icon/IconText';

const { Sider } = Layout
const StyledSlider = styled(Sider)`
    box-shadow: 0px 20px 16px rgba(17,17,26,0.1);
    z-index: 1;

    .ant-tabs-tab{
        justify-content: center;
    }
    & div[datatype="IconText"]{
        margin: 30px 0;

    }
`;


export default function SliderContainer() {

    const items = [
        {
            label: <IconText
                direction='column'
                icon={<HomeOutlined />}
                text='首页'
                iconStyle={{ fontSize: '30px' }}
            />,
            key: 'home'
        }, {
            label: <IconText
                direction='column'
                icon={<DiffOutlined />}
                text='转发记录'
                iconStyle={{ fontSize: '30px' }}
            />,
            key: 'forward'
        }, {
            label: <IconText
                direction='column'
                icon={<UserAddOutlined />}
                text='消息中心'
                iconStyle={{ fontSize: '30px' }}
            />,
            key: 'message'
        }
    ]

    return (
        <StyledSlider width={100}>
            <Tabs
                centered={true}
                indicatorSize={0}
                tabPosition={'left'}
                items={items}
            />
        </StyledSlider>
    )
}