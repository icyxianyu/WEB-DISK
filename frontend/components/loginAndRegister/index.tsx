import styled from 'styled-components';
import { Card, Tabs, TabsProps } from "antd";
import Login from './Login';
import Register from './register';
import Qrcode from './qrCode';
const Container = styled(Card)`
    margin:auto;
    width:400px;
    height:400px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07), 
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    .ant-card-body{
        height:100%;
        user-select:none;
        .ant-tabs{
            height:100%;
            display:flex;
            .ant-tabs-content-holder{
                margin:auto;
            }
        }
    }


`;

export default function LoginAndRegister() {

    const items: TabsProps['items'] = [
        {
            key: "QRcode",
            label: "扫码登录",
            children: <Qrcode />
        },
        {
            key: 'login',
            label: '登录',
            children: <Login />,
        },
        {
            key: 'register',
            label: '注册',
            children: <Register />,
        }
    ]

    return (
        <Container>
            <Tabs items={items}
                size={'large'}
                centered></Tabs>
        </Container>
    )

}